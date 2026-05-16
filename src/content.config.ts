import { defineCollection} from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod'

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
  }),
});

const organizers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/organizers' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
  }),
});

export const collections = { events, organizers, blog, pages };