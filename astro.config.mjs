import { defineConfig } from 'astro/config';
import htmx from 'astro-htmx';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [htmx()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});
