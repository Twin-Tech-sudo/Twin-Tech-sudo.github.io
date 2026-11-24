export const nav = [
  { href: '/how-it-works/', label: 'How it works' },
  { href: '/coverage/', label: 'Coverage' },
  { href: '/trust/', label: 'Evidence' },
  { href: '/security/', label: 'Security' },
  { href: '/pilot/', label: 'Pilot' },
]

export const articles = [
  { slug: 'evidence-linked-bill-of-quantities', category: 'Method', title: 'Why every line in a bill of quantities needs a source', seoTitle: 'Evidence-Linked Bills of Quantities | BOQ Extract', description: 'A quantity you cannot trace is a quantity you have to re-measure. How evidence-linking changes takeoff review for QS teams.', date: '2026-11-24', read: '5 min' },
  { slug: 'automated-takeoff-nrm2', category: 'Standards', title: 'Automated takeoff and NRM2: what a machine can and cannot decide', seoTitle: 'Automated Takeoff and NRM2 | BOQ Extract', description: 'Where automated measurement fits inside NRM2 work sections, and which judgement calls should always reach a quantity surveyor.', date: '2026-11-24', read: '6 min' },
  { slug: 'running-a-takeoff-pilot', category: 'Buying guide', title: 'How to run a fair pilot of automated takeoff software', seoTitle: 'How to Pilot Automated Takeoff Software | BOQ Extract', description: 'Use your own completed bills as the benchmark. A practical guide to evaluating automated quantity takeoff before you buy.', date: '2026-11-24', read: '5 min' },
]

export const site = {
  name: 'BOQ Extract',
  url: import.meta.env.PUBLIC_SITE_URL || 'https://twin-tech-sudo.github.io',
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || '',
  legalName: import.meta.env.PUBLIC_LEGAL_NAME || '',
  companyNumber: import.meta.env.PUBLIC_COMPANY_NUMBER || '',
  registeredOffice: import.meta.env.PUBLIC_REGISTERED_OFFICE || '',
  jurisdiction: import.meta.env.PUBLIC_COMPANY_JURISDICTION || 'England and Wales',
  defaultTitle: 'BOQ Extract | Evidence-Linked Quantity Takeoff',
  defaultDescription: 'BOQ Extract reads whole tender packs and drafts an NRM2-structured bill of quantities, with every line traced to the drawing it came from.',
}
