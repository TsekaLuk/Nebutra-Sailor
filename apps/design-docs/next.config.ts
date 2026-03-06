import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  transpilePackages: [
    "@nebutra/ui",
    "@nebutra/tokens",
  ],
  reactStrictMode: true,
};

export default withMDX(nextConfig);
