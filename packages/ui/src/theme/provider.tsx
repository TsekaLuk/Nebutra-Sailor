"use client";

/**
 * Nebutra Theme Provider
 * Wraps Lobe UI ThemeProvider with Nebutra design tokens
 */

import { ThemeProvider as LobeThemeProvider } from "@lobehub/ui";
import { type ReactNode } from "react";
import { colors } from "./tokens.js";

export interface NebutraThemeProviderProps {
  children: ReactNode;
  /** Force dark/light mode, or use system preference */
  appearance?: "dark" | "light" | "auto";
  /** Default theme mode when appearance is "auto" */
  defaultAppearance?: "dark" | "light";
}

// Lobe UI theme customization to match Nebutra design
const nebutraTheme = {
  token: {
    // Primary colors
    colorPrimary: colors.primary[600],
    colorPrimaryHover: colors.primary[500],
    colorPrimaryActive: colors.primary[700],
    colorPrimaryBg: colors.primary[50],
    colorPrimaryBgHover: colors.primary[100],

    // Info/Link colors
    colorInfo: colors.info,
    colorLink: colors.primary[600],
    colorLinkHover: colors.primary[500],

    // Success
    colorSuccess: colors.success,

    // Warning
    colorWarning: colors.warning,

    // Error
    colorError: colors.error,

    // Border radius
    borderRadius: 8,
    borderRadiusLG: 12,
    borderRadiusSM: 6,

    // Font
    fontFamily:
      'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontFamilyCode:
      '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',
  },
};

/**
 * Theme provider that wraps Lobe UI with Nebutra design tokens
 *
 * @example
 * ```tsx
 * <NebutraThemeProvider appearance="auto">
 *   <App />
 * </NebutraThemeProvider>
 * ```
 */
export function NebutraThemeProvider({
  children,
  appearance = "auto",
  defaultAppearance = "light",
}: NebutraThemeProviderProps) {
  return (
    <LobeThemeProvider
      appearance={appearance === "auto" ? undefined : appearance}
      defaultAppearance={defaultAppearance}
      customTheme={nebutraTheme}
    >
      {children}
    </LobeThemeProvider>
  );
}

export default NebutraThemeProvider;
