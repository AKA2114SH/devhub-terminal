import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/devhub-terminal/",
    build: {
      outDir: "dist",
    },
  },
});
