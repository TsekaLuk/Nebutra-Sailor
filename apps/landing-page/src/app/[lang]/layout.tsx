import Script from "next/script";
import { Inter, JetBrains_Mono, Noto_Sans_SC } from "next/font/google";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { Providers } from "../providers";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { seoContent } from "@/lib/landing-content";

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

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

const ogLocaleMap: Record<string, string> = {
  en: "en_US",
  zh: "zh_CN",
  ja: "ja_JP",
  ko: "ko_KR",
  es: "es_ES",
  fr: "fr_FR",
  de: "de_DE",
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(routing.locales, lang)) return {};

  const t = await getTranslations({ locale: lang, namespace: "metadata" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      locale: ogLocaleMap[lang] ?? "en_US",
      title: t("title"),
      description: t("description"),
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await params;

  if (!hasLocale(routing.locales, lang)) {
    notFound();
  }

  const locale = lang as Locale;
  setRequestLocale(locale);
  const messages = await getMessages({ locale });

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
          <ErrorBoundary>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
}
