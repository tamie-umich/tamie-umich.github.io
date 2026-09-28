import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Progress posts: one Markdown file per post in src/content/posts/.
// File name = URL slug (e.g. 2026-09-28-hello-tamie.md -> /posts/2026-09-28-hello-tamie/).
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { posts };
