export type Service = {
  slug: string
  number: string
  title: string
  shortTitle: string
  description: string
  eyebrow: string
  headline: string
  intro: string
  capabilities: { title: string; detail: string; includes: string[] }[]
  outcomes: { title: string; detail: string }[]
  deliverables: { title: string; detail: string }[]
  keywords: string[]
}

export const services: Service[] = [
  {
    slug: 'custom-software-development', number: '01', title: 'Custom software development', shortTitle: 'Custom software',
    description: 'Purpose-built systems, SaaS products and internal tools engineered around how your UK business actually works.',
    eyebrow: 'Systems built around you', headline: 'Turn the way you work into a competitive advantage.',
    intro: 'When off-the-shelf software forces your team into workarounds, we design the system around the business. Twin Tech-sudo creates secure, maintainable software that joins complex operations into one controlled platform.',
    capabilities: [
      { title: 'SaaS product development', detail: 'We shape subscription software from the commercial model and first user journey through to a secure, maintainable production platform. The work connects product strategy, interface design, multi-tenant architecture and the operational tools needed to run the service.', includes: ['Product discovery and release scoping', 'Accounts, workspaces and subscription logic', 'Secure multi-tenant data architecture', 'Administration, billing and usage visibility'] },
      { title: 'Internal operations platforms', detail: 'We replace fragmented spreadsheets, inboxes and manual hand-offs with one system designed around the way the organisation actually operates. The platform can coordinate records, tasks, approvals, documents and reporting without forcing the team into a generic workflow.', includes: ['Current-process and information mapping', 'Shared operational records and task flows', 'Approvals, notifications and exception handling', 'Management controls and audit history'] },
      { title: 'Customer and partner portals', detail: 'We create secure self-service spaces where customers, suppliers or partners can find information, submit work, exchange documents and track progress. Each experience is designed around what that audience needs to accomplish while protecting internal data and processes.', includes: ['Secure onboarding and account access', 'Requests, documents and status tracking', 'Messaging, notifications and support journeys', 'Branded responsive interfaces'] },
      { title: 'API and system integrations', detail: 'We connect products to the services and data the business already depends on, reducing duplicate entry and keeping important records aligned. Integrations are designed with authentication, failure recovery, rate limits and monitoring in mind—not just the successful demonstration path.', includes: ['Third-party and legacy-system connections', 'Data synchronisation and transformation', 'Webhooks, queues and scheduled jobs', 'Error handling, logging and recovery controls'] },
      { title: 'Role-based workflows', detail: 'We model who can see, create, approve and change information at each stage of a process. Clear permissions and state transitions help teams move work forward confidently while keeping sensitive actions controlled and traceable.', includes: ['Roles, permissions and access boundaries', 'Multi-stage reviews and approvals', 'Assignment, escalation and notifications', 'Decision history and audit trails'] },
      { title: 'Reporting and data intelligence', detail: 'We turn operational data into useful views for the people making decisions. That can range from focused dashboards and scheduled reports to searchable records and governed analytical tools, always tied to a real question rather than decorative charts.', includes: ['Metric and reporting-definition workshops', 'Operational dashboards and drill-down views', 'Scheduled exports and stakeholder reports', 'Data quality, lineage and access controls'] },
    ],
    outcomes: [
      { title: 'Replace spreadsheets and disconnected tools', detail: 'Bring the records, tasks and decisions that currently move between files and inboxes into one controlled source of truth.' },
      { title: 'Reduce administration and avoidable errors', detail: 'Use validation, automation and guided workflows to remove repeated entry and catch incomplete or inconsistent information earlier.' },
      { title: 'Create intellectual property you own', detail: 'Build a product around the organisation’s distinctive process, with documented source code and clear ownership arrangements.' },
      { title: 'Scale without multiplying manual work', detail: 'Design rules, permissions and automation so increasing customers, records or transactions does not require the same increase in administration.' },
    ],
    deliverables: [
      { title: 'Product discovery and specification', detail: 'A focused definition of users, workflows, priorities, risks and the smallest complete release worth building.' },
      { title: 'UX and interface design', detail: 'User journeys, wireframes and polished interface designs that make complex work understandable before full development begins.' },
      { title: 'Frontend, backend and database engineering', detail: 'The working product across interface, application logic, APIs, integrations and a maintainable data model.' },
      { title: 'Testing, deployment and documentation', detail: 'Quality checks, production release configuration, monitoring and practical documentation for operating and extending the system.' },
    ],
    keywords: ['custom software development UK', 'bespoke software developers', 'business software development'],
  },
  {
    slug: 'web-application-development', number: '02', title: 'Web application development', shortTitle: 'Web applications',
    description: 'Fast, scalable web applications that turn complicated workflows into clear, intuitive digital experiences.',
    eyebrow: 'Powerful in any browser', headline: 'Make difficult work feel remarkably simple.',
    intro: 'We build browser-based products for customers, teams and partners. Every screen is focused on the next useful decision, backed by dependable architecture and accessible interaction design.',
    capabilities: [
      { title: 'Progressive web applications', detail: 'Browser-based products can feel fast, installable and resilient across devices. We design the loading, caching and offline behaviour around the real environment in which people will use the product.', includes: ['Responsive application interfaces', 'Installable PWA behaviour', 'Offline and poor-connection strategies', 'Accessible interaction patterns'] },
      { title: 'SaaS dashboards and workspaces', detail: 'We build clear workspaces that bring accounts, activity, tasks and data into one coherent product experience. Complex capability is organised around the next decision a user needs to make.', includes: ['Workspace and navigation architecture', 'Account and team management', 'Activity feeds and task views', 'Administration and product controls'] },
      { title: 'Secure customer portals', detail: 'Customers receive a focused, branded route into the services and information relevant to them, with authentication and data boundaries designed from the start.', includes: ['Identity and secure account access', 'Document and request exchange', 'Status, history and notifications', 'Privacy-aware account management'] },
      { title: 'Real-time collaborative tools', detail: 'For products where people need to work together, we design presence, updates and conflict behaviour so collaboration feels dependable rather than surprising.', includes: ['Live updates and shared state', 'Comments, mentions and assignments', 'Conflict and version handling', 'Notification and activity systems'] },
      { title: 'Data visualisation', detail: 'We translate dense or changing information into visual structures that help users compare, investigate and act. The design starts with the decision, then chooses the right chart, table or interactive view.', includes: ['Dashboard information design', 'Interactive charts and tables', 'Filtering and drill-down journeys', 'Exportable and accessible reporting'] },
      { title: 'Subscription and account systems', detail: 'We implement the customer lifecycle around access, plans, billing and account changes, including the operational controls required to support users safely.', includes: ['Registration and onboarding', 'Plans, entitlements and billing events', 'Team invitations and permissions', 'Account support and cancellation flows'] },
    ],
    outcomes: [
      { title: 'Reach users without an installation', detail: 'Give customers and teams immediate access through a modern browser while retaining an app-like product experience.' },
      { title: 'Work securely from any device', detail: 'Protect accounts and information with appropriate identity, permission and session controls across supported screen sizes.' },
      { title: 'Turn complex data into clear actions', detail: 'Structure dashboards, records and task views around the next useful decision instead of exposing raw system complexity.' },
      { title: 'Launch quickly and improve continuously', detail: 'Release centrally, observe real use and deliver improvements without requiring every user to install an update.' },
    ],
    deliverables: [
      { title: 'Responsive product design', detail: 'A complete interaction and visual system for the important journeys across desktop, tablet and mobile browsers.' },
      { title: 'Modern frontend engineering', detail: 'An accessible, performant interface built from maintainable components and connected to real application behaviour.' },
      { title: 'APIs, integrations and databases', detail: 'Secure server logic, structured data storage and dependable connections to the services the product requires.' },
      { title: 'Cloud deployment and monitoring', detail: 'Repeatable production releases, environment configuration, health visibility and error monitoring for day-to-day operation.' },
    ],
    keywords: ['web application development UK', 'web app developers', 'SaaS development company UK'],
  },
  {
    slug: 'mobile-app-development', number: '03', title: 'Mobile app development', shortTitle: 'Mobile apps',
    description: 'Polished iOS and Android applications designed for real users, real devices and long-term growth.',
    eyebrow: 'Products in their pocket', headline: 'Create an app people choose to keep using.',
    intro: 'We design mobile products for small screens, inconsistent connections and people on the move. The result feels focused and at home on iOS and Android.',
    capabilities: [
      { title: 'iOS and Android applications', detail: 'We create focused mobile experiences shaped for touch, small screens and the conventions people already understand on their device.', includes: ['Mobile product and journey design', 'iOS and Android implementation', 'Secure API and account integration', 'Device testing and release preparation'] },
      { title: 'Cross-platform product builds', detail: 'A shared product foundation can reduce duplicated effort while still respecting the behaviour of each platform. We choose the approach based on performance, device access and long-term ownership.', includes: ['Shared application architecture', 'Platform-specific interaction details', 'Reusable design and component systems', 'Maintainable release pipelines'] },
      { title: 'Offline-first field applications', detail: 'Field work cannot always depend on a stable signal. We design local data capture, sync and conflict handling so important tasks remain usable and recover safely when connectivity returns.', includes: ['Local storage and queued actions', 'Background synchronisation', 'Conflict and retry handling', 'Clear online and offline status'] },
      { title: 'Push notifications and live updates', detail: 'Timely updates can bring users back to the right task, but only when they are relevant and controlled. We design notification rules, preferences and deep links into the product.', includes: ['Transactional push notifications', 'Live status and activity updates', 'Preference and consent controls', 'Deep links to relevant screens'] },
      { title: 'Camera, location and device features', detail: 'We use native device capabilities where they remove friction or capture better information, with appropriate permission, privacy and fallback behaviour.', includes: ['Photo, video and document capture', 'Location-aware workflows', 'File sharing and device storage', 'Permission and privacy handling'] },
      { title: 'App Store launch support', detail: 'A mobile product needs more than a build file. We prepare the release materials, privacy declarations, testing tracks and submission process required for a controlled launch.', includes: ['Store listing and asset preparation', 'TestFlight and testing-track setup', 'Privacy and permission declarations', 'Submission and review support'] },
    ],
    outcomes: [
      { title: 'Put critical workflows in the field', detail: 'Let people complete important tasks where the work happens, including environments with unreliable connectivity.' },
      { title: 'Increase customer engagement', detail: 'Create a focused product people can return to for timely information, service and useful actions.' },
      { title: 'Capture accurate data at source', detail: 'Use guided forms and device capabilities to record information once, close to the event, with validation built in.' },
      { title: 'Maintain one coherent product ecosystem', detail: 'Connect the mobile experience to shared accounts, APIs and operational systems rather than creating another isolated tool.' },
    ],
    deliverables: [
      { title: 'Mobile product strategy', detail: 'A defined audience, use case, platform approach and release scope based on when mobile provides real value.' },
      { title: 'Interface and prototype design', detail: 'Testable mobile journeys and polished screen designs shaped for touch, movement and small-screen attention.' },
      { title: 'Cross-platform app engineering', detail: 'A production application for the agreed platforms, connected securely to its data and supporting services.' },
      { title: 'Store submission and launch support', detail: 'Testing builds, listing assets, privacy declarations, release configuration and support through store review.' },
    ],
    keywords: ['mobile app development UK', 'iOS app developers UK', 'Android app development company'],
  },
  {
    slug: 'desktop-app-development', number: '04', title: 'Desktop app development', shortTitle: 'Desktop apps',
    description: 'Reliable Windows and cross-platform desktop software, from focused utilities to operational platforms.',
    eyebrow: 'Serious software, installed', headline: 'Bring demanding workflows closer to the machine.',
    intro: 'For products that require deeper file access, offline resilience, specialist hardware or intensive processing, we build polished desktop applications that feel native and dependable.',
    capabilities: [
      { title: 'Windows desktop applications', detail: 'We build polished Windows software for workflows that need close access to files, hardware or the operating system, without accepting a dated user experience.', includes: ['Native-feeling desktop interfaces', 'Windows services and system integration', 'Secure local data handling', 'Enterprise-ready configuration'] },
      { title: 'Cross-platform desktop builds', detail: 'Where teams work across operating systems, we create one maintainable desktop product with deliberate platform adaptations and release processes.', includes: ['Windows, macOS and Linux targets', 'Shared application architecture', 'Platform-aware menus and behaviours', 'Cross-platform testing'] },
      { title: 'Offline and local-first software', detail: 'Local-first products keep critical work available without continuous cloud access and can give users greater control over large or sensitive information.', includes: ['Local databases and resilient state', 'Offline workflows', 'Optional secure synchronisation', 'Backup and recovery planning'] },
      { title: 'Document and file processing', detail: 'Desktop software can handle large files and complex local folders efficiently. We design ingestion, progress, validation and output workflows that remain understandable when processing is intensive.', includes: ['Batch import and file watching', 'Parsing, conversion and validation', 'Progress and exception reporting', 'Structured output and export'] },
      { title: 'Background automation', detail: 'Long-running or repeated work can continue safely outside the main interface, with scheduling, progress and recovery designed into the application.', includes: ['Scheduled and queued jobs', 'Background processing services', 'Failure recovery and resumability', 'Logs and operational visibility'] },
      { title: 'Installers, updates and packaging', detail: 'We package the product so it can be installed, updated and supported predictably across the intended environment.', includes: ['Signed installers and packages', 'Controlled automatic updates', 'Versioning and release channels', 'Deployment documentation'] },
    ],
    outcomes: [
      { title: 'Handle large or sensitive files locally', detail: 'Process information near the user when file size, privacy or performance makes a browser-only workflow unsuitable.' },
      { title: 'Work reliably without internet access', detail: 'Keep essential tasks available through local storage and controlled synchronisation instead of assuming permanent connectivity.' },
      { title: 'Fit existing desktop workflows', detail: 'Integrate with folders, files, hardware and operating-system behaviour already used by the team.' },
      { title: 'Deliver controlled, repeatable releases', detail: 'Package installation and updates so versions can be tested, distributed and supported predictably.' },
    ],
    deliverables: [
      { title: 'Workflow and platform assessment', detail: 'A recommendation covering operating systems, local requirements, deployment constraints and the right technical approach.' },
      { title: 'Desktop UX design', detail: 'Detailed journeys and interface designs suited to dense information, keyboard use and long-running professional tasks.' },
      { title: 'Local processing and integrations', detail: 'The application logic for files, databases, hardware or background work that must run on the device.' },
      { title: 'Signed installers and update strategy', detail: 'Production packaging, versioning and a controlled route for distributing fixes and improvements.' },
    ],
    keywords: ['desktop application development UK', 'Windows app developers', 'cross-platform desktop software'],
  },
  {
    slug: 'website-development', number: '05', title: 'Website design and development', shortTitle: 'Websites',
    description: 'Distinctive, high-performing websites with strong creative direction, SEO foundations and measurable intent.',
    eyebrow: 'Attention into action', headline: 'Build a website that earns its place in the business.',
    intro: 'We combine brand-led creative direction with accessibility, speed, technical SEO and a frictionless route to action. Every element has a commercial purpose.',
    capabilities: [
      { title: 'Conversion-focused websites', detail: 'We connect positioning, information structure and interaction design so the site guides the right visitor toward a meaningful next step.', includes: ['Audience and journey definition', 'Conversion-focused page structure', 'Clear calls to action', 'Responsive accessible implementation'] },
      { title: 'Content-managed marketing sites', detail: 'Teams receive a structured publishing system that protects the design while making everyday content changes straightforward.', includes: ['Flexible page and content models', 'Editor-friendly publishing workflows', 'Reusable branded components', 'Roles, previews and release controls'] },
      { title: 'Landing page systems', detail: 'We create reusable landing-page patterns for campaigns, services or audiences without producing a collection of inconsistent one-off pages.', includes: ['Modular campaign sections', 'Message and CTA frameworks', 'Reusable forms and proof patterns', 'Consistent measurement setup'] },
      { title: 'Technical SEO foundations', detail: 'Search visibility begins with crawlable architecture, meaningful metadata and technically sound pages. We build those foundations into the site rather than attaching them at the end.', includes: ['Semantic page structure', 'Titles, canonicals and social metadata', 'Sitemaps and crawl controls', 'Structured data and internal linking'] },
      { title: 'Analytics and conversion tracking', detail: 'Measurement is planned around useful business actions and implemented with appropriate consent, so the team can learn without collecting data aimlessly.', includes: ['Measurement and event planning', 'Consent-aware analytics setup', 'Conversion and funnel events', 'Reporting and quality checks'] },
      { title: 'Performance optimisation', detail: 'We reduce loading friction across real devices and connections by treating performance as a design and engineering constraint throughout the build.', includes: ['Image and asset optimisation', 'Efficient rendering and delivery', 'Core Web Vitals improvements', 'Production performance testing'] },
    ],
    outcomes: [
      { title: 'Make a stronger first impression', detail: 'Present the offer with a distinctive, credible experience that reflects the quality and character of the business.' },
      { title: 'Turn qualified traffic into enquiries', detail: 'Guide relevant visitors from their question to useful proof and a clear next action with less friction.' },
      { title: 'Give your team control of content', detail: 'Provide a structured publishing experience so routine changes do not require a developer or damage the design.' },
      { title: 'Create a measurable acquisition channel', detail: 'Connect landing pages, search visibility and consent-aware measurement to understand which activity creates useful demand.' },
    ],
    deliverables: [
      { title: 'Information architecture and copy direction', detail: 'A page and messaging structure organised around audience questions, commercial priorities and search intent.' },
      { title: 'Visual design system', detail: 'A responsive set of typography, colour, layout and reusable components that gives the site a coherent identity.' },
      { title: 'Responsive development', detail: 'A fast, accessible implementation that works across current devices and remains maintainable after launch.' },
      { title: 'SEO, analytics and launch setup', detail: 'Technical search foundations, consent-aware measurement, production checks and a controlled release.' },
    ],
    keywords: ['website development UK', 'web design company UK', 'SEO website development'],
  },
  {
    slug: 'ecommerce-development', number: '06', title: 'E-commerce development', shortTitle: 'E-commerce',
    description: 'Fast, considered online stores that connect brand, catalogue, checkout and day-to-day operations.',
    eyebrow: 'Commerce without friction', headline: 'Turn product interest into confident purchases.',
    intro: 'We create storefronts that feel distinctive while keeping discovery, payment and fulfilment simple. The technology supports the operation behind the shop, not only the shop window.',
    capabilities: [
      { title: 'Custom storefront development', detail: 'We design storefronts around the brand, catalogue and buying decision instead of forcing every business into the same template.', includes: ['Distinctive responsive storefronts', 'Product and collection journeys', 'Content and campaign modules', 'Accessible interaction design'] },
      { title: 'Product and inventory integrations', detail: 'Catalogue and stock information can connect with the systems that already run the operation, reducing duplicate maintenance and overselling risk.', includes: ['Catalogue data modelling', 'Inventory and availability sync', 'ERP or fulfilment connections', 'Import, validation and error handling'] },
      { title: 'Payments and checkout', detail: 'We create a clear, trustworthy route from basket to confirmation with payment providers and operational edge cases handled carefully.', includes: ['Basket and checkout experience', 'Payment-provider integration', 'Tax, shipping and discount logic', 'Failure, refund and confirmation flows'] },
      { title: 'Subscriptions and memberships', detail: 'Recurring products require lifecycle logic beyond the first payment. We design access, renewals, plan changes and customer controls as one system.', includes: ['Recurring billing and entitlements', 'Member account experiences', 'Upgrade, pause and cancellation flows', 'Operational subscription controls'] },
      { title: 'Search and merchandising', detail: 'We help customers find the right product through useful search, filtering and curated presentation, while giving operators practical merchandising control.', includes: ['Catalogue search and filters', 'Collections and recommendations', 'Promotional merchandising tools', 'No-result and discovery journeys'] },
      { title: 'Commerce analytics', detail: 'Commerce measurement connects acquisition, product interest, checkout and completed orders so decisions are grounded in the full journey.', includes: ['E-commerce event planning', 'Product and funnel reporting', 'Consent-aware tracking', 'Operational performance views'] },
    ],
    outcomes: [
      { title: 'Improve conversion and trust', detail: 'Reduce uncertainty with clear product information, confident interaction design and a dependable path through checkout.' },
      { title: 'Make catalogues easier to operate', detail: 'Structure products, variants, collections and content so the team can maintain the store efficiently.' },
      { title: 'Connect sales with fulfilment', detail: 'Move accurate order, payment and inventory information between the storefront and operational systems.' },
      { title: 'Create room for the brand to grow', detail: 'Build a flexible commerce foundation that can support new campaigns, ranges and customer journeys over time.' },
    ],
    deliverables: [
      { title: 'Commerce strategy and UX', detail: 'A defined customer journey, catalogue structure and operational approach for discovery, purchase and post-order service.' },
      { title: 'Storefront implementation', detail: 'The responsive shopping experience, product presentation and content tools required to sell effectively.' },
      { title: 'Payment and operations integration', detail: 'Secure checkout plus the connections needed for stock, tax, shipping, fulfilment and customer communication.' },
      { title: 'Tracking, testing and launch', detail: 'Commerce measurement, end-to-end transaction testing and a controlled production release.' },
    ],
    keywords: ['ecommerce development UK', 'online store developers', 'custom ecommerce website'],
  },
  {
    slug: 'ai-automation', number: '07', title: 'AI and workflow automation', shortTitle: 'AI & automation',
    description: 'Practical AI integrations and workflow automation that remove repetition while keeping people in control.',
    eyebrow: 'Automation with a job to do', headline: 'Use AI where it creates measurable leverage.',
    intro: 'We apply automation to specific operational bottlenecks. The goal is a governed, explainable workflow that saves time, improves consistency and routes important decisions to people.',
    capabilities: [
      { title: 'Document and data extraction', detail: 'We turn information locked inside documents into structured, reviewable data while retaining the evidence needed to check important outputs.', includes: ['Document intake and preprocessing', 'Field and table extraction', 'Source references and confidence signals', 'Validation and structured export'] },
      { title: 'AI-assisted review', detail: 'AI can prepare, compare and highlight information so a person spends attention on judgement and exceptions rather than repetitive handling.', includes: ['Review queues and evidence views', 'Comparison and anomaly highlighting', 'Confidence-based escalation', 'Corrections captured for evaluation'] },
      { title: 'Business process automation', detail: 'We identify repeated steps that software can execute reliably, then connect triggers, rules, integrations and human approvals into one governed flow.', includes: ['Process and exception mapping', 'Rules and orchestration', 'System and communication integrations', 'Monitoring and recovery paths'] },
      { title: 'Knowledge search and copilots', detail: 'We create grounded ways to search, summarise and work with an organisation’s approved information, with citations and access boundaries where they matter.', includes: ['Content ingestion and indexing', 'Permission-aware retrieval', 'Cited answers and guided actions', 'Evaluation and feedback controls'] },
      { title: 'Classification and routing', detail: 'Incoming documents, messages or records can be categorised and directed to the right team or workflow, with uncertain cases held for review.', includes: ['Taxonomy and routing-rule design', 'Model or rules-based classification', 'Confidence thresholds', 'Exception queues and audit history'] },
      { title: 'Human-in-the-loop controls', detail: 'Important automation remains accountable by defining what the system may do, when a person must review it and how decisions can be traced or corrected.', includes: ['Approval and escalation rules', 'Evidence beside recommendations', 'Decision and correction logs', 'Quality monitoring and override controls'] },
    ],
    outcomes: [
      { title: 'Remove repetitive handling', detail: 'Let software prepare, classify or move routine information so people can focus on judgement and exceptions.' },
      { title: 'Process information at greater scale', detail: 'Handle increased document, message or record volume without relying on the same increase in manual effort.' },
      { title: 'Surface exceptions earlier', detail: 'Use rules and confidence signals to direct unusual, incomplete or high-risk cases to the right reviewer.' },
      { title: 'Retain evidence behind decisions', detail: 'Keep source material, system actions and human corrections connected so important outputs remain reviewable.' },
    ],
    deliverables: [
      { title: 'Automation opportunity assessment', detail: 'A mapped workflow, baseline, risk review and recommendation for where automation is—and is not—worth testing.' },
      { title: 'Prototype and accuracy evaluation', detail: 'A bounded proof tested against representative information with agreed measures and difficult edge cases.' },
      { title: 'Production integrations', detail: 'A governed implementation connected to the real systems, identity and operational workflow.' },
      { title: 'Monitoring and review controls', detail: 'Visibility into quality, failures and exceptions plus the human controls required for accountable operation.' },
    ],
    keywords: ['AI automation UK', 'business process automation', 'AI software development company'],
  },
]

