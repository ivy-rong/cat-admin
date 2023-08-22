import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar', 'NIcon']
        },
        {
          '@vueuse/core': ['useToggle', 'useEventListener', 'useDebounceFn']
        }
      ],
      dts: './auto-imports.d.ts'
    }),
    Components({
      dts: './components.d.ts',
      resolvers: [NaiveUiResolver()],
      dirs: ['src/components', 'src/layouts', 'src/providers', 'src/charts'],
      extensions: ['vue']
    }),
    Icons({ autoInstall: true }),
    VueI18nPlugin({
      runtimeOnly: false,
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**')
      // provide a path to the folder where you'll store translation data (see below)
    })
  ],
  resolve: {
    alias: {
      // '@': path.resolve('./src')
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
    }
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '/base-api': {
        //target是代理的目标路径
        target: 'https://dolphin-admin-api.bit-ocean.studio',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/base-api/, '')
      }
    }
  }
})
