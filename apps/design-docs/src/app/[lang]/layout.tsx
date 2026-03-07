import { RootProvider } from "fumadocs-ui/provider/next";
import { I18nProvider } from "fumadocs-ui/contexts/i18n";
import type { ReactNode } from "react";
import { i18n } from "@/lib/i18n";
import "../globals.css";

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} suppressHydrationWarning>
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
          >
            {children}
          </I18nProvider>
        </RootProvider>
      </body>
    </html>
  );
}
