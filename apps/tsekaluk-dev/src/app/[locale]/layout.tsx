import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { websiteJsonLd } from "@/lib/json-ld";

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
  other: {
    "theme-color": "#ffffff",
    "color-scheme": "light dark",
  },
  alternates: {
    canonical: "https://tsekaluk.dev",
    languages: {
      en: "https://tsekaluk.dev/en",
      zh: "https://tsekaluk.dev/zh",
    },
    types: {
      "application/rss+xml": "https://tsekaluk.dev/rss.xml",
    },
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "zh")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />
      {children}
    </NextIntlClientProvider>
  );
}
