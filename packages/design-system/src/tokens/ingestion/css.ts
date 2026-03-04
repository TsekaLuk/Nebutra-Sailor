import type { DesignToken } from "../schema";

/** Regex matching CSS custom property declarations: --name: value; */
const CSS_VAR_REGEX = /--([a-zA-Z0-9-]+)\s*:\s*([^;]+);/g;

function inferCategoryFromCssName(name: string): DesignToken["category"] {
  if (/color|bg|fg|text|border/.test(name)) return "color";
  if (/font|text-size|leading|tracking/.test(name)) return "typography";
  if (/space|gap|padding|margin|size/.test(name)) return "spacing";
  if (/shadow/.test(name)) return "shadow";
  if (/radius|rounded/.test(name)) return "radius";
  if (/duration|ease|transition|animation/.test(name)) return "animation";
  return "unknown";
}

/**
 * Ingest CSS custom properties from a CSS string.
 *
 * @param cssSource - Raw CSS string (e.g. contents of a .css file)
 * @returns Flat array of DesignToken
 */
export function ingestCssTokens(cssSource: string): DesignToken[] {
  const tokens: DesignToken[] = [];
  let match: RegExpExecArray | null;

  while ((match = CSS_VAR_REGEX.exec(cssSource)) !== null) {
    const name = match[1].trim();
    const rawValue = match[2].trim();
    tokens.push({
      name,
      rawValue,
      category: inferCategoryFromCssName(name),
      source: "css",
      path: name.split("-"),
    });
  }

  return tokens;
}
