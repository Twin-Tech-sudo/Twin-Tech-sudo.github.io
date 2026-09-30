import { useEffect, useState } from 'react'
import {
  Activity, BarChart3, BookOpen, CheckCircle2, Eye, FileText, FolderKanban, Gauge,
  Image, Inbox, LayoutDashboard, LoaderCircle, LogOut, Menu, MessageSquareQuote,
  Plus, Rocket, Search, Settings, ShieldCheck, Trash2, X,
} from 'lucide-react'
import { supabase, supabaseConfigured, type StudioRecord } from './lib/supabase'

type Tab = 'overview' | 'pages' | 'projects' | 'insights' | 'testimonials' | 'media' | 'enquiries' | 'seo' | 'analytics' | 'releases' | 'settings'
const nav: { id: Tab; label: string; icon: typeof Gauge }[] = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard }, { id: 'pages', label: 'Pages & services', icon: FileText },
  { id: 'projects', label: 'Projects', icon: FolderKanban }, { id: 'insights', label: 'Insights', icon: BookOpen },
  { id: 'testimonials', label: 'Testimonials', icon: MessageSquareQuote }, { id: 'media', label: 'Media library', icon: Image },
  { id: 'enquiries', label: 'Enquiries', icon: Inbox }, { id: 'seo', label: 'SEO centre', icon: Search },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 }, { id: 'releases', label: 'Releases', icon: Rocket },
  { id: 'settings', label: 'Settings', icon: Settings },
]
const kindForTab: Partial<Record<Tab, StudioRecord['kind']>> = { pages: 'page', projects: 'project', insights: 'article', testimonials: 'testimonial' }

