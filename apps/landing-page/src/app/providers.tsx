"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Client-side providers wrapper
 * Dark-only mode — no theme toggle on the marketing site
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <NextThemesProvider
      attribute="class"
      forcedTheme="dark"
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
