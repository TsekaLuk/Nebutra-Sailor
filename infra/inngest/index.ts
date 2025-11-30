export { inngest } from "./client";
export { autoTranslate } from "./auto_translate";
export { recsysRefresh, userProfileUpdate } from "./recsys_refresh";
export { inventorySync, processShopifyOrder } from "./ecommerce_sync";
export { dailyDigestEmail, weeklyTenantReport } from "./daily_digest_email";
export { dailyDbBackup, onDemandBackup } from "./db_backup";

// Export all functions for Inngest serve
export const functions = [
  // AI/Translation
  require("./auto_translate").autoTranslate,
  // Recommendations
  require("./recsys_refresh").recsysRefresh,
  require("./recsys_refresh").userProfileUpdate,
  // E-commerce
  require("./ecommerce_sync").inventorySync,
  require("./ecommerce_sync").processShopifyOrder,
  // Notifications
  require("./daily_digest_email").dailyDigestEmail,
  require("./daily_digest_email").weeklyTenantReport,
  // Infrastructure
  require("./db_backup").dailyDbBackup,
  require("./db_backup").onDemandBackup,
];
