import { defineConfig } from "tsup";

const shouldEmitDts = process.env.CI !== "true" && process.env.VERCEL !== "1";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/primitives/index.ts",
    "src/patterns/index.ts",
    "src/marketing/index.ts",
    "src/tailwind.preset.ts",
    "src/utils/cn.ts",
  ],
  format: ["esm"],
  dts: shouldEmitDts,
  splitting: false,
  sourcemap: true,
  clean: true,
  noExternal: ["../types/three-fiber"],
  external: [
    "react",
    "react-dom",
    "@nebutra/design-system",
    "next",
    "next/link",
    "@clerk/nextjs",
    "motion",
    "motion/react",
    "date-fns",
    "@heroui/calendar",
    "@internationalized/date",
    "@heroui/checkbox",
    "@heroui/slider",
    "@heroui/progress",
    "@heroui/switch",
    "three",
    "@react-three/fiber",
  ],
});
