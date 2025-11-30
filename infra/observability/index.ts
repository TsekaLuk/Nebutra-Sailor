export { initTracing, sdk } from "./tracing";
export { initSentry, captureException, setUser, Sentry } from "./sentry";
export { logger, createTenantLogger, requestLogger, type Logger } from "./logging";
export * from "./metrics";

/**
 * Initialize all observability components
 */
export function initObservability(): void {
  // Initialize tracing first (must be before other imports)
  if (process.env.OTEL_EXPORTER_OTLP_ENDPOINT) {
    // Note: In practice, tracing should be initialized at the very start
    // before any other imports. This is a simplified setup.
    console.log("OpenTelemetry tracing enabled");
  }

  // Initialize Sentry
  if (process.env.SENTRY_DSN) {
    require("./sentry").initSentry();
    console.log("Sentry error tracking enabled");
  }

  console.log("Observability initialized");
}
