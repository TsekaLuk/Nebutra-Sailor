/**
 * RBAC Middleware Integration Tests
 *
 * Tests requireRole() from apps/api-gateway/src/middlewares/tenantContext.ts
 * using a minimal Hono app with the header-based tenant context fallback.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { OpenAPIHono } from "@hono/zod-openapi";

// ---------------------------------------------------------------------------
// Mock @clerk/backend so verifyToken is never invoked during tests.
// All test cases use header-based context (no JWT), so the mock never needs
// to return a real payload — it just needs to not throw on import.
// ---------------------------------------------------------------------------
vi.mock("@clerk/backend", () => ({
  verifyToken: vi.fn().mockRejectedValue(new Error("No token in tests")),
}));

// Mock @nebutra/logger to suppress log output during tests
vi.mock("@nebutra/logger", () => ({
  logger: {
    warn: vi.fn(),
    error: vi.fn(),
    info: vi.fn(),
  },
}));

import {
  tenantContextMiddleware,
  requireRole,
} from "@/middlewares/tenantContext.js";
import { ROLES, ADMIN_ROLES } from "@/config/roles.js";

// ---------------------------------------------------------------------------
// Test application factory
// ---------------------------------------------------------------------------

/**
 * Creates a minimal Hono app wired with tenantContextMiddleware and a single
 * GET route protected by the provided role guard.
 */
function makeApp(...allowedRoles: string[]) {
  const app = new OpenAPIHono();
  app.use("*", tenantContextMiddleware);
  app.get("/protected", requireRole(...allowedRoles), (c) =>
    c.json({ ok: true }),
  );
  return app;
}

// ---------------------------------------------------------------------------
// Shared app for ADMIN_ROLES tests
// ---------------------------------------------------------------------------
const adminApp = makeApp(...ADMIN_ROLES);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function get(
  app: OpenAPIHono,
  path: string,
  headers?: Record<string, string>,
) {
  return app.request(path, {
    method: "GET",
    headers: headers ?? {},
  });
}

function adminRequest(headers?: Record<string, string>) {
  return get(adminApp, "/protected", headers);
}

// ---------------------------------------------------------------------------
// Reset mocks before each test
// ---------------------------------------------------------------------------

beforeEach(() => {
  vi.clearAllMocks();
});

// ===========================================================================
// requireRole — unauthenticated
// ===========================================================================

describe("requireRole — unauthenticated", () => {
  it("returns 401 when no auth headers and no JWT are present", async () => {
    const res = await adminRequest();

    expect(res.status).toBe(401);
    const body = await res.json();
    expect(body.error).toBeDefined();
  });

  it("returns 401 error body when x-organization-id is present but x-user-id is absent", async () => {
    const res = await adminRequest({ "x-organization-id": "org-456" });

    expect(res.status).toBe(401);
    const body = await res.json();
    expect(body.error).toMatch(/[Uu]nauthorized/);
  });
});

// ===========================================================================
// requireRole — missing organization
// ===========================================================================

describe("requireRole — missing organization", () => {
  it("returns 403 when user is authenticated but has no organizationId", async () => {
    const res = await adminRequest({ "x-user-id": "user-123" });

    expect(res.status).toBe(403);
    const body = await res.json();
    expect(body.error).toBeDefined();
  });
});

// ===========================================================================
// requireRole — insufficient role
// ===========================================================================

describe("requireRole — insufficient role", () => {
  it("returns 403 when user has org:member role and route requires ADMIN_ROLES", async () => {
    const res = await adminRequest({
      "x-user-id": "user-123",
      "x-organization-id": "org-456",
      "x-role": ROLES.MEMBER,
    });

    expect(res.status).toBe(403);
  });

  it("returns 403 when user has org:viewer role and route requires ADMIN_ROLES", async () => {
    const res = await adminRequest({
      "x-user-id": "user-123",
      "x-organization-id": "org-456",
      "x-role": ROLES.VIEWER,
    });

    expect(res.status).toBe(403);
  });

  it("returns 403 when user has no role header and route requires ADMIN_ROLES", async () => {
    const res = await adminRequest({
      "x-user-id": "user-123",
      "x-organization-id": "org-456",
    });

    expect(res.status).toBe(403);
  });

  it("403 response body includes 'required' field listing the allowed roles", async () => {
    const res = await adminRequest({
      "x-user-id": "user-123",
      "x-organization-id": "org-456",
      "x-role": ROLES.MEMBER,
    });

    expect(res.status).toBe(403);
    const body = await res.json();
    expect(body.required).toBeDefined();
    expect(Array.isArray(body.required)).toBe(true);
    expect(body.required).toContain(ROLES.ADMIN);
    expect(body.required).toContain(ROLES.OWNER);
  });

  it("403 response body includes 'current' field with the user's actual role", async () => {
    const res = await adminRequest({
      "x-user-id": "user-123",
      "x-organization-id": "org-456",
      "x-role": ROLES.MEMBER,
    });

    expect(res.status).toBe(403);
    const body = await res.json();
    expect(body.current).toBe(ROLES.MEMBER);
  });

  it("403 response body has current: null when user has no role", async () => {
    const res = await adminRequest({
      "x-user-id": "user-123",
      "x-organization-id": "org-456",
    });

    expect(res.status).toBe(403);
    const body = await res.json();
    expect(body.current).toBeNull();
  });
});

// ===========================================================================
// requireRole — authorized access
// ===========================================================================

describe("requireRole — authorized access", () => {
  it("returns 200 when user has org:admin role and route requires ADMIN_ROLES", async () => {
    const res = await adminRequest({
      "x-user-id": "user-123",
      "x-organization-id": "org-456",
      "x-role": ROLES.ADMIN,
    });

    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.ok).toBe(true);
  });

  it("returns 200 when user has org:owner role and route requires ADMIN_ROLES", async () => {
    const res = await adminRequest({
      "x-user-id": "user-123",
      "x-organization-id": "org-456",
      "x-role": ROLES.OWNER,
    });

    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.ok).toBe(true);
  });

  it("returns 200 when user has the single exact role required by the route", async () => {
    const ownerOnlyApp = makeApp(ROLES.OWNER);

    const res = await get(ownerOnlyApp, "/protected", {
      "x-user-id": "user-999",
      "x-organization-id": "org-456",
      "x-role": ROLES.OWNER,
    });

    expect(res.status).toBe(200);
  });

  it("returns 403 when user has admin role but route requires owner-only", async () => {
    const ownerOnlyApp = makeApp(ROLES.OWNER);

    const res = await get(ownerOnlyApp, "/protected", {
      "x-user-id": "user-999",
      "x-organization-id": "org-456",
      "x-role": ROLES.ADMIN,
    });

    expect(res.status).toBe(403);
    const body = await res.json();
    expect(body.required).toEqual([ROLES.OWNER]);
    expect(body.current).toBe(ROLES.ADMIN);
  });
});

// ===========================================================================
// requireRole — header aliases (legacy compatibility)
// ===========================================================================

describe("requireRole — legacy header aliases", () => {
  it("accepts x-tenant-id as an alias for x-organization-id", async () => {
    const res = await adminRequest({
      "x-user-id": "user-123",
      "x-tenant-id": "org-456",
      "x-role": ROLES.ADMIN,
    });

    // x-tenant-id should map to organizationId so the role check passes
    expect(res.status).toBe(200);
  });
});
