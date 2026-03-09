import { AssistedPasswordConfirmation } from "@nebutra/ui/primitives";
import { useState } from "react";
import { Badge } from "@nebutra/ui/primitives";

export function AssistedPasswordConfirmationDemo() {
    const [match, setMatch] = useState(false);

    return (
        <div className="w-full max-w-sm mx-auto p-6 space-y-6">
            <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold tracking-tight">Confirm Password</h3>
                <p className="text-sm text-muted-foreground font-medium">Verify your password to continue.</p>
            </div>

            <AssistedPasswordConfirmation
                password="nebutra2026!"
                placeholder="Type password..."
                onMatch={() => setMatch(true)}
            />

            <div className="flex justify-center mt-4 h-8 items-center">
                {match && (
                    <Badge variant="default" className="bg-green-500 hover:bg-green-600 text-white animate-in fade-in zoom-in">
                        Passwords Match
                    </Badge>
                )}
            </div>
        </div>
    );
}
