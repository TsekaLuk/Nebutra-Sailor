"use client"

import * as React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@nebutra/ui/primitives"

export function AccordionDisabledDemo() {
  return (
    <Accordion multiple={false} className="w-full">
      <AccordionItem value="item-1" disabled>
        <AccordionTrigger>Disabled Section</AccordionTrigger>
        <AccordionContent>This will not open.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
