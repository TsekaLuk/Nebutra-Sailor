import { getAuth, getUser } from "@/lib/auth";
import { getGrowthSummary } from "@/lib/warehouse/gold";

const hasClerkKey = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default async function DashboardPage() {
  let userName = "User";
  let orgName = "";
  let tenantId = process.env.DEFAULT_DASHBOARD_TENANT_ID || "demo_org";

  if (hasClerkKey) {
    const [authState, user] = await Promise.all([getAuth(), getUser()]);
    userName = user?.firstName || "User";
    orgName = (authState.sessionClaims?.org_name as string) || "";
    tenantId = authState.orgId || tenantId;
  }

  const summary = await getGrowthSummary(tenantId);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
          {orgName && <p className="mt-1 text-sm text-gray-500">{orgName}</p>}
          <p className="mt-1 text-sm text-gray-500">
            Gold snapshot: {summary.day || "No data yet"} · tenant{" "}
            {summary.tenantId}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Welcome Card */}
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-lg font-semibold text-gray-900">
              Welcome back, {userName}!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Your dashboard is ready. Start exploring your workspace.
            </p>
          </div>

          {/* Gold Metrics */}
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-sm font-medium text-gray-500">Total Events</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {summary.totalEvents.toLocaleString()}
            </p>
            <p className="mt-1 text-sm text-gray-500">Latest day</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-sm font-medium text-gray-500">Active Users</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {summary.activeUsers.toLocaleString()}
            </p>
            <p className="mt-1 text-sm text-gray-500">Latest day</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-sm font-medium text-gray-500">Signups</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {summary.signups.toLocaleString()}
            </p>
            <p className="mt-1 text-sm text-gray-500">Latest day</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-sm font-medium text-gray-500">Activations</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {summary.activations.toLocaleString()}
            </p>
            <p className="mt-1 text-sm text-gray-500">Latest day</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-sm font-medium text-gray-500">Conversions</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              {summary.conversions.toLocaleString()}
            </p>
            <p className="mt-1 text-sm text-gray-500">Latest day</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">
              $
              {summary.revenue.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </p>
            <p className="mt-1 text-sm text-gray-500">Latest day (USD)</p>
          </div>
        </div>

        {!hasClerkKey && (
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm text-amber-800">
              ⚠️ Clerk authentication is not configured. Set
              NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY to enable
              auth.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
