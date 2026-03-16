import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import { logger } from "@nebutra/logger";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  if (!process.env.DATABASE_URL) {
    throw new Error(
      "[db] DATABASE_URL is not set. Cannot initialize database connection pool."
    );
  }

  // Use connection pool for PostgreSQL with explicit production-ready settings.
  const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    // Max connections per pool instance.
    // Rule of thumb: (2 × CPU cores) + effective_spindle_count
    // Default 10 is fine for most apps; override via env for large deployments.
    max: parseInt(process.env.DB_POOL_MAX ?? "10", 10),
    // Kill idle connections after 30s to free server-side resources.
    idleTimeoutMillis: parseInt(process.env.DB_IDLE_TIMEOUT_MS ?? "30000", 10),
    // Fail fast if we can't get a connection within 5s (avoids hanging requests).
    connectionTimeoutMillis: parseInt(
      process.env.DB_CONNECTION_TIMEOUT_MS ?? "5000",
      10
    ),
    // Keep the process alive while there are active connections.
    allowExitOnIdle: false,
  });

  // Surface pool-level errors without crashing the process — Prisma will
  // propagate the error to the caller through normal query failure paths.
  pool.on("error", (err) => {
    logger.error("[db] Unexpected pool error", err);
  });

  // Set PostgreSQL statement_timeout on every new connection.
  // This prevents runaway queries from holding locks or exhausting the pool.
  // Override via DB_STATEMENT_TIMEOUT_MS env var (default 30 s).
  const statementTimeout = parseInt(
    process.env.DB_STATEMENT_TIMEOUT_MS ?? "30000",
    10
  );
  pool.on("connect", (client) => {
    client
      .query(`SET statement_timeout = ${statementTimeout}`)
      .catch((err: unknown) => {
        logger.error("[db] Failed to set statement_timeout", err);
      });
  });

  const adapter = new PrismaPg(pool);

  return new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export type { PrismaClient };
