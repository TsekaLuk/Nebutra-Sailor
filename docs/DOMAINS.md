# Domain Configuration

## Domain Structure

| Subdomain | App | Purpose |
|-----------|-----|---------|
| `nebutra.com` | landing-page | Marketing site |
| `www.nebutra.com` | landing-page | Redirect to apex |
| `app.nebutra.com` | web | Main SaaS dashboard |
| `api.nebutra.com` | api-gateway | BFF API endpoints |
| `studio.nebutra.com` | studio | Sanity CMS |

## DNS Configuration

Add these records in your DNS provider (Cloudflare, Namecheap, etc.):

```
Type    Name      Value                    TTL
----    ----      -----                    ---
A       @         76.76.21.21              Auto
CNAME   www       cname.vercel-dns.com     Auto
CNAME   app       cname.vercel-dns.com     Auto
CNAME   api       cname.vercel-dns.com     Auto
CNAME   studio    cname.vercel-dns.com     Auto
```

> Note: The A record IP (76.76.21.21) is Vercel's. Use CNAME for subdomains.

## Vercel Project Configuration

### 1. landing-page
- Domain: `nebutra.com`, `www.nebutra.com`
- Redirect: `www` → apex (301)

### 2. web
- Domain: `app.nebutra.com`

### 3. api-gateway
- Domain: `api.nebutra.com`

### 4. studio
- Domain: `studio.nebutra.com`

## Environment Variables (Vercel)

Set these in each project's Vercel dashboard:

### All Projects
```
NEXT_PUBLIC_SITE_URL=https://nebutra.com
NEXT_PUBLIC_APP_URL=https://app.nebutra.com
NEXT_PUBLIC_API_URL=https://api.nebutra.com
NEXT_PUBLIC_STUDIO_URL=https://studio.nebutra.com
```

### api-gateway
```
LANDING_URL=https://nebutra.com
WEB_URL=https://app.nebutra.com
STUDIO_URL=https://studio.nebutra.com
```

## Clerk Configuration

Update Clerk dashboard:
1. Go to **Domains** → Add production domain
2. Add: `nebutra.com`, `app.nebutra.com`
3. Update redirect URLs in **Paths**:
   - Sign-in: `https://app.nebutra.com/sign-in`
   - Sign-up: `https://app.nebutra.com/sign-up`
   - After sign-in: `https://app.nebutra.com/dashboard`

## Sanity CORS

In Sanity dashboard (manage.sanity.io):
1. Go to **API** → **CORS origins**
2. Add:
   - `https://nebutra.com`
   - `https://app.nebutra.com`
   - `https://studio.nebutra.com` (with credentials)

## SSL/TLS

Vercel automatically provisions SSL certificates. No action needed.

## Verification Checklist

- [ ] DNS propagated (check with `dig app.nebutra.com`)
- [ ] SSL certificates active (green lock)
- [ ] CORS working (no console errors)
- [ ] Clerk auth redirects correctly
- [ ] API calls from app → api working
