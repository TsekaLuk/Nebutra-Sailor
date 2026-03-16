/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from "@nebutra/ui/primitives";
import { Button } from "@nebutra/ui/primitives";

export function AlertDialogCustomDemo() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">Remove Item</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Remove item from cart?</AlertDialogTitle>
                    <AlertDialogDescription>
                        The item will be removed from your shopping cart.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Keep Item</AlertDialogCancel>
                    <AlertDialogAction onClick={() => console.warn("Remove items")}>
                        Remove
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
