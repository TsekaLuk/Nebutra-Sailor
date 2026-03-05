import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  transpilePackages: [
    "@nebutra/ui",
    "@nebutra/design-system",
    "@nebutra/theme",
  ],
  reactStrictMode: true,
};

export default withMDX(nextConfig);
