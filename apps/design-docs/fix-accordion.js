const fs = require("fs");

function fixAccordion(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  // Fix corrupted en/components/accordion.mdx
  // It has things like:
  // ```
  // </ComponentPreview>tsx
  // <ComponentPreview className="max-w-[400px]">
  //
  // We want it to be:
  // ```
  // </ComponentPreview>
  //
  // <ComponentPreview className="max-w-[400px]">

  if (filePath.includes("en/components/accordion.mdx")) {
    // It has multiple sections like:
    // ### Multiple Open Items\n\n```tsx\n<ComponentPreview className="max-w-[400px]">\n  <Accordion type="multiple" className="w-full">
    //
    content = content.replace(/```tsx\n<ComponentPreview/g, "<ComponentPreview");
    content = content.replace(/```\n\n###/g, "```\n</ComponentPreview>\n\n###");
    content = content.replace(
      /```\n<\/ComponentPreview>tsx\n<ComponentPreview/g,
      "```\n</ComponentPreview>\n\n<ComponentPreview",
    );

    // The last one might end with ```\n</ComponentPreview>tsx... wait the last one is:
    // ```\n</ComponentPreview>tsx\n<ComponentPreview className="max-w-[400px]">\n...</Accordion>\n</ComponentPreview>\n```
    content = content.replace(/<\/ComponentPreview>\n```/g, "```\n</ComponentPreview>");

    // Fix the initial code block structure to match standard ComponentPreview
    // For each ComponentPreview, we want the live component, then the ```tsx block
    // But looking at the content, the code IS the ComponentPreview?
    // Wait, let's just do manual string replaces for the whole file.
  }
}
