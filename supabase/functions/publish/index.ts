import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

Deno.serve(async (request) => {
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 })
  const auth = request.headers.get('Authorization') ?? ''
  const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!, { global: { headers: { Authorization: auth } } })
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return Response.json({ error: 'Unauthorised' }, { status: 401 })
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).single()
  if (profile?.role !== 'owner') return Response.json({ error: 'Owner access required' }, { status: 403 })

  const { recordId } = await request.json()
  const { data: record, error } = await supabase.from('site_records').select('*').eq('id', recordId).single()
  if (error || !record) return Response.json({ error: 'Record not found' }, { status: 404 })

  const admin = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)
  const publishedAt = new Date().toISOString()
  await admin.from('site_records').update({ status: 'published', published_at: publishedAt }).eq('id', recordId)
  const { data: release, error: releaseError } = await admin.from('releases').insert({ label: `Publish ${record.kind}: ${record.title}`, snapshot: record, created_by: user.id }).select().single()
  if (releaseError) return Response.json({ error: releaseError.message }, { status: 500 })

  const owner = Deno.env.get('GITHUB_OWNER')!
  const repo = Deno.env.get('GITHUB_REPO')!
  const dispatch = await fetch(`https://api.github.com/repos/${owner}/${repo}/actions/workflows/deploy.yml/dispatches`, {
    method: 'POST', headers: { Authorization: `Bearer ${Deno.env.get('GITHUB_DEPLOY_TOKEN')}`, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ ref: 'main', inputs: { release_id: release.id } }),
  })
  if (!dispatch.ok) { await admin.from('releases').update({ status: 'failed' }).eq('id', release.id); return Response.json({ error: 'Deployment could not be queued' }, { status: 502 }) }
  return Response.json({ releaseId: release.id, status: 'queued' })
})
