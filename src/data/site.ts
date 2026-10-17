export type Service = {
  slug: string
  number: string
  title: string
  shortTitle: string
  description: string
  eyebrow: string
  headline: string
  intro: string
  capabilities: string[]
  outcomes: string[]
  deliverables: string[]
  keywords: string[]
}

export const services: Service[] = [
  {
    slug: 'custom-software-development', number: '01', title: 'Custom software development', shortTitle: 'Custom software',
    description: 'Purpose-built systems, SaaS products and internal tools engineered around how your UK business actually works.',
    eyebrow: 'Systems built around you', headline: 'Turn the way you work into a competitive advantage.',
    intro: 'When off-the-shelf software forces your team into workarounds, we design the system around the business. Twin Tech-sudo creates secure, maintainable software that joins complex operations into one controlled platform.',
    capabilities: ['SaaS product development', 'Internal operations platforms', 'Customer and partner portals', 'API and system integrations', 'Role-based workflows', 'Reporting and data intelligence'],
    outcomes: ['Replace spreadsheets and disconnected tools', 'Reduce administration and avoidable errors', 'Create intellectual property you own', 'Scale without multiplying manual work'],
    deliverables: ['Product discovery and specification', 'UX and interface design', 'Frontend, backend and database engineering', 'Testing, deployment and documentation'],
    keywords: ['custom software development UK', 'bespoke software developers', 'business software development'],
  },
  {
    slug: 'web-application-development', number: '02', title: 'Web application development', shortTitle: 'Web applications',
    description: 'Fast, scalable web applications that turn complicated workflows into clear, intuitive digital experiences.',
    eyebrow: 'Powerful in any browser', headline: 'Make difficult work feel remarkably simple.',
    intro: 'We build browser-based products for customers, teams and partners. Every screen is focused on the next useful decision, backed by dependable architecture and accessible interaction design.',
    capabilities: ['Progressive web applications', 'SaaS dashboards and workspaces', 'Secure customer portals', 'Real-time collaborative tools', 'Data visualisation', 'Subscription and account systems'],
    outcomes: ['Reach users without an installation', 'Work securely from any device', 'Turn complex data into clear actions', 'Launch quickly and improve continuously'],
    deliverables: ['Responsive product design', 'Modern frontend engineering', 'APIs, integrations and databases', 'Cloud deployment and monitoring'],
    keywords: ['web application development UK', 'web app developers', 'SaaS development company UK'],
  },
  {
    slug: 'mobile-app-development', number: '03', title: 'Mobile app development', shortTitle: 'Mobile apps',
    description: 'Polished iOS and Android applications designed for real users, real devices and long-term growth.',
    eyebrow: 'Products in their pocket', headline: 'Create an app people choose to keep using.',
    intro: 'We design mobile products for small screens, inconsistent connections and people on the move. The result feels focused and at home on iOS and Android.',
    capabilities: ['iOS and Android applications', 'Cross-platform product builds', 'Offline-first field applications', 'Push notifications and live updates', 'Camera, location and device features', 'App Store launch support'],
    outcomes: ['Put critical workflows in the field', 'Increase customer engagement', 'Capture accurate data at source', 'Maintain one coherent product ecosystem'],
    deliverables: ['Mobile product strategy', 'Interface and prototype design', 'Cross-platform app engineering', 'Store submission and launch support'],
    keywords: ['mobile app development UK', 'iOS app developers UK', 'Android app development company'],
  },
  {
    slug: 'desktop-app-development', number: '04', title: 'Desktop app development', shortTitle: 'Desktop apps',
    description: 'Reliable Windows and cross-platform desktop software, from focused utilities to operational platforms.',
    eyebrow: 'Serious software, installed', headline: 'Bring demanding workflows closer to the machine.',
    intro: 'For products that require deeper file access, offline resilience, specialist hardware or intensive processing, we build polished desktop applications that feel native and dependable.',
    capabilities: ['Windows desktop applications', 'Cross-platform desktop builds', 'Offline and local-first software', 'Document and file processing', 'Background automation', 'Installers, updates and packaging'],
    outcomes: ['Handle large or sensitive files locally', 'Work reliably without internet access', 'Fit existing desktop workflows', 'Deliver controlled, repeatable releases'],
    deliverables: ['Workflow and platform assessment', 'Desktop UX design', 'Local processing and integrations', 'Signed installers and update strategy'],
    keywords: ['desktop application development UK', 'Windows app developers', 'cross-platform desktop software'],
  },
  {
    slug: 'website-development', number: '05', title: 'Website design and development', shortTitle: 'Websites',
    description: 'Distinctive, high-performing websites with strong creative direction, SEO foundations and measurable intent.',
    eyebrow: 'Attention into action', headline: 'Build a website that earns its place in the business.',
    intro: 'We combine brand-led creative direction with accessibility, speed, technical SEO and a frictionless route to action. Every element has a commercial purpose.',
    capabilities: ['Conversion-focused websites', 'Content-managed marketing sites', 'Landing page systems', 'Technical SEO foundations', 'Analytics and conversion tracking', 'Performance optimisation'],
    outcomes: ['Make a stronger first impression', 'Turn qualified traffic into enquiries', 'Give your team control of content', 'Create a measurable acquisition channel'],
    deliverables: ['Information architecture and copy direction', 'Visual design system', 'Responsive development', 'SEO, analytics and launch setup'],
    keywords: ['website development UK', 'web design company UK', 'SEO website development'],
  },
  {
    slug: 'ecommerce-development', number: '06', title: 'E-commerce development', shortTitle: 'E-commerce',
    description: 'Fast, considered online stores that connect brand, catalogue, checkout and day-to-day operations.',
    eyebrow: 'Commerce without friction', headline: 'Turn product interest into confident purchases.',
    intro: 'We create storefronts that feel distinctive while keeping discovery, payment and fulfilment simple. The technology supports the operation behind the shop, not only the shop window.',
    capabilities: ['Custom storefront development', 'Product and inventory integrations', 'Payments and checkout', 'Subscriptions and memberships', 'Search and merchandising', 'Commerce analytics'],
    outcomes: ['Improve conversion and trust', 'Make catalogues easier to operate', 'Connect sales with fulfilment', 'Create room for the brand to grow'],
    deliverables: ['Commerce strategy and UX', 'Storefront implementation', 'Payment and operations integration', 'Tracking, testing and launch'],
    keywords: ['ecommerce development UK', 'online store developers', 'custom ecommerce website'],
  },
  {
    slug: 'ai-automation', number: '07', title: 'AI and workflow automation', shortTitle: 'AI & automation',
    description: 'Practical AI integrations and workflow automation that remove repetition while keeping people in control.',
    eyebrow: 'Automation with a job to do', headline: 'Use AI where it creates measurable leverage.',
    intro: 'We apply automation to specific operational bottlenecks. The goal is a governed, explainable workflow that saves time, improves consistency and routes important decisions to people.',
    capabilities: ['Document and data extraction', 'AI-assisted review', 'Business process automation', 'Knowledge search and copilots', 'Classification and routing', 'Human-in-the-loop controls'],
    outcomes: ['Remove repetitive handling', 'Process information at greater scale', 'Surface exceptions earlier', 'Retain evidence behind decisions'],
    deliverables: ['Automation opportunity assessment', 'Prototype and accuracy evaluation', 'Production integrations', 'Monitoring and review controls'],
    keywords: ['AI automation UK', 'business process automation', 'AI software development company'],
  },
]

