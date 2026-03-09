"use client"

import * as React from "react"
import NumberFlow, { continuous } from '@number-flow/react'
import * as RadixSlider from '@radix-ui/react-slider'
import { cn } from "@nebutra/ui/utils"

export const SliderNumberFlow = React.forwardRef<
    React.ElementRef<typeof RadixSlider.Root>,
    React.ComponentPropsWithoutRef<typeof RadixSlider.Root>
>(({ className, value, ...props }, ref) => (
    <RadixSlider.Root
        ref={ref}
        {...(value != null ? { value } : {})}
        className={cn("relative flex h-5 w-full touch-none select-none items-center", className)}
        {...props}
    >
        <RadixSlider.Track className="relative h-[3px] grow rounded-full bg-neutral-200 dark:bg-neutral-800">
            <RadixSlider.Range className="absolute h-full rounded-full bg-neutral-900 dark:bg-neutral-50" />
        </RadixSlider.Track>
        <RadixSlider.Thumb
            className="relative block h-5 w-5 rounded-full bg-white shadow-md ring ring-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            aria-label="Slider Value"
        >
            {value?.[0] != null && (
                <NumberFlow
                    willChange
                    value={value[0]}
                    isolate
                    plugins={[continuous]}
                    opacityTiming={{
                        duration: 250,
                        easing: 'ease-out'
                    }}
                    transformTiming={{
                        easing: `linear(0, 0.0033 0.8%, 0.0263 2.39%, 0.0896 4.77%, 0.4676 15.12%, 0.5688, 0.6553, 0.7274, 0.7862, 0.8336 31.04%, 0.8793, 0.9132 38.99%, 0.9421 43.77%, 0.9642 49.34%, 0.9796 55.71%, 0.9893 62.87%, 0.9952 71.62%, 0.9983 82.76%, 0.9996 99.47%)`,
                        duration: 500
                    }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-lg font-semibold"
                />
            )}
        </RadixSlider.Thumb>
    </RadixSlider.Root>
))

SliderNumberFlow.displayName = "SliderNumberFlow"
