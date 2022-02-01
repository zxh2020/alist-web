import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import pluginRewriteAll from "vite-plugin-rewrite-all";
import { useDynamicPublicPath } from "vite-plugin-dynamic-publicpath";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    reactRefresh(),
    pluginRewriteAll(),
    useDynamicPublicPath({
      dynamicImportHandler: "window.__dynamic_handler__",
      dynamicImportPreload: "window.__dynamic_preload__",
    }),
  ],
  build: {
    target: "es2015",
  },
  define: {
    "process.env": {},
  },
});
