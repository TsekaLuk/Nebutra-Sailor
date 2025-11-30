# E-commerce Service

Python service for Shopify/Shopline integration and inventory sync.

## Features

- **Product Sync** — Sync products from Shopify/Shopline
- **Inventory** — Real-time inventory management
- **Orders** — Order processing and fulfillment
- **Webhooks** — Handle e-commerce platform events

## Quick Start

```bash
cd services/ecommerce

python -m venv .venv
source .venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload --port 8004
```

## API Endpoints

| Method | Endpoint                 | Description              |
| ------ | ------------------------ | ------------------------ |
| `GET`  | `/health`                | Health check             |
| `POST` | `/api/v1/sync/products`  | Sync products            |
| `POST` | `/api/v1/sync/inventory` | Sync inventory           |
| `POST` | `/webhooks/shopify`      | Shopify webhook handler  |
| `POST` | `/webhooks/shopline`     | Shopline webhook handler |

## Environment Variables

```bash
# Shopify
SHOPIFY_API_KEY=...
SHOPIFY_API_SECRET=...
SHOPIFY_STORE_URL=mystore.myshopify.com

# Shopline
SHOPLINE_API_KEY=...

# Database
DATABASE_URL=postgresql://...

ECOMMERCE_SERVICE_PORT=8004
```

## Supported Platforms

| Platform    | Status       |
| ----------- | ------------ |
| Shopify     | ✅ Supported |
| Shopline    | ✅ Supported |
| WooCommerce | 🚧 Planned   |

## Docker

```bash
docker build -t nebutra-ecommerce .
docker run -p 8004:8004 --env-file .env nebutra-ecommerce
```

## Integration with Inngest

Scheduled sync jobs:

```typescript
// infra/inngest/ecommerce_sync.ts
export const ecommerceSync = inngest.createFunction(
  { id: "ecommerce-sync" },
  { cron: "*/15 * * * *" }, // Every 15 minutes
  async () => {
    /* ... */
  },
);
```
