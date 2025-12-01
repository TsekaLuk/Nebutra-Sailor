/**
 * Brand Theme - Extensible Brand Customization Layer
 *
 * This file provides the structure for brand-specific overrides.
 * Currently uses Primer defaults for MVP. Customize tokens here
 * when ready to apply Nebutra brand identity.
 *
 * TODO: Define Nebutra brand colors, typography, etc.
 */

import {
  defaultTheme,
  semanticColorsLight,
  semanticColorsDark,
  type DefaultTheme,
} from "./default";

// ============================================
// Brand Color Palette (TODO: Customize)
// ============================================

/**
 * Brand colors placeholder - currently empty.
 * Override Primer defaults here when brand identity is finalized.
 *
 * Example structure:
 * ```ts
 * export const brandColors = {
 *   primary: { 50: "#...", 100: "#...", ..., 900: "#..." },
 *   secondary: { ... },
 *   accent: { ... },
 * };
 * ```
 */
export const brandColors = {} as const;

export type BrandColors = typeof brandColors;

// ============================================
// Brand Overrides Interface
// ============================================

export interface BrandOverrides {
  colors?: Partial<typeof semanticColorsLight>;
  typography?: {
    fontFamily?: {
      normal?: string;
      mono?: string;
      display?: string;
    };
  };
  radii?: Partial<typeof defaultTheme.radii>;
  shadows?: Record<string, string>;
}

// ============================================
// Theme Creation with Brand Overrides
// ============================================

/**
 * Create a theme with optional brand overrides.
 * For MVP, returns Primer defaults. Apply overrides when brand is ready.
 */
export function createTheme(
  mode: "light" | "dark" = "light",
  overrides?: BrandOverrides
): DefaultTheme {
  const baseColors = mode === "light" ? semanticColorsLight : semanticColorsDark;

  return {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      // Apply color overrides if provided
      [mode]: overrides?.colors
        ? { ...baseColors, ...overrides.colors }
        : baseColors,
    },
    typography: {
      ...defaultTheme.typography,
      fontFamily: {
        ...defaultTheme.typography.fontFamily,
        ...overrides?.typography?.fontFamily,
      },
    },
    radii: {
      ...defaultTheme.radii,
      ...overrides?.radii,
    },
    shadows: {
      ...defaultTheme.shadows,
      ...overrides?.shadows,
    },
  } as DefaultTheme;
}

// ============================================
// Pre-built Themes (Primer Defaults)
// ============================================

export const lightTheme = createTheme("light");
export const darkTheme = createTheme("dark");

// ============================================
// Brand Theme Type (for future expansion)
// ============================================

export type BrandTheme = DefaultTheme & {
  brand?: BrandColors;
};
