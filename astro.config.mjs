// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://mateconjose.cl',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    // ponytail: KaTeX se renderiza en build, no en el cliente (el original lo cargaba por CDN con un retry loop)
    rehypePlugins: [rehypeKatex],
  },
});
