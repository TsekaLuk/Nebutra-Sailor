export type TokenCategory =
  | "color"
  | "typography"
  | "spacing"
  | "shadow"
  | "radius"
  | "animation"
  | "unknown";

export type TokenSource = "figma" | "framer" | "lottie" | "css" | "manual";

export interface DesignToken {
  /** Canonical token name, e.g. "color.primary.500" */
  name: string;
  /** Raw value as provided by the source */
  rawValue: string;
  /** Inferred or declared category */
  category: TokenCategory;
  /** Which tool produced this token */
  source: TokenSource;
  /** Optional human description */
  description?: string;
  /** Path segments, e.g. ["color", "primary", "500"] */
  path?: string[];
}

export interface TransformerOutput {
  /** Tokens that map to existing brandOverrides keys */
  brandOverrides: Partial<Record<string, string>>;
  /** Tokens that map to marketing CSS vars */
  marketingTokens: Partial<Record<string, string>>;
  /** Tokens that could not be categorised */
  unknownTokens: DesignToken[];
}
