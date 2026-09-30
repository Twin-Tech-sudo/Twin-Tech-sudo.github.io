import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.PUBLIC_SUPABASE_URL
const key = import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY

export const supabaseConfigured = Boolean(url && key)
export const supabase = supabaseConfigured
  ? createClient(url, key, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } })
  : null

export type StudioRecord = {
  id: string
  kind: 'page' | 'service' | 'project' | 'article' | 'testimonial' | 'setting'
  slug: string
  title: string
  status: 'draft' | 'published'
  data: Record<string, unknown>
  updated_at: string
  published_at: string | null
}
