"use client";

import { ThemeProvider } from "@nebutra/theme";

interface ThemeShellProps {
  children: React.ReactNode;
  nonce?: string;
}

/**
 * Client-side theme provider for the web app.
 * Uses data-theme attribute for CSS-only multi-theme system.
 * Default theme is "neon" (dark AI SaaS aesthetic).
 */
export function ThemeShell({ children, nonce }: ThemeShellProps) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="neon"
      themes={["neon", "gradient", "dark-dense", "minimal", "vibrant", "ocean"]}
      disableTransitionOnChange
      nonce={nonce}
    >
      {children}
    </ThemeProvider>
  );
}