export default function Studio() {
  const [session, setSession] = useState<Awaited<ReturnType<NonNullable<typeof supabase>['auth']['getSession']>>['data']['session']>(null)
  const [loading, setLoading] = useState(supabaseConfigured)
  const [tab, setTab] = useState<Tab>('overview')
  const [mobileNav, setMobileNav] = useState(false)
  const [records, setRecords] = useState<StudioRecord[]>([])
  const [enquiryCount, setEnquiryCount] = useState(0)
  const [releaseCount, setReleaseCount] = useState(0)
  const [notice, setNotice] = useState('')
  const [needsMfa, setNeedsMfa] = useState(false)

  useEffect(() => {
    if (!supabase) return
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setLoading(false) })
    const { data } = supabase.auth.onAuthStateChange((_event, next) => { setSession(next); setLoading(false) })
    return () => data.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (!session || !supabase) return
    supabase.auth.mfa.getAuthenticatorAssuranceLevel().then(({ data }) => {
      setNeedsMfa(data?.currentLevel === 'aal1' && data.nextLevel === 'aal2')
    })
    Promise.all([
      supabase.from('site_records').select('*').order('updated_at', { ascending: false }),
      supabase.from('enquiries').select('*', { count: 'exact', head: true }),
      supabase.from('releases').select('*', { count: 'exact', head: true }),
    ]).then(([content, enquiries, releases]) => {
      if (content.data) setRecords(content.data as StudioRecord[])
      setEnquiryCount(enquiries.count ?? 0); setReleaseCount(releases.count ?? 0)
    })
  }, [session])

  if (!supabaseConfigured) return <SetupState />
  if (loading) return <div className="studio-state"><LoaderCircle className="spin" /><p>Opening Twin Studio…</p></div>
  if (!session) return <Login />
  if (needsMfa) return <MfaChallenge onVerified={() => setNeedsMfa(false)} />

  const filtered = records.filter(record => record.kind === kindForTab[tab])
  const flash = (message: string) => { setNotice(message); window.setTimeout(() => setNotice(''), 2500) }
  const saveRecord = async (record: StudioRecord) => {
    if (!supabase) return
    const { error } = await supabase.from('site_records').upsert({ ...record, updated_by: session.user.id })
    if (error) return flash(error.message)
    setRecords(current => current.map(item => item.id === record.id ? record : item)); flash('Draft saved')
  }
  const addRecord = async () => {
    const kind = kindForTab[tab]; if (!kind || !supabase) return
    const title = `New ${kind}`; const slug = `new-${kind}-${Date.now()}`
    const { data, error } = await supabase.from('site_records').insert({ kind, title, slug, status: 'draft', data: {}, updated_by: session.user.id }).select().single()
    if (error) return flash(error.message)
    setRecords(current => [data as StudioRecord, ...current]); flash(`${title} created`)
  }
  const removeRecord = async (id: string) => {
    if (!supabase || !window.confirm('Delete this draft?')) return
    const { error } = await supabase.from('site_records').delete().eq('id', id)
    if (error) return flash(error.message)
    setRecords(current => current.filter(item => item.id !== id)); flash('Draft deleted')
  }
  const publish = async (record: StudioRecord) => {
    if (!supabase) return
    const { error } = await supabase.functions.invoke('publish', { body: { recordId: record.id } })
    if (error) return flash(`Publish failed: ${error.message}`)
    const next = { ...record, status: 'published' as const, published_at: new Date().toISOString() }
    setRecords(current => current.map(item => item.id === record.id ? next : item)); flash('Release queued')
  }

  return <div className="studio-app">
    <aside className={mobileNav ? 'studio-sidebar open' : 'studio-sidebar'}>
      <div className="studio-brand"><img src="/twin-tech-sudo-mark.png" alt="" /><span>Twin <b>Studio</b></span><button onClick={() => setMobileNav(false)}><X /></button></div>
      <nav>{nav.map(({ id, label, icon: Icon }) => <button className={tab === id ? 'active' : ''} onClick={() => { setTab(id); setMobileNav(false) }} key={id}><Icon /><span>{label}</span>{id === 'enquiries' && enquiryCount > 0 && <b>{enquiryCount}</b>}</button>)}</nav>
      <div className="studio-user"><div>{session.user.email?.slice(0, 1).toUpperCase()}</div><span><b>Owner</b><small>{session.user.email}</small></span><button aria-label="Sign out" onClick={() => supabase?.auth.signOut()}><LogOut /></button></div>
    </aside>
    <main className="studio-main">
      <header><button className="studio-menu" onClick={() => setMobileNav(true)}><Menu /></button><div><span>TWIN TECH-SUDO / STUDIO</span><h1>{nav.find(item => item.id === tab)?.label}</h1></div><a href="/" target="_blank">View site <Eye /></a></header>
      {notice && <div className="studio-notice"><CheckCircle2 />{notice}</div>}
      {tab === 'overview' && <Overview records={records} enquiries={enquiryCount} releases={releaseCount} setTab={setTab} />}
      {kindForTab[tab] && <ContentEditor items={filtered} onAdd={addRecord} onSave={saveRecord} onDelete={removeRecord} onPublish={publish} />}
      {tab === 'media' && <MediaPanel flash={flash} />}
      {tab === 'enquiries' && <EnquiryPanel />}
      {tab === 'seo' && <SeoPanel records={records} />}
      {tab === 'analytics' && <AnalyticsPanel />}
      {tab === 'releases' && <ReleasesPanel />}
      {tab === 'settings' && <SettingsPanel email={session.user.email ?? ''} flash={flash} />}
    </main>
  </div>
}

function Login() {
  const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [message, setMessage] = useState('')
  const submit = async (event: React.SyntheticEvent<HTMLFormElement>) => { event.preventDefault(); setMessage('Signing in…'); const { error } = await supabase!.auth.signInWithPassword({ email, password }); if (error) setMessage(error.message) }
  return <div className="studio-login"><div className="login-visual"><img src="/twin-tech-sudo-mark.png" alt="" /><span>CONTENT / PROJECTS / SEO / RELEASES</span><h1>Control the whole<br /><em>studio.</em></h1><div className="login-orbit"><i/><i/><b>TT</b></div></div><form onSubmit={submit}><span>// SECURE OWNER ACCESS</span><h2>Welcome back.</h2><p>Sign in with the owner account configured in Supabase.</p><label>Email address<input required type="email" value={email} onChange={e => setEmail(e.target.value)} /></label><label>Password<input required type="password" value={password} onChange={e => setPassword(e.target.value)} /></label>{message && <small>{message}</small>}<button>Open Studio ↗</button><a href="/">← Return to website</a></form></div>
}

