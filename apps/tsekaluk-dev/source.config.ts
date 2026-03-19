import { defineCollections } from "fumadocs-mdx/config";
import { z } from "zod";

const blogSchema = z.object({
  title: z.string(),
  date: z.string().date().or(z.date()),
  excerpt: z.string(),
  tags: z.array(z.string()).default([]),
});

export const blogPosts = defineCollections({
  type: "doc",
  dir: "content/thinking",
  schema: blogSchema,
});
