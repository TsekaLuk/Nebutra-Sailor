export { prisma, type PrismaClient } from "./client.js";

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

  // Audit
  AuditLog,
  AuditAction,
} from "@prisma/client";
