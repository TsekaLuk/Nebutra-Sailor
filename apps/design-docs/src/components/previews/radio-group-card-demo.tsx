import { RadioGroupCard, RadioGroupCardItem } from "@nebutra/ui/primitives";
import { CreditCard, Landmark, Smartphone } from "lucide-react";

export function RadioGroupCardDemo() {
    return (
        <div className="w-full max-w-3xl px-4 py-8">
            <RadioGroupCard defaultValue="card" className="grid grid-cols-3 gap-3">
                <RadioGroupCardItem value="card" id="pay-card">
                    <CreditCard className="mb-4 h-6 w-6 text-muted-foreground" />
                    <div className="font-medium">Card</div>
                    <div className="text-xs text-muted-foreground mt-1 text-balance">Visa, Mastercard</div>
                </RadioGroupCardItem>
                <RadioGroupCardItem value="bank" id="pay-bank">
                    <Landmark className="mb-4 h-6 w-6 text-muted-foreground" />
                    <div className="font-medium">Bank</div>
                    <div className="text-xs text-muted-foreground mt-1 text-balance">Direct transfer</div>
                </RadioGroupCardItem>
                <RadioGroupCardItem value="mobile" id="pay-mobile">
                    <Smartphone className="mb-4 h-6 w-6 text-muted-foreground" />
                    <div className="font-medium">Mobile</div>
                    <div className="text-xs text-muted-foreground mt-1 text-balance">Apple Pay, Google Pay</div>
                </RadioGroupCardItem>
            </RadioGroupCard>
        </div>
    );
}
