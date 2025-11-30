import { Context, Next } from "hono";

export interface TenantContext {
  userId?: string;
  organizationId?: string;
  plan: string;
  ip: string;
}

declare module "hono" {
  interface ContextVariableMap {
    tenant: TenantContext;
  }
}

/**
 * Extract tenant context from request headers
 * In production, this would validate Clerk JWT and extract org info
 */
export async function tenantContextMiddleware(c: Context, next: Next) {
  // Get IP from various headers (handle proxies)
  const ip =
    c.req.header("x-forwarded-for")?.split(",")[0]?.trim() ||
    c.req.header("x-real-ip") ||
    "unknown";

  // In production, extract these from Clerk JWT
  // For now, use headers for development
  const userId = c.req.header("x-user-id");
  const organizationId = c.req.header("x-organization-id");
  const plan = c.req.header("x-plan") || "FREE";

  const tenant: TenantContext = {
    userId,
    organizationId,
    plan,
    ip,
  };

  c.set("tenant", tenant);

  await next();
}

/**
 * Require authenticated user
 */
export async function requireAuth(c: Context, next: Next) {
  const tenant = c.get("tenant");

  if (!tenant?.userId) {
    return c.json({ error: "Unauthorized", message: "Authentication required" }, 401);
  }

  await next();
}

/**
 * Require organization membership
 */
export async function requireOrganization(c: Context, next: Next) {
  const tenant = c.get("tenant");

  if (!tenant?.organizationId) {
    return c.json(
      { error: "Forbidden", message: "Organization membership required" },
      403
    );
  }

  await next();
}
