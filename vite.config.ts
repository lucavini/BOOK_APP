import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      {
        find: '~Styles',
        replacement: path.resolve(__dirname, 'src/App/Styles'),
      },
      {
        find: '@Pages',
        replacement: path.resolve(__dirname, 'src/App/Pages'),
      },
      {
        find: '@Components',
        replacement: path.resolve(__dirname, 'src/App/components'),
      },
      {
        find: '@Assets',
        replacement: path.resolve(__dirname, 'src/App/assets'),
      },
    ],
  },
});
