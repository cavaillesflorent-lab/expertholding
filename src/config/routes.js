// Configuration des routes du site
export const routes = {
  mainNav: [
    {
      id: 'accueil',
      label: 'Accueil',
      href: '/'
    },
    {
      id: 'creer',
      label: 'Créer',
      href: '/creer-holding/',
      hasSubmenu: true
    },
    {
      id: 'gerer',
      label: 'Gérer',
      href: '/gerer-holding/',
      hasSubmenu: true
    },
    {
      id: 'transmettre',
      label: 'Transmettre',
      href: '/transmettre-holding/'
    },
    {
      id: 'expertise',
      label: 'Expertise',
      href: '/expertise/',
      hasSubmenu: true
    },
    {
      id: 'legal',
      label: 'Légal',
      href: '/legal/',
      hasSubmenu: true
    },
    {
      id: 'contact',
      label: 'Contact',
      href: '/contact/'
    }
  ],

  creerSubmenu: [
    {
      id: 'holding-pure',
      label: 'Holding Pure',
      href: '/creer-holding/holding-pure/',
      description: 'Holding passive dédiée à la gestion de participations'
    },
    {
      id: 'holding-operationnelle',
      label: 'Holding Opérationnelle',
      href: '/creer-holding/holding-operationnelle/',
      description: 'Holding active avec activité propre'
    },
    {
      id: 'holding-familiale',
      label: 'Holding Familiale',
      href: '/creer-holding/holding-familiale/',
      description: 'Structurer et transmettre votre patrimoine'
    },
    {
      id: 'apport-cession',
      label: 'Apport-Cession',
      href: '/apport-cession/',
      description: 'Optimiser la fiscalité de votre cession'
    }
  ],

  gererSubmenu: [
    {
      id: 'valoriser-entreprise',
      label: 'Valoriser mon entreprise',
      href: '/gerer-holding/valoriser-entreprise/',
      description: 'Méthodes de valorisation'
    },
    {
      id: 'obo',
      label: 'OBO - Owner Buy-Out',
      href: '/gerer-holding/obo/',
      description: 'Vente à soi-même via holding'
    },
    {
      id: 'lbo',
      label: 'LBO - Leverage Buy-Out',
      href: '/gerer-holding/lbo/',
      description: 'Acquisition par effet de levier'
    }
  ],

  legalSubmenu: [
    {
      id: 'regime-mere-fille',
      label: 'Régime mère-fille et intégration fiscale',
      description: 'Articles 145, 216 et 223 A du CGI',
      href: '/legal/regime-mere-fille-integration-fiscale/'
    },
    {
      id: 'report-imposition',
      label: 'Report d\'imposition',
      description: 'Article 150-0 B ter du CGI',
      href: '/legal/report-imposition-1500BTER/'
    }
  ],

  // Pages villes (SEO local) ✅ MIS À JOUR - 5 VILLES
  villes: [
    {
      id: 'toulouse',
      slug: 'Toulouse',
      label: 'Toulouse',
      region: 'Occitanie',
      href: '/villes/Toulouse/',
      description: 'Expert holding aéronautique, spatial, biotech à Toulouse',
      title: 'Création de Holding à Toulouse | Expert Aéronautique & Biotech',
      metaDescription: 'Expert holding à Toulouse. Structuration holdings pour dirigeants PME aéronautique, biotech et IA. Régime mère-fille, optimisation fiscale, transmission.',
      keywords: [
        'holding toulouse',
        'création holding toulouse',
        'expert holding toulouse',
        'holding aéronautique toulouse',
        'holding biotech toulouse'
      ],
      sectors: ['Aéronautique', 'Spatial', 'Biotech', 'IA']
    },
    {
      id: 'paris',
      slug: 'Paris',
      label: 'Paris',
      region: 'Île-de-France',
      href: '/villes/Paris/',
      description: 'Expert holding groupes, investisseurs, luxe, fintech à Paris',
      title: 'Création de Holding à Paris | Expert Groupes & Investisseurs',
      metaDescription: 'Expert holding à Paris. Structuration holdings pour dirigeants de groupes, investisseurs, luxe, fintech et industrie. Régime mère-fille, optimisation fiscale.',
      keywords: [
        'holding paris',
        'création holding paris',
        'expert holding paris',
        'holding investissement paris',
        'holding luxe paris',
        'holding fintech paris'
      ],
      sectors: ['Finance', 'Luxe', 'Fintech', 'IA', 'Industrie']
    },
    {
      id: 'lyon',
      slug: 'Lyon',
      label: 'Lyon',
      region: 'Auvergne-Rhône-Alpes',
      href: '/villes/Lyon/',
      description: 'Expert holding chimie, pharma, biotech à Lyon',
      title: 'Création de Holding à Lyon | Expert Chimie, Pharma & Biotech',
      metaDescription: 'Expert holding à Lyon. Structuration holdings pour dirigeants PME chimie, pharma, biotech. Vallée de la Chimie, Lyonbiopôle. Régime mère-fille, optimisation fiscale.',
      keywords: [
        'holding lyon',
        'création holding lyon',
        'expert holding lyon',
        'holding chimie lyon',
        'holding pharma lyon',
        'vallée de la chimie',
        'lyonbiopôle'
      ],
      sectors: ['Chimie', 'Pharma', 'Biotech', 'Métallurgie']
    },
    {
      id: 'marseille',
      slug: 'Marseille',
      label: 'Marseille',
      region: 'Provence-Alpes-Côte d\'Azur',
      href: '/villes/Marseille/',
      description: 'Expert holding maritime, portuaire, logistique à Marseille',
      title: 'Création de Holding à Marseille | Expert Maritime & Logistique',
      metaDescription: 'Expert holding à Marseille. Structuration holdings pour dirigeants PME maritimes, portuaires, logistiques et transition énergétique. Port Marseille-Fos, Zone Fos.',
      keywords: [
        'holding marseille',
        'création holding marseille',
        'expert holding marseille',
        'holding maritime marseille',
        'holding portuaire marseille',
        'holding logistique marseille',
        'port marseille fos',
        'zone industrialo-portuaire fos'
      ],
      sectors: ['Maritime', 'Portuaire', 'Logistique', 'Transition énergétique']
    },
    {
      id: 'bordeaux',
      slug: 'Bordeaux',
      label: 'Bordeaux',
      region: 'Nouvelle-Aquitaine',
      href: '/villes/Bordeaux/',
      description: 'Expert holding vin, aéronautique, biotech à Bordeaux',
      title: 'Création de Holding à Bordeaux | Expert Vin & Aéronautique',
      metaDescription: 'Expert holding à Bordeaux. Structuration holdings pour propriétaires domaines viticoles et dirigeants groupes aéronautique, santé, numérique. Pacte Dutreil.',
      keywords: [
        'holding bordeaux',
        'création holding bordeaux',
        'expert holding bordeaux',
        'holding viticole bordeaux',
        'holding vin bordeaux',
        'domaine viticole holding',
        'pacte dutreil bordeaux',
        'holding aéronautique bordeaux',
        'holding biotech bordeaux',
        'transmission domaine viticole'
      ],
      sectors: ['Vin', 'Aéronautique', 'Santé', 'Numérique', 'Biotech']
    }
  ],

  solutions: [
    { 
      id: 'assurance-vie-lux',
      label: 'Assurance-vie luxembourgeoise', 
      href: '/solutions/assurance-vie-luxembourgeoise/'
    },
    { 
      id: 'capitalisation-lux',
      label: 'Contrat de capitalisation luxembourgeois', 
      href: '/solutions/contrat-capitalisation-luxembourgeois/'
    },
    { 
      id: 'compte-titres',
      label: 'Compte titres', 
      href: '/solutions/compte-titres/'
    },
    { 
      id: 'private-equity',
      label: 'Private Equity', 
      href: '/solutions/private-equity/'
    },
    { 
      id: 'immobilier',
      label: 'Immobilier', 
      href: '/solutions/immobilier/'
    },
    { 
      id: 'defiscalisation',
      label: 'Défiscalisation', 
      href: '/solutions/defiscalisation/'
    },
    { 
      id: 'scpi',
      label: 'SCPI', 
      href: '/solutions/scpi/'
    }
  ],

  // Routes admin (non affichées dans nav publique)
  admin: {
    login: '/admin/login',
    dashboard: '/admin/dashboard',
    articlesNew: '/admin/articles/new',
    articlesEdit: (id) => `/admin/articles/edit/${id}`
  },

  contact: {
    email: 'florent@occitea-ip.fr',
    phone: '0607963135',
    phoneFormatted: '06 07 96 31 35'
  },

  social: {
    forbes: 'https://www.forbes.fr/mediasfrance/occitea-patrimoine/'
  }
}

// Helper functions pour les villes ✅
export const getVilleBySlug = (slug) => {
  return routes.villes.find(v => v.slug.toLowerCase() === slug.toLowerCase())
}

export const getVilleById = (id) => {
  return routes.villes.find(v => v.id === id)
}

export const getAllVilles = () => {
  return routes.villes
}

export const getVillesByRegion = (region) => {
  return routes.villes.filter(v => v.region === region)
}

export const getVillesNavLinks = () => {
  return routes.villes.map(ville => ({
    label: ville.label,
    href: ville.href,
    region: ville.region
  }))
}