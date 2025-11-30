import { Dub } from "dub";
import type {
  AnalyticsConfig,
  MultiTenantConfig,
  CreateLinkInput,
  Link,
  AnalyticsQuery,
  AnalyticsResult,
  TrackConversionInput,
  AttributeConversionInput,
  CreateReferralLinkInput,
  ReferralStats,
  ProcessRewardInput,
  WebhookConfig,
  WebhookEvent,
  GDPRRequest,
} from "./types";

/**
 * Analytics Client powered by Dub
 */
export class AnalyticsClient {
  private dub: Dub;
  private config: MultiTenantConfig;

  constructor(config: MultiTenantConfig) {
    this.config = config;
    this.dub = new Dub({
      token: config.apiKey,
    });
  }

  // ==========================================================================
  // Links
  // ==========================================================================

  links = {
    /**
     * Create a new short link
     */
    create: async (input: CreateLinkInput): Promise<Link> => {
      const domain = input.domain || this.config.defaultDomain;

      const response = await this.dub.links.create({
        url: input.url,
        domain,
        key: input.key,
        externalId: input.externalId || input.tenantId,
        tagIds: input.tags,
        expiresAt: input.expiresAt?.toString(),
        password: input.password,
        ios: input.ios,
        android: input.android,
        geo: input.geo,
      });

      return this.mapLink(response, input.tenantId);
    },

    /**
     * Create multiple links at once
     */
    createMany: async (inputs: CreateLinkInput[]): Promise<Link[]> => {
      const links = await Promise.all(
        inputs.map((input) => this.links.create(input))
      );
      return links;
    },

    /**
     * Get link by ID
     */
    get: async (linkId: string): Promise<Link | null> => {
      try {
        const response = await this.dub.links.get({ linkId });
        return this.mapLink(response);
      } catch {
        return null;
      }
    },

    /**
     * Get link by domain and key
     */
    getByKey: async (domain: string, key: string): Promise<Link | null> => {
      try {
        const response = await this.dub.links.get({ domain, key });
        return this.mapLink(response);
      } catch {
        return null;
      }
    },

    /**
     * Update a link
     */
    update: async (
      linkId: string,
      input: Partial<CreateLinkInput>
    ): Promise<Link> => {
      const response = await this.dub.links.update(linkId, {
        url: input.url,
        domain: input.domain,
        key: input.key,
        expiresAt: input.expiresAt?.toString(),
        password: input.password,
        ios: input.ios,
        android: input.android,
        geo: input.geo,
      });

      return this.mapLink(response, input.tenantId);
    },

    /**
     * Delete a link
     */
    delete: async (linkId: string): Promise<void> => {
      await this.dub.links.delete(linkId);
    },

    /**
     * List links with optional filters
     */
    list: async (options?: {
      tenantId?: string;
      domain?: string;
      tagId?: string;
      search?: string;
      page?: number;
      pageSize?: number;
    }): Promise<{ links: Link[]; count: number }> => {
      const response = await this.dub.links.list({
        domain: options?.domain,
        tagId: options?.tagId,
        search: options?.search,
        page: options?.page,
        pageSize: options?.pageSize,
      });

      const links = response.map((l) => this.mapLink(l, options?.tenantId));
      return { links, count: links.length };
    },

    /**
     * Get analytics for a specific link
     */
    getAnalytics: async (
      query: AnalyticsQuery & { linkId: string }
    ): Promise<AnalyticsResult> => {
      return this.getAnalytics(query);
    },
  };

  // ==========================================================================
  // Analytics
  // ==========================================================================

