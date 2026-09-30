import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://twin-tech-sudo.github.io',
  output: 'static',
  integrations: [react(), sitemap({ filter: (page) => !page.includes('/studio/') })],
  vite: {
    server: {
      allowedHosts: ['.trycloudflare.com', '.lhr.life', '.serveousercontent.com'],
    },
  },
})
