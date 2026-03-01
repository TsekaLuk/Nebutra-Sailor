import { Hono } from "hono";
import type { ContentfulStatusCode } from "hono/utils/http-status";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { env } from "@/config/env.js";

const eventContextSchema = z
  .object({
    tenantId: z.string().min(1),
    occurredAt: z.union([z.string().min(1), z.date()]),
  })
  .passthrough();

const eventEnvelopeSchema = z
  .object({
    eventName: z.string().min(1),
    context: eventContextSchema,
    payload: z.record(z.unknown()).default({}),
    eventId: z.string().min(1).optional(),
    source: z.string().min(1).default("web"),
  })
  .passthrough();

const ingestRequestSchema = z.object({
  events: z.array(eventEnvelopeSchema).min(1).max(1000),
});

export const eventRoutes = new Hono();

eventRoutes.post(
  "/ingest",
  zValidator("json", ingestRequestSchema),
  async (c) => {
    const payload = c.req.valid("json");
    const tenant = c.get("tenant");
    const serviceUrl = env.EVENT_INGEST_SERVICE_URL ?? "http://localhost:8008";

    const tenantHeader =
      c.req.header("x-organization-id") ||
      c.req.header("x_organization_id") ||
      c.req.header("x-tenant-id") ||
      c.req.header("x_tenant_id") ||
      tenant?.organizationId;

    const headers: Record<string, string> = {
      "content-type": "application/json",
    };
    if (tenantHeader) {
      headers["x-organization-id"] = tenantHeader;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);

    let response: Response;
    try {
      response = await fetch(`${serviceUrl}/api/v1/events/ingest`, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
    } catch (error) {
      clearTimeout(timeout);
      return c.json(
        {
          error: "Event ingest service unavailable",
          message: error instanceof Error ? error.message : "Unknown error",
        },
        502,
      );
    }

    clearTimeout(timeout);

    const raw = await response.text();
    if (!raw) {
      return c.body(null, response.status as ContentfulStatusCode);
    }

    try {
      const parsed = JSON.parse(raw) as unknown;
      return c.json(parsed, response.status as ContentfulStatusCode);
    } catch {
      return c.text(raw, response.status as ContentfulStatusCode);
    }
  },
);