export const projects = [
  {
    slug: 'boqextract', name: 'BOQExtract', category: 'Construction technology', logo: '/boqextract-logo.svg', colour: '#c7ff17',
    summary: 'A precision document intelligence product designed to turn complex construction files into structured, reviewable commercial data.',
    challenge: 'Construction documents contain valuable commercial information in inconsistent layouts. Manual transcription is slow, difficult to audit and vulnerable to small but costly mistakes.',
    solution: 'The product combines document intake, structured extraction and a review-first interface so people can validate evidence before producing useful outputs.',
    capabilities: [
      { title: 'Document intelligence', detail: 'The product turns inconsistent construction documents into structured information while keeping outputs connected to their source.' },
      { title: 'Human-in-the-loop review', detail: 'Reviewers can inspect evidence, resolve uncertainty and approve important information before it moves into a commercial output.' },
      { title: 'Desktop and web product design', detail: 'Local processing and browser-based workspace patterns are combined around the demands of large files, review and collaboration.' },
      { title: 'Structured exports', detail: 'Reviewed information can leave the product in controlled formats suitable for downstream analysis and existing business workflows.' },
    ],
    note: 'BOQExtract is an evolving Twin Tech-sudo product. Performance claims are intentionally withheld until validated production evidence is available.',
  },
  {
    slug: 'macks-packs', name: "Mack's Packs", category: 'E-commerce experience', logo: '/macks-packs-logo.webp', colour: '#8ca8ff',
    summary: 'A focused digital storefront concept built around collectible trading cards, clear inventory and a direct path to purchase.',
    challenge: 'Collectible products need strong visual identity, quick catalogue scanning and enough product detail to make a confident buying decision.',
    solution: 'The experience joins bold brand presentation with clear product structure and commerce journeys designed to remove uncertainty from browsing to checkout.',
    capabilities: [
      { title: 'E-commerce UX', detail: 'The buying journey reduces uncertainty from product discovery through basket and checkout, with the important information close to each decision.' },
      { title: 'Responsive web design', detail: 'Layouts and interactions are shaped to remain clear and distinctive across mobile, tablet and desktop screens.' },
      { title: 'Product catalogue architecture', detail: 'Products, categories and supporting information are organised so customers can scan, compare and find relevant stock quickly.' },
      { title: 'Brand-led interface design', detail: 'Colour, typography, imagery and motion create a recognisable storefront without compromising usability or performance.' },
    ],
    note: 'Project details describe the delivered product scope without inventing unverified revenue or conversion claims.',
  },
]

