/**
 * Alerting System for Nebutra Services
 *
 * Provides unified alerting via:
 * - Slack webhooks
 * - Discord webhooks
 * - Email (via Resend)
 * - Custom webhooks
 */

export type AlertSeverity = "info" | "warning" | "error" | "critical";

export interface AlertPayload {
  title: string;
  message: string;
  severity: AlertSeverity;
  service?: string;
  environment?: string;
  timestamp?: string;
  metadata?: Record<string, string | number | boolean>;
}

export interface AlertChannel {
  name: string;
  send: (payload: AlertPayload) => Promise<boolean>;
}

// ============================================
// Alert Channel Registry
// ============================================

const channels: Map<string, AlertChannel> = new Map();

export function registerChannel(channel: AlertChannel): void {
  channels.set(channel.name, channel);
}

export function unregisterChannel(name: string): void {
  channels.delete(name);
}

// ============================================
// Slack Channel
// ============================================

export function createSlackChannel(webhookUrl: string): AlertChannel {
  return {
    name: "slack",
    send: async (payload: AlertPayload) => {
      const color = getSeverityColor(payload.severity);
      const emoji = getSeverityEmoji(payload.severity);

      const slackPayload = {
        attachments: [
          {
            color,
            blocks: [
              {
                type: "header",
                text: {
                  type: "plain_text",
                  text: `${emoji} ${payload.title}`,
                },
              },
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: payload.message,
                },
              },
              {
                type: "context",
                elements: [
                  {
                    type: "mrkdwn",
                    text: `*Service:* ${payload.service || "unknown"} | *Environment:* ${payload.environment || process.env.NODE_ENV || "unknown"} | *Severity:* ${payload.severity}`,
                  },
                ],
              },
            ],
          },
        ],
      };

      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(slackPayload),
        });
        return response.ok;
      } catch (error) {
        console.error("Slack alert failed:", error);
        return false;
      }
    },
  };
}

// ============================================
// Discord Channel
// ============================================

export function createDiscordChannel(webhookUrl: string): AlertChannel {
  return {
    name: "discord",
    send: async (payload: AlertPayload) => {
      const color = getDiscordColor(payload.severity);
      const emoji = getSeverityEmoji(payload.severity);

      const discordPayload = {
        embeds: [
          {
            title: `${emoji} ${payload.title}`,
            description: payload.message,
            color,
            fields: [
              {
                name: "Service",
                value: payload.service || "unknown",
                inline: true,
              },
              {
                name: "Environment",
                value: payload.environment || process.env.NODE_ENV || "unknown",
                inline: true,
              },
              {
                name: "Severity",
                value: payload.severity.toUpperCase(),
                inline: true,
              },
            ],
            timestamp: payload.timestamp || new Date().toISOString(),
          },
        ],
      };

      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(discordPayload),
        });
        return response.ok;
      } catch (error) {
        console.error("Discord alert failed:", error);
        return false;
      }
    },
  };
}

// ============================================
// Custom Webhook Channel
// ============================================

export function createWebhookChannel(
  name: string,
  webhookUrl: string,
  options: {
    headers?: Record<string, string>;
    transformPayload?: (payload: AlertPayload) => unknown;
  } = {}
): AlertChannel {
  return {
    name,
    send: async (payload: AlertPayload) => {
      const body = options.transformPayload
        ? options.transformPayload(payload)
        : payload;

      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...options.headers,
          },
          body: JSON.stringify(body),
        });
        return response.ok;
      } catch (error) {
        console.error(`Webhook alert (${name}) failed:`, error);
        return false;
      }
    },
  };
}

// ============================================
// Alert Functions
// ============================================

/**
 * Send alert to all registered channels
 */
export async function sendAlert(payload: AlertPayload): Promise<Map<string, boolean>> {
  const results = new Map<string, boolean>();
  const enrichedPayload = {
    ...payload,
    timestamp: payload.timestamp || new Date().toISOString(),
    environment: payload.environment || process.env.NODE_ENV,
  };

  const promises = Array.from(channels.entries()).map(async ([name, channel]) => {
    try {
      const success = await channel.send(enrichedPayload);
      results.set(name, success);
    } catch (error) {
      console.error(`Alert channel ${name} failed:`, error);
      results.set(name, false);
    }
  });

  await Promise.allSettled(promises);
  return results;
}

