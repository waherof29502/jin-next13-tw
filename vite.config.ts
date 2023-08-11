import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/

const SRC_DIR = path.resolve(__dirname, './src');
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    eslintPlugin({
      include: ['src/**/*.tsx', 'src/**/*.ts', 'src/*.ts', 'src/*.tsx']
    })
  ],
  resolve: {
    alias: {
      '@': SRC_DIR
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8082',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
