import { Redis } from "@upstash/redis";

let redisInstance: Redis | null = null;

/**
 * Get or create Redis client singleton
 */
export function getRedis(): Redis {
  if (!redisInstance) {
    if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
      throw new Error("Redis credentials not configured");
    }
    redisInstance = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
  }
  return redisInstance;
}

/**
 * Redis client instance (lazy initialized)
 * Returns null if not configured
 */
export const redis = (() => {
  try {
    return getRedis();
  } catch {
    return null;
  }
})();

export { Redis };
