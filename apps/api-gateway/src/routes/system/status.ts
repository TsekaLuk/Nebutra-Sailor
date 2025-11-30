import { Hono } from "hono";

export const statusRoutes = new Hono();

interface StatusResponse {
  status: "healthy" | "degraded" | "unhealthy";
  timestamp: string;
  version: string;
  database: "connected" | "disconnected";
  redis: "connected" | "disconnected";
  services: {
    ai: "available" | "unavailable" | "unknown";
    content: "available" | "unavailable" | "unknown";
    recsys: "available" | "unavailable" | "unknown";
    ecommerce: "available" | "unavailable" | "unknown";
    web3: "available" | "unavailable" | "unknown";
  };
  uptime: number;
  checks: Array<{
    name: string;
    status: "pass" | "fail";
    latency?: number;
    message?: string;
  }>;
}

const startTime = Date.now();

/**
 * Comprehensive status endpoint for OpenStatus monitoring
 * GET /system/status
 */
statusRoutes.get("/status", async (c) => {
  const checks: StatusResponse["checks"] = [];
  let overallStatus: StatusResponse["status"] = "healthy";

  // Check database connection
  const dbCheck = await checkDatabase();
  checks.push(dbCheck);
  if (dbCheck.status === "fail") {
    overallStatus = "unhealthy";
  }

  // Check Redis connection
  const redisCheck = await checkRedis();
  checks.push(redisCheck);
  if (redisCheck.status === "fail" && overallStatus === "healthy") {
    overallStatus = "degraded";
  }

  // Check microservices (non-blocking)
  const serviceChecks = await Promise.allSettled([
    checkService("ai", process.env.AI_SERVICE_URL),
    checkService("content", process.env.CONTENT_SERVICE_URL),
    checkService("recsys", process.env.RECSYS_SERVICE_URL),
    checkService("ecommerce", process.env.ECOMMERCE_SERVICE_URL),
    checkService("web3", process.env.WEB3_SERVICE_URL),
  ]);

  const serviceStatuses = {
    ai: "unknown" as const,
    content: "unknown" as const,
    recsys: "unknown" as const,
    ecommerce: "unknown" as const,
    web3: "unknown" as const,
  };

  serviceChecks.forEach((result, index) => {
    const services = ["ai", "content", "recsys", "ecommerce", "web3"] as const;
    const serviceName = services[index];

    if (result.status === "fulfilled") {
      checks.push(result.value);
      serviceStatuses[serviceName] =
        result.value.status === "pass" ? "available" : "unavailable";
    } else {
      checks.push({
        name: serviceName,
        status: "fail",
        message: "Health check failed",
      });
      serviceStatuses[serviceName] = "unavailable";
    }
  });

  // Count failures
  const failedServices = checks.filter(
    (check) =>
      check.status === "fail" && !["database", "redis"].includes(check.name)
  ).length;

  if (failedServices >= 3 && overallStatus === "healthy") {
    overallStatus = "degraded";
  }

  const response: StatusResponse = {
    status: overallStatus,
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || "0.1.0",
    database: dbCheck.status === "pass" ? "connected" : "disconnected",
    redis: redisCheck.status === "pass" ? "connected" : "disconnected",
    services: serviceStatuses,
    uptime: Math.floor((Date.now() - startTime) / 1000),
    checks,
  };

  const statusCode =
    overallStatus === "healthy"
      ? 200
      : overallStatus === "degraded"
        ? 200
        : 503;

  return c.json(response, statusCode);
});

/**
 * Readiness check for Kubernetes
 * GET /system/ready
 */
statusRoutes.get("/ready", async (c) => {
  const dbCheck = await checkDatabase();

  if (dbCheck.status === "fail") {
    return c.json({ ready: false, reason: "database unavailable" }, 503);
  }

  return c.json({ ready: true });
});

/**
 * Liveness check for Kubernetes
 * GET /system/live
 */
statusRoutes.get("/live", (c) => {
  return c.json({ live: true });
});

// Simplified status for uptime monitors
statusRoutes.get("/ping", (c) => {
  return c.text("pong");
});

// Helper functions
async function checkDatabase(): Promise<StatusResponse["checks"][0]> {
  const start = Date.now();
  try {
    // In production, this would use Prisma to ping the database
    // const prisma = new PrismaClient();
    // await prisma.$queryRaw`SELECT 1`;

    // Simulate for now
    await new Promise((resolve) => setTimeout(resolve, 10));

    return {
      name: "database",
      status: "pass",
      latency: Date.now() - start,
    };
  } catch (error) {
    return {
      name: "database",
      status: "fail",
      latency: Date.now() - start,
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

async function checkRedis(): Promise<StatusResponse["checks"][0]> {
  const start = Date.now();
  try {
    // In production, this would ping Redis
    // const redis = new Redis(process.env.UPSTASH_REDIS_REST_URL);
    // await redis.ping();

    // Simulate for now
    await new Promise((resolve) => setTimeout(resolve, 5));

    return {
      name: "redis",
      status: "pass",
      latency: Date.now() - start,
    };
  } catch (error) {
    return {
      name: "redis",
      status: "fail",
      latency: Date.now() - start,
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

async function checkService(
  name: string,
  url?: string
): Promise<StatusResponse["checks"][0]> {
  const start = Date.now();

  if (!url) {
    return {
      name,
      status: "fail",
      message: "Service URL not configured",
    };
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(`${url}/health`, {
      signal: controller.signal,
    });

    clearTimeout(timeout);

    return {
      name,
      status: response.ok ? "pass" : "fail",
      latency: Date.now() - start,
    };
  } catch (error) {
    return {
      name,
      status: "fail",
      latency: Date.now() - start,
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
