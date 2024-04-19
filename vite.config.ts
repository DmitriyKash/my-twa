import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  base: '/my-twa/',
  build: {
    rollupOptions: {
      external: ['/my-twa/assets/index-Db9LfXqK.js'],
      output: {
        assetFileNames: `assets/[name]-[hash][extname]`
      }
    }
  }
});


// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), nodePolyfills()],
//   base: '/',
// });

