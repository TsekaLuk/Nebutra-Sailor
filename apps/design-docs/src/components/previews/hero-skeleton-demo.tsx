/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { HeroSkeleton, Card, Button } from "@nebutra/ui/primitives";
import { useState } from "react";

export function HeroSkeletonDemo() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto p-4 md:p-8 items-center">

            <div className="flex gap-4 mb-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsLoaded(!isLoaded)}
                >
                    Toggle Loading State
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* Card Example */}
                <Card className="p-4 flex flex-col gap-4">
                    <HeroSkeleton isLoaded={isLoaded} className="rounded-lg">
                        <div className="h-32 w-full bg-muted rounded-lg flex items-center justify-center">
                            <span className="text-muted-foreground text-sm font-medium">Image Loaded</span>
                        </div>
                    </HeroSkeleton>

                    <div className="space-y-3">
                        <HeroSkeleton isLoaded={isLoaded} className="w-4/5 rounded-lg">
                            <div className="h-5 w-4/5 bg-muted rounded-lg">
                                <h3 className="text-base font-bold text-foreground">Content Title</h3>
                            </div>
                        </HeroSkeleton>

                        <HeroSkeleton isLoaded={isLoaded} className="w-full rounded-lg">
                            <div className="h-3 w-full bg-muted rounded-lg"></div>
                        </HeroSkeleton>

                        <HeroSkeleton isLoaded={isLoaded} className="w-5/6 rounded-lg">
                            <div className="h-3 w-5/6 bg-muted rounded-lg"></div>
                        </HeroSkeleton>

                        <HeroSkeleton isLoaded={isLoaded} className="w-2/5 rounded-lg">
                            <div className="h-3 w-2/5 bg-muted rounded-lg"></div>
                        </HeroSkeleton>
                    </div>
                </Card>

                {/* User Profile Example */}
                <Card className="p-4 flex items-center gap-4">
                    <HeroSkeleton isLoaded={isLoaded} className="rounded-full w-14 h-14 shrink-0">
                        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold shrink-0">
                            U
                        </div>
                    </HeroSkeleton>

                    <div className="flex flex-col gap-2 w-full">
                        <HeroSkeleton isLoaded={isLoaded} className="h-4 w-3/5 rounded-lg">
                            <div className="h-4 w-full font-semibold text-foreground">John Doe</div>
                        </HeroSkeleton>
                        <HeroSkeleton isLoaded={isLoaded} className="h-3 w-4/5 rounded-lg">
                            <div className="h-3 w-full text-xs text-muted-foreground">Software Engineer</div>
                        </HeroSkeleton>
                    </div>
                </Card>
            </div>
        </div>
    );
}
