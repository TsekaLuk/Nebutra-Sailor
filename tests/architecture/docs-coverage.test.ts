import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "../..");
const DOCS_HUB = resolve(ROOT, "apps/docs-hub");

interface NavigationGroup {
  group: string;
  pages: string[];
}

interface MintConfig {
  navigation: NavigationGroup[];
}

function extractPagesFromMintJson(): string[] {
  const mintJsonPath = resolve(DOCS_HUB, "mint.json");
  const raw = readFileSync(mintJsonPath, "utf-8");
  const config: MintConfig = JSON.parse(raw);

  const pages: string[] = [];
  for (const group of config.navigation) {
    for (const page of group.pages) {
      pages.push(page);
    }
  }
  return pages;
}

function mdxFileExistsForPage(page: string): boolean {
  const mdxPath = resolve(DOCS_HUB, `${page}.mdx`);
  return existsSync(mdxPath);
}

describe("Property 1: Docs Coverage", () => {
  const pages = extractPagesFromMintJson();

  it("every page in mint.json navigation has a corresponding .mdx file", () => {
    expect(pages.length).toBeGreaterThan(0);

    fc.assert(
      fc.property(fc.constantFrom(...pages), (page) => {
        const exists = mdxFileExistsForPage(page);
        if (!exists) {
          throw new Error(
            `Page "${page}" listed in mint.json but no .mdx file found at: apps/docs-hub/${page}.mdx`,
          );
        }
        return true;
      }),
      { numRuns: pages.length },
    );
  });

  it("mint.json navigation has at least 50 pages", () => {
    expect(pages.length).toBeGreaterThanOrEqual(50);
  });
});
