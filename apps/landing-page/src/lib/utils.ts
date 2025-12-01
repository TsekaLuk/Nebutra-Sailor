import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function for merging Tailwind CSS classes
 * Re-exported from @nebutra/21st for consistency
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
