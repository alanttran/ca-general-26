import { defineConfig } from 'vite';

/**
 * Relative base works for GitHub Project Pages and local preview without path drift.
 */
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
