"use client";

import { useState } from "react";
import type { ReactNode } from "react";

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
    <div className="my-6 rounded-xl border bg-card">
      {/* Preview area — not-prose prevents Tailwind Typography from adding margins to inner <img> elements */}
      <div
        className={`not-prose flex flex-wrap items-center justify-center p-8 ${className ?? ""}`}
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
