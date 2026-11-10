import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'node:fs';

export default defineConfig({
    plugins: [
        react(),
        {
            name: 'spa-fallback-404',
            closeBundle() {
                copyFileSync('dist/index.html', 'dist/404.html');
            },
        },
    ],
    base: '/CV/',
});
