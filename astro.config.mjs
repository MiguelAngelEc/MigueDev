import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// Configuración para Vercel
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), vercel()],
});