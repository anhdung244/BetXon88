import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "./src"),
      "@/modules": path.resolve(__dirname, "./src/modules"),
      "@/common": path.resolve(__dirname, "./src/common"),
      "@/hooks": path.resolve(__dirname, "./src/components"),
      "@/configs": path.resolve(__dirname, "./src/configs"),
      "@/styles": path.resolve(__dirname, "./src/styles"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@/icons": path.resolve(__dirname, "./src/icons"),
      "@/routes": path.resolve(__dirname, "./src/routes"),
    },
  },
  plugins: [react()],
});
