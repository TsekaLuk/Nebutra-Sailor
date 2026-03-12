"use client";

import * as React from "react";
import { TooltipTrigger, Tooltip, TooltipProvider, TooltipContent, Button } from "@nebutra/ui/primitives";
import { Settings } from "lucide-react";

export function Tooltip4Demo() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Settings className="h-4 w-4" />
                        <span className="sr-only">设置 (Settings)</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>设置 (Settings)</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
