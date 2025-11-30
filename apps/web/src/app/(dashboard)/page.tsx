const hasClerkKey = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default async function DashboardPage() {
  let userName = "User";
  let UserButtonComponent = null;

  if (hasClerkKey) {
    // Dynamic import only when Clerk is configured
    const { currentUser } = await import("@clerk/nextjs/server");
    const { UserButton } = await import("@clerk/nextjs");
    const user = await currentUser();
    userName = user?.firstName || "User";
    UserButtonComponent = <UserButton afterSignOutUrl="/sign-in" />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
          {UserButtonComponent}
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="text-xl font-semibold text-gray-900">
            Welcome, {userName}!
          </h2>
          <p className="mt-2 text-gray-600">
            Your organization dashboard is ready.
          </p>
          {!hasClerkKey && (
            <p className="mt-4 text-sm text-amber-600">
              ⚠️ Clerk authentication is not configured. Set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY to enable auth.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
