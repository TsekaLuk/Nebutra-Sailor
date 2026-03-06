import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    include: ["src/**/*.{test,spec}.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "src/**/*.{test,spec}.ts",
        "src/cli.ts",
        "src/index.ts",
      ],
      include: ["src/**/*.ts"],
      thresholds: {
        lines: 75,
        functions: 70,
        branches: 50,
        statements: 75,
      },
    },
  },
});
