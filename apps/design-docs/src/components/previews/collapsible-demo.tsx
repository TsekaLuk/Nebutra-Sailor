"use client";

import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "@nebutra/ui/primitives";
import { ChevronsUpDown } from "lucide-react";

export function CollapsibleDemo() {
    return (
        <Collapsible className="w-80 space-y-2">
            <div className="flex items-center justify-between px-4">
                <h4 className="text-sm font-semibold">Team Members</h4>
                <CollapsibleTrigger className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)] text-sm font-medium transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                    <ChevronsUpDown className="h-4 w-4" />
                </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 py-2 text-sm">Alice Johnson</div>
            <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-2 text-sm">Bob Smith</div>
                <div className="rounded-md border px-4 py-2 text-sm">Carol White</div>
            </CollapsibleContent>
        </Collapsible>
    );
}
