import path from "node:path";
import conf from "@adddog/config-defaults/vite.config";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig, mergeConfig } from "vite";

// https://vite.dev/config/
export default mergeConfig(
    conf,
    defineConfig({
        plugins: [tailwindcss(), vue()],
        resolve: {
            alias: {
                "~": path.resolve(__dirname, "./src"),
                "@": path.resolve(__dirname, "./src"),
            },
        },
    }));
