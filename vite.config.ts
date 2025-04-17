
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'


// https://vite.dev/config/
export default defineConfig({
  base:"https://andune55.github.io/cripto-react-typescript/",
  plugins: [
    react(), 
  ],  
  // server: {
  //   proxy: {
  //     "/api": {
  //       // target: "http://min-api.cryptocompare.com/data/pricemultifull",
  //       target: "http://min-api.cryptocompare.com",
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
})


