import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join, relative } from 'node:path'

const root = new URL('../dist/', import.meta.url).pathname
const errors = []

if (!existsSync(root)) {
  console.error('SEO audit requires a production build in dist/. Run npm run build first.')
  process.exit(1)
}

const walk = directory => readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
  const path = join(directory, entry.name)
  return entry.isDirectory() ? walk(path) : [path]
})

const htmlFiles = walk(root).filter(file => file.endsWith('.html'))
const sitemapPath = join(root, 'sitemap-0.xml')
const sitemap = existsSync(sitemapPath) ? readFileSync(sitemapPath, 'utf8') : ''
const decode = value => value
  .replaceAll('&amp;', '&')
  .replaceAll('&#39;', "'")
  .replaceAll('&quot;', '"')

for (const file of htmlFiles) {
  const page = '/' + relative(root, file).replaceAll('\\', '/').replace(/index\.html$/, '')
  const html = readFileSync(file, 'utf8')
  const title = decode(html.match(/<title>(.*?)<\/title>/)?.[1] ?? '')
  const description = decode(html.match(/<meta name="description" content="(.*?)">/)?.[1] ?? '')
  const canonical = html.match(/<link rel="canonical" href="(.*?)">/)?.[1] ?? ''
  const robots = html.match(/<meta name="robots" content="(.*?)">/)?.[1] ?? ''
  const indexable = robots.startsWith('index,')
  const h1Count = [...html.matchAll(/<h1(?:\s|>)/g)].length

  if (!title || title.length > 65) errors.push(`${page}: title length is ${title.length}`)
  if (!description || (indexable && (description.length < 70 || description.length > 160))) errors.push(`${page}: description length is ${description.length}`)
  if (!canonical) errors.push(`${page}: canonical is missing`)
  if (!robots) errors.push(`${page}: robots directive is missing`)
  if (indexable && h1Count !== 1) errors.push(`${page}: expected one H1, found ${h1Count}`)
  if (indexable && canonical && !sitemap.includes(`<loc>${canonical}</loc>`)) errors.push(`${page}: canonical is absent from sitemap`)
  if (!indexable && canonical && sitemap.includes(`<loc>${canonical}</loc>`)) errors.push(`${page}: noindex URL appears in sitemap`)
  if (!html.includes('property="og:title"') || !html.includes('name="twitter:card"')) errors.push(`${page}: social metadata is incomplete`)

  for (const block of html.split('<script type="application/ld+json">').slice(1)) {
    try { JSON.parse(block.split('</script>')[0]) }
    catch { errors.push(`${page}: JSON-LD is invalid`) }
  }

  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = match[1].split('#')[0].split('?')[0]
    if (!href || href.includes('.')) continue
    const target = href === '/' ? join(root, 'index.html') : join(root, href, 'index.html')
    if (!existsSync(target)) errors.push(`${page}: broken internal link ${href}`)
  }
}

if (errors.length) {
  console.error(`SEO audit failed with ${errors.length} issue(s):\n- ${errors.join('\n- ')}`)
  process.exit(1)
}

console.log(`SEO audit passed: ${htmlFiles.length} HTML pages, sitemap coverage, metadata, schema and internal links verified.`)
