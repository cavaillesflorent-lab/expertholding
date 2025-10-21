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
      description: 'Détention passive de participations'
    },
    {
      id: 'holding-operationnelle',
      label: 'Holding Opérationnelle',
      href: '/creer-holding/holding-operationnelle/',
      description: 'Animation active de filiales'
    },
    {
      id: 'holding-familiale',
      label: 'Holding Familiale',
      href: '/creer-holding/holding-familiale/',
      description: 'Structuration patrimoniale familiale'
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
      href: '/legal/regime-mere-fille-integration-fiscale/',
      description: 'Articles 145, 216 et 223 A du CGI'
    },
    {
      id: 'report-imposition',
      label: 'Report d\'imposition',
      href: '/legal/report-imposition-150-0-b-ter/',
      description: 'Article 150-0 B ter du CGI'
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