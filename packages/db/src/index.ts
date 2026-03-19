export { type PrismaClient, prisma } from "./client";
// Re-export all Prisma types for convenience
export type {
  AIProvider,
  // AI Service
  AIRequest,
  AIRequestType,
  AuditAction,
  // Audit
  AuditLog,
  // Content
  Content,
  ContentEmbedding,
  ContentStatus,
  ContentTranslation,
  // Feature Flags
  FeatureFlag,
  FeatureFlagOverride,
  FeatureFlagType,
  Integration,
  IntegrationType,
  Nft,
  NftStatus,
  Order,
  OrderItem,
  OrderStatus,
  // Multi-Tenant Core
  Organization,
  OrganizationMember,
  Plan,
  // E-Commerce
  Product,
  Recommendation,
  Role,
  // Billing
  Subscription,
  TenantUsage,
  UsageAggregate,
  UsageLedgerEntry,
  UsageLedgerSource,
  UsageRecord,
  UsageType,
  User,
  // User Activity
  UserActivity,
  // Recommendation System
  UserPreference,
  // Web3
  Wallet,
  // Webhooks
  WebhookEvent,
} from "./generated/prisma/client";
export { Prisma } from "./generated/prisma/client";
