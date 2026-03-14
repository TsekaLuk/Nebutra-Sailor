export { prisma, type PrismaClient } from "./client.js";
export { Prisma } from "./generated/prisma/client.js";
export { withOrgContext, withAdminContext } from "./rls.js";

// Re-export all Prisma types for convenience
export type {
  // Multi-Tenant Core
  Organization,
  User,
  OrganizationMember,
  Plan,
  Role,

  // Content
  Content,
  ContentTranslation,
  ContentEmbedding,
  ContentStatus,

  // E-Commerce
  Product,
  Order,
  OrderItem,
  Integration,
  OrderStatus,
  IntegrationType,

  // Web3
  Wallet,
  Nft,
  NftStatus,

  // User Activity
  UserActivity,
  TenantUsage,

  // AI Service
  AIRequest,
  AIProvider,
  AIRequestType,

  // Recommendation System
  UserPreference,
  Recommendation,

  // Feature Flags
  FeatureFlag,
  FeatureFlagOverride,
  FeatureFlagType,

  // Webhooks
  WebhookEvent,

  // Audit
  AuditLog,
  AuditAction,

  // Billing
  Subscription,
  UsageRecord,
  UsageAggregate,
  UsageLedgerEntry,
  UsageType,
  UsageLedgerSource,
} from "./generated/prisma/client.js";
