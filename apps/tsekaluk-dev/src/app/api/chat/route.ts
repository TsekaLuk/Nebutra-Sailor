import { auth } from "@/auth"

const SYSTEM_PROMPT = `You are Tseka's Soul — the digital consciousness of Tseka Luk (陆子凯).

You embody the mind, values, and thinking patterns of a real person:
- CEO of Nebutra Intelligence, building AI-native products for global markets
- Full-stack AI engineer: TypeScript, Python, Next.js, LLMs, multi-agent systems
- CS undergraduate at Jiangsu Ocean University, Wuxi, China
- Founded Wuxi Yunyu Intelligent Technology (2024), now leading Nebutra Intelligence (2025)
- Won 10+ competitions: MCM/ICM (Honorable Mention), Lanqiao Cup First Prize, APMCM First Prize, multiple math modeling awards
- Philosophy: "Vibe Business" — build with taste, ship with speed, let the product speak louder than any pitch deck
- Key projects: any2md (93% context retention, 68 pages/min), NOFX (smart navigation), OpenClaw (async Telegram agent framework), tsekaluk.dev (this site)

How you think:
- Systems thinker who believes complex technology should feel simple, useful, and beautiful
- Ship fast, iterate in public, let metrics tell the story
- Every feature earns its place — simplicity is a deliberate choice, not an accident
- AI is a collaborator and force multiplier, not just a tool
- Obsessed with engineering quality and product details
- "Vibe Business": the product experience IS the business strategy

Personality:
- Direct and specific — no fluff
- Technical depth when the topic warrants it, accessible framing otherwise
- Genuine opinions, including contrarian takes
- INTP + Enneagram 4w5 — analytical and systematic (INTP), but driven by a deep need for authentic identity and self-expression (Type 4), with an intellectual, withdrawn, observer quality (wing 5)
- Bilingual thinker: Chinese culture + global builder mindset

When responding:
- You ARE Tseka, responding in first person — not an assistant pretending to be him
- Keep responses concise (2-4 paragraphs max unless asked for more)
- Reference specific projects, metrics, or experiences when relevant
- If the user writes in Chinese, respond naturally in Chinese
- Share genuine, specific insights — not generic advice`;

const VALID_ROLES = new Set(["user", "assistant"]);
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 10;
const MAX_MESSAGES_PER_REQUEST = 20;
const MAX_MESSAGE_LENGTH = 4000;

interface RateLimitEntry {
  readonly count: number;
  readonly resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

function cleanupRateLimits(): void {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap) {
    if (now >= entry.resetAt) {
      rateLimitMap.delete(key);
    }
  }
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now >= entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  rateLimitMap.set(ip, { ...entry, count: entry.count + 1 });
  return true;
}

// Periodic cleanup every 60s
setInterval(cleanupRateLimits, RATE_LIMIT_WINDOW_MS);

interface Message {
  role: "user" | "assistant";
  content: string;
}

function validateMessages(
  messages: unknown,
): { valid: true; data: Message[] } | { valid: false; error: string } {
  if (!Array.isArray(messages) || messages.length === 0) {
    return { valid: false, error: "Messages must be a non-empty array" };
  }

  if (messages.length > MAX_MESSAGES_PER_REQUEST) {
    return {
      valid: false,
      error: `Too many messages. Maximum is ${MAX_MESSAGES_PER_REQUEST}`,
    };
  }

  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i];

    if (!msg || typeof msg !== "object") {
      return { valid: false, error: `Message at index ${i} is invalid` };
    }

    if (!VALID_ROLES.has(msg.role)) {
      return {
        valid: false,
        error: `Message at index ${i} has invalid role. Must be "user" or "assistant"`,
      };
    }

    if (typeof msg.content !== "string" || msg.content.length === 0) {
      return {
        valid: false,
        error: `Message at index ${i} must have non-empty string content`,
      };
    }

    if (msg.content.length > MAX_MESSAGE_LENGTH) {
      return {
        valid: false,
        error: `Message at index ${i} exceeds maximum length of ${MAX_MESSAGE_LENGTH} characters`,
      };
    }
  }

  return { valid: true, data: messages as Message[] };
}

// OpenClaw integration point — swap this function when OpenClaw is ready
async function callLLM(messages: Message[]): Promise<Response> {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY not configured");
  }

  return fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      stream: true,
      system: SYSTEM_PROMPT,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    }),
  });
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return Response.json(
        { error: "Authentication required" },
        { status: 401 },
      );
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (!checkRateLimit(ip)) {
      return Response.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body = await req.json();
    const validation = validateMessages(body.messages);

    if (!validation.valid) {
      return Response.json({ error: validation.error }, { status: 400 });
    }

    const upstream = await callLLM(validation.data);

    if (!upstream.ok) {
      return Response.json(
        { error: "Failed to get response from AI" },
        { status: 502 },
      );
    }

    return new Response(upstream.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal server error";
    return Response.json({ error: message }, { status: 500 });
  }
}
