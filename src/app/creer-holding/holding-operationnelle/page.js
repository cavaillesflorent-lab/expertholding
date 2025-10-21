import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, CheckCircle, AlertTriangle, TrendingUp, Shield, FileText, Users, Briefcase, Award, Target, BarChart3 } from 'lucide-react'

export default function HoldingOperationnellePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="creer" />

      {/* Hero avec image */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80" 
            alt="Holding opérationnelle" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/95 via-amber-900/90 to-amber-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <a href="/" className="text-amber-200 hover:text-white transition-colors">Accueil</a>
            <ChevronRight size={16} className="text-amber-300" />
            <a href="/creer-holding" className="text-amber-200 hover:text-white transition-colors">Créer une Holding</a>
            <ChevronRight size={16} className="text-amber-300" />
            <span className="text-white">Holding Opérationnelle (Animatrice)</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
              Holding Opérationnelle (Animatrice) 2025
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 font-light mb-8 leading-relaxed">
              Animation active, Pacte Dutreil, exonération IFI et optimisation fiscale avancée
            </p>
            
            {/* Stats clés */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">75%</div>
                <div className="text-sm text-amber-100 font-light">Abattement Dutreil</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">7010Z</div>
                <div className="text-sm text-amber-100 font-light">Code APE animatrice</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">IFI</div>
                <div className="text-sm text-amber-100 font-light">Exonération totale</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sommaire */}
      <section className="py-12 bg-amber-50 border-y border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-light text-slate-900 mb-6">Sommaire</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Qu'est-ce qu'une holding animatrice ?",
              "Caractéristiques principales",
              "Prestations facturables",
              "Pacte Dutreil et transmission",
              "Holding pure vs animatrice",
              "Exemples concrets (2025)",
              "Comment prouver l'animation ?",
              "Avantages fiscaux",
              "Code APE 7010Z",
              "Guide de création"
            ].map((item, idx) => (
              <a key={idx} href={`#section-${idx + 1}`} className="flex items-center text-slate-600 hover:text-amber-600 font-light transition-colors">
                <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 : Définition */}
      <section id="section-1" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Qu'est-ce qu'une holding opérationnelle ?
              </h2>
              
              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <p>
                  La <strong className="text-slate-900">holding opérationnelle</strong>, aussi appelée <strong className="text-slate-900">holding active</strong> ou <strong className="text-slate-900">holding animatrice</strong>, est une société qui détient des participations dans d'autres sociétés et va plus loin qu'une holding pure : elle <strong className="text-slate-900">anime activement ses filiales</strong>.
                </p>

                <div className="bg-amber-50 border border-amber-100 p-6">
                  <h3 className="text-lg font-light text-slate-900 mb-3">⚖️ Cadre juridique</h3>
                  <div className="space-y-3 text-sm">
                    <p>
                      <strong>BOFiP-ENR-DMTG-10-20-40-10 § 55 :</strong> Le caractère principal d'animation se juge à l'effectivité et à la prédominance des actifs et des activités d'animation.
                    </p>
                    <p>
                      <strong>Rép. Min. n°23898, JO Sénat 01/12/2016 :</strong> La holding animatrice contrôle effectivement ses filiales et participe activement à leur gestion.
                    </p>
                    <p>
                      <strong>Cour de cassation, 15 mars 2023 :</strong> La convention d'animation ne suffit pas, il faut démontrer l'effectivité de l'activité.
                    </p>
                  </div>
                </div>

                <p>
                  Elle fournit des <strong className="text-slate-900">services concrets</strong> à ses filiales (administratif, RH, comptable, juridique, financier, stratégie...) et participe à la définition de la politique du groupe. Cette activité doit être <strong className="text-slate-900">réelle, régulière et prouvée</strong>.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
                alt="Animation groupe" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </div>

          {/* Ce qui fait une holding animatrice */}
          <div className="mt-16 bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 p-8">
            <h3 className="text-2xl font-light text-slate-900 mb-6">✅ Ce qui caractérise une holding animatrice</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-amber-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Participation active à la politique du groupe</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-amber-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Contrôle effectif des filiales (souvent {`>`}50%)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-amber-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Prestations de services internes facturées</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-amber-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Organisation avec personnel dédié</span>
                </li>
              </ul>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-amber-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Conventions d'animation formalisées</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-amber-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Chiffre d'affaires propre d'animation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-amber-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Code APE 7010Z (sièges sociaux)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-amber-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Preuves matérielles d'animation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Attention */}
          <div className="mt-8 border-l-4 border-red-500 bg-red-50 p-6">
            <div className="flex">
              <AlertTriangle className="text-red-500 flex-shrink-0 mr-4 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-light text-slate-900 mb-2">⚠️ Attention</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  La réunion de mandats sociaux identiques (même dirigeant dans la holding et filiale) ne suffit pas. Il faut prouver une vraie animation du groupe avec des <strong>éléments matériels</strong> : conventions, factures, rapports, organisation interne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : Caractéristiques */}
      <section id="section-2" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-16 text-center">
            Caractéristiques principales
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Stratégie de groupe", desc: "Définit et pilote la politique globale du groupe", color: "amber" },
              { icon: Briefcase, title: "Services aux filiales", desc: "RH, compta, juridique, finance, marketing, IT", color: "blue" },
              { icon: BarChart3, title: "Contrôle actif", desc: "Suit les performances et coordonne les activités", color: "emerald" },
              { icon: Users, title: "Organisation dédiée", desc: "Personnel et ressources affectés à l'animation", color: "slate" },
              { icon: FileText, title: "Facturation interne", desc: "Management fees facturés aux filiales", color: "amber" },
              { icon: Award, title: "Code APE 7010Z", desc: "Activités des sièges sociaux", color: "blue" }
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-white border border-slate-100 p-8 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center mb-6`}>
                    <Icon className={`text-${item.color}-600`} size={24} />
                  </div>
                  <h3 className="text-xl font-light text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 3 : Prestations facturables */}
      <section id="section-3" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 text-center">
            Prestations facturables (Management Fees)
          </h2>
          <p className="text-lg text-slate-600 font-light text-center max-w-3xl mx-auto mb-16">
            La holding animatrice génère son propre chiffre d'affaires en facturant des services à ses filiales
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-amber-50 border border-amber-100 p-8">
              <h3 className="text-xl font-light text-slate-900 mb-6">Services administratifs et financiers</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-amber-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Direction financière mutualisée</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-amber-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Comptabilité et contrôle de gestion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-amber-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Gestion de trésorerie centralisée</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-amber-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Reporting et tableaux de bord</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-amber-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Relations bancaires groupe</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-100 p-8">
              <h3 className="text-xl font-light text-slate-900 mb-6">Services RH et juridiques</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Gestion RH et paie centralisée</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Recrutement et formation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Assistance juridique et contentieux</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Veille réglementaire</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Gestion des assurances groupe</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 p-8">
              <h3 className="text-xl font-light text-slate-900 mb-6">Services stratégiques</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Définition stratégie de groupe</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Coordination et pilotage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Développement et croissance externe</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Coaching des dirigeants filiales</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-8">
              <h3 className="text-xl font-light text-slate-900 mb-6">Services opérationnels</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-slate-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Marketing et communication groupe</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-slate-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Systèmes d'information (IT)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-slate-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Achats groupés et négociations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-slate-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Logistique et supply chain</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Modalités de facturation */}
          <div className="mt-12 bg-white border border-amber-200 p-8">
            <h3 className="text-xl font-light text-slate-900 mb-4">💰 Modalités de facturation</h3>
            <p className="text-sm text-slate-600 font-light mb-4">
              Les management fees doivent être facturés à un <strong>prix de marché</strong> (prix de transfert) pour éviter tout redressement fiscal. Plusieurs méthodes :
            </p>
            <ul className="space-y-2 text-sm text-slate-600 font-light">
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span><strong>Forfait mensuel ou annuel</strong> par filiale</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span><strong>Pourcentage du CA</strong> de la filiale (ex: 3-5%)</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span><strong>Refacturation au coût</strong> (temps passé + marge)</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-2">•</span>
                <span><strong>Mix des méthodes</strong> selon les prestations</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4 : Pacte Dutreil */}
      <section id="section-4" className="py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Pacte Dutreil et transmission
              </h2>
              
              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <p>
                  Le <strong className="text-slate-900">Pacte Dutreil</strong> est l'avantage fiscal majeur de la holding animatrice : il permet de bénéficier d'un <strong className="text-slate-900">abattement de 75%</strong> sur la valeur des titres transmis lors d'une donation ou succession.
                </p>

                <div className="bg-emerald-50 border border-emerald-100 p-6">
                  <h3 className="text-lg font-light text-slate-900 mb-3">🎯 Conditions du Pacte Dutreil</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span>La holding doit exercer une <strong>activité commerciale, industrielle, artisanale, libérale ou agricole</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span>Engagement collectif de conservation de <strong>2 ans minimum</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span>Engagement individuel de conservation de <strong>4 ans supplémentaires</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span>Un des bénéficiaires doit exercer une <strong>fonction de direction pendant 3 ans</strong></span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-100 p-6">
                  <h3 className="text-lg font-light text-slate-900 mb-3">💰 Exemple chiffré</h3>
                  <div className="space-y-3 text-sm">
                    <p><strong>Sans Pacte Dutreil :</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>• Valeur holding animatrice : 1 000 000€</li>
                      <li>• Droits de donation (après abattements) : ~250 000€</li>
                    </ul>
                    <p className="mt-3"><strong>Avec Pacte Dutreil :</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>• Valeur après abattement 75% : 250 000€</li>
                      <li>• Droits de donation : ~30 000€</li>
                      <li className="text-emerald-600 font-medium">• <strong>Économie : 220 000€ !</strong></li>
                    </ul>
                  </div>
                </div>

                <p className="text-sm">
                  ⚠️ <strong>Important :</strong> La holding pure ne permet PAS de bénéficier du Pacte Dutreil car elle n'exerce pas d'activité commerciale. Seule la holding animatrice en bénéficie.
                </p>
              </div>
            </div>

            <div className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80" 
                alt="Transmission familiale" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA intermédiaire */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
            Vous souhaitez créer une holding animatrice ?
          </h3>
          <p className="text-lg text-amber-100 font-light mb-8">
            Accompagnement complet : conventions d'animation, Pacte Dutreil, optimisation fiscale
          </p>
          <a 
            href="mailto:florent@occitea-ip.fr" 
            className="inline-block bg-white hover:bg-slate-50 text-amber-600 px-8 py-4 text-base font-light transition-all"
          >
            Prendre rendez-vous
          </a>
        </div>
      </section>

      {/* Section 5 : Comparaison */}
      <section id="section-5" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-16 text-center">
            Holding pure vs holding animatrice
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-light text-slate-900 border-b border-slate-200">Critère</th>
                  <th className="px-6 py-4 text-left text-sm font-light text-slate-900 border-b border-l border-slate-200">Holding Pure</th>
                  <th className="px-6 py-4 text-left text-sm font-light text-slate-900 border-b border-l border-slate-200 bg-amber-50">Holding Animatrice</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Activité</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">Détention passive</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200 bg-amber-50/50"><strong>Animation active</strong></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Prestations services</td>
                  <td className="px-6 py-4 text-sm text-red-600 border-b border-l border-slate-200">✗ Non</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 border-b border-l border-slate-200 bg-amber-50/50"><strong>✓ Oui (management fees)</strong></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Code APE</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">6420Z (Participations)</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200 bg-amber-50/50"><strong>7010Z (Sièges sociaux)</strong></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Pacte Dutreil</td>
                  <td className="px-6 py-4 text-sm text-red-600 border-b border-l border-slate-200">✗ Non</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 border-b border-l border-slate-200 bg-amber-50/50"><strong>✓ Oui (75% abattement)</strong></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Exonération IFI</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">Limitée</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 border-b border-l border-slate-200 bg-amber-50/50"><strong>✓ Totale possible</strong></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Complexité</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">Faible</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200 bg-amber-50/50">Moyenne à élevée</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600">Coûts annuels</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-l border-slate-200">1 500 - 2 500€</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-l border-slate-200 bg-amber-50/50">3 000 - 8 000€+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 6 : Exemples concrets */}
      <section id="section-6" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-16 text-center">
            Exemples concrets de holdings animatrices (2025)
          </h2>

          <div className="space-y-8">
            {/* Exemple 1 */}
            <div className="bg-white border border-amber-200 p-8">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-amber-600 font-light">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-light text-slate-900 mb-3">Holding SAS animatrice multisectorielle</h3>
                  <p className="text-sm text-slate-600 font-light mb-4">
                    <strong>Situation :</strong> "StratGroup SAS" détient 80% de "WebDev SAS" (agence web) et 70% de "Architech SARL" (architectes).
                  </p>
                  <div className="bg-amber-50 p-4 mb-4">
                    <p className="text-sm text-slate-600 font-light mb-2"><strong>Services facturés :</strong></p>
                    <ul className="text-sm text-slate-600 font-light space-y-1 ml-4">
                      <li>• Gestion RH centralisée (recrutement, paie)</li>
                      <li>• Direction financière stratégique</li>
                      <li>• Organisation formations internes</li>
                      <li>• Coordination marketing groupe</li>
                    </ul>
                  </div>
                  <p className="text-sm text-slate-600 font-light mb-2">
                    <strong>Organisation :</strong> Contrat d'animation + factures détaillées. Équipe dédiée : dirigeant, DAF, RH. Code APE 7010Z.
                  </p>
                  <p className="text-sm text-emerald-600 font-light">
                    <strong>Résultat :</strong> Chiffre d'affaires d'animation = 180K€/an. Éligible Pacte Dutreil et exonération IFI.
                  </p>
                </div>
              </div>
            </div>

            {/* Exemple 2 */}
            <div className="bg-white border border-blue-200 p-8">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-600 font-light">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-light text-slate-900 mb-3">Holding familiale animatrice</h3>
                  <p className="text-sm text-slate-600 font-light mb-4">
                    <strong>Situation :</strong> "FamilleAvance SAS" détient 65% PME agroalimentaire et 51% start-up tech (groupe familial).
                  </p>
                  <div className="bg-blue-50 p-4 mb-4">
                    <p className="text-sm text-slate-600 font-light mb-2"><strong>Services d'animation :</strong></p>
                    <ul className="text-sm text-slate-600 font-light space-y-1 ml-4">
                      <li>• Définition stratégie de groupe</li>
                      <li>• Pilotage décisions majeures</li>
                      <li>• Assistance juridique et administrative partagée</li>
                      <li>• Reporting trimestriel consolidé</li>
                    </ul>
                  </div>
                  <p className="text-sm text-emerald-600 font-light">
                    <strong>Avantage clé :</strong> Pacte Dutreil mis en place pour transmission (économie de 300K€ sur droits de donation).
                  </p>
                </div>
              </div>
            </div>

            {/* Exemple 3 */}
            <div className="bg-white border border-emerald-200 p-8">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-emerald-600 font-light">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-light text-slate-900 mb-3">Holding de croissance externe</h3>
                  <p className="text-sm text-slate-600 font-light mb-4">
                    <strong>Situation :</strong> "HoldCo Invest" rachète 3 sociétés (immobilier, logistique, services aux entreprises).
                  </p>
                  <div className="bg-emerald-50 p-4 mb-4">
                    <p className="text-sm text-slate-600 font-light mb-2"><strong>Services mutualisés :</strong></p>
                    <ul className="text-sm text-slate-600 font-light space-y-1 ml-4">
                      <li>• Centralisation comptabilité et RH</li>
                      <li>• Achats groupés fournitures</li>
                      <li>• Coordination stratégique</li>
                      <li>• Réunions mensuelles directeurs filiales</li>
                    </ul>
                  </div>
                  <p className="text-sm text-slate-600 font-light mb-2">
                    <strong>Organisation :</strong> Conventions d'animation détaillées, reporting semestriel, facturation mensuelle.
                  </p>
                  <p className="text-sm text-emerald-600 font-light">
                    <strong>Économies réalisées :</strong> 120K€/an sur frais administratifs + optimisation fiscale groupe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 : Preuves d'animation */}
      <section id="section-7" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 text-center">
            Comment prouver l'animation ?
          </h2>
          <p className="text-lg text-slate-600 font-light text-center mb-16">
            L'administration fiscale est stricte : il faut démontrer une animation effective et continue
          </p>

          <div className="space-y-6">
            {[
              {
                title: "1. Conventions d'animation formalisées",
                desc: "Contrats détaillant précisément les services fournis, les modalités de facturation, la durée, les obligations réciproques.",
                icon: FileText
              },
              {
                title: "2. Facturation régulière et tracée",
                desc: "Management fees facturés mensuellement ou trimestriellement avec description précise des prestations.",
                icon: TrendingUp
              },
              {
                title: "3. Organisation interne dédiée",
                desc: "Personnel affecté à l'animation (DAF, DRH, juriste...), locaux, moyens matériels (comptabilité séparée).",
                icon: Users
              },
              {
                title: "4. Rapports d'activité détaillés",
                desc: "Reporting annuel ou semestriel décrivant les actions d'animation réalisées, les réunions, les décisions prises.",
                icon: BarChart3
              },
              {
                title: "5. Preuves matérielles",
                desc: "Comptes-rendus de réunions, échanges emails, plannings d'intervention, tableaux de bord de pilotage.",
                icon: CheckCircle
              },
              {
                title: "6. Code APE 7010Z",
                desc: "Obtenir le code APE 'Activités des sièges sociaux' auprès de l'INSEE dès la création.",
                icon: Award
              }
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="border-l-4 border-amber-500 bg-amber-50 p-6">
                  <div className="flex">
                    <Icon className="text-amber-600 flex-shrink-0 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-light text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 border-l-4 border-red-500 bg-red-50 p-6">
            <div className="flex">
              <AlertTriangle className="text-red-500 flex-shrink-0 mr-4 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-light text-slate-900 mb-2">⚠️ Ce qui ne suffit PAS</h3>
                <ul className="text-sm text-slate-600 font-light space-y-2">
                  <li>• Avoir le même dirigeant dans la holding et les filiales</li>
                  <li>• Mentionner "animation" dans l'objet social uniquement</li>
                  <li>• Une simple convention d'animation sans mise en œuvre effective</li>
                  <li>• Des prestations fictives ou non réalisées</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Créez votre holding animatrice en toute sécurité
          </h2>
          <p className="text-xl text-slate-300 font-light mb-12 leading-relaxed">
            Accompagnement complet : conventions d'animation, Pacte Dutreil, preuves juridiques
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:florent@occitea-ip.fr" 
              className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-base font-light transition-all hover:shadow-xl"
            >
              Démarrer mon projet
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

      <Footer currentPage="creer" />
    </div>
  )
}