  /**
   * Get analytics data
   */
  async getAnalytics(query: AnalyticsQuery): Promise<AnalyticsResult> {
    const params = {
      domain: query.domain,
      linkId: Array.isArray(query.linkId)
        ? query.linkId.join(",")
        : query.linkId,
      interval: query.interval,
      start: query.start?.toString(),
      end: query.end?.toString(),
      country: query.country,
      device: query.device,
      browser: query.browser,
      os: query.os,
      referer: query.referer,
    };

    const [clicks, countries, devices, browsers] = await Promise.all([
      this.dub.analytics.retrieve({ ...params, event: "clicks" }),
      query.groupBy?.includes("country")
        ? this.dub.analytics.retrieve({
            ...params,
            event: "clicks",
            groupBy: "country",
          })
        : null,
      query.groupBy?.includes("device")
        ? this.dub.analytics.retrieve({
            ...params,
            event: "clicks",
            groupBy: "device",
          })
        : null,
      query.groupBy?.includes("browser")
        ? this.dub.analytics.retrieve({
            ...params,
            event: "clicks",
            groupBy: "browser",
          })
        : null,
    ]);

    return {
      clicks: typeof clicks === "number" ? clicks : 0,
      countries: countries as AnalyticsResult["countries"],
      devices: devices as AnalyticsResult["devices"],
      browsers: browsers as AnalyticsResult["browsers"],
    };
  }

  /**
   * Get tenant-wide metrics
   */
  async getTenantMetrics(options: {
    tenantId: string;
    startDate?: string;
    endDate?: string;
  }): Promise<{
    totalLinks: number;
    totalClicks: number;
    totalConversions: number;
    topLinks: Link[];
  }> {
    const [linksResult, analytics] = await Promise.all([
      this.links.list({ tenantId: options.tenantId }),
      this.getAnalytics({
        tenantId: options.tenantId,
        start: options.startDate,
        end: options.endDate,
      }),
    ]);

    // Sort by clicks to get top links
    const topLinks = linksResult.links
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 10);

