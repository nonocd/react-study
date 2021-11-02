import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteMockServe } from 'vite-plugin-mock';
import { resolve } from 'path';

const pathResolve = (dir: string) => {
  return resolve(__dirname, '.', dir);
};

export default defineConfig({
  plugins: [
    react(),
    viteMockServe({
      mockPath: 'mock',
    }),
  ],
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      { find: /@\//, replacement: pathResolve('src/') + '/' },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#1890ff',
        },
      },
    },
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8040',
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
});
