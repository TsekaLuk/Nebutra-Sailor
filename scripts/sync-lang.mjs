/* eslint-disable no-console, no-undef */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function copyMissingFiles(dirEn, dirZh) {
  if (!fs.existsSync(dirEn)) return;
  const entries = fs.readdirSync(dirEn, { withFileTypes: true });
  for (const entry of entries) {
    const src = path.join(dirEn, entry.name);
    const dest = path.join(dirZh, entry.name);
    if (entry.isDirectory()) {
      if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
      copyMissingFiles(src, dest);
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      if (!fs.existsSync(dest)) {
        fs.copyFileSync(src, dest);
        console.log("Copied to", dest);
      }
    }
  }
}

const base = path.join(__dirname, "../apps/design-docs/content/docs");
copyMissingFiles(path.join(base, "en"), path.join(base, "zh"));
