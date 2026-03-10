import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { websiteJsonLd } from "@/lib/json-ld";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tseka Luk — AI-Native Builder",
    template: "%s — Tseka Luk",
  },
  description:
    "I design and build AI-powered products from zero to one. Shipping fast and iterating in public.",
  metadataBase: new URL("https://tsekaluk.dev"),
  openGraph: {
    title: "Tseka Luk — AI-Native Builder",
    description: "I design and build AI-powered products from zero to one.",
    url: "https://tsekaluk.dev",
    siteName: "TsekaLuk.dev",
    type: "website",
    images: [
      {
        url: "https://tsekaluk.dev/og?title=Tseka+Luk&subtitle=AI-Native+Builder",
        width: 1200,
        height: 630,
        alt: "Tseka Luk — AI-Native Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@tseka_luk",
  },
  alternates: {
    canonical: "https://tsekaluk.dev",
    types: {
      "application/rss+xml": "https://tsekaluk.dev/rss.xml",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <Script
          defer
          data-domain="tsekaluk.dev"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
