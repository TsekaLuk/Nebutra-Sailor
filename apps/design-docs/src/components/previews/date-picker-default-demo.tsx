/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { DatePicker, parseDate } from "@nebutra/ui/primitives";

export default function DatePickerDefaultDemo() {
    return (
        <div className="flex justify-center items-center w-full max-w-sm">
            <DatePicker label="Date" defaultValue={parseDate("2024-04-04")} />
        </div>
    );
}
