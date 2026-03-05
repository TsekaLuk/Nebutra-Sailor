/**
 * Typography Primitives (Legacy)
 *
 * @deprecated Use `@nebutra/design-system/typography` instead.
 * This module is kept for Primer compatibility and will be removed in v2.
 *
 * Migration:
 * - fontSizes → use typography.fontSizes (rem-based)
 * - fontFamilies → use typography.fontFamilies
 * - textStyles → use typography.typeStyles
 */

import type { CSSProperties } from "react";

/**
 * @deprecated Use typography.fontSizes instead
 * Primer-compatible numeric scale (kept for backwards compatibility)
 */
export const fontSizes = {
  0: 12,
  1: 14,
  2: 16,
  3: 20,
  4: 24,
  5: 32,
  6: 40,
  7: 48,
  8: 56,
} as const;

/**
 * @deprecated Use typography.lineHeights instead
 */
export const lineHeights = {
  condensed: 1.25,
  default: 1.5,
  relaxed: 1.75,
} as const;

/**
 * @deprecated Use typography.fontWeights instead
 */
export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

/**
 * @deprecated Use typography.fontFamilies instead
 */
export const fontFamilies = {
  normal:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
  mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
} as const;

type PrimerStyleObject = Record<string, string | number | CSSProperties>;

/**
 * @deprecated Use typography.typeStyles instead
 * Pre-defined text styles (Primer sx format)
 */
export const textStyles = {
  h1: {
    fontSize: 6,
    fontWeight: "bold",
    lineHeight: "condensed",
  },
  h2: {
    fontSize: 5,
    fontWeight: "bold",
    lineHeight: "condensed",
  },
  h3: {
    fontSize: 4,
    fontWeight: "semibold",
    lineHeight: "condensed",
  },
  h4: {
    fontSize: 3,
    fontWeight: "semibold",
    lineHeight: "default",
  },
  body: {
    fontSize: 1,
    fontWeight: "normal",
    lineHeight: "default",
  },
  small: {
    fontSize: 0,
    fontWeight: "normal",
    lineHeight: "default",
  },
  code: {
    fontSize: 1,
    fontFamily: "mono",
  },
  caption: {
    fontSize: 0,
    fontWeight: "normal",
    lineHeight: "default",
    color: "fg.muted",
  },
} as const satisfies Record<string, PrimerStyleObject>;

export type TextStyle = keyof typeof textStyles;
