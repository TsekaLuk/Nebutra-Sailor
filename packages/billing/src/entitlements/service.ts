import type { Plan } from "../types.js";
import {
  EntitlementError,
  DEFAULT_PLAN_LIMITS,
} from "../types.js";

// ============================================
// Types
// ============================================

export interface Entitlement {
  id: string;
  organizationId: string;
  feature: string;
  isEnabled: boolean;
  limitValue?: bigint; // null = unlimited
  usedValue: bigint;
  resetPeriod?: "monthly" | "daily";
  lastResetAt?: Date;
  expiresAt?: Date;
  source: "plan" | "addon" | "trial" | "custom";
  metadata?: Record<string, unknown>;
}

export interface EntitlementCheckResult {
  allowed: boolean;
  feature: string;
  reason?: string;
  limit?: bigint;
  used?: bigint;
  remaining?: bigint;
}

export interface GrantEntitlementInput {
  organizationId: string;
  feature: string;
  limitValue?: number;
  resetPeriod?: "monthly" | "daily";
  expiresAt?: Date;
  source: "plan" | "addon" | "trial" | "custom";
  metadata?: Record<string, unknown>;
}

// ============================================
// Feature Definitions
// ============================================

export const FEATURES = {
  // AI Features
  "ai.chat": { name: "AI Chat", description: "Access to AI chat features" },
  "ai.embeddings": { name: "Embeddings", description: "Generate text embeddings" },
  "ai.images": { name: "Image Generation", description: "Generate images with AI" },
  "ai.reasoning": { name: "AI Reasoning", description: "Access to reasoning models" },
  
  // Content Features
  "content.create": { name: "Content Creation", description: "Create content" },
  "content.publish": { name: "Content Publishing", description: "Publish content" },
  "content.analytics": { name: "Content Analytics", description: "View content analytics" },
  
  // Recommendations
  "recommendations.basic": { name: "Basic Recommendations", description: "Basic recommendation features" },
  "recommendations.advanced": { name: "Advanced Recommendations", description: "Advanced ML-based recommendations" },
  
  // Web3 Features
  "web3.nft": { name: "NFT Features", description: "NFT minting and management" },
  "web3.wallet": { name: "Wallet Integration", description: "Web3 wallet integration" },
  
  // Team Features
  "team.members": { name: "Team Members", description: "Add team members" },
  "team.roles": { name: "Custom Roles", description: "Create custom roles" },
  
  // Platform Features
  "api.access": { name: "API Access", description: "Direct API access" },
  "webhooks": { name: "Webhooks", description: "Configure webhooks" },
  "sso": { name: "SSO/SAML", description: "Single sign-on integration" },
  "audit_logs": { name: "Audit Logs", description: "View audit logs" },
} as const;

export type FeatureKey = keyof typeof FEATURES;

// ============================================
// Plan Feature Mapping
// ============================================

export const PLAN_FEATURES: Record<Plan, FeatureKey[]> = {
  FREE: [
    "ai.chat",
    "content.create",
    "recommendations.basic",
  ],
  PRO: [
    "ai.chat",
    "ai.embeddings",
    "ai.images",
    "content.create",
    "content.publish",
    "content.analytics",
    "recommendations.basic",
    "recommendations.advanced",
    "team.members",
    "api.access",
    "webhooks",
  ],
  ENTERPRISE: [
    "ai.chat",
    "ai.embeddings",
    "ai.images",
    "ai.reasoning",
    "content.create",
    "content.publish",
    "content.analytics",
    "recommendations.basic",
    "recommendations.advanced",
    "web3.nft",
    "web3.wallet",
    "team.members",
    "team.roles",
    "api.access",
    "webhooks",
    "sso",
    "audit_logs",
  ],
};

// ============================================
// In-memory store (production would use database)
// ============================================

const entitlements: Map<string, Entitlement[]> = new Map();

/**
 * Check if an organization has access to a feature
 */
