/**
 * OpenStatus Configuration
 * https://www.openstatus.dev/
 * 
 * This file defines the monitoring configuration for Nebutra-Sailor.
 * OpenStatus provides uptime monitoring and status pages.
 */

export interface MonitorConfig {
  name: string;
  url: string;
  description?: string;
  method?: "GET" | "POST" | "HEAD";
  periodicity?: "1m" | "5m" | "10m" | "30m" | "1h";
  regions?: string[];
  headers?: Record<string, string>;
  body?: string;
  assertions?: {
    status?: number;
    latency?: number;
    headers?: Record<string, string>;
    body?: {
      contains?: string;
      jsonPath?: { path: string; value: unknown };
    };
  };
}

export interface StatusPageConfig {
  slug: string;
  title: string;
  description?: string;
  monitors: string[];
  logo?: string;
  favicon?: string;
  customDomain?: string;
}

/**
 * Monitors for Nebutra-Sailor services
 */
export const monitors: MonitorConfig[] = [
  // Landing Page
  {
    name: "Landing Page",
    url: "${LANDING_PAGE_URL}",
    description: "Main marketing website",
    periodicity: "1m",
    regions: ["ams", "iad", "sfo", "hkg", "syd"],
    assertions: {
      status: 200,
      latency: 3000,
    },
  },

  // Web App
  {
    name: "Web App",
    url: "${WEB_APP_URL}",
    description: "Main SaaS dashboard",
    periodicity: "1m",
    regions: ["ams", "iad", "sfo", "hkg", "syd"],
    assertions: {
      status: 200,
      latency: 3000,
    },
  },

  // API Gateway Health
  {
    name: "API Gateway",
    url: "${API_GATEWAY_URL}/misc/health",
    description: "BFF API health endpoint",
    periodicity: "1m",
    regions: ["ams", "iad", "sfo", "hkg", "syd"],
    assertions: {
      status: 200,
      latency: 1000,
      body: {
        jsonPath: { path: "$.status", value: "ok" },
      },
    },
  },

  // AI Service
  {
    name: "AI Service",
    url: "${AI_SERVICE_URL}/health",
    description: "AI/LLM microservice",
    periodicity: "5m",
    regions: ["iad"],
    assertions: {
      status: 200,
      latency: 2000,
    },
  },

  // Content Service
  {
    name: "Content Service",
    url: "${CONTENT_SERVICE_URL}/health",
    description: "Content management microservice",
    periodicity: "5m",
    regions: ["iad"],
    assertions: {
      status: 200,
      latency: 2000,
    },
  },

  // RecSys Service
  {
    name: "RecSys Service",
    url: "${RECSYS_SERVICE_URL}/health",
    description: "Recommendation system microservice",
    periodicity: "5m",
    regions: ["iad"],
    assertions: {
      status: 200,
      latency: 2000,
    },
  },

  // E-commerce Service
  {
    name: "E-commerce Service",
    url: "${ECOMMERCE_SERVICE_URL}/health",
    description: "E-commerce/Shopify microservice",
    periodicity: "5m",
    regions: ["iad"],
    assertions: {
      status: 200,
      latency: 2000,
    },
  },

  // Web3 Service
  {
    name: "Web3 Service",
    url: "${WEB3_SERVICE_URL}/health",
    description: "Blockchain/Web3 microservice",
    periodicity: "5m",
    regions: ["iad"],
    assertions: {
      status: 200,
      latency: 3000,
    },
  },

  // Database (via API Gateway)
  {
    name: "Database",
    url: "${API_GATEWAY_URL}/system/status",
    description: "Database connectivity check",
    periodicity: "1m",
    regions: ["iad"],
    assertions: {
      status: 200,
      body: {
        jsonPath: { path: "$.database", value: "connected" },
      },
    },
  },

  // Redis (via API Gateway)
  {
    name: "Redis Cache",
    url: "${API_GATEWAY_URL}/system/status",
    description: "Redis connectivity check",
    periodicity: "1m",
    regions: ["iad"],
    assertions: {
      status: 200,
      body: {
        jsonPath: { path: "$.redis", value: "connected" },
      },
    },
  },
];

/**
 * Status page configuration
 */
export const statusPage: StatusPageConfig = {
  slug: "nebutra-sailor",
  title: "Nebutra Sailor Status",
  description: "Real-time status and incident history for Nebutra Sailor platform",
  monitors: [
    "landing-page",
    "web-app",
    "api-gateway",
    "ai-service",
    "content-service",
    "recsys-service",
    "ecommerce-service",
    "web3-service",
    "database",
    "redis-cache",
  ],
  // Customize with your branding
  // logo: "https://your-domain.com/logo.png",
  // favicon: "https://your-domain.com/favicon.ico",
  // customDomain: "status.your-domain.com",
};

/**
 * Incident notification settings
 */
export const notifications = {
  email: {
    enabled: true,
    recipients: ["ops@nebutra.com"],
  },
  slack: {
    enabled: true,
    webhookUrl: "${SLACK_WEBHOOK_URL}",
    channel: "#ops-alerts",
  },
  pagerduty: {
    enabled: false,
    integrationKey: "${PAGERDUTY_KEY}",
  },
};