/**
 * Send alert to specific channels
 */
export async function sendAlertTo(
  channelNames: string[],
  payload: AlertPayload
): Promise<Map<string, boolean>> {
  const results = new Map<string, boolean>();
  const enrichedPayload = {
    ...payload,
    timestamp: payload.timestamp || new Date().toISOString(),
    environment: payload.environment || process.env.NODE_ENV,
  };

  const promises = channelNames.map(async (name) => {
    const channel = channels.get(name);
    if (!channel) {
      results.set(name, false);
      return;
    }

    try {
      const success = await channel.send(enrichedPayload);
      results.set(name, success);
    } catch (error) {
      console.error(`Alert channel ${name} failed:`, error);
      results.set(name, false);
    }
  });

  await Promise.allSettled(promises);
  return results;
}

// ============================================
// Convenience Functions
// ============================================

export function alertInfo(title: string, message: string, service?: string): Promise<Map<string, boolean>> {
  return sendAlert({ title, message, severity: "info", service });
}

export function alertWarning(title: string, message: string, service?: string): Promise<Map<string, boolean>> {
  return sendAlert({ title, message, severity: "warning", service });
}

export function alertError(title: string, message: string, service?: string): Promise<Map<string, boolean>> {
  return sendAlert({ title, message, severity: "error", service });
}

export function alertCritical(title: string, message: string, service?: string): Promise<Map<string, boolean>> {
  return sendAlert({ title, message, severity: "critical", service });
}

// ============================================
// Error Rate Alerting
// ============================================

interface ErrorRateConfig {
  windowMs: number;
  threshold: number;
  cooldownMs: number;
}

const errorCounts = new Map<string, { count: number; windowStart: number; lastAlert: number }>();

export function trackError(
  service: string,
  config: ErrorRateConfig = { windowMs: 60000, threshold: 10, cooldownMs: 300000 }
): boolean {
  const now = Date.now();
  const key = service;
  let data = errorCounts.get(key);

  if (!data || now - data.windowStart > config.windowMs) {
    data = { count: 0, windowStart: now, lastAlert: data?.lastAlert || 0 };
  }

  data.count++;
  errorCounts.set(key, data);

  // Check if we should alert
  if (data.count >= config.threshold && now - data.lastAlert > config.cooldownMs) {
    data.lastAlert = now;
    errorCounts.set(key, data);

    // Trigger alert
    alertError(
      `High Error Rate: ${service}`,
      `Error rate threshold exceeded: ${data.count} errors in ${config.windowMs / 1000}s`,
      service
    ).catch(console.error);

    return true;
  }

  return false;
}

// ============================================
// Utility Functions
// ============================================

function getSeverityColor(severity: AlertSeverity): string {
  switch (severity) {
    case "info":
      return "#36a64f";
    case "warning":
      return "#ffcc00";
    case "error":
      return "#ff6600";
    case "critical":
      return "#ff0000";
    default:
      return "#808080";
  }
}

function getDiscordColor(severity: AlertSeverity): number {
  switch (severity) {
    case "info":
      return 0x36a64f;
    case "warning":
      return 0xffcc00;
    case "error":
      return 0xff6600;
    case "critical":
      return 0xff0000;
    default:
      return 0x808080;
  }
}

function getSeverityEmoji(severity: AlertSeverity): string {
  switch (severity) {
    case "info":
      return "ℹ️";
    case "warning":
      return "⚠️";
    case "error":
      return "🚨";
    case "critical":
      return "🔥";
    default:
      return "📢";
  }
}

// ============================================
// Initialize from Environment
// ============================================

export function initializeFromEnv(): void {
  const slackUrl = process.env.SLACK_WEBHOOK_URL;
  const discordUrl = process.env.DISCORD_WEBHOOK_URL;

  if (slackUrl) {
    registerChannel(createSlackChannel(slackUrl));
    console.log("Slack alerting channel registered");
  }

  if (discordUrl) {
    registerChannel(createDiscordChannel(discordUrl));
    console.log("Discord alerting channel registered");
  }
}
