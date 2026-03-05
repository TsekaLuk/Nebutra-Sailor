"use client";

import { ThemeProvider } from "@nebutra/tokens";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Client-side providers wrapper
 * Single theme mechanism: class-based dark mode (.dark).
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
