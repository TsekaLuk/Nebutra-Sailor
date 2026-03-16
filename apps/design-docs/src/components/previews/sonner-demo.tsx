/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { Button } from "@nebutra/ui/primitives";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function SonnerDemo() {
    const [showToast, setShowToast] = useState(false);

    return (
        <div className="w-full h-[300px] flex items-center justify-center bg-muted/30 border rounded-xl relative overflow-hidden">

            <Button
                variant="default"
                onClick={() => {
                    setShowToast(false);
                    setTimeout(() => setShowToast(true), 100);
                }}
            >
                Show Toast Notification
            </Button>

            {/* Mock Sonner Toast */}
            {showToast && (
                <div className="absolute bottom-4 right-4 animate-in slide-in-from-bottom-5 fade-in duration-300">
                    <div className="bg-background border shadow-lg rounded-lg flex items-center gap-3 p-4 pr-8 max-w-sm">
                        <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                        <div className="flex flex-col">
                            <span className="font-semibold text-sm">Action successful</span>
                            <span className="text-sm text-muted-foreground">The resource has been updated perfectly.</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
