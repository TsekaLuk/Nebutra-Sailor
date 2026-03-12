"use client";

import * as React from "react";
import { TooltipTrigger, Tooltip, TooltipProvider, TooltipContent, Button } from "@nebutra/ui/primitives";

export function Tooltip5Demo() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">悬停 (Hover)</Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={8}>
                    <p>显示在右侧的提示 (Tooltip on the right)</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
