import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
    server: {
    https: {
      key: fs.readFileSync('../key.pem'),
      cert: fs.readFileSync('../cert.pem'),
    },
  },
});

