"use client";

import { useTheme } from "next-themes";
import { ThemeSwitcher, ThemeSwitcherValue } from "@nebutra/ui/primitives";

export function CustomThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <ThemeSwitcher
            value={theme as ThemeSwitcherValue}
            onChange={setTheme}
        />
    );
}
