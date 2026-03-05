import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const events = await getCollection('events', ({ data }) => !data.draft);
  const sorted = events.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Bitcoin Alsace — Événements',
    description: 'Les événements de l\'association Bitcoin Alsace : meetups, conférences, actualités.',
    site: context.site!,
    items: sorted.map(event => ({
      title: event.data.title,
      pubDate: event.data.date,
      description: event.data.description,
      link: `/evenements/${event.id}/`,
      customData: event.data.image
        ? `<media:content url="${context.site}${event.data.image.replace(/^\//, '')}" medium="image"/>`
        : '',
    })),
    customData: '<language>fr-fr</language>',
    xmlns: { media: 'http://search.yahoo.com/mrss/' },
  });
}
