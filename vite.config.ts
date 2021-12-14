import { defineConfig, Plugin } from 'vite'
import preact from '@preact/preset-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { visualizer } from 'rollup-plugin-visualizer'
import { typesafeI18nPlugin } from 'typesafe-i18n/rollup/rollup-plugin-typesafe-i18n'

export default defineConfig({
  plugins: [
    preact(),
    tsconfigPaths(),
    typesafeI18nPlugin() as unknown as Plugin,
  ],
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          gzipSize: true,
          brotliSize: true,
        }) as unknown as Plugin,
      ],
    },
  },
})
