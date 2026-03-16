/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { ThemeSwitcher, ThemeSwitcherValue } from "@nebutra/ui/primitives";
import { useState } from "react";

export function ThemeSwitcherDemo() {
    const [theme, setTheme] = useState<ThemeSwitcherValue>("system");

    return (
        <div className="w-full min-h-[300px] flex flex-col items-center justify-center gap-8 p-8 border rounded-xl bg-card">
            <div className="text-center space-y-2">
                <h3 className="font-medium text-lg">Theme Switcher</h3>
                <p className="text-sm text-muted-foreground">A compact, animated toggle for light/dark/system preferences.</p>
            </div>

            <div className="flex flex-col items-center gap-4">
                <ThemeSwitcher
                    value={theme}
                    onChange={setTheme}
                />

                <div className="text-sm text-muted-foreground flex items-center gap-2">
                    Current state: <span className="font-mono bg-muted px-2 py-1 rounded text-foreground">{theme}</span>
                </div>
            </div>
        </div>
    );
}
