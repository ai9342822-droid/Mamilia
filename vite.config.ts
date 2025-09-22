import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  optimizeDeps: {
    exclude: ['lucide-react'],
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('echarts')) {
              return 'vendor_echarts';
            }
            if (id.includes('framer-motion')) {
              return 'vendor_framer';
            }
            // Group remaining vendor libraries
            return 'vendor'; 
          }
        },
      },
    },
  },
});
