import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/js/app.js",
                "resources/css/chessboard-1.0.0.min.css",
                "resources/js/chessboard-1.0.0.min.js",
                "resources/js/chess.ts",
            ],
            refresh: true,
        }),
    ],
});
