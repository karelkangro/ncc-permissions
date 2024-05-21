/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import Unfonts from "unplugin-fonts/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    Unfonts({
      custom: {
        families: [
          {
            name: "PPNeueMontreal",
            local: "PPNeueMontreal",
            src: "./src/assets/fonts/PPNeueMontreal/*.{otf,ttf,woff,woff2}",
            transform(font) {
              switch (font.basename) {
                case 'PPNeueMontreal-Semibold':
                  font.weight = 500;
                  font.style = 'normal';
                  break;
                case 'PPNeueMontreal-Regular':
                  font.weight = 400;
                  font.style = 'normal';
                  break;
                default:
                  font.weight = 400;
                  break;
              }
              return font;
            }
          }
        ],
        display: "auto",
        prefetch: false,
        injectTo: "head-prepend",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      api: `${path.resolve(__dirname, "./src/api/")}`,
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      constants: `${path.resolve(__dirname, "./src/constants/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
      context: `${path.resolve(__dirname, "./src/context/")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks/")}`,
      theme: `${path.resolve(__dirname, "./src/theme/")}`,
      layouts: `${path.resolve(__dirname, "./src/layouts/")}`,
      modules: path.resolve(__dirname, "./src/modules"),
      types: `${path.resolve(__dirname, "./src/types")}`,
      utils: `${path.resolve(__dirname, "./src/utils")}`,
    },
  }
})
