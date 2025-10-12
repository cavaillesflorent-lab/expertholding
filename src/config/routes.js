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
      href: '/creer-holding/',  // ✅ Ajout du /
      hasSubmenu: true
    },
    {
      id: 'gerer',
      label: 'Gérer',
      href: '/gerer-holding/',  // ✅ Ajout du /
      hasSubmenu: true
    },
    {
      id: 'transmettre',
      label: 'Transmettre',
      href: '/transmettre-holding/'  // ✅ Ajout du /
    },
    {
      id: 'expertise',
      label: 'Expertise',
      href: '/expertise/',  // ✅ Ajout du /
      hasSubmenu: true
    },
    {
      id: 'contact',
      label: 'Contact',
      href: '/contact/'  // ✅ Ajout du /
    }
  ],
  
  creerSubmenu: [
    {
      id: 'apport-cession',
      label: 'Apport-Cession',
      href: '/apport-cession/',  // ✅ Ajout du /
      description: 'Optimiser la fiscalité de votre cession'
    },
    {
      id: 'holding-familiale',
      label: 'Holding Familiale',
      href: '/holding-familiale/',  // ✅ Ajout du /
      description: 'Structurer et transmettre votre patrimoine'
    }
  ],

  gererSubmenu: [
    {
      id: 'valoriser-entreprise',
      label: 'Valoriser mon entreprise',
      href: '/gerer-holding/valoriser-entreprise/',  // ✅ Ajout du /
      description: 'Méthodes de valorisation'
    },
    {
      id: 'obo',
      label: 'OBO - Owner Buy-Out',
      href: '/gerer-holding/obo/',  // ✅ Ajout du /
      description: 'Vente à soi-même via holding'
    },
    {
      id: 'lbo',
      label: 'LBO - Leverage Buy-Out',
      href: '/gerer-holding/lbo/',  // ✅ Ajout du /
      description: 'Acquisition par effet de levier'
    }
  ],
  
  solutions: [
    { 
      id: 'assurance-vie-lux',
      label: 'Assurance-vie luxembourgeoise', 
      href: '/solutions/assurance-vie-luxembourgeoise/'  // ✅ Ajout du /
    },
    { 
      id: 'capitalisation-lux',
      label: 'Contrat de capitalisation luxembourgeois', 
      href: '/solutions/contrat-capitalisation-luxembourgeois/'  // ✅ Ajout du /
    },
    { 
      id: 'compte-titres',
      label: 'Compte titres', 
      href: '/solutions/compte-titres/'  // ✅ Ajout du /
    },
    { 
      id: 'private-equity',
      label: 'Private Equity', 
      href: '/solutions/private-equity/'  // ✅ Ajout du /
    },
    { 
      id: 'immobilier',
      label: 'Immobilier', 
      href: '/solutions/immobilier/'  // ✅ Ajout du /
    },
    { 
      id: 'defiscalisation',
      label: 'Défiscalisation', 
      href: '/solutions/defiscalisation/'  // ✅ Ajout du /
    },
    { 
      id: 'scpi',
      label: 'SCPI', 
      href: '/solutions/scpi/'  // ✅ Ajout du /
    }
  ],

  contact: {
    email: 'florent@occitea-ip.fr',
    phone: '0607963135',
    phoneFormatted: '06 07 96 31 35'
  },

  social: {
    forbes: 'https://www.forbes.fr/mediasfrance/occitea-patrimoine/'
  }
}