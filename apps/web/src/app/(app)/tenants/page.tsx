import { Suspense } from "react";
import { AnimateIn } from "@nebutra/custom-ui/primitives";
import { Card, LoadingState, PageHeader } from "@nebutra/design-system/components";
import { getGrowthSummary } from "@/lib/warehouse/gold";

async function TenantsContent() {
  const tenantId = process.env.DEFAULT_DASHBOARD_TENANT_ID || "demo_org";
  const summary = await getGrowthSummary(tenantId);

  return (
    <>
      <AnimateIn preset="fadeUp">
        <PageHeader title="Tenants" description="Workspace health and tenant-level metrics." />
      </AnimateIn>

      <AnimateIn preset="fadeUp">
        <Card className="overflow-hidden p-0">
          <div className="space-y-3 p-4 md:hidden">
            <div className="rounded-lg border border-[color:var(--neutral-7)] bg-[color:var(--neutral-2)] p-3 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[color:var(--neutral-12)] dark:text-white">
                    {summary.tenantId}
                  </p>
                  <p className="mt-1 text-xs text-[color:var(--neutral-10)] dark:text-white/60">
                    Snapshot: {summary.day ?? "N/A"}
                  </p>
                </div>
                <span className="inline-flex rounded-full bg-[color:var(--cyan-3)] px-2.5 py-1 text-xs font-medium text-[color:var(--cyan-11)] dark:bg-[color:var(--cyan-9)]/20 dark:text-[color:var(--cyan-9)]">
                  Healthy
                </span>
              </div>
              <dl className="mt-3 grid grid-cols-1 gap-x-3 gap-y-2 text-xs min-[420px]:grid-cols-2">
                <div>
                  <dt className="text-[color:var(--neutral-10)] dark:text-white/60">Events</dt>
                  <dd className="font-medium text-[color:var(--neutral-12)] dark:text-white">
                    {summary.totalEvents.toLocaleString()}
                  </dd>
                </div>
                <div>
                  <dt className="text-[color:var(--neutral-10)] dark:text-white/60">Active Users</dt>
                  <dd className="font-medium text-[color:var(--neutral-12)] dark:text-white">
                    {summary.activeUsers.toLocaleString()}
                  </dd>
                </div>
                <div className="min-[420px]:col-span-2">
                  <dt className="text-[color:var(--neutral-10)] dark:text-white/60">Revenue</dt>
                  <dd className="font-medium text-[color:var(--neutral-12)] dark:text-white">
                    ${summary.revenue.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="grid grid-cols-12 border-b border-[color:var(--neutral-7)] bg-[color:var(--neutral-2)] px-4 py-3 text-xs font-medium uppercase tracking-wide text-[color:var(--neutral-11)] dark:border-white/10 dark:bg-white/5 dark:text-white/60">
              <div className="col-span-4">Tenant</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Events</div>
              <div className="col-span-2">Active Users</div>
              <div className="col-span-2">Revenue</div>
            </div>
            <div className="grid grid-cols-12 items-center px-4 py-4 text-sm">
              <div className="col-span-4">
                <p className="font-medium text-[color:var(--neutral-12)] dark:text-white">{summary.tenantId}</p>
                <p className="text-xs text-[color:var(--neutral-10)] dark:text-white/60">
                  Snapshot: {summary.day ?? "N/A"}
                </p>
              </div>
              <div className="col-span-2">
                <span className="inline-flex rounded-full bg-[color:var(--cyan-3)] px-2.5 py-1 text-xs font-medium text-[color:var(--cyan-11)] dark:bg-[color:var(--cyan-9)]/20 dark:text-[color:var(--cyan-9)]">
                  Healthy
                </span>
              </div>
              <div className="col-span-2 text-[color:var(--neutral-12)] dark:text-white">
                {summary.totalEvents.toLocaleString()}
              </div>
              <div className="col-span-2 text-[color:var(--neutral-12)] dark:text-white">
                {summary.activeUsers.toLocaleString()}
              </div>
              <div className="col-span-2 text-[color:var(--neutral-12)] dark:text-white">
                ${summary.revenue.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </div>
            </div>
          </div>
        </Card>
      </AnimateIn>
    </>
  );
}

export default function TenantsPage() {
  return (
    <section className="mx-auto w-full max-w-7xl">
      <Suspense fallback={<LoadingState message="Loading tenant health..." />}>
        <TenantsContent />
      </Suspense>
    </section>
  );
}
