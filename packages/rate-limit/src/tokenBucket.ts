export interface TokenBucketConfig {
  maxTokens: number;
  refillRate: number; // tokens per second
  refillInterval: number; // milliseconds
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
  retryAfter?: number;
}

// Plan-based rate limits
export const PLAN_LIMITS: Record<string, TokenBucketConfig> = {
  FREE: {
    maxTokens: 100,
    refillRate: 10,
    refillInterval: 1000,
  },
  PRO: {
    maxTokens: 1000,
    refillRate: 100,
    refillInterval: 1000,
  },
  ENTERPRISE: {
    maxTokens: 10000,
    refillRate: 1000,
    refillInterval: 1000,
  },
};

// API weight for different endpoints
export const API_WEIGHTS: Record<string, number> = {
  // Light operations
  "GET:/api/content/feed": 1,
  "GET:/api/content/post": 1,
  
  // Medium operations
  "POST:/api/content/post": 5,
  "PUT:/api/content/post": 3,
  
  // Heavy operations (AI)
  "POST:/api/ai/generate": 20,
  "POST:/api/ai/embed": 10,
  "POST:/api/ai/translate": 15,
  
  // Default
  default: 2,
};

export function getApiWeight(method: string, path: string): number {
  const key = `${method}:${path}`;
  return API_WEIGHTS[key] ?? API_WEIGHTS.default;
}

/**
 * In-memory token bucket implementation
 * In production, use Redis for distributed rate limiting
 */
export class TokenBucket {
  private buckets: Map<string, { tokens: number; lastRefill: number }> =
    new Map();

  constructor(private config: TokenBucketConfig) {}

  async consume(key: string, tokens: number = 1): Promise<RateLimitResult> {
    const now = Date.now();
    let bucket = this.buckets.get(key);

    if (!bucket) {
      bucket = { tokens: this.config.maxTokens, lastRefill: now };
      this.buckets.set(key, bucket);
    }

    // Refill tokens based on time elapsed
    const elapsed = now - bucket.lastRefill;
    const refillAmount = Math.floor(
      (elapsed / this.config.refillInterval) * this.config.refillRate
    );

    if (refillAmount > 0) {
      bucket.tokens = Math.min(
        this.config.maxTokens,
        bucket.tokens + refillAmount
      );
      bucket.lastRefill = now;
    }

    // Check if we have enough tokens
    if (bucket.tokens >= tokens) {
      bucket.tokens -= tokens;
      return {
        allowed: true,
        remaining: bucket.tokens,
        resetAt: now + this.config.refillInterval,
      };
    }

    // Not enough tokens
    const tokensNeeded = tokens - bucket.tokens;
    const waitTime = Math.ceil(
      (tokensNeeded / this.config.refillRate) * this.config.refillInterval
    );

    return {
      allowed: false,
      remaining: bucket.tokens,
      resetAt: now + waitTime,
      retryAfter: Math.ceil(waitTime / 1000),
    };
  }

  // Clean up old buckets periodically
  cleanup(maxAge: number = 3600000): void {
    const now = Date.now();
    for (const [key, bucket] of this.buckets) {
      if (now - bucket.lastRefill > maxAge) {
        this.buckets.delete(key);
      }
    }
  }
}

/**
 * Create a rate limiter for a specific plan
 */
export function createRateLimiter(plan: string): TokenBucket {
  const config = PLAN_LIMITS[plan] ?? PLAN_LIMITS.FREE;
  return new TokenBucket(config);
}

// Global rate limiters by plan
const rateLimiters: Map<string, TokenBucket> = new Map();

export function getRateLimiter(plan: string): TokenBucket {
  if (!rateLimiters.has(plan)) {
    rateLimiters.set(plan, createRateLimiter(plan));
  }
  return rateLimiters.get(plan)!;
}
