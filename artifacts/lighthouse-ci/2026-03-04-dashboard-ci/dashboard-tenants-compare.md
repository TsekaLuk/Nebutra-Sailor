# Lighthouse CI Comparison (Mobile)

- Target: `http://127.0.0.1:3101/tenants`
- Container: `mcr.microsoft.com/playwright:v1.58.2-jammy`
- Runs per snapshot: 2
- Throttling: mobile simulate (CPUx4, RTT 150ms, down 1638.4 Kbps, up 675 Kbps)

## Category Scores

| Category | Before Median | After Median | Delta | Before p90 | After p90 | Before Runs | After Runs |
|---|---:|---:|---:|---:|---:|---|---|
| performance | 67.0 | 67.5 | +0.500 | 71.8 | 75.1 | 73.0, 61.0 | 58.0, 77.0 |
| accessibility | 96.0 | 96.0 | 0.000 | 96.0 | 96.0 | 96.0, 96.0 | 96.0, 96.0 |
| best-practices | 77.0 | 77.0 | 0.000 | 77.0 | 77.0 | 77.0, 77.0 | 77.0, 77.0 |
| seo | 60.0 | 60.0 | 0.000 | 60.0 | 60.0 | 60.0, 60.0 | 60.0, 60.0 |

## Core Metrics

| Metric | Before Median | After Median | Delta (After-Before) | Before p90 | After p90 | Before Runs | After Runs |
|---|---:|---:|---:|---:|---:|---|---|
| FCP (ms) | 2485 | 2413 | -71.7 | 2486 | 2450 | 2484, 2486 | 2459, 2368 |
| LCP (ms) | 5168 | 5012 | -156 | 5233 | 5051 | 5087, 5250 | 5061, 4963 |
| Speed Index (ms) | 4474 | 3381 | -1093 | 4484 | 3579 | 4487, 4462 | 3628, 3134 |
| TBT (ms) | 342 | 455 | +112 | 483 | 705 | 167, 518 | 768, 142 |
| TTI (ms) | 6104 | 6520 | +416 | 6489 | 6979 | 5622, 6585 | 7094, 5946 |
| CLS | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000, 0.000 | 0.000, 0.000 |
| INP (ms) | n/a | n/a | n/a | n/a | n/a | n/a | n/a |

## Raw JSON

- [dashboard-tenants-before.mobile.json](/Users/tseka_luk/Documents/Nebutra-SaaS-Lab/Nebutra-Sailor/artifacts/lighthouse-ci/2026-03-04-dashboard-ci/dashboard-tenants-before.mobile.json)
- [dashboard-tenants-before.mobile.r2.json](/Users/tseka_luk/Documents/Nebutra-SaaS-Lab/Nebutra-Sailor/artifacts/lighthouse-ci/2026-03-04-dashboard-ci/dashboard-tenants-before.mobile.r2.json)
- [dashboard-tenants-after.mobile.json](/Users/tseka_luk/Documents/Nebutra-SaaS-Lab/Nebutra-Sailor/artifacts/lighthouse-ci/2026-03-04-dashboard-ci/dashboard-tenants-after.mobile.json)
- [dashboard-tenants-after.mobile.r2.json](/Users/tseka_luk/Documents/Nebutra-SaaS-Lab/Nebutra-Sailor/artifacts/lighthouse-ci/2026-03-04-dashboard-ci/dashboard-tenants-after.mobile.r2.json)
