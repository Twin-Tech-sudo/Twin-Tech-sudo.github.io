import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  Blocks,
  Check,
  ChevronRight,
  Code2,
  Database,
  Laptop,
  Menu,
  MonitorSmartphone,
  Smartphone,
  Sparkles,
  Terminal,
  X,
  Zap,
} from 'lucide-react'
import { loadContent } from './content'

const services = [
  { icon: Blocks, number: '01', title: 'Custom software', text: 'Purpose-built systems, SaaS products and internal tools engineered around how your business actually works.' },
  { icon: Code2, number: '02', title: 'Web applications', text: 'Fast, scalable web apps that turn complicated workflows into simple, intuitive experiences.' },
  { icon: Smartphone, number: '03', title: 'Mobile apps', text: 'Polished iOS and Android experiences designed for real users, real devices and long-term growth.' },
  { icon: Laptop, number: '04', title: 'Desktop apps', text: 'Reliable Windows and cross-platform desktop software, from focused utilities to full operational platforms.' },
  { icon: MonitorSmartphone, number: '05', title: 'Websites & commerce', text: 'High-performing websites and storefronts with strong creative direction, SEO foundations and measurable intent.' },
  { icon: Database, number: '06', title: 'Automation & AI', text: 'Practical AI integrations and workflow automation that remove repetition and create a genuine operating advantage.' },
]

const serviceDetails = [
  {
    eyebrow: 'SYSTEMS BUILT AROUND YOU',
    headline: 'Turn the way you work into a competitive advantage.',
    intro: 'When off-the-shelf software forces your team into workarounds, we design the system around the business—not the other way around. The result is one focused platform that makes complex operations feel controlled.',
    capabilities: ['SaaS product development', 'Internal operations platforms', 'Customer and partner portals', 'API and system integrations', 'Role-based access and workflows', 'Reporting and data intelligence'],
    outcomes: ['Replace spreadsheets and disconnected tools', 'Reduce manual administration and errors', 'Create intellectual property you own', 'Build a platform that scales with the business'],
    example: 'Imagine enquiries, delivery, documents and reporting currently living in four different tools. We can connect that workflow into one secure product with a single source of truth.',
  },
  {
    eyebrow: 'POWERFUL IN ANY BROWSER',
    headline: 'Make difficult work feel remarkably simple.',
    intro: 'We create browser-based products that are fast, clear and dependable—from customer-facing SaaS to complex operational dashboards. Every screen is designed around the next decision a user needs to make.',
    capabilities: ['Progressive web applications', 'SaaS dashboards and workspaces', 'Real-time collaborative tools', 'Secure customer portals', 'Data visualisation', 'Subscription and account systems'],
    outcomes: ['Reach users without an installation', 'Work securely from any device', 'Turn complex data into clear actions', 'Launch quickly and improve continuously'],
    example: 'A scattered approval process can become a guided workspace where the right people see the right information, make decisions and leave a complete audit trail.',
  },
  {
    eyebrow: 'PRODUCTS IN THEIR POCKET',
    headline: 'Create an app people choose to keep using.',
    intro: 'We design mobile products for the reality of small screens, unreliable connections and users on the move. The experience feels native, focused and effortless across iOS and Android.',
    capabilities: ['iOS and Android applications', 'Cross-platform product builds', 'Offline-first field applications', 'Push notifications and live updates', 'Camera, location and device features', 'App Store launch support'],
    outcomes: ['Put critical workflows in the field', 'Increase customer engagement and retention', 'Capture accurate data at the source', 'Maintain one coherent product ecosystem'],
    example: 'A field team can capture evidence, complete checks and sync progress from site—even without signal—while the office sees updates as soon as connectivity returns.',
  },
  {
    eyebrow: 'SERIOUS SOFTWARE, INSTALLED',
    headline: 'Bring demanding workflows closer to the machine.',
    intro: 'For products that need deeper file access, offline resilience, specialist hardware or heavyweight processing, we build polished desktop applications that feel at home on the operating system.',
    capabilities: ['Windows desktop applications', 'Cross-platform desktop builds', 'Offline and local-first software', 'Document and file processing', 'Background jobs and automation', 'Installers, updates and packaging'],
    outcomes: ['Handle large or sensitive files locally', 'Work reliably without internet access', 'Integrate with existing desktop workflows', 'Deliver controlled, repeatable deployments'],
    example: 'A document-heavy workflow can run locally for speed and privacy, package results automatically and synchronise only the approved information to a central workspace.',
  },
  {
    eyebrow: 'ATTENTION INTO ACTION',
    headline: 'Build a website that earns its place in the business.',
    intro: 'We combine distinctive creative direction with performance, search visibility and a frictionless route to action. From authority-building studio sites to live product catalogues, every element has a commercial purpose.',
    capabilities: ['Conversion-focused websites', 'E-commerce storefronts', 'Custom product catalogues', 'Payments and checkout', 'Content management systems', 'Technical SEO foundations'],
    outcomes: ['Make a stronger first impression', 'Turn qualified traffic into enquiries or sales', 'Give your team control of content', 'Create a fast, measurable acquisition channel'],
    example: 'A static brochure can become a living sales platform with focused landing pages, proof-rich case studies, simple publishing and clear insight into what converts.',
  },
  {
    eyebrow: 'AUTOMATION WITH A JOB TO DO',
    headline: 'Use AI where it creates measurable leverage.',
    intro: 'We apply automation and AI to specific operational bottlenecks—not as a novelty. The goal is a governed workflow that saves time, improves consistency and keeps people in control of important decisions.',
    capabilities: ['Document and data extraction', 'AI-assisted review workflows', 'Business process automation', 'Knowledge search and copilots', 'Classification and routing', 'Human-in-the-loop quality controls'],
    outcomes: ['Remove repetitive manual handling', 'Process information at greater scale', 'Surface risk and exceptions earlier', 'Keep evidence behind automated decisions'],
    example: 'Hundreds of incoming documents can be classified, structured and checked automatically, with only uncertain or high-risk items routed to a person for review.',
  },
]

