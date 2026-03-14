import { prisma } from "@nebutra/db";
import { UserRepository } from "@nebutra/repositories";
import { inngest } from "../client.js";

const userRepo = new UserRepository(prisma);

/**
 * Inngest function: upsert a Clerk user into the database on
 * `clerk/user.created` and `clerk/user.updated` events.
 *
 * event.data is fully typed via the EventSchemas in client.ts —
 * no manual assertion needed.
 */
export const syncUserToDB = inngest.createFunction(
  {
    id: "sync-user-to-db",
    name: "Sync Clerk User to Database",
    concurrency: { limit: 10 },
    retries: 3,
  },
  [{ event: "clerk/user.created" }, { event: "clerk/user.updated" }],
  async ({ event, step }) => {
    const { userId, email, firstName, lastName, imageUrl } = event.data;

    const fullName =
      [firstName, lastName].filter(Boolean).join(" ").trim() || null;

    await step.run("upsert-user", async () => {
      await userRepo.upsertByClerkId({
        clerkId: userId,
        email,
        name: fullName,
        avatarUrl: imageUrl ?? null,
      });
    });
  },
);

/**
 * Inngest function: remove a Clerk user from the database on
 * `clerk/user.deleted` events.
 */
export const deleteUserFromDB = inngest.createFunction(
  {
    id: "delete-user-from-db",
    name: "Delete Clerk User from Database",
    concurrency: { limit: 10 },
    retries: 3,
  },
  { event: "clerk/user.deleted" },
  async ({ event, step }) => {
    const { userId } = event.data;

    await step.run("delete-user", async () => {
      await userRepo.deleteIfExistsByClerkId(userId);
    });
  },
);
