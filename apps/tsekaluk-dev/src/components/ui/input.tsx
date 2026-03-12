import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-white shadow-sm transition-shadow placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:border-gray-400 dark:focus-visible:border-gray-500 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-gray-200/50 dark:focus-visible:ring-gray-700/50 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
