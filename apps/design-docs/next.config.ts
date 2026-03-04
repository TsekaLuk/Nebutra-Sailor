import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";
import path from "path";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  transpilePackages: ["@nebutra/custom-ui"],
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: path.resolve("node_modules/react"),
      "react-dom": path.resolve("node_modules/react-dom"),
    };
    return config;
  },
};

export default withMDX(nextConfig);
