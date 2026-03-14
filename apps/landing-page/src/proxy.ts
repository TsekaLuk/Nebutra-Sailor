import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

function withSecurityHeaders(response: NextResponse): NextResponse {
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()",
  );
  return response;
}

export default function proxy(request: NextRequest): NextResponse {
  const response = intlMiddleware(request) as NextResponse;
  return withSecurityHeaders(response);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*/opengraph-image|.*\\..*).*)",
};
