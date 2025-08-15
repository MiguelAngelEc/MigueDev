import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  vite: {
    ssr: {
      // Excluir bibliotecas problemáticas del SSR
      external: ['sharp']
    },
    optimizeDeps: {
      // Pre-optimizar GSAP para mejor performance
      include: ['gsap', 'gsap/ScrollTrigger', 'gsap/TextPlugin']
    },
    build: {
      rollupOptions: {
        output: {
          // Optimizar chunks para GSAP
          manualChunks: {
            'gsap-core': ['gsap'],
            'gsap-plugins': ['gsap/ScrollTrigger', 'gsap/TextPlugin']
          }
        }
      }
    }
  }
});
