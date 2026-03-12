import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

const MAX_MESSAGE_LENGTH = 280

function isAdmin(email: string | null | undefined): boolean {
  const adminEmail = process.env.ADMIN_EMAIL
  return Boolean(adminEmail && email === adminEmail)
}

// GET: public read (approved only) or admin read (all)
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const all = searchParams.get("all")

    if (all === "true") {
      const session = await auth()
      if (!session?.user || !isAdmin(session.user.email)) {
        return Response.json({ success: false, error: "Admin access required" }, { status: 403 })
      }

      const data = await prisma.guestbook.findMany({
        orderBy: { createdAt: "desc" },
        take: 100,
      })

      return Response.json({ success: true, data })
    }

    const data = await prisma.guestbook.findMany({
      where: { status: "approved" },
      orderBy: { createdAt: "desc" },
      take: 100,
      select: {
        id: true,
        authorName: true,
        authorImage: true,
        nickname: true,
        relationship: true,
        message: true,
        createdAt: true,
      },
    })

    return Response.json({ success: true, data })
  } catch {
    return Response.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}

// POST: authenticated users submit endorsements (status = 'pending')
export async function POST(req: Request) {
  try {
    const session = await auth()

    if (!session?.user) {
      return Response.json({ success: false, error: "Authentication required" }, { status: 401 })
    }

    const body = await req.json()
    const { message, nickname, relationship, avatar_url } = body

    if (!message || typeof message !== "string") {
      return Response.json({ success: false, error: "Message is required" }, { status: 400 })
    }

    const trimmed = message.trim()

    if (trimmed.length === 0) {
      return Response.json({ success: false, error: "Message cannot be empty" }, { status: 400 })
    }

    if (trimmed.length > MAX_MESSAGE_LENGTH) {
      return Response.json(
        { success: false, error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer` },
        { status: 400 },
      )
    }

    if (!nickname || typeof nickname !== "string" || nickname.trim().length === 0) {
      return Response.json({ success: false, error: "Nickname is required" }, { status: 400 })
    }

    if (!relationship || typeof relationship !== "string") {
      return Response.json({ success: false, error: "Relationship is required" }, { status: 400 })
    }

    const data = await prisma.guestbook.create({
      data: {
        authorName: session.user.name ?? "Anonymous",
        authorImage: avatar_url ?? session.user.image ?? null,
        authorProvider: "oauth",
        nickname: nickname.trim(),
        relationship,
        message: trimmed,
        status: "pending",
      },
    })

    return Response.json({ success: true, data }, { status: 201 })
  } catch {
    return Response.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}

// PATCH: admin approve/reject
export async function PATCH(req: Request) {
  try {
    const session = await auth()

    if (!session?.user) {
      return Response.json({ success: false, error: "Authentication required" }, { status: 401 })
    }

    if (!isAdmin(session.user.email)) {
      return Response.json({ success: false, error: "Admin access required" }, { status: 403 })
    }

    const body = await req.json()
    const { id, status } = body

    if (!id || !status || !["approved", "rejected"].includes(status)) {
      return Response.json({ success: false, error: "Invalid id or status" }, { status: 400 })
    }

    await prisma.guestbook.update({
      where: { id },
      data: { status },
    })

    return Response.json({ success: true })
  } catch {
    return Response.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}

// DELETE: admin delete
export async function DELETE(req: Request) {
  try {
    const session = await auth()

    if (!session?.user) {
      return Response.json({ success: false, error: "Authentication required" }, { status: 401 })
    }

    if (!isAdmin(session.user.email)) {
      return Response.json({ success: false, error: "Admin access required" }, { status: 403 })
    }

    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")

    if (!id) {
      return Response.json({ success: false, error: "Entry ID is required" }, { status: 400 })
    }

    await prisma.guestbook.delete({
      where: { id },
    })

    return Response.json({ success: true })
  } catch {
    return Response.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
