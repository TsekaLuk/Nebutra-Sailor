"use client";

import { Progress } from "@nebutra/ui/primitives";

export function ProgressDemo() {
  return (
    <div className="space-y-8 w-full">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Downloading...</span>
          <span>33%</span>
        </div>
        <Progress value={33} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Processing...</span>
          <span>66%</span>
        </div>
        <Progress value={66} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Completed</span>
          <span>100%</span>
        </div>
        <Progress value={100} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Connecting...</span>
          <span>Indeterminate</span>
        </div>
        <Progress value={undefined} />
      </div>
    </div>
  );
}
