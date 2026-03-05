import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

// Security headers applied to every route in the authenticated dashboard.
// The dashboard uses stricter values than the landing page (e.g. X-Frame-Options
// is DENY rather than SAMEORIGIN).
//
// NOTE: Content-Security-Policy is NOT listed here — it is set dynamically by
// the middleware (src/middleware.ts) with a per-request nonce so that we can
// avoid 'unsafe-inline' for scripts and styles.
const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // Prevent the dashboard from being embedded in any frame.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  // Required for Docker / self-hosted deployments.
  // Produces a minimal standalone server bundle under .next/standalone.
  output: "standalone",

  // Keep Prisma and bcryptjs out of the client bundle — they are Node-only.
  serverExternalPackages: ["@prisma/client", "bcryptjs"],

  // Tree-shake large icon/component packages at the import level.
  // Next.js rewrites barrel imports to per-file imports automatically.
  optimizePackageImports: ["@nebutra/ui", "@nebutra/icons", "lucide-react"],

  // Workspace packages: src/-exporting packages need this for SWC to process
  // TypeScript; dist/-exporting packages need it for "use client" detection.
  transpilePackages: [
    "@nebutra/ui",
    "@nebutra/design-system",
    "@nebutra/theme",
  ],

  experimental: {
    ppr: "incremental",
    cacheComponents: true,
    reactCompiler: true,
  },

  // Attach security headers to every route.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
