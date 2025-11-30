import { Redis } from "@upstash/redis";

let redis: Redis | null = null;

function getRedis(): Redis {
  if (!redis) {
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    });
  }
  return redis;
}

export interface TTLCacheOptions {
  /** TTL in seconds */
  ttl: number;
  /** Key prefix for namespacing */
  prefix?: string;
}

/**
 * Standard TTL-based cache
 */
export class TTLCache {
  private prefix: string;
  private defaultTTL: number;

  constructor(options: TTLCacheOptions) {
    this.prefix = options.prefix || "cache";
    this.defaultTTL = options.ttl;
  }

  private key(k: string): string {
    return `${this.prefix}:${k}`;
  }

  /**
   * Get value from cache
   */
  async get<T>(key: string): Promise<T | null> {
    const redis = getRedis();
    const value = await redis.get<T>(this.key(key));
    return value;
  }

  /**
   * Set value in cache
   */
  async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    const redis = getRedis();
    await redis.set(this.key(key), value, { ex: ttl || this.defaultTTL });
  }

  /**
   * Delete value from cache
   */
  async delete(key: string): Promise<void> {
    const redis = getRedis();
    await redis.del(this.key(key));
  }

  /**
   * Get or set with callback
   */
  async getOrSet<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttl?: number
  ): Promise<T> {
    const cached = await this.get<T>(key);
    if (cached !== null) {
      return cached;
    }

    const value = await fetcher();
    await this.set(key, value, ttl);
    return value;
  }
}

/**
 * Create a TTL cache instance
 */
export function createTTLCache(options: TTLCacheOptions): TTLCache {
  return new TTLCache(options);
}
