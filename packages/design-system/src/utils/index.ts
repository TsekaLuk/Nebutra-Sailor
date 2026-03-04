/**
 * Utility Functions
 */

import { clsx, type ClassValue } from "clsx";

/**
 * Merge class names
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Breakpoint values (matches Primer)
 */
export const BREAKPOINTS = {
  xs: 0,
  sm: 544,
  md: 768,
  lg: 1012,
  xl: 1280,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

/**
 * Check if viewport is at or above breakpoint
 */
export function isBreakpointUp(breakpoint: Breakpoint): boolean {
  if (typeof window === "undefined") return true;
  return window.innerWidth >= BREAKPOINTS[breakpoint];
}
