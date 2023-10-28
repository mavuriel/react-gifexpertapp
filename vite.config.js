import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-gifexpertapp/',
  plugins: [react(), EnvironmentPlugin('all')],
})
