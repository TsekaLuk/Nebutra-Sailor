"use client";

import { DatePicker, today, getLocalTimeZone } from "@nebutra/ui/primitives";

export default function DatePickerMinMaxDemo() {
    return (
        <div className="flex justify-center items-center w-full max-w-sm">
            <DatePicker
                label="Date"
                minValue={today(getLocalTimeZone())}
                maxValue={today(getLocalTimeZone()).add({ months: 3 })}
            />
        </div>
    );
}
