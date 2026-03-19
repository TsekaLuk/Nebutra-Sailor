"use client"

import * as React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@nebutra/ui/primitives"

export function AccordionCompactDemo() {
  return (
    <Accordion multiple={false} className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger size="small">Compact Question</AccordionTrigger>
        <AccordionContent size="small">
          Compact content with reduced padding.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
