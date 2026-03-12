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

export function createRateLimiter(windowMs: number, maxRequests: number) {
  const map = new Map<string, Entry>()

  setInterval(() => {
    const now = Date.now()
    for (const [key, entry] of map) {
      if (now >= entry.resetAt) map.delete(key)
    }
  }, windowMs)

  return function check(key: string): RateLimitCheck {
    const now = Date.now()
    const entry = map.get(key)

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
