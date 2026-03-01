type GoldMetricsRow = {
  tenant_id: string;
  day: string;
  signups: number | string;
  activations: number | string;
  conversions: number | string;
  revenue: number | string;
  active_users: number | string;
  total_events: number | string;
};

type ClickHouseJsonResponse = {
  data?: GoldMetricsRow[];
};

export interface GrowthSummary {
  tenantId: string;
  day: string | null;
  signups: number;
  activations: number;
  conversions: number;
  revenue: number;
  activeUsers: number;
  totalEvents: number;
}

const DEFAULT_DASHBOARD_TENANT = "demo_org";

function toSafeNumber(value: unknown): number {
  const numberValue = Number(value);
  return Number.isFinite(numberValue) ? numberValue : 0;
}

function emptySummary(tenantId: string): GrowthSummary {
  return {
    tenantId,
    day: null,
    signups: 0,
    activations: 0,
    conversions: 0,
    revenue: 0,
    activeUsers: 0,
    totalEvents: 0,
  };
}

function escapeSqlString(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

function buildClickHouseUrl(): URL {
  const url = new URL(
    process.env.CLICKHOUSE_HTTP_URL || "http://localhost:8123",
  );
  if (process.env.CLICKHOUSE_USER) {
    url.username = process.env.CLICKHOUSE_USER;
  }
  if (process.env.CLICKHOUSE_PASSWORD) {
    url.password = process.env.CLICKHOUSE_PASSWORD;
  }
  return url;
}

function toGrowthSummary(row: GoldMetricsRow): GrowthSummary {
  return {
    tenantId: row.tenant_id,
    day: row.day,
    signups: toSafeNumber(row.signups),
    activations: toSafeNumber(row.activations),
    conversions: toSafeNumber(row.conversions),
    revenue: toSafeNumber(row.revenue),
    activeUsers: toSafeNumber(row.active_users),
    totalEvents: toSafeNumber(row.total_events),
  };
}

export async function getGrowthSummary(
  tenantId?: string,
): Promise<GrowthSummary> {
  const resolvedTenant =
    (tenantId && tenantId.trim()) ||
    process.env.DEFAULT_DASHBOARD_TENANT_ID ||
    DEFAULT_DASHBOARD_TENANT;
  const escapedTenant = escapeSqlString(resolvedTenant);
  const database = process.env.CLICKHOUSE_DATABASE || "nebutra";
  const clickhouseUrl = buildClickHouseUrl();

  const sql = `
SELECT
  tenant_id,
  toString(day) AS day,
  signups,
  activations,
  conversions,
  revenue,
  active_users,
  total_events
FROM ${database}.growth_metrics_daily
WHERE tenant_id = '${escapedTenant}'
ORDER BY day DESC
LIMIT 1
FORMAT JSON
`.trim();

  try {
    const response = await fetch(clickhouseUrl, {
      method: "POST",
      headers: { "content-type": "text/plain" },
      body: sql,
      cache: "no-store",
    });

    if (!response.ok) {
      return emptySummary(resolvedTenant);
    }

    const payload = (await response.json()) as ClickHouseJsonResponse;
    const row = payload.data?.[0];
    return row ? toGrowthSummary(row) : emptySummary(resolvedTenant);
  } catch {
    return emptySummary(resolvedTenant);
  }
}
