"use client";

import { SectionContainer } from "@nebutra/ui/layouts";
import { Button } from "@nebutra/ui/primitives";

export function PageContainerDemo() {
    return (
        <SectionContainer size="lg" spacing="md" className="border rounded-xl bg-background shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
            <SectionContainer.Header>
                <h2 className="text-2xl font-bold tracking-tight">Features</h2>
                <p className="text-muted-foreground mt-2">Everything you need to ship faster.</p>
            </SectionContainer.Header>

            <SectionContainer.Content className="py-12 border-y border-dashed bg-muted/10 flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Feature Grid Content</p>
            </SectionContainer.Content>

            <SectionContainer.Footer>
                <Button>View all features</Button>
            </SectionContainer.Footer>
        </SectionContainer>
    );
}
