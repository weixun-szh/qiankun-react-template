import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

// https://vite.dev/config/
export default defineConfig({
  base:'/sub-vue',
  server:{
    port:5200,
    cors:true,
    origin:'http://localhost:5200'
  },
  plugins: [vue(),
    qiankun('sub-vue', { // 配置qiankun插件
      useDevMode: true
    })
  ],
})
