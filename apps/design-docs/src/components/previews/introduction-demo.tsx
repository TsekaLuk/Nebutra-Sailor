"use client";

import { Alert } from "@nebutra/ui/primitives";
import { Info } from "lucide-react";

export function IntroductionDemo() {
    return (
        <div className="w-full p-8 max-w-3xl mx-auto">
            <Alert className="mb-6 flex items-start gap-4">
                <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                    <h4 className="font-semibold text-foreground">Welcome to Nebutra Sailor</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                        This collection of primitives provides a strong foundation for building exceptional SaaS applications.
                        Explore the available components to get started.
                    </p>
                </div>
            </Alert>
        </div>
    );
}
