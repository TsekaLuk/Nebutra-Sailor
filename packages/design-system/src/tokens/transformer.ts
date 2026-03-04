import type { DesignToken, TransformerOutput } from "./schema";

/**
 * Known brand override key prefixes.
 * These map to keys in the BrandOverrides interface.
 */
const BRAND_PREFIXES = [
  "color.brand",
  "color.primary",
  "color.accent",
  "font",
  "radius",
];

/**
 * Known marketing CSS var prefixes.
 * These map to --nebutra-marketing-* variables.
 */
const MARKETING_PREFIXES = [
  "color.marketing",
  "gradient",
  "animation.duration",
  "animation.frameRate",
  "space.hero",
];

function matchesPrefixes(name: string, prefixes: string[]): boolean {
  return prefixes.some((prefix) => name.startsWith(prefix));
}

/**
 * Transform a flat list of DesignToken into categorised output.
 *
 * Routing rules (in priority order):
 * 1. Name matches BRAND_PREFIXES → brandOverrides
 * 2. Name matches MARKETING_PREFIXES → marketingTokens
 * 3. Else → unknownTokens
 */
export function transformTokens(tokens: DesignToken[]): TransformerOutput {
  const brandOverrides: TransformerOutput["brandOverrides"] = {};
  const marketingTokens: TransformerOutput["marketingTokens"] = {};
  const unknownTokens: DesignToken[] = [];

  for (const token of tokens) {
    if (matchesPrefixes(token.name, BRAND_PREFIXES)) {
      brandOverrides[token.name] = token.rawValue;
    } else if (matchesPrefixes(token.name, MARKETING_PREFIXES)) {
      marketingTokens[token.name] = token.rawValue;
    } else {
      unknownTokens.push(token);
    }
  }

  return { brandOverrides, marketingTokens, unknownTokens };
}
