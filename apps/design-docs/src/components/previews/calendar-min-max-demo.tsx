"use client";

import { Calendar, today, getLocalTimeZone } from "@nebutra/ui/primitives";

export default function CalendarMinMaxDemo() {
    return (
        <div className="flex justify-center items-center">
            <Calendar
                minValue={today(getLocalTimeZone()).subtract({ months: 1 })}
                maxValue={today(getLocalTimeZone()).add({ months: 1 })}
                className="rounded-xl shadow-sm border border-border"
            />
        </div>
    );
}
