import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://us-assets.i.posthog.com https://us.i.posthog.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https: https://api.dicebear.com https://lh3.googleusercontent.com",
      "font-src 'self'",
      "connect-src 'self' https://api.anthropic.com https://us.i.posthog.com https://us-assets.i.posthog.com https://*.ingest.langfuse.com",
      "frame-ancestors 'none'",
    ].join("; "),
  },
]

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],

  headers: async () => [
    {
      source: "/(.*)",
      headers: securityHeaders,
    },
  ],

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "api.dicebear.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
    ],
  },

  experimental: {
    mdxRs: true,
  },

  transpilePackages: [
    "@nebutra/brand",
    "@nebutra/ui",
    "@nebutra/tokens",
    "@nebutra/marketing",
  ],
};

const withMDX = createMDX();

export default withNextIntl(withMDX(nextConfig));
