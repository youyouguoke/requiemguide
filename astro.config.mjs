import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { visit } from 'unist-util-visit';

/** Add loading=lazy and decoding=async to markdown images */
function rehypeLazyImages() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        node.properties.loading = node.properties.loading || 'lazy';
        node.properties.decoding = node.properties.decoding || 'async';
        if (!node.properties.width) {
          node.properties.width = '512';
          node.properties.height = '286';
        }
      }
    });
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://requiemguide.com',
  output: 'static',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/search'),
      changefreq: 'weekly',
      lastmod: new Date(),
      priority: 0.7,
      entryLimit: 50000,
    }),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
    rehypePlugins: [rehypeLazyImages],
  },
  image: {
    domains: ['requiemguide.com'],
  },
});
