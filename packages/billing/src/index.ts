/**
 * @nebutra/billing
 *
 * Comprehensive billing & monetization infrastructure for Nebutra
 *
 * Features:
 * - Stripe integration (subscriptions, payments, customers)
 * - Usage tracking and metering
 * - Credits system
 * - Feature entitlements
 * - Plan management
 *
 * @example
 * ```typescript
 * import {
 *   initStripe,
 *   createCheckoutSession,
 *   recordUsage,
 *   checkEntitlement,
 * } from "@nebutra/billing";
 *
 * // Initialize Stripe
 * initStripe({ secretKey: process.env.STRIPE_SECRET_KEY! });
 *
 * // Create checkout session
 * const session = await createCheckoutSession({
 *   customerId: "cus_xxx",
 *   priceId: "price_xxx",
 *   successUrl: "https://app.example.com/success",
 *   cancelUrl: "https://app.example.com/cancel",
 * });
 *
 * // Record usage
 * recordUsage({
 *   organizationId: "org_xxx",
 *   type: "AI_TOKEN",
 *   quantity: 1000,
 *   resource: "gpt-4o",
 * });
 *
 * // Check feature entitlement
 * const result = checkEntitlement("org_xxx", "ai.chat");
 * if (result.allowed) {
 *   // Proceed with the feature
 * }
 * ```
 */

// Types
export type {
  Plan,
  SubscriptionStatus,
  BillingInterval,
  InvoiceStatus,
  PaymentMethodType,
  UsageType,
  CreditTransactionType,
  PlanLimits,
  PricingConfig,
  UsagePricing,
  CreateSubscriptionInput,
  UpdateSubscriptionInput,
  RecordUsageInput,
  PurchaseCreditsInput,
  CheckEntitlementInput,
} from "./types.js";

// Constants
export {
  DEFAULT_PLAN_LIMITS,
  DEFAULT_PRICING,
  DEFAULT_USAGE_PRICING,
} from "./types.js";

// Schemas
export {
  CreateSubscriptionSchema,
  UpdateSubscriptionSchema,
  RecordUsageSchema,
  PurchaseCreditsSchema,
  CheckEntitlementSchema,
} from "./types.js";

// Errors
export {
  BillingError,
  SubscriptionError,
  UsageError,
  EntitlementError,
  PaymentError,
} from "./types.js";

// Stripe
export {
  initStripe,
  getStripe,
  getWebhookSecret,
  createCustomer,
  getCustomer,
  updateCustomer,
  deleteCustomer,
  getOrCreateCustomer,
  createBillingPortalSession,
  createCheckoutSession,
} from "./stripe/index.js";

// Subscriptions
export {
  createStripeSubscription,
  getStripeSubscription,
  updateStripeSubscription,
  cancelStripeSubscription,
  resumeStripeSubscription,
  pauseStripeSubscription,
  unpauseStripeSubscription,
  getCustomerSubscriptions,
  mapStripeStatusToLocal,
  previewSubscriptionChange,
} from "./subscriptions/index.js";

// Usage
export {
  recordUsage,
  flushUsageBuffer,
  checkUsageLimit,
  getPlanUsageLimit,
  calculateOverageCost,
  getCurrentPeriod,
  formatUsage,
} from "./usage/index.js";

// Credits
export {
  getCreditBalance,
  addCredits,
  deductCredits,
  hasEnoughCredits,
  getCreditTransactions,
  dollarsToCredits,
  creditsToDollars,
  formatCredits,
  refundCredits,
  addBonusCredits,
} from "./credits/index.js";

// Entitlements
export {
  checkEntitlement,
  requireEntitlement,
  grantEntitlement,
  revokeEntitlement,
  incrementUsage,
  resetUsage,
  getEntitlements,
  initializePlanEntitlements,
  isPlanFeature,
  FEATURES,
  PLAN_FEATURES,
} from "./entitlements/index.js";
