"use client";

import * as React from "react";
import { Accordion2 } from "@nebutra/ui/primitives";

export function Accordion2Demo() {
  return (
    <NebutraAccordion type="single" defaultValue="item-1" className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>Controlled Item</AccordionTrigger>
      <AccordionContent>This accordion is controlled.</AccordionContent>
    </AccordionItem>
  </NebutraAccordion>
  );
}
