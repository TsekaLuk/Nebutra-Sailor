/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Heading } from "@nebutra/ui/primitives";

export function HeadingDemo() {
    return (
        <div className="flex flex-col gap-4">
            <Heading level={1}>Heading 1 — The quick brown fox jumps</Heading>
            <Heading level={2}>Heading 2 — The quick brown fox jumps</Heading>
            <Heading level={3}>Heading 3 — The quick brown fox jumps</Heading>
            <Heading level={4}>Heading 4 — The quick brown fox jumps</Heading>
        </div>
    );
}
