# Supabase Configuration

## Schema Management

**Database schema is managed via Prisma 7 in `packages/db/`.**

This directory is reserved for Supabase-specific configurations only:
- Connection settings
- Edge Functions (if any)
- Storage bucket policies

## Prisma as Single Source of Truth

All database models, enums, and relations are defined in:
```
packages/db/prisma/schema.prisma
```

### Commands

```bash
# Generate Prisma client
pnpm db:generate

# Create and apply migrations
pnpm db:migrate

# Push schema changes (dev only)
pnpm db:push

# Open Prisma Studio
pnpm db:studio
```

### pgvector Extension

The schema enables `pgvector` for embeddings:
```prisma
datasource db {
  extensions = [vector, uuid_ossp(map: "uuid-ossp")]
}
```

Ensure the extension is enabled in your Supabase project:
```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

## Environment Variables

Required in `.env`:
```
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."  # For migrations (bypasses pooler)
```
