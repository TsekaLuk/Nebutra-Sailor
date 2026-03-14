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
 * Redis client instance (lazy initialized).
 * Throws at import time if UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN
 * are not set, so misconfiguration is caught early rather than silently.
 * Use getRedis() inside try/catch if the feature is truly optional.
 */
export const redis = getRedis();

export { Redis };
