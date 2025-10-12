import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TrendingUp, Shield, CheckCircle, ArrowRight, FileText, Users, Award, Target } from 'lucide-react'

export default function ValoriserEntreprisePage() {
  const LIEN_BILAN_VALORISATION = "#bilan-valorisation"
  
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="gerer" />

      {/* Fil d'Ariane */}
      <div className="bg-slate-50 border-b border-slate-100 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-slate-500 hover:text-slate-700 font-light transition-colors">Accueil</a>
            <span className="text-slate-300">/</span>
            <a href="/gerer-holding" className="text-slate-500 hover:text-slate-700 font-light transition-colors">Gérer sa Holding</a>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900">Valoriser mon entreprise</span>
          </div>
        </div>
      </div>

      {/* Hero avec image background */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80" 
            alt="Valorisation d'entreprise" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-amber-600/10 backdrop-blur-sm border border-amber-600/20 mb-8">
              <span className="text-amber-400 text-sm font-light tracking-wide">GUIDE COMPLET 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
              Valoriser votre<br />
              <span className="text-amber-400">Holding</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 leading-relaxed">
              Méthodes reconnues, impact fiscal et social, décotes admises : le guide opérationnel pour une valorisation défendable
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href={LIEN_BILAN_VALORISATION}
                className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-base font-light transition-all hover:shadow-xl hover:scale-105"
              >
                Je veux valoriser mon entreprise
              </a>
              <a 
                href="tel:0607963135" 
                className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 text-base font-light backdrop-blur-sm transition-all"
              >
                06 07 96 31 35
              </a>
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-400 font-light">
              <span className="flex items-center space-x-2">
                <FileText size={16} />
                <span>Lecture 15 min</span>
              </span>
              <span className="flex items-center space-x-2">
                <CheckCircle size={16} />
                <span>Mis à jour : Janvier 2025</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction - Synthèse opérationnelle */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 p-8 lg:p-12 mb-16">
            <h2 className="text-2xl md:text-3xl font-light text-slate-900 mb-6 flex items-center">
              <Shield className="text-amber-600 mr-3" size={28} />
              L'essentiel à retenir
            </h2>
            <div className="space-y-4 text-slate-700 font-light">
              <div className="flex items-start">
                <CheckCircle className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p><strong className="font-normal text-slate-900">Approche pluriméthodes :</strong> L'administration fiscale préconise de combiner trois familles de méthodes (patrimoniale, rentabilité, comparables) pour déterminer une valeur venale objective et défendable.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p><strong className="font-normal text-slate-900">Dispositifs fiscaux et sociaux :</strong> L'intéressement, la participation, la PPVE et les régimes d'exonération (151 septies, 238 quindecies, Dutreil) influencent directement la rentabilité et la valeur finale.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p><strong className="font-normal text-slate-900">Documentation probante :</strong> Une méthodologie rigoureuse, des hypothèses justifiées et un dossier complet sont indispensables pour éviter tout risque de redressement fiscal.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">Qu'est-ce que la valorisation d'entreprise ?</h2>
            
            <div className="bg-white border border-slate-100 p-8 mb-8">
              <h3 className="text-xl font-light text-slate-900 mb-4">Définition</h3>
              <p className="text-slate-700 font-light leading-relaxed mb-6">
                La valorisation d'entreprise consiste à estimer la <strong className="font-normal text-slate-900">valeur venale</strong>, c'est-à-dire le prix qu'un acquéreur indépendant accepterait de payer dans des conditions normales de marché, à une date donnée. Cette estimation repose sur l'évaluation séparée de chaque élément de l'actif et du passif pour obtenir un actif net corrigé et réévalué.
              </p>
              <p className="text-slate-700 font-light leading-relaxed">
                L'objectif est d'évaluer financièrement la somme qu'une personne physique ou morale devrait verser pour acquérir 100% du capital de la société.
              </p>
            </div>

            <h3 className="text-2xl font-light text-slate-900 mb-6 mt-12">Pourquoi valoriser votre holding ?</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white border border-slate-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-amber-50 flex items-center justify-center mb-4">
                  <TrendingUp className="text-amber-600" size={24} />
                </div>
                <h4 className="text-lg font-light text-slate-900 mb-3">Cession ou transmission</h4>
                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  Évaluer la valeur économique de votre patrimoine en vue d'une cession de parts sociales, d'actions ou de titres, ou d'une transmission familiale.
                </p>
              </div>

              <div className="bg-white border border-slate-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-amber-50 flex items-center justify-center mb-4">
                  <TrendingUp className="text-amber-600" size={24} />
                </div>
                <h4 className="text-lg font-light text-slate-900 mb-3">Optimisation stratégique</h4>
                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  Positionner votre entreprise sur le marché, identifier forces et faiblesses, et définir une stratégie de développement basée sur la valeur réelle.
                </p>
              </div>

              <div className="bg-white border border-slate-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-amber-50 flex items-center justify-center mb-4">
                  <Users className="text-amber-600" size={24} />
                </div>
                <h4 className="text-lg font-light text-slate-900 mb-3">Levée de fonds</h4>
                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  Convaincre des partenaires financiers d'investir au capital ou présenter un business model solide pour obtenir un financement bancaire.
                </p>
              </div>

              <div className="bg-white border border-slate-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-amber-50 flex items-center justify-center mb-4">
                  <FileText className="text-amber-600" size={24} />
                </div>
                <h4 className="text-lg font-light text-slate-900 mb-3">Conformité fiscale</h4>
                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  Déterminer précisément le montant des impôts sur les dividendes, les plus-values et les droits de mutation à titre gratuit.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-light text-slate-900 mb-6 mt-12">Quand valoriser votre entreprise ?</h3>
            
            <p className="text-slate-700 font-light leading-relaxed mb-6">
              Valoriser votre entreprise peut se faire à tout moment pour améliorer le pilotage interne ou convaincre des investisseurs. Toutefois, cette étape d'évaluation devient essentielle dans les situations suivantes :
            </p>

            <div className="bg-slate-50 border-l-4 border-amber-500 p-6 mb-12">
              <ul className="space-y-2 text-slate-700 font-light">
                <li className="flex items-start">
                  <span className="text-amber-600 font-normal mr-3">→</span>
                  <span>Projet de <strong className="font-normal text-slate-900">cession de parts</strong> ou d'actions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-normal mr-3">→</span>
                  <span><strong className="font-normal text-slate-900">Transmission familiale</strong> ou succession</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-normal mr-3">→</span>
                  <span>Entrée d'un <strong className="font-normal text-slate-900">nouvel associé</strong> ou investisseur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-normal mr-3">→</span>
                  <span><strong className="font-normal text-slate-900">Acquisition</strong> d'une nouvelle entreprise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-normal mr-3">→</span>
                  <span>Calcul des <strong className="font-normal text-slate-900">impôts et taxes</strong> (IFI, droits de mutation)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 font-normal mr-3">→</span>
                  <span><strong className="font-normal text-slate-900">Réorganisation</strong> du capital ou opération de haut de bilan</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-light text-slate-900 mb-6 mt-12">Valorisation vs Prix de cession : quelle différence ?</h3>
            
            <p className="text-slate-700 font-light leading-relaxed mb-6">
              Il est crucial de comprendre que <strong className="font-normal text-slate-900">valorisation et prix de cession coïncident rarement</strong>. La valorisation est une estimation théorique de la valeur économique de l'entreprise, fondée sur des méthodes financières et comptables. Le prix de cession, lui, est le montant effectivement payé lors de la transaction.
            </p>

            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden mb-12">
              <div className="grid md:grid-cols-2 divide-x divide-slate-200">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-normal text-slate-900">Valorisation</h4>
                  </div>
                  <p className="text-slate-600 font-light text-sm leading-relaxed">
                    Estimation théorique basée sur des méthodes reconnues (patrimoniale, rentabilité, comparables). Elle fournit une fourchette de valeur objective et défendable.
                  </p>
                </div>

                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-normal text-slate-900">Prix de cession</h4>
                  </div>
                  <p className="text-slate-600 font-light text-sm leading-relaxed">
                    Montant réellement payé résultant de la négociation, du rapport de force, des intérêts stratégiques et des conditions de marché. Soumis à la loi de l'offre et de la demande.
                  </p>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-light text-slate-900 mb-4">Pourquoi cet écart existe-t-il ?</h4>
            
            <div className="space-y-4 mb-12">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-amber-700 text-sm font-normal">1</span>
                </div>
                <div>
                  <h5 className="font-normal text-slate-900 mb-1">Rapport de force dans la négociation</h5>
                  <p className="text-slate-600 font-light text-sm">Un vendeur pressé ou en position de faiblesse acceptera peut-être un prix inférieur à la valorisation théorique.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-amber-700 text-sm font-normal">2</span>
                </div>
                <div>
                  <h5 className="font-normal text-slate-900 mb-1">Intérêt stratégique pour l'acheteur</h5>
                  <p className="text-slate-600 font-light text-sm">Une entreprise peut être rachetée au-dessus de sa valeur si elle apporte un avantage concurrentiel (portefeuille clients, brevet, position géographique).</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-amber-700 text-sm font-normal">3</span>
                </div>
                <div>
                  <h5 className="font-normal text-slate-900 mb-1">Fiscalité et modalités de financement</h5>
                  <p className="text-slate-600 font-light text-sm">Un montage fiscal ou financier particulier (leverage, earn-out, complément de prix) peut faire varier le prix net perçu.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="text-amber-700 text-sm font-normal">4</span>
                </div>
                <div>
                  <h5 className="font-normal text-slate-900 mb-1">Conditions de marché</h5>
                  <p className="text-slate-600 font-light text-sm">En période de forte demande ou dans un secteur attractif, les prix peuvent s'envoler. À l'inverse, en contexte tendu, les acheteurs exigent des décotes.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-8 text-white mb-12">
              <h4 className="text-xl font-light mb-4">En résumé</h4>
              <p className="font-light leading-relaxed opacity-90">
                La valorisation donne un ordre de grandeur et une base de discussion. Elle permet de justifier un prix, mais ne le détermine pas. Le prix de cession final est toujours le résultat d'une négociation, entre ce que le vendeur espère et ce que l'acheteur est prêt à payer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Intermédiaire 1 */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
            Besoin d'une valorisation professionnelle ?
          </h3>
          <p className="text-amber-50 font-light mb-8 text-lg">
            Obtenez une évaluation rigoureuse et défendable de votre holding
          </p>
          <a 
            href={LIEN_BILAN_VALORISATION}
            className="inline-flex items-center bg-white hover:bg-slate-50 text-amber-600 px-8 py-4 text-base font-light transition-all hover:shadow-xl hover:scale-105"
          >
            Je veux valoriser mon entreprise
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Méthodes de valorisation */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Les 3 méthodes de valorisation reconnues</h2>
            <p className="text-xl font-light text-slate-600 max-w-3xl mx-auto">
              L'administration fiscale préconise de combiner plusieurs approches pour converger vers une fourchette cohérente et défendable.
            </p>
          </div>

          {/* Tableau comparatif des méthodes */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-16">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Méthode</th>
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Principe</th>
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Cas d'usage</th>
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Limites</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <span className="font-normal text-slate-900">Patrimoniale</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Actifs réévalués – Dettes</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Sociétés patrimoniales, immobilier, équipements</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-600">Vision statique, peu de projection</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <span className="font-normal text-slate-900">Rentabilité (DCF)</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Actualisation des flux futurs</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Entreprises avec visibilité et croissance</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-600">Sensible aux hypothèses, rigueur requise</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <span className="font-normal text-slate-900">Comparables</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Multiples sectoriels, transactions</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Secteurs avec références fiables</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-600">Accès/qualité des données, ajustements</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Détail des méthodes */}
          <div className="space-y-12">
            {/* Méthode 1 : Patrimoniale */}
            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-slate-900 mb-2">1. Approche patrimoniale (Actif Net Réévalué)</h3>
                  <p className="text-slate-600 font-light">Valorisation basée sur la valeur réelle des actifs détenus</p>
                </div>
              </div>

              <div>
                <p className="text-slate-700 font-light leading-relaxed mb-6">
                  Cette méthode consiste à évaluer séparément chaque élément de l'actif (immobilisations, stocks, créances) et du passif (dettes, provisions) inscrits au bilan pour obtenir un <strong className="font-normal text-slate-900">actif net corrigé</strong>.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-normal text-slate-900 mb-4">Formule</h4>
                  <div className="bg-white border border-slate-200 rounded p-4 font-mono text-sm text-slate-800">
                    Valeur = Actifs réévalués - Passifs réévalués - Engagements hors bilan
                  </div>
                </div>

                <h4 className="text-lg font-normal text-slate-900 mb-4">Avantages</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-slate-700 font-light">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Simplicité et clarté : ancrage dans des éléments tangibles</span>
                  </li>
                  <li className="flex items-start text-slate-700 font-light">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Particulièrement pertinente pour les sociétés patrimoniales (holdings passives, SCI)</span>
                  </li>
                  <li className="flex items-start text-slate-700 font-light">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Base solide pour les discussions avec l'administration fiscale</span>
                  </li>
                </ul>

                <h4 className="text-lg font-normal text-slate-900 mb-4">Limites</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-slate-700 font-light">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Ne prend pas en compte la rentabilité future ni les actifs immatériels</span>
                  </li>
                  <li className="flex items-start text-slate-700 font-light">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Vision statique, peu adaptée aux entreprises en forte croissance</span>
                  </li>
                  <li className="flex items-start text-slate-700 font-light">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Difficulté à évaluer certains actifs incorporels (marque, clientèle, savoir-faire)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Méthode 2 : Rentabilité */}
            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-slate-900 mb-2">2. Approche par la rentabilité (DCF - Discounted Cash Flow)</h3>
                  <p className="text-slate-600 font-light">Valorisation fondée sur la capacité bénéficiaire future</p>
                </div>
              </div>

              <div>
                <p className="text-slate-700 font-light leading-relaxed mb-6">
                  La méthode DCF (Discounted Cash Flow) repose sur l'actualisation des <strong className="font-normal text-slate-900">flux de trésorerie disponibles futurs</strong>. L'acheteur n'acquiert pas les performances passées mais le potentiel de génération de cash futur.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-normal text-slate-900 mb-4">Principe</h4>
                  <p className="text-slate-700 font-light text-sm mb-4">
                    On projette les flux de trésorerie disponibles (Free Cash Flow) sur 5 à 10 ans, puis on calcule une valeur terminale. L'ensemble est actualisé au taux de rentabilité exigé (WACC - Weighted Average Cost of Capital).
                  </p>
                  <div className="bg-white border border-slate-200 rounded p-4 font-mono text-sm text-slate-800">
                    Valeur = Σ (FCFn / (1+WACC)ⁿ) + Valeur terminale actualisée
                  </div>
                </div>

                <h4 className="text-lg font-normal text-slate-900 mb-4">Avantages</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-slate-700 font-light">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Reflète le vrai potentiel de création de valeur de l'entreprise</span>
                  </li>
                  <li className="flex items-start text-slate-700 font-light">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Adaptée aux sociétés innovantes sans bénéfices les premières années</span>
                  </li>
                  <li className="flex items-start text-slate-700 font-light">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Méthode la plus utilisée par les investisseurs professionnels</span>
                  </li>
                </ul>

                <h4 className="text-lg font-normal text-slate-900 mb-4">Limites</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-slate-700 font-light">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Très sensible aux hypothèses (croissance, taux d'actualisation, valeur terminale)</span>
                  </li>
                  <li className="flex items-start text-slate-700 font-light">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Complexité technique nécessitant une expertise financière</span>
                  </li>
                  <li className="flex items-start text-slate-700 font-light">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Doit être complétée par d'autres méthodes pour validation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Méthode 3 : Comparables */}
            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-slate-900 mb-2">3. Approche comparative (Multiples)</h3>
                  <p className="text-slate-600 font-light">Valorisation par comparaison avec le marché</p>
                </div>
              </div>

              <div>
                <p className="text-slate-700 font-light leading-relaxed mb-6">
                  Cette méthode compare l'entreprise à un échantillon de sociétés similaires (le "peer group") ou à des transactions récentes dans le secteur, pour en déduire des <strong className="font-normal text-slate-900">multiples de valorisation</strong>.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-normal text-slate-900 mb-4">Multiples les plus utilisés</h4>
                  <div className="space-y-3">
                    <div className="bg-white border border-slate-200 rounded p-3">
                      <div className="font-normal text-slate-900 text-sm mb-1">Multiple de CA</div>
                      <div className="font-mono text-sm text-slate-700">Valeur = Chiffre d'affaires × Multiple sectoriel</div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded p-3">
                      <div className="font-normal text-slate-900 text-sm mb-1">Multiple d'EBITDA</div>
                      <div className="font-mono text-sm text-slate-700">Valeur = EBITDA × Multiple sectoriel</div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded p-3">
                      <div className="font-normal text-slate-900 text-sm mb-1">PER (Price Earning Ratio)</div>
                      <div className="font-mono text-sm text-slate-700">Valeur = Résultat net × PER sectoriel</div>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-normal text-slate-900 mb-4">Avantages</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-slate-700 font-light">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Rapidité et simplicité d'utilisation</span>
                  </li>
                  <li className="flex items-start text-slate-700 font-light">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Reflète la réalité du marché à un instant T</span>
                  </li>
                  <li className="flex items-start text-slate-700 font-light">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Facilite les discussions entre acheteur et vendeur</span>
                  </li>
                </ul>

                <h4 className="text-lg font-normal text-slate-900 mb-4">Limites</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-slate-700 font-light">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Nécessite des comparables vraiment similaires (taille, secteur, géographie)</span>
                  </li>
                  <li className="flex items-start text-slate-700 font-light">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Données parfois difficiles à obtenir pour les PME non cotées</span>
                  </li>
                  <li className="flex items-start text-slate-700 font-light">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Moins précise que les méthodes intrinsèques (DCF, patrimoniale)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Éléments influençant la valeur */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Éléments spécifiques influençant la valeur</h2>
            <p className="text-xl font-light text-slate-600 max-w-3xl mx-auto">
              Au-delà des méthodes classiques, plusieurs dispositifs fiscaux, sociaux et juridiques impactent directement la valorisation de votre holding.
            </p>
          </div>

          {/* Partage de la valeur */}
          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl p-8 mb-12">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-light text-slate-900 mb-2">Partage de la valeur et dispositifs RH</h3>
                <p className="text-slate-600 font-light">Intéressement, participation et PPVE</p>
              </div>
            </div>

            <p className="text-slate-700 font-light leading-relaxed mb-6">
              Les politiques de partage de la valeur (intéressement, participation, PPVE) influencent directement la masse salariale et la rentabilité nette, donc la valeur de l'entreprise.
            </p>

            {/* PPVE 2025 */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-normal text-slate-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-amber-600 font-normal text-sm">€</span>
                </span>
                Prime de Partage de la Valorisation de l'Entreprise (PPVE) - 2025
              </h4>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-sm font-light text-slate-600 mb-1">PASS 2025 (Plafond Annuel Sécurité Sociale)</div>
                  <div className="text-2xl font-light text-slate-900">47 100 €</div>
                  <div className="text-sm text-slate-500 font-light mt-1">3 925 € / mois • 906 € / semaine</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <div className="text-sm font-light text-slate-600 mb-1">Plafond exonération PPVE (3,75% du PASS)</div>
                  <div className="text-2xl font-light text-slate-900">1 766,25 €</div>
                  <div className="text-sm text-amber-700 font-light mt-1">Par bénéficiaire et par an</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start text-sm">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">Régime social :</strong> Exonération de cotisations (hors contribution CNAV 20%)</span>
                </div>
                <div className="flex items-start text-sm">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">Régime fiscal :</strong> Déductible du résultat imposable pour l'entreprise</span>
                </div>
                <div className="flex items-start text-sm">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">Pour le bénéficiaire :</strong> Imposable à l'IR sauf affectation à un plan d'épargne (sous conditions)</span>
                </div>
                <div className="flex items-start text-sm">
                  <span className="text-amber-600 mr-2 mt-0.5">→</span>
                  <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">CSG/CRDS :</strong> 9,2% + 0,5% dus par les bénéficiaires</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm font-light text-blue-900">
                  <strong className="font-normal">Impact sur la valorisation :</strong> Ces flux doivent être intégrés dans la normalisation des comptes (retraitement de l'EBE/EBITDA). Un bon ancrage RH peut soutenir les multiples de valorisation.
                </p>
              </div>
            </div>
          </div>

          {/* Décotes */}
          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl p-8 mb-12">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-light text-slate-900 mb-2">Décotes sur titres non cotés</h3>
                <p className="text-slate-600 font-light">Illiquidité, minorité et clauses d'agrément</p>
              </div>
            </div>

            <p className="text-slate-700 font-light leading-relaxed mb-6">
              Pour les sociétés familiales ou les participations minoritaires, des décotes sont admises en pratique pour tenir compte de l'<strong className="font-normal text-slate-900">illiquidité</strong> et de la <strong className="font-normal text-slate-900">position minoritaire</strong>.
            </p>

            <div className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-normal text-slate-900 mb-4">Jalons jurisprudentiels</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-20 h-20 bg-slate-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-3xl font-light text-slate-900">15%</span>
                  </div>
                  <div>
                    <div className="font-normal text-slate-900 mb-1">Cass. com. 6 mai 2003 n° 01-13.118</div>
                    <p className="text-sm font-light text-slate-600">Décote de 15% admise pour participation minoritaire avec clauses d'agrément</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-20 h-20 bg-slate-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-3xl font-light text-slate-900">20%</span>
                  </div>
                  <div>
                    <div className="font-normal text-slate-900 mb-1">Cass. com. 23 novembre 2010 n° 09-17.295</div>
                    <p className="text-sm font-light text-slate-600">Possibilité de décote plus élevée (20%) selon le contexte et les restrictions statutaires</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-sm font-light text-amber-900">
                  <strong className="font-normal">Point de vigilance :</strong> Ces décotes doivent être justifiées par des preuves tangibles (statuts, pactes d'actionnaires, gouvernance, absence de liquidité). Impact sur les bases fiscales (donations, successions, IFI).
                </p>
              </div>
            </div>
          </div>

          {/* Régimes fiscaux */}
          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl p-8">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-light text-slate-900 mb-2">Régimes fiscaux en cession et transmission</h3>
                <p className="text-slate-600 font-light">Exonérations et abattements applicables</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Cession */}
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h4 className="text-lg font-normal text-slate-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-2">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </span>
                  Cession
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm">
                    <span className="text-blue-600 font-normal mr-2">•</span>
                    <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">CGI 151 septies :</strong> Exonération selon recettes</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-blue-600 font-normal mr-2">•</span>
                    <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">CGI 238 quindecies :</strong> Exonération selon valeur de l'entreprise</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-blue-600 font-normal mr-2">•</span>
                    <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">CGI 151 septies A :</strong> Départ à la retraite</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-blue-600 font-normal mr-2">•</span>
                    <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">CGI 150-0 D ter :</strong> Abattement 500k€ (jusqu'au 31/12/2024)</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-blue-600 font-normal mr-2">•</span>
                    <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">CGI 41 :</strong> Report d'imposition sur apport</span>
                  </li>
                </ul>
              </div>

              {/* Transmission */}
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h4 className="text-lg font-normal text-slate-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center mr-2">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  Transmission
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm">
                    <span className="text-green-600 font-normal mr-2">•</span>
                    <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">Abattement enfant :</strong> 100 000 € (tous les 15 ans)</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-green-600 font-normal mr-2">•</span>
                    <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">Abattement petit-enfant :</strong> 31 865 € (tous les 15 ans)</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-green-600 font-normal mr-2">•</span>
                    <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">Dutreil (CGI 787 B/C) :</strong> Exonération 75% de la base</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-green-600 font-normal mr-2">•</span>
                    <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">Réduction &lt; 70 ans :</strong> 50% de droits (CGI 790)</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-green-600 font-normal mr-2">•</span>
                    <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">CGI 790 A :</strong> 300k€ transmission à salariés</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-slate-50 border border-slate-200 rounded-lg p-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-slate-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm font-light text-slate-700">
                  <strong className="font-normal text-slate-900">Impact sur la valorisation :</strong> Ces régimes influencent la valeur nette après impôts pour les parties et donc la négociation du prix. Il est essentiel de cartographier l'éligibilité et les fenêtres temporelles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entreprises familiales */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Valoriser une holding familiale</h2>
            <p className="text-xl font-light text-slate-600 max-w-3xl mx-auto">
              Les holdings familiales présentent des spécificités qui impactent directement leur valorisation et nécessitent des ajustements méthodologiques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-slate-900">Rémunérations familiales</h3>
              </div>
              <p className="text-slate-700 font-light leading-relaxed mb-4">
                Les salaires versés aux proches peuvent être atypiques (trop élevés par confort ou trop bas par solidarité). Il faut normaliser ces rémunérations pour obtenir une <strong className="font-normal text-slate-900">rentabilité réelle</strong>.
              </p>
              <div className="bg-red-50 border border-red-100 rounded p-3">
                <p className="text-sm font-light text-red-900">
                  <strong className="font-normal">Action :</strong> Retraiter les comptes en appliquant des rémunérations "de marché" pour chaque poste.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-slate-900">Gouvernance familiale</h3>
              </div>
              <p className="text-slate-700 font-light leading-relaxed mb-4">
                Décisions orales, pouvoir concentré, absence de règles écrites... Ce mode de fonctionnement inquiète les investisseurs externes et peut justifier une <strong className="font-normal text-slate-900">décote de risque</strong>.
              </p>
              <div className="bg-orange-50 border border-orange-100 rounded p-3">
                <p className="text-sm font-light text-orange-900">
                  <strong className="font-normal">Solution :</strong> Formaliser la gouvernance (pacte d'actionnaires, règlement intérieur, organigramme clair).
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-slate-900">Liquidité des titres</h3>
              </div>
              <p className="text-slate-700 font-light leading-relaxed mb-4">
                Clauses d'agrément, inaliénabilité temporaire, droit de préemption... Ces restrictions limitent la revente des parts et justifient une <strong className="font-normal text-slate-900">décote d'illiquidité</strong>.
              </p>
              <div className="bg-purple-50 border border-purple-100 rounded p-3">
                <p className="text-sm font-light text-purple-900">
                  <strong className="font-normal">Ordre de grandeur :</strong> 15% à 20% selon la jurisprudence (parfois plus).
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-slate-900">Dépendance au fondateur</h3>
              </div>
              <p className="text-slate-700 font-light leading-relaxed mb-4">
                Lorsque tout repose sur le fondateur (relation clients, décisions, savoir-faire), le départ ou l'absence de succession préparée constitue un <strong className="font-normal text-slate-900">risque majeur</strong>.
              </p>
              <div className="bg-blue-50 border border-blue-100 rounded p-3">
                <p className="text-sm font-light text-blue-900">
                  <strong className="font-normal">Remède :</strong> Préparer la succession, former un comité de direction, diversifier les compétences clés.
                </p>
              </div>
            </div>
          </div>

          {/* Décote familiale */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 text-white">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-2">Notion de décote familiale</h3>
                <p className="font-light leading-relaxed opacity-90 mb-4">
                  L'ensemble de ces éléments spécifiques (rémunérations atypiques, gouvernance informelle, faible liquidité, dépendance au fondateur) justifient l'application d'une <strong className="font-normal">décote familiale globale</strong>.
                </p>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-3xl font-light mr-3">10% - 30%</span>
                    <span className="text-sm opacity-75">(parfois plus dans les cas complexes)</span>
                  </div>
                  <p className="text-sm font-light opacity-90">
                    Cette décote doit être documentée et justifiée par des éléments probants (statuts, pactes, organigramme, procès-verbaux).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi faire appel à un professionnel */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Pourquoi faire appel à un professionnel ?</h2>
            <p className="text-xl font-light text-slate-600 max-w-3xl mx-auto">
              Une valorisation professionnelle garantit rigueur, objectivité et sécurité fiscale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-slate-900 mb-3">Méthode rigoureuse et justifiable</h3>
              <p className="text-slate-700 font-light leading-relaxed">
                Un expert s'appuie sur des méthodes reconnues, adaptées à votre situation. Il documente et justifie chaque étape : en cas de contrôle fiscal ou de litige, cette rigueur est précieuse.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-slate-900 mb-3">Acceptabilité fiscale</h3>
              <p className="text-slate-700 font-light leading-relaxed">
                Lors d'une transmission ou donation, la valorisation sert de base au calcul des impôts. Une évaluation professionnelle, opposable et défendable, réduit le risque de contestation administrative.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-slate-900 mb-3">Argumentaire en négociation</h3>
              <p className="text-slate-700 font-light leading-relaxed">
                Que ce soit pour vendre, ouvrir le capital ou faire entrer un investisseur, une valorisation claire et justifiée renforce votre position et facilite les discussions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-slate-900 mb-3">Neutralité et objectivité</h3>
              <p className="text-slate-700 font-light leading-relaxed">
                Dans un contexte familial ou émotionnel, le professionnel apporte une vision impartiale, calme les tensions et renforce la crédibilité de l'évaluation auprès de toutes les parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommandations et vigilance */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Recommandations et points de vigilance</h2>
            <p className="text-xl font-light text-slate-600 max-w-3xl mx-auto">
              Les clés d'une valorisation réussie et défendable
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Risque</th>
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Symptôme</th>
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Parade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-normal bg-red-50 text-red-700">
                        Sous-évaluation
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Valeur inférieure aux références de marché</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Croiser plusieurs méthodes, justifier les comparables, produire un dossier probant</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-normal bg-orange-50 text-orange-700">
                        Surévaluation
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Multiples sans ancrage réel, échec de la transaction</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Ajustements prudents, analyse de sensibilité, fourchette raisonnable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-normal bg-amber-50 text-amber-700">
                        Régime fiscal mal appliqué
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Perte d'avantage fiscal, pénalités</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Vérifier conditions d'éligibilité et dates, consulter un expert</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-normal bg-purple-50 text-purple-700">
                        Décote non justifiée
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Contestation fiscale lors d'un contrôle</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Preuves tangibles : statuts, pactes, gouvernance, absence de marché</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-normal bg-blue-50 text-blue-700">
                        Fin de report d'imposition
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Requalification suite à opération (apport, réduction)</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Séquencement rigoureux, cartographie des opérations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Points clés */}
          <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-light mb-6">Points clés à retenir</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <span className="text-white font-normal">1</span>
                </div>
                <p className="font-light leading-relaxed">
                  <strong className="font-normal">Pluralité méthodologique :</strong> Combiner au moins deux méthodes et expliciter les écarts
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <span className="text-white font-normal">2</span>
                </div>
                <p className="font-light leading-relaxed">
                  <strong className="font-normal">Normalisation :</strong> Isoler l'exceptionnel, paramétrer intéressement/PPVE en année pleine
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <span className="text-white font-normal">3</span>
                </div>
                <p className="font-light leading-relaxed">
                  <strong className="font-normal">Documentation :</strong> Justifier décotes, clauses, gouvernance avec preuves tangibles
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <span className="text-white font-normal">4</span>
                </div>
                <p className="font-light leading-relaxed">
                  <strong className="font-normal">Fiscalité :</strong> Cartographier régimes et temporalités (151 septies, Dutreil, abattements)
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <span className="text-white font-normal">5</span>
                </div>
                <p className="font-light leading-relaxed">
                  <strong className="font-normal">Anticipation :</strong> Prévoir effets des apports, réductions de capital, location-gérance
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <span className="text-white font-normal">6</span>
                </div>
                <p className="font-light leading-relaxed">
                  <strong className="font-normal">Mise à jour :</strong> Actualiser la valorisation annuellement ou lors d'événement majeur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Questions fréquentes</h2>
            <p className="text-xl font-light text-slate-600">
              Les réponses aux questions essentielles sur la valorisation
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-normal text-slate-900 mb-3 flex items-center">
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-amber-700 font-normal">?</span>
                </span>
                Quelle méthode de valorisation choisir pour ma holding ?
              </h3>
              <p className="text-slate-700 font-light leading-relaxed ml-11">
                Il n'existe pas de méthode unique. L'administration fiscale recommande de <strong className="font-normal text-slate-900">combiner plusieurs approches</strong> : patrimoniale (actifs - dettes), rentabilité (DCF) et comparables (multiples). Pour une holding passive patrimoniale, privilégiez la méthode patrimoniale complétée par les comparables. Pour une holding animatrice avec forte création de valeur, la méthode DCF sera pertinente.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-normal text-slate-900 mb-3 flex items-center">
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-amber-700 font-normal">?</span>
                </span>
                Comment justifier une décote de 15-20% auprès de l'administration fiscale ?
              </h3>
              <p className="text-slate-700 font-light leading-relaxed ml-11">
                La décote doit être <strong className="font-normal text-slate-900">documentée par des preuves tangibles</strong> : statuts avec clauses d'agrément, pactes d'actionnaires limitant la cession, absence de marché organisé, participation minoritaire, gouvernance centralisée. La jurisprudence admet des décotes de 15% (Cass. com. 6-5-2003) à 20% (Cass. com. 23-11-2010) voire plus selon le contexte.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-normal text-slate-900 mb-3 flex items-center">
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-amber-700 font-normal">?</span>
                </span>
                Quel est l'impact de la PPVE sur la valorisation en 2025 ?
              </h3>
              <p className="text-slate-700 font-light leading-relaxed ml-11">
                La PPVE (Prime de Partage de la Valorisation de l'Entreprise) influence la rentabilité via son impact sur les charges. En 2025, le plafond d'exonération est de <strong className="font-normal text-slate-900">1 766,25 € par bénéficiaire</strong> (3,75% du PASS de 47 100 €). Cette charge déductible doit être intégrée dans la normalisation de l'EBE/EBITDA pour refléter la rentabilité réelle.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-normal text-slate-900 mb-3 flex items-center">
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-amber-700 font-normal">?</span>
                </span>
                Quels régimes fiscaux puis-je mobiliser lors d'une cession ?
              </h3>
              <p className="text-slate-700 font-light leading-relaxed ml-11">
                Plusieurs dispositifs existent : <strong className="font-normal text-slate-900">CGI 151 septies</strong> (exonération selon recettes), <strong className="font-normal text-slate-900">238 quindecies</strong> (selon valeur), <strong className="font-normal text-slate-900">151 septies A</strong> (départ retraite), <strong className="font-normal text-slate-900">150-0 D ter</strong> (abattement 500k€ applicable jusqu'au 31/12/2024), et <strong className="font-normal text-slate-900">CGI 41</strong> (report d'imposition sur apport). Vérifiez l'éligibilité et les conditions temporelles avec votre expert.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-8 hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-normal text-slate-900 mb-3 flex items-center">
                <span className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-amber-700 font-normal">?</span>
                </span>
                À quelle fréquence actualiser la valorisation de ma holding ?
              </h3>
              <p className="text-slate-700 font-light leading-relaxed ml-11">
                Il est recommandé d'actualiser la valorisation <strong className="font-normal text-slate-900">au moins tous les 2-3 ans</strong>, ou immédiatement en cas d'événement significatif : acquisition, cession de filiale, modification de gouvernance, forte croissance, changement de marché. Pour une holding en transmission, une valorisation annuelle permet de suivre l'évolution et d'optimiser la fiscalité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Besoin d'une valorisation professionnelle ?
          </h2>
          <p className="text-xl font-light text-slate-300 mb-12 max-w-2xl mx-auto">
            Bénéficiez d'une évaluation rigoureuse, défendable et optimisée fiscalement pour votre projet de cession, transmission ou levée de fonds.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a href="/contact" className="px-8 py-4 bg-amber-500 text-slate-900 font-light hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20">
              Prendre rendez-vous
            </a>
            <a href="tel:0607963135" className="px-8 py-4 border border-white/20 text-white font-light hover:bg-white/10 transition-all">
              06 07 96 31 35
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-slate-400 font-light">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Expert certifié</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Vu sur Forbes</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>5+ ans d'expérience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Style Cheval Blanc */}
      <footer className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-700 rounded flex items-center justify-center">
                  <span className="text-amber-500 font-bold text-lg">E</span>
                </div>
                <div className="font-light text-slate-900 text-lg">ExpertHolding.fr</div>
              </div>
              <p className="text-sm font-light text-slate-600 leading-relaxed">
                Expert en structuration financière de holdings. Accompagnement des dirigeants de la création à la transmission.
              </p>
            </div>

            <div>
              <h4 className="font-normal text-slate-900 mb-4">Navigation</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-sm font-light text-slate-600 hover:text-slate-900 transition-colors">Accueil</a></li>
                <li><a href="/creer-holding" className="text-sm font-light text-slate-600 hover:text-slate-900 transition-colors">Créer sa Holding</a></li>
                <li><a href="/gerer-holding" className="text-sm font-light text-slate-600 hover:text-slate-900 transition-colors">Gérer sa Holding</a></li>
                <li><a href="/transmettre-holding" className="text-sm font-light text-slate-600 hover:text-slate-900 transition-colors">Transmettre sa Holding</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-normal text-slate-900 mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-sm font-light text-slate-600">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Toulouse, Occitanie<br />Intervention France entière</span>
                </li>
                <li className="flex items-center text-sm font-light text-slate-600">
                  <svg className="w-5 h-5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>06 07 96 31 35</span>
                </li>
                <li className="flex items-center text-sm font-light text-slate-600">
                  <svg className="w-5 h-5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>florent@occitea-ip.fr</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-normal text-slate-900 mb-4">Accréditations</h4>
              <ul className="space-y-3 text-sm font-light text-slate-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Membre ANACOFI
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Membre ANACOFI CIF
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Enregistré ORIAS
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Vu sur Forbes
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm font-light text-slate-500">
                © 2025 ExpertHolding.fr - Tous droits réservés
              </p>
              <div className="flex items-center space-x-6">
                <a href="/mentions-legales" className="text-sm font-light text-slate-500 hover:text-slate-700 transition-colors">Mentions légales</a>
                <a href="/politique-confidentialite" className="text-sm font-light text-slate-500 hover:text-slate-700 transition-colors">Confidentialité</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}