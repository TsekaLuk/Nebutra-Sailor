"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "../utils/cn";

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "prefix"
> {
  /** Icon or node rendered inside the left edge. Non-interactive — clicks pass through to the input. */
  prefix?: React.ReactNode;
  /** Icon or node rendered inside the right edge. Hidden when the clear button is active. */
  suffix?: React.ReactNode;
  /** Show a ✕ button when the field has a value. Tracks value internally for uncontrolled inputs. */
  clearable?: boolean;
  /** Called when the ✕ button is clicked. */
  onClear?: () => void;
  /** Extra className applied to the outer `<div>` wrapper (only rendered when prefix/suffix/clearable is used). */
  wrapperClassName?: string;
}

const inputBase = [
  "flex h-10 w-full rounded-md border border-input bg-background",
  "text-sm ring-offset-background",
  "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
  "placeholder:text-muted-foreground",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  "disabled:cursor-not-allowed disabled:opacity-50",
].join(" ");

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      prefix,
      suffix,
      clearable,
      onClear,
      wrapperClassName,
      value,
      defaultValue,
      onChange,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isControlled = value !== undefined;

    // Internal value tracking — only active when clearable is true
    const [internalValue, setInternalValue] = React.useState<string>(
      typeof defaultValue === "string" || typeof defaultValue === "number"
        ? String(defaultValue)
        : "",
    );

    const currentValue = isControlled ? String(value ?? "") : internalValue;
    const showClear = !!clearable && !disabled && currentValue.length > 0;

    // Reserve right padding whenever clearable/suffix is configured so
    // the layout never jumps as the clear button appears/disappears.
    const hasRightAdornment = (!!clearable && !disabled) || suffix != null;
    const hasWrapper = prefix != null || suffix != null || clearable;

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) setInternalValue(e.target.value);
        onChange?.(e);
      },
      [isControlled, onChange],
    );

    const handleClear = () => {
      if (!isControlled) setInternalValue("");
      // Fire a synthetic onChange so controlled forms and libraries pick it up
      const syntheticEvent = {
        target: { value: "" },
        currentTarget: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange?.(syntheticEvent);
      onClear?.();
    };

    // ── Plain (backward-compatible) ─────────────────────────────────────────
    if (!hasWrapper) {
      return (
        <input
          type={type}
          className={cn(inputBase, "px-3 py-2", className)}
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
      );
    }

    // ── Adorned ─────────────────────────────────────────────────────────────
    return (
      <div className={cn("relative flex items-center", wrapperClassName)}>
        {prefix != null && (
          <span
            aria-hidden
            className="pointer-events-none absolute left-3 flex items-center text-muted-foreground"
          >
            {prefix}
          </span>
        )}

        <input
          type={type}
          className={cn(
            inputBase,
            "py-2",
            prefix != null ? "pl-9" : "pl-3",
            hasRightAdornment ? "pr-9" : "pr-3",
            className,
          )}
          ref={ref}
          // When clearable, always pass value so React keeps the input
          // controlled and re-renders after a programmatic clear.
          value={clearable ? currentValue : value}
          defaultValue={clearable ? undefined : defaultValue}
          onChange={clearable ? handleChange : onChange}
          disabled={disabled}
          {...props}
        />

        {showClear && (
          <button
            type="button"
            aria-label="Clear"
            onClick={handleClear}
            className={cn(
              "absolute right-2 flex h-5 w-5 items-center justify-center rounded",
              "text-muted-foreground transition-colors",
              "hover:text-foreground",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            )}
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}

        {suffix != null && !showClear && (
          <span
            aria-hidden
            className="pointer-events-none absolute right-3 flex items-center text-muted-foreground"
          >
            {suffix}
          </span>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
