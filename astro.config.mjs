import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://twin-tech-sudo.github.io',
  output: 'static',
  integrations: [react(), sitemap({ filter: (page) => !page.includes('/studio/') })],
  vite: {
    server: {
      allowedHosts: ['.trycloudflare.com', '.lhr.life', '.serveousercontent.com'],
    },
  },
})
