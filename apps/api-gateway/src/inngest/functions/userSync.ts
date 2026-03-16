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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const syncUserToDB: any = inngest.createFunction(
  {
    id: "sync-user-to-db",
    name: "Sync Clerk User to Database",
    concurrency: { limit: 10 },
    retries: 3,
  },
  [{ event: "clerk/user.created" }, { event: "clerk/user.updated" }],
  async ({ event, step }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = event.data as any;
    const { userId, email, firstName, lastName, imageUrl } = data;

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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const deleteUserFromDB: any = inngest.createFunction(
  {
    id: "delete-user-from-db",
    name: "Delete Clerk User from Database",
    concurrency: { limit: 10 },
    retries: 3,
  },
  { event: "clerk/user.deleted" },
  async ({ event, step }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = event.data as any;
    const { userId } = data;

    await step.run("delete-user", async () => {
      await userRepo.deleteIfExistsByClerkId(userId);
    });
  },
);
