import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, CheckCircle, AlertTriangle, TrendingUp, FileText, Scale, DollarSign, Users } from 'lucide-react'

export default function GererHoldingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="gerer" />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80" 
            alt="Gestion holding" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <a href="/" className="text-slate-300 hover:text-white transition-colors">Accueil</a>
            <ChevronRight size={16} className="text-slate-400" />
            <span className="text-amber-400">Gérer sa Holding</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
              Gérer efficacement sa Holding
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 leading-relaxed">
              Règles juridiques, optimisation fiscale et pièges à éviter pour une gestion maîtrisée
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
              "Holding opérationnelle vs pure",
              "Régime mère-fille",
              "Intégration fiscale",
              "Management fees",
              "TVA et holding",
              "5 risques majeurs"
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
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            Une holding est un outil puissant de structuration, d'optimisation et de transmission patrimoniale. Encore faut-il en maîtriser les règles juridiques et fiscales, distinguer holding opérationnelle de holding pure, optimiser les flux financiers tout en respectant les contraintes réglementaires.
          </p>
        </div>
      </section>

      {/* Section 1 : Opérationnelle vs Pure avec photos */}
      <section id="section-1" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-16 text-center">
            Holding Opérationnelle vs Pure : qualification fiscale
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
                  Simple détention de titres, perception de dividendes et plus-values. Aucune participation active à la gestion des filiales.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 font-light">Régime mère-fille applicable</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle size={20} className="text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 font-light">Pas de Pacte Dutreil</span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle size={20} className="text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 font-light">Pas d'exonération IFI</span>
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
                <h3 className="text-2xl font-light text-slate-900 mb-4">Holding Opérationnelle</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-6">
                  Participation active, effective et continue à la conduite de la politique du groupe et au contrôle des filiales.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 font-light">Régime mère-fille applicable</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 font-light">Pacte Dutreil éligible (75% abattement)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 font-light">Exonération IFI possible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 p-8">
            <h3 className="text-xl font-light text-slate-900 mb-4">
              Les 5 critères d'animation (jurisprudence constante)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Participation aux décisions stratégiques",
                "Services administratifs, comptables, juridiques",
                "Contrôle de gestion et reporting",
                "Politique commerciale commune",
                "Animation effective avec moyens dédiés (salariés, locaux)"
              ].map((critere, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-sm text-slate-600 font-light">{critere}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : Régime mère-fille avec photo */}
      <section id="section-2" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Régime Mère-Fille
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                Le régime mère-fille (CGI art. 145, 216) est le dispositif fiscal le plus utilisé pour optimiser la remontée des dividendes au sein d'un groupe. Il permet une quasi-exonération d'impôt sur les sociétés.
              </p>

              <div className="bg-slate-50 p-6 mb-6">
                <h3 className="text-lg font-light text-slate-900 mb-4">Conditions d'application</h3>
                <ul className="space-y-3">
                  {[
                    "Détention d'au moins 5% du capital",
                    "Engagement de conservation pendant 2 ans",
                    "Sociétés soumises à l'IS"
                  ].map((condition, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-sm text-slate-600 font-light">{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-100 p-6">
                <h3 className="text-lg font-light text-slate-900 mb-3">Économie fiscale</h3>
                <p className="text-sm text-slate-600 font-light">
                  Sur 100 000€ de dividendes : exonération de 95%, seuls 5% (5 000€) sont taxés à l'IS (25%), soit 1 250€ d'impôt au lieu de 30 000€ en flat tax.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80" 
                alt="Optimisation fiscale" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 : Intégration fiscale avec photo */}
      <section id="section-3" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-8 text-center">
            Intégration Fiscale (CGI 223 A et s.)
          </h2>
          
          <p className="text-lg text-slate-600 font-light leading-relaxed text-center max-w-3xl mx-auto mb-16">
            L'intégration fiscale permet de consolider les résultats fiscaux de la holding et de ses filiales détenues à au moins 95%. Les déficits d'une entité compensent les bénéfices d'une autre au sein du groupe intégré.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Contenu */}
            <div className="space-y-8">
              <div className="bg-white border border-slate-100 p-6">
                <h3 className="text-lg font-light text-slate-900 mb-4">Avantages</h3>
                <ul className="space-y-3">
                  {[
                    "Compensation immédiate des résultats",
                    "Neutralisation des flux intragroupe",
                    "Optimisation de la charge fiscale globale",
                    "Report en arrière des déficits (carry-back)"
                  ].map((avantage, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-sm text-slate-600 font-light">{avantage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-slate-100 p-6">
                <h3 className="text-lg font-light text-slate-900 mb-4">Conditions</h3>
                <ul className="space-y-3">
                  {[
                    "Détention ≥ 95% du capital",
                    "Clôture d'exercice identique",
                    "Option quinquennale à déposer",
                    "Toutes les sociétés soumises à l'IS"
                  ].map((condition, idx) => (
                    <li key={idx} className="flex items-start">
                      <AlertTriangle size={16} className="text-amber-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-sm text-slate-600 font-light">{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Photo */}
            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&q=80" 
                alt="Intégration fiscale" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 p-8">
            <h3 className="text-xl font-light text-slate-900 mb-4">Exemple concret</h3>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              Holding détient 2 filiales : Filiale A (bénéfice 200k€) et Filiale B (perte 80k€). Sans intégration : IS sur 200k€ = 50k€. Avec intégration : IS sur 120k€ (200-80) = 30k€. <strong className="text-blue-600">Économie : 20k€.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 : Management Fees avec photo */}
      <section id="section-4" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-8 text-center">
            Management Fees : règles d'or
          </h2>
          
          <p className="text-lg text-slate-600 font-light leading-relaxed text-center max-w-3xl mx-auto mb-16">
            Les management fees sont les prestations de services facturées par la holding à ses filiales (direction, comptabilité, juridique, RH, etc.). Ils permettent de remonter du cash tout en déduisant fiscalement les charges.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Photo */}
            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="/images/pages/gerer-holding/management.jpg" 
                alt="Management fees" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>

            {/* Contenu */}
            <div className="space-y-6">
              <div className="bg-slate-50 p-6">
                <div className="flex items-start mb-4">
                  <DollarSign className="text-amber-600 mr-3 flex-shrink-0" size={28} />
                  <div>
                    <h3 className="text-lg font-light text-slate-900 mb-2">Prix de Transfert</h3>
                    <p className="text-sm text-slate-600 font-light">
                      Les honoraires doivent être à prix de marché (arm's length principle). Benchmark sectoriel impératif.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6">
                <div className="flex items-start mb-4">
                  <FileText className="text-blue-600 mr-3 flex-shrink-0" size={28} />
                  <div>
                    <h3 className="text-lg font-light text-slate-900 mb-2">Documentation</h3>
                    <p className="text-sm text-slate-600 font-light">
                      Convention de services écrite, timesheet détaillé, factures précises et justificatives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6">
                <div className="flex items-start mb-4">
                  <Scale className="text-emerald-600 mr-3 flex-shrink-0" size={28} />
                  <div>
                    <h3 className="text-lg font-light text-slate-900 mb-2">Substance Réelle</h3>
                    <p className="text-sm text-slate-600 font-light">
                      Moyens humains et matériels effectifs : salariés dédiés, bureaux, outils, reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-red-500 bg-red-50 p-6">
            <div className="flex">
              <AlertTriangle className="text-red-500 flex-shrink-0 mr-4 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-light text-slate-900 mb-2">Attention</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  L'administration fiscale contrôle systématiquement les management fees. Sans documentation et substance réelle, risque de réintégration fiscale + pénalités de 40% à 80%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA intermédiaire */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
            Optimisez la gestion de votre holding
          </h3>
          <p className="text-lg text-amber-100 font-light mb-8">
            Audit fiscal, mise en conformité, optimisation : bénéficiez d'un accompagnement expert
          </p>
          <a 
            href="mailto:florent@occitea-ip.fr" 
            className="inline-block bg-white hover:bg-slate-50 text-amber-600 px-8 py-4 text-base font-light transition-all"
          >
            Prendre rendez-vous
          </a>
        </div>
      </section>

      {/* Section 5 : TVA */}
      <section id="section-5" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-8 text-center">
            TVA et Holding : notion de lien direct
          </h2>
          
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-12 text-center">
            La TVA sur les frais de la holding n'est déductible que s'il existe un « lien direct » avec une activité économique taxable. La jurisprudence de la CJUE et du Conseil d'État est stricte.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-emerald-50 border border-emerald-100 p-6">
              <h3 className="text-lg font-light text-slate-900 mb-4">✓ TVA déductible</h3>
              <ul className="space-y-2 text-sm text-slate-600 font-light">
                <li>• Management fees facturés aux filiales</li>
                <li>• Prestations de services soumises à TVA</li>
                <li>• Frais liés à l'activité d'animation</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-100 p-6">
              <h3 className="text-lg font-light text-slate-900 mb-4">✗ TVA non déductible</h3>
              <ul className="space-y-2 text-sm text-slate-600 font-light">
                <li>• Simple détention de participations</li>
                <li>• Perception de dividendes</li>
                <li>• Frais sans lien avec prestations taxables</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 p-6">
            <h3 className="text-lg font-light text-slate-900 mb-3">Jurisprudence clé</h3>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              <strong>CJUE, Larentia + Minerva (2015)</strong> : La simple détention de participations ne constitue pas une activité économique au sens de la TVA. Seule une holding opérationnelle facturant des prestations peut déduire la TVA.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 : 5 Risques avec photo */}
      <section id="section-6" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-16 text-center">
            Les 5 risques majeurs à éviter
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Risques */}
            <div className="space-y-6">
              {[
                {
                  color: "red",
                  title: "Requalification en holding pure",
                  desc: "Sans animation effective et continue, perte du Pacte Dutreil et de l'exonération IFI. Preuves nécessaires : contrats de prestation, salariés, locaux, reporting régulier.",
                  solution: "Documenter systématiquement toute intervention : PV de réunion, notes de service, contrats, factures."
                },
                {
                  color: "amber",
                  title: "Management fees non justifiés",
                  desc: "Redressement fiscal si les honoraires sont excessifs ou non documentés. L'administration compare aux prix de marché.",
                  solution: "Benchmark sectoriel, timesheet précis, convention détaillée, facturation trimestrielle."
                },
                {
                  color: "blue",
                  title: "Abus de droit (CGI L64)",
                  desc: "Si le montage est purement fiscal sans substance économique, l'administration peut invoquer l'abus de droit (majoration 80%).",
                  solution: "Toujours avoir une finalité économique réelle (développement, croissance externe, transmission)."
                }
              ].map((risque, idx) => (
                <div key={idx} className={`border-l-4 border-${risque.color}-500 bg-${risque.color}-50 p-6`}>
                  <div className="flex items-start">
                    <AlertTriangle className={`text-${risque.color}-600 mr-4 flex-shrink-0 mt-1`} size={24} />
                    <div>
                      <h3 className="text-lg font-light text-slate-900 mb-2">{risque.title}</h3>
                      <p className="text-sm text-slate-600 font-light leading-relaxed mb-3">{risque.desc}</p>
                      <div className="bg-white/70 p-3 rounded">
                        <p className="text-xs text-slate-700 font-light">
                          <strong>Solution :</strong> {risque.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Photo */}
            <div className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl lg:sticky lg:top-24">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" 
                alt="Risques gestion holding" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
          </div>

          {/* 2 autres risques */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-emerald-500 bg-emerald-50 p-6">
              <div className="flex items-start">
                <FileText className="text-emerald-600 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-light text-slate-900 mb-2">Conventions réglementées non approuvées</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed mb-3">
                    Nullité possible + responsabilité du dirigeant. Toute convention holding/filiale doit suivre la procédure (CGI L225-38).
                  </p>
                  <div className="bg-white/70 p-3 rounded">
                    <p className="text-xs text-slate-700 font-light">
                      <strong>Solution :</strong> Approbation AG annuelle, rapport spécial CAC si applicable, mention dans le registre.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 bg-purple-50 p-6">
              <div className="flex items-start">
                <Users className="text-purple-600 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-light text-slate-900 mb-2">Non-respect de l'engagement de conservation</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed mb-3">
                    Le régime mère-fille et le report d'imposition exigent 2 ans de conservation. Toute cession anticipée = remise en cause.
                  </p>
                  <div className="bg-white/70 p-3 rounded">
                    <p className="text-xs text-slate-700 font-light">
                      <strong>Solution :</strong> Tracer les dates d'acquisition, alertes 2 ans avant toute cession envisagée.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                q: "Quel est le coût annuel de gestion d'une holding ?",
                a: "Comptabilité : 1 500€ à 3 000€/an. CAC si obligatoire : 3 000€ à 8 000€. Expert-comptable conseil : 2 000€ à 5 000€. Total : 6 500€ à 16 000€/an selon la complexité."
              },
              {
                q: "Peut-on cumuler régime mère-fille et intégration fiscale ?",
                a: "Oui, mais ils ne s'appliquent pas simultanément. L'intégration fiscale neutralise les dividendes intragroupe, le régime mère-fille s'applique aux dividendes perçus hors groupe intégré."
              },
              {
                q: "Comment prouver l'animation effective ?",
                a: "Contrats de prestation, salariés dédiés, locaux, reporting mensuel/trimestriel, participation aux conseils de filiales, contrôle de gestion, politique commerciale commune documentée."
              },
              {
                q: "Que faire en cas de contrôle fiscal ?",
                a: "Fournir immédiatement toute la documentation : conventions, factures, justificatifs d'animation, PV, comptes. Se faire assister par un avocat fiscaliste. Répondre dans les délais légaux."
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
            Besoin d'un audit de votre holding ?
          </h2>
          <p className="text-xl text-slate-300 font-light mb-12 leading-relaxed">
            Vérification de conformité, optimisation fiscale, sécurisation juridique
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

      <Footer currentPage="gerer" />
    </div>
  )
}