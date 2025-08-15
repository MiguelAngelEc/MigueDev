import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// Configuración para Vercel (modo estático para evitar problemas de runtime)
export default defineConfig({
  output: 'static',
  // Sin adaptador para deploy estático
  integrations: [tailwind()],
  vite: {
    ssr: {
      // Excluir sharp del bundling para evitar problemas
      external: ['sharp']
    }
  }
});
