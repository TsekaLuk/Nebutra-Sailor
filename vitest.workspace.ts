import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  // Apps
  "apps/*/vitest.config.ts",
  // Packages
  "packages/*/vitest.config.ts",
]);
