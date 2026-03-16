/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { ExpandingTextarea } from "@nebutra/ui/primitives";

export function ExpandingTextareaDemo() {
    return (
        <div className="w-full max-w-md px-4 py-12 flex items-center justify-center">
            <ExpandingTextarea
                placeholder="Start typing... the textarea will expand automatically."
                className="w-full"
            />
        </div>
    );
}
