import { useRef, useState } from 'react'
import { Download, ExternalLink, Eye, FolderKanban, LayoutDashboard, LogOut, MessageSquareQuote, Plus, RotateCcw, Save, Settings, Trash2, Upload, X } from 'lucide-react'
import { resetContent, saveContent } from './content'
import type { Project, SiteContent, Testimonial } from './types'

type Props = { content: SiteContent; onClose: () => void }
type Tab = 'overview' | 'projects' | 'testimonials' | 'settings'

const makeId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`

export default function Admin({ content: initial, onClose }: Props) {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem('twin-studio-unlocked') === 'yes')
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const [tab, setTab] = useState<Tab>('overview')
  const [draft, setDraft] = useState<SiteContent>(initial)
  const [saved, setSaved] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const unlock = (event: React.FormEvent) => {
    event.preventDefault()
    const expected = import.meta.env.VITE_STUDIO_PIN || 'sudo2026'
    if (pin === expected) {
      sessionStorage.setItem('twin-studio-unlocked', 'yes')
      setUnlocked(true)
    } else setError('That PIN did not match.')
  }

  const persist = () => {
    saveContent(draft)
    setSaved(true)
    setTimeout(() => setSaved(false), 1800)
  }

  const updateProject = (id: string, change: Partial<Project>) => setDraft(current => ({ ...current, projects: current.projects.map(p => p.id === id ? { ...p, ...change } : p) }))
  const updateTestimonial = (id: string, change: Partial<Testimonial>) => setDraft(current => ({ ...current, testimonials: current.testimonials.map(t => t.id === id ? { ...t, ...change } : t) }))
  const download = () => {
    const blob = new Blob([JSON.stringify(draft, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'twin-tech-sudo-content.json'; anchor.click(); URL.revokeObjectURL(url)
  }
  const upload = (file?: File) => {
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => { try { setDraft(JSON.parse(String(reader.result))); setError('') } catch { setError('That file is not valid site content.') } }
    reader.readAsText(file)
  }

  if (!unlocked) return <div className="admin-overlay"><div className="login-panel">
    <button className="close-admin" onClick={onClose}><X /></button>
    <img src="/twin-tech-sudo-mark.png" alt="Twin Tech-sudo" />
    <span className="eyebrow">OWNER ACCESS</span><h2>Enter the Studio.</h2><p>Manage portfolio projects, testimonials and contact details.</p>
    <form onSubmit={unlock}><label>Studio PIN<input autoFocus type="password" value={pin} onChange={e => setPin(e.target.value)} placeholder="••••••••" /></label>{error && <small>{error}</small>}<button type="submit">Open dashboard <ExternalLink size={17} /></button></form>
    <p className="login-hint">First run PIN: <code>sudo2026</code>. Change it with <code>VITE_STUDIO_PIN</code> before publishing.</p>
  </div></div>

  return <div className="admin-overlay admin-full">
    <aside className="admin-sidebar">
      <div className="brand"><img src="/twin-tech-sudo-mark.png" alt="" /><span>Twin Studio</span></div>
      <nav>
        <button className={tab === 'overview' ? 'active' : ''} onClick={() => setTab('overview')}><LayoutDashboard /> Overview</button>
        <button className={tab === 'projects' ? 'active' : ''} onClick={() => setTab('projects')}><FolderKanban /> Projects <b>{draft.projects.length}</b></button>
        <button className={tab === 'testimonials' ? 'active' : ''} onClick={() => setTab('testimonials')}><MessageSquareQuote /> Testimonials <b>{draft.testimonials.length}</b></button>
        <button className={tab === 'settings' ? 'active' : ''} onClick={() => setTab('settings')}><Settings /> Site settings</button>
      </nav>
      <div className="admin-side-bottom"><button onClick={onClose}><Eye /> View live site</button><button onClick={() => { sessionStorage.removeItem('twin-studio-unlocked'); setUnlocked(false) }}><LogOut /> Lock Studio</button></div>
    </aside>
    <main className="admin-main">
      <header><div><span className="eyebrow">TWIN TECH-SUDO / STUDIO</span><h1>{tab[0].toUpperCase() + tab.slice(1)}</h1></div><div className="admin-actions"><button onClick={onClose}><Eye /> Preview</button><button className="save-button" onClick={persist}><Save /> {saved ? 'Saved' : 'Save changes'}</button></div></header>

      {tab === 'overview' && <div className="admin-content">
        <div className="stat-grid"><article><FolderKanban /><strong>{draft.projects.length}</strong><span>Published projects</span></article><article><MessageSquareQuote /><strong>{draft.testimonials.length}</strong><span>Testimonials</span></article><article><Eye /><strong>Live</strong><span>Site status</span></article></div>
        <section className="admin-card"><div><span className="eyebrow">CONTENT WORKFLOW</span><h2>Your site, without the code.</h2><p>Add and edit work or social proof here, save it, then preview the public site. Content is stored in this browser; use export/import to move or back it up.</p></div><div className="quick-actions"><button onClick={() => setTab('projects')}><Plus /> Add a project</button><button onClick={download}><Download /> Export content</button><button onClick={() => fileRef.current?.click()}><Upload /> Import content</button></div></section>
      </div>}

      {tab === 'projects' && <div className="admin-content"><div className="content-toolbar"><p>Projects appear in this order on the public site.</p><button onClick={() => setDraft(c => ({ ...c, projects: [...c.projects, { id: makeId(), name: 'New project', category: 'Digital product', summary: 'Describe the project, the problem and what made the build matter.', outcome: 'A clear, measurable outcome', tags: ['Web app'], featured: true, colour: '#c7ff17' }] }))}><Plus /> New project</button></div>
        <div className="editor-list">{draft.projects.map(project => <details open className="editor-item" key={project.id}><summary><span className="colour-dot" style={{ background: project.colour }} /><div><strong>{project.name}</strong><small>{project.category}</small></div><button onClick={e => { e.preventDefault(); setDraft(c => ({ ...c, projects: c.projects.filter(p => p.id !== project.id) })) }}><Trash2 /></button></summary><div className="form-grid">
          <label>Project name<input value={project.name} onChange={e => updateProject(project.id, { name: e.target.value })} /></label><label>Category<input value={project.category} onChange={e => updateProject(project.id, { category: e.target.value })} /></label><label className="wide">Summary<textarea value={project.summary} onChange={e => updateProject(project.id, { summary: e.target.value })} /></label><label>Outcome<input value={project.outcome} onChange={e => updateProject(project.id, { outcome: e.target.value })} /></label><label>Project link<input type="url" value={project.url || ''} placeholder="https://" onChange={e => updateProject(project.id, { url: e.target.value })} /></label><label>Tags (comma separated)<input value={project.tags.join(', ')} onChange={e => updateProject(project.id, { tags: e.target.value.split(',').map(x => x.trim()).filter(Boolean) })} /></label><label>Accent colour<input type="color" value={project.colour} onChange={e => updateProject(project.id, { colour: e.target.value })} /></label>
        </div></details>)}</div>
      </div>}

      {tab === 'testimonials' && <div className="admin-content"><div className="content-toolbar"><p>The first testimonial is featured on the home page.</p><button onClick={() => setDraft(c => ({ ...c, testimonials: [...c.testimonials, { id: makeId(), quote: 'Add the client quote here.', name: 'Client name', role: 'Role · Company' }] }))}><Plus /> New testimonial</button></div><div className="editor-list">{draft.testimonials.map(item => <div className="editor-item testimonial-editor" key={item.id}><div className="form-grid"><label className="wide">Quote<textarea value={item.quote} onChange={e => updateTestimonial(item.id, { quote: e.target.value })} /></label><label>Name<input value={item.name} onChange={e => updateTestimonial(item.id, { name: e.target.value })} /></label><label>Role / company<input value={item.role} onChange={e => updateTestimonial(item.id, { role: e.target.value })} /></label></div><button className="delete-row" onClick={() => setDraft(c => ({ ...c, testimonials: c.testimonials.filter(t => t.id !== item.id) }))}><Trash2 /> Delete</button></div>)}</div></div>}

      {tab === 'settings' && <div className="admin-content"><section className="admin-card settings-card"><div><span className="eyebrow">PUBLIC DETAILS</span><h2>Contact & availability</h2><p>These details appear in the call-to-action and footer areas.</p></div><div className="form-grid"><label>Email<input type="email" value={draft.settings.email} onChange={e => setDraft(c => ({ ...c, settings: { ...c.settings, email: e.target.value } }))} /></label><label>Phone (optional)<input value={draft.settings.phone} onChange={e => setDraft(c => ({ ...c, settings: { ...c.settings, phone: e.target.value } }))} /></label><label>Availability message<input value={draft.settings.availability} onChange={e => setDraft(c => ({ ...c, settings: { ...c.settings, availability: e.target.value } }))} /></label><label>Location<input value={draft.settings.location} onChange={e => setDraft(c => ({ ...c, settings: { ...c.settings, location: e.target.value } }))} /></label></div></section><section className="danger-zone"><div><h3>Reset demo content</h3><p>Remove all browser edits and restore the original projects.</p></div><button onClick={() => { if (confirm('Reset all local content?')) { resetContent(); location.reload() } }}><RotateCcw /> Reset</button></section></div>}
      <input ref={fileRef} hidden type="file" accept="application/json" onChange={e => upload(e.target.files?.[0])} />
    </main>
  </div>
}
