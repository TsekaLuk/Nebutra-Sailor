"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/cn";

const toggleGroupVariants = cva(
    "inline-flex items-center justify-center gap-1 rounded-lg bg-muted p-1 text-muted-foreground",
    {
        variants: {
            variant: {
                default: "",
                outline: "bg-transparent border",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

const toggleGroupItemVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm",
    {
        variants: {
            variant: {
                default: "",
                outline:
                    "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
            },
            size: {
                default: "h-9 px-3",
                sm: "h-8 px-2",
                lg: "h-10 px-4",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

const ToggleGroupContext = React.createContext<
    VariantProps<typeof toggleGroupItemVariants>
>({
    variant: "default",
    size: "default",
});

const ToggleGroup = React.forwardRef<
    React.ComponentRef<typeof ToggleGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleGroupVariants> &
    VariantProps<typeof toggleGroupItemVariants>
>(({ className, variant, size, children, ...props }, ref) => (
    <ToggleGroupPrimitive.Root
        ref={ref}
        className={cn(toggleGroupVariants({ variant }), className)}
        {...props}
    >
        <ToggleGroupContext.Provider value={{ variant, size }}>
            {children}
        </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
    React.ComponentRef<typeof ToggleGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleGroupItemVariants>
>(({ className, variant, size, children, ...props }, ref) => {
    const context = React.useContext(ToggleGroupContext);
    return (
        <ToggleGroupPrimitive.Item
            ref={ref}
            className={cn(
                toggleGroupItemVariants({
                    variant: variant ?? context.variant,
                    size: size ?? context.size,
                }),
                className,
            )}
            {...props}
        >
            {children}
        </ToggleGroupPrimitive.Item>
    );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export {
    ToggleGroup,
    ToggleGroupItem,
    toggleGroupVariants,
    toggleGroupItemVariants,
};
