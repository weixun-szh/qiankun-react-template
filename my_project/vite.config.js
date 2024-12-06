import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sub-react",
  server: {
    port: 5100,
    cors: true,
    origin: "http://localhost:5100",
  },
  plugins: [
    react(),
    qiankun("sub-react", {
      // 配置qiankun插件
      useDevMode: true,
    }),
  ],
});
