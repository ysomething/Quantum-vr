import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  base: process.env.VITE_BASE || (mode === 'production' ? '/Quantum-vr/' : '/'),
  server: {
    host: '0.0.0.0',
  },
  preview: {
    host: '0.0.0.0',
  },
}));
