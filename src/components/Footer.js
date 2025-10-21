import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer({ currentPage = 'accueil' }) {
  const navItems = [
    { name: 'Accueil', href: '/', key: 'accueil' },
    { name: 'Créer sa Holding', href: '/creer-holding', key: 'creer' },
    { name: 'Gérer sa Holding', href: '/gerer-holding', key: 'gerer' },
    { name: 'Transmettre sa Holding', href: '/transmettre-holding', key: 'transmettre' },
    { name: 'Expertise', href: '/expertise', key: 'expertise' },
    { name: 'Légal', href: '/legal', key: 'legal' },
    { name: 'Contact', href: '/contact', key: 'contact' }
  ]

  const ressources = [
    { name: 'Articles & Conseils', href: '/blog', key: 'blog' },
    { name: 'Valorisation de société', href: 'https://taap.it/eyGWUj', key: 'valorisation', external: true }
  ]

  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Présentation */}
          <div className="md:col-span-2">
            <div className="text-2xl font-light tracking-tight text-slate-900 mb-4">
              ExpertHolding<span className="text-amber-600">.fr</span>
            </div>
            <p className="text-slate-600 font-light leading-relaxed mb-6">
              Expert en structuration de holdings patrimoniales. Accompagnement des dirigeants de PME et ETI dans l'optimisation, la protection et la transmission de leur patrimoine professionnel.
            </p>
            <div className="space-y-2 text-sm text-slate-600 font-light">
              <p>Florent Cavailles - Ingénieur Patrimonial</p>
              <p>Occitea Patrimoine</p>
              <div className="flex items-start space-x-2 mt-2">
                <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <p>504 route des Gaux, 81290 Labruguière</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-light text-slate-900 mb-4 uppercase tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className={`font-light transition-colors ${
                      currentPage === item.key
                        ? 'text-amber-600 font-medium'
                        : 'text-slate-600 hover:text-amber-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-sm font-light text-slate-900 mb-4 uppercase tracking-wide">
              Ressources
            </h3>
            <ul className="space-y-3">
              {ressources.map((item) => (
                <li key={item.key}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-amber-600 font-light transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={`font-light transition-colors ${
                        currentPage === item.key
                          ? 'text-amber-600 font-medium'
                          : 'text-slate-600 hover:text-amber-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-light text-slate-900 mb-4 uppercase tracking-wide">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:0607963135"
                  className="flex items-center space-x-2 text-slate-600 hover:text-amber-600 font-light transition-colors group"
                >
                  <Phone className="w-4 h-4 text-slate-400 group-hover:text-amber-600" />
                  <span className="font-medium">06 07 96 31 35</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:florent@occitea-ip.fr"
                  className="flex items-center space-x-2 text-slate-600 hover:text-amber-600 font-light transition-colors group"
                >
                  <Mail className="w-4 h-4 text-slate-400 group-hover:text-amber-600" />
                  <span>florent@occitea-ip.fr</span>
                </a>
              </li>
              <li className="mt-4 pt-2">
                <a
                  href="https://taap.it/i3gsEr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-amber-500 text-white text-sm rounded hover:bg-amber-600 transition"
                >
                  Prendre rendez-vous
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright et accréditations */}
        <div className="pt-8 border-t border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <div className="flex flex-wrap gap-6 text-xs text-slate-500 font-light">
              <span>Membre ANACOFI</span>
              <span>Conseiller en investissement financier, Membre ANACOFI CIF sous le numéro n°E010441</span>
              <span>Enregistré ORIAS sous le numéro 21008193</span>
            </div>
          </div>
          
          {/* Liens légaux et copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-slate-50">
            <div className="text-xs text-slate-500 font-light">
              © 2025 Occitea Patrimoine - Tous droits réservés
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-light">
              <Link 
                href="/mentions-legales" 
                className="text-slate-500 hover:text-amber-600 transition-colors"
              >
                Mentions légales
              </Link>
              <span className="text-slate-300">•</span>
              <Link 
                href="/politique-confidentialite" 
                className="text-slate-500 hover:text-amber-600 transition-colors"
              >
                Politique de confidentialité
              </Link>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500">SIRET : 903 529 386 00018</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}