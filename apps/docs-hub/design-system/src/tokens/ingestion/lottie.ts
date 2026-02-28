import type { DesignToken } from "../schema";

/**
 * Partial shape of a Lottie JSON file (only the fields we care about).
 * See https://lottiefiles.github.io/lottie-docs/
 */
interface LottieJson {
  /** Frame rate */
  fr?: number;
  /** In-point (start frame) */
  ip?: number;
  /** Out-point (end frame) */
  op?: number;
  /** Version string */
  v?: string;
}

/**
 * Extract timing design tokens from a Lottie JSON animation.
 *
 * Produces tokens:
 *  - `animation.duration` — total duration in ms
 *  - `animation.frameRate` — frames per second
 *
 * @param json - Raw parsed Lottie JSON
 * @returns Flat array of DesignToken (animation category)
 */
export function ingestLottieTokens(json: unknown): DesignToken[] {
  const lottie = json as LottieJson;
  const tokens: DesignToken[] = [];

  const fr = lottie.fr ?? 30;
  const ip = lottie.ip ?? 0;
  const op = lottie.op ?? 0;
  const durationMs = ((op - ip) / fr) * 1000;

  tokens.push({
    name: "animation.duration",
    rawValue: `${Math.round(durationMs)}ms`,
    category: "animation",
    source: "lottie",
    path: ["animation", "duration"],
  });

  tokens.push({
    name: "animation.frameRate",
    rawValue: String(fr),
    category: "animation",
    source: "lottie",
    path: ["animation", "frameRate"],
  });

  return tokens;
}
