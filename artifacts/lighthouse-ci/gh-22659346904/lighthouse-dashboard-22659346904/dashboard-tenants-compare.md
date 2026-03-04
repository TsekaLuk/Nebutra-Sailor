# Lighthouse CI Comparison (Mobile)

- Target: `http://127.0.0.1:3101/`
- Container: `mcr.microsoft.com/playwright:v1.58.2-jammy`
- Runs per snapshot: 3
- Throttling: mobile simulate (CPUx4, RTT 150ms, down 1638.4 Kbps, up 675 Kbps)

## Category Scores

| Category | Before Median | After Median | Delta | Before p90 | After p90 | Before Runs | After Runs |
|---|---:|---:|---:|---:|---:|---|---|
| performance | 92.0 | 93.0 | +1.000 | 92.8 | 94.6 | 92.0, 93.0, 91.0 | 95.0, 91.0, 93.0 |
| accessibility | 100 | 100 | 0.000 | 100 | 100 | 100, 100, 100 | 100, 100, 100 |
| best-practices | 100 | 100 | 0.000 | 100 | 100 | 100, 100, 100 | 100, 100, 100 |
| seo | 63.0 | 63.0 | 0.000 | 63.0 | 63.0 | 63.0, 63.0, 63.0 | 63.0, 63.0, 63.0 |

## Core Metrics

| Metric | Before Median | After Median | Delta (After-Before) | Before p90 | After p90 | Before Runs | After Runs |
|---|---:|---:|---:|---:|---:|---|---|
| FCP (ms) | 1398 | 1397 | -0.828 | 1399 | 1401 | 1398, 1400, 1395 | 1396, 1397, 1403 |
| LCP (ms) | 3165 | 2629 | -536 | 3201 | 3055 | 3211, 2900, 3165 | 2620, 3162, 2629 |
| Speed Index (ms) | 1398 | 1397 | -0.828 | 1399 | 1401 | 1398, 1400, 1395 | 1396, 1397, 1403 |
| TBT (ms) | 144 | 150 | +6.500 | 156 | 189 | 118, 144, 159 | 150, 141, 199 |
| TTI (ms) | 4013 | 4011 | -1.925 | 4014 | 4036 | 4005, 4014, 4013 | 4011, 4008, 4043 |
| CLS | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000, 0.000, 0.000 | 0.000, 0.000, 0.000 |
| INP (ms) | n/a | n/a | n/a | n/a | n/a | n/a | n/a |

## Raw JSON

- [dashboard-tenants-before.mobile.r1.json](/home/runner/work/Nebutra-Sailor/Nebutra-Sailor/artifacts/lighthouse-ci/22659346904-1-dashboard-ci/dashboard-tenants-before.mobile.r1.json)
- [dashboard-tenants-before.mobile.r2.json](/home/runner/work/Nebutra-Sailor/Nebutra-Sailor/artifacts/lighthouse-ci/22659346904-1-dashboard-ci/dashboard-tenants-before.mobile.r2.json)
- [dashboard-tenants-before.mobile.r3.json](/home/runner/work/Nebutra-Sailor/Nebutra-Sailor/artifacts/lighthouse-ci/22659346904-1-dashboard-ci/dashboard-tenants-before.mobile.r3.json)
- [dashboard-tenants-after.mobile.r1.json](/home/runner/work/Nebutra-Sailor/Nebutra-Sailor/artifacts/lighthouse-ci/22659346904-1-dashboard-ci/dashboard-tenants-after.mobile.r1.json)
- [dashboard-tenants-after.mobile.r2.json](/home/runner/work/Nebutra-Sailor/Nebutra-Sailor/artifacts/lighthouse-ci/22659346904-1-dashboard-ci/dashboard-tenants-after.mobile.r2.json)
- [dashboard-tenants-after.mobile.r3.json](/home/runner/work/Nebutra-Sailor/Nebutra-Sailor/artifacts/lighthouse-ci/22659346904-1-dashboard-ci/dashboard-tenants-after.mobile.r3.json)
