// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/Codes/Workspace/YLZ/%E6%B5%8B%E8%AF%95/vue3-project/node_modules/vite/dist/node/index.js";
import AutoImport from "file:///D:/Codes/Workspace/YLZ/%E6%B5%8B%E8%AF%95/vue3-project/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/Codes/Workspace/YLZ/%E6%B5%8B%E8%AF%95/vue3-project/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/Codes/Workspace/YLZ/%E6%B5%8B%E8%AF%95/vue3-project/node_modules/unplugin-vue-components/dist/resolvers.js";
import vue from "file:///D:/Codes/Workspace/YLZ/%E6%B5%8B%E8%AF%95/vue3-project/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/Codes/Workspace/YLZ/%E6%B5%8B%E8%AF%95/vue3-project/vite.config.ts";
var vite_config_default = defineConfig({
  base: "/",
  // 开发或生产环境服务的公共基础路径
  publicDir: false,
  // 静态资源服务的文件夹 false 不启动
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver({
        importStyle: "sass"
      })]
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: "sass"
      })]
    })
  ],
  server: {
    open: true,
    proxy: {}
  },
  build: {
    outDir: "auto-test",
    //构建输出目录
    assetsInlineLimit: 4096
    // 小于此阈值的导入或引用资源将内联为 base64 编码
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxDb2Rlc1xcXFxXb3Jrc3BhY2VcXFxcWUxaXFxcXFx1NkQ0Qlx1OEJENVxcXFx2dWUzLXByb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXENvZGVzXFxcXFdvcmtzcGFjZVxcXFxZTFpcXFxcXHU2RDRCXHU4QkQ1XFxcXHZ1ZTMtcHJvamVjdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQ29kZXMvV29ya3NwYWNlL1lMWi8lRTYlQjUlOEIlRTglQUYlOTUvdnVlMy1wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6ICcvJywgLy8gXHU1RjAwXHU1M0QxXHU2MjE2XHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU2NzBEXHU1MkExXHU3Njg0XHU1MTZDXHU1MTcxXHU1N0ZBXHU3ODQwXHU4REVGXHU1Rjg0XG4gIHB1YmxpY0RpcjogZmFsc2UsIC8vIFx1OTc1OVx1NjAwMVx1OEQ0NFx1NkU5MFx1NjcwRFx1NTJBMVx1NzY4NFx1NjU4N1x1NEVGNlx1NTkzOSBmYWxzZSBcdTRFMERcdTU0MkZcdTUyQThcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcih7XG4gICAgICAgIGltcG9ydFN0eWxlOiAnc2FzcycsXG4gICAgICB9KV0sXG4gICAgfSksXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKHtcbiAgICAgICAgaW1wb3J0U3R5bGU6ICdzYXNzJyxcbiAgICAgIH0pXSxcbiAgICB9KSxcbiAgXSxcbiAgc2VydmVyOiB7XG4gICAgb3BlbjogdHJ1ZSxcbiAgICBwcm94eToge1xuXG4gICAgfVxuICB9LFxuICBidWlsZDoge1xuICAgIG91dERpcjogJ2F1dG8tdGVzdCcsIC8vXHU2Nzg0XHU1RUZBXHU4RjkzXHU1MUZBXHU3NkVFXHU1RjU1XG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDQwOTYgLy8gXHU1QzBGXHU0RThFXHU2QjY0XHU5NjA4XHU1MDNDXHU3Njg0XHU1QkZDXHU1MTY1XHU2MjE2XHU1RjE1XHU3NTI4XHU4RDQ0XHU2RTkwXHU1QzA2XHU1MTg1XHU4MDU0XHU0RTNBIGJhc2U2NCBcdTdGMTZcdTc4MDFcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1UsU0FBUyxlQUFlLFdBQVc7QUFFblcsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFDcEMsT0FBTyxTQUFTO0FBTitLLElBQU0sMkNBQTJDO0FBU2hQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQTtBQUFBLEVBQ04sV0FBVztBQUFBO0FBQUEsRUFDWCxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CO0FBQUEsUUFDOUIsYUFBYTtBQUFBLE1BQ2YsQ0FBQyxDQUFDO0FBQUEsSUFDSixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CO0FBQUEsUUFDOUIsYUFBYTtBQUFBLE1BQ2YsQ0FBQyxDQUFDO0FBQUEsSUFDSixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTyxDQUVQO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBO0FBQUEsSUFDUixtQkFBbUI7QUFBQTtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
