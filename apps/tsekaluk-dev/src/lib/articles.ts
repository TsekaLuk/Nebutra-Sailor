import { loader } from 'fumadocs-core/source';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';
import { blogPosts } from '../../.source/server';

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
  baseUrl: '/thinking',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  source: toFumadocsSource(blogPosts as any, []),
});

function normalizeDateStr(date: unknown): string {
  if (date instanceof Date) return date.toISOString().split('T')[0] ?? '';
  return String(date ?? '');
}

// Compatibility helper used by sitemap, rss, and admin pages
export function getArticles(): ArticleMeta[] {
  return blog.getPages().map((page) => {
    const data = page.data as unknown as BlogFrontmatter;
    const slug = page.slugs[0] ?? page.url.split('/').pop() ?? '';
    return {
      slug,
      title: data.title ?? '',
      date: normalizeDateStr(data.date),
      excerpt: data.excerpt ?? '',
      tags: data.tags ?? [],
    };
  }).sort((a, b) => b.date.localeCompare(a.date));
}
