import { createCompiler } from '@fumadocs/mdx-remote';
import { remarkMdxMermaid } from 'fumadocs-mermaid';
import { remarkFeedbackBlock } from 'fumadocs-core/mdx-plugins/remark-feedback-block';
import { remarkAutoTypeTable } from 'fumadocs-typescript';

// Standard compilation configuration matching source.config.ts
export const compiler = createCompiler({
    remarkPlugins: [
        [remarkMdxMermaid, { theme: 'system' }],
        [remarkFeedbackBlock, {
            title: 'How is this guide?',
            goodLabel: 'Good',
            badLabel: 'Bad',
        }],
        [remarkAutoTypeTable, {
            cache: true,
        }],
    ],
});
