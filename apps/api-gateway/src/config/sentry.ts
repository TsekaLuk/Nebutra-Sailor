/**
 * Sentry initialization for the API Gateway.
 * Call initSentry() once at process startup before any request handling.
 */
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

export function initSentry(): void {
  if (!process.env.SENTRY_DSN) {
    return; // Sentry disabled in local dev
  }

  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV ?? "development",
    release:
      process.env.SENTRY_RELEASE ??
      (process.env.npm_package_version && process.env.GITHUB_SHA
        ? `${process.env.npm_package_version}+${process.env.GITHUB_SHA.slice(0, 7)}`
        : process.env.npm_package_version),
    // 10% sampling in prod to control costs; 100% in dev for full visibility
    tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,
    profilesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,
    integrations: [nodeProfilingIntegration()],
    beforeSend(event) {
      // Strip auth headers before sending to Sentry
      if (event.request?.headers) {
        delete event.request.headers["authorization"];
        delete event.request.headers["x-api-key"];
        delete event.request.headers["cookie"];
        delete event.request.headers["x-admin-key"];
      }
      return event;
    },
    ignoreErrors: ["ECONNRESET", "ETIMEDOUT"],
  });
}

/** Hono error handler that captures unhandled exceptions to Sentry. */
export function captureRequestError(
  err: Error,
  requestId?: string,
  tenantId?: string,
): void {
  Sentry.withScope((scope) => {
    if (requestId) scope.setTag("request_id", requestId);
    if (tenantId) scope.setTag("tenant_id", tenantId);
    Sentry.captureException(err);
  });
}
