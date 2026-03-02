"use client";

import { ThemeProvider } from "@nebutra/theme";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Client-side providers wrapper
 * Uses class attribute for dark/light/system theme switching via next-themes.
 * Default theme is "dark" with OS preference detection enabled.
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
