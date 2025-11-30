import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names with Tailwind CSS class conflict resolution.
 * This is the standard utility function used by shadcn/ui and 21st.dev components.
 *
 * @example
 * ```tsx
 * cn("px-4 py-2", "px-6") // => "py-2 px-6"
 * cn("text-red-500", condition && "text-blue-500")
 * cn(buttonVariants({ variant: "primary" }), className)
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Type-safe variant selector for CVA components.
 * Useful for extracting variant types from component props.
 */
export type VariantProps<T extends (...args: unknown[]) => unknown> =
  T extends (props: infer P) => unknown ? P : never;

/**
 * Helper to create a forwardRef component with proper types.
 * Reduces boilerplate when creating accessible components.
 */
export { Slot } from "@radix-ui/react-slot";
