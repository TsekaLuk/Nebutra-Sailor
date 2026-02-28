import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { readdirSync, statSync } from "node:fs";
import { resolve, dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "../..");
const DESIGN_SYSTEM_SRC = resolve(ROOT, "apps/docs-hub/design-system/src");

const REQUIRED_SUBDIRS = [
  "theme",
  "typography",
  "primitives",
  "components",
] as const;
type RequiredSubdir = (typeof REQUIRED_SUBDIRS)[number];

function subdirExists(subdir: RequiredSubdir): boolean {
  try {
    const full = resolve(DESIGN_SYSTEM_SRC, subdir);
    const stat = statSync(full);
    return stat.isDirectory();
  } catch {
    return false;
  }
}

function getTypeScriptFilesInSubdir(subdir: RequiredSubdir): string[] {
  const full = resolve(DESIGN_SYSTEM_SRC, subdir);
  try {
    const entries = readdirSync(full, { withFileTypes: true });
    return entries
      .filter(
        (e) =>
          e.isFile() &&
          (extname(e.name) === ".ts" || extname(e.name) === ".tsx"),
      )
      .map((e) => join(full, e.name));
  } catch {
    return [];
  }
}

describe("Property 3: Token Structure Completeness", () => {
  it("design-system/src/ contains all required subdirectories", () => {
    expect(REQUIRED_SUBDIRS.length).toBeGreaterThan(0);

    fc.assert(
      fc.property(fc.constantFrom(...REQUIRED_SUBDIRS), (subdir) => {
        const exists = subdirExists(subdir);
        if (!exists) {
          throw new Error(
            `Required subdirectory "apps/docs-hub/design-system/src/${subdir}" does not exist. ` +
              `The design system must maintain this structural invariant.`,
          );
        }
        return true;
      }),
      { numRuns: REQUIRED_SUBDIRS.length },
    );
  });

  it("each required subdirectory has at least one TypeScript file", () => {
    fc.assert(
      fc.property(fc.constantFrom(...REQUIRED_SUBDIRS), (subdir) => {
        const files = getTypeScriptFilesInSubdir(subdir);
        if (files.length === 0) {
          throw new Error(
            `Required subdirectory "apps/docs-hub/design-system/src/${subdir}" exists but contains no TypeScript (.ts or .tsx) files. ` +
              `Each design system module must have at least one implementation file.`,
          );
        }
        return true;
      }),
      { numRuns: REQUIRED_SUBDIRS.length },
    );
  });
});
