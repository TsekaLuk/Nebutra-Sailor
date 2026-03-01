import { Hono } from "hono";
import { Webhook } from "svix";
import { prisma, Prisma } from "@nebutra/db";
import { logger } from "@nebutra/logger";

const log = logger.child({ service: "clerk-webhook" });

export const clerkWebhookRoutes = new Hono();

// ============================================
// Clerk webhook event types
// ============================================

interface ClerkEmailAddress {
  id: string;
  email_address: string;
  verification: { status: string } | null;
}

interface ClerkUserData {
  id: string;
  email_addresses: ClerkEmailAddress[];
  first_name: string | null;
  last_name: string | null;
  image_url: string | null;
  profile_image_url: string | null;
}

interface ClerkOrganizationData {
  id: string;
  name: string;
  slug: string;
  image_url: string | null;
}

interface ClerkOrganizationMembershipData {
  id: string;
  role: string;
  organization: {
    id: string;
    name: string;
    slug: string;
  };
  public_user_data: {
    user_id: string;
  };
}

type ClerkWebhookEventType =
  | "user.created"
  | "user.updated"
  | "user.deleted"
  | "organization.created"
  | "organization.updated"
  | "organization.deleted"
  | "organizationMembership.created"
  | "organizationMembership.deleted"
  | (string & Record<never, never>); // allow unknown types without widening known types

interface ClerkWebhookEvent {
  type: ClerkWebhookEventType;
  data: unknown;
}

// ============================================
// Role mapping
// ============================================

// Prisma Role enum: OWNER | ADMIN | MEMBER | VIEWER
type PrismaRole = "OWNER" | "ADMIN" | "MEMBER" | "VIEWER";

function mapClerkRole(clerkRole: string): PrismaRole {
  const roleMap: Record<string, PrismaRole> = {
    "org:owner": "OWNER",
    "org:admin": "ADMIN",
    "org:member": "MEMBER",
    "org:viewer": "VIEWER",
  };
  return roleMap[clerkRole] ?? "MEMBER";
}

// ============================================
// Route handler
// ============================================

