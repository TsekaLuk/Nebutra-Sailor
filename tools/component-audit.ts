#!/usr/bin/env npx tsx
/**
 * Component Audit Tool
 *
 * Scans the codebase for:
 * - External UI library usage
 * - Deprecated component usage
 * - Style token violations
 * - Missing registry entries
 *
 * Usage:
 *   npx tsx tools/component-audit.ts
 *   npx tsx tools/component-audit.ts --json
 *   npx tsx tools/component-audit.ts --fix
 */

import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

// Configuration
const CONFIG = {
  // Directories to scan
  scanDirs: ["apps", "packages/custom-ui"],

  // Approved internal packages
  approvedPackages: [
    "@nebutra/design-system",
    "@nebutra/custom-ui",
    "@nebutra/custom-ui",
  ],

  // Pre-approved external libraries
  preApproved: [
    "@radix-ui",
    "framer-motion",
    "lucide-react",
    "recharts",
    "@tanstack/react-table",
    "clsx",
    "class-variance-authority",
    "tailwind-merge",
  ],

  // Libraries requiring approval
  requiresApproval: ["@heroui", "@mui", "@chakra-ui", "antd", "@mantine"],

  // Not recommended
  notRecommended: ["bootstrap", "semantic-ui", "foundation-sites"],

  // Deprecated patterns to check
  deprecatedPatterns: [
    // Add deprecated component patterns here
    // { pattern: /OldComponent/g, replacement: "NewComponent" }
  ],

  // Hard-coded style patterns to flag
  styleViolations: [
    { pattern: /#[0-9a-fA-F]{3,8}(?![-\w])/g, message: "Hard-coded color" },
    { pattern: /\d+px(?!\s*\))/g, message: "Hard-coded pixel value" },
  ],
};

interface AuditResult {
  externalImports: ImportInfo[];
  deprecatedUsage: DeprecatedInfo[];
  styleViolations: StyleViolation[];
  summary: Summary;
}

interface ImportInfo {
  file: string;
  line: number;
  package: string;
  status: "approved" | "requires-approval" | "not-recommended" | "unknown";
}

interface DeprecatedInfo {
  file: string;
  line: number;
  pattern: string;
  suggestion: string;
}

interface StyleViolation {
  file: string;
  line: number;
  match: string;
  message: string;
}

interface Summary {
  filesScanned: number;
  externalImports: number;
  requiresApproval: number;
  notRecommended: number;
  deprecatedUsage: number;
  styleViolations: number;
}

function getImportStatus(pkg: string): ImportInfo["status"] {
  if (CONFIG.approvedPackages.some((p) => pkg.startsWith(p))) {
    return "approved";
  }
  if (CONFIG.preApproved.some((p) => pkg.startsWith(p))) {
    return "approved";
  }
  if (CONFIG.requiresApproval.some((p) => pkg.startsWith(p))) {
    return "requires-approval";
  }
  if (CONFIG.notRecommended.some((p) => pkg.startsWith(p))) {
    return "not-recommended";
  }
  return "unknown";
}

function scanFile(filePath: string): {
  imports: ImportInfo[];
  deprecated: DeprecatedInfo[];
  styles: StyleViolation[];
} {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");
  const results = {
    imports: [] as ImportInfo[],
    deprecated: [] as DeprecatedInfo[],
    styles: [] as StyleViolation[],
  };

  lines.forEach((line, index) => {
    const lineNum = index + 1;

    // Check imports
    const importMatch = line.match(/from\s+["']([^"']+)["']/);
    if (importMatch) {
      const pkg = importMatch[1];
      // Skip relative imports and node builtins
      if (!pkg.startsWith(".") && !pkg.startsWith("node:")) {
        const status = getImportStatus(pkg);
        if (status !== "approved") {
          results.imports.push({
            file: filePath,
            line: lineNum,
            package: pkg,
            status,
          });
        }
      }
    }

    // Check deprecated patterns
    CONFIG.deprecatedPatterns.forEach((dp) => {
      if (dp.pattern.test(line)) {
        results.deprecated.push({
          file: filePath,
          line: lineNum,
          pattern: dp.pattern.toString(),
          suggestion: dp.replacement,
        });
      }
    });

    // Check style violations (only in JSX/TSX files)
    if (filePath.match(/\.[jt]sx$/)) {
      CONFIG.styleViolations.forEach((sv) => {
        const matches = line.match(sv.pattern);
        if (matches) {
          // Skip if in a comment
          if (line.trim().startsWith("//") || line.trim().startsWith("*")) {
            return;
          }
          results.styles.push({
            file: filePath,
            line: lineNum,
            match: matches[0],
            message: sv.message,
          });
        }
      });
    }
  });

  return results;
}

function findFiles(dir: string, extensions: string[]): string[] {
  const files: string[] = [];

  function walk(currentDir: string) {
    if (!fs.existsSync(currentDir)) return;

    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      // Skip node_modules and dist
      if (entry.name === "node_modules" || entry.name === "dist") {
        continue;
      }

      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }

  walk(dir);
  return files;
}