const approach = [
  ['01', 'Find the sharp edge', 'We define the business problem, the user and the smallest version worth building.'],
  ['02', 'Shape the system', 'Product thinking, interface design and technical architecture move forward together.'],
  ['03', 'Build in the open', 'Short delivery cycles, visible progress and decisions explained without the fog.'],
  ['04', 'Launch. Learn. Improve.', 'A controlled release, real feedback and a clear route from first version to lasting product.'],
]

const processDetails = [
  {
    label: 'DISCOVERY & DIRECTION',
    headline: 'Start with the problem worth solving—not a pile of features.',
    intro: 'We turn the early uncertainty into a shared product direction. That means understanding the people, pressures and commercial opportunity before committing time and budget to a build.',
    activities: ['Stakeholder and user discovery', 'Current workflow mapping', 'Competitor and market review', 'Risk and assumption mapping', 'Feature prioritisation', 'Success-metric definition'],
    outputs: ['Focused product brief', 'Prioritised opportunity map', 'Initial scope and delivery options', 'Clear recommendation for what to build first'],
    involvement: 'You bring the operational knowledge. We lead focused working sessions, challenge assumptions and turn the strongest evidence into a product direction.',
    duration: 'Typically 3–10 working days',
  },
  {
    label: 'PRODUCT & SYSTEM DESIGN',
    headline: 'Design the experience and the engine as one coherent system.',
    intro: 'The interface, data model and technical architecture are shaped together. By testing the important journeys before full development, we expose expensive mistakes while they are still cheap to change.',
    activities: ['User journeys and information architecture', 'Wireframes and interactive prototypes', 'Visual product direction', 'Data and integration design', 'Technical architecture', 'Security and scalability planning'],
    outputs: ['Testable product prototype', 'Reusable interface system', 'Architecture and data blueprint', 'Build-ready delivery backlog'],
    involvement: 'You review working prototypes rather than abstract documents, so feedback is concrete and decisions stay close to the real product.',
    duration: 'Typically 1–3 weeks',
  },
  {
    label: 'ITERATIVE DEVELOPMENT',
    headline: 'See the real product take shape in short, visible cycles.',
    intro: 'We build the highest-value product slice first, then expand it through working releases. Progress stays inspectable, priorities can respond to what we learn and quality is engineered throughout.',
    activities: ['Frontend and backend engineering', 'Database and API implementation', 'Third-party service integration', 'Automated testing and quality checks', 'Security and performance work', 'Regular working-product reviews'],
    outputs: ['Production-quality application', 'Documented source code', 'Test and release evidence', 'Deployment and operating setup'],
    involvement: 'You see working software throughout the build, with concise decisions and demonstrations instead of long periods of silence.',
    duration: 'Delivered in short 1–2 week cycles',
  },
  {
    label: 'LAUNCH & EVOLUTION',
    headline: 'Launch deliberately, learn from reality and keep improving.',
    intro: 'A release is the beginning of product evidence, not the end of the engagement. We prepare the rollout, observe how the product performs and turn real usage into the next set of improvements.',
    activities: ['Production deployment', 'Data migration and launch planning', 'Monitoring and analytics', 'Team onboarding and documentation', 'Post-launch support', 'Roadmap and optimisation cycles'],
    outputs: ['Controlled production release', 'Operational documentation', 'Performance and usage visibility', 'Evidence-led improvement roadmap'],
    involvement: 'We stay close through release, resolve early friction and help your team build confidence operating the product.',
    duration: 'Launch support plus ongoing options',
  },
]

