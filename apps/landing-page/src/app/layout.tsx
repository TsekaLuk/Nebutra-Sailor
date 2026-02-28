import type { Metadata } from "next";
import { DesignSystemProvider } from "@nebutra/design-system";
import { Providers } from "./providers";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { seoContent } from "@/lib/landing-content";
import "./globals.css";

export const metadata: Metadata = {
  title: seoContent.title,
  description: seoContent.description,
  keywords: [...seoContent.keywords],
  authors: [{ name: "Nebutra" }],
  creator: "Nebutra",
  metadataBase: new URL("https://nebutra.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nebutra.com",
    siteName: "Nebutra Sailor",
    title: seoContent.title,
    description: seoContent.description,
    images: [
      {
        url: seoContent.ogImage,
        width: 1200,
        height: 630,
        alt: seoContent.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: seoContent.twitterHandle,
    title: seoContent.title,
    description: seoContent.description,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <DesignSystemProvider>
            <ErrorBoundary>{children}</ErrorBoundary>
          </DesignSystemProvider>
        </Providers>
      </body>
    </html>
  );
}
