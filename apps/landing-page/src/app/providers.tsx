"use client";

import { ThemeProvider } from "@nebutra/theme";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Client-side providers wrapper
 * Uses data-theme attribute so [data-theme="neon"] selectors in themes.css activate correctly.
 * Default is "neon" (brand dark) — matches the default @theme block in themes.css.
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="neon"
      themes={["neon", "gradient", "dark-dense", "minimal", "vibrant", "ocean"]}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