function ServiceGraphic({ index }: { index: number }) {
  if (index === 0) return <div className="service-graphic system-graphic" aria-hidden="true">
    <div className="system-core"><img src="/twin-tech-sudo-mark.png" alt="" /><span>CORE</span></div>
    <div className="system-node node-a"><i />INPUT</div><div className="system-node node-b"><i />LOGIC</div><div className="system-node node-c"><i />DATA</div><div className="system-node node-d"><i />OUTPUT</div>
    <svg viewBox="0 0 400 210" preserveAspectRatio="none"><path d="M76 40 C150 40 120 103 198 103"/><path d="M76 170 C150 170 120 108 198 108"/><path d="M325 40 C250 40 280 103 202 103"/><path d="M325 170 C250 170 280 108 202 108"/></svg>
    <b className="system-status"><i /> SYSTEM ONLINE</b>
  </div>
  if (index === 1) return <div className="service-graphic browser-graphic" aria-hidden="true">
    <div className="mini-browser"><div className="mini-chrome"><i/><i/><i/><span>app.twin</span></div><div className="mini-layout"><aside><b/><i/><i/><i/></aside><main><small>LIVE OVERVIEW</small><strong>2.4k</strong><div className="mini-bars"><i/><i/><i/><i/><i/></div></main></div></div>
    <span className="live-pill"><i/> LIVE</span>
  </div>
  if (index === 2) return <div className="service-graphic mobile-graphic" aria-hidden="true">
    <div className="phone phone-back"><i/><span/><span/><b/></div><div className="phone phone-front"><i/><small>HELLO</small><strong>Build<br/>anywhere.</strong><button>→</button></div>
    <div className="mobile-orbit"><span>IOS</span><i>✦</i><span>ANDROID</span></div>
  </div>
  if (index === 3) return <div className="service-graphic desktop-graphic" aria-hidden="true">
    <div className="desktop-window window-back"><span/><span/><span/></div><div className="desktop-window window-mid"><span/><span/><span/></div><div className="desktop-window window-front"><header><i/><i/><i/><small>WORKSPACE.EXE</small></header><main><aside/><div><b/><b/><b/></div></main></div>
    <div className="desktop-cursor"><ArrowRight/></div>
  </div>
  if (index === 4) return <div className="service-graphic commerce-graphic" aria-hidden="true">
    <div className="product-card"><span>NEW</span><div className="product-shape"><i/><i/></div><small>DIGITAL PRODUCT</small><strong>£128</strong></div>
    <div className="cart-bubble"><b>01</b><span>Added to cart</span><Check/></div>
    <div className="commerce-line"><i/><i/><i/></div>
  </div>
  return <div className="service-graphic ai-graphic" aria-hidden="true">
    <div className="ai-ring ring-one"/><div className="ai-ring ring-two"/><div className="ai-core"><Sparkles/><span>AI</span></div>
    <div className="ai-chip chip-one">INPUT</div><div className="ai-chip chip-two">LEARN</div><div className="ai-chip chip-three">ACTION</div>
    <div className="data-stream">010110&nbsp; 100101&nbsp; 011001&nbsp; 110100</div>
  </div>
}

