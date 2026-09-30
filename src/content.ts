import type { SiteContent } from './types'

export const defaultContent: SiteContent = {
  settings: {
    email: 'hello@twintech-sudo.co.uk',
    phone: '',
    availability: 'Taking on selected projects for Q4',
    location: 'United Kingdom · working worldwide',
  },
  projects: [
    {
      id: 'boqextract',
      name: 'BOQExtract',
      category: 'Construction technology',
      summary: 'A precision document intelligence platform that turns complex construction files into structured, reviewable commercial data.',
      outcome: 'From raw documents to audit-ready outputs',
      tags: ['AI extraction', 'Desktop app', 'Enterprise UX'],
      logo: '/boqextract-logo.svg',
      featured: true,
      colour: '#c7ff17',
    },
    {
      id: 'macks-packs',
      name: "Mack's Packs",
      category: 'E-commerce experience',
      summary: 'A fast, focused storefront built around collectible trading cards, live inventory and a frictionless path to purchase.',
      outcome: 'Brand, commerce and operations in one build',
      tags: ['E-commerce', 'Web design', 'Automation'],
      logo: '/macks-packs-logo.png',
      featured: true,
      colour: '#8ca8ff',
    },
  ],
  testimonials: [
    {
      id: 'launch-partner',
      quote: 'Twin Tech-sudo turns a rough idea into a product that feels considered, capable and ready for the real world.',
      name: 'Your next client',
      role: 'Testimonial placeholder — replace in Studio',
    },
  ],
}

const STORAGE_KEY = 'twin-tech-sudo-content-v1'

export function loadContent(): SiteContent {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return defaultContent
    const parsed = JSON.parse(saved) as SiteContent
    const projects = parsed.projects.map(project => {
      const original = defaultContent.projects.find(item => item.id === project.id)
      return { ...original, ...project, logo: project.logo || original?.logo }
    })
    return { ...defaultContent, ...parsed, projects }
  } catch {
    return defaultContent
  }
}

export function saveContent(content: SiteContent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content))
  window.dispatchEvent(new Event('twin-content-updated'))
}

export function resetContent() {
  localStorage.removeItem(STORAGE_KEY)
  window.dispatchEvent(new Event('twin-content-updated'))
}
