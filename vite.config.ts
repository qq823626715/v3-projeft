import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // 开发或生产环境服务的公共基础路径
  publicDir: false, // 静态资源服务的文件夹 false 不启动
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver({
        importStyle: 'sass',
      })],
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: 'sass',
      })],
    }),
  ],
  server: {
    open: true,
    proxy: {

    }
  },
  build: {
    outDir: 'auto-test', //构建输出目录
    assetsInlineLimit: 4096 // 小于此阈值的导入或引用资源将内联为 base64 编码
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/variables.scss" as *;@use "@/styles/element/index.scss" as *;'
      }
    }
  }
})
