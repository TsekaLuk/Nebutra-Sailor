"use client";

import * as React from "react";
import { Accordion3 } from "@nebutra/ui/primitives";

export function Accordion3Demo() {
  return (
    <NebutraAccordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1" disabled>
      <AccordionTrigger>Disabled Section</AccordionTrigger>
      <AccordionContent>This will not open.</AccordionContent>
    </AccordionItem>
  </NebutraAccordion>
  );
}
