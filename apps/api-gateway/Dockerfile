# ── Stage 1: Install dependencies ──────────────────────────────────────────
FROM node:22-alpine AS deps
WORKDIR /app

RUN corepack enable pnpm

# Copy manifests for workspace packages api-gateway depends on
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/api-gateway/package.json ./apps/api-gateway/
COPY packages/alerting/package.json ./packages/alerting/
COPY packages/cache/package.json ./packages/cache/
COPY packages/db/package.json ./packages/db/
COPY packages/health/package.json ./packages/health/
COPY packages/logger/package.json ./packages/logger/
COPY packages/rate-limit/package.json ./packages/rate-limit/

RUN pnpm install --frozen-lockfile --filter @nebutra/api-gateway...

# ── Stage 2: Build ──────────────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app

RUN corepack enable pnpm

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/api-gateway/node_modules ./apps/api-gateway/node_modules
COPY --from=deps /app/packages/db/node_modules ./packages/db/node_modules
COPY . .

RUN pnpm --filter @nebutra/db db:generate
RUN pnpm --filter @nebutra/api-gateway build

# ── Stage 3: Runtime ────────────────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/apps/api-gateway/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/api-gateway/node_modules ./apps/api-gateway/node_modules
COPY --from=builder /app/packages ./packages

EXPOSE 3002

CMD ["node", "dist/index.js"]
