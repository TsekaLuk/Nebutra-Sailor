/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

"use client";

import { Badge } from "@nebutra/ui/primitives";
import { LogoSlackColor } from "@nebutra/icons";
import Link from "next/link";

export function BadgePillMatrixDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <div className="flex flex-row items-center justify-center gap-2 flex-initial">
        <Badge asChild size="sm" variant="pill">
          <Link href="#badge-pill">Label</Link>
        </Badge>
        <Badge asChild size="md" variant="pill">
          <Link href="#badge-pill">Label</Link>
        </Badge>
        <Badge asChild size="lg" variant="pill">
          <Link href="#badge-pill">Label</Link>
        </Badge>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 flex-initial">
        <Badge
          asChild
          icon={<LogoSlackColor />}
          size="sm"
          variant="pill"
        >
          <Link href="#badge-pill">Label</Link>
        </Badge>
        <Badge
          asChild
          icon={<LogoSlackColor />}
          size="md"
          variant="pill"
        >
          <Link href="#badge-pill">Label</Link>
        </Badge>
        <Badge
          asChild
          icon={<LogoSlackColor />}
          size="lg"
          variant="pill"
        >
          <Link href="#badge-pill">Label</Link>
        </Badge>
      </div>
    </div>
  );
}