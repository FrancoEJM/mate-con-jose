// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://mateconjose.cl',
  markdown: {
    remarkPlugins: [remarkMath],
    // ponytail: KaTeX se renderiza en build, no en el cliente (el original lo cargaba por CDN con un retry loop)
    rehypePlugins: [rehypeKatex],
  },
});
