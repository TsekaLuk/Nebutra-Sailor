import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ChatInterface } from "@/components/soul/chat-interface";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "soul" });

  return {
    title: t("metadata_title"),
    description: t("metadata_desc"),
    openGraph: {
      images: [
        `/og?title=${encodeURIComponent(t("metadata_title"))}&subtitle=${encodeURIComponent(t("metadata_desc"))}`,
      ],
    },
    alternates: {
      canonical: `https://tsekaluk.dev/${locale}/soul`,
      languages: {
        en: "https://tsekaluk.dev/en/soul",
        zh: "https://tsekaluk.dev/zh/soul",
      },
    },
  };
}

export default async function SoulPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "soul" });

  return (
    <section className="mx-auto max-w-2xl px-6 py-12 md:py-16">
      {/* Page header */}
      <div className="mb-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[var(--color-accent-fg)] opacity-70">
          {t("page_label")}
        </p>
        <div className="flex items-center gap-3">
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t("page_headline")}
          </h1>
          <span className="font-mono flex items-center gap-2 text-[10px] uppercase tracking-widest text-[var(--color-accent-fg)]">
            <span className="animate-pulse">{">_"}</span>
            {t("status")}
          </span>
        </div>
        <p className="mt-3 max-w-lg text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {t("page_desc")}
        </p>
      </div>

      {/* Chat container */}
      <div
        className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950"
        style={{ height: "min(600px, calc(100vh - 320px))" }}
      >
        <ChatInterface />
      </div>
    </section>
  );
}
