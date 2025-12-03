"use client";

import React, { ComponentPropsWithoutRef, useRef } from "react";
import { cn } from "../utils/cn";

/**
 * Marquee animation keyframes - injected via style tag
 */
const marqueeStyles = `
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% - var(--gap))); }
}
@keyframes marquee-vertical {
  from { transform: translateY(0); }
  to { transform: translateY(calc(-100% - var(--gap))); }
}
`;

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /** Optional CSS class name to apply custom styles */
  className?: string;
  /** Whether to reverse the animation direction */
  reverse?: boolean;
  /** Whether to pause the animation on hover */
  pauseOnHover?: boolean;
  /** Content to be displayed in the marquee */
  children: React.ReactNode;
  /** Whether to animate vertically instead of horizontally */
  vertical?: boolean;
  /** Number of times to repeat the content */
  repeat?: number;
  /** If true, automatically repeats children enough to fill the visible area */
  autoFill?: boolean;
  /** ARIA label for accessibility */
  ariaLabel?: string;
  /** ARIA live region politeness */
  ariaLive?: "off" | "polite" | "assertive";
  /** ARIA role */
  ariaRole?: string;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ariaLabel,
  ariaLive = "off",
  ariaRole = "marquee",
  ...props
}: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Animation style for the inner elements
  const animationStyle: React.CSSProperties = {
    animation: vertical
      ? "marquee-vertical var(--duration, 40s) linear infinite"
      : "marquee var(--duration, 40s) linear infinite",
    animationDirection: reverse ? "reverse" : "normal",
  };

  return (
    <>
      {/* Inject keyframes */}
      <style dangerouslySetInnerHTML={{ __html: marqueeStyles }} />
      <div
        {...props}
        ref={marqueeRef}
        data-slot="marquee"
        className={cn(
          "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
          {
            "flex-row": !vertical,
            "flex-col": vertical,
          },
          className,
        )}
        aria-label={ariaLabel}
        aria-live={ariaLive}
        role={ariaRole}
        tabIndex={0}
      >
        {React.useMemo(
          () => (
            <>
              {Array.from({ length: repeat }, (_, i) => (
                <div
                  key={i}
                  className={cn(
                    !vertical
                      ? "flex-row [gap:var(--gap)]"
                      : "flex-col [gap:var(--gap)]",
                    "flex shrink-0 justify-around",
                    pauseOnHover && "group-hover:[animation-play-state:paused]",
                  )}
                  style={animationStyle}
                >
                  {children}
                </div>
              ))}
            </>
          ),
          [repeat, children, vertical, pauseOnHover, animationStyle],
        )}
      </div>
    </>
  );
}

export type { MarqueeProps };
