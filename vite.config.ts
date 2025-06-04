import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@app": "/src/components/app",
      "@pages": "/src/components/pages",
      "@shared": "/src/components/shared",
      "@widgets": "/src/components/widgets",
      "@features": "/src/components/features",
    },
  },
});
