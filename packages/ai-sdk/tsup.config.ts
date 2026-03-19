import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts", "src/config.ts", "src/provider.ts", "src/models.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  target: "node20",
  outDir: "dist",
  splitting: true,
})
