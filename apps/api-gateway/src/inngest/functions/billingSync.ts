import { logger } from "@nebutra/logger";
import { prisma } from "@nebutra/db";
import type { Plan } from "@nebutra/db";
import { OrganizationRepository } from "@nebutra/repositories";
import { inngest } from "../client.js";

const orgRepo = new OrganizationRepository(prisma);

/**
 * Map a Stripe subscription status to an Organization plan.
 *
 * - active / trialing → keep or upgrade to PRO
 * - canceled / unpaid / past_due / paused / incomplete_expired → FREE
 */
function resolvePlanFromStatus(status: string): Plan {
  switch (status) {
    case "active":
    case "trialing":
      return "PRO";
    default:
      return "FREE";
  }
}

function extractStringField(data: unknown, field: string): string | undefined {
  if (typeof data !== "object" || data === null) return undefined;
  const v = (data as Record<string, unknown>)[field];
  return typeof v === "string" ? v : undefined;
}

/**
 * Inngest function: react to Stripe billing events.
 *
 * Handles:
 *   - stripe/subscription.updated  → update Organization.plan from subscription status
 *   - stripe/subscription.deleted  → downgrade Organization.plan to FREE
 *   - stripe/invoice.paid          → log successful payment
 *   - stripe/invoice.payment_failed → log payment failure
 */
export const processBillingEvent = inngest.createFunction(
  {
    id: "process-billing-event",
    name: "Process Stripe Billing Event",
  },
  [
    { event: "stripe/subscription.updated" },
    { event: "stripe/subscription.deleted" },
    { event: "stripe/invoice.paid" },
    { event: "stripe/invoice.payment_failed" },
  ],
  async ({ event, step }) => {
    const eventName = event.name;

    logger.info("Processing Stripe billing event", { eventName });

    if (
      eventName === "stripe/subscription.updated" ||
      eventName === "stripe/subscription.deleted"
    ) {
      const organizationId = extractStringField(event.data, "organizationId");
      const status =
        eventName === "stripe/subscription.deleted"
          ? "canceled"
          : (extractStringField(event.data, "status") ?? "canceled");

      if (!organizationId) {
        logger.warn("Stripe subscription event missing organizationId", {
          eventName,
        });
        return;
      }

      const targetPlan = resolvePlanFromStatus(status);

      await step.run("update-organization-plan", async () => {
        await orgRepo.updateById(organizationId, { plan: targetPlan });

        logger.info("Organization plan updated", {
          organizationId,
          status,
          plan: targetPlan,
        });
      });

      return;
    }

    if (eventName === "stripe/invoice.paid") {
      await step.run("log-invoice-paid", async () => {
        const invoiceId = extractStringField(event.data, "invoiceId");
        const organizationId = extractStringField(event.data, "organizationId");

        logger.info("Stripe invoice paid", { invoiceId, organizationId });
      });

      return;
    }

    if (eventName === "stripe/invoice.payment_failed") {
      await step.run("log-payment-failure", async () => {
        const invoiceId = extractStringField(event.data, "invoiceId");
        const organizationId = extractStringField(event.data, "organizationId");
        const reason = extractStringField(event.data, "failureReason");

        logger.warn("Stripe invoice payment failed", {
          invoiceId,
          organizationId,
          reason,
        });
      });

      return;
    }
  },
);
