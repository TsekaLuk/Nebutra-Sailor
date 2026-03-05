import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";

export const healthRoutes = new OpenAPIHono();

// ============================================
// Response schemas
// ============================================

const dependencyStatusSchema = z.object({
  status: z.enum(["up", "down"]),
  latencyMs: z.number(),
});

const healthResponseSchema = z.object({
  status: z.enum(["healthy", "degraded", "unhealthy"]),
  version: z.string(),
  uptime: z.number(),
  timestamp: z.string(),
  dependencies: z.object({
    database: dependencyStatusSchema,
  }),
});

// ============================================
// Route definition
// ============================================

const healthRoute = createRoute({
  method: "get",
  path: "/health",
  tags: ["System"],
  summary: "Health check",
  description:
    "Returns health status of the API gateway and its dependencies. Returns 200 for healthy/degraded, 503 for unhealthy.",
  responses: {
    200: {
      description: "Service is healthy or degraded",
      content: {
        "application/json": {
          schema: healthResponseSchema,
        },
      },
    },
    503: {
      description: "Service is unhealthy — all dependencies are down",
      content: {
        "application/json": {
          schema: healthResponseSchema,
        },
      },
    },
  },
});

// ============================================
// Helper: database check with 3s timeout
// ============================================

async function checkDatabase(): Promise<{
  status: "up" | "down";
  latencyMs: number;
}> {
  const start = Date.now();

  const dbCheck = new Promise<void>(async (resolve, reject) => {
    try {
      const { prisma } = await import("@nebutra/db");
      await prisma.$queryRaw`SELECT 1`;
      resolve();
    } catch (err) {
      reject(err);
    }
  });

  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error("Database check timed out")), 3000),
  );

  try {
    await Promise.race([dbCheck, timeout]);
    return { status: "up", latencyMs: Date.now() - start };
  } catch {
    return { status: "down", latencyMs: Date.now() - start };
  }
}

// ============================================
// Handler
// ============================================

healthRoutes.openapi(healthRoute, async (c) => {
  c.header("Cache-Control", "no-cache, no-store");

  const database = await checkDatabase();

  // Aggregate dependency statuses for overall health determination.
  // Rule: all deps down → unhealthy (503); any dep down → degraded (200); else healthy (200).
  const depStatuses = [database.status];
  const downCount = depStatuses.filter((s) => s === "down").length;

  const overallStatus: "healthy" | "degraded" | "unhealthy" =
    downCount === depStatuses.length
      ? "unhealthy"
      : downCount > 0
        ? "degraded"
        : "healthy";

  const body = {
    status: overallStatus,
    version: process.env.npm_package_version ?? "1.0.0",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    dependencies: {
      database,
    },
  };

  const statusCode = overallStatus === "unhealthy" ? 503 : 200;

  return c.json(body, statusCode as 200 | 503);
});
