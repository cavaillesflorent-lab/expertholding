import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, CheckCircle, AlertTriangle, FileText, TrendingUp, Shield, Users } from 'lucide-react'

export default function CreerHoldingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="creer" />

      {/* Hero avec image */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80" 
            alt="Création holding" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <a href="/" className="text-slate-300 hover:text-white transition-colors">Accueil</a>
            <ChevronRight size={16} className="text-slate-400" />
            <span className="text-amber-400">Créer sa Holding</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
              Créer sa Holding en 2025
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 leading-relaxed">
              Guide complet : types, utilité, étapes et bonnes pratiques juridiques
            </p>
          </div>
        </div>
      </section>

      {/* Sommaire */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-light text-slate-900 mb-6">Sommaire</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Qu'est-ce qu'une holding ?",
              "Les différents types de holding",
              "Pourquoi créer une holding ?",
              "Étapes de création",
              "Régimes fiscaux",
              "Pièges à éviter"
            ].map((item, idx) => (
              <a key={idx} href={`#section-${idx + 1}`} className="flex items-center text-slate-600 hover:text-amber-600 font-light transition-colors">
                <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-8">
              Créer une holding est un levier efficace de structuration patrimoniale et de pilotage de groupe. Ce guide expose, de façon opérationnelle et juridique, la démarche pour créer sa holding en 2025, les types de holdings, leur utilité concrète, ainsi que les bonnes pratiques indispensables.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 : Qu'est-ce qu'une holding */}
      <section id="section-1" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Qu'est-ce qu'une holding ?
              </h2>
              
              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <p>
                  Une holding (ou société holding) est une société dont l'objet principal consiste à détenir des participations dans d'autres sociétés (les « filiales »). Elle peut revêtir toute forme sociale (SAS, SARL, SA, etc.), mais la SAS est la plus courante pour sa souplesse statutaire.
                </p>

                <div className="bg-amber-50 border border-amber-100 p-6">
                  <h3 className="text-lg font-light text-slate-900 mb-3">Définition juridique</h3>
                  <p className="text-sm">
                    Selon le Code de commerce (art. L233-1 et suivants), une société est considérée comme holding dès lors qu'elle détient des participations lui conférant le contrôle d'une ou plusieurs autres sociétés, ou qu'elle exerce une influence notable sur leur gestion.
                  </p>
                </div>

                <p>
                  La holding se distingue d'une société opérationnelle classique par le fait qu'elle n'exerce pas (ou peu) d'activité commerciale ou industrielle directe. Son patrimoine est essentiellement constitué de titres de participation.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80" 
                alt="Structure holding" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : Types de holding avec photos */}
      <section id="section-2" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-16 text-center">
            Les différents types de holding
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Holding pure avec photo */}
            <div className="bg-white border border-slate-100 overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" 
                  alt="Holding pure" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FileText className="text-blue-600" size={24} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-slate-900 mb-4">Holding Pure</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-6">
                  Simple détention de titres, sans intervention dans la gestion courante des filiales. La holding perçoit dividendes et plus-values, mais n'anime pas activement le groupe.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 font-light">Régime mère-fille applicable</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 font-light">Structure simple à gérer</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle size={20} className="text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 font-light">Pas de Pacte Dutreil possible</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Holding opérationnelle avec photo */}
            <div className="bg-amber-50 border border-amber-100 overflow-hidden">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80" 
                  alt="Holding opérationnelle" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-amber-600" size={24} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light text-slate-900 mb-4">Holding opérationnelle</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-6">
                  Participe activement à la conduite de la politique du groupe et au contrôle des filiales (services administratifs, stratégie, contrôle de gestion, etc.).
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 font-light">Pacte Dutreil éligible</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 font-light">Intégration fiscale possible</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle size={20} className="text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 font-light">Animation à prouver (jurisprudence stricte)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tableau comparatif */}
          <div className="overflow-x-auto">
            <table className="w-full border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-light text-slate-900 border-b border-slate-200">Critère</th>
                  <th className="px-6 py-4 text-left text-sm font-light text-slate-900 border-b border-l border-slate-200">Holding pure</th>
                  <th className="px-6 py-4 text-left text-sm font-light text-slate-900 border-b border-l border-slate-200">Holding opérationnelle</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Participation à la gestion</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">Minimale</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">Active et continue</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Régime mère-fille</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 border-b border-l border-slate-200">✓ Oui</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 border-b border-l border-slate-200">✓ Oui</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Pacte Dutreil</td>
                  <td className="px-6 py-4 text-sm text-red-600 border-b border-l border-slate-200">✗ Non</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 border-b border-l border-slate-200">✓ Oui (75% abattement)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">ISF-IFI</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">Biens professionnels (limité)</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 border-b border-l border-slate-200">Exonération totale possible</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600">Complexité</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-l border-slate-200">Faible</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-l border-slate-200">Moyenne à élevée</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3 : Pourquoi créer avec photo */}
      <section id="section-3" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 text-center">
            Pourquoi créer une holding ?
          </h2>
          <p className="text-lg text-slate-600 font-light text-center max-w-3xl mx-auto mb-16">
            La holding patrimoniale est un outil puissant pour optimiser, protéger et transmettre votre patrimoine professionnel
          </p>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contenu */}
            <div className="space-y-8">
              <div className="bg-white border border-slate-100 p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="text-amber-600" size={24} />
                </div>
                <h3 className="text-xl font-light text-slate-900 mb-4">1. Optimisation Fiscale</h3>
                <ul className="space-y-3 text-slate-600 font-light text-sm">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Régime mère-fille : 95% exonération sur dividendes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Intégration fiscale pour compenser résultats</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Plus-values de cession quasi-exonérées</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-100 p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Shield className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-light text-slate-900 mb-4">2. Protection Patrimoniale</h3>
                <ul className="space-y-3 text-slate-600 font-light text-sm">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Séparation actifs pro/perso</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Protection contre créanciers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Sécurisation patrimoine familial</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-100 p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mb-6">
                  <Users className="text-emerald-600" size={24} />
                </div>
                <h3 className="text-xl font-light text-slate-900 mb-4">3. Transmission Facilitée</h3>
                <ul className="space-y-3 text-slate-600 font-light text-sm">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Pacte Dutreil (75% abattement)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Donation progressive sans perte contrôle</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Démembrement optimisé</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Photo */}
            <div className="relative h-[700px] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" 
                alt="Avantages holding" 
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
            Besoin d'un accompagnement personnalisé ?
          </h3>
          <p className="text-lg text-amber-100 font-light mb-8">
            Échangeons sur votre projet de création de holding
          </p>
          <a 
            href="mailto:florent@occitea-ip.fr" 
            className="inline-block bg-white hover:bg-slate-50 text-amber-600 px-8 py-4 text-base font-light transition-all"
          >
            Prendre rendez-vous
          </a>
        </div>
      </section>

      {/* Section 4 : Étapes de création avec photo */}
      <section id="section-4" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-16 text-center">
            Les 7 étapes de création d'une holding
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Étapes */}
            <div className="space-y-8">
              {[
                {
                  num: "01",
                  title: "Étude de faisabilité et opportunité",
                  content: "Analyse de votre situation patrimoniale actuelle, simulation fiscale comparative (avec/sans holding), définition des objectifs (optimisation, transmission, protection)."
                },
                {
                  num: "02",
                  title: "Choix de la forme sociale",
                  content: "SAS (recommandée pour sa flexibilité), SARL, SA selon votre situation. Rédaction des statuts sur-mesure avec clauses d'agrément, préemption, inaliénabilité si nécessaire."
                },
                {
                  num: "03",
                  title: "Apport des titres ou acquisition",
                  content: "Apport à titre pur et simple des titres de la société opérationnelle (report d'imposition CGI 150-0 B ter) ou acquisition avec effet de levier (LBO)."
                },
                {
                  num: "04",
                  title: "Dépôt du capital et immatriculation",
                  content: "Ouverture compte bancaire, dépôt des fonds, publication JAL, immatriculation RCS, obtention Kbis."
                },
                {
                  num: "05",
                  title: "Déclarations fiscales initiales",
                  content: "Option régime mère-fille (si conditions), option intégration fiscale (si applicable), déclaration de création auprès du SIE."
                },
                {
                  num: "06",
                  title: "Mise en place de la gouvernance",
                  content: "Nomination gérant/président, directeur général, CAC si seuils dépassés. Rédaction règlement intérieur, pactes d'actionnaires."
                },
                {
                  num: "07",
                  title: "Suivi et optimisation continue",
                  content: "Conventions réglementées, management fees, facturation intragroupe, pilotage fiscal annuel."
                }
              ].map((step, idx) => (
                <div key={idx} className="flex">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full flex items-center justify-center mr-6">
                    <span className="text-2xl font-light text-amber-600">{step.num}</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-light text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 font-light leading-relaxed text-sm">{step.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Photo */}
            <div className="relative h-[800px] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80" 
                alt="Création entreprise" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 : Régimes fiscaux */}
      <section id="section-5" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-16 text-center">
            Les régimes fiscaux clés
          </h2>

          <div className="space-y-8">
            <div className="bg-white border border-slate-100 p-8">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Régime mère-fille (CGI 145, 216)</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-6">
                Permet une quasi-exonération (95%) des dividendes remontés de la filiale vers la holding. Seule une quote-part de 5% des dividendes perçus est réintégrée au résultat imposable.
              </p>
              <div className="bg-slate-50 p-6">
                <h4 className="text-base font-light text-slate-900 mb-3">Conditions cumulatives</h4>
                <ul className="space-y-2 text-sm text-slate-600 font-light">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Détention minimale de 5% du capital de la filiale</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Engagement de conservation pendant 2 ans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Sociétés soumises à l'IS (en France ou UE/EEE)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-slate-100 p-8">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Intégration fiscale (CGI 223 A et s.)</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-6">
                Permet de consolider les résultats de la holding et de ses filiales détenues à au moins 95%. Les déficits d'une société peuvent compenser les bénéfices d'une autre.
              </p>
              <div className="bg-slate-50 p-6">
                <h4 className="text-base font-light text-slate-900 mb-3">Avantages</h4>
                <ul className="space-y-2 text-sm text-slate-600 font-light">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Compensation immédiate des résultats</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Neutralisation des flux intragroupe</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                    <span>Optimisation de la charge fiscale globale</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 : Pièges à éviter */}
      <section id="section-6" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-16 text-center">
            Les 5 pièges à éviter
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Sous-estimer la qualification animatrice",
                desc: "L'administration fiscale est stricte : il faut prouver une animation effective, continue et réelle (jurisprudence constante du Conseil d'État)."
              },
              {
                title: "Négliger les conventions réglementées",
                desc: "Toute convention entre holding et filiale doit être approuvée selon la procédure des conventions réglementées (risque de nullité)."
              },
              {
                title: "Mal documenter les management fees",
                desc: "Les prestations facturées doivent être réelles, justifiées et à prix de marché sous peine de redressement (prix de transfert)."
              },
              {
                title: "Oublier l'engagement de conservation",
                desc: "Pour bénéficier du régime mère-fille ou du report d'imposition, l'engagement de conservation de 2 ans est impératif."
              },
              {
                title: "Négliger le formalisme juridique",
                desc: "PV d'AG, approbation des comptes, dépôt au greffe : le non-respect expose à des sanctions (nullité d'actes, responsabilité du dirigeant)."
              }
            ].map((piege, idx) => (
              <div key={idx} className="border-l-4 border-red-500 bg-red-50 p-6">
                <div className="flex">
                  <AlertTriangle className="text-red-500 flex-shrink-0 mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-light text-slate-900 mb-2">{piege.title}</h3>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">{piege.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-16 text-center">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Quel est le coût de création d'une holding ?",
                a: "Entre 2000€ et 5000€ selon la complexité (honoraires avocat/expert-comptable, frais d'enregistrement, publication). Coûts récurrents : 1500€ à 3000€/an (comptabilité, CAC si applicable)."
              },
              {
                q: "Faut-il un capital social minimum ?",
                a: "Non pour une SAS (1€ symbolique possible). En pratique, 1000€ à 10 000€ selon le projet. Le capital peut être augmenté lors d'apports ultérieurs."
              },
              {
                q: "Peut-on créer une holding avec un seul associé ?",
                a: "Oui, via une SASU (SAS unipersonnelle) ou une EURL. Attention : certains avantages fiscaux (Pacte Dutreil) nécessitent plusieurs associés."
              },
              {
                q: "Holding pure ou opérationnelle : laquelle choisir ?",
                a: "Si vous visez le Pacte Dutreil ou l'exonération IFI, choisissez l'opérationnelle. Si votre objectif est uniquement l'optimisation des dividendes, la pure suffit."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-6">
                <h3 className="text-lg font-light text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Prêt à créer votre holding ?
          </h2>
          <p className="text-xl text-slate-300 font-light mb-12 leading-relaxed">
            Bénéficiez d'un accompagnement sur-mesure pour structurer votre patrimoine professionnel
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:florent@occitea-ip.fr" 
              className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-base font-light transition-all hover:shadow-xl"
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

      <Footer currentPage="creer" />
    </div>
  )
}