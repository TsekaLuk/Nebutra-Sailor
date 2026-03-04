import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Providers } from "./providers";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { seoContent } from "@/lib/landing-content";
import "./globals.css";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <ErrorBoundary>{children}</ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
}
