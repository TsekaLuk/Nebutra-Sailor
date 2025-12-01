/**
 * Default Theme - Based on Primer Design System
 *
 * This file contains the baseline design tokens from GitHub's Primer.
 * These serve as the foundation that brand.ts can override.
 */

// ============================================
// Color Primitives
// ============================================

export const colorPrimitives = {
  // Grayscale
  gray: {
    0: "#f6f8fa",
    1: "#eaeef2",
    2: "#d0d7de",
    3: "#afb8c1",
    4: "#8c959f",
    5: "#6e7781",
    6: "#57606a",
    7: "#424a53",
    8: "#32383f",
    9: "#24292f",
  },

  // Blue (primary)
  blue: {
    0: "#ddf4ff",
    1: "#b6e3ff",
    2: "#80ccff",
    3: "#54aeff",
    4: "#218bff",
    5: "#0969da",
    6: "#0550ae",
    7: "#033d8b",
    8: "#0a3069",
    9: "#002155",
  },

  // Green (success)
  green: {
    0: "#dafbe1",
    1: "#aceebb",
    2: "#6fdd8b",
    3: "#4ac26b",
    4: "#2da44e",
    5: "#1a7f37",
    6: "#116329",
    7: "#044f1e",
    8: "#003d16",
    9: "#002d11",
  },

  // Yellow (warning)
  yellow: {
    0: "#fff8c5",
    1: "#fae17d",
    2: "#eac54f",
    3: "#d4a72c",
    4: "#bf8700",
    5: "#9a6700",
    6: "#7d4e00",
    7: "#633c01",
    8: "#4d2d00",
    9: "#3b2300",
  },

  // Red (danger)
  red: {
    0: "#ffebe9",
    1: "#ffcecb",
    2: "#ffaba8",
    3: "#ff8182",
    4: "#fa4549",
    5: "#cf222e",
    6: "#a40e26",
    7: "#82071e",
    8: "#660018",
    9: "#4c0014",
  },

  // Purple (accent)
  purple: {
    0: "#fbefff",
    1: "#ecd8ff",
    2: "#d8b9ff",
    3: "#c297ff",
    4: "#a475f9",
    5: "#8250df",
    6: "#6639ba",
    7: "#512a97",
    8: "#3e1f79",
    9: "#2e1461",
  },
} as const;

// ============================================
// Semantic Colors (Light Theme)
// ============================================

export const semanticColorsLight = {
  // Canvas (backgrounds)
  canvas: {
    default: "#ffffff",
    overlay: "#ffffff",
    inset: "#f6f8fa",
    subtle: "#f6f8fa",
  },

  // Foreground (text)
  fg: {
    default: "#1f2328",
    muted: "#656d76",
    subtle: "#6e7781",
    onEmphasis: "#ffffff",
  },

  // Border
  border: {
    default: "#d0d7de",
    muted: "#d8dee4",
    subtle: "rgba(27, 31, 36, 0.15)",
  },

  // Accent (primary actions)
  accent: {
    fg: "#0969da",
    emphasis: "#0969da",
    muted: "rgba(84, 174, 255, 0.4)",
    subtle: "#ddf4ff",
  },

  // Success
  success: {
    fg: "#1a7f37",
    emphasis: "#1f883d",
    muted: "rgba(74, 194, 107, 0.4)",
    subtle: "#dafbe1",
  },

  // Warning
  attention: {
    fg: "#9a6700",
    emphasis: "#9a6700",
    muted: "rgba(212, 167, 44, 0.4)",
    subtle: "#fff8c5",
  },

  // Danger
  danger: {
    fg: "#d1242f",
    emphasis: "#cf222e",
    muted: "rgba(255, 129, 130, 0.4)",
    subtle: "#ffebe9",
  },

  // Neutral
  neutral: {
    emphasisPlus: "#24292f",
    emphasis: "#6e7781",
    muted: "rgba(175, 184, 193, 0.2)",
    subtle: "#f6f8fa",
  },
} as const;

// ============================================
// Semantic Colors (Dark Theme)
// ============================================

export const semanticColorsDark = {
  canvas: {
    default: "#0d1117",
    overlay: "#161b22",
    inset: "#010409",
    subtle: "#161b22",
  },

  fg: {
    default: "#e6edf3",
    muted: "#8b949e",
    subtle: "#6e7681",
    onEmphasis: "#ffffff",
  },

  border: {
    default: "#30363d",
    muted: "#21262d",
    subtle: "rgba(240, 246, 252, 0.1)",
  },

  accent: {
    fg: "#58a6ff",
    emphasis: "#1f6feb",
    muted: "rgba(56, 139, 253, 0.4)",
    subtle: "rgba(56, 139, 253, 0.15)",
  },

  success: {
    fg: "#3fb950",
    emphasis: "#238636",
    muted: "rgba(46, 160, 67, 0.4)",
    subtle: "rgba(46, 160, 67, 0.15)",
  },

  attention: {
    fg: "#d29922",
    emphasis: "#9e6a03",
    muted: "rgba(187, 128, 9, 0.4)",
    subtle: "rgba(187, 128, 9, 0.15)",
  },

  danger: {
    fg: "#f85149",
    emphasis: "#da3633",
    muted: "rgba(248, 81, 73, 0.4)",
    subtle: "rgba(248, 81, 73, 0.15)",
  },

  neutral: {
    emphasisPlus: "#f0f6fc",
    emphasis: "#6e7681",
    muted: "rgba(110, 118, 129, 0.4)",
    subtle: "rgba(110, 118, 129, 0.1)",
  },
} as const;

// ============================================
// Typography
// ============================================

export const typography = {
  fontFamily: {
    normal:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    mono: 'ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, "Liberation Mono", monospace',
  },

  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "32px",
    "4xl": "40px",
    "5xl": "48px",
  },

  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    condensed: 1.25,
    default: 1.5,
    relaxed: 1.75,
  },
} as const;

// ============================================
// Spacing Scale
// ============================================

export const spacing = {
  0: "0",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
  24: "96px",
} as const;

// ============================================
// Border Radius
// ============================================

export const radii = {
  none: "0",
  sm: "3px",
  md: "6px",
  lg: "12px",
  xl: "16px",
  full: "9999px",
} as const;

// ============================================
// Shadows
// ============================================

export const shadows = {
  sm: "0 1px 0 rgba(27, 31, 36, 0.04)",
  md: "0 3px 6px rgba(140, 149, 159, 0.15)",
  lg: "0 8px 24px rgba(140, 149, 159, 0.2)",
  xl: "0 12px 28px rgba(140, 149, 159, 0.3)",
  inset: "inset 0 1px 0 rgba(208, 215, 222, 0.2)",
} as const;

// ============================================
// Breakpoints (responsive)
// ============================================

export const breakpoints = {
  xs: "0px",
  sm: "544px",
  md: "768px",
  lg: "1012px",
  xl: "1280px",
  xxl: "1400px",
} as const;

// ============================================
// Z-Index Scale
// ============================================

export const zIndex = {
  negative: -1,
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

// ============================================
// Animation / Transition
// ============================================

export const animation = {
  duration: {
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
  },
  easing: {
    default: "cubic-bezier(0.33, 1, 0.68, 1)",
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
  },
} as const;

// ============================================
// Default Theme Export
// ============================================

export const defaultTheme = {
  colors: {
    primitives: colorPrimitives,
    light: semanticColorsLight,
    dark: semanticColorsDark,
  },
  typography,
  spacing,
  radii,
  shadows,
  breakpoints,
  zIndex,
  animation,
} as const;

export type DefaultTheme = typeof defaultTheme;
