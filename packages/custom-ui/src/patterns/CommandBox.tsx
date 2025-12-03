"use client";

import * as React from "react";
import { cn } from "../utils/cn";

/* ─────────────────────────────────────────────────────────────────────────────
 * CommandBox Component
 *
 * A copyable command input with click-to-copy functionality.
 * Used for installation commands, code snippets, etc.
 *
 * Usage:
 * <CommandBox command="npm install @nebutra/ui" />
 * <CommandBox command="pnpm add @nebutra/ui" prefix="$" />
 * ───────────────────────────────────────────────────────────────────────────── */

export interface CommandBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  command: string;
  prefix?: string;
  showCopyButton?: boolean;
  variant?: "default" | "minimal" | "pill";
  onCopy?: () => void;
}

export const CommandBox = React.forwardRef<HTMLDivElement, CommandBoxProps>(
  (
    {
      className,
      command,
      prefix = "$",
      showCopyButton = true,
      variant = "default",
      onCopy,
      ...props
    },
    ref,
  ) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = React.useCallback(async () => {
      try {
        await navigator.clipboard.writeText(command);
        setCopied(true);
        onCopy?.();
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }, [command, onCopy]);

    const variantStyles = {
      default: "bg-zinc-900 border border-zinc-700 rounded-lg",
      minimal: "bg-zinc-950/50 border border-zinc-800 rounded-md",
      pill: "bg-zinc-900 border border-zinc-700 rounded-full",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex items-center gap-3 px-4 py-2.5 font-mono text-sm cursor-pointer transition-all hover:bg-zinc-800/50",
          variantStyles[variant],
          className,
        )}
        onClick={handleCopy}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleCopy();
          }
        }}
        aria-label={`Copy command: ${command}`}
        {...props}
      >
        {/* Prefix */}
        <span className="text-emerald-400 shrink-0 select-none">{prefix}</span>

        {/* Command text */}
        <span className="flex-1 text-zinc-200 truncate">{command}</span>

        {/* Copy indicator */}
        {showCopyButton && (
          <span
            className={cn(
              "shrink-0 text-xs transition-colors",
              copied
                ? "text-emerald-400"
                : "text-zinc-500 group-hover:text-zinc-300",
            )}
          >
            {copied ? (
              <CopiedIcon className="w-4 h-4" />
            ) : (
              <CopyIcon className="w-4 h-4" />
            )}
          </span>
        )}

        {/* Copy tooltip */}
        <span
          className={cn(
            "absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-zinc-700 text-zinc-200 opacity-0 transition-opacity pointer-events-none",
            "group-hover:opacity-100",
            copied && "opacity-100",
          )}
        >
          {copied ? "Copied!" : "Click to copy"}
        </span>
      </div>
    );
  },
);
CommandBox.displayName = "CommandBox";

/* ─────────────────────────────────────────────────────────────────────────── */

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CopiedIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
