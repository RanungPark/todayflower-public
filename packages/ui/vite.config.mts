import {defineConfig, type PluginOption} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import {viteStaticCopy} from 'vite-plugin-static-copy';

const extension = '.mjs';

const replaceExtension = (target: string, replacement: '.mjs' | '.js') => {
  const regex = /\.([tj]s[x]?|css)$/;
  return target.replace(regex, replacement);
};

export default defineConfig({
  plugins: [
    peerDepsExternal() as PluginOption,
    react(),
    cssInjectedByJsPlugin(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/styles/*',
          dest: 'styles',
        },
        {
          src: 'src/assets/*',
          dest: 'assets',
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: (chunkInfo) => {
          const subPath = chunkInfo.facadeModuleId?.split('src')[1];

          if (subPath) {
            const relativePath = subPath.startsWith('/') ? subPath.slice(1) : subPath;
            return replaceExtension(relativePath, extension);
          }

          return `${chunkInfo.name}${extension}`;
        },

        assetFileNames: (assetInfo) => {
          if (!assetInfo.names) {
            return '';
          }

          return assetInfo.names[0];
        },

        preserveModules: true,
      },
    },
  },
});
