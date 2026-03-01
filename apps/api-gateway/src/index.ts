import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { bodyLimit } from "hono/body-limit";
import { cors } from "hono/cors";
import { logger as honoLogger } from "hono/logger";
import { requestId } from "hono/request-id";
import { logger, initOtel } from "@nebutra/logger";
import { setAlertErrorHandler, initializeFromEnv } from "@nebutra/alerting";
import { prisma } from "@nebutra/db";

import { healthRoutes } from "./routes/misc/health.js";
import { statusRoutes } from "./routes/system/status.js";
import { consentRoutes } from "./routes/legal/consent.js";
import { eventRoutes } from "./routes/events/index.js";
import {
  stripeWebhookRoutes,
  clerkWebhookRoutes,
} from "./routes/webhooks/index.js";
import { inngestHandler } from "./inngest/index.js";
import { tenantContextMiddleware } from "./middlewares/tenantContext.js";
import { rateLimitMiddleware } from "./middlewares/rateLimit.js";
import { env, DOMAINS } from "./config/env.js";

initOtel({ serviceName: "api-gateway" });

// Wire logger into alerting error handler
setAlertErrorHandler((ctx, err) => logger.error(ctx, err));

// Register alerting channels from environment
const registeredChannels = initializeFromEnv();
if (registeredChannels.length > 0) {
  logger.info("Alerting channels registered", { channels: registeredChannels });
}

const app = new Hono();

// Build CORS allowlist from constants + env overrides
const corsOrigins = [
  // Auto-include localhost in non-production environments
  ...(env.NODE_ENV !== "production"
    ? [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3003",
      ]
    : []),
  // Production domains — update DOMAINS in config/env.ts to rebrand
  DOMAINS.landing,
  `https://www.${new URL(DOMAINS.landing).hostname}`,
  DOMAINS.app,
  DOMAINS.studio,
  // Per-deployment overrides
  env.LANDING_URL,
  env.WEB_URL,
  env.STUDIO_URL,
  // Arbitrary extra origins (e.g. Vercel preview URLs)
  ...(env.CORS_ORIGINS?.split(",").map((s) => s.trim()) ?? []),
].filter(Boolean) as string[];

// Global middlewares
app.use("*", requestId());
app.use("*", honoLogger());
app.use(
  "*",
  cors({
    origin: corsOrigins,
    credentials: true,
  }),
);
app.use(
  "*",
  bodyLimit({
    maxSize: 1 * 1024 * 1024, // 1MB
    onError: (c) => {
      return c.json({ error: "Request body too large" }, 413);
    },
  }),
);

// Tenant context extraction (before rate limiting)
app.use("*", tenantContextMiddleware);

// Rate limiting (skip for health/status/webhook/inngest endpoints)
app.use("/api/*", async (c, next) => {
  const path = new URL(c.req.url).pathname;
  if (
    path.startsWith("/api/misc") ||
    path.startsWith("/api/system") ||
    path.startsWith("/misc") ||
    path.startsWith("/system") ||
    path.startsWith("/api/webhooks") ||
    path.startsWith("/api/inngest")
  ) {
    return next();
  }
  return rateLimitMiddleware(c, next);
});

// Health & Status routes (public, no rate limiting)
app.route("/api/misc", healthRoutes);
app.route("/api/system", statusRoutes);
// Backward-compatible aliases (legacy monitors/workflows)
app.route("/misc", healthRoutes);
app.route("/system", statusRoutes);

// Legal & Consent routes (v1 API)
app.route("/api/v1/legal", consentRoutes);
app.route("/api/v1/events", eventRoutes);

// Webhook routes (raw body — bypass rate limiting)
app.route("/api/webhooks", stripeWebhookRoutes);
app.route("/api/webhooks", clerkWebhookRoutes);

// Inngest background job handler (GET for SDK handshake, POST/PUT for execution)
app.on(["GET", "POST", "PUT"], "/api/inngest", (c) => inngestHandler(c));

// Root route
app.get("/", (c) => {
  return c.json({
    name: "Nebutra API Gateway",
    version: "0.1.0",
    status: "running",
  });
});

// 404 handler
app.notFound((c) => {
  return c.json({ error: "Not Found", path: c.req.path }, 404);
});

// Error handler
app.onError((err, c) => {
  logger.error("Unhandled error", err, { path: c.req.path });
  return c.json(
    {
      error: "Internal Server Error",
      message: process.env.NODE_ENV === "development" ? err.message : undefined,
    },
    500,
  );
});

const port = parseInt(process.env.PORT || "3002", 10);

logger.info("API Gateway started", { port });

const server = serve({ fetch: app.fetch, port }, (info) => {
  logger.info(`API Gateway listening on port ${info.port}`);
});

// Graceful shutdown
const shutdown = async (signal: string) => {
  logger.info(`Received ${signal}, starting graceful shutdown...`);
  server.close(async () => {
    logger.info("HTTP server closed");
    try {
      await prisma.$disconnect();
      logger.info("Database connection closed");
    } catch (err) {
      logger.error("Error during shutdown", err);
    }
    process.exit(0);
  });
  // Force exit after 10s if graceful shutdown hangs
  setTimeout(() => {
    logger.error("Forced shutdown after timeout");
    process.exit(1);
  }, 10_000);
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));

export default app;
