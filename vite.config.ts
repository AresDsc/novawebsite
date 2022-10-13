import { defineConfig } from "vite";
import path from "path";

import solid from "solid-start/vite";
import vercel from "solid-start-vercel";
import windi from "vite-plugin-windicss";

export default defineConfig({
  plugins: [
    solid({
      ssr: false,
      adapter: vercel()
    }),

    windi()
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});
