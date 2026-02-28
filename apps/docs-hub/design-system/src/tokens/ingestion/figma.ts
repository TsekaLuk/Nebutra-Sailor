import type { DesignToken } from "../schema";

/** Shape of a single token in Figma Tokens JSON */
interface FigmaTokenNode {
  value: string | number;
  type?: string;
  description?: string;
}

/** Recursive map structure of Figma tokens */
type FigmaTokenMap = {
  [key: string]: FigmaTokenNode | FigmaTokenMap;
};

function isTokenNode(node: unknown): node is FigmaTokenNode {
  return (
    typeof node === "object" &&
    node !== null &&
    "value" in node &&
    !Array.isArray(node)
  );
}

function flattenFigmaTokens(
  map: FigmaTokenMap,
  path: string[] = [],
  out: DesignToken[] = [],
): DesignToken[] {
  for (const [key, value] of Object.entries(map)) {
    const currentPath = [...path, key];

    if (isTokenNode(value)) {
      out.push({
        name: currentPath.join("."),
        rawValue: String(value.value),
        category: inferCategoryFromFigmaType(value.type),
        source: "figma",
        description: value.description,
        path: currentPath,
      });
    } else {
      flattenFigmaTokens(value as FigmaTokenMap, currentPath, out);
    }
  }
  return out;
}

function inferCategoryFromFigmaType(type?: string): DesignToken["category"] {
  switch (type) {
    case "color":
      return "color";
    case "fontSizes":
    case "fontFamilies":
    case "fontWeights":
    case "lineHeights":
    case "letterSpacing":
      return "typography";
    case "spacing":
    case "sizing":
      return "spacing";
    case "boxShadow":
      return "shadow";
    case "borderRadius":
      return "radius";
    default:
      return "unknown";
  }
}

/**
 * Ingest a Figma Tokens Studio JSON export.
 *
 * @param json - Raw parsed JSON from Figma Tokens export
 * @returns Flat array of DesignToken
 */
export function ingestFigmaTokens(json: unknown): DesignToken[] {
  if (typeof json !== "object" || json === null) {
    throw new Error("ingestFigmaTokens: expected an object");
  }
  return flattenFigmaTokens(json as FigmaTokenMap);
}
