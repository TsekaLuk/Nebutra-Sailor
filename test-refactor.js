const fs = require('fs');

const path = 'apps/design-docs/content/docs/en/components/avatar.mdx';
let content = fs.readFileSync(path, 'utf8');

// The regex looks for </ComponentPreview> followed by optional whitespace and a code block.
// It captures the whitespace+codeblock in group 1.
const regex = /<\/ComponentPreview>(\s*```[a-z]*\r?\n[\s\S]*?\r?\n```)/g;

const matches = content.match(regex);
console.log(`Found ${matches ? matches.length : 0} matches in avatar.mdx`);

const newContent = content.replace(regex, '$1\n</ComponentPreview>');

fs.writeFileSync('avatar-test.mdx', newContent, 'utf8');
console.log('Wrote to avatar-test.mdx');
