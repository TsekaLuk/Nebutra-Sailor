"use client";

"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../utils/cn";

const RadioGroupStacked = React.forwardRef<
    React.ComponentRef<typeof RadioGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Root
            className={cn("grid gap-2", className)}
            {...props}
            ref={ref}
        />
    );
});
RadioGroupStacked.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupStackedItem = React.forwardRef<
    React.ComponentRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Item
            ref={ref}
            className={cn(
                "relative flex w-full flex-row items-center justify-between rounded-lg border px-4 py-3 text-left hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 [&[data-state=checked]]:border-primary [&[data-state=checked]]:bg-primary/5",
                className
            )}
            {...props}
        >
            <div className="flex w-full items-center">
                <RadioGroupPrimitive.Indicator className="absolute left-4 flex items-center justify-center">
                </RadioGroupPrimitive.Indicator>
                <div className="flex w-full items-center">
                    {children}
                </div>
            </div>
        </RadioGroupPrimitive.Item>
    );
});
RadioGroupStackedItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroupStacked, RadioGroupStackedItem };
