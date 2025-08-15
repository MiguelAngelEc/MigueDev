import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { resolve } from 'path';

// Configuración completa para Astro + Tailwind + GitHub Pages
export default defineConfig({
  // Indica que el output es estático
  output: 'static',

  // Base URL para GitHub Pages (reemplaza con el nombre de tu repo)
  base: '/MigueDev/',

  // Integraciones
  integrations: [tailwind()],

  // Opciones opcionales de build
  build: {
    // Carpeta de salida
    outDir: 'dist',
    // Minimiza HTML y CSS
    minify: true,
    // Genera sitemap automáticamente
    sitemap: true,
  },

  // Configuración para rutas y assets
  vite: {
    // Alias de carpetas si necesitas
    resolve: {
      alias: {
        '@components': resolve('./src/components'),
        '@assets': resolve('./src/assets'),
      },
    },
  },
});
