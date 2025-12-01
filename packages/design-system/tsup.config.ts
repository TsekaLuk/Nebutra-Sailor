import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/theme/index.ts",
    "src/components/index.ts",
    "src/icons/index.ts",
    "src/utils/index.ts",
    "src/hooks/index.ts",
    "src/governance/index.ts",
    "src/primitives/index.ts",
    "src/typography/index.ts",
  ],
  format: ["esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    "react",
    "react-dom",
    "styled-components",
    "@primer/react",
    "@primer/primitives",
    "@primer/octicons-react",
    "clsx",
  ],
  treeshake: true,
  minify: false,
});
