"use client";

import { useOrganization } from "@clerk/nextjs";
import { LoadingState, ErrorState } from "@nebutra/ui/layout";
import { PermissionGate } from "@/components/PermissionGate";

interface Props {
  orgId: string;
}

export function TeamMemberList({ orgId }: Props) {
  const { memberships, isLoaded } = useOrganization({
    memberships: { pageSize: 50, keepPreviousData: true },
  });

  if (!isLoaded) return <LoadingState />;
  if (!memberships) return <ErrorState message="Failed to load members." />;

  const members = memberships.data ?? [];

  return (
    <ul className="divide-y divide-[var(--neutral-6)]">
      {members.map((m) => (
        <li key={m.id} className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            {m.publicUserData?.imageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={m.publicUserData.imageUrl}
                alt=""
                className="h-8 w-8 rounded-full object-cover"
              />
            )}
            <div>
              <p className="text-sm font-medium text-[var(--neutral-12)]">
                {m.publicUserData?.firstName} {m.publicUserData?.lastName}
              </p>
              <p className="text-xs text-[var(--neutral-11)]">
                {m.publicUserData?.identifier}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[var(--neutral-3)] px-2 py-0.5 text-xs font-medium capitalize text-[var(--neutral-11)]">
              {m.role.replace("org:", "")}
            </span>

            <PermissionGate require="team:remove">
              <button
                type="button"
                onClick={() => m.destroy()}
                className="text-xs text-red-500 hover:text-red-700 focus:outline-none"
                aria-label={`Remove ${m.publicUserData?.firstName}`}
              >
                Remove
              </button>
            </PermissionGate>
          </div>
        </li>
      ))}

      {members.length === 0 && (
        <li className="py-6 text-center text-sm text-[var(--neutral-11)]">
          No members yet.
        </li>
      )}
    </ul>
  );
}
