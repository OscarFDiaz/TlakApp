import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/TlakApp/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
});