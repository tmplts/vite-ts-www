import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [],
  root: "src",
  build: {
    outDir: "../dist",
  },
  resolve: {
    alias: {
      theme: resolve("./src/theme"),
    }
  }
});
