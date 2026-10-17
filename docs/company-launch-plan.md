# Twin Tech-sudo company launch plan

Owner checklist for forming and launching a UK software business. Website engineering tasks are tracked separately from actions requiring the founder's identity, money, legal judgement or third-party accounts. This is an operational plan, not legal, tax or financial advice.

## Launch blockers

- [ ] Obtain a written name-clearance opinion before incorporation or a trade mark filing. An active `TWIN TECH LIMITED` (company 11031904) is registered for IT consultancy, so a Companies House availability check alone is not enough.
- [ ] Decide the exact legal name, trading name, product names, spelling and punctuation.
- [ ] Acquire the primary `.co.uk`, `.com` if available, common misspellings and matching social handles before the trade mark application becomes public.
- [ ] Activate and test `hello@twintech-sudo.co.uk`; do not direct enquiries to it until DNS and mail delivery pass.
- [x] Choose the initial commercial structure. The site leads with Twin Tech-sudo as an all-software digital product studio. Individual industries appear only through relevant work and editorial content, not as the company identity.

## Trade mark workstream

1. Search UKIPO for exact, similar, phonetic and dominant-element matches for `Twin Tech-sudo`, `Twin Tech`, `TwinTech`, `Twin Technology` and likely product marks.
2. Search Companies House, ordinary web results, domain names, GitHub, LinkedIn and relevant software directories.
3. Instruct a UK trade mark attorney to assess confusion risk in the software and IT-services market.
4. Decide the owner before filing. Prefer the incorporated company if it is intended to own the brand; otherwise document a later assignment.
5. Agree a precise goods/services specification. Candidate classes for professional review:
   - Class 42: software design and development, SaaS, technical consultancy and AI/software services.
   - Class 9: downloadable software and applications where products will be distributed.
   - Class 35 only where actual business/e-commerce services justify it.
6. File the word mark first if cleared. File the logo separately only when its additional protection justifies the cost.
7. Use `TM` while pending and `®` only after registration. Diary the ten-year renewal and monitor later conflicting filings.

Current official filing fees must be checked on the day of filing. At 17 October 2026, the online fee is £205 for one class plus £60 per additional class. Right Start is £125 initially and the same balance if the application continues.

## Incorporation and ownership

- [ ] Confirm with an accountant that a private company limited by shares is appropriate.
- [ ] Verify every director and person with significant control through Companies House.
- [ ] Arrange an appropriate registered office and director service address; avoid publishing a home address unintentionally.
- [ ] Decide founder shares, voting, reserved matters and what happens on death, incapacity, departure or a future investment.
- [ ] Incorporate, obtain the certificate and UTR, then open a company bank account and company Government Gateway account.
- [ ] Choose accurate SIC codes based on actual activities.
- [ ] Execute a founder-to-company IP assignment covering the website, brand, software repositories, documentation, domains and product assets created before incorporation.
- [ ] Maintain an IP/dependency register and require written IP clauses from every contractor and supplier.

## Finance and statutory operations

- [ ] Appoint an accountant and configure bookkeeping, invoice numbering, receipt capture and monthly reconciliation.
- [ ] Record first-accounts, Corporation Tax and annual confirmation-statement deadlines.
- [ ] Monitor the VAT registration threshold and obtain advice on voluntary registration for B2B work.
- [ ] Register PAYE before the first salary payment where required.
- [ ] Create a cash-flow forecast, tax reserve and approval rule for spending.
- [ ] Obtain professional indemnity and cyber insurance; consider public liability. Obtain legally required employers' liability cover before employing staff, subject to any applicable exemption.

## Contracts and data protection

