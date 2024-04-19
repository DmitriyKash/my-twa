import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// export default defineConfig({
//   plugins: [
//     react(),
//     nodePolyfills(),
//     VitePWA({})
//   ],
//   base: '/my-twa/', // Убедитесь, что это корректный публичный путь
//   build: {
//     rollupOptions: {
//       input: '/index.html', // Указываем исходный index.html
//       output: {
//         assetFileNames: `assets/[name]-[hash][extname]` // Формат имен файлов
//       }
//     }
//   }
// });



// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react(), nodePolyfills()],
  base: '/my-twa/',
});


