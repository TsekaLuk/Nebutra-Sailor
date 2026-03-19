const fs = require("node:fs");
const _path = require("node:path");

const reportPath =
  "/Users/tseka_luk/.gemini/antigravity/brain/08ff808e-b8de-401a-9f15-6fd556eb5d8e/demo_audit_report.md";
const previewsPath =
  "/Users/tseka_luk/Documents/Nebutra-SaaS-Lab/Nebutra-Sailor/apps/design-docs/src/components/previews";

const reportContent = fs.readFileSync(reportPath, "utf8");

// Extract all missing demos from report
let parsingMissing = false;
const missingInReport = [];

const lines = reportContent.split("\n");
for (const line of lines) {
  if (line.includes("## 🔴 2. Missing Demos")) {
    parsingMissing = true;
    continue;
  }
  if (parsingMissing && line.startsWith("---")) break;

  if (parsingMissing && line.startsWith("- ")) {
    missingInReport.push(line.substring(2).trim());
  }
}

const existingFiles = fs.readdirSync(previewsPath).filter((f) => f.endsWith("-demo.tsx"));
const existingNames = existingFiles.map((f) => f.replace("-demo.tsx", ""));

const _trulyMissing = missingInReport.filter((r) => !existingNames.includes(r));
