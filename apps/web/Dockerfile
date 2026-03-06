# ── Stage 1: Install dependencies ────────────────────────────────────────────
# Only package manifests are copied here so Docker can cache the layer
# and skip re-installing when only source code changes.
FROM node:22-alpine AS deps
WORKDIR /app

RUN corepack enable pnpm

# Root workspace manifests
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./

# App manifest
COPY apps/web/package.json ./apps/web/

# Internal workspace packages that @nebutra/web depends on.
# Derived from the "dependencies" field in apps/web/package.json:
#   @nebutra/ui, @nebutra/tokens, @nebutra/db (Prisma client)
COPY packages/ui/package.json          ./packages/ui/
COPY packages/theme/package.json       ./packages/theme/
COPY packages/db/package.json          ./packages/db/

# Install only the closure needed for @nebutra/web (and its workspace deps)
# @nebutra/db is added as an explicit filter target so its devDependencies
# (prisma CLI) are installed — transitive workspace deps only get prod deps.
RUN pnpm install --frozen-lockfile --filter @nebutra/web... --filter @nebutra/db...

# ── Stage 2: Build ────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app

RUN corepack enable pnpm

# Restore node_modules from the deps stage
# All deps are hoisted to root node_modules via public-hoist-pattern[]=* in .npmrc
COPY --from=deps /app/node_modules            ./node_modules
COPY --from=deps /app/apps/web/node_modules   ./apps/web/node_modules

# Copy full source tree (respects .dockerignore at the repo root)
COPY . .

# Generate Prisma client (db package is a transitive dep used at runtime)
RUN pnpm --filter @nebutra/db db:generate

# Build @nebutra/web; next.config.ts must have output: 'standalone'
RUN pnpm --filter @nebutra/web build

# ── Stage 3: Runtime ──────────────────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Default port; override at runtime with -e PORT=xxxx
ENV PORT=3000

# Non-root user for security hardening
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Copy the standalone server bundle produced by Next.js
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./

# Static assets must sit alongside the standalone bundle
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static

# Public directory (if it exists) is not bundled into standalone
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public

USER nextjs

EXPOSE 3000

# next.js standalone server entrypoint
CMD ["node", "apps/web/server.js"]
