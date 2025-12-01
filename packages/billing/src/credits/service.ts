import type { CreditTransactionType } from "../types.js";
import { BillingError } from "../types.js";

// ============================================
// Types
// ============================================

export interface CreditBalance {
  organizationId: string;
  balance: number;
  currency: string;
}

export interface CreditTransaction {
  id: string;
  organizationId: string;
  type: CreditTransactionType;
  amount: number;
  balanceAfter: number;
  description?: string;
  expiresAt?: Date;
  relatedId?: string;
  metadata?: Record<string, unknown>;
  createdAt: Date;
}

export interface AddCreditsInput {
  organizationId: string;
  amount: number;
  type: CreditTransactionType;
  description?: string;
  expiresAt?: Date;
  relatedId?: string;
  metadata?: Record<string, unknown>;
}

export interface DeductCreditsInput {
  organizationId: string;
  amount: number;
  description?: string;
  relatedId?: string;
  metadata?: Record<string, unknown>;
}

// ============================================
// In-memory store (production would use database)
// ============================================

const creditBalances: Map<string, CreditBalance> = new Map();
const creditTransactions: Map<string, CreditTransaction[]> = new Map();

/**
 * Get credit balance for an organization
 */
export function getCreditBalance(organizationId: string): CreditBalance {
  let balance = creditBalances.get(organizationId);
  
  if (!balance) {
    balance = {
      organizationId,
      balance: 0,
      currency: "USD",
    };
    creditBalances.set(organizationId, balance);
  }
  
  return balance;
}

/**
 * Add credits to an organization's balance
 */
export function addCredits(input: AddCreditsInput): CreditTransaction {
  const balance = getCreditBalance(input.organizationId);
  const newBalance = balance.balance + input.amount;
  
  // Update balance
  balance.balance = newBalance;
  creditBalances.set(input.organizationId, balance);
  
  // Create transaction
  const transaction: CreditTransaction = {
    id: crypto.randomUUID(),
    organizationId: input.organizationId,
    type: input.type,
    amount: input.amount,
    balanceAfter: newBalance,
    description: input.description,
    expiresAt: input.expiresAt,
    relatedId: input.relatedId,
    metadata: input.metadata,
    createdAt: new Date(),
  };
  
  // Store transaction
  const transactions = creditTransactions.get(input.organizationId) || [];
  transactions.push(transaction);
  creditTransactions.set(input.organizationId, transactions);
  
  return transaction;
}

/**
 * Deduct credits from an organization's balance
 */
export function deductCredits(input: DeductCreditsInput): CreditTransaction {
  const balance = getCreditBalance(input.organizationId);
  
  if (balance.balance < input.amount) {
    throw new BillingError(
      `Insufficient credits. Available: ${balance.balance}, Required: ${input.amount}`,
      "INSUFFICIENT_CREDITS",
      402
    );
  }
  
  const newBalance = balance.balance - input.amount;
  
  // Update balance
  balance.balance = newBalance;
  creditBalances.set(input.organizationId, balance);
  
  // Create transaction
  const transaction: CreditTransaction = {
    id: crypto.randomUUID(),
    organizationId: input.organizationId,
    type: "USAGE",
    amount: -input.amount,
    balanceAfter: newBalance,
    description: input.description,
    relatedId: input.relatedId,
    metadata: input.metadata,
    createdAt: new Date(),
  };
  
  // Store transaction
  const transactions = creditTransactions.get(input.organizationId) || [];
  transactions.push(transaction);
  creditTransactions.set(input.organizationId, transactions);
  
  return transaction;
}

/**
 * Check if organization has enough credits
 */
export function hasEnoughCredits(
  organizationId: string,
  amount: number
): boolean {
  const balance = getCreditBalance(organizationId);
  return balance.balance >= amount;
}

/**
 * Get credit transaction history
 */
export function getCreditTransactions(
  organizationId: string,
  options?: {
    limit?: number;
    offset?: number;
    type?: CreditTransactionType;
  }
): CreditTransaction[] {
  let transactions = creditTransactions.get(organizationId) || [];
  
  // Filter by type
  if (options?.type) {
    transactions = transactions.filter((t) => t.type === options.type);
  }
  
  // Sort by date descending
  transactions.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  
  // Apply pagination
  const offset = options?.offset || 0;
  const limit = options?.limit || 50;
  
  return transactions.slice(offset, offset + limit);
}

/**
 * Convert dollar amount to credits
 * 1 credit = $0.01 (100 credits = $1)
 */
export function dollarsToCredits(dollars: number): number {
  return Math.round(dollars * 100);
}

/**
 * Convert credits to dollars
 */
export function creditsToDollars(credits: number): number {
  return credits / 100;
}

/**
 * Format credits for display
 */
export function formatCredits(credits: number): string {
  const dollars = creditsToDollars(credits);
  return `$${dollars.toFixed(2)}`;
}

/**
 * Refund credits to an organization
 */
export function refundCredits(input: {
  organizationId: string;
  amount: number;
  reason?: string;
  relatedId?: string;
}): CreditTransaction {
  return addCredits({
    organizationId: input.organizationId,
    amount: input.amount,
    type: "REFUND",
    description: input.reason || "Refund",
    relatedId: input.relatedId,
  });
}

/**
 * Add bonus credits
 */
export function addBonusCredits(input: {
  organizationId: string;
  amount: number;
  reason?: string;
  expiresAt?: Date;
}): CreditTransaction {
  return addCredits({
    organizationId: input.organizationId,
    amount: input.amount,
    type: "BONUS",
    description: input.reason || "Bonus credits",
    expiresAt: input.expiresAt,
  });
}
