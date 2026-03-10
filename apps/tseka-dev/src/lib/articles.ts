import fs from "node:fs";
import path from "node:path";

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

function parseFrontmatter(raw: string): {
  meta: Record<string, string>;
  content: string;
} {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { meta: {}, content: raw };
  }

  const meta: Record<string, string> = {};
  for (const line of match[1]!.split("\n")) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();
    meta[key] = value;
  }

  return { meta, content: match[2]! };
}

function parseTags(raw: string): string[] {
  const trimmed = raw.replace(/^\[/, "").replace(/]$/, "");
  return trimmed
    .split(",")
    .map((t) => t.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

export function getArticles(): ArticleMeta[] {
  const contentDir = path.join(process.cwd(), "content", "thinking");

  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const articles: ArticleMeta[] = files
    .map((file) => {
      try {
        const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
        const { meta } = parseFrontmatter(raw);
        const slug = file.replace(/\.mdx$/, "");

        return {
          slug,
          title: meta["title"] ?? slug,
          date: meta["date"] ?? "",
          excerpt: meta["excerpt"] ?? "",
          tags: meta["tags"] ? parseTags(meta["tags"]) : [],
        };
      } catch {
        return null;
      }
    })
    .filter((a): a is ArticleMeta => a !== null);

  return articles.sort((a, b) => b.date.localeCompare(a.date));
}
