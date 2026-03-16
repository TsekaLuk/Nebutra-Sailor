/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { ErrorMessage } from "@nebutra/ui/primitives";

export function ErrorMessageDemo() {
    return (
        <div className="w-full max-w-sm px-4 py-8 relative">
            <ErrorMessage>This email address is already in use.</ErrorMessage>
        </div>
    )
}
