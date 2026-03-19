"use client";

import { AnimateIn, AnimateInGroup } from "@nebutra/ui/components";
import { ArrowRight, ArrowUpRight, Calendar } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export function LatestThinking({ articles }: { articles: ArticleMeta[] }) {
  const t = useTranslations("thinking");

  if (!articles || articles.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <AnimateIn preset="fade" inView>
            <p className="font-serif italic text-2xl text-gray-400 dark:text-gray-500 mb-4 tracking-tight">
              {t("latest_label") || "Latest Thinking"}
            </p>
          </AnimateIn>

          <AnimateIn preset="fadeUp" delay={0.1} inView>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {t("latest_headline") || "Recent Writings"}
            </h2>
          </AnimateIn>
        </div>

        <AnimateIn preset="fade" delay={0.2} inView>
          <Link
            href="/thinking"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            {t("view_all") || "View All Writings"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimateIn>
      </div>

      <AnimateInGroup stagger="normal" inView className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.slice(0, 3).map((article, i) => (
          <AnimateIn key={article.slug} preset="fadeUp" inView delay={0.1 * i}>
            <Link
              href={`/thinking/${article.slug}`}
              className="group flex flex-col h-full rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
                  <Calendar className="h-3.5 w-3.5" />
                  {article.date}
                </span>
                <ArrowUpRight className="h-4 w-4 text-gray-300 dark:text-gray-600 transition-colors group-hover:text-foreground" />
              </div>

              <h3 className="text-xl font-bold tracking-tight text-foreground mb-3 group-hover:text-[var(--color-accent-dark)] transition-colors line-clamp-2">
                {article.title}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 mb-6 flex-1">
                {article.excerpt}
              </p>

              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-gray-50 dark:bg-gray-800 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </AnimateIn>
        ))}
      </AnimateInGroup>
    </section>
  );
}