function runAudit(): AuditResult {
  const rootDir = process.cwd();
  const allImports: ImportInfo[] = [];
  const allDeprecated: DeprecatedInfo[] = [];
  const allStyles: StyleViolation[] = [];
  let filesScanned = 0;

  for (const scanDir of CONFIG.scanDirs) {
    const dirPath = path.join(rootDir, scanDir);
    const files = findFiles(dirPath, [".ts", ".tsx", ".js", ".jsx"]);

    for (const file of files) {
      filesScanned++;
      const results = scanFile(file);
      allImports.push(...results.imports);
      allDeprecated.push(...results.deprecated);
      allStyles.push(...results.styles);
    }
  }

  return {
    externalImports: allImports,
    deprecatedUsage: allDeprecated,
    styleViolations: allStyles,
    summary: {
      filesScanned,
      externalImports: allImports.length,
      requiresApproval: allImports.filter(
        (i) => i.status === "requires-approval",
      ).length,
      notRecommended: allImports.filter((i) => i.status === "not-recommended")
        .length,
      deprecatedUsage: allDeprecated.length,
      styleViolations: allStyles.length,
    },
  };
}

function formatReport(result: AuditResult): string {
  const lines: string[] = [];

  lines.push(
    "╔══════════════════════════════════════════════════════════════╗",
  );
  lines.push(
    "║              COMPONENT AUDIT REPORT                          ║",
  );
  lines.push(
    "╚══════════════════════════════════════════════════════════════╝",
  );
  lines.push("");

  // Summary
  lines.push("📊 Summary");
  lines.push("─".repeat(60));
  lines.push(`   Files scanned:      ${result.summary.filesScanned}`);
  lines.push(`   External imports:   ${result.summary.externalImports}`);
  lines.push(`   Requires approval:  ${result.summary.requiresApproval}`);
  lines.push(`   Not recommended:    ${result.summary.notRecommended}`);
  lines.push(`   Deprecated usage:   ${result.summary.deprecatedUsage}`);
  lines.push(`   Style violations:   ${result.summary.styleViolations}`);
  lines.push("");

  // External imports requiring attention
  if (result.externalImports.length > 0) {
    lines.push("📦 External Imports Requiring Attention");
    lines.push("─".repeat(60));

    const byStatus = {
      "requires-approval": result.externalImports.filter(
        (i) => i.status === "requires-approval",
      ),
      "not-recommended": result.externalImports.filter(
        (i) => i.status === "not-recommended",
      ),
      unknown: result.externalImports.filter((i) => i.status === "unknown"),
    };

    if (byStatus["requires-approval"].length > 0) {
      lines.push("");
      lines.push("⚠️  Requires Approval:");
      byStatus["requires-approval"].forEach((i) => {
        lines.push(`   ${i.file}:${i.line}`);
        lines.push(`      → ${i.package}`);
      });
    }

    if (byStatus["not-recommended"].length > 0) {
      lines.push("");
      lines.push("❌ Not Recommended:");
      byStatus["not-recommended"].forEach((i) => {
        lines.push(`   ${i.file}:${i.line}`);
        lines.push(`      → ${i.package}`);
      });
    }

    if (byStatus.unknown.length > 0) {
      lines.push("");
      lines.push("❓ Unknown (review needed):");
      byStatus.unknown.forEach((i) => {
        lines.push(`   ${i.file}:${i.line}`);
        lines.push(`      → ${i.package}`);
      });
    }
    lines.push("");
  }

  // Deprecated usage
  if (result.deprecatedUsage.length > 0) {
    lines.push("🚫 Deprecated Component Usage");
    lines.push("─".repeat(60));
    result.deprecatedUsage.forEach((d) => {
      lines.push(`   ${d.file}:${d.line}`);
      lines.push(`      Pattern: ${d.pattern}`);
      lines.push(`      Replace with: ${d.suggestion}`);
    });
    lines.push("");
  }

  // Style violations (limited output)
  if (result.styleViolations.length > 0) {
    lines.push("🎨 Style Violations (first 10)");
    lines.push("─".repeat(60));
    result.styleViolations.slice(0, 10).forEach((s) => {
      lines.push(`   ${s.file}:${s.line}`);
      lines.push(`      ${s.message}: ${s.match}`);
    });
    if (result.styleViolations.length > 10) {
      lines.push(`   ... and ${result.styleViolations.length - 10} more`);
    }
    lines.push("");
  }

  // Status
  const hasIssues =
    result.summary.requiresApproval > 0 ||
    result.summary.notRecommended > 0 ||
    result.summary.deprecatedUsage > 0;

  lines.push("─".repeat(60));
  if (hasIssues) {
    lines.push("❌ Audit found issues that need attention");
  } else {
    lines.push("✅ Audit passed - no critical issues found");
  }

  return lines.join("\n");
}

// Main
const args = process.argv.slice(2);
const jsonOutput = args.includes("--json");

console.log("Running component audit...\n");

const result = runAudit();

if (jsonOutput) {
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log(formatReport(result));
}

// Exit with error if critical issues
const hasBlockingIssues =
  result.summary.notRecommended > 0 || result.summary.deprecatedUsage > 0;

process.exit(hasBlockingIssues ? 1 : 0);
