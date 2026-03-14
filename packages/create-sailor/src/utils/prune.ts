import fs from 'fs';
import path from 'path';
import { type NebutraConfig } from './config.js';

function walkDir(dir: string, callback: (filepath: string) => void) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walkDir(p, callback);
    } else {
      callback(p);
    }
  }
}

export async function pruneTemplate(targetDir: string, config: NebutraConfig) {
  const rootPkgPath = path.join(targetDir, 'package.json');
  if (!fs.existsSync(rootPkgPath)) return;
  
  const rootPkg = JSON.parse(fs.readFileSync(rootPkgPath, 'utf8'));

  // 1. ORM Deep Clean
  if (config.orm !== 'prisma') {
    const dbPkgDir = path.join(targetDir, 'packages', 'db');
    if (fs.existsSync(dbPkgDir)) {
      // Remove prisma schema and generated client
      const prismaDir = path.join(dbPkgDir, 'prisma');
      if (fs.existsSync(prismaDir)) fs.rmSync(prismaDir, { recursive: true, force: true });
      
      const dbPkgPath = path.join(dbPkgDir, 'package.json');
      if (fs.existsSync(dbPkgPath)) {
        const dbPkg = JSON.parse(fs.readFileSync(dbPkgPath, 'utf8'));
        if (dbPkg.dependencies) {
          delete dbPkg.dependencies['@prisma/client'];
        }
        if (dbPkg.devDependencies) {
          delete dbPkg.devDependencies['prisma'];
        }
        fs.writeFileSync(dbPkgPath, JSON.stringify(dbPkg, null, 2) + '\n');
      }

      // Overwrite src/index.ts to export mock types and objects to satisfy TSC
      const dbIndexTs = path.join(dbPkgDir, 'src', 'index.ts');
      if (fs.existsSync(dbIndexTs)) {
        const mockDbContent = `
export const prisma = {} as any;
export const db = {} as any;
export type PrismaClient = any;
export type Prisma = any;
export const withOrgContext = (cb: any) => cb(prisma);
export const withAdminContext = (cb: any) => cb(prisma);

// Mock all possible schema types to let consumers compile
export type Organization = any;
export type User = any;
export type OrganizationMember = any;
export type Plan = any;
export type Role = any;
export type Content = any;
export type ContentTranslation = any;
export type ContentEmbedding = any;
export type ContentStatus = any;
export type Product = any;
export type Order = any;
export type OrderItem = any;
export type Integration = any;
export type OrderStatus = any;
export type IntegrationType = any;
export type Wallet = any;
export type Nft = any;
export type NftStatus = any;
export type UserActivity = any;
export type TenantUsage = any;
export type AIRequest = any;
export type AIProvider = any;
export type AIRequestType = any;
export type UserPreference = any;
export type Recommendation = any;
export type FeatureFlag = any;
export type FeatureFlagOverride = any;
export type FeatureFlagType = any;
export type WebhookEvent = any;
export type AuditLog = any;
export type AuditAction = any;
export type Subscription = any;
export type UsageRecord = any;
export type UsageAggregate = any;
export type UsageLedgerEntry = any;
export type UsageType = any;
export type UsageLedgerSource = any;
`;
        fs.writeFileSync(dbIndexTs, mockDbContent);
      }
    }
    
    // Clean up root package.json scripts
    if (rootPkg.scripts && rootPkg.scripts.postinstall) {
       rootPkg.scripts.postinstall = rootPkg.scripts.postinstall.replace(/prisma generate/g, 'echo "ORM Disabled"');
    }
  }

  // 2. i18n Deep Flattening
  if (!config.i18n) {
    const appsDir = path.join(targetDir, 'apps');
    if (fs.existsSync(appsDir)) {
      const apps = fs.readdirSync(appsDir);
      for (const app of apps) {
        const appDir = path.join(appsDir, app);
        if (!fs.statSync(appDir).isDirectory()) continue;

        const srcAppDir = path.join(appDir, 'src', 'app');
        if (!fs.existsSync(srcAppDir)) continue;

        // Find [lang] or [locale] and flatten
        ['[lang]', '[locale]'].forEach(localeDirName => {
          const localePath = path.join(srcAppDir, localeDirName);
          if (fs.existsSync(localePath)) {
            const items = fs.readdirSync(localePath);
            for (const item of items) {
              fs.renameSync(path.join(localePath, item), path.join(srcAppDir, item));
            }
            fs.rmdirSync(localePath);
          }
        });

        // Delete middleware
        ['middleware.ts', 'src/middleware.ts'].forEach(mw => {
          const mwPath = path.join(appDir, mw);
          if (fs.existsSync(mwPath)) fs.rmSync(mwPath);
        });

        // Create mock-i18n.tsx
        const libDir = path.join(appDir, 'src', 'lib');
        if (!fs.existsSync(libDir)) fs.mkdirSync(libDir, { recursive: true });
        
        const mockI18nPath = path.join(libDir, 'mock-i18n.tsx');
        const mockI18nContent = `
import React from 'react';
export function useTranslations(namespace?: string) { return (key: string) => key; }
export function useLocale() { return 'en'; }
export const NextIntlClientProvider = ({ children, ...props }: any) => <>{children}</>;
export async function getTranslations(args: any = {}) { return (key: string) => key; }
export async function getMessages() { return {}; }
export function setRequestLocale(locale: string) {}
export function hasLocale(locales: string[], locale: string) { return true; }
`;
        fs.writeFileSync(mockI18nPath, mockI18nContent);

        // Replace imports across src/
        const srcDir = path.join(appDir, 'src');
        if (fs.existsSync(srcDir)) {
          walkDir(srcDir, (filepath) => {
            if (!filepath.endsWith('.ts') && !filepath.endsWith('.tsx')) return;
            let content = fs.readFileSync(filepath, 'utf8');
            let edited = false;
            
            // Replace next-intl imports
            if (content.includes('next-intl')) {
              content = content.replace(/from\s+['"]next-intl(\/server)?['"]/g, "from '@/lib/mock-i18n'");
              content = content.replace(/import\s+['"]next-intl(\/server)?['"]/g, "import '@/lib/mock-i18n'");
              edited = true;
            }
            
            if (edited) fs.writeFileSync(filepath, content);
          });
        }
        
        // Remove next-intl from package.json
        const appPkgPath = path.join(appDir, 'package.json');
        if (fs.existsSync(appPkgPath)) {
          const appPkg = JSON.parse(fs.readFileSync(appPkgPath, 'utf8'));
          if (appPkg.dependencies) delete appPkg.dependencies['next-intl'];
          fs.writeFileSync(appPkgPath, JSON.stringify(appPkg, null, 2) + '\n');
        }
      }
    }
  }

  // Save the pruned root package.json back
  fs.writeFileSync(rootPkgPath, JSON.stringify(rootPkg, null, 2) + '\n');
}
