import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ChevronRight, CheckCircle, TrendingUp, Building2, Sparkles, Globe, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

export default function HoldingParisPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="villes" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=80')] bg-cover bg-center opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={16} className="text-slate-400" />
            <span className="text-amber-400">Holding Paris</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="text-amber-400" size={32} />
              <span className="text-amber-400 font-light text-lg">Île-de-France</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
              Création de Holding à Paris
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 leading-relaxed">
              Expert en structuration de holdings pour dirigeants et investisseurs parisiens. Accompagnement personnalisé des groupes multisectoriels, fintechs, luxe et industrie.
            </p>
            
            {/* Stats Paris */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">31%</div>
                <div className="text-sm text-slate-300 font-light">du PIB français</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">4,9%</div>
                <div className="text-sm text-slate-300 font-light">du PIB européen</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">460 000</div>
                <div className="text-sm text-slate-300 font-light">Emplois industriels IDF</div>
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

      {/* Pourquoi Paris */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
              Pourquoi créer une holding à Paris ?
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Paris est <strong className="text-slate-900">la première puissance économique régionale d'Europe</strong>, représentant 31% du PIB français et près de 4,9% du PIB de l'Union européenne. Cette concentration unique de richesses et d'opportunités en fait la ville privilégiée pour la création de holdings, en particulier pour les groupes multisectoriels, les investisseurs et les entrepreneurs de la tech, du luxe et de l'industrie.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white border border-slate-200 p-8">
              <h3 className="text-xl font-light text-slate-900 mb-6 flex items-center">
                <Building2 className="w-6 h-6 text-amber-600 mr-3" />
                Écosystème économique mondial
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Matériel de transport, aéronautique et spatial :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Sièges de Thales, Airbus Group, Arianespace et sites industriels majeurs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Automobile :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">PSA et Renault avec usines stratégiques et centres de R&D franciliens</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Energie :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Total, EDF, Engie avec sièges et infrastructures industrielles pour la transition énergétique</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Luxe, Finance, IA et Biotech :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Leaders mondiaux (LVMH, BNP Paribas, L'Oréal) et Paris-Saclay (pôle mondial IA/biotech/nanotech)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 p-8">
              <h3 className="text-xl font-light text-slate-900 mb-6 flex items-center">
                <Globe className="w-6 h-6 text-amber-600 mr-3" />
                Avantages stratégiques d'une holding parisienne
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">1</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Gestion stratégique de groupes multisectoriels</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Regrouper et piloter des participations dans l'industrie, la fintech, l'IA, l'énergie ou le luxe</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">2</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Optimisation fiscale puissante</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Régime mère-fille (95% exonération), intégration fiscale, Pacte Dutreil pour transmission</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">3</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Attractivité internationale et financements</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Cœur des flux financiers internationaux : levées de fonds facilitées, accès aux banques d'investissement</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">4</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Protection patrimoniale</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Séparer patrimoine professionnel et privé, essentiel dans une ville à forte densité de capital</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">5</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Effet de levier sur l'innovation</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Proximité avec Paris-Saclay et clusters numériques pour dynamiser la croissance externe</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cas pratiques Paris */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4 text-center">
            Cas pratiques : Holdings parisiennes
          </h2>
          <p className="text-lg text-slate-600 font-light text-center mb-12 max-w-3xl mx-auto">
            Exemples concrets d'optimisation patrimoniale pour dirigeants et investisseurs parisiens
          </p>

          <div className="space-y-8">
            {/* Cas 1 : Groupe multisectoriel */}
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 lg:p-12">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Building2 className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-slate-900 mb-2">
                    Dirigeant de groupe multisectoriel
                  </h3>
                  <p className="text-slate-600 font-light">Chef d'entreprise 58 ans, détient 3 sociétés (énergie, conseil, immobilier)</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white border border-slate-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Sans holding</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• Société A (énergie) : 1M€ dividendes</li>
                    <li>• Société B (conseil) : 600K€ dividendes</li>
                    <li>• Société C (immobilier) : 400K€ dividendes</li>
                    <li>• <strong>Total dividendes : 2M€/an</strong></li>
                    <li>• Flat tax 30% : <strong className="text-red-600">600K€/an</strong></li>
                    <li>• Net après impôt : 1,4M€</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Avec holding + régime mère-fille</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• Holding détient 100% des 3 sociétés</li>
                    <li>• Dividendes remontés : 2M€</li>
                    <li>• Quote-part 5% imposable : 100K€</li>
                    <li>• IS sur 100K€ (25%) : <strong className="text-emerald-600">25K€/an</strong></li>
                    <li className="text-emerald-700 font-medium">• <strong>Économie : 575K€/an</strong></li>
                    <li>• Trésorerie holding : 1,975M€ disponible</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                <h4 className="text-lg font-light text-slate-900 mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 text-amber-600 mr-2" />
                  Bénéfices complémentaires pour ce dirigeant
                </h4>
                <ul className="space-y-2 text-sm text-slate-700 font-light">
                  <li>✓ <strong>Réinvestissement optimisé :</strong> Utiliser les 1,975M€ pour racheter une 4ème société ou investir dans une start-up parisienne (IA, fintech)</li>
                  <li>✓ <strong>Intégration fiscale :</strong> Compenser les déficits d'une filiale par les bénéfices des autres (économie IS supplémentaire)</li>
                  <li>✓ <strong>Transmission facilitée :</strong> Donation progressive des parts de holding aux enfants avec abattements fiscaux (100K€ par parent/enfant tous les 15 ans)</li>
                  <li>✓ <strong>Protection patrimoniale :</strong> Séparation juridique des 3 activités, limitation des risques financiers</li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 font-light">
                  <strong>Cadre légal :</strong> Régime mère-fille (art. 145 et 216 CGI). Conditions : détention {`>`}5%, conservation {`>`}2 ans. Intégration fiscale (art. 223 A CGI). Source : BOFiP-IS-BASE-10-10-10-10 et BOFiP-IS-RICI-10-10.
                </p>
              </div>
            </div>

            {/* Cas 2 : Investisseur luxe/fintech */}
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 lg:p-12">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Sparkles className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-slate-900 mb-2">
                    Investisseur dans le luxe et la fintech
                  </h3>
                  <p className="text-slate-600 font-light">Entrepreneur 48 ans, participations dans 5 start-ups parisiennes (luxe, fintech, IA)</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white border border-slate-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Détention directe</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• 5 participations (10-25% chacune)</li>
                    <li>• Valorisation totale : 15M€</li>
                    <li>• En cas de cession d'une participation :</li>
                    <li>• Exemple : cession 3M€, PV 2,5M€</li>
                    <li>• PFU 30% sur PV : <strong className="text-red-600">750K€ d'impôt</strong></li>
                    <li>• Réinvestissement bloqué par fiscalité</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Via holding d'investissement</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• Holding détient les 5 participations</li>
                    <li>• Cession via holding (détention {`>`}2 ans)</li>
                    <li>• Quote-part 12% imposable à l'IS</li>
                    <li>• Exemple : cession 3M€, PV 2,5M€</li>
                    <li>• Impôt : <strong className="text-emerald-600">75K€ (vs 750K€)</strong></li>
                    <li className="text-emerald-700 font-medium">• <strong>Économie : 675K€</strong></li>
                    <li>• Réinvestissement immédiat dans nouvelle start-up</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h4 className="text-lg font-light text-slate-900 mb-3">Stratégie recommandée pour investisseurs parisiens</h4>
                <ul className="space-y-2 text-sm text-slate-700 font-light">
                  <li>1. <strong>Créer une holding d'investissement</strong> pour acquérir et gérer le portefeuille de participations</li>
                  <li>2. <strong>Bénéficier du régime long terme</strong> sur plus-values de cessions (quote-part 12% vs PFU 30%)</li>
                  <li>3. <strong>Recevoir les dividendes</strong> des participations avec régime mère-fille (95% exonération)</li>
                  <li>4. <strong>Réinvestir la trésorerie</strong> dans de nouvelles start-ups sans friction fiscale</li>
                  <li>5. <strong>Structurer la transmission</strong> du portefeuille aux héritiers avec Pacte Dutreil (holding animatrice)</li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 font-light">
                  <strong>Cadre légal :</strong> Plus-values de cessions de titres (art. 219 I-a quinquies CGI). Quote-part de frais et charges de 12% imposable. Apport-cession (art. 150-0 B ter CGI pour report d'imposition). Source : BOFiP-IS-BASE-20-20-30-10.
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
            Holding pure vs Holding animatrice à Paris
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
                    <td className="px-6 py-4 font-light text-slate-600">Souvent des salariés (DAF, DRH, etc.)</td>
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
                    <td className="px-6 py-4 font-light text-slate-600">Investisseur multi-participations, patrimoine</td>
                    <td className="px-6 py-4 font-light text-slate-600">Groupe industriel, transmission familiale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 p-6">
            <h3 className="text-lg font-light text-slate-900 mb-3">
              Pour les dirigeants et investisseurs parisiens
            </h3>
            <p className="text-sm text-slate-700 font-light leading-relaxed">
              <strong>Holding pure :</strong> Recommandée pour les investisseurs en private equity, les business angels avec portefeuille de start-ups (fintech, IA, luxe), ou les dirigeants détenant plusieurs sociétés sans besoin d'animation quotidienne.
              <br /><br />
              <strong>Holding animatrice :</strong> Privilégiée pour les groupes multisectoriels parisiens (énergie, industrie, conseil) souhaitant mutualiser les fonctions support (RH, compta, achats, stratégie), ou pour bénéficier du Pacte Dutreil lors de la transmission familiale.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages fiscaux */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12 text-center">
            Les avantages fiscaux d'une holding à Paris
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
                <p className="text-xs text-slate-600 font-light mb-2">Exemple chiffré (groupe parisien) :</p>
                <ul className="space-y-1 text-xs text-slate-700 font-light">
                  <li>• Dividendes remontés : 2M€</li>
                  <li>• Quote-part imposable : 100K€</li>
                  <li>• IS à payer : 25K€</li>
                  <li className="text-emerald-700 font-medium">• <strong>Vs 600K€ en direct (PFU 30%)</strong></li>
                  <li className="text-emerald-700 font-medium">• <strong>Économie : 575K€/an</strong></li>
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
                <strong>Quasi-exonération des plus-values</strong> lors de la cession de participations détenues depuis plus de 2 ans. Quote-part imposable : seulement 12%.
              </p>
              <div className="bg-white border border-slate-200 p-4">
                <p className="text-xs text-slate-600 font-light mb-2">Exemple chiffré (cession start-up) :</p>
                <ul className="space-y-1 text-xs text-slate-700 font-light">
                  <li>• Cession participation : 8M€</li>
                  <li>• Plus-value : 7M€</li>
                  <li>• Quote-part imposable : 840K€</li>
                  <li>• IS à payer : 210K€</li>
                  <li className="text-emerald-700 font-medium">• <strong>Vs 2,1M€ en direct (PFU 30%)</strong></li>
                  <li className="text-emerald-700 font-medium">• <strong>Économie : 1,89M€</strong></li>
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
                <p className="text-xs text-slate-600 font-light mb-2">Exemple (groupe parisien) :</p>
                <ul className="space-y-1 text-xs text-slate-700 font-light">
                  <li>• Filiale A (énergie) : +1,5M€</li>
                  <li>• Filiale B (start-up IA) : -600K€</li>
                  <li>• Résultat groupe : 900K€</li>
                  <li>• IS groupe : 225K€</li>
                  <li className="text-emerald-700 font-medium">• <strong>Vs 375K€ sans intégration</strong></li>
                  <li className="text-emerald-700 font-medium">• <strong>Économie : 150K€/an</strong></li>
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

      {/* FAQ Paris */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12 text-center">
            Questions fréquentes - Holding à Paris
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Pourquoi créer une holding est-il particulièrement intéressant pour une entreprise parisienne ?",
                r: "Paris concentre 31% du PIB français et abrite les sièges des plus grands groupes européens (LVMH, Total, BNP Paribas, Airbus). Créer une holding permet de structurer des participations dans plusieurs sociétés (industrie, luxe, fintech, IA), de bénéficier du régime mère-fille (95% des dividendes exonérés), et de faciliter l'accès aux financements dans un écosystème où circulent les plus importants flux de capitaux d'Europe."
              },
              {
                q: "Combien coûte la création d'une holding à Paris ?",
                r: "Pour une holding pure : entre 1 500€ et 3 500€ HT (rédaction des statuts, dépôt au greffe, annonce légale, immatriculation). Pour une holding animatrice avec structuration patrimoniale complexe et multi-filiales : entre 6 000€ et 15 000€ HT. Les coûts annuels de gestion sont de 1 500-2 500€/an pour une holding pure, et 3 000-8 000€/an pour une holding animatrice. Le retour sur investissement fiscal est généralement immédiat dès la première année, avec des économies pouvant atteindre plusieurs centaines de milliers d'euros."
              },
              {
                q: "Holding pure ou holding animatrice pour mon groupe parisien ?",
                r: "Si vous détenez plusieurs participations sans volonté d'intervention opérationnelle quotidienne (investisseur, business angel, multi-sociétés) : privilégiez la holding pure (simplicité, coûts réduits, régime mère-fille). Si vous souhaitez mutualiser des fonctions support entre filiales (DAF, DRH, achats, stratégie, IT) ou préparer une transmission familiale avec le Pacte Dutreil : optez pour la holding animatrice. Pour les groupes parisiens multisectoriels, la holding animatrice est souvent recommandée pour optimiser la coordination entre filiales."
              },
              {
                q: "Peut-on utiliser une holding pour investir dans plusieurs start-ups parisiennes ?",
                r: "Oui, c'est la structure idéale pour les investisseurs parisiens (business angels, family offices). Créer une holding d'investissement permet de : (1) Bénéficier du régime mère-fille sur les dividendes remontés par les start-ups rentables. (2) Bénéficier du régime des plus-values long terme (quote-part 12%) lors de la cession de participations détenues >2 ans. (3) Centraliser la trésorerie et réinvestir les liquidités sans fiscalité intermédiaire. (4) Diversifier les risques entre plusieurs participations dans les secteurs fintech, IA, biotech, luxe tech."
              },
              {
                q: "Comment fonctionne le régime mère-fille pour une holding parisienne ?",
                r: "Le régime mère-fille (art. 145 et 216 du CGI) permet à une holding de recevoir les dividendes de ses filiales avec 95% d'exonération d'impôt sur les sociétés. Seule une quote-part de 5% est imposée au taux normal de l'IS (25%). Conditions : détenir au moins 5% du capital de la filiale, et conserver les titres au moins 2 ans. Exemple concret pour un groupe parisien : sur 2M€ de dividendes remontés, vous ne payez que 25K€ d'IS au lieu de 600K€ en direct (flat tax 30%). Économie : 575K€/an."
              },
              {
                q: "Quelle est la fiscalité en cas de cession d'une filiale ou d'une participation via une holding ?",
                r: "Lorsqu'une holding cède les titres d'une filiale ou participation détenue depuis plus de 2 ans, elle bénéficie du régime des plus-values long terme : seule une quote-part de 12% de la plus-value est imposable à l'IS (soit 3% d'imposition effective). Exemple : pour une cession à 8M€ avec 7M€ de plus-value, l'impôt est de 210K€ au lieu de 2,1M€ en cas de cession directe par une personne physique (PFU 30%). Économie : 1,89M€. C'est un avantage majeur pour les investisseurs parisiens souhaitant revendre leurs participations."
              },
              {
                q: "Peut-on transmettre une holding parisienne avec le Pacte Dutreil ?",
                r: "Oui, mais uniquement pour une holding animatrice (pas pour une holding pure). Le Pacte Dutreil permet une exonération de 75% de la valeur transmise lors d'une donation ou succession. Conditions : (1) la holding doit avoir une activité d'animation de groupe (contrôle, direction, prestations de services aux filiales), (2) engagement collectif de conservation des titres pendant 2 ans, (3) engagement individuel de conservation de 4 ans supplémentaires, (4) poursuite de l'activité professionnelle pendant 3 ans (pour au moins un des héritiers). C'est un outil puissant pour transmettre un patrimoine professionnel important à Paris sans droits de succession élevés."
              },
              {
                q: "Intervention sur place à Paris ou uniquement en visio ?",
                r: "Nous intervenons sur place à Paris et en Île-de-France (bureaux à La Défense, Neuilly, ou votre siège) ou en visio selon votre préférence. Premier rendez-vous gratuit de 30 minutes pour analyser votre situation (groupe multisectoriel, portefeuille participations, transmission) et vous proposer la structure holding optimale. Contactez-nous au 06 07 96 31 35 ou par email : florent@occitea-ip.fr."
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
            Prêt à créer votre holding à Paris ?
          </h2>
          <p className="text-xl text-slate-300 font-light mb-12 leading-relaxed">
            Expertise holding pour dirigeants de groupes parisiens, investisseurs et entrepreneurs
            <br />
            <span className="text-base">Premier rendez-vous gratuit de 30 minutes - Intervention sur place à Paris ou en visio</span>
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
  title: 'Création de Holding à Paris | Expert Groupes & Investisseurs',
  description: 'Expert holding à Paris. Structuration holdings pour dirigeants de groupes, investisseurs, luxe, fintech et industrie. Régime mère-fille, optimisation fiscale. 06 07 96 31 35',
  keywords: [
    'holding paris',
    'création holding paris',
    'expert holding paris',
    'holding investissement paris',
    'holding luxe paris',
    'holding fintech paris',
    'régime mère-fille',
    'optimisation fiscale paris',
    'transmission entreprise paris',
    'holding pure paris',
    'holding animatrice paris',
    'business angel paris',
    'investisseur paris'
  ],
  openGraph: {
    title: 'Création de Holding à Paris | Expert Groupes & Investisseurs',
    description: 'Structuration holdings pour dirigeants parisiens. Groupes multisectoriels, luxe, fintech, IA. Régime mère-fille, optimisation fiscale.',
    url: 'https://expertholding.fr/holding-paris',
    type: 'website',
  },
}