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

/**
 * Lazy singleton — the client is only created on first property access,
 * so importing this module during `next build` (SSG) won't crash when
 * DATABASE_URL is not set.
 */
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop, receiver) {
    const client = globalForPrisma.prisma ?? (globalForPrisma.prisma = createClient())
    return Reflect.get(client, prop, receiver)
  },
})

