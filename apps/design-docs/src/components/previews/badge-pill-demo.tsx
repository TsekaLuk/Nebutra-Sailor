import { Badge } from "@nebutra/ui/primitives";
import Link from "next/link";

export default function BadgePillDemo() {
  return (
    <Badge asChild variant="secondary" className="rounded-full px-3 py-1 hover:bg-secondary/80 transition-colors">
      <Link href="/new-feature">
        New Updates Available →
      </Link>
    </Badge>
  );
}
