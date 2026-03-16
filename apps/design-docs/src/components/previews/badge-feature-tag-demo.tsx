/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Badge } from "@nebutra/ui/primitives";
import { Sparkles } from "lucide-react";

export function BadgeFeatureTagDemo() {
  return (
    <div className="flex items-center gap-2">
      <h3 className="text-lg font-medium">AI Generation</h3>
      <Badge variant="purple-subtle" icon={<Sparkles className="text-purple-500" />}>
        Beta
      </Badge>
    </div>
  );
}