function MfaChallenge({ onVerified }: { onVerified: () => void }) {
  const [factorId, setFactorId] = useState(''); const [code, setCode] = useState(''); const [message, setMessage] = useState('Loading authenticator…')
  useEffect(() => {
    supabase?.auth.mfa.listFactors().then(({ data, error }) => {
      const factor = data?.totp.find(item => item.status === 'verified')
      if (error || !factor) setMessage(error?.message ?? 'No verified authenticator was found.')
      else { setFactorId(factor.id); setMessage('') }
    })
  }, [])
  const verify = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault(); if (!factorId || !supabase) return
    setMessage('Verifying…')
    const { data: challenge, error: challengeError } = await supabase.auth.mfa.challenge({ factorId })
    if (challengeError) return setMessage(challengeError.message)
    const { error } = await supabase.auth.mfa.verify({ factorId, challengeId: challenge.id, code })
    if (error) return setMessage(error.message)
    onVerified()
  }
  return <div className="studio-login"><div className="login-visual"><img src="/twin-tech-sudo-mark.png" alt=""/><span>SECOND FACTOR / OWNER SECURITY</span><h1>One more<br/><em>check.</em></h1><div className="login-orbit"><i/><i/><b>2FA</b></div></div><form onSubmit={verify}><span>// AUTHENTICATOR REQUIRED</span><h2>Verify it’s you.</h2><p>Enter the six-digit code from your authenticator app.</p><label>Authentication code<input required inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} value={code} onChange={e => setCode(e.target.value.replace(/\D/g, ''))}/></label>{message && <small>{message}</small>}<button disabled={!factorId || code.length !== 6}>Verify and open Studio ↗</button><button type="button" className="text-button" onClick={() => supabase?.auth.signOut()}>Sign out</button></form></div>
}

