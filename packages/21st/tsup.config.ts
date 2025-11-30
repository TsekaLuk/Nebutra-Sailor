import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/lib/utils.ts",
    "src/components/ui/index.ts",
    "src/components/blocks/index.ts",
    "src/components/hooks/index.ts",
    "src/tailwind.preset.ts",
  ],
  format: ["esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "tailwindcss"],
  treeshake: true,
  minify: false,
});
