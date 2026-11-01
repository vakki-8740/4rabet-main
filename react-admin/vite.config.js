import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets"
  },
  /* dev server only - lets the hosted preview / phone open the panel */
  server: {
    host: "0.0.0.0",
    port: 8090,
    allowedHosts: true
  }
});
