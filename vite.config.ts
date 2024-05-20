/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
// import Unfonts from "unplugin-fonts/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
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

// Unfonts({
//   custom: {
//     families: [
//       {
//         name: "Sohne Breit",
//         local: "Sohne Breit",
//         src: "./src/assets/fonts/SöhneBreit/*.otf",
//         transform(font) {
//           switch (font.basename) {
//             case 'SöhneBreit-Bold':
//               font.weight = 700
//               break;
//             case 'SöhneBreit-SemiBold':
//               font.weight = 600
//               break;
//             case 'SöhneBreit-Medium':
//               font.weight = 500
//               break;
//             case 'SöhneBreit-Regular':
//             default:
//               font.weight = 400
//               break;
//             case 'SöhneBreit-Light':
//               font.weight = 300
//               break;
//           }
//           return font
//         }
//       }
//     ],
//     display: "auto",
//     prefetch: false,
//     injectTo: "head-prepend",
//   },
// }),
