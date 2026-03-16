/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { HeroPopover, HeroPopoverTrigger, HeroPopoverContent, Button } from "@nebutra/ui/primitives";
import { Settings, Info, User } from "lucide-react";

export function HeroPopoverDemo() {
    return (
        <div className="flex flex-wrap gap-8 w-full max-w-3xl mx-auto p-4 md:p-12 items-center justify-center min-h-[400px]">

            <HeroPopover placement="top" showArrow backdrop="blur">
                <HeroPopoverTrigger>
                    <Button variant="outline" prefix={<Info />} className="w-32">
                        Info
                    </Button>
                </HeroPopoverTrigger>
                <HeroPopoverContent className="w-[280px]">
                    {(titleProps: React.HTMLAttributes<HTMLDivElement>) => (
                        <div className="px-1 py-2">
                            <div className="text-small font-bold" {...titleProps}>
                                Popover Content
                            </div>
                            <div className="text-tiny text-foreground/80">
                                This popover has a blurred backdrop and an arrow pointing to the trigger.
                            </div>
                        </div>
                    )}
                </HeroPopoverContent>
            </HeroPopover>

            <HeroPopover placement="bottom" color="primary">
                <HeroPopoverTrigger>
                    <Button variant="default" prefix={<Settings />} className="w-32">
                        Settings
                    </Button>
                </HeroPopoverTrigger>
                <HeroPopoverContent>
                    <div className="px-1 py-2">
                        <div className="text-small font-bold text-primary-foreground">Configuration</div>
                        <div className="text-tiny text-primary-foreground/80 mt-1">
                            Primary colored popover without an arrow.
                        </div>
                    </div>
                </HeroPopoverContent>
            </HeroPopover>

            <HeroPopover placement="right" backdrop="opaque">
                <HeroPopoverTrigger>
                    <Button variant="secondary" prefix={<User />} className="w-32">
                        Profile
                    </Button>
                </HeroPopoverTrigger>
                <HeroPopoverContent className="w-[240px] p-0 overflow-hidden">
                    <div className="flex flex-col">
                        <div className="p-4 bg-muted">
                            <h4 className="font-semibold text-sm">User Profile</h4>
                        </div>
                        <div className="p-4">
                            <p className="text-sm text-muted-foreground">Opaque backdrop mode darkens the entire background around the popover.</p>
                        </div>
                    </div>
                </HeroPopoverContent>
            </HeroPopover>

        </div>
    );
}
