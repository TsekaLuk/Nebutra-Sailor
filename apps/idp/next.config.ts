import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile workspace packages
  transpilePackages: [
    "@nebutra/oauth-server",
    "@nebutra/contracts",
    "@nebutra/db",
    "@nebutra/tokens",
    "@nebutra/ui",
  ],
};

export default nextConfig;