export const projects = [
  {
    slug: 'boqextract', name: 'BOQExtract', category: 'Construction technology', logo: '/boqextract-logo.svg', colour: '#c7ff17',
    summary: 'A precision document intelligence product designed to turn complex construction files into structured, reviewable commercial data.',
    challenge: 'Construction documents contain valuable commercial information in inconsistent layouts. Manual transcription is slow, difficult to audit and vulnerable to small but costly mistakes.',
    solution: 'The product combines document intake, structured extraction and a review-first interface so people can validate evidence before producing useful outputs.',
    capabilities: ['Document intelligence', 'Human-in-the-loop review', 'Desktop and web product design', 'Structured exports'],
    note: 'BOQExtract is an evolving Twin Tech-sudo product. Performance claims are intentionally withheld until validated production evidence is available.',
  },
  {
    slug: 'macks-packs', name: "Mack's Packs", category: 'E-commerce experience', logo: '/macks-packs-logo.webp', colour: '#8ca8ff',
    summary: 'A focused digital storefront concept built around collectible trading cards, clear inventory and a direct path to purchase.',
    challenge: 'Collectible products need strong visual identity, quick catalogue scanning and enough product detail to make a confident buying decision.',
    solution: 'The experience joins bold brand presentation with clear product structure and commerce journeys designed to remove uncertainty from browsing to checkout.',
    capabilities: ['E-commerce UX', 'Responsive web design', 'Product catalogue architecture', 'Brand-led interface design'],
    note: 'Project details describe the delivered product scope without inventing unverified revenue or conversion claims.',
  },
]

export const articles = [
  { slug: 'how-to-plan-custom-software', title: 'How to plan custom software without wasting the first build', description: 'A practical framework for defining the problem, scope and evidence a successful first release needs.', date: '2026-09-30', read: '7 min read', category: 'Product strategy' },
  { slug: 'web-app-or-desktop-app', title: 'Web app or desktop app: which fits your workflow?', description: 'The real trade-offs between browser reach, offline work, local files, performance and deployment.', date: '2026-09-30', read: '6 min read', category: 'Technology decisions' },
  { slug: 'ai-automation-business-case', title: 'Where AI automation creates a real business case', description: 'How to identify repetitive work worth automating while keeping accuracy, evidence and oversight intact.', date: '2026-09-30', read: '8 min read', category: 'AI & automation' },
]

export const nav = [
  { href: '/services/', label: 'Services' },
  { href: '/work/', label: 'Work' },
  { href: '/process/', label: 'Process' },
  { href: '/about/', label: 'About' },
  { href: '/insights/', label: 'Insights' },
]

export const site = {
  name: 'Twin Tech-sudo',
  url: import.meta.env.PUBLIC_SITE_URL || 'https://twin-tech-sudo.github.io',
  email: 'hello@twintech-sudo.co.uk',
  legalName: import.meta.env.PUBLIC_LEGAL_NAME || '',
  companyNumber: import.meta.env.PUBLIC_COMPANY_NUMBER || '',
  registeredOffice: import.meta.env.PUBLIC_REGISTERED_OFFICE || '',
  jurisdiction: import.meta.env.PUBLIC_COMPANY_JURISDICTION || 'England and Wales',
  defaultTitle: 'Twin Tech-sudo | UK Software, Web & App Development',
  defaultDescription: 'UK software development studio creating custom software, web applications, mobile apps, desktop apps, websites, e-commerce and practical AI automation.',
}
