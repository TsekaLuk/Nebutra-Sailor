import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse, type NextRequest } from "next/server";

// ── Route classification ────────────────────────────────────────────────────

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks(.*)", // Stripe + Clerk webhooks — must remain unauthenticated
]);

// ── CSP helpers ─────────────────────────────────────────────────────────────

function generateNonce(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return btoa(String.fromCharCode(...bytes));
}

/**
 * Build a strict Content-Security-Policy header value.
 * Nonce-based inline script/style allowance replaces the unsafe `unsafe-inline`.
 */
function buildCsp(nonce: string): string {
  const isDev = process.env.NODE_ENV === "development";

  const directives: string[] = [
    "default-src 'self'",
    // Scripts: nonce for inline, strict-dynamic propagates trust to dynamic imports
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https: ${isDev ? "'unsafe-eval'" : ""}`,
    // Styles: nonce for Clerk-injected inline styles
    `style-src 'self' 'nonce-${nonce}' https://fonts.googleapis.com`,
    "font-src 'self' https://fonts.gstatic.com",
    // Images: allow data URIs for avatars, CDN, and Clerk hosted images
    "img-src 'self' data: blob: https://img.clerk.com https://images.clerk.dev https://cdn.nebutra.com",
    // Connect: Clerk, Sentry, PostHog, Upstash
    "connect-src 'self' https://*.clerk.accounts.dev https://clerk.nebutra.com https://sentry.io https://*.sentry.io https://app.posthog.com https://*.upstash.io",
    "frame-src 'self' https://challenges.cloudflare.com", // Turnstile CAPTCHA
    "frame-ancestors 'none'", // clickjacking protection
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ];

  return directives.join("; ");
}

// ── Middleware ───────────────────────────────────────────────────────────────

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const nonce = generateNonce();
  const csp = buildCsp(nonce);

  // Require authentication for all non-public routes
  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  // Clone request headers to forward nonce + request ID to Server Components
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-nonce", nonce);
  // Propagate or generate a request ID for distributed tracing correlation
  const requestId = req.headers.get("x-request-id") ?? crypto.randomUUID();
  requestHeaders.set("x-request-id", requestId);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // Echo request ID back to client for debugging
  response.headers.set("X-Request-ID", requestId);

  // Set security headers on every response
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "0"); // CSP supersedes legacy XSS filter
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(self)"
  );

  return response;
});

export const config = {
  matcher: [
    // Skip Next.js internals, static files, and media
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|ttf|otf)).*)",
  ],
};
