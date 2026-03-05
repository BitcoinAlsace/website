import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    category: z.enum(['meetup', 'conference', 'actu', 'autre']).default('autre'),
    description: z.string().optional(),
    location: z.string().optional(),
    registrationUrl: z.string().url().optional(),
    image: z.string().optional(),
    free: z.boolean().default(true),
    price: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { events };
