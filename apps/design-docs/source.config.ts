import {
  defineDocs,
  defineConfig,
  frontmatterSchema,
} from "fumadocs-mdx/config"
import { remarkMdxMermaid } from "fumadocs-mermaid"
import { remarkFeedbackBlock } from "fumadocs-core/mdx-plugins/remark-feedback-block"
import {
  remarkAutoTypeTable,
  createGenerator,
  createFileSystemGeneratorCache,
} from "fumadocs-typescript"
import { remarkComponent } from "./lib/remark-component"
import { z } from "zod"

const generator = createGenerator({
  cache: createFileSystemGeneratorCache(".next/fumadocs-typescript"),
})

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema.extend({
      status: z
        .enum(["stable", "beta", "deprecated", "experimental"])
        .optional(),
      figma: z.string().optional(),
    }),
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
})

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [
      remarkComponent,
      remarkMdxMermaid,
      remarkFeedbackBlock,
      [remarkAutoTypeTable, { generator }],
    ],
    rehypePlugins: [],
  },
})
