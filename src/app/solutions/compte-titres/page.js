'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, TrendingUp, Users, Building, CheckCircle, AlertTriangle, Globe, DollarSign, BarChart3, Shield, FileText, Zap } from 'lucide-react'

export default function CompteTitresPage() {
  return (
    <>
      <Header currentPage="expertise" />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-slate-900 text-white py-32">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80" 
              alt="Compte-titres"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto px-6">
            {/* Fil d'Ariane */}
            <div className="flex items-center space-x-2 text-sm text-slate-300 mb-8">
              <a href="/" className="hover:text-white transition">Accueil</a>
              <ChevronRight className="w-4 h-4" />
              <a href="/expertise" className="hover:text-white transition">Expertise</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Compte-titres</span>
            </div>

            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Compte-titres ordinaire<br />
              <span className="text-amber-400">Liberté et diversification illimitée</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl leading-relaxed">
              L'enveloppe sans plafond ni restriction géographique pour accéder à tous les marchés mondiaux et optimiser votre trésorerie via holdings.
            </p>
          </div>
        </div>

        {/* Synthèse */}
        <section className="py-20 bg-amber-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">L'essentiel à retenir</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
                <p className="text-slate-700">
                  <strong>Liberté totale :</strong> aucun plafond, accès à tous les marchés mondiaux, instruments variés (actions, obligations, ETF, dérivés)
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
                <p className="text-slate-700">
                  <strong>Souplesse opérationnelle :</strong> arbitrages à tout moment, pas de durée minimale de détention, effet de levier disponible
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <AlertTriangle className="w-8 h-8 text-amber-500 mb-3" />
                <p className="text-slate-700">
                  <strong>Fiscalité de droit commun :</strong> PFU 30 % sur dividendes et plus-values, sans abattement de durée (titres post-2018)
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
                <p className="text-slate-700">
                  <strong>Outil holdings :</strong> régime mère-fille, exonération 88 % titres de participation, apport-cession (art. 150-0 B ter)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Définition */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Qu'est-ce qu'un compte-titres ordinaire (CTO) ?</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Le compte-titres ordinaire est composé d'un <strong>compte titres</strong> (registre des valeurs mobilières) et d'un <strong>compte espèces associé</strong> (flux de liquidités).
                </p>

                <div className="bg-slate-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-slate-900 mb-4">Peut être ouvert par :</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Personne physique</strong> : individuel, joint, indivis, démembrement NP/USU</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Personne morale</strong> : société commerciale, association, fondation, holding</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                  <h4 className="font-bold text-slate-900 mb-2">Références légales clés</h4>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• CGI art. 200 A, 2 : PFU sur plus-values mobilières</li>
                    <li>• CGI art. 150-0 B ter : report d'imposition (apport-cession)</li>
                    <li>• CGI art. 965-966 : exclusion IFI holdings animatrices</li>
                  </ul>
                </div>
              </div>

              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80" 
                  alt="Trading investissement"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            {/* Comparaison enveloppes */}
            <div className="overflow-x-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Comparaison avec les autres enveloppes</h3>
              <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Enveloppe</th>
                    <th className="px-6 py-4 text-left">Plafond</th>
                    <th className="px-6 py-4 text-left">Avantage fiscal</th>
                    <th className="px-6 py-4 text-left">Supports</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">PEA</td>
                    <td className="px-6 py-4 text-slate-700">150 000 €</td>
                    <td className="px-6 py-4 text-green-600 font-bold">0 % IR après 5 ans</td>
                    <td className="px-6 py-4 text-slate-700">Actions UE / ETF PEA</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">Assurance-vie</td>
                    <td className="px-6 py-4 text-slate-700">Aucun</td>
                    <td className="px-6 py-4 text-green-600 font-bold">Abattement 4 600 € / 9 200 € après 8 ans</td>
                    <td className="px-6 py-4 text-slate-700">Fonds €, UC (OPCVM, ETF)</td>
                  </tr>
                  <tr className="hover:bg-amber-50 transition">
                    <td className="px-6 py-4 font-semibold text-amber-600">Compte-titres</td>
                    <td className="px-6 py-4 text-amber-600 font-bold">Aucun</td>
                    <td className="px-6 py-4 text-slate-700">Aucun</td>
                    <td className="px-6 py-4 text-amber-600 font-bold">Tous marchés, dérivés, non-cotés</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Les avantages du compte-titres</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Avantage 1 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Liberté illimitée</h3>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Aucune contrainte géographique</strong> : accès aux Bourses américaines, asiatiques, émergentes. Instruments variés : ETF thématiques, obligations high-yield, SPAC, private equity.
                </p>
              </div>

              {/* Avantage 2 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Souplesse opérationnelle</h3>
                <p className="text-slate-700 leading-relaxed">
                  Pas de durée minimale de détention, <strong>arbitrage à tout moment</strong>. Effet de levier et vente à découvert disponibles. Multiplicité : plusieurs CTO possibles.
                </p>
              </div>

              {/* Avantage 3 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Transmission facilitée</h3>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Donation-partage ou démembrement</strong> : droits calculés sur valeur démembrée. Extinction de l'usufruit au décès sans taxation supplémentaire.
                </p>
              </div>

              {/* Avantage 4 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nantissement possible</h3>
                <p className="text-slate-700 leading-relaxed">
                  Nantissement du portefeuille pour garantir un prêt : <strong>alternative à l'hypothèque</strong> immobilière, pour financer un owner buy-out ou un projet immobilier.
                </p>
              </div>

              {/* Avantage 5 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Building className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Outil holdings</h3>
                <p className="text-slate-700 leading-relaxed">
                  Une holding peut centraliser la trésorerie et investir via CTO tout en bénéficiant du <strong>régime mère-fille</strong> et de l'intégration fiscale.
                </p>
              </div>

              {/* Avantage 6 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Diversification maximale</h3>
                <p className="text-slate-700 leading-relaxed">
                  <strong>Classes d'actifs variées</strong> : actions, obligations, fonds alternatifs, produits structurés. Répartition géographique mondiale pour diluer les risques.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fiscalité détaillée */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Fiscalité 2025 : ce qu'il faut savoir</h2>

            {/* Personne physique */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-amber-500 mr-3" />
                <h3 className="text-3xl font-bold text-slate-900">Personnes physiques</h3>
              </div>

              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Flux</th>
                      <th className="px-6 py-4 text-left">Taux par défaut</th>
                      <th className="px-6 py-4 text-left">Option barème</th>
                      <th className="px-6 py-4 text-left">Particularités</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-semibold text-slate-900">Dividendes</td>
                      <td className="px-6 py-4 text-slate-700">PFU 30 %</td>
                      <td className="px-6 py-4 text-slate-700">Barème – abattement 40 %</td>
                      <td className="px-6 py-4 text-slate-700 text-sm">Acompte 12,8 % (dispense si RFR {`<`} 50 k€)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-semibold text-slate-900">Intérêts obligataires</td>
                      <td className="px-6 py-4 text-slate-700">PFU 30 %</td>
                      <td className="px-6 py-4 text-slate-700">Barème sans abattement</td>
                      <td className="px-6 py-4 text-slate-700 text-sm">PS toujours dus (17,2 %)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-semibold text-slate-900">Plus-values</td>
                      <td className="px-6 py-4 text-slate-700">PFU 30 %</td>
                      <td className="px-6 py-4 text-slate-700">Barème + abattement durée</td>
                      <td className="px-6 py-4 text-slate-700 text-sm">Imputation MV sur PV (10 ans)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                <h4 className="font-bold text-slate-900 mb-2">Point important</h4>
                <p className="text-slate-700 text-sm">
                  Pour les titres acquis <strong>avant 2018</strong>, des abattements pour durée de détention peuvent s'appliquer : 50 % après 2 ans, 65 % après 8 ans (option barème uniquement).
                </p>
              </div>
            </div>

            {/* Personne morale */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-amber-500 mr-3" />
                <h3 className="text-3xl font-bold text-slate-900">Holdings et sociétés à l'IS</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Dividendes filiales ≥ 5 %</h4>
                  <p className="text-slate-700 mb-4">
                    <strong>Régime mère-fille :</strong> exonération 95 % (quote-part 5 % taxable à l'IS).
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-slate-600">
                      <strong>Exemple :</strong> Holding reçoit 100 000 € de dividendes → seulement 5 000 € taxables à l'IS (25 %) = 1 250 € d'impôt
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Plus-values titres de participation</h4>
                  <p className="text-slate-700 mb-4">
                    <strong>Exonération 88 %</strong> (quote-part 12 % taxable) si détention {`>`} 2 ans et {`>`} 10 % du capital.
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-slate-600">
                      <strong>Exemple :</strong> PV de 1 M€ → seulement 120 000 € taxables = 30 000 € d'IS
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Dividendes portefeuille {`<`} 5 %</h4>
                  <p className="text-slate-700">
                    IS 25 % (taux normal) sans régime dérogatoire.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Plus-values titres de portefeuille</h4>
                  <p className="text-slate-700">
                    IS 25 % (taux normal). Provision latente possible si moins-value probable.
                  </p>
                </div>
              </div>
            </div>

            {/* Apport-cession */}
            <div className="bg-slate-50 rounded-2xl p-8 border-2 border-amber-400">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-amber-500 mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">Mécanisme d'apport-cession (CGI art. 150-0 B ter)</h3>
              </div>
              
              <ol className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-amber-500 text-white rounded-full mr-3 flex-shrink-0 text-sm font-bold">1</span>
                  <span>L'associé apporte ses titres à une holding contrôlée → <strong>plus-value mise en report</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-amber-500 text-white rounded-full mr-3 flex-shrink-0 text-sm font-bold">2</span>
                  <span>La holding cède les titres</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-amber-500 text-white rounded-full mr-3 flex-shrink-0 text-sm font-bold">3</span>
                  <span>Pour maintenir le report : <strong>réinvestir ≥ 60 %</strong> du produit dans 24 mois dans une activité économique éligible</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 text-white rounded-full mr-3 flex-shrink-0 text-sm font-bold">!</span>
                  <span>Si condition non respectée → plus-value devient exigible</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Compte-titres via holdings */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Utilisation via holdings</h2>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Holding opérationnelle */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <Building className="w-10 h-10 text-amber-500 mr-3" />
                  <h3 className="text-2xl font-bold text-slate-900">Holding opérationnelle (animatrice)</h3>
                </div>

                <p className="text-slate-700 mb-6">
                  Assure de façon active les fonctions de <strong>direction, contrôle et prestations spécifiques</strong> au profit de ses filiales.
                </p>

                <h4 className="font-bold text-slate-900 mb-3">Intérêts fiscaux</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Centralisation trésorerie + cash pooling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Effet de levier LBO : dividendes → service de la dette</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm"><strong>Pacte Dutreil :</strong> exonération 75 % sur transmission (CGI art. 787 B)</span>
                  </li>
                </ul>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h5 className="font-bold text-slate-900 text-sm mb-2">Points de vigilance</h5>
                  <ul className="space-y-1 text-xs text-slate-600">
                    <li>• Preuve de l'animation (contrats management fees, PV)</li>
                    <li>• Actifs non affectés à l'animation = minoritaires</li>
                  </ul>
                </div>
              </div>

              {/* Holding patrimoniale */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <DollarSign className="w-10 h-10 text-amber-500 mr-3" />
                  <h3 className="text-2xl font-bold text-slate-900">Holding patrimoniale</h3>
                </div>

                <p className="text-slate-700 mb-6">
                  Société interposée pour la <strong>gestion de portefeuille familial</strong>, sans animation directe des filiales.
                </p>

                <h4 className="font-bold text-slate-900 mb-3">Avantages patrimoniaux</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Capitalisation à l'IS (25 %) vs TMI personne physique (45 %)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Distribution modulable (timing optimal)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Transmission : donation parts avec décote illiquidité/minorité</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Cloisonnement actifs vs patrimoine personnel</span>
                  </li>
                </ul>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h5 className="font-bold text-slate-900 text-sm mb-2">Limites</h5>
                  <ul className="space-y-1 text-xs text-slate-600">
                    <li>• Régime mère-fille inapplicable si détention {`<`} 5 %</li>
                    <li>• IFI : si portefeuille {`>`} 50 % immobilier indirect</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* À qui convient le CTO */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">À qui convient le compte-titres ?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-xl p-8 border-2 border-amber-400">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Dirigeant d'entreprise</h3>
                <p className="text-slate-700 mb-4">
                  <strong>Objectif :</strong> Diversifier la trésorerie hors comptes courants d'associés
                </p>
                <p className="text-slate-600 text-sm mb-4">
                  <strong>Pourquoi le CTO ?</strong> Liberté d'allocation, nantissement possible pour financer un projet
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-xs text-slate-600"><strong>Mot-clé :</strong> "investir trésorerie holding"</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 border-2 border-amber-400">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Investisseur particulier actif</h3>
                <p className="text-slate-700 mb-4">
                  <strong>Objectif :</strong> Trading international, ETF thématiques
                </p>
                <p className="text-slate-600 text-sm mb-4">
                  <strong>Pourquoi le CTO ?</strong> Aucun plafond, effet de levier, accès à tous les marchés
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-xs text-slate-600"><strong>Mot-clé :</strong> "ouvrir compte-titres en ligne"</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 border-2 border-amber-400">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Famille patrimoniale</h3>
                <p className="text-slate-700 mb-4">
                  <strong>Objectif :</strong> Transmission intergénérationnelle
                </p>
                <p className="text-slate-600 text-sm mb-4">
                  <strong>Pourquoi le CTO ?</strong> Donation nue-propriété, Pacte Dutreil via holding
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-xs text-slate-600"><strong>Mot-clé :</strong> "compte-titres démembrement"</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 border-2 border-amber-400">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Expatrié non-résident</h3>
                <p className="text-slate-700 mb-4">
                  <strong>Objectif :</strong> Gestion portefeuille hors PEA
                </p>
                <p className="text-slate-600 text-sm mb-4">
                  <strong>Pourquoi le CTO ?</strong> Accessible, fiscalité conventionnelle selon résidence
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-xs text-slate-600"><strong>Mot-clé :</strong> "compte-titres non résident"</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 border-2 border-amber-400">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Start-up founder post-exit</h3>
                <p className="text-slate-700 mb-4">
                  <strong>Objectif :</strong> Apport-cession, réinvestissement 60 %
                </p>
                <p className="text-slate-600 text-sm mb-4">
                  <strong>Pourquoi le CTO ?</strong> Report d'imposition, capital de départ préservé
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-xs text-slate-600"><strong>Mot-clé :</strong> "apport cession holding"</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 border-2 border-amber-400">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Investisseur institutionnel</h3>
                <p className="text-slate-700 mb-4">
                  <strong>Objectif :</strong> Diversification maximale, gestion active
                </p>
                <p className="text-slate-600 text-sm mb-4">
                  <strong>Pourquoi le CTO ?</strong> Accès dérivés, produits structurés, marchés émergents
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-xs text-slate-600"><strong>Mot-clé :</strong> "compte-titres professionnel"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inconvénients */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Inconvénients et points de vigilance</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-slate-900">Fiscalité de droit commun</h3>
                </div>
                <p className="text-slate-700 text-sm mb-2">
                  PFU 30 % sur dividendes, coupons et plus-values, <strong>sans abattement de durée</strong> (titres post-2018).
                </p>
                <p className="text-slate-600 text-xs italic">Option barème possible avec abattement 40 % sur dividendes</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-slate-900">Frais et coûts cachés</h3>
                </div>
                <p className="text-slate-700 text-sm mb-2">
                  Frais de courtage (fixe + variable), droits de garde annuels, frais de change sur devises étrangères.
                </p>
                <p className="text-slate-600 text-xs italic">Négocier gratuité droits de garde {`>`} 100 k€ d'actifs</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-slate-900">Complexité déclarative</h3>
                </div>
                <p className="text-slate-700 text-sm mb-2">
                  Formulaire <strong>2074-CMV obligatoire</strong> en cas d'option barème. Gestion du corpus de justificatifs.
                </p>
                <p className="text-slate-600 text-xs italic">Conserver historiques prix d'acquisition (FIFO + PMP)</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-slate-900">Double imposition en holding IS</h3>
                </div>
                <p className="text-slate-700 text-sm mb-2">
                  Revenus imposés au niveau société <strong>puis lors de la distribution</strong> aux associés.
                </p>
                <p className="text-slate-600 text-xs italic">D'où l'intérêt du régime mère-fille et capitalisation longue</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-slate-900">Risque de marché</h3>
                </div>
                <p className="text-slate-700 text-sm mb-2">
                  Volatilité élevée sur certaines classes d'actifs (small caps, dérivés, marchés émergents).
                </p>
                <p className="text-slate-600 text-xs italic">Diversifier par classes d'actifs et zones géographiques</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-slate-900">Risque de change</h3>
                </div>
                <p className="text-slate-700 text-sm mb-2">
                  Marchés hors zone euro : <strong>risque de change additionnel</strong> (EUR/USD, EUR/JPY, etc.).
                </p>
                <p className="text-slate-600 text-xs italic">Évaluer spread + commission avant arbitrage international</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1600&q=80" 
              alt="Contact"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Le compte-titres répond-il à vos besoins ?</h2>
            <p className="text-xl text-slate-200 mb-8">
              Bénéficiez d'un conseil personnalisé pour déterminer la meilleure stratégie d'investissement selon votre profil et vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:florent@occitea-ip.fr" 
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition"
              >
                Prendre RDV
              </a>
              <a 
                href="tel:0607963135" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition"
              >
                06 07 96 31 35
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer currentPage="expertise" />
    </>
  )
}