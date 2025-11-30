# @nebutra/db

Prisma 7 database client and schema for Supabase PostgreSQL.

## Installation

```bash
pnpm add @nebutra/db
```

## Setup

### 1. Configure environment

```bash
DATABASE_URL="postgresql://user:pass@host:5432/db?pgbouncer=true"
DIRECT_URL="postgresql://user:pass@host:5432/db"
```

### 2. Generate client

```bash
pnpm db:generate
```

### 3. Run migrations

```bash
pnpm db:migrate
```

## Usage

```typescript
import { prisma } from "@nebutra/db";

// Query
const users = await prisma.user.findMany({
  where: { tenantId: "org_123" },
});

// Create
const user = await prisma.user.create({
  data: {
    email: "user@example.com",
    tenantId: "org_123",
  },
});
```

## Commands

| Command            | Description            |
| ------------------ | ---------------------- |
| `pnpm db:generate` | Generate Prisma client |
| `pnpm db:migrate`  | Run migrations (dev)   |
| `pnpm db:push`     | Push schema changes    |
| `pnpm db:studio`   | Open Prisma Studio     |
| `pnpm db:seed`     | Seed database          |

## Schema Location

```
packages/db/
├── prisma/
│   ├── schema.prisma    # Main schema
│   ├── migrations/      # Migration history
│   └── seed.ts          # Seed data
└── src/
    ├── index.ts         # Exports
    └── client.ts        # Prisma client instance
```

## Multi-tenancy

All models include `tenantId` for Row-Level Security:

```prisma
model User {
  id        String   @id @default(cuid())
  email     String
  tenantId  String
  tenant    Tenant   @relation(fields: [tenantId], references: [id])

  @@index([tenantId])
}
```

## Related

- [Database RLS policies](../../infra/database/)
- [Supabase dashboard](https://supabase.com/dashboard)
