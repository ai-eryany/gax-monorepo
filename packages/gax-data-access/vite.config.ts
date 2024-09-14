import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import path from 'path';
import terser, { Options } from '@rollup/plugin-terser';

const terserOptions: Options = {
    compress: {
        unused: true,
        drop_console: true,
        drop_debugger: true,
    },
    format: {
        comments: false,
    },
};

interface ViteConfigInput {
    mode: string;
    command: string;
}

function viteConfig(args: ViteConfigInput) {
    // Production mode
    if (args.mode === 'production')
        return defineConfig({
            plugins: [tsconfigPaths(), dts({ rollupTypes: true })],

            build: {
                lib: {
                    entry: path.resolve(__dirname, 'src/index.ts'),
                    name: '@gax/data-access',
                    fileName: 'index',
                    formats: ['es'],
                },

                rollupOptions: {
                    plugins: [terser(terserOptions)],
                },
            },
        });

    // Development mode
    return defineConfig({
        plugins: [tsconfigPaths(), dts()],
    });
}

export default viteConfig;
