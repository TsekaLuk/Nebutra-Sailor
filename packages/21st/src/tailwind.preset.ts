/**
 * @nebutra/21st - Tailwind CSS 4 Preset
 *
 * This preset provides Nebutra's design tokens mapped to Tailwind utilities.
 * Import this in your app's CSS or tailwind.config to use the theme.
 *
 * For Tailwind CSS 4, use @import in your CSS:
 * @source "@nebutra/21st/styles/globals.css"
 *
 * Or configure in your postcss:
 * import { nebutraPreset } from "@nebutra/21st/tailwind.preset"
 */

/**
 * Design tokens from @nebutra/ui mapped to CSS-in-JS format
 * These can be used for programmatic access to theme values
 */
export const nebutraColors = {
  // Primary - Blue
  primary: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
    950: "#172554",
    DEFAULT: "#3B82F6",
    foreground: "#F8FAFC",
  },

  // Secondary - Purple
  secondary: {
    50: "#FAF5FF",
    100: "#F3E8FF",
    200: "#E9D5FF",
    300: "#D8B4FE",
    400: "#C084FC",
    500: "#A855F7",
    600: "#9333EA",
    700: "#7C3AED",
    800: "#6B21A8",
    900: "#581C87",
    950: "#3B0764",
    DEFAULT: "#A855F7",
    foreground: "#1E293B",
  },

  // Neutral - Slate
  neutral: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
    950: "#020617",
  },

  // Semantic colors
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",
} as const;

export const nebutraSpacing = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "3rem", // 48px
  "3xl": "4rem", // 64px
} as const;

export const nebutraBorderRadius = {
  none: "0",
  sm: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  full: "9999px",
} as const;

export const nebutraShadows = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
} as const;

export const nebutraTypography = {
  fontFamily: {
    sans: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',
  },
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
  },
} as const;

/**
 * Animation keyframes for components
 * These are defined in globals.css and can be referenced here
 */
export const nebutraAnimations = {
  "accordion-down": "accordion-down 0.2s ease-out",
  "accordion-up": "accordion-up 0.2s ease-out",
  "fade-in": "fade-in 0.2s ease-out",
  "fade-out": "fade-out 0.2s ease-out",
  "slide-in-from-top": "slide-in-from-top 0.3s ease-out",
  "slide-in-from-bottom": "slide-in-from-bottom 0.3s ease-out",
  "slide-in-from-left": "slide-in-from-left 0.3s ease-out",
  "slide-in-from-right": "slide-in-from-right 0.3s ease-out",
  spin: "spin 1s linear infinite",
  pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  bounce: "bounce 1s infinite",
} as const;

/**
 * Full Nebutra preset combining all design tokens
 */
export const nebutraPreset = {
  colors: nebutraColors,
  spacing: nebutraSpacing,
  borderRadius: nebutraBorderRadius,
  boxShadow: nebutraShadows,
  fontFamily: nebutraTypography.fontFamily,
  fontSize: nebutraTypography.fontSize,
  animation: nebutraAnimations,
} as const;

export type NebutraPreset = typeof nebutraPreset;

export default nebutraPreset;
