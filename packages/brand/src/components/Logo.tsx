"use client";

import * as React from "react";

export type LogoVariant =
  | "color"
  | "inverse"
  | "mono"
  | "en"
  | "zh"
  | "zh-en"
  | "horizontal-en"
  | "horizontal-zh"
  | "vertical-en"
  | "vertical-zh";

export interface LogoProps {
  /**
   * Logo variant
   * @default "en" (Nebutra with English wordmark)
   */
  variant?: LogoVariant;

  /**
   * Logo size (width in pixels)
   * @default 120
   */
  size?: number;

  /**
   * Custom className
   */
  className?: string;

  /**
   * Invert colors for dark backgrounds.
   * When true, black becomes white (useful for dark mode).
   *
   * Note: For pure white logomark, use variant="inverse" instead.
   */
  inverted?: boolean;
}

/**
 * Map variant to SVG file path (relative to /brand in public folder)
 */
const LOGO_FILES: Record<LogoVariant, string> = {
  color: "/brand/logo-color.svg",
  inverse: "/brand/logo-inverse.svg",
  mono: "/brand/logo-mono.svg",
  en: "/brand/logo-en.svg",
  zh: "/brand/logo-zh.svg",
  "zh-en": "/brand/logo-zh-en.svg",
  "horizontal-en": "/brand/logo-horizontal-en.svg",
  "horizontal-zh": "/brand/logo-horizontal-zh.svg",
  "vertical-en": "/brand/logo-vertical-en.svg",
  "vertical-zh": "/brand/logo-vertical-zh.svg",
};

/**
 * Aspect ratios for different logo variants
 * width:height ratio (e.g. 5.25 means width is 5.25x height)
 */
const ASPECT_RATIOS: Record<LogoVariant, number> = {
  color: 1.07, // 535.71 x 500 ≈ 1.07
  inverse: 1.07, // 535.71 x 500 ≈ 1.07
  mono: 1.07, // Same as color/inverse
  en: 5.25, // 544.21 x 103.74 ≈ 5.25 (horizontal text)
  zh: 3.5, // Estimated for Chinese wordmark
  "zh-en": 4.0, // Estimated for bilingual
  "horizontal-en": 5.25, // Similar to "en"
  "horizontal-zh": 4.5, // Estimated
  "vertical-en": 0.8, // Taller than wide
  "vertical-zh": 0.8, // Taller than wide
};

/**
 * Nebutra Logo Component
 *
 * Renders the official Nebutra brand logo from SVG assets.
 * Assets are synced to apps via `pnpm brand:sync`.
 *
 * @example
 * ```tsx
 * // Logomark only (square icon)
 * <Logo variant="inverse" size={40} />
 *
 * // Full logo with English wordmark
 * <Logo variant="en" size={150} />
 *
 * // Chinese wordmark
 * <Logo variant="zh" size={120} />
 * ```
 */
export function Logo({
  variant = "en",
  size = 120,
  className,
  inverted = false,
}: LogoProps) {
  const aspectRatio = ASPECT_RATIOS[variant];
  const height = Math.round(size / aspectRatio);
  const src = LOGO_FILES[variant];

  // For dark backgrounds, invert black to white
  const filterStyle = inverted ? { filter: "brightness(0) invert(1)" } : {};

  return (
    <img
      src={src}
      alt="Nebutra"
      width={size}
      height={height}
      className={className}
      style={{ width: size, height, ...filterStyle }}
    />
  );
}

/**
 * Logomark only (the abstract icon without text)
 *
 * This uses the "color" or "inverse" variant which is just the icon.
 *
 * @example
 * ```tsx
 * <Logomark variant="inverse" size={32} />
 * ```
 */
export function Logomark({
  size = 32,
  className,
  variant = "color",
  inverted = false,
}: {
  size?: number;
  className?: string;
  variant?: "color" | "inverse" | "mono";
  inverted?: boolean;
}) {
  const src = LOGO_FILES[variant];

  // For dark backgrounds, invert black to white (unless using "inverse" variant which is already white)
  const filterStyle =
    inverted && variant !== "inverse"
      ? { filter: "brightness(0) invert(1)" }
      : {};

  return (
    <img
      src={src}
      alt="Nebutra"
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size, ...filterStyle }}
    />
  );
}

/**
 * Wordmark only (text "Nebutra" without the icon)
 *
 * Uses the "en" variant which has the full wordmark.
 * For icon + text, use Logo with variant="en".
 */
export function Wordmark({
  size = 100,
  className,
  variant = "en",
  inverted = false,
}: {
  size?: number;
  className?: string;
  variant?: "en" | "zh" | "zh-en";
  inverted?: boolean;
}) {
  const aspectRatio = ASPECT_RATIOS[variant];
  const height = Math.round(size / aspectRatio);
  const src = LOGO_FILES[variant];

  const filterStyle = inverted ? { filter: "brightness(0) invert(1)" } : {};

  return (
    <img
      src={src}
      alt="Nebutra"
      width={size}
      height={height}
      className={className}
      style={{ width: size, height, ...filterStyle }}
    />
  );
}

export default Logo;
