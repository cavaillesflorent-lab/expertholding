export default function sitemap() {
  const baseUrl = 'https://expertholding.fr'

  const routes = [
    // Page d'accueil
    {
      route: '',
      priority: 1,
      changeFrequency: 'weekly'
    },
    
    // Pages principales
    {
      route: '/creer-holding',
      priority: 0.9,
      changeFrequency: 'monthly'
    },
    {
      route: '/gerer-holding',
      priority: 0.9,
      changeFrequency: 'monthly'
    },
    {
      route: '/transmettre-holding',
      priority: 0.9,
      changeFrequency: 'monthly'
    },
    {
      route: '/expertise',
      priority: 0.9,
      changeFrequency: 'monthly'
    },
    {
      route: '/legal',
      priority: 0.9,
      changeFrequency: 'monthly'
    },
    {
      route: '/contact',
      priority: 0.8,
      changeFrequency: 'monthly'
    },
    {
      route: '/blog',
      priority: 0.8,
      changeFrequency: 'weekly'
    },
    
    // Section Créer - Sous-pages
    {
      route: '/creer-holding/holding-pure',
      priority: 0.8,
      changeFrequency: 'monthly'
    },
    {
      route: '/creer-holding/holding-operationnelle',
      priority: 0.8,
      changeFrequency: 'monthly'
    },
    {
      route: '/creer-holding/holding-familiale',
      priority: 0.8,
      changeFrequency: 'monthly'
    },
    {
      route: '/apport-cession',
      priority: 0.8,
      changeFrequency: 'monthly'
    },
    {
      route: '/holding-familiale',
      priority: 0.8,
      changeFrequency: 'monthly'
    },
    
    // Section Gérer - Sous-pages
    {
      route: '/gerer-holding/valoriser-entreprise',
      priority: 0.8,
      changeFrequency: 'monthly'
    },
    {
      route: '/gerer-holding/obo',
      priority: 0.8,
      changeFrequency: 'monthly'
    },
    {
      route: '/gerer-holding/lbo',
      priority: 0.8,
      changeFrequency: 'monthly'
    },
    
    // Section Légal - Sous-pages
    {
      route: '/legal/regime-mere-fille-integration-fiscale',
      priority: 0.8,
      changeFrequency: 'monthly'
    },
    {
      route: '/legal/report-imposition-1500BTER',  // ✅ CORRIGÉ ICI
      priority: 0.8,
      changeFrequency: 'monthly'
    },
    
    // Solutions (Expertise)
    {
      route: '/solutions/assurance-vie-luxembourgeoise',
      priority: 0.7,
      changeFrequency: 'monthly'
    },
    {
      route: '/solutions/contrat-capitalisation-luxembourgeois',
      priority: 0.7,
      changeFrequency: 'monthly'
    },
    {
      route: '/solutions/compte-titres',
      priority: 0.7,
      changeFrequency: 'monthly'
    },
    {
      route: '/solutions/private-equity',
      priority: 0.7,
      changeFrequency: 'monthly'
    },
    {
      route: '/solutions/immobilier',
      priority: 0.7,
      changeFrequency: 'monthly'
    },
    {
      route: '/solutions/defiscalisation',
      priority: 0.7,
      changeFrequency: 'monthly'
    },
    {
      route: '/solutions/scpi',
      priority: 0.7,
      changeFrequency: 'monthly'
    }
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: changeFrequency,
    priority: priority,
  }))

  return routes
}