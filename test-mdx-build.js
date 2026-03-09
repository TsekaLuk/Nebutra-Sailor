const fs = require('fs');
const path = require('path');
const mdxContent = fs.readFileSync('apps/design-docs/mdx-components.tsx', 'utf-8');
const usedComponents = new Set();

function extractJSXTags(content) {
  const regex = /<([A-Z][a-zA-Z0-9_]*)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    usedComponents.add(match[1]);
  }
}

function traverse(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const res = path.resolve(dir, file.name);
    if (file.isDirectory()) {
      traverse(res);
    } else if (res.endsWith('.mdx')) {
      extractJSXTags(fs.readFileSync(res, 'utf-8'));
    }
  }
}

traverse('apps/design-docs/content');

const allUsed = Array.from(usedComponents);
const missing = allUsed.filter(c => !mdxContent.includes(` ${c},`) && !mdxContent.includes(` ${c} `) && !mdxContent.includes(`${c}: `) && !mdxContent.includes(`<${c}`));

console.log("Missing components in MDX:", missing);
