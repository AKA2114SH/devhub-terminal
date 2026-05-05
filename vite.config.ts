import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // This ensures the app looks for assets in the subfolder /devhub-terminal/
    base: "/devhub-terminal/",
    build: {
      // Ensures the build output is clean for GitHub Pages
      outDir: "dist",
    },
    server: {
      // Local development remains at root, but build uses the base path
      host: "0.0.0.0",
      port: 8080,
    }
  },
});
