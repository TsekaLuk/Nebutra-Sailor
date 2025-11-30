import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import { healthRoutes } from "./routes/misc/health.js";
import { statusRoutes } from "./routes/system/status.js";
import { tenantContextMiddleware } from "./middlewares/tenantContext.js";
import { rateLimitMiddleware } from "./middlewares/rateLimit.js";

const app = new Hono();

// Global middlewares
app.use("*", logger());
app.use(
  "*",
  cors({
    origin: [
      // Local development
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3003",
      // Production domains
      "https://nebutra.com",
      "https://www.nebutra.com",
      "https://app.nebutra.com",
      "https://studio.nebutra.com",
      // Environment overrides
      process.env.LANDING_URL || "",
      process.env.WEB_URL || "",
      process.env.STUDIO_URL || "",
    ].filter(Boolean),
    credentials: true,
  })
);

// Tenant context extraction (before rate limiting)
app.use("*", tenantContextMiddleware);

// Rate limiting (skip for health/status endpoints)
app.use("/api/*", async (c, next) => {
  const path = new URL(c.req.url).pathname;
  // Skip rate limiting for health and status endpoints
  if (path.startsWith("/api/misc") || path.startsWith("/api/system")) {
    return next();
  }
  return rateLimitMiddleware(c, next);
});

// Health & Status routes (public, no rate limiting)
app.route("/api/misc", healthRoutes);
app.route("/api/system", statusRoutes);

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
  console.error("Error:", err);
  return c.json(
    {
      error: "Internal Server Error",
      message: process.env.NODE_ENV === "development" ? err.message : undefined,
    },
    500
  );
});

const port = parseInt(process.env.PORT || "3002", 10);

console.log(`🚀 API Gateway starting on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});

export default app;