export const articles = [
  { slug: 'how-to-plan-custom-software', title: 'How to plan custom software without wasting the first build', description: 'A practical framework for defining the problem, scope and evidence a successful first release needs.', date: '2026-09-30', read: '7 min read', category: 'Product strategy' },
  { slug: 'web-app-or-desktop-app', title: 'Web app or desktop app: which fits your workflow?', description: 'The real trade-offs between browser reach, offline work, local files, performance and deployment.', date: '2026-09-30', read: '6 min read', category: 'Technology decisions' },
  { slug: 'ai-automation-business-case', title: 'Where AI automation creates a real business case', description: 'How to identify repetitive work worth automating while keeping accuracy, evidence and oversight intact.', date: '2026-09-30', read: '8 min read', category: 'AI & automation' },
  { slug: 'construction-document-automation-first-workflow', title: 'Construction document automation: choosing the first workflow', description: 'A practical way to find a construction document process worth testing, without committing to a large software build too early.', date: '2026-10-17', read: '7 min read', category: 'Construction technology' },
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
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || '',
  legalName: import.meta.env.PUBLIC_LEGAL_NAME || '',
  companyNumber: import.meta.env.PUBLIC_COMPANY_NUMBER || '',
  registeredOffice: import.meta.env.PUBLIC_REGISTERED_OFFICE || '',
  jurisdiction: import.meta.env.PUBLIC_COMPANY_JURISDICTION || 'England and Wales',
  defaultTitle: 'Twin Tech-sudo | UK Digital Product & Software Studio',
  defaultDescription: 'Twin Tech-sudo is a UK digital product studio creating custom software, SaaS, web applications, mobile apps, desktop software, websites, e-commerce and AI products across industries.',
}
