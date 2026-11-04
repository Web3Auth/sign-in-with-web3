import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

const exampleDir = path.dirname(fileURLToPath(import.meta.url));
const shims = path.join(exampleDir, "node_modules/vite-plugin-node-polyfills/shims");

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: "vite-plugin-node-polyfills/shims/global",
        replacement: path.join(shims, "global/dist/index.js"),
      },
      {
        find: "vite-plugin-node-polyfills/shims/buffer",
        replacement: path.join(shims, "buffer/dist/index.js"),
      },
      {
        find: "vite-plugin-node-polyfills/shims/process",
        replacement: path.join(shims, "process/dist/index.js"),
      },
    ],
  },
});
