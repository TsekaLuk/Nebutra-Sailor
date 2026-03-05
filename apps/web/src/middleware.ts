import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/onboarding(.*)",
  "/select-org(.*)",
  "/sso-callback(.*)",
  "/demo(.*)",
  "/api/webhook(.*)",
]);

// Check if Clerk is configured
const hasClerkKey = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

// Fail-closed: refuse to start in production without Clerk config
if (!hasClerkKey && process.env.NODE_ENV === "production") {
  throw new Error(
    "[Nebutra] NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is not set. " +
      "Authentication middleware cannot start. Set this env var or configure auth.",
  );
}

/**
 * Build a Content-Security-Policy header string with a per-request nonce.
 *
 * In development, `'unsafe-inline'` and `'unsafe-eval'` are included alongside
 * the nonce because React Fast Refresh and Next.js dev overlays require them.
 * Browsers that support nonces ignore `'unsafe-inline'` automatically.
 */
function buildCsp(nonce: string): string {
  const isDev = process.env.NODE_ENV === "development";

  const scriptSrc = [
    "'self'",
    `'nonce-${nonce}'`,
    "'strict-dynamic'",
    "https://clerk.accounts.dev",
    "https://*.clerk.accounts.dev",
    ...(isDev ? ["'unsafe-inline'", "'unsafe-eval'"] : []),
  ].join(" ");

  const styleSrc = [
    "'self'",
    `'nonce-${nonce}'`,
    ...(isDev ? ["'unsafe-inline'"] : []),
  ].join(" ");

  return [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    `style-src ${styleSrc}`,
    "img-src 'self' data: blob: https://img.clerk.com https://*.clerk.accounts.dev",
    "font-src 'self' data:",
    "connect-src 'self' https://clerk.accounts.dev https://*.clerk.accounts.dev https://api.clerk.com wss://*.clerk.accounts.dev",
    "frame-src https://clerk.accounts.dev https://*.clerk.accounts.dev",
    "worker-src 'self' blob:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join("; ");
}

/**
 * Apply a CSP nonce to the request/response pair.
 * The nonce is forwarded to server components via the `x-nonce` header.
 */
function withNonce(request: NextRequest, response: NextResponse): NextResponse {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const csp = buildCsp(nonce);

  // Forward nonce to server components (readable via headers())
  response.headers.set("x-nonce", nonce);
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export default hasClerkKey
  ? clerkMiddleware(async (auth, req) => {
      if (!isPublicRoute(req)) {
        await auth.protect();
      }

      const response = NextResponse.next();
      return withNonce(req, response);
    })
  : function devNoopMiddleware(req: NextRequest) {
      console.warn(
        "[Nebutra] Running without Clerk authentication. " +
          "This is only allowed in development.",
      );
      const response = NextResponse.next();
      return withNonce(req, response);
    };

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
