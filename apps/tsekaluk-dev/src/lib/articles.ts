import { readFileSync } from "node:fs";
import { join } from "node:path";
import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import { blogPosts } from "../../.source/server";

// Re-export ArticleMeta for backward compatibility
export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

// Frontmatter shape from source.config.ts schema
export interface BlogFrontmatter {
  title: string;
  date: string | Date;
  excerpt: string;
  tags: string[];
  body: React.ComponentType;
}

export const blog = loader({
  baseUrl: "/thinking",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  source: toFumadocsSource(blogPosts as any, []),
});

function normalizeDateStr(date: unknown): string {
  if (date instanceof Date) return date.toISOString().split("T")[0] ?? "";
  return String(date ?? "");
}

/** Returns estimated reading time in minutes (200 WPM). */
export function getReadingTime(slug: string): number {
  try {
    const raw = readFileSync(join(process.cwd(), "content", "thinking", `${slug}.mdx`), "utf-8");
    // Strip frontmatter then count words in plain text
    const body = raw.replace(/^---[\s\S]*?---\n?/, "");
    const text = body
      .replace(/```[\s\S]*?```/g, "") // code blocks
      .replace(/`[^`]*`/g, "") // inline code
      .replace(/!\[.*?\]\(.*?\)/g, "") // images
      .replace(/\[.*?\]\(.*?\)/g, "$1") // links → text
      .replace(/#{1,6}\s/g, "") // headings
      .replace(/[*_~>]/g, ""); // formatting chars
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(wordCount / 200));
  } catch {
    return 1;
  }
}

// Compatibility helper used by sitemap, rss, and admin pages
export function getArticles(): ArticleMeta[] {
  return blog
    .getPages()
    .map((page) => {
      const data = page.data as unknown as BlogFrontmatter;
      const slug = page.slugs[0] ?? page.url.split("/").pop() ?? "";
      return {
        slug,
        title: data.title ?? "",
        date: normalizeDateStr(data.date),
        excerpt: data.excerpt ?? "",
        tags: data.tags ?? [],
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}
