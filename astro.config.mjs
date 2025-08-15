import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Configuración para GitHub Pages
export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
});
