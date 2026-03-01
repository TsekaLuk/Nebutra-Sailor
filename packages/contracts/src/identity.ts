import { z } from "zod";

export const AuthProviderSchema = z.enum(["clerk", "authjs", "custom"]);
export type AuthProvider = z.infer<typeof AuthProviderSchema>;

export const CanonicalRoleSchema = z.enum([
  "OWNER",
  "ADMIN",
  "MEMBER",
  "VIEWER",
]);
export type CanonicalRole = z.infer<typeof CanonicalRoleSchema>;

export const CanonicalPlanSchema = z.enum(["FREE", "PRO", "ENTERPRISE"]);
export type CanonicalPlan = z.infer<typeof CanonicalPlanSchema>;

export const CanonicalIdentitySchema = z.object({
  provider: AuthProviderSchema,
  userId: z.string().min(1),
  organizationId: z.string().min(1).optional(),
  role: CanonicalRoleSchema.optional(),
  plan: CanonicalPlanSchema.optional(),
  email: z.string().email().optional(),
  sessionId: z.string().min(1).optional(),
  claimsVersion: z.literal("v1").default("v1"),
});
export type CanonicalIdentity = z.infer<typeof CanonicalIdentitySchema>;

export const ExternalAccountLinkSchema = z.object({
  provider: AuthProviderSchema,
  providerUserId: z.string().min(1),
  internalUserId: z.string().min(1),
  linkedAt: z.coerce.date(),
  metadata: z.record(z.string(), z.unknown()).default({}),
});
export type ExternalAccountLink = z.infer<typeof ExternalAccountLinkSchema>;

export const TenantHeaderContractSchema = z.object({
  "x-user-id": z.string().min(1).optional(),
  "x-organization-id": z.string().min(1).optional(),
  "x-role": z.string().min(1).optional(),
  "x-plan": CanonicalPlanSchema.optional(),
});
export type TenantHeaderContract = z.infer<typeof TenantHeaderContractSchema>;
