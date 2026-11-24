// Product content for the BOQ Extract website.
// Claims policy: describe capability, never measured accuracy. Accuracy figures are published
// only for work sections that an independent QS has certified (see the BOQ Extract repo's
// docs/international-sales-readiness.md and docs/pilot-offer.md).

export type CoverageStatus = 'measures' | 'review' | 'roadmap'

export const statusLabel: Record<CoverageStatus, string> = {
  measures: 'Measures',
  review: 'Reads and flags',
  roadmap: 'Roadmap',
}

export const statusDetail: Record<CoverageStatus, string> = {
  measures: 'A dedicated reader produces draft bill quantities, each linked to its source on the drawing.',
  review: 'The engine finds and reads the scope, then raises it for QS review rather than billing it silently.',
  roadmap: 'Mapped in the NRM2 structure; a dedicated reader is planned.',
}

type Section = { code: string; name: string; status: CoverageStatus; reads?: string }
export type CoverageGroup = { number: string; title: string; sections: Section[] }

export const coverage: CoverageGroup[] = [
  { number: '01', title: 'Preliminaries', sections: [
    { code: '01-010', name: 'Preliminaries and general requirements', status: 'measures', reads: 'Site set-up and temporary works sheets' },
  ] },
  { number: '02', title: 'Enabling and demolition', sections: [
    { code: '02-010', name: 'Surveys, investigations and enabling works', status: 'roadmap' },
    { code: '02-020', name: 'Demolition and alteration', status: 'measures', reads: 'Downtakings and break-out hatching' },
  ] },
  { number: '03', title: 'Substructure', sections: [
    { code: '03-010', name: 'Earthworks and excavation', status: 'measures', reads: 'Cut and fill breakdowns' },
    { code: '03-020', name: 'Piling and ground improvement', status: 'measures', reads: 'Pile schedules and pile marks' },
    { code: '03-030', name: 'Foundations and ground beams', status: 'measures', reads: 'Foundation layouts, legends and bar schedules' },
    { code: '03-040', name: 'Ground floor construction', status: 'measures', reads: 'Slab outlines, build-ups and beam-and-block bays' },
    { code: '03-050', name: 'Below-ground waterproofing and insulation', status: 'measures', reads: 'Slab build-up notes' },
  ] },
  { number: '04', title: 'Frame', sections: [
    { code: '04-010', name: 'In-situ concrete frame', status: 'measures', reads: 'Wall and upstand layouts, elevations' },
    { code: '04-020', name: 'Precast concrete structure', status: 'roadmap' },
    { code: '04-030', name: 'Structural steelwork', status: 'review', reads: 'Steel frame plans, member schedules and sections' },
    { code: '04-040', name: 'Structural timber', status: 'roadmap' },
    { code: '04-050', name: 'Loadbearing masonry', status: 'roadmap' },
  ] },
  { number: '05', title: 'Upper floors and stairs', sections: [
    { code: '05-010', name: 'Upper floor construction', status: 'measures', reads: 'Slab key notes, decking and mesh' },
    { code: '05-020', name: 'Stairs, ramps and balustrades', status: 'measures', reads: 'Stair sheets: flights, risers, widths' },
  ] },
  { number: '06', title: 'Roof', sections: [
    { code: '06-010', name: 'Roof structure', status: 'review', reads: 'Purlins and rails along their drawn outlines' },
    { code: '06-020', name: 'Roof coverings and waterproofing', status: 'review', reads: 'Hatched roof plans: planes, ridges, hips, valleys' },
    { code: '06-030', name: 'Roof drainage, rooflights and accessories', status: 'review', reads: 'Key-note symbols and gutter runs' },
  ] },
  { number: '07', title: 'External walls', sections: [
    { code: '07-010', name: 'External masonry walls', status: 'measures', reads: 'Bond hatching and keyed colours on elevations' },
    { code: '07-020', name: 'Cladding and rainscreen', status: 'measures', reads: 'Panel joint lattices less openings' },
    { code: '07-030', name: 'Curtain walling and glazed facades', status: 'measures', reads: 'Curtain wall elevations and captions' },
    { code: '07-040', name: 'External insulation, membranes and sealants', status: 'roadmap' },
  ] },
  { number: '08', title: 'Internal walls', sections: [
    { code: '08-010', name: 'Internal walls and partitions', status: 'measures', reads: 'Partition plans by wall type' },
    { code: '08-020', name: 'Wall linings and encasements', status: 'roadmap' },
  ] },
  { number: '09', title: 'Doors and windows', sections: [
    { code: '09-010', name: 'Doorsets and screens', status: 'measures', reads: 'Door schedules and plan marks' },
    { code: '09-020', name: 'Ironmongery and access hardware', status: 'measures', reads: 'Ironmongery schedules and quotations' },
    { code: '09-030', name: 'Windows and external glazed openings', status: 'measures', reads: 'Window schedules and plan marks' },
  ] },
  { number: '10', title: 'Finishes', sections: [
    { code: '10-010', name: 'Floor finishes', status: 'measures', reads: 'Room tags, finish legends and traced outlines' },
    { code: '10-020', name: 'Wall finishes', status: 'review', reads: 'Finish legends, wall lines and schedules' },
    { code: '10-030', name: 'Ceilings', status: 'measures', reads: 'Reflected ceiling plans' },
    { code: '10-040', name: 'Decorations and protective coatings', status: 'review', reads: 'Finishes schedule decoration rows' },
  ] },
  { number: '11', title: 'Fittings and joinery', sections: [
    { code: '11-010', name: 'General joinery', status: 'measures', reads: 'Skirtings from traced room outlines' },
    { code: '11-020', name: 'Fitted furniture and equipment', status: 'measures', reads: 'Kitchen and furniture schedules' },
    { code: '11-030', name: 'Loose furniture, fittings and equipment', status: 'measures', reads: 'Room data sheets, cell by cell' },
    { code: '11-040', name: 'Sanitary appliances', status: 'review', reads: 'Room data sheets and sanitaryware plans' },
  ] },
  { number: '12', title: 'Building services', sections: [
    { code: '12-010', name: 'Above-ground water services', status: 'measures', reads: 'Pipe runs by system colour' },
    { code: '12-020', name: 'Above-ground drainage', status: 'measures', reads: 'Leader labels by size' },
    { code: '12-030', name: 'Heating systems', status: 'measures', reads: 'Equipment schedules and plan tags' },
    { code: '12-040', name: 'Cooling and refrigeration systems', status: 'measures', reads: 'Equipment schedules' },
    { code: '12-050', name: 'Ventilation and air conditioning', status: 'measures', reads: 'Equipment schedules and duct runs' },
    { code: '12-060', name: 'Electrical power distribution', status: 'measures', reads: 'Symbols, DB schedules, containment runs' },
    { code: '12-070', name: 'Lighting and emergency lighting', status: 'measures', reads: 'Luminaire symbols' },
    { code: '12-080', name: 'Communications and data', status: 'measures', reads: 'Outlet symbols and containment' },
    { code: '12-090', name: 'Security and access control', status: 'measures', reads: 'CCTV and access control layouts' },
    { code: '12-100', name: 'Fire detection and alarm', status: 'measures', reads: 'Detector symbols' },
    { code: '12-110', name: 'Fire suppression', status: 'roadmap' },
    { code: '12-120', name: 'Controls and building management systems', status: 'measures', reads: 'Control panel schedules' },
    { code: '12-130', name: 'Lifts and lifting equipment', status: 'roadmap' },
    { code: '12-140', name: 'Renewable and low-carbon systems', status: 'roadmap' },
    { code: '12-150', name: 'Testing, commissioning and handover', status: 'roadmap' },
  ] },
  { number: '13', title: 'External works', sections: [
    { code: '13-010', name: 'External roads, paving and kerbs', status: 'measures', reads: 'Joint labels and reinstatement areas' },
    { code: '13-020', name: 'External drainage', status: 'measures', reads: 'Manhole schedules, keyed drain runs, gullies' },
    { code: '13-030', name: 'External utilities', status: 'measures', reads: 'Labelled service runs' },
    { code: '13-040', name: 'Soft landscaping', status: 'roadmap' },
    { code: '13-050', name: 'Fencing, gates and site furniture', status: 'measures', reads: 'Barrier, bollard and fence symbols' },
    { code: '13-060', name: 'External structures', status: 'review', reads: 'Canopy steel and purlins' },
  ] },
  { number: '14', title: 'Specification', sections: [
    { code: '14-010', name: 'Specifications and performance requirements', status: 'review', reads: 'Specification clauses' },
  ] },
  { number: '15', title: 'Commercial', sections: [
    { code: '15-010', name: 'Commercial authority and provisional items', status: 'roadmap' },
  ] },
]

