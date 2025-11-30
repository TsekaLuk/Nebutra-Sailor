export { prisma, type PrismaClient } from "./client.js";

// Re-export Prisma types for convenience
export type {
  Organization,
  User,
  OrganizationMember,
  Content,
  TenantUsage,
  Plan,
  Role,
  ContentStatus,
} from "@prisma/client";
