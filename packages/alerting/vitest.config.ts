import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    include: ["src/**/*.{test,spec}.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: ["node_modules/", "src/**/*.{test,spec}.ts"],
      include: ["src/**/*.ts"],
      thresholds: {
        lines: 40,
        functions: 50,
        branches: 80,
        statements: 40,
      },
    },
  },
});
