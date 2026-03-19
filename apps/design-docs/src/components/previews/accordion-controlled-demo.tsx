"use client"

import * as React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@nebutra/ui/primitives"

export function AccordionControlledDemo() {
  return (
    <Accordion multiple={false} defaultValue={["item-1"]} className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Controlled Item</AccordionTrigger>
        <AccordionContent>This accordion is controlled.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
