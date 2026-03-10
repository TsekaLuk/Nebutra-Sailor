import { projects } from "@/lib/projects";
import { getArticles } from "@/lib/articles";

const BASE_URL = "https://tsekaluk.dev";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const articles = getArticles();

  const articleItems = articles.map(
    (a) => `
    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${BASE_URL}/thinking/${a.slug}</link>
      <description>${escapeXml(a.excerpt)}</description>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <guid isPermaLink="true">${BASE_URL}/thinking/${a.slug}</guid>
    </item>`
  );

  const projectItems = projects.slice(0, 5).map(
    (p) => `
    <item>
      <title>${escapeXml(p.name)} — ${escapeXml(p.tagline)}</title>
      <link>${BASE_URL}/work/${p.slug}</link>
      <description>${escapeXml(p.description)}</description>
      <guid isPermaLink="true">${BASE_URL}/work/${p.slug}</guid>
    </item>`
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Tseka Luk — AI-Native Builder</title>
    <link>${BASE_URL}</link>
    <description>Essays, projects, and updates from Tseka Luk.</description>
    <language>en</language>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${articleItems.join("")}
    ${projectItems.join("")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
