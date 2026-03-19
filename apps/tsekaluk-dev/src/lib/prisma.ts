import { createPgPool } from "@nebutra/db/pool";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../prisma/generated/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

function createClient(): PrismaClient | null {
  if (!process.env.DATABASE_URL) {
    return null;
  }
  const pool = createPgPool({ connectionString: process.env.DATABASE_URL });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });
}

export const prisma: PrismaClient | null =
  globalForPrisma.prisma ??
  (() => {
    const client = createClient();
    if (client) globalForPrisma.prisma = client;
    return client;
  })();
