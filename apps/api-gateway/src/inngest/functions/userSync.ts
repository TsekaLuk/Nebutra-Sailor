import { prisma } from "@nebutra/db";
import { UserRepository } from "@nebutra/repositories";
import { inngest } from "../client.js";

const userRepo = new UserRepository(prisma);

/**
 * Shape of the data payload carried by Clerk user webhook events.
 */
interface ClerkUserEventData {
  userId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
}

function assertClerkUserEventData(data: unknown): ClerkUserEventData {
  if (
    typeof data !== "object" ||
    data === null ||
    typeof (data as Record<string, unknown>)["userId"] !== "string" ||
    typeof (data as Record<string, unknown>)["email"] !== "string"
  ) {
    throw new Error("Invalid clerk user event payload");
  }
  const d = data as Record<string, unknown>;
  return {
    userId: d["userId"] as string,
    email: d["email"] as string,
    ...(typeof d["firstName"] === "string" && { firstName: d["firstName"] }),
    ...(typeof d["lastName"] === "string" && { lastName: d["lastName"] }),
    ...(typeof d["imageUrl"] === "string" && { imageUrl: d["imageUrl"] }),
  };
}

/**
 * Inngest function: upsert a Clerk user into the database on
 * `clerk/user.created` and `clerk/user.updated` events.
 */
export const syncUserToDB = inngest.createFunction(
  {
    id: "sync-user-to-db",
    name: "Sync Clerk User to Database",
  },
  [{ event: "clerk/user.created" }, { event: "clerk/user.updated" }],
  async ({ event, step }) => {
    const data = assertClerkUserEventData(event.data);

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
export const deleteUserFromDB = inngest.createFunction(
  {
    id: "delete-user-from-db",
    name: "Delete Clerk User from Database",
  },
  { event: "clerk/user.deleted" },
  async ({ event, step }) => {
    const data = event.data;

    if (
      typeof data !== "object" ||
      data === null ||
      typeof (data as Record<string, unknown>)["userId"] !== "string"
    ) {
      throw new Error(
        "Invalid clerk user.deleted event payload: missing userId",
      );
    }

    const userId = (data as Record<string, unknown>)["userId"] as string;

    await step.run("delete-user", async () => {
      await userRepo.deleteIfExistsByClerkId(userId);
    });
  },
);
