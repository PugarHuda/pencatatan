import { defineConfig } from "vite"
import react from "@vitejs/pluginn-react"

export default defineConfig({
    plugins: [react()],
    server: {
        host: "0,0,0,0",
        port: 1500,
    }
})