/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Flex } from "@nebutra/ui/primitives";

export function FlexDemo() {
    return (
        <Flex gap={4} align="center" justify="center" className="w-full max-w-sm rounded-xl border bg-background/50 p-6 shadow-sm">
            <div className="h-16 w-16 rounded-lg border border-primary/30 bg-primary/20" />
            <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-primary font-medium text-primary-foreground shadow-sm">
                Flex
            </div>
            <div className="h-16 w-16 rounded-lg border border-primary/30 bg-primary/20" />
        </Flex>
    );
}
