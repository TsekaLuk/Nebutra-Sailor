# OpenStatus Integration

Uptime monitoring and status page for Nebutra Sailor.

## Quick Start

### 1. Setup OpenStatus Account

```bash
# Install CLI
npm install -g openstatus

# Login
openstatus login
```

### 2. Deploy Configuration

```bash
# Preview changes
openstatus config diff --file infra/openstatus/openstatus.yaml

# Deploy
openstatus config push --file infra/openstatus/openstatus.yaml
```

### 3. Configure Environment Variables

Add these to your `.env`:

```env
# Service URLs (for monitoring targets)
LANDING_PAGE_URL=https://nebutra.com
WEB_APP_URL=https://app.nebutra.com
API_GATEWAY_URL=https://api.nebutra.com
AI_SERVICE_URL=https://ai.nebutra.com
CONTENT_SERVICE_URL=https://content.nebutra.com
RECSYS_SERVICE_URL=https://recsys.nebutra.com
ECOMMERCE_SERVICE_URL=https://ecommerce.nebutra.com
WEB3_SERVICE_URL=https://web3.nebutra.com

# Notifications
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/xxx
```

## Using Status Components

### In React/Next.js

```tsx
import { StatusBadge, StatusWidget } from "@nebutra/status";

// Footer badge
<StatusBadge pageSlug="nebutra" showLabel />

// Full widget
<StatusWidget pageSlug="nebutra" />

// Compact widget
<StatusWidget pageSlug="nebutra" compact />
```

### In Landing Page Footer

```tsx
// apps/landing-page/app/components/footer.tsx
import { StatusBadge } from "@nebutra/status";

export function Footer() {
  return (
    <footer>
      {/* ... other content ... */}
      <a href="https://nebutra.openstatus.dev" target="_blank">
        <StatusBadge pageSlug="nebutra" showLabel size="sm" />
      </a>
    </footer>
  );
}
```

## Monitors

| Monitor | Endpoint | Frequency | Regions |
|---------|----------|-----------|---------|
| Landing Page | / | 1m | Global |
| Web App | / | 1m | Global |
| API Gateway | /misc/health | 1m | Global |
| AI Service | /health | 5m | US-East |
| Content Service | /health | 5m | US-East |
| RecSys Service | /health | 5m | US-East |
| E-commerce Service | /health | 5m | US-East |
| Web3 Service | /health | 5m | US-East |
| Database | /system/status | 1m | US-East |
| Redis | /system/status | 1m | US-East |

## Status Page

Default URL: `https://nebutra.openstatus.dev`

To use custom domain (e.g., `status.nebutra.com`):

1. Add CNAME record: `status.nebutra.com` → `cname.openstatus.dev`
2. Uncomment `customDomain` in `openstatus.yaml`
3. Redeploy config

## Alert Channels

- **Slack**: `#ops-alerts` channel
- **Email**: ops@nebutra.com
- **PagerDuty**: (optional, uncomment in config)

## Internal Health Endpoint

The `/system/status` endpoint provides detailed status for OpenStatus assertions:

```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "checks": {
    "database": { "status": "pass", "latency_ms": 5 },
    "redis": { "status": "pass", "latency_ms": 2 }
  }
}
```

## Files

```
infra/openstatus/
├── README.md           # This file
├── config.ts           # TypeScript configuration
└── openstatus.yaml     # Monitoring-as-Code config

packages/status/
├── src/
│   ├── index.ts
│   ├── types.ts        # TypeScript types
│   ├── api.ts          # OpenStatus API client
│   └── components/
│       ├── status-badge.tsx  # Compact badge
│       └── status-widget.tsx # Full widget
└── package.json
```
