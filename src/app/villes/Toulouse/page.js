import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ChevronRight, CheckCircle, TrendingUp, Building2, Rocket, Microscope, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

export default function HoldingToulousePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="villes" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1600&q=80')] bg-cover bg-center opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={16} className="text-slate-400" />
            <span className="text-amber-400">Holding Toulouse</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="text-amber-400" size={32} />
              <span className="text-amber-400 font-light text-lg">Occitanie</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
              Création de Holding à Toulouse
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 leading-relaxed">
              Expert en structuration de holdings pour dirigeants d'entreprises technologiques et industrielles à Toulouse. Accompagnement personnalisé des PME aéronautiques, biotech et IA.
            </p>
            
            {/* Stats Toulouse */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">520 000</div>
                <div className="text-sm text-slate-300 font-light">Emplois à Toulouse</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">140 000</div>
                <div className="text-sm text-slate-300 font-light">Établissements</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">63%</div>
                <div className="text-sm text-slate-300 font-light">Emplois industriels</div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:0607963135"
                className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-base font-light transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                06 07 96 31 35
              </a>
              <a 
                href="mailto:florent@occitea-ip.fr"
                className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 text-base font-light backdrop-blur-sm transition-all"
              >
                Demander un audit gratuit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Toulouse */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
              Pourquoi créer une holding à Toulouse ?
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Toulouse est <strong className="text-slate-900">le premier pôle industriel français après Paris</strong>, avec un tissu économique à très haute intensité technologique. Cette singularité en fait une ville particulièrement stratégique pour la création de holdings, notamment dans les secteurs de l'aéronautique, des biotechnologies et de l'intelligence artificielle.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white border border-slate-200 p-8">
              <h3 className="text-xl font-light text-slate-900 mb-6 flex items-center">
                <Rocket className="w-6 h-6 text-amber-600 mr-3" />
                Écosystème industriel unique
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Aéronautique et spatial :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Airbus, Thales, Safran, CNES et un réseau dense de PME spécialisées dans les matériaux et l'électronique</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Santé et biotechnologies :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Clusters autour de l'oncologie, de l'IA médicale et de la recherche pharmaceutique</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">IA, cybersécurité et mobilités décarbonées :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Campus internationaux et programme « Toulouse Aerospace »</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Chimie fine et pharmaceutique :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Réorientation du pôle chimique historique vers la haute valeur ajoutée</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 p-8">
              <h3 className="text-xl font-light text-slate-900 mb-6 flex items-center">
                <Building2 className="w-6 h-6 text-amber-600 mr-3" />
                Avantages stratégiques d'une holding toulousaine
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">1</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Proximité avec un tissu industriel densément intégré</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Regrouper des participations dans les secteurs technologiques toulousains facilite les synergies entre filiales</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">2</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Facilité d'accès aux financements</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Une holding renforce la solidité financière et facilite la levée de fonds dans les filières aéronautique et biotech soutenues par l'Europe</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">3</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Optimisation fiscale</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Régime d'intégration fiscale, régime mère-fille, et Pacte Dutreil pour les holdings familiales</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">4</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Protection patrimoniale</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Séparer les actifs industriels, immobiliers et financiers limite les risques dans un environnement à forte intensité capitalistique</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cas pratiques Toulouse */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4 text-center">
            Cas pratiques : Holdings toulousaines
          </h2>
          <p className="text-lg text-slate-600 font-light text-center mb-12 max-w-3xl mx-auto">
            Exemples concrets d'optimisation patrimoniale pour dirigeants d'entreprises technologiques à Toulouse
          </p>

          <div className="space-y-8">
            {/* Cas 1 : Sous-traitant aéronautique */}
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 lg:p-12">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Rocket className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-slate-900 mb-2">
                    PME sous-traitante aéronautique
                  </h3>
                  <p className="text-slate-600 font-light">Dirigeant 52 ans, CA 12M€, spécialisé usinage pièces Airbus</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white border border-slate-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Sans holding</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• CA : 12M€</li>
                    <li>• Bénéfice net : 1,5M€/an</li>
                    <li>• Dividendes versés : 800K€/an</li>
                    <li>• Flat tax 30% : <strong className="text-red-600">240K€/an</strong></li>
                    <li>• Net après impôt : 560K€</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Avec holding pure + régime mère-fille</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• Holding détient 100% de la PME</li>
                    <li>• Dividendes remontés : 800K€</li>
                    <li>• Quote-part 5% imposable : 40K€</li>
                    <li>• IS sur 40K€ (25%) : <strong className="text-emerald-600">10K€/an</strong></li>
                    <li className="text-emerald-700 font-medium">• <strong>Économie : 230K€/an</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                <h4 className="text-lg font-light text-slate-900 mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 text-amber-600 mr-2" />
                  Bénéfices complémentaires pour ce dirigeant
                </h4>
                <ul className="space-y-2 text-sm text-slate-700 font-light">
                  <li>✓ <strong>Réinvestissement optimisé :</strong> Utiliser les 790K€ nets pour racheter un concurrent ou diversifier dans la biotech toulousaine</li>
                  <li>✓ <strong>Protection patrimoniale :</strong> Séparer l'outil de production (PME) du patrimoine immobilier et financier (holding)</li>
                  <li>✓ <strong>Transmission facilitée :</strong> Donation progressive des parts de holding aux enfants avec abattements fiscaux renouvelables tous les 15 ans</li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 font-light">
                  <strong>Cadre légal :</strong> Régime mère-fille (art. 145 et 216 CGI). Conditions : détention {`>`}5%, conservation {`>`}2 ans. Source : BOFiP-IS-BASE-10-10-10-10.
                </p>
              </div>
            </div>

            {/* Cas 2 : Start-up biotech */}
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 lg:p-12">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Microscope className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-slate-900 mb-2">
                    Fondateur de start-up biotech
                  </h3>
                  <p className="text-slate-600 font-light">Entrepreneur 45 ans, recherche oncologie, levée de fonds prévue</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white border border-slate-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Détention directe</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• Détention : 60% de la start-up</li>
                    <li>• Valorisation : 8M€</li>
                    <li>• Parts du fondateur : 4,8M€</li>
                    <li>• En cas de cession :</li>
                    <li>• PFU 30% sur plus-value : <strong className="text-red-600">~1,4M€ d'impôt</strong></li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Via holding (apport-cession)</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• Apport des titres à une holding</li>
                    <li>• Report d'imposition sur PV d'apport</li>
                    <li>• Cession via la holding (détention {`>`}2 ans)</li>
                    <li>• Quote-part 12% imposable à l'IS</li>
                    <li>• Impôt sur cession : <strong className="text-emerald-600">~140K€</strong></li>
                    <li className="text-emerald-700 font-medium">• <strong>Économie : ~1,26M€</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h4 className="text-lg font-light text-slate-900 mb-3">Stratégie recommandée</h4>
                <ul className="space-y-2 text-sm text-slate-700 font-light">
                  <li>1. <strong>Créer une holding</strong> avant la levée de fonds</li>
                  <li>2. <strong>Apporter les titres</strong> de la start-up à la holding (report d'imposition art. 150-0 B ter CGI)</li>
                  <li>3. <strong>Lever les fonds</strong> via la holding (meilleure crédibilité financière)</li>
                  <li>4. <strong>En cas de cession</strong>, bénéficier du régime long terme des plus-values (quote-part 12%)</li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 font-light">
                  <strong>Cadre légal :</strong> Plus-values de cessions de titres (art. 219 I-a quinquies CGI). Quote-part de frais et charges de 12% imposable. Source : BOFiP-IS-BASE-20-20-30-10.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tableau comparatif */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12 text-center">
            Holding pure vs Holding animatrice à Toulouse
          </h2>

          <div className="bg-white border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-light text-slate-900">Critère</th>
                    <th className="px-6 py-4 text-left font-light text-slate-900">Holding Pure</th>
                    <th className="px-6 py-4 text-left font-light text-slate-900">Holding Animatrice</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-light text-slate-900">Activité principale</td>
                    <td className="px-6 py-4 font-light text-slate-600">Détention passive de titres</td>
                    <td className="px-6 py-4 font-light text-slate-600">Animation active du groupe</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-light text-slate-900">Gestion opérationnelle</td>
                    <td className="px-6 py-4 font-light text-slate-600">✗ Aucune</td>
                    <td className="px-6 py-4 font-light text-slate-600">✓ Contrôle et pilotage des filiales</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-light text-slate-900">Prestations de services</td>
                    <td className="px-6 py-4 font-light text-slate-600">✗ Interdites</td>
                    <td className="px-6 py-4 font-light text-slate-600">✓ Autorisées (management fees)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-light text-slate-900">Personnel</td>
                    <td className="px-6 py-4 font-light text-slate-600">Généralement aucun</td>
                    <td className="px-6 py-4 font-light text-slate-600">Souvent des salariés</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-light text-slate-900">Régime mère-fille</td>
                    <td className="px-6 py-4 font-light text-emerald-600">✓ Oui (95% exonération)</td>
                    <td className="px-6 py-4 font-light text-emerald-600">✓ Oui (95% exonération)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-light text-slate-900">Pacte Dutreil (75% abattement)</td>
                    <td className="px-6 py-4 font-light text-red-600">✗ Non éligible</td>
                    <td className="px-6 py-4 font-light text-emerald-600">✓ Oui si conditions respectées</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-light text-slate-900">Exonération IFI</td>
                    <td className="px-6 py-4 font-light text-slate-600">Limitée (biens pros uniquement)</td>
                    <td className="px-6 py-4 font-light text-emerald-600">✓ Totale possible</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-light text-slate-900">Complexité de gestion</td>
                    <td className="px-6 py-4 font-light text-slate-600">Faible</td>
                    <td className="px-6 py-4 font-light text-slate-600">Moyenne à élevée</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-light text-slate-900">Coûts annuels moyens</td>
                    <td className="px-6 py-4 font-light text-slate-600">1 500 - 2 500€</td>
                    <td className="px-6 py-4 font-light text-slate-600">3 000 - 8 000€+</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4 font-light text-slate-900">Idéale pour</td>
                    <td className="px-6 py-4 font-light text-slate-600">Investisseur, multi-sociétés, patrimoine</td>
                    <td className="px-6 py-4 font-light text-slate-600">Groupe industriel, transmission familiale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 p-6">
            <h3 className="text-lg font-light text-slate-900 mb-3">
              Pour les dirigeants toulousains
            </h3>
            <p className="text-sm text-slate-700 font-light leading-relaxed">
              <strong>Holding pure :</strong> Recommandée pour les investisseurs dans plusieurs start-ups biotech, ou les dirigeants détenant plusieurs PME aéronautiques sans besoin d'animation quotidienne.
              <br /><br />
              <strong>Holding animatrice :</strong> Privilégiée pour les groupes industriels toulousains souhaitant mutualiser les fonctions support (RH, compta, achats) entre filiales, ou pour bénéficier du Pacte Dutreil lors de la transmission.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages fiscaux */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12 text-center">
            Les avantages fiscaux d'une holding à Toulouse
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 p-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-light text-slate-900 mb-4">Régime mère-fille</h3>
              <p className="text-slate-700 font-light mb-4 text-sm leading-relaxed">
                <strong>95% des dividendes remontés sont exonérés d'IS.</strong> Seule une quote-part de 5% est imposée au taux normal de l'impôt sur les sociétés (25%).
              </p>
              <div className="bg-white border border-slate-200 p-4">
                <p className="text-xs text-slate-600 font-light mb-2">Exemple chiffré :</p>
                <ul className="space-y-1 text-xs text-slate-700 font-light">
                  <li>• Dividendes : 500 000€</li>
                  <li>• Quote-part imposable : 25 000€</li>
                  <li>• IS à payer : 6 250€</li>
                  <li className="text-emerald-700 font-medium">• <strong>Vs 150 000€ en direct (PFU 30%)</strong></li>
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500 font-light">
                  Art. 145 et 216 du CGI. Conditions : détention ≥5%, conservation ≥2 ans.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-light text-slate-900 mb-4">Plus-values de cession</h3>
              <p className="text-slate-700 font-light mb-4 text-sm leading-relaxed">
                <strong>Quasi-exonération des plus-values</strong> lors de la cession de filiales détenues depuis plus de 2 ans. Quote-part imposable : seulement 12%.
              </p>
              <div className="bg-white border border-slate-200 p-4">
                <p className="text-xs text-slate-600 font-light mb-2">Exemple chiffré :</p>
                <ul className="space-y-1 text-xs text-slate-700 font-light">
                  <li>• Cession filiale : 5M€</li>
                  <li>• Plus-value : 4M€</li>
                  <li>• Quote-part imposable : 480K€</li>
                  <li>• IS à payer : 120K€</li>
                  <li className="text-emerald-700 font-medium">• <strong>Vs 1,2M€ en direct (PFU 30%)</strong></li>
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500 font-light">
                  Art. 219 I-a quinquies du CGI. Condition : titres détenus ≥2 ans.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Building2 className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-light text-slate-900 mb-4">Intégration fiscale</h3>
              <p className="text-slate-700 font-light mb-4 text-sm leading-relaxed">
                <strong>Compensation des résultats</strong> entre la holding et ses filiales (≥95%). Permet de neutraliser les déficits d'une filiale par les bénéfices d'une autre.
              </p>
              <div className="bg-white border border-slate-200 p-4">
                <p className="text-xs text-slate-600 font-light mb-2">Exemple :</p>
                <ul className="space-y-1 text-xs text-slate-700 font-light">
                  <li>• Filiale A : +800K€</li>
                  <li>• Filiale B : -300K€</li>
                  <li>• Résultat groupe : 500K€</li>
                  <li>• IS groupe : 125K€</li>
                  <li className="text-emerald-700 font-medium">• <strong>Vs 200K€ sans intégration</strong></li>
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500 font-light">
                  Art. 223 A et suivants du CGI. Option pour 5 ans renouvelable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Toulouse */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12 text-center">
            Questions fréquentes - Holding à Toulouse
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Pourquoi créer une holding est-il particulièrement intéressant pour une entreprise toulousaine ?",
                r: "Toulouse concentre un tissu industriel unique en France (aéronautique, spatial, biotech, IA) avec 63% des emplois dans l'industrie. Créer une holding permet de structurer des participations dans plusieurs sociétés de ces secteurs, de bénéficier du régime mère-fille (95% des dividendes exonérés), et de faciliter les levées de fonds dans des filières fortement capitalistiques comme l'aéronautique ou les biotechnologies."
              },
              {
                q: "Combien coûte la création d'une holding à Toulouse ?",
                r: "Pour une holding pure : entre 1 500€ et 3 000€ HT (rédaction des statuts, dépôt au greffe, annonce légale, immatriculation). Pour une holding animatrice avec structuration patrimoniale complexe : entre 5 000€ et 12 000€ HT. Les coûts annuels de gestion sont de 1 500-2 500€/an pour une holding pure, et 3 000-8 000€/an pour une holding animatrice. Le retour sur investissement fiscal est généralement immédiat dès la première année."
              },
              {
                q: "Holding pure ou holding animatrice pour mon entreprise aéronautique ?",
                r: "Si vous détenez plusieurs sociétés sans volonté d'intervention opérationnelle quotidienne : privilégiez la holding pure (simplicité, coûts réduits, régime mère-fille). Si vous souhaitez mutualiser des fonctions support entre filiales (achats, RH, comptabilité) ou préparer une transmission familiale avec le Pacte Dutreil : optez pour la holding animatrice. Dans l'aéronautique toulousain, la holding animatrice est souvent recommandée pour coordonner les relations avec les donneurs d'ordres (Airbus, Safran)."
              },
              {
                q: "Peut-on utiliser une holding pour investir dans plusieurs start-ups toulousaines ?",
                r: "Oui, c'est une excellente stratégie pour les investisseurs. Créer une holding permet de : (1) Bénéficier du régime mère-fille sur les dividendes remontés par les start-ups rentables. (2) Bénéficier du régime des plus-values long terme (quote-part 12%) lors de la cession de participations détenues >2 ans. (3) Centraliser la trésorerie et réinvestir les liquidités sans fiscalité intermédiaire. (4) Diversifier les risques entre plusieurs participations dans les secteurs biotech, IA ou cybersécurité toulousains."
              },
              {
                q: "Comment fonctionne le régime mère-fille pour une holding toulousaine ?",
                r: "Le régime mère-fille (art. 145 et 216 du CGI) permet à une holding de recevoir les dividendes de ses filiales avec 95% d'exonération d'impôt sur les sociétés. Seule une quote-part de 5% est imposée au taux normal de l'IS (25%). Conditions : détenir au moins 5% du capital de la filiale, et conserver les titres au moins 2 ans. Exemple : sur 500K€ de dividendes, vous ne payez que 6 250€ d'IS au lieu de 150K€ en direct (flat tax 30%)."
              },
              {
                q: "Quelle est la fiscalité en cas de cession d'une filiale via une holding ?",
                r: "Lorsqu'une holding cède les titres d'une filiale détenue depuis plus de 2 ans, elle bénéficie du régime des plus-values long terme : seule une quote-part de 12% de la plus-value est imposable à l'IS (soit 3% d'imposition effective). Exemple : pour une cession à 5M€ avec 4M€ de plus-value, l'impôt est de 120K€ au lieu de 1,2M€ en cas de cession directe par une personne physique (PFU 30%). C'est un avantage majeur pour les dirigeants toulousains souhaitant revendre leur entreprise."
              },
              {
                q: "Peut-on transmettre une holding avec le Pacte Dutreil ?",
                r: "Oui, mais uniquement pour une holding animatrice (pas pour une holding pure). Le Pacte Dutreil permet une exonération de 75% de la valeur transmise lors d'une donation ou succession. Conditions : (1) la holding doit avoir une activité d'animation de groupe (contrôle, direction, services aux filiales), (2) engagement collectif de conservation des titres pendant 2 ans, (3) engagement individuel de conservation de 4 ans supplémentaires, (4) poursuite de l'activité professionnelle pendant 3 ans (pour au moins un des héritiers). C'est un outil puissant pour transmettre une entreprise familiale toulousaine."
              },
              {
                q: "Intervention sur place à Toulouse ou uniquement en visio ?",
                r: "Nous intervenons sur place à Toulouse et dans toute l'Occitanie (Montpellier, Perpignan, etc.) ou en visio selon votre préférence. Premier rendez-vous gratuit de 30 minutes pour analyser votre situation et vous proposer la structure holding optimale. Contactez-nous au 06 07 96 31 35 ou par email : florent@occitea-ip.fr."
              }
            ].map((faq, index) => (
              <details key={index} className="bg-white border border-slate-200 p-6 group">
                <summary className="font-light text-lg text-slate-900 cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-slate-700 font-light leading-relaxed">
                  {faq.r}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Prêt à créer votre holding à Toulouse ?
          </h2>
          <p className="text-xl text-slate-300 font-light mb-12 leading-relaxed">
            Expertise holding pour dirigeants d'entreprises aéronautiques, biotech et IA à Toulouse
            <br />
            <span className="text-base">Premier rendez-vous gratuit de 30 minutes - Intervention sur place ou en visio</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0607963135" 
              className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-base font-light transition-all hover:shadow-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              06 07 96 31 35
            </a>
            <a 
              href="mailto:florent@occitea-ip.fr" 
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 text-base font-light backdrop-blur-sm transition-all"
            >
              <Mail className="w-5 h-5 mr-2" />
              florent@occitea-ip.fr
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-slate-400 font-light mb-4">Vous souhaitez en savoir plus sur les holdings ?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/creer-holding" 
                className="text-amber-400 hover:text-amber-300 text-sm font-light flex items-center transition-colors"
              >
                Créer sa holding <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link 
                href="/creer-holding/holding-pure" 
                className="text-amber-400 hover:text-amber-300 text-sm font-light flex items-center transition-colors"
              >
                Holding pure <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link 
                href="/gerer-holding" 
                className="text-amber-400 hover:text-amber-300 text-sm font-light flex items-center transition-colors"
              >
                Gérer sa holding <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer currentPage="villes" />
    </div>
  )
}

// Métadonnées SEO pour Next.js
export const metadata = {
  title: 'Création de Holding à Toulouse | Expert Aéronautique & Biotech',
  description: 'Expert holding à Toulouse. Structuration holdings pour dirigeants PME aéronautique, biotech et IA. Régime mère-fille, optimisation fiscale, transmission. 06 07 96 31 35',
  keywords: [
    'holding toulouse',
    'création holding toulouse',
    'expert holding toulouse',
    'holding aéronautique toulouse',
    'holding biotech toulouse',
    'régime mère-fille',
    'optimisation fiscale toulouse',
    'transmission entreprise toulouse',
    'holding pure toulouse',
    'holding animatrice toulouse'
  ],
  openGraph: {
    title: 'Création de Holding à Toulouse | Expert Aéronautique & Biotech',
    description: 'Structuration holdings pour dirigeants toulousains. Aéronautique, Biotech, IA. Régime mère-fille, optimisation fiscale.',
    url: 'https://expertholding.fr/holding-toulouse',
    type: 'website',
  },
}