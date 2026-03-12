import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

function isAdmin(email: string | null | undefined): boolean {
  return Boolean(process.env.ADMIN_EMAIL && email === process.env.ADMIN_EMAIL)
}

export async function GET() {
  try {
    const entry = await prisma.nowEntry.findFirst({
      orderBy: { createdAt: "desc" },
    })
    return Response.json({ success: true, data: entry })
  } catch {
    return Response.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user || !isAdmin(session.user.email)) {
      return Response.json({ success: false, error: "Admin access required" }, { status: 403 })
    }

    const body = await req.json()
    const { date, building, thinking, shipped, reading } = body

    if (!date) {
      return Response.json({ success: false, error: "Date is required" }, { status: 400 })
    }

    const entry = await prisma.nowEntry.create({
      data: {
        date,
        building: building ?? [],
        thinking: thinking ?? [],
        shipped: shipped ?? [],
        reading: reading ?? [],
      },
    })

    return Response.json({ success: true, data: entry }, { status: 201 })
  } catch {
    return Response.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}

export async function PATCH(req: Request) {
  try {
    const session = await auth()
    if (!session?.user || !isAdmin(session.user.email)) {
      return Response.json({ success: false, error: "Admin access required" }, { status: 403 })
    }

    const body = await req.json()
    const { id, date, building, thinking, shipped, reading } = body

    if (!id) {
      return Response.json({ success: false, error: "Entry ID is required" }, { status: 400 })
    }

    const entry = await prisma.nowEntry.update({
      where: { id },
      data: { date, building, thinking, shipped, reading },
    })

    return Response.json({ success: true, data: entry })
  } catch {
    return Response.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
