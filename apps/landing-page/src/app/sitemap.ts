import { MetadataRoute } from "next";
import { client } from "@nebutra/sanity";

// Sanity queries for sitemap
const postsForSitemapQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  "slug": slug.current,
  _updatedAt,
  publishedAt
}`;

const pagesForSitemapQuery = `*[_type == "page" && defined(slug.current)] {
  "slug": slug.current,
  _updatedAt
}`;

const categoriesForSitemapQuery = `*[_type == "category" && defined(slug.current)] {
  "slug": slug.current,
  _updatedAt
}`;

interface SanityDocument {
  slug: string;
  _updatedAt?: string;
  publishedAt?: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nebutra.com";

  // Static pages with priorities
  const staticPages: Array<{ path: string; priority: number; changeFreq: "daily" | "weekly" | "monthly" }> = [
    { path: "", priority: 1.0, changeFreq: "daily" },
    { path: "/features", priority: 0.9, changeFreq: "weekly" },
    { path: "/pricing", priority: 0.9, changeFreq: "weekly" },
    { path: "/about", priority: 0.7, changeFreq: "monthly" },
    { path: "/contact", priority: 0.6, changeFreq: "monthly" },
    { path: "/blog", priority: 0.8, changeFreq: "daily" },
    { path: "/docs", priority: 0.8, changeFreq: "weekly" },
    { path: "/changelog", priority: 0.5, changeFreq: "weekly" },
    { path: "/privacy", priority: 0.3, changeFreq: "monthly" },
    { path: "/terms", priority: 0.3, changeFreq: "monthly" },
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFreq,
    priority: page.priority,
  }));

  // Fetch dynamic content from Sanity CMS
  let blogRoutes: MetadataRoute.Sitemap = [];
  let pageRoutes: MetadataRoute.Sitemap = [];
  let categoryRoutes: MetadataRoute.Sitemap = [];

  try {
    // Blog posts
    const posts: SanityDocument[] = await client.fetch(postsForSitemapQuery);
    blogRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post._updatedAt || post.publishedAt || new Date()),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

    // CMS pages
    const pages: SanityDocument[] = await client.fetch(pagesForSitemapQuery);
    pageRoutes = pages.map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: new Date(page._updatedAt || new Date()),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));

    // Categories
    const categories: SanityDocument[] = await client.fetch(categoriesForSitemapQuery);
    categoryRoutes = categories.map((category) => ({
      url: `${baseUrl}/blog/category/${category.slug}`,
      lastModified: new Date(category._updatedAt || new Date()),
      changeFrequency: "weekly" as const,
      priority: 0.4,
    }));
  } catch (error) {
    // Sanity not configured or fetch failed - continue with static routes only
    console.warn("Sitemap: Could not fetch CMS content", error);
  }

  return [...staticRoutes, ...blogRoutes, ...pageRoutes, ...categoryRoutes];
}
