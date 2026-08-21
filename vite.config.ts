import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  const now = new Date();
  const pad = (n) => n.toString().padStart(2, '0');
  const buildDate = `${pad(now.getUTCDate())} ${pad(now.getUTCMonth() + 1)} ${now.getUTCFullYear()} ${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())} UTC`;

  return {
    define: {
      __BUILD_DATE__: JSON.stringify(buildDate)
    },
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'lucide-react']
          }
        }
      }
    },
    server: {
      hmr: false,
      watch: null,
    }
  };
});
