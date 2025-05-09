import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://extensions.aitopia.ai', // Le serveur distant
        changeOrigin: true,  // Cela change l'origine de la requête (utile pour certains serveurs)
        rewrite: (path) => path.replace(/^\/api/, ''), // Réécrit l'URL, retirer /api de la requête
      },
    },
  },

});
