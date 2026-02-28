// Default Primer-based theme
export {
  defaultTheme,
  colorPrimitives,
  semanticColorsLight,
  semanticColorsDark,
  typography,
  spacing,
  radii,
  shadows,
  breakpoints,
  zIndex,
  animation,
  type DefaultTheme,
} from "./default";

// Brand customization layer (uses Primer defaults, extensible)
export {
  brandColors,
  createTheme,
  lightTheme,
  darkTheme,
  type BrandColors,
  type BrandOverrides,
  type BrandTheme,
} from "./brand";

// Marketing-specific tokens (landing pages, hero sections)
export {
  marketingTokens,
  marketingSpacing,
  marketingTypography,
  marketingGradients,
  marketingEffects,
  marketingRadii,
  marketingTransitions,
  marketingZIndex,
  generateMarketingCSSVars,
  type MarketingTokens,
} from "./marketing";

// Theme types
export type ThemeMode = "light" | "dark" | "auto";

export interface ThemeConfig {
  mode: ThemeMode;
  useSystemPreference: boolean;
  defaultMode: "light" | "dark";
}
