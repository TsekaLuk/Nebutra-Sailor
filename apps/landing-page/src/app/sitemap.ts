import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nebutra.com";

  // Static pages
  const staticPages = [
    "",
    "/features",
    "/pricing",
    "/about",
    "/contact",
    "/blog",
    "/docs",
    "/changelog",
    "/privacy",
    "/terms",
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  // TODO: Add dynamic pages from CMS (blog posts, docs, etc.)
  // const posts = await getBlogPosts();
  // const dynamicRoutes = posts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: "monthly" as const,
  //   priority: 0.6,
  // }));

  return [...staticRoutes];
}
