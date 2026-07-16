import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../lib/config';

export const GET: APIRoute = async ({ site }) => {
  const [guides, puzzles, bosses, weapons, characters] = await Promise.all([
    getCollection('guide'),
    getCollection('puzzle'),
    getCollection('boss'),
    getCollection('weapon'),
    getCollection('character'),
  ]);

  const allItems = [
    ...guides.map((entry) => ({ slug: entry.slug, collection: 'guide', data: entry.data })),
    ...puzzles.map((entry) => ({ slug: entry.slug, collection: 'puzzle', data: entry.data })),
    ...bosses.map((entry) => ({ slug: entry.slug, collection: 'boss', data: entry.data })),
    ...weapons.map((entry) => ({ slug: entry.slug, collection: 'weapon', data: entry.data })),
    ...characters.map((entry) => ({ slug: entry.slug, collection: 'character', data: entry.data })),
  ].sort((a, b) => ((b.data.updatedAt || b.data.date)?.getTime() || 0) - ((a.data.updatedAt || a.data.date)?.getTime() || 0));

  const baseUrl = (site?.toString() || SITE.url).replace(/\/$/, '');

  const itemsXml = allItems.slice(0, 20).map((item) => {
    const href = `${baseUrl}/${item.collection === 'guide' ? 'walkthrough' : item.collection}s/${item.slug}`;
    const title = item.data.title;
    const description = item.data.description || title;
    const date = item.data.updatedAt || item.data.date || new Date();
    return `
      <item>
        <title>${escapeXml(title)}</title>
        <link>${href}</link>
        <guid>${href}</guid>
        <description>${escapeXml(description)}</description>
        <pubDate>${date.toUTCString()}</pubDate>
      </item>`;
  }).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(SITE.title)}</title>
    <link>${baseUrl}</link>
    <description>${escapeXml(SITE.description)}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[&<>"']/g, (c) => {
    switch (c) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '\"': return '&quot;';
      case "'": return '&apos;';
      default: return c;
    }
  });
}
