import { Hono } from "hono";

export const statusRoutes = new Hono();

interface ServiceStatus {
  name: string;
  status: "operational" | "degraded" | "down";
  latency?: number;
  lastChecked: string;
}

// In production, these would be actual health checks to each service
async function checkServiceHealth(
  serviceName: string,
  _serviceUrl?: string
): Promise<ServiceStatus> {
  const startTime = Date.now();

  // TODO: Implement actual health check when services are available
  // For now, return mock operational status
  const latency = Date.now() - startTime;

  return {
    name: serviceName,
    status: "operational",
    latency,
    lastChecked: new Date().toISOString(),
  };
}

statusRoutes.get("/status", async (c) => {
  const services = await Promise.all([
    checkServiceHealth("api-gateway"),
    checkServiceHealth("database"),
    checkServiceHealth("redis"),
    // Add more services as they come online
    // checkServiceHealth("ai-service", process.env.AI_SERVICE_URL),
    // checkServiceHealth("content-service", process.env.CONTENT_SERVICE_URL),
  ]);

  const overallStatus = services.every((s) => s.status === "operational")
    ? "operational"
    : services.some((s) => s.status === "down")
      ? "down"
      : "degraded";

  return c.json({
    status: overallStatus,
    services,
    timestamp: new Date().toISOString(),
    version: "0.1.0",
  });
});

// Simplified status for uptime monitors
statusRoutes.get("/ping", (c) => {
  return c.text("pong");
});
