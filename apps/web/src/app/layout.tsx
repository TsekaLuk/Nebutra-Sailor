import { ClerkProvider } from "@clerk/nextjs";
import { DesignSystemProvider } from "@nebutra/ui/layout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_SC } from "next/font/google";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { getNonce } from "@/lib/nonce";
import { QueryProvider } from "./providers";
import { ThemeShell } from "./providers/theme-provider";
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
});

const notoSansSC = Noto_Sans_SC({
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cn",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const nonce = await getNonce();

  return (
    <ClerkProvider nonce={nonce}>
      <html
        lang="en"
        className={`${inter.variable} ${jetbrainsMono.variable} ${notoSansSC.variable}`}
        suppressHydrationWarning
      >
        <body className="antialiased">
          <a
            href="#main-content"
            className="sr-only fixed left-3 top-3 z-100 rounded-md bg-blue-9 px-3 py-2 text-sm font-medium text-white focus:not-sr-only"
          >
            Skip to content
          </a>

          <ThemeShell nonce={nonce}>
            <DesignSystemProvider>
              <QueryProvider>
                <ErrorBoundary>{children}</ErrorBoundary>
              </QueryProvider>
            </DesignSystemProvider>
          </ThemeShell>
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
