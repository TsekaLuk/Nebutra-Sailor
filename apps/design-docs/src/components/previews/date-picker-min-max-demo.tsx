"use client";

import { DatePicker, getLocalTimeZone, today } from "@nebutra/ui/primitives";

export default function DatePickerMinMaxDemo() {
  return (
    <div className="max-w-sm flex w-full items-center justify-center">
      <DatePicker
        label="Date"
        minValue={today(getLocalTimeZone())}
        maxValue={today(getLocalTimeZone()).add({ months: 3 })}
      />
    </div>
  );
}
