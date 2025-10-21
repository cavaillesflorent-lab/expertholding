'use client'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { routes } from '@/config/routes'

export default function Header({ currentPage = 'accueil' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [mobileCreerOpen, setMobileCreerOpen] = useState(false)
  const [mobileGererOpen, setMobileGererOpen] = useState(false)
  const [mobileLegalOpen, setMobileLegalOpen] = useState(false)

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">EH</span>
            </div>
            <span className="font-bold text-xl text-slate-900">ExpertHolding.fr</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {routes.mainNav.map((item) => {
              // Menu "Créer" avec HOVER
              if (item.id === 'creer' && item.hasSubmenu) {
                return (
                  <div key={item.id} className="relative group">
                    <button
                      className={`font-medium transition flex items-center ${
                        currentPage === item.id ? 'text-amber-600' : 'text-slate-600 hover:text-amber-600'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                    </button>
                    
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-slate-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                      <div className="px-4 py-2 border-b border-slate-200">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Stratégies de création</p>
                      </div>
                      <a href={item.href} className="block px-4 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors border-b border-slate-100">
                        <strong>Créer sa Holding</strong>
                        <p className="text-xs text-slate-500 mt-1">Vue d'ensemble et démarches</p>
                      </a>
                      {routes.creerSubmenu.map((subItem) => (
                        <a key={subItem.id} href={subItem.href} className="block px-4 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                          <strong>{subItem.label}</strong>
                          <p className="text-xs text-slate-500 mt-1">{subItem.description}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                )
              }

              // Menu "Gérer" avec HOVER
              if (item.id === 'gerer' && item.hasSubmenu) {
                return (
                  <div key={item.id} className="relative group">
                    <button
                      className={`font-medium transition flex items-center ${
                        currentPage === item.id ? 'text-amber-600' : 'text-slate-600 hover:text-amber-600'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                    </button>
                    
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-slate-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                      <div className="px-4 py-2 border-b border-slate-200">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Gestion & Optimisation</p>
                      </div>
                      <a href={item.href} className="block px-4 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors border-b border-slate-100">
                        <strong>Gérer sa Holding</strong>
                        <p className="text-xs text-slate-500 mt-1">Vue d'ensemble de la gestion</p>
                      </a>
                      {routes.gererSubmenu.map((subItem) => (
                        <a key={subItem.id} href={subItem.href} className="block px-4 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                          <strong>{subItem.label}</strong>
                          <p className="text-xs text-slate-500 mt-1">{subItem.description}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                )
              }
              
              // Menu "Expertise" avec HOVER
              if (item.id === 'expertise' && item.hasSubmenu) {
                return (
                  <div key={item.id} className="relative group">
                    <button
                      className={`font-medium transition flex items-center ${
                        currentPage === item.id ? 'text-amber-600' : 'text-slate-600 hover:text-amber-600'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                    </button>
                    
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-slate-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                      <div className="px-4 py-2 border-b border-slate-200">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Nos Solutions d'Investissement</p>
                      </div>
                      <a href={item.href} className="block px-4 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors border-b border-slate-100">
                        <strong>Expertise Patrimoniale</strong>
                        <p className="text-xs text-slate-500 mt-1">Vue d'ensemble de nos services</p>
                      </a>
                      <div className="max-h-96 overflow-y-auto">
                        {routes.solutions.map((solution) => (
                          <a key={solution.id} href={solution.href} className="block px-4 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                            {solution.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              // Menu "Légal" avec HOVER
              if (item.id === 'legal' && item.hasSubmenu) {
                return (
                  <div key={item.id} className="relative group">
                    <button
                      className={`font-medium transition flex items-center ${
                        currentPage === item.id ? 'text-amber-600' : 'text-slate-600 hover:text-amber-600'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                    </button>
                    
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-slate-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                      <div className="px-4 py-2 border-b border-slate-200">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Références juridiques CGI</p>
                      </div>
                      <a href={item.href} className="block px-4 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors border-b border-slate-100">
                        <strong>Cadre Légal des Holdings</strong>
                        <p className="text-xs text-slate-500 mt-1">Vue d'ensemble des textes applicables</p>
                      </a>
                      {routes.legalSubmenu.map((subItem) => (
                        <a key={subItem.id} href={subItem.href} className="block px-4 py-3 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                          <strong>{subItem.label}</strong>
                          <p className="text-xs text-slate-500 mt-1">{subItem.description}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                )
              }
              
              // Liens simples
              return (
                <a key={item.id} href={item.href} className={`font-medium transition ${currentPage === item.id ? 'text-amber-600' : 'text-slate-600 hover:text-amber-600'}`}>
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center">
            <a href="https://taap.it/i3gsEr" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition">Prendre RDV</a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-slate-600 hover:text-amber-600 transition">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu mobile - reste avec onClick car nécessaire sur mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              {routes.mainNav.map((item) => {
                // Menu "Créer" mobile
                if (item.id === 'creer' && item.hasSubmenu) {
                  return (
                    <div key={item.id}>
                      <div className="flex items-center justify-between">
                        <a href={item.href} className={`font-medium transition ${currentPage === item.id ? 'text-amber-600' : 'text-slate-600 hover:text-amber-600'}`} onClick={() => setMobileMenuOpen(false)}>
                          {item.label}
                        </a>
                        <button onClick={() => setMobileCreerOpen(!mobileCreerOpen)} className="p-2 text-slate-600 hover:text-amber-600">
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileCreerOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {mobileCreerOpen && (
                        <div className="mt-2 ml-4 space-y-2 pl-4 border-l-2 border-amber-200">
                          {routes.creerSubmenu.map((subItem) => (
                            <a key={subItem.id} href={subItem.href} className="block text-sm text-slate-600 hover:text-amber-600 transition py-1" onClick={() => setMobileMenuOpen(false)}>
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }

                // Menu "Gérer" mobile
                if (item.id === 'gerer' && item.hasSubmenu) {
                  return (
                    <div key={item.id}>
                      <div className="flex items-center justify-between">
                        <a href={item.href} className={`font-medium transition ${currentPage === item.id ? 'text-amber-600' : 'text-slate-600 hover:text-amber-600'}`} onClick={() => setMobileMenuOpen(false)}>
                          {item.label}
                        </a>
                        <button onClick={() => setMobileGererOpen(!mobileGererOpen)} className="p-2 text-slate-600 hover:text-amber-600">
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileGererOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {mobileGererOpen && (
                        <div className="mt-2 ml-4 space-y-2 pl-4 border-l-2 border-amber-200">
                          {routes.gererSubmenu.map((subItem) => (
                            <a key={subItem.id} href={subItem.href} className="block text-sm text-slate-600 hover:text-amber-600 transition py-1" onClick={() => setMobileMenuOpen(false)}>
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }
                
                // Menu "Expertise" mobile
                if (item.id === 'expertise' && item.hasSubmenu) {
                  return (
                    <div key={item.id}>
                      <div className="flex items-center justify-between">
                        <a href={item.href} className={`font-medium transition ${currentPage === item.id ? 'text-amber-600' : 'text-slate-600 hover:text-amber-600'}`} onClick={() => setMobileMenuOpen(false)}>
                          {item.label}
                        </a>
                        <button onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)} className="p-2 text-slate-600 hover:text-amber-600">
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {mobileSolutionsOpen && (
                        <div className="mt-2 ml-4 space-y-2 pl-4 border-l-2 border-amber-200">
                          {routes.solutions.map((solution) => (
                            <a key={solution.id} href={solution.href} className="block text-sm text-slate-600 hover:text-amber-600 transition py-1" onClick={() => setMobileMenuOpen(false)}>
                              {solution.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }

                // Menu "Légal" mobile
                if (item.id === 'legal' && item.hasSubmenu) {
                  return (
                    <div key={item.id}>
                      <div className="flex items-center justify-between">
                        <a href={item.href} className={`font-medium transition ${currentPage === item.id ? 'text-amber-600' : 'text-slate-600 hover:text-amber-600'}`} onClick={() => setMobileMenuOpen(false)}>
                          {item.label}
                        </a>
                        <button onClick={() => setMobileLegalOpen(!mobileLegalOpen)} className="p-2 text-slate-600 hover:text-amber-600">
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileLegalOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {mobileLegalOpen && (
                        <div className="mt-2 ml-4 space-y-2 pl-4 border-l-2 border-amber-200">
                          {routes.legalSubmenu.map((subItem) => (
                            <a key={subItem.id} href={subItem.href} className="block text-sm text-slate-600 hover:text-amber-600 transition py-1" onClick={() => setMobileMenuOpen(false)}>
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }
                
                // Liens simples
                return (
                  <a key={item.id} href={item.href} className={`font-medium transition ${currentPage === item.id ? 'text-amber-600' : 'text-slate-600 hover:text-amber-600'}`} onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </a>
                )
              })}
              <div className="pt-4 border-t border-slate-200">
                <a href="https://taap.it/i3gsEr" target="_blank" rel="noopener noreferrer" className="block px-6 py-2 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition text-center">Prendre RDV</a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}