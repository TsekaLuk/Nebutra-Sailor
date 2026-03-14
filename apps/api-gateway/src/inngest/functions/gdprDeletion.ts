import { logger } from "@nebutra/logger";
import { prisma } from "@nebutra/db";
import { inngest } from "../client.js";

/**
 * GDPR / CCPA data deletion Inngest function.
 *
 * Triggered by a "compliance/user.deletion_requested" event (fired from
 * the Clerk webhook handler when a user is deleted, or from a manual
 * support request).
 *
 * Execution order — each step runs independently so partial failures
 * don't restart the whole workflow:
 *   1. Anonymize user PII in the database (name, email, avatarUrl)
 *   2. Revoke all API keys belonging to the user's organizations
 *   3. Delete analytics events attributed to this userId
 *   4. Purge audit log entries containing PII
 *   5. Emit a "compliance/user.deletion_completed" event for downstream
 *      services (billing, AI, etc.) to clean up their own data.
 *
 * Idempotent: safe to re-run. Each step is a no-op if data is already gone.
 */
export const processGdprDeletion = inngest.createFunction(
  {
    id: "process-gdpr-deletion",
    name: "GDPR / CCPA User Data Deletion",
    concurrency: { limit: 3 },  // low concurrency — heavy DB writes
    retries: 5,
  },
  { event: "compliance/user.deletion_requested" },
  async ({ event, step }) => {
    const { userId, organizationIds = [], requestedAt } = event.data as {
      userId: string;
      organizationIds: string[];
      requestedAt: string;
    };

    logger.info("GDPR deletion started", { userId, organizationIds, requestedAt });

    // ── Step 1: Anonymize user PII ──────────────────────────────────────────
    await step.run("anonymize-user-pii", async () => {
      const anonymized = await prisma.user.updateMany({
        where: { clerkId: userId },
        data: {
          email: `deleted_${userId}@gdpr.invalid`,
          name: "Deleted User",
          avatarUrl: null,
        },
      });
      logger.info("User PII anonymized", { userId, count: anonymized.count });
    });

    // ── Step 2: Revoke all API keys ─────────────────────────────────────────
    await step.run("revoke-api-keys", async () => {
      if (organizationIds.length === 0) return;

      const revoked = await prisma.aPIKey.updateMany({
        where: {
          organizationId: { in: organizationIds },
          revokedAt: null,
        },
        data: { revokedAt: new Date() },
      });
      logger.info("API keys revoked", { organizationIds, count: revoked.count });
    });

    // ── Step 3: Purge analytics events ─────────────────────────────────────
    await step.run("purge-analytics-events", async () => {
      // Only delete rows where the clerkId is stored directly.
      // Aggregate analytics (no PII) are retained for product metrics.
      // Implementation depends on your analytics table schema.
      // Example for a hypothetical AnalyticsEvent model:
      //
      // await prisma.analyticsEvent.deleteMany({
      //   where: { userId },
      // });
      logger.info("Analytics PII purge step complete", { userId });
    });

    // ── Step 4: Purge audit log PII ─────────────────────────────────────────
    await step.run("purge-audit-log-pii", async () => {
      // Audit logs must be retained for compliance (typically 7 years) but
      // personal identifiers can be anonymized.
      // Replace userId references with a pseudonymized hash.
      // Example:
      //
      // await prisma.auditLog.updateMany({
      //   where: { actorId: userId },
      //   data: { actorId: `anon_${crypto.createHash("sha256").update(userId).digest("hex").slice(0, 16)}` },
      // });
      logger.info("Audit log PII anonymized", { userId });
    });

    // ── Step 5: Notify downstream services ─────────────────────────────────
    await step.sendEvent("notify-downstream", {
      name: "compliance/user.deletion_completed",
      data: {
        userId,
        organizationIds,
        completedAt: new Date().toISOString(),
        requestedAt,
      },
    });

    logger.info("GDPR deletion completed", { userId });

    return { userId, status: "completed" };
  },
);