function ProcessGraphic({ index }: { index: number }) {
  if (index === 0) return <div className="process-graphic discovery-graphic" aria-hidden="true">
    <div className="discovery-radar"><i/><i/><i/><span/></div><div className="signal signal-a">USER</div><div className="signal signal-b">VALUE</div><div className="signal signal-c">NEED</div><b><Sparkles/> SIGNAL FOUND</b>
  </div>
  if (index === 1) return <div className="process-graphic blueprint-graphic" aria-hidden="true">
    <div className="blueprint-window"><header><i/><i/><i/><span>PRODUCT.SYSTEM</span></header><main><aside><b/><b/><b/></aside><div className="blueprint-canvas"><span className="bp-block bp-one"/><span className="bp-block bp-two"/><span className="bp-block bp-three"/><svg viewBox="0 0 220 110"><path d="M48 28h42v50h45m0 0h37V34"/></svg></div></main></div><div className="measure-line"><i/><span>240 PX</span><i/></div>
  </div>
  if (index === 2) return <div className="process-graphic build-graphic" aria-hidden="true">
    <div className="code-window"><div><span>twin@studio</span><b>~/build</b></div><p><i>$</i> sudo make product</p><p><i>✓</i> interface compiled</p><p><i>✓</i> systems connected</p><p className="code-current"><i>›</i> shipping iteration_04<span>_</span></p></div><div className="build-progress"><span/><b>84%</b></div>
  </div>
  return <div className="process-graphic launch-graphic" aria-hidden="true">
    <div className="launch-orbit orbit-a"/><div className="launch-orbit orbit-b"/><div className="launch-core"><ArrowRight/><span>LIVE</span></div><div className="launch-metric metric-a"><span>USERS</span><b>↑ 42%</b></div><div className="launch-metric metric-b"><span>UPTIME</span><b>99.9</b></div><div className="launch-ping ping-a"/><div className="launch-ping ping-b"/>
  </div>
}

function useContent() {
  const [content, setContent] = useState(loadContent)
  useEffect(() => {
    const refresh = () => setContent(loadContent())
    window.addEventListener('twin-content-updated', refresh)
    return () => window.removeEventListener('twin-content-updated', refresh)
  }, [])
  return content
}

