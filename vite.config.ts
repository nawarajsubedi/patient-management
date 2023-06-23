import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
export default defineConfig({
  resolve: {
    alias: {
      "@route": resolve(__dirname, "src", "route"),
    },
  },
  plugins: [react()],
});
