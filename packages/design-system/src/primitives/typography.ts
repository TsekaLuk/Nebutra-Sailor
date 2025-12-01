/**
 * Typography Primitives
 *
 * Font sizes, line heights, and text styles.
 */

import type { SystemStyleObject } from "@primer/react";

/**
 * Font size scale (Primer-compatible)
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
 * Line height scale
 */
export const lineHeights = {
  condensed: 1.25,
  default: 1.5,
  relaxed: 1.75,
} as const;

/**
 * Font weights
 */
export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

/**
 * Font families
 */
export const fontFamilies = {
  normal:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
  mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
} as const;

/**
 * Pre-defined text styles
 */
export const textStyles = {
  /** Page title */
  h1: {
    fontSize: 6,
    fontWeight: "bold",
    lineHeight: "condensed",
  },
  /** Section title */
  h2: {
    fontSize: 5,
    fontWeight: "bold",
    lineHeight: "condensed",
  },
  /** Subsection title */
  h3: {
    fontSize: 4,
    fontWeight: "semibold",
    lineHeight: "condensed",
  },
  /** Card title */
  h4: {
    fontSize: 3,
    fontWeight: "semibold",
    lineHeight: "default",
  },
  /** Body text */
  body: {
    fontSize: 1,
    fontWeight: "normal",
    lineHeight: "default",
  },
  /** Small text */
  small: {
    fontSize: 0,
    fontWeight: "normal",
    lineHeight: "default",
  },
  /** Code/mono text */
  code: {
    fontSize: 1,
    fontFamily: "mono",
  },
  /** Caption */
  caption: {
    fontSize: 0,
    fontWeight: "normal",
    lineHeight: "default",
    color: "fg.muted",
  },
} as const satisfies Record<string, SystemStyleObject>;

export type TextStyle = keyof typeof textStyles;
