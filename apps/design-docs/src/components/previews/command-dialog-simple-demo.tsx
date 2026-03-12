"use client";

import * as React from "react";
import { CommandInput, CommandItem, CommandDialog, CommandList, CommandGroup, CommandEmpty } from "@nebutra/ui/primitives";

export function CommandDialogSimpleDemo() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem>Dashboard</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
