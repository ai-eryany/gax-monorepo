import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import legacy from '@vitejs/plugin-legacy';
import sassDts from 'vite-plugin-sass-dts';
import progress from 'vite-plugin-progress';
import colors from 'picocolors';

interface ViteConfigInput {
  mode: string;
  command: string;
}

function viteConfig(args: ViteConfigInput) {
  // Production mode
  if (args.mode === 'production')
    return defineConfig({
      plugins: [
        react(),
        tsconfigPaths(),
        legacy({
          targets: ['defaults', 'not IE 11'],
        }),
        progress({
          format: `${colors.green(colors.bold('Building'))} ${colors.red('[:bar]')} :percent | :eta`,
        }),
      ],
      css: {
        modules: {
          localsConvention: 'camelCase',
          generateScopedName: '[hash:base64:5]',
        },
      },
      build: {
        cssMinify: true,
        rollupOptions: {
          output: {
            entryFileNames: `assets/[name].js`,
            chunkFileNames: `assets/[name].js`,
            assetFileNames: `assets/[name].[ext]`,
          },
        },
        minify: 'terser',
        terserOptions: {
          compress: {
            unused: true,
          },
          format: {
            comments: false,
          },
        },
      },
    });

  // Development mode
  return defineConfig({
    plugins: [
      react(),
      tsconfigPaths(),
      sassDts(),
      progress({
        format: `${colors.green(colors.bold('Building'))} ${colors.red('[:bar]')} :percent | :eta`,
      }),
    ],
  });
}

export default viteConfig;
