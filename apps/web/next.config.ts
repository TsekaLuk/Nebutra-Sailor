import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  // Required for Docker / self-hosted deployments.
  // Produces a minimal standalone server bundle under .next/standalone.
  output: "standalone",
  // Workspace packages: src/-exporting packages need this for SWC to process
  // TypeScript; dist/-exporting packages need it for "use client" detection.
  transpilePackages: [
    "@nebutra/custom-ui",
    "@nebutra/design-system",
    "@nebutra/theme",
  ],
};

export default withBundleAnalyzer(nextConfig);
