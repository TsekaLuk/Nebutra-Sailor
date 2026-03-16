/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Badge } from "@nebutra/ui/primitives";

export function BadgeSizesDemo() {
  return (
    <div className="flex items-end gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  );
}
