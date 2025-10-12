'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, Shield, TrendingUp, Globe, Award, CheckCircle, AlertTriangle, Users, Lock, BarChart3, DollarSign, FileText } from 'lucide-react'

export default function AssuranceVieLuxPage() {
  return (
    <>
      <Header currentPage="expertise" />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-slate-900 text-white py-32">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1600&q=80" 
              alt="Assurance-vie luxembourgeoise"
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
              <span className="text-white">Assurance-vie luxembourgeoise</span>
            </div>

            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Assurance-vie luxembourgeoise<br />
              <span className="text-amber-400">Sécurité, diversification et portabilité internationale</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl leading-relaxed">
              Le contrat d'assurance-vie luxembourgeois combine protection maximale des avoirs, neutralité fiscale et accès à une architecture d'investissement ouverte sur le monde.
            </p>
          </div>
        </div>

        {/* L'essentiel à retenir */}
        <section className="py-20 bg-amber-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">L'essentiel à retenir</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-amber-500 mb-3" />
                <p className="text-slate-700">
                  Sécurité renforcée grâce au <strong>triangle de sécurité</strong> et au <strong>super-privilège</strong> : protection totale du capital en cas de faillite
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-amber-500 mb-3" />
                <p className="text-slate-700">
                  Grande flexibilité avec <strong>large choix de supports</strong>, investissement multi-devises et portabilité internationale
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-amber-500 mb-3" />
                <p className="text-slate-700">
                  <strong>Neutralité fiscale</strong> : le contrat s'aligne sur la fiscalité du pays de résidence, idéal pour expatriés
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <AlertTriangle className="w-8 h-8 text-amber-500 mb-3" />
                <p className="text-slate-700">
                  Réservé aux patrimoines conséquents : <strong>ticket d'entrée 100 000 € à 250 000 €</strong> et frais potentiellement supérieurs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qu'est-ce que c'est */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Qu'est-ce qu'un contrat d'assurance-vie luxembourgeois ?</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  C'est une police d'assurance souscrite auprès d'une compagnie régulée par le <strong>Commissariat aux Assurances (CAA)</strong> luxembourgeois. Comparable à l'assurance-vie française dans son principe, elle s'en distingue par <strong>cinq particularités majeures</strong> qui changent la donne pour les patrimoine significatifs.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Shield className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Triangle de sécurité</h4>
                      <p className="text-slate-600 text-sm">Séparation stricte entre assureur, banque dépositaire et régulateur</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Award className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Super-privilège</h4>
                      <p className="text-slate-600 text-sm">Les souscripteurs deviennent créanciers de premier rang, protection illimitée</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Lock className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Sécurité des actifs</h4>
                      <p className="text-slate-600 text-sm">Conservation dans une banque dépositaire AAA/AA-, contrôle quotidien par le CAA</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Globe className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Neutralité fiscale</h4>
                      <p className="text-slate-600 text-sm">Absence d'impôt luxembourgeois, application de la fiscalité du pays de résidence</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Architecture ouverte</h4>
                      <p className="text-slate-600 text-sm">Accès aux actifs non cotés, multi-devises, private equity, titres vifs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80" 
                  alt="Triangle de sécurité"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Les 6 piliers d'attractivité */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Les 6 piliers d'attractivité</h2>
            <p className="text-xl text-slate-600 mb-12 text-center">Ce qui distingue fondamentalement le contrat luxembourgeois</p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Pilier 1 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Sécurité maximale</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Le triangle de sécurité + super-privilège garantissent que vous êtes créancier prioritaire. Protection <strong>au-delà des 70 000 €</strong> du FGAP français.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700"><strong>100 %</strong> des avoirs protégés, quelle que soit la somme</p>
                </div>
              </div>

              {/* Pilier 2 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Portabilité internationale</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Changement de pays sans fermer l'enveloppe. La fiscalité suit automatiquement votre <strong>résidence actuelle</strong>.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700">Idéal pour expatriés et familles mobiles</p>
                </div>
              </div>

              {/* Pilier 3 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Architecture ouverte</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Accès à des <strong>FID</strong>, <strong>FAS</strong>, titres vifs, private equity. Stratégies non disponibles dans les contrats français standards.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700">Plus de 4 000 UC disponibles vs ~600 en France</p>
                </div>
              </div>

              {/* Pilier 4 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Multi-devise</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Libellé en <strong>EUR, USD, CHF, GBP</strong>. Couverture du risque de change et optimisation selon vos projets.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700">Financez des études aux USA ou un projet en Suisse</p>
                </div>
              </div>

              {/* Pilier 5 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">5. Transmission optimisée</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Clause bénéficiaire libre, démembrement, abattement <strong>152 500 €/bénéficiaire</strong>. Sortie hors succession.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700">Protection du conjoint, planification successorale fine</p>
                </div>
              </div>

              {/* Pilier 6 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">6. Performance</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Fonds euros luxembourgeois : taux crédités <strong>supérieur à 3 %</strong> nets de frais en 2024, investis en corporate A/AA.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700">+0,75 pt vs contrats français en moyenne</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fiscalité pour un résident français */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Fiscalité pour un résident français</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80" 
                  alt="Fiscalité"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Pour un résident fiscal français, les <strong>mêmes règles qu'un contrat national s'appliquent</strong>. Le Luxembourg n'applique aucune retenue à la source, c'est la France qui fiscalise.
                </p>

                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h4 className="font-bold text-slate-900 mb-2">Rachats (article 125-0 A CGI)</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>PFU 12,8 % + prélèvements sociaux 17,2 % = <strong>30 %</strong></span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Après 8 ans : abattement <strong>4 600 €</strong> (personne seule) ou <strong>9 200 €</strong> (couple)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Taux réduit 7,5 % si versements inférieur à 150 000 €</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6">
                    <h4 className="font-bold text-slate-900 mb-2">Succession (article 990 I CGI)</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Primes inférieures à 70 ans : abattement <strong>152 500 € par bénéficiaire</strong></span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Puis taxation 20 % jusqu'à 700 000 €, 31,25 % au-delà</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Primes supérieures ou égales à 70 ans : abattement global 30 500 €, droits de succession sur l'excédent</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                <FileText className="w-5 h-5 text-amber-600 mr-2" />
                Obligations déclaratives
              </h4>
              <p className="text-slate-700 mb-2">
                Déclaration annuelle <strong>Cerfa 3916-bis</strong> obligatoire pour tout contrat détenu à l'étranger.
              </p>
              <p className="text-slate-600 text-sm">
                Omission : amende 1 500 € par compte + majoration 80 % en cas de fraude. La transparence est obligatoire !
              </p>
            </div>
          </div>
        </section>

        {/* À qui s'adresse ce contrat */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">À qui s'adresse ce contrat ?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Investisseurs fortunés (France)</h3>
                <p className="text-slate-700 mb-4">
                  Patrimoine significatif recherchant <strong>diversification et protection</strong> au-delà des 70 000 € du FGAP.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700"><strong>Profil type :</strong> Chef d'entreprise, profession libérale, investisseur supérieur à 500 k€</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Expatriés et cadres mobiles</h3>
                <p className="text-slate-700 mb-4">
                  Besoin d'un véhicule <strong>portable et fiscalement neutre</strong> qui suit les changements de résidence.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700"><strong>Profil type :</strong> Expatrié à Dubaï, Singapour, Londres, USA</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Entrepreneurs post-cession</h3>
                <p className="text-slate-700 mb-4">
                  Réemploi du produit de cession dans des <strong>stratégies alternatives</strong> (private equity, club deals).
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700"><strong>Profil type :</strong> Cédant 2025 recherchant diversification haut de gamme</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Familles internationales</h3>
                <p className="text-slate-700 mb-4">
                  Optimisation de la <strong>transmission patrimoniale</strong> avec clause bénéficiaire sophistiquée.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700"><strong>Profil type :</strong> Famille recomposée, héritiers dans plusieurs pays</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparatif Luxembourg vs France */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Comparatif : Luxembourg vs France</h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Critère</th>
                    <th className="px-6 py-4 text-left">Luxembourg</th>
                    <th className="px-6 py-4 text-left">France (en ligne)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">Ticket d'entrée</td>
                    <td className="px-6 py-4 text-slate-700">100 000 € - 250 000 €</td>
                    <td className="px-6 py-4 text-slate-700">50 € minimum</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">Garantie faillite</td>
                    <td className="px-6 py-4 text-amber-600 font-bold">100 % (super-privilège)</td>
                    <td className="px-6 py-4 text-slate-700">70 000 € (FGAP)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">Fonds euros 2024</td>
                    <td className="px-6 py-4 text-amber-600 font-bold">~3,25 % net frais</td>
                    <td className="px-6 py-4 text-slate-700">~2,50 % net frais</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">UC non cotées</td>
                    <td className="px-6 py-4 text-amber-600 font-bold">Oui (FID, FAS, PE)</td>
                    <td className="px-6 py-4 text-slate-700">Non (hors pacte adjoint)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">Multi-devise</td>
                    <td className="px-6 py-4 text-amber-600 font-bold">Oui (6 devises)</td>
                    <td className="px-6 py-4 text-slate-700">Non (EUR uniquement)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">Frais gestion UC</td>
                    <td className="px-6 py-4 text-slate-700">~0,90 % moyen</td>
                    <td className="px-6 py-4 text-amber-600 font-bold">~0,60 % moyen</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">Délai souscription</td>
                    <td className="px-6 py-4 text-slate-700">4-8 semaines</td>
                    <td className="px-6 py-4 text-amber-600 font-bold">48 heures</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">Portabilité internationale</td>
                    <td className="px-6 py-4 text-amber-600 font-bold">Oui (neutralité fiscale)</td>
                    <td className="px-6 py-4 text-slate-700">Non</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-amber-50 border-l-4 border-amber-400 p-6">
              <p className="text-slate-700">
                <strong>Conclusion :</strong> Le contrat luxembourgeois offre une sécurité et une flexibilité supérieures, mais exige un patrimoine initial conséquent et une compréhension fine des mécanismes. Le contrat français reste plus accessible et plus simple pour les patrimoines inférieur à 500 000 €.
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir en 2025 */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Pourquoi choisir un contrat luxembourgeois en 2025 ?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Pression réglementaire bancaire</h3>
                <p className="text-slate-700 text-sm">
                  Bâle III rehausse les exigences de fonds propres. Le Luxembourg maintient des ratios de solvabilité supérieur à 210 % vs 100 % minimum.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <BarChart3 className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Environnement de taux positifs</h3>
                <p className="text-slate-700 text-sm">
                  Fonds euros luxembourgeois investis en corporate A/AA délivrent supérieur à 3 % nets, sans risque de spread souverain français.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Globe className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Internationalisation des patrimoines</h3>
                <p className="text-slate-700 text-sm">
                  Études à Boston, résidence à Lisbonne, start-up à Tallinn : l'enveloppe suit la famille sans friction fiscale.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Lock className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Protection contre le gel des avoirs</h3>
                <p className="text-slate-700 text-sm">
                  Échappe à la loi Sapin II qui permet de geler temporairement les rachats de fonds euros en France en cas de crise.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Award className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Actifs alternatifs accessibles</h3>
                <p className="text-slate-700 text-sm">
                  Private equity, dette privée, infrastructures vertes : le Luxembourg autorise via FAS/FID ce que la France limite.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <DollarSign className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">Fin du Pinel</h3>
                <p className="text-slate-700 text-sm">
                  Les UC immobilières luxembourgeoises permettent de garder une poche pierre avec IFI optimisé et meilleure liquidité.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Limites et points de vigilance */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Limites et points de vigilance</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-slate-900">Ticket d'entrée élevé</h3>
                </div>
                <p className="text-slate-700 mb-3 text-sm">
                  FID ≥ 1 M€, FAS ≥ 250 k€. Accès réservé aux patrimoines supérieur à 500 k€.
                </p>
                <p className="text-slate-600 text-xs italic">
                  <strong>Atténuation :</strong> Constituer progressivement via versements programmés si l'assureur l'accepte.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-slate-900">Frais supérieurs</h3>
                </div>
                <p className="text-slate-700 mb-3 text-sm">
                  Gestion UC : 0,6 % à 1,2 %/an + frais arbitrage 0,30 %.
                </p>
                <p className="text-slate-600 text-xs italic">
                  <strong>Atténuation :</strong> Négocier droits d'entrée et privilégier ETF à TER inférieur à 0,20 %.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-slate-900">Complexité KYC/AML</h3>
                </div>
                <p className="text-slate-700 mb-3 text-sm">
                  Justificatifs d'origine des fonds, PEP screening. Délai 6-8 semaines.
                </p>
                <p className="text-slate-600 text-xs italic">
                  <strong>Atténuation :</strong> Anticiper : titres de propriété, bilans, attestations fiscales.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-slate-900">Risque de change</h3>
                </div>
                <p className="text-slate-700 mb-3 text-sm">
                  Contrat en USD : volatilité sur la VL selon évolution EUR/USD.
                </p>
                <p className="text-slate-600 text-xs italic">
                  <strong>Atténuation :</strong> Utiliser mandats currency-hedged ou pondération macro.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-slate-900">Liquidité actifs non cotés</h3>
                </div>
                <p className="text-slate-700 mb-3 text-sm">
                  Private equity lock-up 7-10 ans. Rachats partiels impossibles sur cette poche.
                </p>
                <p className="text-slate-600 text-xs italic">
                  <strong>Atténuation :</strong> Diversifier entre UC liquides (70 %) et illiquides (30 %).
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-slate-900">Primes « manifestement exagérées »</h3>
                </div>
                <p className="text-slate-700 mb-3 text-sm">
                  L'administration examine l'âge, patrimoine et utilité patrimoniale.
                </p>
                <p className="text-slate-600 text-xs italic">
                  <strong>Vigilance :</strong> Verser 5 M€ à 88 ans pourra basculer en droits de succession.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist avant souscription */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Checklist avant souscription</h2>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <ol className="space-y-6">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-amber-500 text-white rounded-full mr-4 flex-shrink-0 font-bold">1</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Définir l'objectif prioritaire</h4>
                    <p className="text-slate-600 text-sm">Diversification, transmission, hedge devise, portabilité internationale ?</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-amber-500 text-white rounded-full mr-4 flex-shrink-0 font-bold">2</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Arrêter le budget patrimonial</h4>
                    <p className="text-slate-600 text-sm">Montant initial, versements complémentaires, horizon de détention</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-amber-500 text-white rounded-full mr-4 flex-shrink-0 font-bold">3</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Choisir la compagnie</h4>
                    <p className="text-slate-600 text-sm">Solidité supérieur à 180 % S2, expertise FID, service reporting multilingue</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-amber-500 text-white rounded-full mr-4 flex-shrink-0 font-bold">4</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Sélectionner la banque dépositaire</h4>
                    <p className="text-slate-600 text-sm">Rating min. AA-, pays de droit européen (Luxembourg, Allemagne, Pays-Bas)</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-amber-500 text-white rounded-full mr-4 flex-shrink-0 font-bold">5</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Préparer la documentation KYC</h4>
                    <p className="text-slate-600 text-sm">Passeport, justificatifs revenus, attestations fiscales, relevés patrimoine</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-amber-500 text-white rounded-full mr-4 flex-shrink-0 font-bold">6</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Rédiger la clause bénéficiaire</h4>
                    <p className="text-slate-600 text-sm">Simple, démembrée, à options ou graduelle (conjoint 1er rang, enfants en substitution)</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-amber-500 text-white rounded-full mr-4 flex-shrink-0 font-bold">7</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Planifier les déclarations</h4>
                    <p className="text-slate-600 text-sm">Cerfa 3916-bis lors de l'ouverture + suivi annuel valeurs UC</p>
                  </div>
                </li>
              </ol>
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
            <h2 className="text-4xl font-bold mb-6">Intéressé par l'assurance-vie luxembourgeoise ?</h2>
            <p className="text-xl text-slate-200 mb-8">
              Bénéficiez d'un accompagnement expert pour déterminer si cette solution correspond à votre situation patrimoniale.
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