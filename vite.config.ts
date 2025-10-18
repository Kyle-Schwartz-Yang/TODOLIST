import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/TODOLIST/",
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@app": "/src/components/app",
      "@pages": "/src/components/pages",
      "@widgets": "/src/components/widgets",
      "@features": "/src/components/features",
      "@entities": "/src/components/entities",
      "@shared": "/src/components/shared",
      "@sharedOriginal": "/src/shared",
    },
  },
});
