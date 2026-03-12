import { Badge } from "@nebutra/ui/primitives";
import { Bell } from "lucide-react";

export function BadgeNotificationDemo() {
  return (
    <div className="relative">
      <Bell className="size-5" />
      <Badge
        variant="destructive"
        className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full p-0 text-[10px]"
      >
        3
      </Badge>
    </div>
  );
}
