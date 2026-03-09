"use client";

import { Settings } from "lucide-react"
import { Switch, Label } from "@nebutra/ui/primitives"

<Popover>
  <PopoverTrigger asChild>
    <Button variant="ghost" size="icon">
      <Settings className="h-4 w-4" />
    </Button>
  </PopoverTrigger>
  <PopoverContent side="right" align="start" className="w-64">
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label htmlFor="notifications">Notifications</Label>
        <Switch id="notifications" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="marketing">Marketing emails</Label>
        <Switch id="marketing" />
      </div>
    </div>
  </PopoverContent>
</Popover>

export function Popover2Demo() {
  return (
    <Popover>
    <PopoverTrigger asChild>
      <Button variant="ghost" size="icon">
        <Settings className="h-4 w-4" />
      </Button>
    </PopoverTrigger>
    <PopoverContent side="right" align="start" className="w-64">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="notifications">Notifications</Label>
          <Switch id="notifications" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="marketing">Marketing emails</Label>
          <Switch id="marketing" />
        </div>
      </div>
    </PopoverContent>
  </Popover>
  );
}
