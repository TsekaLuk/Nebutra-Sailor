import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import { createRateLimiter, getClientIp } from "@/lib/rate-limit";

const checkRateLimit = createRateLimiter(60_000, 10);

export async function GET(req: Request) {
  const ip = getClientIp(req);
  const rl = checkRateLimit(ip);
  if (!rl.allowed) {
    return new NextResponse("Too many requests", {
      status: 429,
      headers: { "Retry-After": String(rl.retryAfter) },
    });
  }

  const filePath = path.join(process.cwd(), "public", "resume.pdf");

  try {
    const fileBuffer = await readFile(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Disposition": 'attachment; filename="Tseka_Luk_Resume.pdf"',
        "Content-Type": "application/pdf",
        "Content-Length": fileBuffer.length.toString(),
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
      },
    });
  } catch (err) {
    const isNotFound = (err as NodeJS.ErrnoException).code === "ENOENT";
    if (isNotFound) {
      return new NextResponse("Resume not found", { status: 404 });
    }
    console.error("[resume] File read failed:", err);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
