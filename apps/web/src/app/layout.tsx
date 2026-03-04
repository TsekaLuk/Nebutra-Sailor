import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { DesignSystemProvider } from "@nebutra/design-system";
import { ThemeShell } from "./providers/theme-provider";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { QueryProvider } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  preload: false,
});

export const metadata: Metadata = {
  title: "Nebutra - SaaS Platform",
  description: "Enterprise-grade AI-native SaaS platform",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

const hasClerkKey = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const content = (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only fixed left-3 top-3 z-[100] rounded-md bg-[color:var(--blue-9)] px-3 py-2 text-sm font-medium text-white focus:not-sr-only"
        >
          Skip to content
        </a>

        <ThemeShell>
          <DesignSystemProvider>
            <QueryProvider>
              <ErrorBoundary>{children}</ErrorBoundary>
            </QueryProvider>
          </DesignSystemProvider>
        </ThemeShell>
      </body>
    </html>
  );

  if (!hasClerkKey) {
    return content;
  }

  return <ClerkProvider>{content}</ClerkProvider>;
}
