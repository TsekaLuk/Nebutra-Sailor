/**
 * StatsCounter - Animated Statistics Counter Component
 *
 * Display numbers with counting animation on scroll.
 *
 * @see docs/MARKETING-INFRASTRUCTURE.md
 *
 * ## Features (TODO)
 * - [ ] Animated number counting (CountUp)
 * - [ ] Intersection Observer trigger
 * - [ ] Prefix/suffix support ($, %, K, M)
 * - [ ] prefers-reduced-motion support
 */

"use client";

import * as React from "react";
import type { Stat } from "../types";

export interface StatsCounterProps {
  stats: Stat[];
  /** Animate the counting */
  animate?: boolean;
  /** Animation duration in ms */
  duration?: number;
  className?: string;
}

export function StatsCounter({
  stats,
  animate = true,
  duration = 2000,
  className,
}: StatsCounterProps) {
  // TODO: Implement with:
  // - Intersection Observer to trigger animation
  // - CountUp animation (or custom implementation)
  // - prefers-reduced-motion check

  return (
    <div className={className} data-slot="stats-counter">
      {stats.map((stat, index) => (
        <div key={index} data-slot="stat">
          <span data-slot="value">
            {stat.prefix}
            {/* TODO: Animated value */}
            {stat.value}
            {stat.suffix}
          </span>
          <span data-slot="label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

StatsCounter.displayName = "StatsCounter";
