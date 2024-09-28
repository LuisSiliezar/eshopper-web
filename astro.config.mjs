// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import vercel from '@astrojs/vercel/serverless';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), react(), tailwind({
    applyBaseStyles: false,
  }),],
  output: 'hybrid',
  adapter: vercel()
});