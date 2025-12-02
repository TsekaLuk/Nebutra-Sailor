"use client";

import * as React from "react";
import { cn } from "../utils/cn";

type TColorProp = string | string[];

export interface ShineBorderProps {
  /** Border radius in pixels */
  borderRadius?: number;
  /** Border width in pixels */
  borderWidth?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Border color - single color or array of colors for gradient */
  color?: TColorProp;
  /** Additional className */
  className?: string;
  /** Content to render inside the border */
  children: React.ReactNode;
}

/**
 * ShineBorder - Animated background border effect component
 *
 * Creates a shining/glowing border animation around content.
 * Supports single color or gradient with multiple colors.
 *
 * @example
 * ```tsx
 * <ShineBorder color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
 *   <span>Content</span>
 * </ShineBorder>
 * ```
 *
 * Note: Requires Tailwind animation config:
 * ```js
 * // tailwind.config.js
 * animation: {
 *   shine: "shine var(--duration) infinite linear",
 * },
 * keyframes: {
 *   shine: {
 *     "0%": { "background-position": "0% 0%" },
 *     "50%": { "background-position": "100% 100%" },
 *     to: { "background-position": "0% 0%" },
 *   },
 * },
 * ```
 */
export function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#000000",
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } as React.CSSProperties
      }
      className={cn(
        "relative min-h-[60px] w-fit min-w-[300px] place-items-center rounded-[--border-radius] bg-background p-3 text-foreground",
        className
      )}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--border-radius": `${borderRadius}px`,
            "--duration": `${duration}s`,
            "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            "--background-radial-gradient": `radial-gradient(transparent,transparent, ${Array.isArray(color) ? color.join(",") : color},transparent,transparent)`,
          } as React.CSSProperties
        }
        className="before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[''] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
