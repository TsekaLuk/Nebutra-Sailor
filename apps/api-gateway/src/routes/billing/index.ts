/**
 * /api/v1/billing — Billing & subscription routes
 *
 * Thin proxy layer that delegates to @nebutra/billing package functions.
 * Auth + tenant context applied upstream.
 */

import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import {
  createCheckoutSession,
  createBillingPortalSession,
  getSubscription,
  checkUsageLimit,
} from "@nebutra/billing";
import { toApiError } from "@nebutra/errors";
import { getUsageSnapshot } from "../../middlewares/usageMetering.js";

export const billingRoutes = new OpenAPIHono();

// ── Schemas ───────────────────────────────────────────────────────────────────

const CheckoutRequestSchema = z.object({
  priceId: z.string().startsWith("price_"),
  successUrl: z.string().url(),
  cancelUrl: z.string().url(),
  trialDays: z.number().int().min(0).max(30).optional(),
});

const PortalRequestSchema = z.object({
  returnUrl: z.string().url(),
});

// ── Routes ────────────────────────────────────────────────────────────────────

const checkoutRoute = createRoute({
  method: "post",
  path: "/checkout",
  tags: ["Billing"],
  summary: "Create Stripe Checkout session",
  request: { body: { content: { "application/json": { schema: CheckoutRequestSchema } } } },
  responses: {
    200: { description: "Checkout session URL" },
    400: { description: "Invalid request" },
  },
});

billingRoutes.openapi(checkoutRoute, async (c) => {
  const tenant = c.get("tenant");
  const { priceId, successUrl, cancelUrl, trialDays } = c.req.valid("json");

  try {
    const session = await createCheckoutSession({
      customerId: tenant?.organizationId ?? "",
      priceId,
      successUrl,
      cancelUrl,
      trialDays,
    });
    return c.json({ url: session.url, sessionId: session.id });
  } catch (err) {
    const apiError = toApiError(err);
    return c.json({ error: apiError.message }, 400);
  }
});

const portalRoute = createRoute({
  method: "post",
  path: "/portal",
  tags: ["Billing"],
  summary: "Create Stripe Customer Portal session",
  request: { body: { content: { "application/json": { schema: PortalRequestSchema } } } },
  responses: {
    200: { description: "Billing portal URL" },
    400: { description: "Invalid request" },
  },
});

billingRoutes.openapi(portalRoute, async (c) => {
  const tenant = c.get("tenant");
  const { returnUrl } = c.req.valid("json");

  try {
    const session = await createBillingPortalSession(
      tenant?.organizationId ?? "",
      returnUrl,
    );
    return c.json({ url: session.url });
  } catch (err) {
    const apiError = toApiError(err);
    return c.json({ error: apiError.message }, 400);
  }
});

const subscriptionRoute = createRoute({
  method: "get",
  path: "/subscription",
  tags: ["Billing"],
  summary: "Get current subscription",
  responses: {
    200: { description: "Subscription details" },
    404: { description: "No active subscription" },
  },
});

billingRoutes.openapi(subscriptionRoute, async (c) => {
  const tenant = c.get("tenant");

  try {
    const sub = await getSubscription(tenant?.organizationId ?? "");
    if (!sub) return c.json({ error: "No active subscription" }, 404);
    return c.json(sub);
  } catch (err) {
    const apiError = toApiError(err);
    return c.json({ error: apiError.message }, 400);
  }
});

const usageRoute = createRoute({
  method: "get",
  path: "/usage",
  tags: ["Billing"],
  summary: "Get current usage and limits",
  responses: {
    200: { description: "Usage data" },
  },
});

billingRoutes.openapi(usageRoute, async (c) => {
  const tenant = c.get("tenant");
  const orgId = tenant?.organizationId ?? "";

  try {
    const [snapshot, limit] = await Promise.all([
      getUsageSnapshot(orgId),
      checkUsageLimit(orgId, "api_calls").catch(() => null),
    ]);

    return c.json({
      period: snapshot.period,
      apiCalls: {
        used: snapshot.apiCalls,
        limit: (limit as { limit?: number } | null)?.limit ?? null,
        percentUsed:
          (limit as { limit?: number } | null)?.limit
            ? Math.round((snapshot.apiCalls / ((limit as { limit: number }).limit)) * 100)
            : null,
      },
      aiTokens: {
        used: snapshot.aiTokens,
      },
    });
  } catch (err) {
    const apiError = toApiError(err);
    return c.json({ error: apiError.message }, 500);
  }
});