clerkWebhookRoutes.post("/clerk", async (c) => {
  const rawBody = await c.req.text();
  const svixId = c.req.header("svix-id");
  const svixTimestamp = c.req.header("svix-timestamp");
  const svixSignature = c.req.header("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return c.json({ error: "Missing svix headers" }, 400);
  }

  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
  if (!webhookSecret) {
    log.error("CLERK_WEBHOOK_SECRET not configured");
    return c.json({ error: "Webhook not configured" }, 500);
  }

  let payload: ClerkWebhookEvent;
  try {
    const wh = new Webhook(webhookSecret);
    payload = wh.verify(rawBody, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as ClerkWebhookEvent;
  } catch (err) {
    log.error("Clerk webhook signature verification failed", err);
    return c.json({ error: "Invalid signature" }, 400);
  }

  // Idempotency check
  const existingEvent = await prisma.webhookEvent.findUnique({
    where: { provider_eventId: { provider: "clerk", eventId: svixId } },
  });

  if (existingEvent?.processedAt) {
    log.info("Clerk event already processed, skipping", {
      svixId,
      type: payload.type,
    });
    return c.json({ received: true, skipped: true });
  }

  await prisma.webhookEvent.upsert({
    where: { provider_eventId: { provider: "clerk", eventId: svixId } },
    create: {
      provider: "clerk",
      eventId: svixId,
      eventType: payload.type,
      payload: payload as unknown as Prisma.InputJsonValue,
    },
    update: {},
  });

  // Respond immediately; process asynchronously
  const response = c.json({ received: true });

  handleClerkEvent(payload, prisma)
    .then(async () => {
      await prisma.webhookEvent.update({
        where: { provider_eventId: { provider: "clerk", eventId: svixId } },
        data: { processedAt: new Date() },
      });
    })
    .catch(async (err: unknown) => {
      log.error("Clerk event handler error", err, { type: payload.type });
      await prisma.webhookEvent
        .update({
          where: { provider_eventId: { provider: "clerk", eventId: svixId } },
          data: {
            errorMessage: err instanceof Error ? err.message : "Unknown error",
            retryCount: { increment: 1 },
          },
        })
        .catch(() => {
          // Best-effort — do not throw inside catch
        });
    });

  return response;
});

// ============================================
// Prisma type alias
// ============================================

type PrismaClient = typeof prisma;

// ============================================
// Event dispatcher
// ============================================

async function handleClerkEvent(
  event: ClerkWebhookEvent,
  db: PrismaClient,
): Promise<void> {
  switch (event.type) {
    case "user.created":
      await handleUserCreated(event.data as ClerkUserData, db);
      break;
    case "user.updated":
      await handleUserUpdated(event.data as ClerkUserData, db);
      break;
    case "user.deleted":
      await handleUserDeleted(event.data as ClerkUserData, db);
      break;
    case "organization.created":
      await handleOrganizationCreated(event.data as ClerkOrganizationData, db);
      break;
    case "organization.updated":
      await handleOrganizationUpdated(event.data as ClerkOrganizationData, db);
      break;
    case "organization.deleted":
      await handleOrganizationDeleted(event.data as ClerkOrganizationData, db);
      break;
    case "organizationMembership.created":
      await handleMembershipCreated(
        event.data as ClerkOrganizationMembershipData,
        db,
      );
      break;
    case "organizationMembership.deleted":
      await handleMembershipDeleted(
        event.data as ClerkOrganizationMembershipData,
        db,
      );
      break;
    default:
      log.info("Unhandled Clerk event type", { type: event.type });
  }
}

// ============================================
// User handlers
// ============================================

function resolveUserName(data: ClerkUserData): string | null {
  const parts = [data.first_name, data.last_name].filter(Boolean);
  return parts.length > 0 ? parts.join(" ") : null;
}

function resolvePrimaryEmail(data: ClerkUserData): string {
  const primary = data.email_addresses.find(
    (e) => e.verification?.status === "verified",
  );
  return primary?.email_address ?? data.email_addresses[0]?.email_address ?? "";
}

async function handleUserCreated(
  data: ClerkUserData,
  db: PrismaClient,
): Promise<void> {
  const email = resolvePrimaryEmail(data);
  const name = resolveUserName(data);
  const avatarUrl = data.image_url ?? data.profile_image_url ?? null;

  await db.user.create({
    data: {
      clerkId: data.id,
      email,
      ...(name !== null && { name }),
      ...(avatarUrl !== null && { avatarUrl }),
    },
  });

  log.info("User created", { clerkId: data.id, email });
}

async function handleUserUpdated(
  data: ClerkUserData,
  db: PrismaClient,
): Promise<void> {
  const email = resolvePrimaryEmail(data);
  const name = resolveUserName(data);
  const avatarUrl = data.image_url ?? data.profile_image_url ?? null;

  await db.user.update({
    where: { clerkId: data.id },
    data: {
      email,
      name,
      avatarUrl,
    },
  });

  log.info("User updated", { clerkId: data.id, email });
}

async function handleUserDeleted(
  data: ClerkUserData,
  db: PrismaClient,
): Promise<void> {
  // Cascade deletes on OrganizationMember, Wallet, etc. are handled by DB constraints
  await db.user.delete({
    where: { clerkId: data.id },
  });

  log.info("User deleted", { clerkId: data.id });
}

// ============================================
// Organization handlers
// ============================================

async function handleOrganizationCreated(
  data: ClerkOrganizationData,
  db: PrismaClient,
): Promise<void> {
  await db.organization.create({
    data: {
      clerkId: data.id,
      name: data.name,
      slug: data.slug,
    },
  });

  log.info("Organization created", {
    clerkId: data.id,
    name: data.name,
    slug: data.slug,
  });
}

async function handleOrganizationUpdated(
  data: ClerkOrganizationData,
  db: PrismaClient,
): Promise<void> {
  await db.organization.update({
    where: { clerkId: data.id },
    data: {
      name: data.name,
      slug: data.slug,
    },
  });

  log.info("Organization updated", { clerkId: data.id, name: data.name });
}

async function handleOrganizationDeleted(
  data: ClerkOrganizationData,
  db: PrismaClient,
): Promise<void> {
  // Cascade deletes on members, content, products, etc. handled by DB constraints
  await db.organization.delete({
    where: { clerkId: data.id },
  });

  log.info("Organization deleted", { clerkId: data.id });
}

// ============================================
// Membership handlers
// ============================================

async function handleMembershipCreated(
  data: ClerkOrganizationMembershipData,
  db: PrismaClient,
): Promise<void> {
  const orgClerkId = data.organization.id;
  const userClerkId = data.public_user_data.user_id;
  const role = mapClerkRole(data.role);

  const [organization, user] = await Promise.all([
    db.organization.findUnique({ where: { clerkId: orgClerkId } }),
    db.user.findUnique({ where: { clerkId: userClerkId } }),
  ]);

  if (!organization) {
    log.error("Organization not found for membership.created", null, {
      orgClerkId,
      membershipId: data.id,
    });
    return;
  }

  if (!user) {
    log.error("User not found for membership.created", null, {
      userClerkId,
      membershipId: data.id,
    });
    return;
  }

  await db.organizationMember.upsert({
    where: {
      organizationId_userId: {
        organizationId: organization.id,
        userId: user.id,
      },
    },
    create: {
      organizationId: organization.id,
      userId: user.id,
      role,
    },
    update: { role },
  });

  log.info("Organization membership created", {
    organizationId: organization.id,
    userId: user.id,
    role,
  });
}

async function handleMembershipDeleted(
  data: ClerkOrganizationMembershipData,
  db: PrismaClient,
): Promise<void> {
  const orgClerkId = data.organization.id;
  const userClerkId = data.public_user_data.user_id;

  const [organization, user] = await Promise.all([
    db.organization.findUnique({ where: { clerkId: orgClerkId } }),
    db.user.findUnique({ where: { clerkId: userClerkId } }),
  ]);

  if (!organization || !user) {
    log.error("Organization or user not found for membership.deleted", null, {
      orgClerkId,
      userClerkId,
      membershipId: data.id,
    });
    return;
  }

  await db.organizationMember.deleteMany({
    where: {
      organizationId: organization.id,
      userId: user.id,
    },
  });

  log.info("Organization membership deleted", {
    organizationId: organization.id,
    userId: user.id,
  });
}