const allSections = coverage.flatMap(group => group.sections)
export const coverageCounts = {
  total: allSections.length,
  measures: allSections.filter(section => section.status === 'measures').length,
  review: allSections.filter(section => section.status === 'review').length,
  roadmap: allSections.filter(section => section.status === 'roadmap').length,
}

export const readerCount = 42

export const steps = [
  { number: '01', title: 'Load the pack', text: 'Drop in the full tender pack: architectural, structural, civils and services drawings, schedules, room data sheets and specifications. No pre-sorting.' },
  { number: '02', title: 'Every sheet is read', text: 'Each sheet is classified by discipline and role, then routed to the specialist readers that understand it: plans, elevations, schedules, legends, key notes and runs.' },
  { number: '03', title: 'A draft bill is built', text: 'Quantities are measured into NRM2 work sections with units, descriptions and the exact sheet and mark each figure came from. Judgement calls are raised, not hidden.' },
  { number: '04', title: 'Your QS reviews and certifies', text: 'Work through a review queue with the evidence beside every line, accept or correct, have a second person certify, then export to Excel.' },
]

export const readsList = [
  { title: 'Plans and layouts', items: ['GA and floor plans', 'Reflected ceiling plans', 'Partition and finishes plans', 'Foundation and slab layouts'] },
  { title: 'Schedules', items: ['Door, window and ironmongery', 'Finishes and room data sheets', 'Equipment and manhole', 'Bar bending and pile schedules'] },
  { title: 'Elevations and sections', items: ['Cladding panel joints', 'Brick bond hatching', 'Curtain wall views', 'Wall and stair sheets'] },
  { title: 'Services and civils', items: ['Pipe and duct runs', 'Electrical symbols and containment', 'Drainage runs and gullies', 'Kerbs, paving and earthworks'] },
]

