"use client";

import * as React from "react";
import { cn } from "../utils/cn";

// ─── Overlay layers ───────────────────────────────────────────────────────────

/** Left-to-right gradient simulating the book spine shadow */
const SPINE_GRADIENT =
  "linear-gradient(90deg, rgba(0,0,0,0.26) 0%, rgba(0,0,0,0.09) 12%, rgba(0,0,0,0.02) 22%, transparent 30%)";

/** Subtle top-left gloss highlight */
const GLOSS_GRADIENT =
  "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 55%)";

/** SVG fractal noise — used for the textured variant */
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.14'/%3E%3C/svg%3E")`;

// ─── Types ────────────────────────────────────────────────────────────────────

/** Responsive width — static number or `{ sm, md }` breakpoints */
export type BookWidth = number | { sm?: number; md?: number };

export interface BookProps {
  /** Book cover title rendered at the bottom of the cover */
  title: string;
  /**
   * Visual variant:
   * - `"default"` — 3-D book with perspective + spine shadow
   * - `"simple"` — flat cover, no spine effect
   */
  variant?: "default" | "simple";
  /** Cover background color (any CSS color string). Default: amber */
  color?: string;
  /** Title text color. Default: `"#000000"` */
  textColor?: string;
  /** JSX illustration rendered in the upper ~55 % of the cover */
  illustration?: React.ReactNode;
  /**
   * Cover width in px, or a responsive object `{ sm, md }`.
   * Height is computed automatically at a 1 : 1.45 aspect ratio.
   */
  width?: BookWidth;
  /** Apply a grain / paper texture effect to the cover */
  textured?: boolean;
  /**
   * Brand mark rendered bottom-right over the cover.
   * Pass an icon or logomark element.
   */
  logo?: React.ReactNode;
  className?: string;
}

// ─── Defaults ────────────────────────────────────────────────────────────────

const DEFAULT_COLOR = "#f59e0b"; // amber-400
const DEFAULT_WIDTH = 160;
const ASPECT_RATIO = 1.45; // height = width × ASPECT_RATIO

// ─── Book ─────────────────────────────────────────────────────────────────────

/**
 * Book — a 3-D book cover component.
 *
 * Supports two variants (3-D spine / flat), custom cover color, illustration
 * slot, responsive width, grain texture, and a logo slot.
 *
 * @example Default
 * ```tsx
 * <Book title="The user experience of the Frontend Cloud" />
 * ```
 *
 * @example Custom color + simple variant
 * ```tsx
 * <Book
 *   title="Design Engineering at Vercel"
 *   color="#7DC1C1"
 *   textColor="white"
 *   variant="simple"
 * />
 * ```
 *
 * @example Responsive width
 * ```tsx
 * <Book title="AI-Powered Search" width={{ sm: 130, md: 196 }} />
 * ```
 *
 * @example With illustration
 * ```tsx
 * <Book
 *   title="Intro to TypeScript"
 *   color="#0033FE"
 *   textColor="white"
 *   illustration={<img src="/cover-art.png" className="w-full h-full object-cover" />}
 * />
 * ```
 */
export function Book({
  title,
  variant = "default",
  color = DEFAULT_COLOR,
  textColor = "#000000",
  illustration,
  width = DEFAULT_WIDTH,
  textured = false,
  logo,
  className,
}: BookProps) {
  const isDefault = variant === "default";

  // ── Width resolution ──────────────────────────────────────────────────────
  const wLg = typeof width === "number" ? width : (width.md ?? DEFAULT_WIDTH);
  const wSm = typeof width === "object" && width.sm != null ? width.sm : wLg;
  const isResponsive =
    typeof width === "object" &&
    width.sm !== undefined &&
    width.md !== undefined;

  const widthCSS = isResponsive
    ? `clamp(${wSm}px, 45vw, ${wLg}px)`
    : `${wLg}px`;
  const heightCSS = isResponsive
    ? `clamp(${Math.round(wSm * ASPECT_RATIO)}px, calc(45vw * ${ASPECT_RATIO}), ${Math.round(wLg * ASPECT_RATIO)}px)`
    : `${Math.round(wLg * ASPECT_RATIO)}px`;

  // Title font scales with book width
  const fontSize = Math.max(10, Math.round(wLg * 0.073));

  return (
    <div
      className={cn("relative inline-block select-none", className)}
      style={{ width: widthCSS, height: heightCSS }}
    >
      {/* ── Book body ──────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          borderRadius: "3px 4px 4px 3px",
          background: color,
          ...(isDefault
            ? {
                transform: "perspective(700px) rotateY(-10deg)",
                transformOrigin: "right center",
                boxShadow:
                  "10px 20px 48px rgba(0,0,0,0.22), 5px 8px 16px rgba(0,0,0,0.12)",
              }
            : {
                boxShadow: "2px 6px 18px rgba(0,0,0,0.1)",
              }),
        }}
      >
        {/* Spine shadow (default only) */}
        {isDefault && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20"
            style={{ background: SPINE_GRADIENT }}
          />
        )}

        {/* Gloss highlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20"
          style={{ background: GLOSS_GRADIENT }}
        />

        {/* Grain texture */}
        {textured && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 mix-blend-overlay opacity-75"
            style={{
              backgroundImage: NOISE_SVG,
              backgroundSize: "200px 200px",
              backgroundRepeat: "repeat",
            }}
          />
        )}

        {/* Illustration (upper 55 %) */}
        {illustration && (
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 overflow-hidden"
            style={{ height: "55%" }}
          >
            {illustration}
          </div>
        )}

        {/* Title */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-4">
          <p
            className="font-semibold leading-snug"
            style={{ color: textColor, fontSize }}
          >
            {title}
          </p>
        </div>

        {/* Logo mark (bottom-right) */}
        {logo && (
          <div
            className="absolute bottom-3 right-3 z-10"
            style={{ color: textColor, opacity: 0.65 }}
          >
            {logo}
          </div>
        )}
      </div>
    </div>
  );
}
