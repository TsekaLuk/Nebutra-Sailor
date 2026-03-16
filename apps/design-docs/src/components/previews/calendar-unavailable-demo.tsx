/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { Calendar, isWeekend } from "@nebutra/ui/primitives";

export default function CalendarUnavailableDemo() {
    return (
        <div className="flex justify-center items-center">
            <Calendar
                isDateUnavailable={(date) => isWeekend(date, "en-US")}
                className="rounded-xl shadow-sm border border-border"
            />
        </div>
    );
}
