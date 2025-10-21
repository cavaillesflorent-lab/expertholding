import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, CheckCircle, AlertTriangle, Users, Heart, Shield, TrendingUp, Home, Gift, Scale } from 'lucide-react'

export default function HoldingFamilialePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="creer" />

      {/* Hero avec image */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1600&q=80" 
            alt="Holding familiale" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-purple-900/90 to-blue-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <a href="/" className="text-blue-200 hover:text-white transition-colors">Accueil</a>
            <ChevronRight size={16} className="text-blue-300" />
            <a href="/creer-holding" className="text-blue-200 hover:text-white transition-colors">Créer une Holding</a>
            <ChevronRight size={16} className="text-blue-300" />
            <span className="text-white">Holding Familiale</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
              Holding Familiale 2025
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light mb-8 leading-relaxed">
              Transmission patrimoniale, gouvernance familiale et optimisation fiscale
            </p>
            
            {/* Stats clés */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">75%</div>
                <div className="text-sm text-blue-100 font-light">Abattement transmission</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">100%</div>
                <div className="text-sm text-blue-100 font-light">Capital familial</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">Multi</div>
                <div className="text-sm text-blue-100 font-light">Générations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sommaire */}
      <section className="py-12 bg-blue-50 border-y border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-light text-slate-900 mb-6">Sommaire</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Qu'est-ce qu'une holding familiale ?",
              "Caractéristiques principales",
              "Pure ou animatrice ?",
              "Avantages clés en 2025",
              "Pacte Dutreil et transmission",
              "Gouvernance familiale",
              "Exemples concrets",
              "Formes juridiques",
              "Points d'attention",
              "Guide de création"
            ].map((item, idx) => (
              <a key={idx} href={`#section-${idx + 1}`} className="flex items-center text-slate-600 hover:text-blue-600 font-light transition-colors">
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
                Qu'est-ce qu'une holding familiale ?
              </h2>
              
              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <p>
                  La <strong className="text-slate-900">holding familiale</strong> n'est pas définie par la loi comme un type juridique à part, mais désigne une structure de détention de titres dont le capital est <strong className="text-slate-900">organisé autour d'une même famille</strong> : parents, enfants, conjoints, alliés.
                </p>

                <div className="bg-blue-50 border border-blue-100 p-6">
                  <h3 className="text-lg font-light text-slate-900 mb-3">🎯 Objectif principal</h3>
                  <p className="text-sm">
                    Optimiser la <strong>transmission du patrimoine</strong> professionnel et privé, sécuriser la valeur et la gouvernance familiale, tout en offrant souplesse fiscale et organisationnelle.
                  </p>
                </div>

                <p>
                  Cette structure peut prendre la forme :
                </p>
                <ul className="space-y-2 text-sm ml-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>D'une <strong>holding pure</strong> (simple gestion de titres)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>D'une <strong>holding animatrice</strong> (direction active du groupe et prestations)</span>
                  </li>
                </ul>

                <div className="bg-amber-50 border border-amber-100 p-4 mt-4">
                  <p className="text-sm text-slate-600 font-light">
                    💡 <strong>Important :</strong> Ce qui fait la "holding familiale", c'est la <strong>composition du capital</strong> (liens familiaux) et l'<strong>objectif de transmission</strong>, pas la forme juridique ou l'activité.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80" 
                alt="Famille entrepreneur" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
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
              { icon: Users, title: "Actionnariat familial", desc: "Parts détenues exclusivement par membres de la famille", color: "blue" },
              { icon: Gift, title: "Transmission facilitée", desc: "Passage du patrimoine entre générations optimisé", color: "purple" },
              { icon: Shield, title: "Contrôle unitaire", desc: "Unité capitalistique et décisions collectives", color: "emerald" },
              { icon: Scale, title: "Pactes structurants", desc: "Pactes d'associés et Pacte Dutreil", color: "amber" },
              { icon: Home, title: "Gouvernance familiale", desc: "Organisation et cohésion autour du projet", color: "blue" },
              { icon: TrendingUp, title: "Avantages fiscaux", desc: "Régime mère-fille, intégration fiscale", color: "emerald" }
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

          {/* Composition familiale */}
          <div className="mt-16 bg-blue-50 border border-blue-100 p-8">
            <h3 className="text-2xl font-light text-slate-900 mb-6">👨‍👩‍👧‍👦 Qui peut être associé ?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Parents (ascendants directs)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Enfants (descendants directs)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Conjoints (mariage ou PACS)</span>
                </li>
              </ul>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Frères et sœurs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Beaux-parents (alliés)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Petits-enfants</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 : Pure ou animatrice */}
      <section id="section-3" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 text-center">
            Holding familiale pure ou animatrice ?
          </h2>
          <p className="text-lg text-slate-600 font-light text-center max-w-3xl mx-auto mb-16">
            Une holding familiale peut être pure OU animatrice selon votre stratégie
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Holding familiale pure */}
            <div className="bg-slate-50 border border-slate-200 p-8">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <Home className="text-slate-600" size={24} />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-4">Holding Familiale Pure</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                Simple détention de titres familiaux (sociétés, SCI...). Pas d'animation active, pas de prestations facturées.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 font-light">Simplicité de gestion</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 font-light">Régime mère-fille (95% exonération)</span>
                </div>
                <div className="flex items-start">
                  <AlertTriangle size={20} className="text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 font-light">Pas de Pacte Dutreil</span>
                </div>
              </div>

              <div className="bg-white p-4 border border-slate-200">
                <p className="text-sm text-slate-600 font-light">
                  <strong>Idéale pour :</strong> Centraliser le patrimoine familial (immobilier, participations) sans complexité administrative.
                </p>
              </div>
            </div>

            {/* Holding familiale animatrice */}
            <div className="bg-blue-50 border border-blue-200 p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-4">Holding Familiale Animatrice</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed mb-6">
                Animation active du groupe familial, prestations de services facturées, contrôle effectif des filiales.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 font-light">Pacte Dutreil (75% abattement)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 font-light">Exonération IFI totale possible</span>
                </div>
                <div className="flex items-start">
                  <AlertTriangle size={20} className="text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 font-light">Animation à prouver (conventions, factures)</span>
                </div>
              </div>

              <div className="bg-white p-4 border border-blue-200">
                <p className="text-sm text-slate-600 font-light">
                  <strong>Idéale pour :</strong> Transmission optimisée (Pacte Dutreil) et pilotage actif du groupe familial.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 p-8">
            <h3 className="text-xl font-light text-slate-900 mb-4">💡 Comment choisir ?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-600 font-light">
              <div>
                <p className="mb-2"><strong>Choisissez la holding familiale PURE si :</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>• Objectif = centralisation simple du patrimoine</li>
                  <li>• Pas de projet de transmission à court terme</li>
                  <li>• Volonté de simplicité administrative</li>
                </ul>
              </div>
              <div>
                <p className="mb-2"><strong>Choisissez la holding familiale ANIMATRICE si :</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>• Objectif = transmission (Pacte Dutreil)</li>
                  <li>• Volonté de piloter activement le groupe</li>
                  <li>• Patrimoine conséquent ({`>`}2M€) avec IFI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA intermédiaire */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
            Structurez votre patrimoine familial en toute sérénité
          </h3>
          <p className="text-lg text-blue-100 font-light mb-8">
            Accompagnement complet : pactes familiaux, Pacte Dutreil, gouvernance intergénérationnelle
          </p>
          <a 
            href="https://taap.it/i3gsEr" 
            className="inline-block bg-white hover:bg-slate-50 text-blue-600 px-8 py-4 text-base font-light transition-all"
          >
            Prendre rendez-vous
          </a>
        </div>
      </section>

      {/* Section 4 : Avantages */}
      <section id="section-4" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-16 text-center">
            Avantages clés en 2025
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "1. Transmission patrimoniale optimisée",
                desc: "Pacte Dutreil (75% abattement), donation progressive, démembrement optimisé. Économie de droits de succession pouvant atteindre plusieurs centaines de milliers d'euros.",
                color: "blue"
              },
              {
                title: "2. Gouvernance familiale structurée",
                desc: "Cohésion familiale autour du projet professionnel, règles claires de gestion et de décision, anticipation des conflits via pactes d'associés.",
                color: "purple"
              },
              {
                title: "3. Protection des actifs familiaux",
                desc: "Séparation patrimoine privé/professionnel, cloisonnement des risques, protection contre les aléas individuels (divorce, décès, dettes).",
                color: "emerald"
              },
              {
                title: "4. Optimisation fiscale",
                desc: "Régime mère-fille (95% exonération dividendes), intégration fiscale (compensation bénéfices/pertes), quasi-exonération sur dividendes (article 145 CGI).",
                color: "amber"
              },
              {
                title: "5. Centralisation de la gestion",
                desc: "Mutualisation des fonctions support (finance, admin, RH, fiscalité), économies d'échelle, pilotage simplifié du groupe familial.",
                color: "slate"
              },
              {
                title: "6. Effet de levier pour croissance",
                desc: "Possibilité de racheter de nouvelles sociétés via la holding (LBO familial), centralisation des ressources financières du groupe.",
                color: "blue"
              }
            ].map((item, idx) => (
              <div key={idx} className={`border-l-4 border-${item.color}-500 bg-${item.color}-50 p-6`}>
                <h3 className="text-lg font-light text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 : Pacte Dutreil */}
      <section id="section-5" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" 
                alt="Transmission familiale" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Pacte Dutreil : l'avantage transmission
              </h2>
              
              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <p>
                  Le <strong className="text-slate-900">Pacte Dutreil</strong> est LE dispositif phare pour transmettre votre holding familiale avec un <strong className="text-slate-900">abattement de 75%</strong> sur les droits de donation ou succession.
                </p>

                <div className="bg-emerald-50 border border-emerald-100 p-6">
                  <h3 className="text-lg font-light text-slate-900 mb-3">✅ Conditions à respecter</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span>Holding familiale <strong>animatrice</strong> (activité commerciale effective)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span>Engagement collectif de conservation : <strong>2 ans minimum</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span>Engagement individuel : <strong>4 ans supplémentaires</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span>Un bénéficiaire doit exercer une <strong>fonction de direction pendant 3 ans</strong></span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-100 p-6">
                  <h3 className="text-lg font-light text-slate-900 mb-3">💰 Exemple chiffré (2025)</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium mb-1">Sans Pacte Dutreil :</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Valeur holding familiale : 2 000 000€</li>
                        <li>• Abattements classiques : 100 000€</li>
                        <li>• Base taxable : 1 900 000€</li>
                        <li>• Droits de donation (45%) : <strong>~650 000€</strong></li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Avec Pacte Dutreil :</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Abattement Dutreil (75%) : -1 500 000€</li>
                        <li>• Base taxable : 400 000€</li>
                        <li>• Droits de donation : <strong>~80 000€</strong></li>
                        <li className="text-emerald-600 font-medium">• <strong>Économie : 570 000€ !</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-amber-500 bg-amber-50 p-4">
                  <p className="text-sm text-slate-600 font-light">
                    ⚠️ <strong>Rappel :</strong> Seule la holding familiale <strong>animatrice</strong> permet de bénéficier du Pacte Dutreil. La holding pure n'y est pas éligible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 : Exemples concrets */}
      <section id="section-7" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-16 text-center">
            Exemples concrets de holdings familiales (2025)
          </h2>

          <div className="space-y-8">
            {/* Exemple 1 */}
            <div className="bg-white border border-blue-200 p-8">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-600 font-light">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-light text-slate-900 mb-3">Transmission familiale d'une PME</h3>
                  <p className="text-sm text-slate-600 font-light mb-4">
                    <strong>Situation :</strong> Deux parents (60 et 62 ans) détiennent une PME familiale (valorisation 3M€). Ils souhaitent transmettre à leurs 3 enfants.
                  </p>
                  <div className="bg-blue-50 p-4 mb-4">
                    <p className="text-sm text-slate-600 font-light mb-2"><strong>Solution :</strong></p>
                    <ul className="text-sm text-slate-600 font-light space-y-1 ml-4">
                      <li>• Création SAS holding familiale animatrice</li>
                      <li>• Apport des titres de la PME à la holding</li>
                      <li>• Mise en place Pacte Dutreil (engagement 2+4 ans)</li>
                      <li>• Donation progressive des parts de holding aux enfants</li>
                    </ul>
                  </div>
                  <p className="text-sm text-emerald-600 font-light">
                    <strong>Résultat :</strong> Économie de droits de succession : 450 000€. Pérennité et direction familiale assurées.
                  </p>
                </div>
              </div>
            </div>

            {/* Exemple 2 */}
            <div className="bg-white border border-purple-200 p-8">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-purple-600 font-light">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-light text-slate-900 mb-3">Holding familiale pure immobilière</h3>
                  <p className="text-sm text-slate-600 font-light mb-4">
                    <strong>Situation :</strong> Famille détenant 4 SCI (patrimoine locatif 5M€). Volonté de centraliser et préparer transmission.
                  </p>
                  <div className="bg-purple-50 p-4 mb-4">
                    <p className="text-sm text-slate-600 font-light mb-2"><strong>Solution :</strong></p>
                    <ul className="text-sm text-slate-600 font-light space-y-1 ml-4">
                      <li>• Création SARL holding familiale pure</li>
                      <li>• Holding détient 100% de chaque SCI</li>
                      <li>• Répartition des parts selon branches familiales</li>
                      <li>• Pactes d'associés pour encadrer cessions et gouvernance</li>
                    </ul>
                  </div>
                  <p className="text-sm text-emerald-600 font-light">
                    <strong>Avantages :</strong> Centralisation gestion, régime mère-fille, transmission simplifiée (1 holding vs 4 SCI).
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
                  <h3 className="text-xl font-light text-slate-900 mb-3">Holding familiale animatrice de groupe</h3>
                  <p className="text-sm text-slate-600 font-light mb-4">
                    <strong>Situation :</strong> Holding SAS familiale contrôle 3 sociétés secteurs différents (retail, services, industrie).
                  </p>
                  <div className="bg-emerald-50 p-4 mb-4">
                    <p className="text-sm text-slate-600 font-light mb-2"><strong>Organisation :</strong></p>
                    <ul className="text-sm text-slate-600 font-light space-y-1 ml-4">
                      <li>• Holding anime : stratégie groupe, fonctions admin et juridiques</li>
                      <li>• Chaque membre de la famille a un rôle (DG, DAF, DRH...)</li>
                      <li>• Conventions d'animation + facturation management fees</li>
                      <li>• Gouvernance collective structurée (conseil de famille)</li>
                    </ul>
                  </div>
                  <p className="text-sm text-emerald-600 font-light">
                    <strong>Avantages :</strong> Cohésion familiale, Pacte Dutreil éligible, exonération IFI, pilotage groupe optimisé.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 : Points d'attention */}
      <section id="section-9" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-16 text-center">
            Points d'attention
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Aucun statut juridique spécifique",
                desc: "C'est la composition du capital (familiale) et l'objectif de transmission qui caractérisent la holding familiale, non la forme juridique ou l'activité."
              },
              {
                title: "Rédaction soignée des statuts et pactes",
                desc: "Bien encadrer la gestion, les cessions de parts, les entrées/sorties, et la gouvernance intergénérationnelle via statuts et pactes d'associés."
              },
              {
                title: "Prouver l'activité pour le Pacte Dutreil",
                desc: "Si vous visez le Pacte Dutreil, votre holding familiale doit être animatrice avec preuves matérielles d'animation (conventions, factures, rapports)."
              },
              {
                title: "Anticiper les conflits familiaux",
                desc: "Prévoir des clauses d'agrément, de préemption, de médiation familiale. Le pacte d'associés est essentiel pour éviter les blocages."
              },
              {
                title: "Respecter les engagements de conservation",
                desc: "Pour le Pacte Dutreil ou le régime mère-fille : engagements de conservation à respecter scrupuleusement (2 ans minimum)."
              }
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-red-500 bg-red-50 p-6">
                <div className="flex">
                  <AlertTriangle className="text-red-500 flex-shrink-0 mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-light text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Structurez votre holding familiale
          </h2>
          <p className="text-xl text-slate-300 font-light mb-12 leading-relaxed">
            Accompagnement complet : pactes familiaux, Pacte Dutreil, optimisation transmission
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://taap.it/i3gsEr" 
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base font-light transition-all hover:shadow-xl"
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