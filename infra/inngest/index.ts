export { inngest } from "./client";

import { autoTranslate } from "./auto_translate";
import { recsysRefresh, userProfileUpdate } from "./recsys_refresh";
import { inventorySync, processShopifyOrder } from "./ecommerce_sync";
import { dailyDigestEmail, weeklyTenantReport } from "./daily_digest_email";
import { dailyDbBackup, onDemandBackup } from "./db_backup";
import {
  phTrendingSync,
  phTopicsSync,
  phCacheWarm,
  phFullSync,
} from "./producthunt_sync";

// Re-export all functions
export {
  autoTranslate,
  recsysRefresh,
  userProfileUpdate,
  inventorySync,
  processShopifyOrder,
  dailyDigestEmail,
  weeklyTenantReport,
  dailyDbBackup,
  onDemandBackup,
  phTrendingSync,
  phTopicsSync,
  phCacheWarm,
  phFullSync,
};

// Export all functions for Inngest serve
export const functions = [
  // AI/Translation
  autoTranslate,
  // Recommendations
  recsysRefresh,
  userProfileUpdate,
  // E-commerce
  inventorySync,
  processShopifyOrder,
  // Notifications
  dailyDigestEmail,
  weeklyTenantReport,
  // Infrastructure
  dailyDbBackup,
  onDemandBackup,
  // Third-party
  phTrendingSync,
  phTopicsSync,
  phCacheWarm,
  phFullSync,
];
