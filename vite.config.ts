import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  base: '/my-twa/' // Указываем поддиректорию, соответствующую названию репозитория на GitHub
});

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), nodePolyfills()],
//   base: '/',
// });