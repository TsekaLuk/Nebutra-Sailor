/**
 * Lightweight in-process circuit breaker for outbound service calls.
 *
 * States: CLOSED (normal) → OPEN (failing, reject fast) → HALF_OPEN (probe)
 *
 * Configuration per breaker:
 *   failureThreshold  – consecutive failures before tripping OPEN (default 5)
 *   successThreshold  – consecutive successes in HALF_OPEN to close (default 2)
 *   timeout           – ms to stay OPEN before probing HALF_OPEN (default 30 s)
 */

import { logger } from "@nebutra/logger";

type State = "CLOSED" | "OPEN" | "HALF_OPEN";

interface BreakerOptions {
  /** Consecutive failures before opening the breaker. Default: 5 */
  failureThreshold?: number;
  /** Consecutive successes in HALF_OPEN to close. Default: 2 */
  successThreshold?: number;
  /** Milliseconds to stay OPEN before attempting HALF_OPEN probe. Default: 30 000 */
  timeout?: number;
  /** Human-readable name for this breaker (used in log lines). */
  name?: string;
}

interface BreakerStatus {
  state: State;
  failures: number;
  successes: number;
  openedAt: number | null;
}

class CircuitBreaker {
  private state: State = "CLOSED";
  private failures = 0;
  private successes = 0;
  private openedAt: number | null = null;

  private readonly failureThreshold: number;
  private readonly successThreshold: number;
  private readonly timeout: number;
  private readonly name: string;

  constructor(opts: BreakerOptions = {}) {
    this.failureThreshold = opts.failureThreshold ?? 5;
    this.successThreshold = opts.successThreshold ?? 2;
    this.timeout = opts.timeout ?? 30_000;
    this.name = opts.name ?? "unnamed";
  }

  /** Execute `fn`. Throws if the breaker is OPEN or if `fn` raises. */
  async call<T>(fn: () => Promise<T>): Promise<T> {
    this.maybeTransitionHalfOpen();

    if (this.state === "OPEN") {
      throw new CircuitOpenError(
        `Circuit breaker '${this.name}' is OPEN — upstream service unavailable`,
      );
    }

    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (err) {
      this.onFailure(err);
      throw err;
    }
  }

  status(): BreakerStatus {
    return {
      state: this.state,
      failures: this.failures,
      successes: this.successes,
      openedAt: this.openedAt,
    };
  }

  // ── Private helpers ──────────────────────────────────────────────────────

  private maybeTransitionHalfOpen(): void {
    if (
      this.state === "OPEN" &&
      this.openedAt !== null &&
      Date.now() - this.openedAt >= this.timeout
    ) {
      this.state = "HALF_OPEN";
      this.successes = 0;
      logger.info(`Circuit breaker '${this.name}' → HALF_OPEN (probing)`);
    }
  }

  private onSuccess(): void {
    if (this.state === "HALF_OPEN") {
      this.successes += 1;
      if (this.successes >= this.successThreshold) {
        this.state = "CLOSED";
        this.failures = 0;
        this.openedAt = null;
        logger.info(`Circuit breaker '${this.name}' → CLOSED`);
      }
    } else {
      // Reset failure counter on any success while closed
      this.failures = 0;
    }
  }

  private onFailure(err: unknown): void {
    this.failures += 1;
    const errMsg = err instanceof Error ? err.message : String(err);

    if (this.state === "HALF_OPEN" || this.failures >= this.failureThreshold) {
      this.state = "OPEN";
      this.openedAt = Date.now();
      logger.warn(
        `Circuit breaker '${this.name}' → OPEN after ${this.failures} failure(s): ${errMsg}`,
      );
    } else {
      logger.warn(
        `Circuit breaker '${this.name}' failure ${this.failures}/${this.failureThreshold}: ${errMsg}`,
      );
    }
  }
}

export class CircuitOpenError extends Error {
  readonly code = "CIRCUIT_OPEN";
  constructor(message: string) {
    super(message);
    this.name = "CircuitOpenError";
  }
}

// ── Singleton breakers (one per upstream service) ────────────────────────────

export const aiServiceBreaker = new CircuitBreaker({
  name: "ai-service",
  failureThreshold: 5,
  successThreshold: 2,
  timeout: 30_000,
});

export const billingServiceBreaker = new CircuitBreaker({
  name: "billing-service",
  failureThreshold: 3,
  successThreshold: 2,
  timeout: 60_000,
});
