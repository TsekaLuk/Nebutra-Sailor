import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getArticles } from "@/lib/articles";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.thinking" });
  return {
    title: t("metadata_title"),
    description: t("metadata_desc"),
    alternates: {
      canonical: `https://tsekaluk.dev/${locale}/thinking`,
      languages: {
        en: "https://tsekaluk.dev/en/thinking",
        zh: "https://tsekaluk.dev/zh/thinking",
      },
    },
  };
}

export default async function ThinkingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.thinking" });
  const articles = getArticles();

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <div className="mb-16">
        <p className="font-serif italic text-lg text-gray-400 dark:text-gray-500">
          {t("label")}
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl">
          {t("headline")}
        </h1>
      </div>

      <div className="divide-y divide-gray-100 dark:divide-gray-800">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/thinking/${article.slug}`}
            className="group block py-8 transition-colors first:pt-0 last:pb-0 hover:border-[var(--color-accent)]"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <time className="font-mono text-sm text-gray-400 dark:text-gray-500">
                  {article.date}
                </time>
                {article.tags?.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 group-hover:text-[var(--color-accent-dark)] transition-colors">
                {article.title}
              </h2>
              {article.excerpt && (
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
