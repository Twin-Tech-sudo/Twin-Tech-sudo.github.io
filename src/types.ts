export type Project = {
  id: string
  name: string
  category: string
  summary: string
  outcome: string
  tags: string[]
  url?: string
  logo?: string
  featured: boolean
  colour: string
}

export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
}

export type SiteSettings = {
  email: string
  phone: string
  availability: string
  location: string
}

export type SiteContent = {
  projects: Project[]
  testimonials: Testimonial[]
  settings: SiteSettings
}
