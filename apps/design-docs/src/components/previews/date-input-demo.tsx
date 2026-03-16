/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { DateInput } from "@nebutra/ui/primitives";

export function DateInputDemo() {
    return (
        <div className="w-full max-w-sm px-4 py-12 flex justify-center items-center">
            <DateInput label="Event date" />
        </div>
    );
}