export const formats = ['Vector PDF', 'Scanned and stroked-text PDF', 'Rotated and colour-coded sheets', 'Images', 'IFC models', 'Specifications (PDF, DOCX, RTF, TXT)', 'Spreadsheets']

export const audiences = [
  { title: 'Specialist subcontractors', text: 'Drylining, ceilings, flooring, finishes, doors and ironmongery. Price more tenders in the same week, with every quantity traceable when the main contractor asks how you got there.', tag: 'Fit-out first' },
  { title: 'Quantity surveying practices', text: 'Hand your surveyors a structured first draft with the evidence attached, so their expertise goes on judgement, queries and checking rather than counting.', tag: 'Review, not re-measure' },
  { title: 'Contractors and estimating teams', text: 'Turn incoming tender packs into a reviewable bill fast enough to decide whether to bid, and spot the scope that is missing before you commit.', tag: 'Bid / no-bid sooner' },
]

export const locales = [
  { region: 'United Kingdom', standard: 'NRM2 (2021)', currency: 'GBP', status: 'Default profile' },
  { region: 'Ireland', standard: 'Set by your local QS', currency: 'EUR', status: 'Local QS review' },
  { region: 'Gulf (GCC)', standard: 'Set by your local QS', currency: 'AED · SAR · QAR', status: 'Local QS review' },
]

export const pilots = [
  {
    name: 'Design partner', price: 'No fee', note: 'Limited places', featured: true,
    summary: 'Shape the product with us. A capped six-week evaluation on your own past projects, compared against the bills you already have.',
    includes: ['Two projects, up to 50 files each', 'Runs on your own Windows 11 machine', 'Local and offline: nothing leaves your device', 'Four named accounts, including a separate certifier', 'Go / no-go review after the first project'],
  },
  {
    name: 'Starter pilot', price: '£2,500', note: '+ VAT · 5 working days',
    summary: 'One team testing whether the workflow fits how you price.',
    includes: ['One project or tender pack', 'Up to 50 files', 'Extraction pass and findings call', 'Summary report with evidence and issues'],
  },
  {
    name: 'Standard pilot', price: '£7,500', note: '+ VAT · 2–3 weeks',
    summary: 'A serious evaluation against your own completed bills.',
    includes: ['Up to 3 packs, 250 files', 'Review queue and evidence report', 'Comparison against your own bills', 'Terminology set-up for your trades', '50% credited to a first licence'],
  },
  {
    name: 'Private deployment', price: 'From £15,000', note: '+ VAT · 3–6 weeks',
    summary: 'For organisations whose documents cannot leave a controlled environment.',
    includes: ['Private or controlled local set-up', 'Data-handling review with your IT team', 'Project pack processing and report', 'Technical handover session'],
  },
]

export const pilotFaqs = [
  { q: 'Do we have to upload our drawings anywhere?', a: 'No. BOQ Extract runs on a Windows computer you control. Pilot installations run locally and offline, with network processing and paid AI providers switched off.' },
  { q: 'Can we price a live tender from the output?', a: 'Not during a pilot. Pilot output is a review-required draft. The point of a pilot is to compare it with bills you already trust and find out exactly where it helps and where a person still needs to step in.' },
  { q: 'What do you need from us?', a: 'Drawing packs you have the right to share with us, the bills you produced for them, some time from a named QS, and honest feedback. We agree in writing what is kept, for how long and for what purpose.' },
  { q: 'Which trades work best today?', a: 'Internal fit-out trades are the strongest starting point: partitions, ceilings, room finishes, doors, windows and ironmongery schedules. The coverage page shows the current status of every NRM2 work section.' },
  { q: 'Do you publish accuracy figures?', a: 'Only for work sections that an independent, RICS-registered QS has certified against real projects. Until then we show you the evidence for every line and let you judge it against your own bills.' },
]
