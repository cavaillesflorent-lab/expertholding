export default function sitemap() {
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

  return routes
}