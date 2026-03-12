/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { AccordionTrigger, AccordionContent, AccordionItem } from "@nebutra/ui/primitives";

export function Accordion3Demo() {
  return (
    <NebutraAccordion type="single" className="w-full">
      <AccordionItem value="item-1" disabled>
        <AccordionTrigger>Disabled Section</AccordionTrigger>
        <AccordionContent>This will not open.</AccordionContent>
      </AccordionItem>
    </NebutraAccordion>
  );
}
