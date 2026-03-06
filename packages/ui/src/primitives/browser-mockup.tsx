"use client";

import * as React from "react";
import { useState, useCallback, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, RotateCw, Copy, Check } from "lucide-react";
import { cn } from "../utils/cn";

const COPIED_FEEDBACK_MS = 1500;

// =============================================================================
// Types
// =============================================================================

export interface BrowserProps extends React.HTMLAttributes<HTMLDivElement> {
  /** URL displayed in the address bar */
  address?: string;
  /** Convenience prop: render an <img> when no children are provided */
  imageSrc?: string;
  /** Alt text for the image (only used with imageSrc) */
  imageAlt?: string;
  /** Arbitrary content rendered in the browser viewport */
  children?: React.ReactNode;
}

/** @deprecated Use BrowserProps instead */
export type BrowserMockupProps = BrowserProps;

// =============================================================================
// Component
// =============================================================================

/**
 * Browser - Geist-style browser window frame
 *
 * A decorative browser chrome for showcasing websites, screenshots, demos, or
 * arbitrary content. Features traffic-light buttons, navigation icons,
 * an address bar with copy-to-clipboard, and a flexible content area.
 *
 * @example Children mode (arbitrary JSX)
 * ```tsx
 * <Browser address="vercel.com">
 *   <div className="p-6">Hello World</div>
 * </Browser>
 * ```
 *
 * @example Image convenience mode
 * ```tsx
 * <Browser address="example.com" imageSrc="/screenshot.png" />
 * ```
 */
export function Browser({
  address,
  imageSrc,
  imageAlt = "Preview",
  children,
  className,
  ...props
}: BrowserProps) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = useCallback(async () => {
    if (!address) return;
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), COPIED_FEEDBACK_MS);
    } catch {
      // Clipboard API may be blocked in some contexts
    }
  }, [address]);

  return (
    <div
      className={cn(
        "rounded-[var(--radius-xl)] border border-[var(--neutral-6)] bg-[var(--neutral-1)] shadow-sm overflow-hidden",
        className,
      )}
      {...props}
    >
      {/* ── Toolbar ────────────────────────────────────────────────── */}
      <div className="flex items-center gap-3 border-b border-[var(--neutral-6)] bg-[var(--neutral-3)] px-4 py-2.5">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-3 rounded-full bg-[#FF5F57]" />
          <span className="size-3 rounded-full bg-[#FEBC2E]" />
          <span className="size-3 rounded-full bg-[#28C840]" />
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center gap-1" aria-hidden="true">
          <span className="flex size-6 items-center justify-center rounded text-[var(--neutral-9)]">
            <ArrowLeft className="size-3.5" />
          </span>
          <span className="flex size-6 items-center justify-center rounded text-[var(--neutral-9)]">
            <ArrowRight className="size-3.5" />
          </span>
          <span className="flex size-6 items-center justify-center rounded text-[var(--neutral-9)]">
            <RotateCw className="size-3.5" />
          </span>
        </div>

        {/* Address bar */}
        <div className="flex flex-1 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--neutral-1)]/80 px-3 py-1">
          {address ? (
            <>
              <span className="flex-1 truncate text-center text-xs text-[var(--neutral-9)]">
                {address}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="flex-shrink-0 rounded p-0.5 text-[var(--neutral-9)] transition-colors hover:text-[var(--neutral-10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={copied ? "Copied" : "Copy address"}
              >
                {copied ? (
                  <Check className="size-3" />
                ) : (
                  <Copy className="size-3" />
                )}
              </button>
            </>
          ) : (
            <span className="h-3" />
          )}
        </div>
      </div>

      {/* ── Content area ───────────────────────────────────────────── */}
      <div className="bg-[var(--neutral-1)]">
        {children ??
          (imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              decoding="async"
              className="block w-full"
            />
          ) : (
            <div className="flex aspect-video items-center justify-center bg-[var(--neutral-2)] text-sm text-[var(--neutral-9)]">
              No content
            </div>
          ))}
      </div>
    </div>
  );
}

Browser.displayName = "Browser";

/** @deprecated Use Browser instead */
export const BrowserMockup = Browser;
