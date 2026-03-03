import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  transpilePackages: ["@nebutra/custom-ui"],
  reactStrictMode: true,
};

export default withMDX(nextConfig);
