import { z, defineCollection } from "astro:content";

const docCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
    parent: z.string().optional(), // to define folder structure
    related: z.array(z.string()).optional(), // list of related article titles
  }),
});

export const collections = {
  docs: docCollection,
};
