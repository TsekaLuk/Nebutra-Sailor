import { auth } from "@/auth"
import { writeFile, mkdir } from "node:fs/promises"
import { join } from "node:path"
import { randomUUID } from "node:crypto"

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"]
const MAX_SIZE = 2 * 1024 * 1024 // 2MB

export async function POST(req: Request) {
  try {
    const session = await auth()

    if (!session?.user) {
      return Response.json({ success: false, error: "Authentication required" }, { status: 401 })
    }

    const formData = await req.formData()
    const file = formData.get("file") as File | null

    if (!file) {
      return Response.json({ success: false, error: "No file provided" }, { status: 400 })
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return Response.json({ success: false, error: "Invalid file type" }, { status: 400 })
    }

    if (file.size > MAX_SIZE) {
      return Response.json({ success: false, error: "File too large (max 2MB)" }, { status: 400 })
    }

    const ext = file.type.split("/")[1] === "jpeg" ? "jpg" : file.type.split("/")[1]
    const filename = `${randomUUID()}.${ext}`

    const uploadDir = join(process.cwd(), "public", "uploads", "avatars")
    await mkdir(uploadDir, { recursive: true })

    const buffer = Buffer.from(await file.arrayBuffer())
    await writeFile(join(uploadDir, filename), buffer)

    const url = `/uploads/avatars/${filename}`

    return Response.json({ success: true, url })
  } catch {
    return Response.json({ success: false, error: "Upload failed" }, { status: 500 })
  }
}
