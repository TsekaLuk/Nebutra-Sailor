import { put } from "@vercel/blob"
import { randomUUID } from "node:crypto"
import { createRateLimiter, getClientIp } from "@/lib/rate-limit"

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"]
const MAX_SIZE = 2 * 1024 * 1024 // 2MB
const checkRateLimit = createRateLimiter(60_000, 3)

export async function POST(req: Request) {
  const ip = getClientIp(req)
  const rl = checkRateLimit(ip)
  if (!rl.allowed) {
    return Response.json(
      { success: false, error: "Too many uploads. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfter) } },
    )
  }
  const contentLength = parseInt(req.headers.get("content-length") ?? "0", 10)
  if (contentLength > MAX_SIZE + 4 * 1024) {
    return Response.json({ success: false, error: "File too large (max 2MB)" }, { status: 413 })
  }

  try {
    const formData = await req.formData()
    const file = formData.get("file") as File | null

    if (!file) {
      return Response.json({ success: false, error: "No file provided" }, { status: 400 })
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return Response.json({ success: false, error: "Invalid file type. Use JPEG, PNG, WebP, or GIF." }, { status: 400 })
    }

    if (file.size > MAX_SIZE) {
      return Response.json({ success: false, error: "File too large (max 2MB)" }, { status: 400 })
    }

    const EXT_MAP: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/gif": "gif" }
    const ext = EXT_MAP[file.type]
    const filename = `avatars/${randomUUID()}.${ext}`

    const blob = await put(filename, file, { access: "public" })

    return Response.json({ success: true, url: blob.url })
  } catch {
    return Response.json({ success: false, error: "Upload failed" }, { status: 500 })
  }
}
