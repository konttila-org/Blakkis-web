import { defineConfig } from 'vite';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig(({ command }) => ({
  plugins: [react(), eslintPlugin()],
  // For custom domain, always use root path
  base: '/',
}));
