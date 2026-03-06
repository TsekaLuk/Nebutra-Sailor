"use client";

import * as React from "react";
import { cn } from "../utils/cn";
import { InfiniteSlider } from "../primitives/infinite-slider";

export interface Logo {
  /** Logo image source URL */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Optional width */
  width?: number;
  /** Optional height */
  height?: number;
}

export interface LogoCloudSliderProps extends React.ComponentProps<"div"> {
  /** Array of logos to display */
  logos: Logo[];
  /** Gap between logos in pixels */
  gap?: number;
  /** Scroll speed in pixels per second */
  speed?: number;
  /** Scroll speed on hover */
  speedOnHover?: number;
  /** Reverse scroll direction */
  reverse?: boolean;
}

/**
 * LogoCloud - Infinite scrolling logo carousel
 *
 * Displays partner/customer logos in a continuously scrolling carousel.
 * Uses a gradient mask for smooth fade edges.
 *
 * @example
 * ```tsx
 * <LogoCloud
 *   logos={[
 *     { src: "/logos/nvidia.svg", alt: "Nvidia" },
 *     { src: "/logos/github.svg", alt: "GitHub" },
 *   ]}
 *   speed={80}
 *   speedOnHover={25}
 * />
 * ```
 */
export function LogoCloudSlider({
  className,
  logos,
  gap = 42,
  speed = 80,
  speedOnHover = 25,
  reverse = false,
  ...props
}: LogoCloudSliderProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
      role="region"
      aria-label="Partner logos"
    >
      <InfiniteSlider
        gap={gap}
        reverse={reverse}
        speed={speed}
        speedOnHover={speedOnHover}
      >
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-4 select-none dark:brightness-0 dark:invert md:h-5"
            height={logo.height || "auto"}
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width={logo.width || "auto"}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
