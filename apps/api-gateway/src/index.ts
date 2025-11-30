import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import { healthRoutes } from "./routes/misc/health.js";
import { statusRoutes } from "./routes/system/status.js";

const app = new Hono();

// Global middlewares
app.use("*", logger());
app.use(
  "*",
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      process.env.LANDING_URL || "",
      process.env.WEB_URL || "",
    ].filter(Boolean),
    credentials: true,
  })
);

// Health & Status routes
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
