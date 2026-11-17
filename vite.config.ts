import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets load on GitHub Pages and local files
  server: {
    port: 3000,
    open: false,
  },
});
