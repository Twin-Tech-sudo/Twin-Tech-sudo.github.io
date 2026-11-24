import type { APIRoute } from 'astro'
import { articles, site } from '../data/site'

export const GET: APIRoute = () => {
  const items = articles.map(article => `<item><title><![CDATA[${article.title}]]></title><link>${site.url}/insights/${article.slug}/</link><guid>${site.url}/insights/${article.slug}/</guid><pubDate>${new Date(article.date).toUTCString()}</pubDate><description><![CDATA[${article.description}]]></description></item>`).join('')
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>BOQ Extract Insights</title><link>${site.url}/insights/</link><description>Guidance on automated takeoff, NRM2 and evaluating construction software.</description>${items}</channel></rss>`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
