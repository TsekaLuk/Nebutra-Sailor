import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono, Noto_Sans_SC } from "next/font/google";
import { getLocale } from "next-intl/server";
import { Providers } from "./providers";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { seoContent } from "@/lib/landing-content";
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

const notoSansSC = Noto_Sans_SC({
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cn",
  preload: false,
});

/**
 * Root layout metadata — locale-independent defaults only.
 * Locale-dependent title/description/OG are handled by [lang]/layout.tsx generateMetadata.
 */
export const metadata: Metadata = {
  keywords: [...seoContent.keywords],
  authors: [{ name: "Nebutra" }],
  creator: "Nebutra",
  metadataBase: new URL("https://nebutra.com"),
  openGraph: {
    type: "website",
    url: "https://nebutra.com",
    siteName: "Nebutra Sailor",
    images: [
      {
        url: seoContent.ogImage,
        width: 1200,
        height: 630,
        alt: "Nebutra Sailor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: seoContent.twitterHandle,
    images: [seoContent.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nebutra",
    url: "https://nebutra.com",
    logo: "https://nebutra.com/icon.png",
    sameAs: [
      "https://github.com/Nebutra/Nebutra-Sailor",
      "https://x.com/nebutra",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nebutra Sailor",
    url: "https://nebutra.com",
    description: seoContent.description,
  },
];

function toSafeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      className={`${inter.variable} ${jetbrainsMono.variable} ${notoSansSC.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only fixed left-3 top-3 z-[100] rounded-[var(--radius-md)] bg-[color:var(--blue-9)] px-3 py-2 text-sm font-medium text-white focus:not-sr-only"
        >
          Skip to content
        </a>

        <Script
          id="nebutra-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {toSafeJsonLd(jsonLd)}
        </Script>

        <Providers>
          <ErrorBoundary>{children}</ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
}
