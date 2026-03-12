"use client";

import { Badge } from "@nebutra/ui/primitives";

export function BadgeStatusDotDemo() {
  return (
    <div className="flex gap-3">
      <Badge variant="green-subtle" dot>Online</Badge>
      <Badge variant="amber-subtle" dot>Degraded</Badge>
      <Badge variant="red-subtle" dot>Outage</Badge>
      <Badge variant="gray-subtle" dot>Pending</Badge>
    </div>
  );
}
