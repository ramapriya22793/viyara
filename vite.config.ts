import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

function copyStaticFolders() {
  return {
    name: 'copy-static-folders',
    closeBundle() {
      const folders = ['form', 'service', 'loading'];
      folders.forEach(folder => {
        const srcDir = path.resolve(folder);
        const destDir = path.resolve('dist', folder);
        if (fs.existsSync(srcDir)) {
          fs.cpSync(srcDir, destDir, { recursive: true, force: true });
          console.log(`Successfully copied ${folder} to dist/${folder}`);
        }
      });
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), copyStaticFolders()],
  envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
})
