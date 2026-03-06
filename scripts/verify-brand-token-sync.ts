#!/usr/bin/env tsx

/**
 * Source of truth package: @nebutra/brand
 *
 * CI guardrail:
 * - primitive token layer must reference brand metadata values
 * - CSS brand bridge must expose P3 + sRGB fallback tokens
 */

import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { colors } from "../packages/brand/src/metadata.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

function read(relativePath: string) {
  return readFileSync(path.join(repoRoot, relativePath), "utf8");
}

function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(message);
  }
}

const primitiveFile = read("packages/ui/src/tokens/primitive.ts");
const globalsCss = read("packages/ui/src/styles/globals.css");

assert(
  primitiveFile.includes('import { colors } from "@nebutra/brand"') ||
    primitiveFile.includes("colors.primary[500]"),
  "Primitive token layer is not wired to @nebutra/brand.",
);

assert(
  primitiveFile.includes(`blue500: colors.primary[500]`) &&
    primitiveFile.includes(`cyan500: colors.accent[500]`),
  "Primitive color tokens are not mapped to brand primary/accent.",
);

assert(
  primitiveFile.includes("primary: colors.gradient.primary"),
  "Primitive gradients are not mapped to brand gradients.",
);

assert(
  globalsCss.includes("--nebutra-brand-blue: #0033FE") &&
    globalsCss.includes("--nebutra-brand-cyan: #0BF1C3"),
  "sRGB brand fallback variables are missing.",
);

assert(
  globalsCss.includes("@supports (color: color(display-p3 1 1 1))") &&
    globalsCss.includes("--nebutra-brand-blue: color(display-p3") &&
    globalsCss.includes("--nebutra-brand-cyan: color(display-p3"),
  "Display-P3 brand bridge is missing.",
);

assert(colors.primary[500] === "#0033FE", "Brand primary 500 drift detected.");
assert(colors.accent[500] === "#0BF1C3", "Brand accent 500 drift detected.");

console.log("Token sync verification passed");
