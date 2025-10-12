import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TrendingUp, Shield, Users, ChevronRight, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="accueil" />

      {/* Hero avec image background */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Image background avec overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80" 
            alt="Bureau moderne" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <a 
              href="https://www.forbes.fr/mediasfrance/occitea-patrimoine/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-amber-600/10 backdrop-blur-sm border border-amber-600/20 mb-8 hover:bg-amber-600/20 transition-colors"
            >
              <span className="text-amber-400 text-sm font-light tracking-wide">VU SUR FORBES</span>
            </a>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
              Expert en Structuration de <span className="text-amber-400">Holding</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 leading-relaxed">
              Accompagnement des dirigeants dans la création, gestion et transmission de holdings patrimoniales
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://taap.it/i3gsEr"
                className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-base font-light transition-all hover:shadow-xl hover:scale-105"
              >
                Prendre rendez-vous
              </a>
              <a 
                href="tel:0607963135" 
                className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 text-base font-light backdrop-blur-sm transition-all"
              >
                06 07 96 31 35
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-amber-600 mb-3">95%</div>
              <div className="text-slate-600 font-light">d'exonération fiscale sur dividendes</div>
            </div>
            <div className="text-center border-x border-slate-100">
              <div className="text-4xl md:text-5xl font-light text-amber-600 mb-3">12+</div>
              <div className="text-slate-600 font-light">années d'expérience patrimoniale</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-amber-600 mb-3">360°</div>
              <div className="text-slate-600 font-light">approche globale avec réseau d'experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Spécialisation - avec photo */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Texte */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Notre Spécialisation : Holding de <span className="text-amber-600">1M€ à 30M€</span>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                Nous accompagnons exclusivement les dirigeants de PME et ETI dans la structuration optimale de leur patrimoine professionnel. Notre expertise se concentre sur les holdings dont l'actif se situe entre 1 et 30 millions d'euros, une taille critique qui nécessite une approche sur-mesure.
              </p>

              <div className="space-y-6">
                <div className="border-l-2 border-amber-600 pl-6">
                  <h3 className="text-xl font-light text-slate-900 mb-2">1M€ - 5M€ : Primo-création</h3>
                  <p className="text-slate-600 font-light">
                    Structuration initiale, régime mère-fille, optimisation fiscale de base
                  </p>
                </div>
                
                <div className="border-l-2 border-amber-600 pl-6">
                  <h3 className="text-xl font-light text-slate-900 mb-2">5M€ - 15M€ : Consolidation</h3>
                  <p className="text-slate-600 font-light">
                    Intégration fiscale, holding animatrice, diversification patrimoniale
                  </p>
                </div>
                
                <div className="border-l-2 border-amber-600 pl-6">
                  <h3 className="text-xl font-light text-slate-900 mb-2">15M€ - 30M€ : Transmission</h3>
                  <p className="text-slate-600 font-light">
                    Pacte Dutreil, démembrement, family buy-out, philanthropie
                  </p>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80" 
                alt="Conseil en gestion patrimoniale" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi une Holding */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
              Pourquoi créer une holding en 2025 ?
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              La holding patrimoniale est un outil puissant pour optimiser, protéger et transmettre votre patrimoine professionnel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white border border-slate-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-light text-slate-900 mb-3">Optimisation Fiscale</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">
                Régime mère-fille : exonération de 95% sur les dividendes remontés. Intégration fiscale pour compenser résultats déficitaires et bénéficiaires.
              </p>
              <div className="text-amber-600 font-light text-sm">Économie moyenne : 50k€/an</div>
            </div>
            
            <div className="group bg-white border border-slate-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-light text-slate-900 mb-3">Protection Patrimoniale</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">
                Séparation des actifs professionnels et personnels. Protection contre les créanciers. Sécurisation du patrimoine familial.
              </p>
              <div className="text-blue-600 font-light text-sm">Sécurité juridique renforcée</div>
            </div>
            
            <div className="group bg-white border border-slate-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-light text-slate-900 mb-3">Transmission Facilitée</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">
                Pacte Dutreil : jusqu'à 75% d'abattement. Donation progressive sans perte de contrôle. Démembrement de propriété optimisé.
              </p>
              <div className="text-emerald-600 font-light text-sm">Économie : jusqu'à 300k€</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tableau comparatif */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">
              Avec ou sans holding ?
            </h2>
            <p className="text-lg text-slate-600 font-light">
              Comparatif concret sur une distribution de 100k€ de dividendes
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-light text-slate-900 border-b border-slate-200">Critère</th>
                  <th className="px-6 py-4 text-left text-sm font-light text-slate-900 border-b border-l border-slate-200">Sans Holding</th>
                  <th className="px-6 py-4 text-left text-sm font-light text-amber-600 border-b border-l border-slate-200">Avec Holding</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Dividendes distribués</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">100 000 €</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">100 000 €</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Flat tax (30%)</td>
                  <td className="px-6 py-4 text-sm text-red-600 border-b border-l border-slate-200">- 30 000 €</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 border-b border-l border-slate-200">Exonéré à 95%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Quote-part 5%</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">N/A</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">- 1 250 € (IS 25%)</td>
                </tr>
                <tr className="bg-slate-50 font-medium">
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-slate-200">Net perçu</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">70 000 €</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 border-b border-l border-slate-200">98 750 €</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="px-6 py-4 text-base font-light text-slate-900">Gain fiscal</td>
                  <td className="px-6 py-4 text-base font-light text-slate-900 border-l border-slate-200">—</td>
                  <td className="px-6 py-4 text-base font-light text-amber-600 border-l border-slate-200">+ 28 750 € / an</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-amber-50 border border-amber-100">
            <p className="text-sm text-slate-700 font-light leading-relaxed">
              <strong className="text-amber-600">Sur 10 ans :</strong> économie fiscale cumulée de 287 500 € (hors actualisation), soit l'équivalent de 3 années de dividendes supplémentaires disponibles pour réinvestir ou transmettre.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Méthode */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
              Notre Méthode d'Accompagnement
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Une approche structurée en 4 étapes pour sécuriser votre projet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Audit Patrimonial", desc: "Analyse complète de votre situation actuelle et de vos objectifs" },
              { num: "02", title: "Stratégie Sur-Mesure", desc: "Élaboration d'une structure optimale adaptée à votre profil" },
              { num: "03", title: "Mise en Œuvre", desc: "Coordination avec nos partenaires (notaire, avocat, expert-comptable)" },
              { num: "04", title: "Suivi & Optimisation", desc: "Accompagnement continu et ajustements stratégiques" }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-light text-amber-600/20 mb-4">{step.num}</div>
                <h3 className="text-xl font-light text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">{step.desc}</p>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-12 -right-4">
                    <ChevronRight className="text-slate-300" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog - 3 derniers articles avec photos */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">
                Derniers articles
              </h2>
              <p className="text-lg text-slate-600 font-light">
                Actualités et analyses sur la structuration patrimoniale
              </p>
            </div>
            <a href="/blog" className="hidden md:inline-flex items-center text-amber-600 hover:text-amber-700 font-light transition-colors">
              Voir tous les articles <ArrowRight className="ml-2" size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="group bg-white border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://unsplash.com/fr/photos/person-in-black-long-sleeve-shirt-holding-persons-hand-Y5bvRlcCx8k" 
                  alt="Régime mère-fille" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white px-3 py-1 text-xs font-light">Fiscalité</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-slate-500 font-light mb-3">15 mars 2025</p>
                <h3 className="text-xl font-light text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  Régime mère-fille 2025 : optimisez vos distributions de dividendes
                </h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed mb-4">
                  Le régime mère-fille permet une exonération d'impôt à 95% sur les dividendes perçus par la holding. Décryptage des conditions et opportunités en 2025.
                </p>
                <a href="/blog/regime-mere-fille-2025" className="inline-flex items-center text-amber-600 hover:text-amber-700 text-sm font-light transition-colors">
                  Lire l'article <ArrowRight className="ml-1" size={14} />
                </a>
              </div>
            </article>

            {/* Article 2 */}
            <article className="group bg-white border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80" 
                  alt="Pacte Dutreil" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 text-xs font-light">Transmission</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-slate-500 font-light mb-3">8 mars 2025</p>
                <h3 className="text-xl font-light text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  Pacte Dutreil : transmettre votre holding avec 75% d'abattement
                </h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed mb-4">
                  Le pacte Dutreil reste l'outil le plus puissant pour transmettre votre entreprise à moindre coût fiscal. Guide complet des conditions et pièges à éviter.
                </p>
                <a href="/blog/pacte-dutreil-guide-complet" className="inline-flex items-center text-amber-600 hover:text-amber-700 text-sm font-light transition-colors">
                  Lire l'article <ArrowRight className="ml-1" size={14} />
                </a>
              </div>
            </article>

            {/* Article 3 */}
            <article className="group bg-white border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80" 
                  alt="Holding animatrice" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 text-xs font-light">Structuration</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-slate-500 font-light mb-3">1 mars 2025</p>
                <h3 className="text-xl font-light text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  Holding animatrice : les 5 critères de l'administration fiscale
                </h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed mb-4">
                  L'animation doit être effective, continue et réelle. Analyse jurisprudentielle des critères retenus par l'administration et le Conseil d'État.
                </p>
                <a href="/blog/holding-animatrice-criteres" className="inline-flex items-center text-amber-600 hover:text-amber-700 text-sm font-light transition-colors">
                  Lire l'article <ArrowRight className="ml-1" size={14} />
                </a>
              </div>
            </article>
          </div>

          <div className="text-center mt-12 md:hidden">
            <a href="/blog" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-light transition-colors">
              Voir tous les articles <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-cta" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M0 32V0h32" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-cta)"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Prêt à optimiser votre structure patrimoniale ?
          </h2>
          <p className="text-xl text-slate-300 font-light mb-12 leading-relaxed">
            Échangeons sur votre situation et vos objectifs lors d'un premier rendez-vous sans engagement
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://taap.it/i3gsEr" 
              className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-base font-light transition-all hover:shadow-xl hover:scale-105"
            >
              Prendre rendez-vous
            </a>
            <a 
              href="tel:0607963135" 
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 text-base font-light backdrop-blur-sm transition-all"
            >
              06 07 96 31 35
            </a>
          </div>
        </div>
      </section>

      <Footer currentPage="accueil" />
    </div>
  )
}