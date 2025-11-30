# 🚀 Nebutra-Sailor

Enterprise-grade SaaS monorepo architecture supporting multi-tenant systems, AI-native features, content communities, recommendation systems, e-commerce (Shopify), and Web3 platforms.

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Apps** | Next.js 17, React 19, TypeScript 5.6+, TailwindCSS 4.0, Clerk, Vercel AI SDK |
| **BFF** | Node.js 20, Hono, Prisma 7.x, Zod |
| **Infra** | Supabase (Postgres + pgvector), Upstash Redis, Inngest, Stripe |
| **Services** | Python 3.11 (FastAPI), Go 1.22+, Rust 1.80+ |

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development servers
pnpm dev

# Build all packages
pnpm build
```

## Project Structure

```
Nebutra-Sailor/
├── apps/           # Frontend apps + BFF (Vercel)
├── packages/       # Shared libraries
├── services/       # Microservices (Railway/Docker)
├── infra/          # IaC + Observability
└── docs/           # Documentation
```

## Documentation

See [docs/](./docs/) for detailed architecture documentation.

## License

MIT
