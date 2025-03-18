import { defineConfig } from "vite";
import path from "path";
import viteReact from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    viteReact(),
    // react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