function App() {
  const content = useContent()
  const heroRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [selectedProcess, setSelectedProcess] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const year = new Date().getFullYear()

  useEffect(() => {
    if (selectedService === null) return
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelectedService(null) }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', close)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', close)
    }
  }, [selectedService])

  useEffect(() => {
    if (selectedProcess === null) return
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelectedProcess(null) }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', close)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', close)
    }
  }, [selectedProcess])

  useEffect(() => {
    const sectionIds = ['top', 'services', 'work', 'process', 'about', 'contact']
    const updateNavigation = () => {
      setScrolled(window.scrollY > 48)
      const marker = window.scrollY + window.innerHeight * 0.34
      let current = 'top'
      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= marker) current = id
      }
      setActiveSection(current)
    }
    updateNavigation()
    window.addEventListener('scroll', updateNavigation, { passive: true })
    window.addEventListener('resize', updateNavigation)
    return () => {
      window.removeEventListener('scroll', updateNavigation)
      window.removeEventListener('resize', updateNavigation)
    }
  }, [])

  const mailto = useMemo(() => `mailto:${content.settings.email}?subject=Project enquiry for Twin Tech-sudo`, [content.settings.email])

  const moveHero = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width - 0.5) * 18}px`)
    event.currentTarget.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height - 0.5) * 18}px`)
  }

  return (
    <>
      <div className="site-shell">
        <header className={`nav-wrap ${scrolled ? 'nav-scrolled' : ''}`}>
          <a className="brand" href="#top" aria-label="Twin Tech-sudo home">
            <img src="/twin-tech-sudo-mark.png" alt="" />
            <span>Twin Tech<span>-sudo</span></span>
          </a>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
            <a className={activeSection === 'services' ? 'active' : ''} href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a className={activeSection === 'work' ? 'active' : ''} href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a className={activeSection === 'process' ? 'active' : ''} href="#process" onClick={() => setMenuOpen(false)}>Process</a>
            <a className={activeSection === 'about' ? 'active' : ''} href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Start a project <ArrowDownRight size={16} /></a>
          </nav>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </header>

        <nav className={`page-rail ${scrolled ? 'visible' : ''}`} aria-label="Page sections">
          <span className="rail-line" />
          {[
            ['top', 'Top'], ['services', 'Services'], ['work', 'Projects'], ['process', 'Process'], ['about', 'About'], ['contact', 'Contact'],
          ].map(([id, label], index) => <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`} aria-label={`Go to ${label}`}><b>0{index}</b><i /><span>{label}</span></a>)}
        </nav>

        <a className={`back-to-top ${scrolled ? 'visible' : ''}`} href="#top" aria-label="Back to top"><ArrowRight /><span>Back to top</span></a>

        <main id="top">
          <section className="hero section-pad" ref={heroRef} onPointerMove={moveHero}>
            <div className="hero-grid" aria-hidden="true" />
            <div className="hero-art" aria-hidden="true">
              <img src="/twin-tech-hero.png" alt="" />
              <div className="art-coordinate coordinate-one"><b>01</b><span>THINK</span></div>
              <div className="art-coordinate coordinate-two"><b>02</b><span>MAKE</span></div>
              <div className="art-coordinate coordinate-three"><b>03</b><span>SHIP</span></div>
              <div className="art-badge"><Terminal size={16} /><span>sudo make<br /><b>something real</b></span></div>
            </div>
            <div className="hero-signal"><span /> Independent software development studio · UK</div>
            <h1><span>Digital products,</span><br /><em>built different.</em></h1>
            <div className="hero-bottom">
              <p>We design and build custom software, web experiences and apps that solve the hard problems — and feel effortless to use.</p>
              <div className="hero-actions"><a href="#contact" className="hero-primary">Start a project <ArrowRight size={17} /></a><a href="#work" className="round-link" aria-label="View selected work"><ArrowDownRight size={25} /></a></div>
            </div>
            <div className="hero-marquee" aria-label="Our capabilities">
              <div><span>Custom software</span><i>✦</i><span>Web applications</span><i>✦</i><span>Mobile apps</span><i>✦</i><span>Desktop builds</span><i>✦</i><span>Digital products</span><i>✦</i></div>
            </div>
          </section>

          <section className="section-pad services" id="services">
            <div className="section-heading">
              <div><span className="eyebrow">// WHAT WE BUILD</span><h2>One studio.<br /><em>Every screen.</em></h2></div>
              <p>From the first line of strategy to the final production build, Twin Tech-sudo creates joined-up digital products without the agency sprawl.</p>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, number, title, text }, index) => (
                <article className={`service-card service-card-${index}`} key={title} role="button" tabIndex={0} aria-label={`Explore ${title}`} onClick={() => setSelectedService(index)} onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelectedService(index) } }}>
                  <div className="service-top"><span>{number}</span><Icon size={25} strokeWidth={1.7} /></div>
                  <ServiceGraphic index={index} />
                  <h3>{title}</h3><p>{text}</p><span className="service-explore">Explore capability <ArrowRight /></span><ChevronRight className="service-arrow" />
                </article>
              ))}
            </div>
            <div className="proof-strip">
              <div><strong>01</strong><span>Partner from idea<br />to production</span></div>
              <div><strong>06</strong><span>Connected digital<br />capabilities</span></div>
              <div><strong>100%</strong><span>Direct access to<br />the builder</span></div>
              <div className="proof-symbol"><Zap /><span>Less ceremony.<br />More momentum.</span></div>
            </div>
          </section>

          <section className="graphic-break" aria-label="Twin Tech-sudo design philosophy">
            <div className="graphic-break-mark"><img src="/twin-tech-sudo-mark.png" alt="" /></div>
            <div className="graphic-break-copy"><span>STRATEGY</span><i>/</i><span>DESIGN</span><i>/</i><span>CODE</span><i>/</i><span>LAUNCH</span></div>
            <p>One continuous line from<br />ambition to working product.</p>
          </section>

          <section className="work" id="work">
            <div className="section-pad">
              <div className="section-heading work-heading">
                <div><span className="eyebrow">// SELECTED WORK</span><h2>Built to do<br /><em>real work.</em></h2></div>
                <p>Products are judged by what they unlock. These are systems shaped around commercial outcomes, useful automation and confident user experience.</p>
              </div>
              <div className="project-list">
                {content.projects.map((project, index) => (
                  <article className="project" key={project.id} style={{ '--project-colour': project.colour } as React.CSSProperties}>
                    <div className="project-index">0{index + 1}</div>
                    <div className={`project-visual project-visual-${index % 2}`}>
                      <div className="window-chrome"><span /><span /><span /><b>{project.category}</b></div>
                      <div className="project-ui">
                        <div className="ui-side"><img src="/twin-tech-sudo-mark.png" alt="" /><i /><i /><i /></div>
                        <div className="ui-main"><small>PROJECT / {project.name.toUpperCase()}</small>{project.logo && <img className={`project-brand-logo project-brand-logo-${index}`} src={project.logo} alt={`${project.name} logo`} />}<strong>{project.outcome}</strong><div className="ui-metric"><span>LIVE SYSTEM</span><b>{index === 0 ? '98.4' : '24/7'}</b><i>{index === 0 ? '% confidence' : 'always selling'}</i></div><div className="ui-chart"><span /><span /><span /><span /><span /></div><div className="ui-cursor"><ArrowDownRight /></div></div>
                      </div>
                    </div>
                    <div className="project-copy">
                      <span className="project-category">{project.category}</span>
                      {project.logo ? <img className={`project-copy-logo project-copy-logo-${index}`} src={project.logo} alt={`${project.name} logo`} /> : <h3>{project.name}</h3>}<p>{project.summary}</p>
                      <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                      {project.url && <a href={project.url} target="_blank" rel="noreferrer">View project <ArrowRight size={17} /></a>}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="kinetic-band" aria-hidden="true">
            <div><span>BUILD</span><i>✦</i><span>SHIP</span><i>✦</i><span>GROW</span><i>✦</i><span>BUILD</span><i>✦</i></div>
          </section>

          <section className="process section-pad" id="process">
            <div className="section-heading">
              <div><span className="eyebrow">// HOW WE WORK</span><h2>Clarity at<br /><em>every step.</em></h2></div>
              <p>No black boxes. No theatre. Just direct collaboration, thoughtful decisions and steady progress from useful idea to dependable product.</p>
            </div>
            <div className="process-grid">
              {approach.map(([number, title, text], index) => <article className={`process-card process-card-${index}`} key={number} role="button" tabIndex={0} aria-label={`Explore ${title}`} onClick={() => setSelectedProcess(index)} onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelectedProcess(index) } }}><div className="process-number"><span>{number}</span><b>STEP</b></div><div className="process-dot" /><ProcessGraphic index={index}/><h3>{title}</h3><p>{text}</p><span className="process-explore">See this phase <ArrowRight /></span></article>)}
            </div>
          </section>

          <section className="about section-pad" id="about">
            <div className="about-mark"><Terminal size={44} /><span>sudo<br />make<br />better</span></div>
            <div className="about-copy">
              <span className="eyebrow">// WHY TWIN TECH-SUDO</span>
              <h2>Senior thinking.<br />Builder <em>energy.</em></h2>
              <p className="lead">Twin Tech-sudo is a hands-on UK software development studio for founders and businesses that value momentum, craft and honest technical thinking.</p>
              <p>You work directly with the person shaping and building your product. That means tighter feedback, fewer hand-offs and technology choices made for your actual goals—not a sales deck.</p>
              <div className="principles">
                <span><Check size={16} /> Product thinking included</span><span><Check size={16} /> Built for maintainability</span><span><Check size={16} /> Plain-English communication</span><span><Check size={16} /> Ownership after launch</span>
              </div>
            </div>
          </section>

          {content.testimonials.length > 0 && <section className="quote-section section-pad">
            <Sparkles size={28} />
            <blockquote>“{content.testimonials[0].quote}”</blockquote>
            <p>{content.testimonials[0].name} <span>— {content.testimonials[0].role}</span></p>
          </section>}

          <section className="contact section-pad" id="contact">
            <div className="availability"><span /> {content.settings.availability}</div>
            <h2>Have a problem worth<br /><em>solving?</em></h2>
            <a className="contact-link" href={mailto}>{content.settings.email}<ArrowDownRight /></a>
            <div className="contact-meta"><span>{content.settings.location}</span>{content.settings.phone && <span>{content.settings.phone}</span>}</div>
          </section>
        </main>

        <footer>
          <a className="brand" href="#top"><img src="/twin-tech-sudo-mark.png" alt="" /><span>Twin Tech<span>-sudo</span></span></a>
          <p>© {year} Twin Tech-sudo. Digital products, built properly.</p>
          <a className="footer-studio" href="/studio/">Studio</a>
        </footer>
      </div>
      {selectedService !== null && <div className="service-modal" role="dialog" aria-modal="true" aria-labelledby="service-dialog-title" onMouseDown={event => { if (event.target === event.currentTarget) setSelectedService(null) }}>
        <div className="service-dialog">
          <button className="service-dialog-close" onClick={() => setSelectedService(null)} aria-label="Close service details"><X /></button>
          <div className="service-dialog-visual"><span className="eyebrow">0{selectedService + 1} / 06</span><ServiceGraphic index={selectedService} /><div className="dialog-watermark">{String(selectedService + 1).padStart(2, '0')}</div></div>
          <div className="service-dialog-content">
            <span className="eyebrow">// {serviceDetails[selectedService].eyebrow}</span>
            <h2 id="service-dialog-title">{services[selectedService].title}</h2>
            <h3>{serviceDetails[selectedService].headline}</h3>
            <p className="dialog-intro">{serviceDetails[selectedService].intro}</p>
            <div className="dialog-columns">
              <div><h4>What we can build</h4><ul>{serviceDetails[selectedService].capabilities.map(item => <li key={item}><span>+</span>{item}</li>)}</ul></div>
              <div><h4>What it can unlock</h4><ul>{serviceDetails[selectedService].outcomes.map(item => <li key={item}><Check />{item}</li>)}</ul></div>
            </div>
            <div className="dialog-example"><span>IN PRACTICE</span><p>{serviceDetails[selectedService].example}</p></div>
            <a className="dialog-cta" href="#contact" onClick={() => setSelectedService(null)}>Discuss this capability <ArrowRight /></a>
          </div>
        </div>
      </div>}
      {selectedProcess !== null && <div className="service-modal process-modal" role="dialog" aria-modal="true" aria-labelledby="process-dialog-title" onMouseDown={event => { if (event.target === event.currentTarget) setSelectedProcess(null) }}>
        <div className="service-dialog process-dialog">
          <button className="service-dialog-close" onClick={() => setSelectedProcess(null)} aria-label="Close process details"><X /></button>
          <div className="service-dialog-visual process-dialog-visual"><span className="eyebrow">PHASE 0{selectedProcess + 1} / 04</span><ProcessGraphic index={selectedProcess}/><div className="dialog-watermark">0{selectedProcess + 1}</div></div>
          <div className="service-dialog-content process-dialog-content">
            <span className="eyebrow">// {processDetails[selectedProcess].label}</span>
            <h2 id="process-dialog-title">{approach[selectedProcess][1]}</h2>
            <h3>{processDetails[selectedProcess].headline}</h3>
            <p className="dialog-intro">{processDetails[selectedProcess].intro}</p>
            <div className="dialog-columns">
              <div><h4>What happens</h4><ul>{processDetails[selectedProcess].activities.map(item => <li key={item}><span>+</span>{item}</li>)}</ul></div>
              <div><h4>What you receive</h4><ul>{processDetails[selectedProcess].outputs.map(item => <li key={item}><Check />{item}</li>)}</ul></div>
            </div>
            <div className="process-dialog-meta"><div><span>YOUR INVOLVEMENT</span><p>{processDetails[selectedProcess].involvement}</p></div><div><span>TYPICAL RHYTHM</span><strong>{processDetails[selectedProcess].duration}</strong></div></div>
            <a className="dialog-cta" href="#contact" onClick={() => setSelectedProcess(null)}>Plan your project <ArrowRight /></a>
          </div>
        </div>
      </div>}
    </>
  )
}

export default App
