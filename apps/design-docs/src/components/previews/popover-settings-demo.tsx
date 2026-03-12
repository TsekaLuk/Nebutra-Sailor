"use client";

import { Settings } from "lucide-react"
import { PopoverTrigger, Label, PopoverContent, Popover, Button } from "@nebutra/ui/primitives"
import { Switch } from "@heroui/switch"

export function PopoverSettingsDemo() {
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
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="marketing">Marketing emails</Label>
            <Switch />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
