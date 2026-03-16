/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Accordion4Demo() {
  return (
    <>
<NebutraAccordion type="single" className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger size="small">Compact Question</AccordionTrigger>
    <AccordionContent size="small">
      Compact content with reduced padding.
    </AccordionContent>
  </AccordionItem>
</NebutraAccordion>
    </>
  );
}
