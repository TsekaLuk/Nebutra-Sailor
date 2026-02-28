import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { readFileSync, readdirSync } from "node:fs";
import { resolve, dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "../..");
const DESIGN_SYSTEM_SRC = resolve(ROOT, "apps/docs-hub/design-system/src");

const EXCLUDED_DIRS = new Set(["node_modules", ".next", "dist", ".turbo"]);

function collectTsFiles(dir: string): string[] {
  const results: string[] = [];

  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (EXCLUDED_DIRS.has(entry.name)) continue;

    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectTsFiles(fullPath));
    } else if (entry.isFile()) {
      const ext = extname(entry.name);
      if (ext === ".ts" || ext === ".tsx") {
        results.push(fullPath);
      }
    }
  }

  return results;
}

const INLINE_CSS_REGEX = /style=\{\s*\{/;

function fileContainsInlineStyle(filePath: string): boolean {
  const content = readFileSync(filePath, "utf-8");
  return INLINE_CSS_REGEX.test(content);
}

describe("Property 2: No Inline CSS in Design System", () => {
  const tsFiles = collectTsFiles(DESIGN_SYSTEM_SRC);

  it("design-system/src/ contains TypeScript files to check", () => {
    expect(tsFiles.length).toBeGreaterThan(0);
  });

  it("no component file in design-system/src/ uses inline CSS (style={{ ... }} pattern)", () => {
    expect(tsFiles.length).toBeGreaterThan(0);

    fc.assert(
      fc.property(fc.constantFrom(...tsFiles), (filePath) => {
        const hasInlineStyle = fileContainsInlineStyle(filePath);
        if (hasInlineStyle) {
          const relativePath = filePath.replace(ROOT + "/", "");
          throw new Error(
            `File "${relativePath}" uses inline CSS style={{ ... }} which violates the design system constraint. Use CSS classes or design tokens instead.`,
          );
        }
        return true;
      }),
      { numRuns: tsFiles.length },
    );
  });
});
