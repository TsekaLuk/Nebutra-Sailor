"use client";

import * as React from "react";
import { TooltipTrigger, Tooltip, TooltipProvider, TooltipContent } from "@nebutra/ui/primitives";

export function Tooltip3Demo() {
  return (
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="cursor-help font-medium border-b border-dashed border-muted-foreground pb-px">悬停获取信息 (Hover for info)</span>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p className="font-medium mb-1">小提示 (Pro tip)</p>
        <p className="text-xs text-muted-foreground">
          您可以在项目首选项面板中配置高级设置。 (You can configure advanced settings in the project preferences panel.)
        </p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  );
}