export function checkEntitlement(
  organizationId: string,
  feature: string,
  quantity?: number
): EntitlementCheckResult {
  const orgEntitlements = entitlements.get(organizationId) || [];
  const entitlement = orgEntitlements.find((e) => e.feature === feature);

  // No entitlement found
  if (!entitlement) {
    return {
      allowed: false,
      feature,
      reason: "Feature not available in your plan",
    };
  }

  // Check if enabled
  if (!entitlement.isEnabled) {
    return {
      allowed: false,
      feature,
      reason: "Feature is disabled",
    };
  }

  // Check expiration
  if (entitlement.expiresAt && entitlement.expiresAt < new Date()) {
    return {
      allowed: false,
      feature,
      reason: "Feature has expired",
    };
  }

  // Check limit if specified
  if (entitlement.limitValue !== undefined && quantity) {
    const remaining = entitlement.limitValue - entitlement.usedValue;
    if (remaining < BigInt(quantity)) {
      return {
        allowed: false,
        feature,
        reason: "Usage limit exceeded",
        limit: entitlement.limitValue,
        used: entitlement.usedValue,
        remaining,
      };
    }
  }

  return {
    allowed: true,
    feature,
    limit: entitlement.limitValue,
    used: entitlement.usedValue,
    remaining: entitlement.limitValue
      ? entitlement.limitValue - entitlement.usedValue
      : undefined,
  };
}

/**
 * Require an entitlement - throws if not allowed
 */
export function requireEntitlement(
  organizationId: string,
  feature: string,
  quantity?: number
): void {
  const result = checkEntitlement(organizationId, feature, quantity);
  
  if (!result.allowed) {
    throw new EntitlementError(
      result.reason || "Access denied",
      "ENTITLEMENT_DENIED"
    );
  }
}

/**
 * Grant an entitlement to an organization
 */
export function grantEntitlement(input: GrantEntitlementInput): Entitlement {
  const entitlement: Entitlement = {
    id: crypto.randomUUID(),
    organizationId: input.organizationId,
    feature: input.feature,
    isEnabled: true,
    limitValue: input.limitValue !== undefined ? BigInt(input.limitValue) : undefined,
    usedValue: BigInt(0),
    resetPeriod: input.resetPeriod,
    expiresAt: input.expiresAt,
    source: input.source,
    metadata: input.metadata,
  };

  const orgEntitlements = entitlements.get(input.organizationId) || [];
  
  // Remove existing entitlement for this feature
  const filtered = orgEntitlements.filter((e) => e.feature !== input.feature);
  filtered.push(entitlement);
  
  entitlements.set(input.organizationId, filtered);
  
  return entitlement;
}

/**
 * Revoke an entitlement from an organization
 */
export function revokeEntitlement(
  organizationId: string,
  feature: string
): void {
  const orgEntitlements = entitlements.get(organizationId) || [];
  const filtered = orgEntitlements.filter((e) => e.feature !== feature);
  entitlements.set(organizationId, filtered);
}

/**
 * Increment usage for a feature
 */
export function incrementUsage(
  organizationId: string,
  feature: string,
  quantity: number = 1
): void {
  const orgEntitlements = entitlements.get(organizationId) || [];
  const entitlement = orgEntitlements.find((e) => e.feature === feature);
  
  if (entitlement) {
    entitlement.usedValue += BigInt(quantity);
  }
}

/**
 * Reset usage for a feature
 */
export function resetUsage(
  organizationId: string,
  feature: string
): void {
  const orgEntitlements = entitlements.get(organizationId) || [];
  const entitlement = orgEntitlements.find((e) => e.feature === feature);
  
  if (entitlement) {
    entitlement.usedValue = BigInt(0);
    entitlement.lastResetAt = new Date();
  }
}

/**
 * Get all entitlements for an organization
 */
export function getEntitlements(organizationId: string): Entitlement[] {
  return entitlements.get(organizationId) || [];
}

/**
 * Initialize entitlements for a plan
 */
export function initializePlanEntitlements(
  organizationId: string,
  plan: Plan
): Entitlement[] {
  const features = PLAN_FEATURES[plan] || [];
  const limits = DEFAULT_PLAN_LIMITS[plan];
  
  const granted: Entitlement[] = [];
  
  for (const feature of features) {
    const entitlement = grantEntitlement({
      organizationId,
      feature,
      source: "plan",
    });
    granted.push(entitlement);
  }
  
  // Add usage-based entitlements with limits
  if (limits.apiCalls !== -1) {
    const apiEntitlement = grantEntitlement({
      organizationId,
      feature: "api.calls",
      limitValue: limits.apiCalls,
      resetPeriod: "monthly",
      source: "plan",
    });
    granted.push(apiEntitlement);
  }
  
  if (limits.aiTokens !== -1) {
    const tokenEntitlement = grantEntitlement({
      organizationId,
      feature: "ai.tokens",
      limitValue: limits.aiTokens,
      resetPeriod: "monthly",
      source: "plan",
    });
    granted.push(tokenEntitlement);
  }
  
  return granted;
}

/**
 * Check if a feature is available in a plan
 */
export function isPlanFeature(plan: Plan, feature: string): boolean {
  const features = PLAN_FEATURES[plan] || [];
  return features.includes(feature as FeatureKey);
}
