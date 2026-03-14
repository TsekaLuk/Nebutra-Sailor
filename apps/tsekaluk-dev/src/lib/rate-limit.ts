interface RateLimitResult {
  allowed: true
  retryAfter?: never
}

interface RateLimitBlocked {
  allowed: false
  retryAfter: number // seconds until window resets
}

type RateLimitCheck = RateLimitResult | RateLimitBlocked

interface Entry {
  count: number
  resetAt: number
}

// NOTE: Uses in-memory storage — rate limits are per-instance.
// For multi-instance / serverless deployments, migrate to a shared store (e.g. Upstash Redis).
//
// No setInterval — cleanup happens opportunistically on every lookup to avoid
// timer leaks in serverless environments where intervals never fire.
const MAX_MAP_SIZE = 5_000

export function createRateLimiter(windowMs: number, maxRequests: number) {
  const map = new Map<string, Entry>()

  return function check(key: string): RateLimitCheck {
    const now = Date.now()
    const entry = map.get(key)

    // Opportunistic cleanup when map grows large
    if (map.size > MAX_MAP_SIZE) {
      for (const [k, e] of map) {
        if (now >= e.resetAt) map.delete(k)
      }
    }

    if (!entry || now >= entry.resetAt) {
      map.set(key, { count: 1, resetAt: now + windowMs })
      return { allowed: true }
    }

    if (entry.count >= maxRequests) {
      return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) }
    }

    map.set(key, { count: entry.count + 1, resetAt: entry.resetAt })
    return { allowed: true }
  }
}

export function getClientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  )
}
