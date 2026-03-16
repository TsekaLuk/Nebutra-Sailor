/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Grid } from "@nebutra/ui/primitives";

export function GridSystemDemo() {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8 flex flex-col gap-12">

            <div className="space-y-4">
                <h3 className="text-lg font-semibold">12-Column Layout</h3>
                <Grid.System columns={12} rowHeight="80px" className="border">
                    <Grid.Cell span={12} solid className="flex items-center justify-center text-sm font-medium">Header (span 12, solid)</Grid.Cell>

                    <Grid.Cell span={3} className="flex items-center justify-center text-sm text-muted-foreground">Sidebar (span 3)</Grid.Cell>
                    <Grid.Cell span={6} className="flex items-center justify-center text-sm text-muted-foreground p-4 text-center">
                        Main Content Area (span 6)<br />Shows grid background
                    </Grid.Cell>
                    <Grid.Cell span={3} className="flex items-center justify-center text-sm text-muted-foreground">Widgets (span 3)</Grid.Cell>

                    <Grid.Cell span={4} solid className="flex items-center justify-center text-sm font-medium">Card 1 (span 4, solid)</Grid.Cell>
                    <Grid.Cell span={4} solid className="flex items-center justify-center text-sm font-medium">Card 2 (span 4, solid)</Grid.Cell>
                    <Grid.Cell span={4} solid className="flex items-center justify-center text-sm font-medium">Card 3 (span 4, solid)</Grid.Cell>

                    <Grid.Cell span={12} className="flex items-center justify-center text-sm text-muted-foreground">Footer (span 12)</Grid.Cell>
                </Grid.System>
            </div>

        </div>
    );
}
