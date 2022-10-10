import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./js', import.meta.url))
        }
    },
    build: {
        outDir: "../public/",
        manifest: true,
        rollupOptions: {
            input: 'js/main.ts'
        }
    },

})
