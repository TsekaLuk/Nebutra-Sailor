import { getAuth, getUser } from "@/lib/auth";

const hasClerkKey = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default async function DashboardPage() {
  let userName = "User";
  let orgName = "";

  if (hasClerkKey) {
    const [authState, user] = await Promise.all([getAuth(), getUser()]);
    userName = user?.firstName || "User";
    orgName = (authState.sessionClaims?.org_name as string) || "";
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
          {orgName && (
            <p className="mt-1 text-sm text-gray-500">{orgName}</p>
          )}
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

          {/* Quick Stats */}
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-sm font-medium text-gray-500">API Calls</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
            <p className="mt-1 text-sm text-gray-500">This month</p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-sm font-medium text-gray-500">AI Tokens</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
            <p className="mt-1 text-sm text-gray-500">This month</p>
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
