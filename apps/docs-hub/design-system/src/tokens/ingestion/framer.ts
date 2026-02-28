import type { DesignToken } from "../schema";

/** Shape of a Framer variable */
interface FramerVariable {
  name: string;
  value: string | number | boolean;
  type: "color" | "number" | "string" | "boolean";
  collection?: string;
}

/** Shape of Framer variables export */
interface FramerVariablesExport {
  variables: FramerVariable[];
}

function inferCategoryFromFramerType(
  type: string,
  name: string,
): DesignToken["category"] {
  if (type === "color") return "color";
  if (type === "number") {
    if (/radius|round/.test(name)) return "radius";
    if (/space|gap|pad|margin/.test(name)) return "spacing";
    if (/duration|delay/.test(name)) return "animation";
    return "spacing";
  }
  return "unknown";
}

/**
 * Ingest Framer Variables JSON export.
 *
 * @param json - Raw parsed JSON from Framer's variable export
 * @returns Flat array of DesignToken
 */
export function ingestFramerTokens(json: unknown): DesignToken[] {
  const data = json as FramerVariablesExport;
  if (!Array.isArray(data?.variables)) {
    throw new Error("ingestFramerTokens: expected { variables: [...] }");
  }

  return data.variables.map((v) => ({
    name: v.collection ? `${v.collection}.${v.name}` : v.name,
    rawValue: String(v.value),
    category: inferCategoryFromFramerType(v.type, v.name),
    source: "framer" as const,
    path: v.collection ? [v.collection, v.name] : [v.name],
  }));
}
