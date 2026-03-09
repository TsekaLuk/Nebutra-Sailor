import { RootProvider } from "fumadocs-ui/provider/next";
import { I18nProvider } from "fumadocs-ui/contexts/i18n";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono, Noto_Sans_SC } from "next/font/google";
import { i18n } from "@/lib/i18n";
import { CustomAISearch } from '@/components/custom-ai-search';
import "../globals.css";

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
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cn",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html
      lang={lang}
      className={`${inter.variable} ${jetbrainsMono.variable} ${notoSansSC.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <RootProvider
          search={{
            options: {
              api: "/api/search",
            },
          }}
        >
          <I18nProvider
            locale={lang}
            translations={i18n.translations[lang as keyof typeof i18n.translations]}
            locales={[
              {
                name: "English",
                locale: "en",
              },
              {
                name: "中文",
                locale: "zh",
              },
            ]}
          >
            {children}
            <CustomAISearch />
          </I18nProvider>
        </RootProvider>
      </body>
    </html>
  );
}
