/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { Feedback } from "@nebutra/ui/primitives";

export function FeedbackDemo() {
    return (
        <div className="flex h-40 w-full items-center justify-center px-4 py-8">
            <Feedback
                label="my-app"
                onSubmit={async (payload) => {
                    console.warn("Feedback submitted", payload)
                }}
            />
        </div>
    )
}
