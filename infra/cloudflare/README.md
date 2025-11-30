# Cloudflare Infrastructure

Cloudflare integration for CDN, Edge caching, WAF, and R2 storage.

## Architecture

```
                    ┌─────────────────────────────────────────┐
                    │           Cloudflare Edge               │
                    │  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐    │
User ──────────────►│  │ WAF │──│Cache│──│ CDN │──│ R2  │    │
                    │  └──┬──┘  └──┬──┘  └──┬──┘  └──┬──┘    │
                    └─────┼───────┼───────┼───────┼─────────┘
                          │       │       │       │
              ┌───────────┴───────┴───────┘       │
              ▼                                   ▼
    ┌─────────────────┐                  ┌──────────────┐
    │     Vercel      │                  │  R2 Storage  │
    │  ┌───────────┐  │                  │   (Files)    │
    │  │ landing   │  │                  └──────────────┘
    │  │ web       │  │
    │  │ api-gw    │  │
    │  │ studio    │  │
    │  └───────────┘  │
    └─────────────────┘
```

## Domain Configuration

| Subdomain | Proxy | Cache | Origin |
|-----------|-------|-------|--------|
| `nebutra.com` | ✅ Proxied | Edge cache | Vercel (landing-page) |
| `app.nebutra.com` | ✅ Proxied | No cache | Vercel (web) |
| `api.nebutra.com` | ✅ Proxied | No cache | Vercel (api-gateway) |
| `studio.nebutra.com` | ✅ Proxied | No cache | Vercel (studio) |
| `cdn.nebutra.com` | ✅ Proxied | Long cache | R2 bucket |

## Setup Steps

### 1. DNS Records (Cloudflare Dashboard)

```
Type    Name      Content                  Proxy   TTL
────    ────      ───────                  ─────   ───
A       @         76.76.21.21              ✅      Auto
CNAME   www       cname.vercel-dns.com     ✅      Auto
CNAME   app       cname.vercel-dns.com     ✅      Auto
CNAME   api       cname.vercel-dns.com     ✅      Auto
CNAME   studio    cname.vercel-dns.com     ✅      Auto
CNAME   cdn       <r2-bucket>.r2.dev       ✅      Auto
```

### 2. SSL/TLS Settings

- SSL Mode: **Full (strict)**
- Always Use HTTPS: **On**
- Minimum TLS Version: **1.2**
- Automatic HTTPS Rewrites: **On**

### 3. Cache Rules

Apply via Cloudflare Dashboard → Rules → Cache Rules:

See `rules/cache-rules.json` for configuration.

### 4. WAF Rules

See `rules/waf-rules.json` for security configuration.

### 5. R2 Storage

See `r2/README.md` for storage setup.

## Environment Variables

Add to `.env`:

```env
# Cloudflare
CLOUDFLARE_ACCOUNT_ID="your-account-id"
CLOUDFLARE_API_TOKEN="your-api-token"

# R2 Storage
R2_ACCESS_KEY_ID="your-r2-access-key"
R2_SECRET_ACCESS_KEY="your-r2-secret-key"
R2_BUCKET_NAME="nebutra-assets"
R2_PUBLIC_URL="https://cdn.nebutra.com"
```

## File Structure

```
infra/cloudflare/
├── README.md           # This file
├── wrangler.toml       # Wrangler CLI config
├── workers/            # Edge Workers (optional)
│   └── README.md
├── r2/                 # R2 storage config
│   ├── README.md
│   └── cors.json
└── rules/              # Cloudflare rules
    ├── cache-rules.json
    └── waf-rules.json
```

## CLI Commands

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy Worker (if using)
wrangler deploy

# Manage R2
wrangler r2 bucket list
wrangler r2 bucket create nebutra-assets
```
