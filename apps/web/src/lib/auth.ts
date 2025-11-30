import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

/**
 * Get the current user's auth state (server-side)
 * Use in Server Components or Route Handlers
 */
export async function getAuth() {
  const { userId, orgId, sessionClaims } = await auth();

  return {
    userId,
    orgId,
    sessionClaims,
    isSignedIn: !!userId,
  };
}

/**
 * Get the current user object (server-side)
 * Use when you need full user data
 */
export async function getUser() {
  const user = await currentUser();
  return user;
}

/**
 * Require authentication, redirect to sign-in if not authenticated
 * Use at the top of protected Server Components
 */
export async function requireAuth() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return { userId };
}

/**
 * Require organization membership
 * Use for multi-tenant routes
 */
export async function requireOrg() {
  const { userId, orgId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  if (!orgId) {
    redirect("/select-org");
  }

  return { userId, orgId };
}

/**
 * Get tenant context from Clerk organization
 */
export async function getTenantContext() {
  const { orgId, sessionClaims } = await auth();

  return {
    tenantId: orgId,
    plan: (sessionClaims?.org_plan as string) || "FREE",
  };
}
