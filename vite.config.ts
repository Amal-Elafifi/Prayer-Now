import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr"
import viteTsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';




// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets" : path.resolve(__dirname, "./src/assets/"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    }

  },
  plugins: [react(), viteTsconfigPaths(), svgr()],
})
