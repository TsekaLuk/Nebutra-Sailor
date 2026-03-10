import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],

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

const withMDX = createMDX({});

export default withMDX(nextConfig);
