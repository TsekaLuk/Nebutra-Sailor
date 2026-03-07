"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@nebutra/ui/utils";

interface ComponentPreviewProps {
  children: ReactNode;
  code?: string;
  className?: string;
}

export function ComponentPreview({
  children,
  code,
  className,
}: ComponentPreviewProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[var(--neutral-6)] bg-card shadow-sm">
      {/* Preview area with subtle dot grid background */}
      <div
        className={cn(
          "not-prose relative flex min-h-[350px] w-full flex-wrap items-center justify-center p-10",
          "bg-[radial-gradient(var(--neutral-6)_1px,transparent_1px)] [background-size:16px_16px]",
          className
        )}
      >
        {children}
      </div>

      {/* Code toggle */}
      {code && (
        <div className="border-t">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center gap-2 px-4 py-2.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg
              className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-90" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            {open ? "Hide code" : "Show code"}
          </button>
          {open && (
            <pre className="overflow-x-auto border-t bg-muted/50 px-4 py-4 text-sm">
              <code>{code}</code>
            </pre>
          )}
        </div>
      )}
    </div>
  );
}
