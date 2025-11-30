/**
 * OpenStatus API Client
 *
 * Fetches status data from OpenStatus API or self-hosted endpoint
 */

import type { StatusPageData, StatusState, StatusConfig } from "./types";

const DEFAULT_API_URL = "https://api.openstatus.dev/v1";

/**
 * Fetch status page data from OpenStatus
 */
export async function fetchStatusPage(
  config: StatusConfig
): Promise<StatusPageData> {
  const apiUrl = config.apiUrl || DEFAULT_API_URL;
  const url = `${apiUrl}/status-page/${config.pageSlug}/summary`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: 60 }, // Cache for 60 seconds (Next.js)
    });

    if (!response.ok) {
      throw new Error(`OpenStatus API error: ${response.status}`);
    }

    const data = await response.json();
    return transformOpenStatusResponse(data);
  } catch (error) {
    console.error("Failed to fetch status page:", error);
    return getDefaultStatusData();
  }
}

/**
 * Transform OpenStatus API response to our types
 */
function transformOpenStatusResponse(data: any): StatusPageData {
  const monitors = (data.monitors || []).map((m: any) => ({
    id: m.id,
    name: m.name,
    status: mapOpenStatusState(m.status),
    latency: m.latency,
    uptime: m.uptime,
    lastChecked: m.lastCheck,
  }));

  const activeIncidents = (data.incidents || [])
    .filter((i: any) => i.status !== "resolved")
    .map((i: any) => ({
      id: i.id,
      title: i.title,
      status: i.status,
      impact: i.impact,
      createdAt: i.createdAt,
      updatedAt: i.updatedAt,
    }));

  return {
    status: calculateOverallStatus(monitors, activeIncidents),
    monitors,
    activeIncidents,
    uptime: {
      last24h: data.uptime?.day || 100,
      last7d: data.uptime?.week || 100,
      last30d: data.uptime?.month || 100,
    },
    lastUpdated: new Date().toISOString(),
  };
}

function mapOpenStatusState(status: string): StatusState {
  switch (status?.toLowerCase()) {
    case "up":
    case "operational":
      return "operational";
    case "degraded":
      return "degraded";
    case "down":
    case "outage":
      return "major_outage";
    default:
      return "unknown";
  }
}

function calculateOverallStatus(
  monitors: { status: StatusState }[],
  incidents: { impact: string }[]
): StatusState {
  // Check active incidents first
  if (incidents.some((i) => i.impact === "critical")) {
    return "major_outage";
  }
  if (incidents.some((i) => i.impact === "major")) {
    return "partial_outage";
  }
  if (incidents.some((i) => i.impact === "minor")) {
    return "degraded";
  }

  // Check monitor statuses
  const statuses = monitors.map((m) => m.status);
  if (statuses.some((s) => s === "major_outage")) {
    return "major_outage";
  }
  if (statuses.some((s) => s === "partial_outage")) {
    return "partial_outage";
  }
  if (statuses.some((s) => s === "degraded")) {
    return "degraded";
  }
  if (statuses.every((s) => s === "operational")) {
    return "operational";
  }

  return "unknown";
}

function getDefaultStatusData(): StatusPageData {
  return {
    status: "unknown",
    monitors: [],
    activeIncidents: [],
    uptime: {
      last24h: 0,
      last7d: 0,
      last30d: 0,
    },
    lastUpdated: new Date().toISOString(),
  };
}

// ============================================
// Status Check from Internal Health Endpoint
// ============================================

/**
 * Fetch status from internal /health endpoint (fallback)
 */
export async function fetchInternalStatus(
  healthUrl: string
): Promise<StatusPageData> {
  try {
    const response = await fetch(healthUrl, {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      return {
        ...getDefaultStatusData(),
        status: "major_outage",
      };
    }

    const data = await response.json();
    
    return {
      status: data.status === "healthy" ? "operational" : "degraded",
      monitors: Object.entries(data.checks || {}).map(([name, check]: [string, any]) => ({
        id: name,
        name: name.charAt(0).toUpperCase() + name.slice(1),
        status: check.status === "pass" ? "operational" : "degraded",
        latency: check.latency_ms,
        lastChecked: new Date().toISOString(),
      })),
      activeIncidents: [],
      uptime: {
        last24h: 100,
        last7d: 100,
        last30d: 100,
      },
      lastUpdated: data.timestamp || new Date().toISOString(),
    };
  } catch (error) {
    return {
      ...getDefaultStatusData(),
      status: "unknown",
    };
  }
}