function SetupState() { return <div className="studio-setup"><img src="/twin-tech-sudo-mark.png" alt="" /><span>// STUDIO SETUP REQUIRED</span><h1>Secure dashboard foundation <em>ready.</em></h1><p>Add a free Supabase project and configure <code>PUBLIC_SUPABASE_URL</code> and <code>PUBLIC_SUPABASE_PUBLISHABLE_KEY</code>. Then run the included database migration and create the owner account with MFA.</p><div><ShieldCheck /><span><b>No public fallback PIN</b><small>The dashboard stays locked until real authentication exists.</small></span></div><a href="/">← Return to website</a></div> }

function Overview({ records, enquiries, releases, setTab }: { records: StudioRecord[]; enquiries: number; releases: number; setTab: (tab: Tab) => void }) {
  const published = records.filter(item => item.status === 'published').length
  return <div className="studio-content"><section className="studio-welcome"><div><span>// COMMAND CENTRE</span><h2>Your business website,<br /><em>under control.</em></h2><p>Draft content, review search visibility and publish traceable releases from one workspace.</p></div><div className="status-ring"><i></i><strong>LIVE</strong><span>GitHub Pages</span></div></section><div className="studio-stats"><article><FileText/><strong>{records.length}</strong><span>Content records</span><small>{published} published</small></article><article><Inbox/><strong>{enquiries}</strong><span>Enquiries</span><small>All time</small></article><article><Rocket/><strong>{releases}</strong><span>Releases</span><small>Version history</small></article><article><Activity/><strong>SEO</strong><span>Search ready</span><small>Static HTML</small></article></div><section className="studio-panel"><div><span>// QUICK ACTIONS</span><h3>Keep the site moving.</h3></div><div className="quick-grid"><button onClick={() => setTab('projects')}><Plus/><span><b>Add a project</b><small>Build the next case study</small></span></button><button onClick={() => setTab('insights')}><BookOpen/><span><b>Write an insight</b><small>Grow search authority</small></span></button><button onClick={() => setTab('seo')}><Search/><span><b>Review SEO</b><small>Find missing metadata</small></span></button></div></section></div>
}

function ContentEditor({ items, onAdd, onSave, onDelete, onPublish }: { items: StudioRecord[]; onAdd: () => void; onSave: (x: StudioRecord) => void; onDelete: (id: string) => void; onPublish: (x: StudioRecord) => void }) {
  return <div className="studio-content"><div className="studio-toolbar"><div><p>{items.length} content record{items.length === 1 ? '' : 's'} · drafts remain private until published.</p></div><button onClick={onAdd}><Plus/> New item</button></div><div className="record-list">{items.length === 0 && <div className="empty-records"><FileText/><h3>No dashboard records yet</h3><p>The shipped website content remains live. Create a record here to start the managed draft workflow.</p><button onClick={onAdd}>Create first item</button></div>}{items.map(item => <RecordEditor key={item.id} record={item} onSave={onSave} onDelete={onDelete} onPublish={onPublish} />)}</div></div>
}

function RecordEditor({ record, onSave, onDelete, onPublish }: { record: StudioRecord; onSave: (x: StudioRecord) => void; onDelete: (id: string) => void; onPublish: (x: StudioRecord) => void }) {
  const [draft, setDraft] = useState(record); const [open, setOpen] = useState(false)
  return <article className="studio-record"><button className="record-summary" onClick={() => setOpen(!open)}><span className={`record-status ${draft.status}`}>{draft.status}</span><div><h3>{draft.title}</h3><p>/{draft.slug}</p></div><small>{new Date(draft.updated_at).toLocaleDateString('en-GB')}</small><b>{open ? '−' : '+'}</b></button>{open && <div className="record-editor"><div className="editor-fields"><label>Title<input value={draft.title} onChange={e => setDraft({ ...draft, title: e.target.value })} /></label><label>URL slug<input value={draft.slug} onChange={e => setDraft({ ...draft, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-') })} /></label><label className="full">Summary / content<textarea rows={6} value={String(draft.data.summary ?? draft.data.body ?? '')} onChange={e => setDraft({ ...draft, data: { ...draft.data, summary: e.target.value } })} /></label><label>SEO title<input value={String(draft.data.seo_title ?? '')} onChange={e => setDraft({ ...draft, data: { ...draft.data, seo_title: e.target.value } })} /></label><label>Meta description<input value={String(draft.data.meta_description ?? '')} onChange={e => setDraft({ ...draft, data: { ...draft.data, meta_description: e.target.value } })} /></label></div><div className="record-actions"><button className="danger" onClick={() => onDelete(draft.id)}><Trash2/>Delete</button><button onClick={() => onSave(draft)}>Save draft</button><button className="publish" onClick={() => onPublish(draft)}><Rocket/>Publish</button></div></div>}</article>
}

function MediaPanel({ flash }: { flash: (x: string) => void }) { const upload = async (files: FileList | null) => { if (!files?.[0] || !supabase) return; const file = files[0]; const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '-')}`; const { error } = await supabase.storage.from('media').upload(path, file); flash(error ? error.message : 'Media uploaded') }; return <SimplePanel icon={<Image/>} title="Media library" copy="Upload project images, logos and article artwork to the managed media bucket."><label className="upload-zone"><Image/><b>Choose an image to upload</b><small>PNG, JPG, WebP or SVG · optimise large files before upload</small><input type="file" accept="image/*" onChange={e => upload(e.target.files)} /></label></SimplePanel> }
function EnquiryPanel() { const [items, setItems] = useState<Record<string, string>[]>([]); useEffect(() => { supabase?.from('enquiries').select('*').order('created_at', { ascending: false }).then(({ data }) => setItems((data ?? []) as Record<string,string>[])) }, []); return <SimplePanel icon={<Inbox/>} title="Enquiries" copy="Leads submitted through the protected enquiry endpoint appear here.">{items.length ? items.map((item, i) => <div className="enquiry-row" key={String(item.id ?? i)}><b>{item.name}</b><span>{item.email}</span><p>{item.message}</p></div>) : <div className="empty-inline">No enquiries yet.</div>}</SimplePanel> }
function SeoPanel({ records }: { records: StudioRecord[] }) { const incomplete = records.filter(item => !item.data.seo_title || !item.data.meta_description); return <SimplePanel icon={<Search/>} title="SEO centre" copy="Technical foundations ship automatically. This view flags managed content that needs search metadata."><div className="seo-score"><strong>{records.length ? Math.round(((records.length - incomplete.length) / records.length) * 100) : 100}</strong><span>/100<br/>metadata coverage</span></div><div className="check-list"><p><CheckCircle2/> Static crawlable HTML</p><p><CheckCircle2/> Canonical URLs and sitemap</p><p><CheckCircle2/> Structured service and article data</p><p className={incomplete.length ? 'warning' : ''}><ShieldCheck/> {incomplete.length} managed record(s) missing metadata</p></div></SimplePanel> }
function AnalyticsPanel() { return <SimplePanel icon={<BarChart3/>} title="Analytics" copy="GA4 and Search Console summaries will populate after their IDs are added to repository secrets and the scheduled import runs."><div className="analytics-placeholder"><BarChart3/><div><b>Connect measurement after consent setup</b><p>The public site does not load non-essential analytics before consent.</p></div></div></SimplePanel> }
function ReleasesPanel() { const [items, setItems] = useState<Record<string,string>[]>([]); useEffect(() => { supabase?.from('releases').select('*').order('created_at', { ascending: false }).then(({ data }) => setItems((data ?? []) as Record<string,string>[])) }, []); return <SimplePanel icon={<Rocket/>} title="Releases" copy="Every publish creates an immutable snapshot and deployment reference for safe rollback.">{items.length ? items.map((item, i) => <div className="release-row" key={String(item.id ?? i)}><Rocket/><div><b>{item.label || 'Website release'}</b><small>{new Date(item.created_at).toLocaleString('en-GB')} · {item.status}</small></div></div>) : <div className="empty-inline">The first published change will create release 001.</div>}</SimplePanel> }
function SettingsPanel({ email, flash }: { email: string; flash: (x:string) => void }) {
  const [enrollment, setEnrollment] = useState<{ id: string; qr: string } | null>(null); const [code, setCode] = useState('')
  const enable = async () => { const { data, error } = await supabase!.auth.mfa.enroll({ factorType: 'totp', friendlyName: 'Twin Studio' }); if (error) return flash(error.message); setEnrollment({ id: data.id, qr: data.totp.qr_code }) }
  const verify = async () => {
    if (!enrollment || !supabase || code.length !== 6) return
    const { data: challenge, error: challengeError } = await supabase.auth.mfa.challenge({ factorId: enrollment.id })
    if (challengeError) return flash(challengeError.message)
    const { error } = await supabase.auth.mfa.verify({ factorId: enrollment.id, challengeId: challenge.id, code })
    if (error) return flash(error.message)
    setEnrollment(null); setCode(''); flash('Authenticator verified and MFA enabled')
  }
  return <SimplePanel icon={<Settings/>} title="Security & settings" copy="Owner access is protected by Supabase Auth and row-level security."><div className="settings-lines"><div><span>Signed in as</span><b>{email}</b></div><div><span>Multi-factor authentication</span><button onClick={enable}>Set up authenticator</button></div>{enrollment && <div className="mfa-setup"><img src={enrollment.qr} alt="Authenticator QR code"/><div><p>Scan this QR code with Google Authenticator, Microsoft Authenticator, Authy or another TOTP app.</p><label>Six-digit code<input inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} value={code} onChange={e => setCode(e.target.value.replace(/\D/g, ''))}/></label><button onClick={verify} disabled={code.length !== 6}>Verify and enable MFA</button></div></div>}</div></SimplePanel>
}
function SimplePanel({ icon, title, copy, children }: { icon: React.ReactNode; title: string; copy: string; children?: React.ReactNode }) { return <div className="studio-content"><section className="studio-panel simple-panel"><header>{icon}<div><span>// TWIN STUDIO</span><h2>{title}</h2><p>{copy}</p></div></header>{children}</section></div> }
