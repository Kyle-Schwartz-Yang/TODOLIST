import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/TODOLIST/",
  plugins: [react()],
  resolve: {
    alias: {
      //---------------- Path Aliases ----------------
      "@components": "/src/components",
      "@app": "/src/app",
      "@shared": "/src/shared",
      //---------------- Path Aliases ----------------

      "@widgets": "/src/components/widgets",
      "@features": "/src/components/features",
      "@entities": "/src/components/entities",

      //---------------------------------------

      "@atoms": "/src/components/atoms",
      "@molecules": "/src/components/molecules",
      "@organisms": "/src/components/organisms",
      "@templates": "/src/components/atoms",
      "@pages": "/src/components/pages",
    },
  },
});
