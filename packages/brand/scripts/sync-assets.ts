#!/usr/bin/env tsx
/**
 * Sync brand assets to app public directories
 * 
 * Usage: pnpm brand:sync
 */

import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const brandRoot = resolve(__dirname, "..");
const monorepoRoot = resolve(brandRoot, "../..");

// Apps to sync brand assets to
const apps = [
  "apps/landing-page",
  "apps/web",
  "apps/studio",
];

// Assets to sync
const assetMappings = [
  // Favicon
  { src: "assets/favicon/favicon.ico", dest: "public/favicon.ico" },
  
  // Logo folder
  { src: "assets/logo", dest: "public/brand", isDir: true },
];

function syncAssets() {
  console.log("🎨 Syncing brand assets...\n");

  for (const app of apps) {
    const appPath = join(monorepoRoot, app);
    
    if (!existsSync(appPath)) {
      console.log(`⚠️  Skipping ${app} (not found)`);
      continue;
    }

    console.log(`📦 ${app}`);

    for (const mapping of assetMappings) {
      const srcPath = join(brandRoot, mapping.src);
      const destPath = join(appPath, mapping.dest);

      if (!existsSync(srcPath)) {
        console.log(`   ⚠️  Source not found: ${mapping.src}`);
        continue;
      }

      // Ensure destination directory exists
      const destDir = mapping.isDir ? destPath : dirname(destPath);
      if (!existsSync(destDir)) {
        mkdirSync(destDir, { recursive: true });
      }

      try {
        if (mapping.isDir) {
          cpSync(srcPath, destPath, { recursive: true });
        } else {
          cpSync(srcPath, destPath);
        }
        console.log(`   ✓ ${mapping.src} → ${mapping.dest}`);
      } catch (error) {
        console.error(`   ✗ Failed: ${error}`);
      }
    }

    console.log();
  }

  console.log("✨ Brand assets synced successfully!");
}

syncAssets();
