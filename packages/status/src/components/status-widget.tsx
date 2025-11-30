"use client";

/**
 * StatusWidget - Full status display widget
 *
 * Usage:
 * <StatusWidget pageSlug="nebutra" />
 * <StatusWidget pageSlug="nebutra" showMonitors showUptime />
 */

import { useEffect, useState } from "react";
import type { StatusPageData, StatusState } from "../types";
import { fetchStatusPage } from "../api";

interface StatusWidgetProps {
  pageSlug: string;
  statusPageUrl?: string;
  showMonitors?: boolean;
  showUptime?: boolean;
  showIncidents?: boolean;
  compact?: boolean;
  className?: string;
}

const STATUS_STYLES: Record<
  StatusState,
  { bg: string; text: string; border: string; icon: string }
> = {
  operational: {
    bg: "bg-green-50 dark:bg-green-950",
    text: "text-green-700 dark:text-green-300",
    border: "border-green-200 dark:border-green-800",
    icon: "✓",
  },
  degraded: {
    bg: "bg-yellow-50 dark:bg-yellow-950",
    text: "text-yellow-700 dark:text-yellow-300",
    border: "border-yellow-200 dark:border-yellow-800",
    icon: "⚠",
  },
  partial_outage: {
    bg: "bg-orange-50 dark:bg-orange-950",
    text: "text-orange-700 dark:text-orange-300",
    border: "border-orange-200 dark:border-orange-800",
    icon: "⚡",
  },
  major_outage: {
    bg: "bg-red-50 dark:bg-red-950",
    text: "text-red-700 dark:text-red-300",
    border: "border-red-200 dark:border-red-800",
    icon: "✕",
  },
  unknown: {
    bg: "bg-gray-50 dark:bg-gray-900",
    text: "text-gray-600 dark:text-gray-400",
    border: "border-gray-200 dark:border-gray-700",
    icon: "?",
  },
};

const STATUS_LABELS: Record<StatusState, string> = {
  operational: "All Systems Operational",
  degraded: "Degraded Performance",
  partial_outage: "Partial System Outage",
  major_outage: "Major System Outage",
  unknown: "Status Unknown",
};

export function StatusWidget({
  pageSlug,
  statusPageUrl,
  showMonitors = true,
  showUptime = true,
  showIncidents = true,
  compact = false,
  className = "",
}: StatusWidgetProps) {
  const [data, setData] = useState<StatusPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchStatusPage({ pageSlug });
        setData(result);
        setError(null);
      } catch (e) {
        setError("Failed to load status");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, [pageSlug]);

  if (loading) {
    return (
      <div className={`animate-pulse rounded-lg border p-4 ${className}`}>
        <div className="h-8 w-48 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="mt-4 space-y-2">
          <div className="h-4 w-full rounded bg-gray-100 dark:bg-gray-800" />
          <div className="h-4 w-3/4 rounded bg-gray-100 dark:bg-gray-800" />
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div
        className={`rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900 ${className}`}
      >
        <p className="text-gray-500 dark:text-gray-400">
          {error || "Unable to load status"}
        </p>
      </div>
    );
  }

  const style = STATUS_STYLES[data.status];
  const defaultStatusUrl = `https://${pageSlug}.openstatus.dev`;

  return (
    <div
      className={`overflow-hidden rounded-lg border ${style.border} ${className}`}
    >
      {/* Header */}
      <div className={`${style.bg} p-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`text-2xl ${style.text}`}>{style.icon}</span>
            <div>
              <h3 className={`font-semibold ${style.text}`}>
                {STATUS_LABELS[data.status]}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Last updated:{" "}
                {new Date(data.lastUpdated).toLocaleTimeString()}
              </p>
            </div>
          </div>
          <a
            href={statusPageUrl || defaultStatusUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            View Status Page →
          </a>
        </div>
      </div>

      {/* Monitors */}
      {showMonitors && data.monitors.length > 0 && !compact && (
        <div className="border-t border-gray-100 p-4 dark:border-gray-800">
          <h4 className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Service Status
          </h4>
          <div className="grid gap-2">
            {data.monitors.map((monitor) => {
              const monitorStyle = STATUS_STYLES[monitor.status];
              return (
                <div
                  key={monitor.id}
                  className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2 dark:bg-gray-800"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        monitor.status === "operational"
                          ? "bg-green-500"
                          : monitor.status === "degraded"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {monitor.name}
                    </span>
                  </div>
                  {monitor.latency && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {monitor.latency}ms
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Uptime */}
      {showUptime && !compact && (
        <div className="border-t border-gray-100 p-4 dark:border-gray-800">
          <h4 className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Uptime
          </h4>
          <div className="flex gap-4">
            <div className="flex-1">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {data.uptime.last24h.toFixed(2)}%
              </p>
              <p className="text-xs text-gray-500">Last 24h</p>
            </div>
            <div className="flex-1">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {data.uptime.last7d.toFixed(2)}%
              </p>
              <p className="text-xs text-gray-500">Last 7 days</p>
            </div>
            <div className="flex-1">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {data.uptime.last30d.toFixed(2)}%
              </p>
              <p className="text-xs text-gray-500">Last 30 days</p>
            </div>
          </div>
        </div>
      )}

      {/* Active Incidents */}
      {showIncidents && data.activeIncidents.length > 0 && (
        <div className="border-t border-gray-100 bg-red-50 p-4 dark:border-gray-800 dark:bg-red-950">
          <h4 className="mb-2 text-sm font-medium text-red-700 dark:text-red-300">
            Active Incidents
          </h4>
          <ul className="space-y-2">
            {data.activeIncidents.map((incident) => (
              <li
                key={incident.id}
                className="rounded-md bg-white p-2 dark:bg-gray-900"
              >
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {incident.title}
                </p>
                <p className="text-xs text-gray-500">
                  Status: {incident.status} • Impact: {incident.impact}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default StatusWidget;
