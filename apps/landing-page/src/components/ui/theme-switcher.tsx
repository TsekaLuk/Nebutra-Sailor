"use client";

import { MoonStarIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import type { JSX } from "react";
import React from "react";

import { cn } from "@/lib/utils";
import { useMount } from "@/hooks/useMount";

function ThemeOption({
  icon,
  value,
  isActive,
  onClick,
}: {
  icon: JSX.Element;
  value: "light" | "dark";
  isActive?: boolean;
  onClick: (value: "light" | "dark") => void;
}) {
  return (
    <button
      className={cn(
        "relative flex size-8 cursor-pointer items-center justify-center rounded-full transition-all [&_svg]:size-4",
        isActive
          ? "text-[var(--neutral-12)]"
          : "text-[var(--neutral-9)] hover:text-[var(--neutral-12)]",
      )}
      role="radio"
      aria-checked={isActive}
      aria-label={`Switch to ${value} theme`}
      onClick={() => onClick(value)}
    >
      {icon}

      {isActive && (
        <span className="absolute inset-0 rounded-full border border-[var(--neutral-6)]" />
      )}
    </button>
  );
}

const THEME_OPTIONS = [
  { icon: <SunIcon />, value: "light" as const },
  { icon: <MoonStarIcon />, value: "dark" as const },
];

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const isMounted = useMount();

  if (!isMounted) {
    return <div className="flex h-8 w-16" />;
  }

  return (
    <div
      className="inline-flex items-center overflow-hidden rounded-full bg-[var(--neutral-1)] ring-1 ring-[var(--neutral-6)] ring-inset"
      role="radiogroup"
      aria-label="Select color theme"
    >
      {THEME_OPTIONS.map((option) => (
        <ThemeOption
          key={option.value}
          icon={option.icon}
          value={option.value}
          isActive={theme === option.value}
          onClick={setTheme}
        />
      ))}
    </div>
  );
}

export { ThemeSwitcher };
