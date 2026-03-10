import type { Metadata } from "next";
import Link from "next/link";
import { getArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Thinking — Tseka Luk",
  description: "Essays on building, growth, and AI.",
  alternates: {
    canonical: "https://tsekaluk.dev/thinking",
  },
};

export default function ThinkingPage() {
  const articles = getArticles();

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      {/* Section header */}
      <div className="mb-16">
        <p className="font-serif italic text-lg text-gray-400">
          / Essays &amp; ideas
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Thinking
        </h1>
      </div>

      {/* Article list */}
      <div className="divide-y divide-gray-100">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/thinking/${article.slug}`}
            className="group block py-8 transition-colors first:pt-0 last:pb-0 hover:border-[var(--color-accent)]"
          >
            <div className="flex flex-col gap-3">
              {/* Date + tags row */}
              <div className="flex items-center gap-3">
                <time className="font-mono text-sm text-gray-400">
                  {article.date}
                </time>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-[var(--color-accent-dark)]">
                {article.title}
              </h2>

              {/* Excerpt */}
              <p className="text-sm leading-relaxed text-gray-500">
                {article.excerpt}
              </p>
            </div>
          </Link>
        ))}

        {articles.length === 0 && (
          <p className="text-gray-400">No articles yet.</p>
        )}
      </div>
    </section>
  );
}
