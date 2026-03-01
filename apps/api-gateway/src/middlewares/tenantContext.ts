import { verifyToken } from "@clerk/backend";
import { Context, Next } from "hono";
import { logger } from "@nebutra/logger";

export interface TenantContext {
  userId?: string;
  organizationId?: string;
  role?: string;
  plan: string;
  ip: string;
}

declare module "hono" {
  interface ContextVariableMap {
    tenant: TenantContext;
  }
}

/**
 * Extract and verify Clerk JWT from Authorization header, then populate tenant context.
 * If no token is present or verification fails the request is treated as unauthenticated
 * (no userId / organizationId). Downstream `requireAuth` / `requireOrganization` guards
 * are responsible for rejecting requests that need authentication.
 */
export async function tenantContextMiddleware(c: Context, next: Next) {
  // Extract client IP (handle proxies)
  const ip =
    c.req.header("x-forwarded-for")?.split(",")[0]?.trim() ||
    c.req.header("x-real-ip") ||
    "unknown";

  const tenant: TenantContext = {
    plan: "FREE",
    ip,
  };

  const authHeader = c.req.header("authorization");
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7)
    : undefined;

  if (token) {
    try {
      const payload = await verifyToken(token, {
        secretKey: process.env.CLERK_SECRET_KEY!,
      });

      const userId = payload.sub;
      const organizationId =
        typeof payload.org_id === "string" ? payload.org_id : undefined;
      const role =
        typeof payload.org_role === "string" ? payload.org_role : undefined;

      if (userId) tenant.userId = userId;
      if (organizationId) tenant.organizationId = organizationId;
      if (role) tenant.role = role;
    } catch (error) {
      // Log the error but treat the request as unauthenticated — do not throw.
      logger.warn("JWT verification failed, treating as unauthenticated", {
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }

  c.set("tenant", tenant);

  await next();
}

/**
 * Require authenticated user
 */
export async function requireAuth(c: Context, next: Next) {
  const tenant = c.get("tenant");

  if (!tenant?.userId) {
    return c.json(
      { error: "Unauthorized", message: "Authentication required" },
      401,
    );
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
      403,
    );
  }

  await next();
}
