"use client";

import { useI18n } from "fumadocs-ui/contexts/i18n";
import { cn } from "@nebutra/ui/utils";
import { Languages } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@nebutra/ui/primitives";
import { Button } from "@nebutra/ui/primitives";

export function LanguageSwitcher() {
    const context = useI18n();

    // If I18nContext is missing or empty locales, hide the switcher
    if (!context || !context.locales || context.locales.length === 0) return null;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 h-9 opacity-80 hover:opacity-100 transition-opacity">
                    <Languages className="w-5 h-5 text-fd-foreground" />
                    <span className="sr-only">{context.text.chooseLanguage}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[120px]">
                {context.locales.map((item) => (
                    <DropdownMenuItem
                        key={item.locale}
                        className={cn(
                            "cursor-pointer font-medium flex items-center gap-2",
                            item.locale === context.locale ? "bg-primary/10 text-primary" : "text-muted-foreground"
                        )}
                        onClick={() => context.onChange?.(item.locale)}
                    >
                        {item.name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
