/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { RadioGroupStacked, RadioGroupStackedItem } from "@nebutra/ui/primitives";

export function RadioGroupStackedDemo() {
    return (
        <div className="w-full max-w-md px-4 py-8">
            <RadioGroupStacked defaultValue="standard" className="w-full">
                <RadioGroupStackedItem value="standard" id="delivery-standard">
                    <div className="flex justify-between w-full">
                        <div>
                            <div className="font-medium">Standard Shipping</div>
                            <div className="text-sm text-muted-foreground mt-1">5–7 business days</div>
                        </div>
                        <div className="font-medium">Free</div>
                    </div>
                </RadioGroupStackedItem>
                <RadioGroupStackedItem value="express" id="delivery-express">
                    <div className="flex justify-between w-full">
                        <div>
                            <div className="font-medium">Express Shipping</div>
                            <div className="text-sm text-muted-foreground mt-1">2–3 business days</div>
                        </div>
                        <div className="font-medium">$9.99</div>
                    </div>
                </RadioGroupStackedItem>
                <RadioGroupStackedItem value="overnight" id="delivery-overnight">
                    <div className="flex justify-between w-full">
                        <div>
                            <div className="font-medium">Overnight Shipping</div>
                            <div className="text-sm text-muted-foreground mt-1">Next business day</div>
                        </div>
                        <div className="font-medium">$19.99</div>
                    </div>
                </RadioGroupStackedItem>
            </RadioGroupStacked>
        </div>
    );
}