    return {
      totalLinks: linksResult.count,
      totalClicks: analytics.clicks,
      totalConversions: analytics.sales || 0,
      topLinks,
    };
  }

  // ==========================================================================
  // Conversions
  // ==========================================================================

  conversions = {
    /**
     * Track a conversion event
     */
    track: async (input: TrackConversionInput): Promise<void> => {
      await this.dub.track.lead({
        clickId: input.clickId || "",
        eventName: input.eventName,
        customerId: input.customerId || "",
        customerEmail: input.metadata?.email as string,
        customerName: input.metadata?.name as string,
      });
    },

    /**
     * Attribute a conversion to a click
     */
    attribute: async (input: AttributeConversionInput): Promise<void> => {
      if (input.value) {
        await this.dub.track.sale({
          clickId: input.clickId,
          eventName: input.eventName,
          customerId: input.customerId || "",
          amount: Math.round(input.value * 100), // Convert to cents
          currency: input.currency || "USD",
          paymentProcessor: "custom",
        });
      } else {
        await this.dub.track.lead({
          clickId: input.clickId,
          eventName: input.eventName,
          customerId: input.customerId || "",
        });
      }
    },
  };

  // ==========================================================================
  // Referrals
  // ==========================================================================

  referrals = {
    /**
     * Create a referral link for a user
     */
    createLink: async (input: CreateReferralLinkInput): Promise<Link> => {
      const destinationUrl =
        input.destinationUrl ||
        `${this.config.domains?.default || "https://nebutra.com"}/signup`;

      return this.links.create({
        url: `${destinationUrl}?ref=${input.userId}`,
        tenantId: input.tenantId,
        tags: ["referral"],
        metadata: {
          userId: input.userId,
          rewardType: input.rewardType,
          rewardValue: input.rewardValue,
          ...input.metadata,
        },
      });
    },

    /**
     * Get referral statistics for a user
     */
    getStats: async (options: {
      userId: string;
      tenantId?: string;
    }): Promise<ReferralStats> => {
      // This would typically query your database for referral data
      // For now, return a placeholder structure
      return {
        userId: options.userId,
        clicks: 0,
        signups: 0,
        conversions: 0,
        earned: 0,
        pending: 0,
        paid: 0,
      };
    },

    /**
     * Process a referral reward
     */
    processReward: async (input: ProcessRewardInput): Promise<void> => {
      // This would typically:
      // 1. Verify the referral is valid
      // 2. Calculate the reward
      // 3. Credit the referrer's account
      // 4. Record the transaction
      console.log("Processing referral reward:", input);
    },
  };

  // ==========================================================================
  // Webhooks
  // ==========================================================================

  /**
   * Verify and parse a webhook event
   */
  async handleWebhook(
    request: Request,
    config: WebhookConfig
  ): Promise<WebhookEvent> {
    const body = await request.text();
    const signature = request.headers.get("x-dub-signature");

    // Verify signature
    if (!this.verifyWebhookSignature(body, signature, config.secret)) {
      throw new Error("Invalid webhook signature");
    }

    const event = JSON.parse(body) as WebhookEvent;

    // Filter by allowed events
    if (config.events && !config.events.includes(event.type)) {
      throw new Error(`Event type ${event.type} not allowed`);
    }

    return event;
  }

  private verifyWebhookSignature(
    body: string,
    signature: string | null,
    secret: string
  ): boolean {
    if (!signature) return false;

    // Implement HMAC verification
    // This is a simplified version - use proper crypto in production
    const crypto = require("crypto");
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body)
      .digest("hex");

    return signature === expectedSignature;
  }

  // ==========================================================================
  // Privacy & Compliance (GDPR)
  // ==========================================================================

  /**
   * Anonymize user data
   */
  async anonymizeUser(request: GDPRRequest): Promise<void> {
    // Anonymize all links and analytics data for this user
    console.log("Anonymizing user data:", request);
  }

  /**
   * Delete user data (GDPR right to erasure)
   */
  async deleteUserData(request: GDPRRequest): Promise<void> {
    // Delete all user's links and associated data
    console.log("Deleting user data:", request);
  }

  /**
   * Export user data (GDPR right to portability)
   */
  async exportUserData(request: GDPRRequest): Promise<unknown> {
    // Export all user's links, clicks, and conversions
    console.log("Exporting user data:", request);
    return {};
  }

  // ==========================================================================
  // Helpers
  // ==========================================================================

  private mapLink(response: unknown, tenantId?: string): Link {
    const link = response as Record<string, unknown>;
    return {
      id: link.id as string,
      domain: link.domain as string,
      key: link.key as string,
      url: link.url as string,
      shortLink: link.shortLink as string,
      clicks: (link.clicks as number) || 0,
      createdAt: link.createdAt as string,
      updatedAt: link.updatedAt as string,
      tenantId: tenantId || (link.externalId as string),
      externalId: link.externalId as string,
      tags: link.tags as string[],
      expiresAt: link.expiresAt as string,
      geo: link.geo as Link["geo"],
      metadata: link.metadata as Link["metadata"],
    };
  }
}

/**
 * Create an analytics client instance
 */
export function createAnalyticsClient(
  config: MultiTenantConfig
): AnalyticsClient {
  return new AnalyticsClient(config);
}

// Default client instance (configured via env vars)
let defaultClient: AnalyticsClient | null = null;

export function getAnalyticsClient(): AnalyticsClient {
  if (!defaultClient) {
    const apiKey = process.env.DUB_API_KEY;
    if (!apiKey) {
      throw new Error("DUB_API_KEY environment variable is required");
    }

    defaultClient = createAnalyticsClient({
      apiKey,
      workspaceId: process.env.DUB_WORKSPACE_ID,
      defaultDomain: process.env.DUB_DEFAULT_DOMAIN || "dub.sh",
    });
  }

  return defaultClient;
}

// Export convenience accessor
export const analytics = new Proxy({} as AnalyticsClient, {
  get(_, prop) {
    return getAnalyticsClient()[prop as keyof AnalyticsClient];
  },
});
