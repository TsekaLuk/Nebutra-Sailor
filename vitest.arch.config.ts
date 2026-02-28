import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["tests/architecture/**/*.test.ts"],
    testTimeout: 30_000,
    projects: [
      {
        test: {
          name: "architecture",
          globals: true,
          environment: "node",
          include: ["tests/architecture/**/*.test.ts"],
          testTimeout: 30_000,
        },
      },
    ],
  },
});
