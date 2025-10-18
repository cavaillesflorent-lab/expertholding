'EOF'
import { supabase } from '@/lib/supabase'

export default async function sitemap() {
  const baseUrl = 'https://expertholding.fr'

  const routes = [
    '',
    '/creer-holding',
    '/gerer-holding',
    '/transmettre-holding',
    '/expertise',
    '/contact',
    '/blog',
    '/apport-cession',
    '/holding-familiale',
    '/gerer-holding/valoriser-entreprise',
    '/gerer-holding/obo',
    '/gerer-holding/lbo',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  const { data: articles } = await supabase
    .from('articles')
    .select('slug, updated_at')
    .eq('published', true)

  const articleRoutes = (articles || []).map(article => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.updated_at),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...routes, ...articleRoutes]
}
EOF
