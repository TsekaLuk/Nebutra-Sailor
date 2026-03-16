/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { CalendarPicker } from "@nebutra/ui/primitives";
import { useState } from "react";

export function CalendarPickerDemo() {
    const [range, setRange] = useState<React.ComponentProps<typeof CalendarPicker>["value"]>();

    const presets = {
        today: {
            text: "Today",
            start: new Date(),
            end: new Date(),
        },
        yesterday: {
            text: "Yesterday",
            start: new Date(new Date().setDate(new Date().getDate() - 1)),
            end: new Date(new Date().setDate(new Date().getDate() - 1)),
        },
        last7: {
            text: "Last 7 days",
            start: new Date(new Date().setDate(new Date().getDate() - 7)),
            end: new Date(),
        },
        last30: {
            text: "Last 30 days",
            start: new Date(new Date().setDate(new Date().getDate() - 30)),
            end: new Date(),
        },
    };

    return (
        <div className="flex flex-col gap-6 w-full max-w-sm mx-auto p-4 py-12 items-center justify-center min-h-[300px]">
            <div className="flex flex-col gap-2">
                <span className="text-sm font-medium">Select Date Range</span>
                <CalendarPicker
                    value={range}
                    onChange={setRange}
                    presets={presets}
                    allowClear
                />
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-sm font-medium">Compact Layout</span>
                <CalendarPicker
                    value={range}
                    onChange={setRange}
                    presets={presets}
                    compact
                    allowClear
                />
            </div>
        </div>
    );
}
