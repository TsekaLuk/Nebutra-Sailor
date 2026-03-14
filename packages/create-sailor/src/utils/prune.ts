import fs from 'fs';
import path from 'path';
import { type NebutraConfig } from './config.js';

export async function pruneTemplate(targetDir: string, config: NebutraConfig) {
  const pkgPath = path.join(targetDir, 'package.json');
  if (!fs.existsSync(pkgPath)) return;

  const pkgString = fs.readFileSync(pkgPath, 'utf8');
  const pkg = JSON.parse(pkgString);

  // 1. Database & ORM Pruning
  if (config.orm === 'prisma') {
    // Keep prisma docs/schema, prune drizzle if and when Drizzle gets added to the boilerplate
    // E.g., delete pkg.dependencies['drizzle-orm']
  } else if (config.orm === 'drizzle') {
    // If Prisma is currently default in the template, we need to remove it
    if (pkg.dependencies) {
      delete pkg.dependencies['@prisma/client'];
      delete pkg.dependencies['@prisma/adapter-pg'];
    }
    if (pkg.devDependencies) {
      delete pkg.devDependencies['prisma'];
    }
    // Delete Prisma folder
    const prismaDir = path.join(targetDir, 'prisma');
    if (fs.existsSync(prismaDir)) {
      fs.rmSync(prismaDir, { recursive: true, force: true });
    }
  } else if (config.orm === 'none') {
    // Remove all DB things
    if (pkg.dependencies) {
      delete pkg.dependencies['@prisma/client'];
      delete pkg.dependencies['@prisma/adapter-pg'];
    }
    if (pkg.devDependencies) {
      delete pkg.devDependencies['prisma'];
    }
    const prismaDir = path.join(targetDir, 'prisma');
    if (fs.existsSync(prismaDir)) {
      fs.rmSync(prismaDir, { recursive: true, force: true });
    }
  }

  // 2. i18n Pruning (Optional)
  if (!config.i18n) {
    if (pkg.dependencies) {
      delete pkg.dependencies['next-intl'];
    }
    // Currently the app is structured [locale]/(main). If i18n is disabled, 
    // a deep refactor is needed (moving app/[locale]/* to app/*). 
    // For now, we will just remove the dependency to show the concept.
  }

  // 3. AI Providers Pruning
  // E.g., deleting 'ai' or '@ai-sdk/openai' if they choose none etc.

  // 4. Clean up scripts
  if (config.orm !== 'prisma' && pkg.scripts) {
    if (pkg.scripts.build) {
      pkg.scripts.build = pkg.scripts.build.replace('prisma generate && ', '');
    }
    if (pkg.scripts.postinstall) {
      delete pkg.scripts.postinstall;
    }
  }

  // Save the pruned package.json back
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
}
