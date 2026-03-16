import { PrismaClient } from "../../prisma/generated/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { createPgPool } from "@nebutra/db/pool"

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined }

function createClient(): PrismaClient {
  if (!process.env.DATABASE_URL) {
    throw new Error("[tsekaluk-dev] DATABASE_URL is not set")
  }
  const pool = createPgPool({ connectionString: process.env.DATABASE_URL })
  const adapter = new PrismaPg(pool)
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  })
}

const isBuildPhase = process.env.NEXT_PHASE === "phase-production-build"

export const prisma = isBuildPhase
  ? (null as unknown as PrismaClient)
  : (globalForPrisma.prisma ?? (globalForPrisma.prisma = createClient()))


