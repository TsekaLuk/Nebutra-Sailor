import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "../..");

/**
 * Excluded packages: tooling and non-design-system workspace packages.
 * These appear as workspace deps in app packages but are not part of
 * the design system dependency hierarchy under test.
 */
const EXCLUDED_PACKAGES = new Set([
  "@nebutra/tsconfig",
  "@nebutra/eslint-config",
  "@nebutra/db",
  "@nebutra/brand",
  "@nebutra/rate-limit",
  "@nebutra/cache",
  "@nebutra/event-bus",
  "@nebutra/marketing",
  "@nebutra/sanity",
  "@nebutra/theme",
  "@nebutra/preset",
]);

interface DependencyRule {
  name: string;
  packageJsonPath: string;
  allowedDeps: string[];
}

/**
 * Dependency rules based on actual package.json workspace deps.
 *
 * Actual workspace:* deps found in each package (excluding tooling packages):
 *   @nebutra/design-system  (apps/docs-hub/design-system): none
 *   @nebutra/ui             (packages/ui):                  none
 *   @nebutra/custom-ui      (packages/custom-ui):           @nebutra/design-system
 *   @nebutra/web            (apps/web):                     @nebutra/custom-ui, @nebutra/design-system
 *   @nebutra/landing-page   (apps/landing-page):            @nebutra/custom-ui, @nebutra/design-system (+ excluded: brand, marketing, sanity, theme, preset)
 *   @nebutra/docs-hub       (apps/docs-hub):                none
 */
const DEPENDENCY_RULES: DependencyRule[] = [
  {
    name: "@nebutra/design-system",
    packageJsonPath: "apps/docs-hub/design-system/package.json",
    allowedDeps: [],
  },
  {
    name: "@nebutra/ui",
    packageJsonPath: "packages/ui/package.json",
    allowedDeps: ["@nebutra/design-system"],
  },
  {
    name: "@nebutra/custom-ui",
    packageJsonPath: "packages/custom-ui/package.json",
    allowedDeps: ["@nebutra/design-system", "@nebutra/ui"],
  },
  {
    name: "@nebutra/web",
    packageJsonPath: "apps/web/package.json",
    allowedDeps: [
      "@nebutra/design-system",
      "@nebutra/ui",
      "@nebutra/custom-ui",
    ],
  },
  {
    name: "@nebutra/landing-page",
    packageJsonPath: "apps/landing-page/package.json",
    allowedDeps: [
      "@nebutra/design-system",
      "@nebutra/ui",
      "@nebutra/custom-ui",
    ],
  },
  {
    name: "@nebutra/docs-hub",
    packageJsonPath: "apps/docs-hub/package.json",
    allowedDeps: [],
  },
];

interface PackageJson {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
}

/**
 * Extract @nebutra/* workspace dependencies from a package.json,
 * excluding tooling/infrastructure packages that are not part of the
 * design system dependency flow.
 */
function getDesignSystemWorkspaceDeps(
  packageJsonRelativePath: string,
): string[] {
  const fullPath = resolve(ROOT, packageJsonRelativePath);
  const raw = readFileSync(fullPath, "utf-8");
  const pkg: PackageJson = JSON.parse(raw);

  const allDeps: Record<string, string> = {
    ...pkg.dependencies,
    ...pkg.devDependencies,
  };

  return Object.entries(allDeps)
    .filter(([name, version]) => {
      return (
        name.startsWith("@nebutra/") &&
        version === "workspace:*" &&
        !EXCLUDED_PACKAGES.has(name)
      );
    })
    .map(([name]) => name);
}

describe("Property 4: Dependency Flow Conformance", () => {
  it("DEPENDENCY_RULES covers all expected design-system packages", () => {
    expect(DEPENDENCY_RULES.length).toBe(6);
  });

  it("every design-system package workspace deps are a subset of allowed deps", () => {
    fc.assert(
      fc.property(fc.constantFrom(...DEPENDENCY_RULES), (rule) => {
        const actualDeps = getDesignSystemWorkspaceDeps(rule.packageJsonPath);
        const allowedSet = new Set(rule.allowedDeps);

        for (const dep of actualDeps) {
          if (!allowedSet.has(dep)) {
            throw new Error(
              `Package "${rule.name}" has an unauthorized dependency on "${dep}". ` +
                `Allowed design-system deps: [${rule.allowedDeps.join(", ") || "none"}]. ` +
                `This violates the unidirectional dependency flow invariant.`,
            );
          }
        }
        return true;
      }),
      { numRuns: 100 },
    );
  });

  it("design-system has no @nebutra/* workspace dependencies (it is the root)", () => {
    const dsRule = DEPENDENCY_RULES.find(
      (r) => r.name === "@nebutra/design-system",
    );
    expect(dsRule).toBeDefined();
    if (!dsRule) return;

    const actualDeps = getDesignSystemWorkspaceDeps(dsRule.packageJsonPath);
    expect(actualDeps).toHaveLength(0);
  });

  it("@nebutra/docs-hub has no @nebutra/* workspace dependencies (it contains design-system)", () => {
    const docsRule = DEPENDENCY_RULES.find(
      (r) => r.name === "@nebutra/docs-hub",
    );
    expect(docsRule).toBeDefined();
    if (!docsRule) return;

    const actualDeps = getDesignSystemWorkspaceDeps(docsRule.packageJsonPath);
    expect(actualDeps).toHaveLength(0);
  });
});
