"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { PostHogProvider } from "@/components/providers/posthog-provider";
import { CommandPaletteProvider } from "@/components/providers/command-palette-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider>
      <SessionProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CommandPaletteProvider>
            {children}
          </CommandPaletteProvider>
        </ThemeProvider>
      </SessionProvider>
    </PostHogProvider>
  );
}
