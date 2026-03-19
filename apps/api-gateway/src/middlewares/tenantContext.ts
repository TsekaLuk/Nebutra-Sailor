import { verifyToken } from "@clerk/backend";
import { logger } from "@nebutra/logger";
import type { Context, Next } from "hono";

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

  // Header-based fallback for service-to-service calls.
  // Canonical headers:
  //   - x-user-id
  //   - x-organization-id
  // Legacy compatibility:
  //   - x-tenant-id (mapped to organizationId)
  const headerUserId = c.req.header("x-user-id") || c.req.header("x_user_id") || undefined;
  const headerOrganizationId =
    c.req.header("x-organization-id") ||
    c.req.header("x_organization_id") ||
    c.req.header("x-tenant-id") ||
    c.req.header("x_tenant_id") ||
    undefined;
  const headerRole = c.req.header("x-role") || c.req.header("x_role") || undefined;
  const headerPlan = c.req.header("x-plan") || c.req.header("x_plan") || undefined;

  if (headerUserId) tenant.userId = headerUserId;
  if (headerOrganizationId) tenant.organizationId = headerOrganizationId;
  if (headerRole) tenant.role = headerRole;
  if (headerPlan) tenant.plan = headerPlan;

  const authHeader = c.req.header("authorization");
  const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : undefined;

  if (token) {
    try {
      const payload = await verifyToken(token, {
        secretKey: process.env.CLERK_SECRET_KEY!,
      });

      const userId = payload.sub;
      const organizationId = typeof payload.org_id === "string" ? payload.org_id : undefined;
      const role = typeof payload.org_role === "string" ? payload.org_role : undefined;

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
    return c.json({ error: "Forbidden", message: "Organization membership required" }, 403);
  }

  await next();
}

/**
 * Require specific organization roles.
 * Pass one or more allowed roles — user must have at least one.
 * Clerk org_role values: "org:owner", "org:admin", "org:member", "org:viewer"
 */
export function requireRole(...allowedRoles: string[]) {
  return async (c: Context, next: Next) => {
    const tenant = c.get("tenant");

    if (!tenant?.userId) {
      return c.json({ error: "Unauthorized", message: "Authentication required" }, 401);
    }

    if (!tenant?.organizationId) {
      return c.json({ error: "Forbidden", message: "Organization membership required" }, 403);
    }

    if (!tenant?.role || !allowedRoles.includes(tenant.role)) {
      return c.json(
        {
          error: "Forbidden",
          message: `Insufficient permissions. Required: ${allowedRoles.join(" or ")}`,
          required: allowedRoles,
          current: tenant.role ?? null,
        },
        403,
      );
    }

    await next();
  };
}
