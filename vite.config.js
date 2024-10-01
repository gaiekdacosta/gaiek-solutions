import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/gaiek-solutions",
  publicDir: 'public',
  build: {
    outDir: 'dist', // Definindo o diretório de saída para dist
    assetsDir: "assets", // Definindo o diretório de ativos para assets
  },
})
