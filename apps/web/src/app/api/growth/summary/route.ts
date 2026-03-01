import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { getGrowthSummary } from "@/lib/warehouse/gold";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const hasClerkKeys =
  !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  !!process.env.CLERK_SECRET_KEY;

export async function GET(request: NextRequest) {
  let tenantId =
    request.nextUrl.searchParams.get("tenantId") ||
    request.headers.get("x-organization-id") ||
    undefined;

  if (!tenantId && hasClerkKeys) {
    const authState = await auth();
    tenantId = authState.orgId || undefined;
  }

  const summary = await getGrowthSummary(tenantId || undefined);

  return NextResponse.json({
    tenantId: summary.tenantId,
    summary,
  });
}
