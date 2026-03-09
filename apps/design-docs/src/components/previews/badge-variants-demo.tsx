import { Badge } from "@nebutra/ui/primitives";

export default function BadgeVariantsDemo() {
  return (
    <div className="flex gap-4 flex-wrap">
      <Badge variant="default">default</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="outline">outline</Badge>
      {/* Supports 22 color variants... */}
    </div>
  );
}