- [ ] Have a solicitor review a master services agreement, statement of work, change control, acceptance, support terms, limitation of liability and IP model.
- [ ] Prepare product licence/SaaS terms if software products will be supplied separately from services.
- [ ] Prepare contractor terms, NDA, data processing agreement and subprocessor schedule.
- [ ] Complete the ICO data protection fee self-assessment and pay if required.
- [ ] Create a record of processing: data categories, purposes, lawful bases, recipients, transfers, retention and deletion.
- [ ] Review the website privacy, cookie and terms drafts against real suppliers and company particulars before commercial launch.
- [ ] Establish access control, MFA, encrypted devices, backups, vulnerability handling, incident response and data-subject request procedures.

## Domain, email and website release

1. Configure the selected domain with the hosting provider and enforce HTTPS.
2. Verify the apex and `www` behaviour; choose one canonical origin and permanently redirect the other.
3. Configure SPF, DKIM and DMARC for the company mail domain and test inbound/outbound delivery.
4. Set GitHub Actions variables:
   - `PUBLIC_SITE_URL`
   - `PUBLIC_LEGAL_NAME`
   - `PUBLIC_COMPANY_NUMBER`
   - `PUBLIC_REGISTERED_OFFICE`
   - `PUBLIC_COMPANY_JURISDICTION`
   - `PUBLIC_CONTACT_EMAIL` (only after a real send-and-reply test passes)
5. Rebuild and confirm the custom origin appears in canonicals, Open Graph URLs, JSON-LD, RSS, `robots.txt` and both sitemap files.
6. Have legal pages reviewed, verify every public claim and obtain permission for every client name, logo, testimonial and result.
7. Run the production build on Node 22.12+, check all internal links, and test the site on mobile and keyboard-only navigation.

## Search launch

- [ ] Create a Google Search Console Domain property and verify it through DNS.
- [ ] Submit `/sitemap-index.xml` after it contains only final custom-domain URLs.
- [ ] Inspect the homepage, primary service page, about page and an insight; verify rendered content, Google-selected canonical and mobile usability.
- [ ] Request indexing for the small set of priority pages rather than every URL repeatedly.
- [ ] Configure GA4 only after the cookie notice is accurate; set `PUBLIC_GA_MEASUREMENT_ID` as a secret and test accept, reject and reopen-settings paths.
- [ ] Add Bing Webmaster Tools and submit the same sitemap.
- [ ] Review indexing, search queries, Core Web Vitals and enquiry events weekly for eight weeks.

## Evidence-led marketing

- [x] Establish a clear studio-level proposition. Implemented on 17 October 2026 with studio-led homepage copy and seven broad software capabilities; sector experience remains in case studies and supporting articles.
- [ ] Publish a real founder profile and experience evidence.
- [ ] Keep owned products and concepts clearly labelled; do not present illustrative interface figures as measured outcomes.
- [ ] Publish case studies only with permission and distinguish scope, evidence and results.
- [ ] Build one content cluster around the primary buyer's real questions, with each article linking to a relevant service and case study.
- [ ] Obtain legitimate links and citations from customers, partners and relevant professional organisations; do not buy backlinks or generate duplicate location pages.

## Go-live gate

Commercial promotion starts only when name clearance, a working domain and mailbox, company/IP ownership, accurate company particulars, legal review, verified claims, production build, Search Console verification and an evidence-backed primary offer are all complete.

## Official references

- Companies House incorporation: https://www.gov.uk/limited-company-formation/register-your-company
- Companies House identity verification: https://www.gov.uk/guidance/verifying-your-identity-for-companies-house
- Website company disclosures: https://www.gov.uk/running-a-limited-company/signs-stationery-and-promotional-material
- UKIPO classification: https://www.gov.uk/guidance/how-to-classify-trade-marks
- UKIPO process and fees: https://www.gov.uk/government/publications/process-for-applying-to-register-for-a-trade-mark/trade-marks-timeline
- ICO fee checker: https://ico.org.uk/fee-checker
- ICO small-business data protection guide: https://ico.org.uk/for-organisations/advice-for-small-organisations/getting-started-with-gdpr/getting-started-with-data-protection/
- Google sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
