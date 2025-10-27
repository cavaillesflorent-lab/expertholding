import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ChevronRight, CheckCircle, TrendingUp, Building2, Ship, Anchor, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

export default function HoldingMarseillePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="villes" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80')] bg-cover bg-center opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={16} className="text-slate-400" />
            <span className="text-amber-400">Holding Marseille</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="text-amber-400" size={32} />
              <span className="text-amber-400 font-light text-lg">Provence-Alpes-Côte d'Azur</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
              Création de Holding à Marseille
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 leading-relaxed">
              Expert en structuration de holdings pour dirigeants d'entreprises maritimes, portuaires, logistiques et transition énergétique à Marseille. Accompagnement personnalisé des PME de la zone industrialo-portuaire.
            </p>
            
            {/* Stats Marseille */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">90M</div>
                <div className="text-sm text-slate-300 font-light">Tonnes/an Port</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">N°1</div>
                <div className="text-sm text-slate-300 font-light">Port de France</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">+20Md€</div>
                <div className="text-sm text-slate-300 font-light">Investissements Fos</div>
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

      {/* Pourquoi Marseille */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
              Pourquoi créer une holding à Marseille ?
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Marseille est <strong className="text-slate-900">la première métropole industrielle méditerranéenne</strong>, portée par le premier port de France (Marseille-Fos, plus de 90 millions de tonnes/an), des investissements massifs dans la transition énergétique (plus de 20 milliards d'euros) et un écosystème diversifié. Cette position unique en fait une ville stratégique pour la création de holdings, notamment pour les entreprises portuaires, maritimes, logistiques et de la transition énergétique.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white border border-slate-200 p-8">
              <h3 className="text-xl font-light text-slate-900 mb-6 flex items-center">
                <Ship className="w-6 h-6 text-amber-600 mr-3" />
                Écosystème maritime et industriel unique
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Secteur portuaire et maritime :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Premier port de France (Marseille-Fos), CMA CGM (leader mondial transport maritime), logistique portuaire, réparation navale, import-export</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Zone industrialo-portuaire Fos-sur-Mer :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Pôle stratégique engagé dans la décarbonation, +20Md€ d'investissements sur 35 projets industriels (sidérurgie, chimie)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Energie et transition écologique :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Investissements massifs hydrogène, éolien, photovoltaïque, géothermie pour zone industrielle bas carbone</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Technologies, santé et tourisme :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Synergie universités-entreprises, biotech, tourisme international et économie créative</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 p-8">
              <h3 className="text-xl font-light text-slate-900 mb-6 flex items-center">
                <Anchor className="w-6 h-6 text-amber-600 mr-3" />
                Avantages stratégiques d'une holding marseillaise
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">1</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Contrôle multisite et synergies</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Optimiser la gestion de sociétés dans logistique, énergie, biotech, import-export avec influence stratégique renforcée</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">2</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Optimisation fiscale</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Dispositifs régionaux + régime mère-fille pour réduire fiscalité sur dividendes et bénéfices</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">3</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Financement et développement</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Structurer financements pour projets industriels (transition énergétique, investissements zone portuaire)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">4</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Transmission et protection patrimoniale</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Simplifier succession familiale et protéger actifs face à volatilité des secteurs porteurs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">5</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Effet de levier sur l'innovation</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Proximité clusters technologiques et santé, soutien transformation numérique et innovation industrielle</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cas pratiques Marseille */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4 text-center">
            Cas pratiques : Holdings marseillaises
          </h2>
          <p className="text-lg text-slate-600 font-light text-center mb-12 max-w-3xl mx-auto">
            Exemples concrets d'optimisation patrimoniale pour dirigeants d'entreprises maritimes, portuaires et transition énergétique à Marseille
          </p>

          <div className="space-y-8">
            {/* Cas 1 : PME logistique portuaire */}
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 lg:p-12">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Ship className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-slate-900 mb-2">
                    PME logistique portuaire - Zone Fos
                  </h3>
                  <p className="text-slate-600 font-light">Dirigeant 56 ans, CA 15M€, spécialisé manutention et stockage portuaire</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white border border-slate-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Sans holding</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• CA : 15M€</li>
                    <li>• Bénéfice net : 1,8M€/an</li>
                    <li>• Dividendes versés : 1M€/an</li>
                    <li>• Flat tax 30% : <strong className="text-red-600">300K€/an</strong></li>
                    <li>• Net après impôt : 700K€</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Avec holding pure + régime mère-fille</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• Holding détient 100% de la PME</li>
                    <li>• Dividendes remontés : 1M€</li>
                    <li>• Quote-part 5% imposable : 50K€</li>
                    <li>• IS sur 50K€ (25%) : <strong className="text-emerald-600">12,5K€/an</strong></li>
                    <li className="text-emerald-700 font-medium">• <strong>Économie : 287,5K€/an</strong></li>
                    <li>• Trésorerie holding : 987,5K€ disponible</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                <h4 className="text-lg font-light text-slate-900 mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 text-amber-600 mr-2" />
                  Bénéfices complémentaires pour ce dirigeant
                </h4>
                <ul className="space-y-2 text-sm text-slate-700 font-light">
                  <li>✓ <strong>Réinvestissement optimisé :</strong> Utiliser les 987,5K€ pour racheter un concurrent dans la zone portuaire ou diversifier dans la transition énergétique</li>
                  <li>✓ <strong>Protection patrimoniale :</strong> Séparer l'outil de production (PME logistique) du patrimoine immobilier et financier (holding)</li>
                  <li>✓ <strong>Transmission facilitée :</strong> Donation progressive des parts de holding aux enfants avec abattements fiscaux renouvelables tous les 15 ans</li>
                  <li>✓ <strong>Accès aux financements :</strong> Solidité financière renforcée pour participer aux projets industriels de la zone Fos (20Md€)</li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 font-light">
                  <strong>Cadre légal :</strong> Régime mère-fille (art. 145 et 216 CGI). Conditions : détention {`>`}5%, conservation {`>`}2 ans. Source : BOFiP-IS-BASE-10-10-10-10.
                </p>
              </div>
            </div>

            {/* Cas 2 : Groupe transition énergétique */}
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 lg:p-12">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Building2 className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-slate-900 mb-2">
                    Groupe transition énergétique multi-filiales
                  </h3>
                  <p className="text-slate-600 font-light">Entrepreneur 49 ans, détient 2 sociétés (hydrogène + photovoltaïque)</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white border border-slate-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Sans holding</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• Société A (hydrogène) : 700K€ dividendes</li>
                    <li>• Société B (photovoltaïque) : 500K€ dividendes</li>
                    <li>• <strong>Total dividendes : 1,2M€/an</strong></li>
                    <li>• Flat tax 30% : <strong className="text-red-600">360K€/an</strong></li>
                    <li>• Net après impôt : 840K€</li>
                    <li>• Pas de compensation des résultats</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Avec holding + intégration fiscale</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• Holding détient 100% des 2 sociétés</li>
                    <li>• Dividendes remontés : 1,2M€</li>
                    <li>• Quote-part 5% imposable : 60K€</li>
                    <li>• IS sur 60K€ (25%) : <strong className="text-emerald-600">15K€/an</strong></li>
                    <li className="text-emerald-700 font-medium">• <strong>Économie dividendes : 345K€/an</strong></li>
                    <li>• + Intégration fiscale : compensation pertes/bénéfices</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h4 className="text-lg font-light text-slate-900 mb-3">Stratégie recommandée pour groupes marseillais</h4>
                <ul className="space-y-2 text-sm text-slate-700 font-light">
                  <li>1. <strong>Créer une holding animatrice</strong> pour piloter les 2 sociétés et mutualiser les fonctions support (achats, technique, commercial)</li>
                  <li>2. <strong>Opter pour l'intégration fiscale</strong> (art. 223 A CGI) pour compenser les résultats entre filiales (transition énergétique = investissements lourds)</li>
                  <li>3. <strong>Bénéficier du régime mère-fille</strong> sur les dividendes remontés (95% exonération)</li>
                  <li>4. <strong>Préparer la transmission</strong> avec le Pacte Dutreil (75% abattement sur droits de succession)</li>
                  <li>5. <strong>Accéder aux financements régionaux</strong> pour projets de transition énergétique (aides ADEME, Région PACA)</li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 font-light">
                  <strong>Cadre légal :</strong> Intégration fiscale (art. 223 A et suivants CGI). Option pour 5 ans renouvelable. Pacte Dutreil (art. 787 B CGI) pour holding animatrice. Source : BOFiP-IS-RICI-10-10 et BOFiP-ENR-DMTG-10-20-40.
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
            Holding pure vs Holding animatrice à Marseille
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
                    <td className="px-6 py-4 font-light text-slate-600">Souvent des salariés (DAF, commercial)</td>
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
                    <td className="px-6 py-4 font-light text-slate-600">Armateur, PME logistique, patrimoine</td>
                    <td className="px-6 py-4 font-light text-slate-600">Groupe portuaire, transmission familiale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 p-6">
            <h3 className="text-lg font-light text-slate-900 mb-3">
              Pour les dirigeants marseillais
            </h3>
            <p className="text-sm text-slate-700 font-light leading-relaxed">
              <strong>Holding pure :</strong> Recommandée pour les armateurs, entreprises logistiques portuaires, PME maritime sans besoin d'animation quotidienne.
              <br /><br />
              <strong>Holding animatrice :</strong> Privilégiée pour les groupes maritimes/portuaires (logistique, import-export, réparation navale) ou groupes transition énergétique (hydrogène, photovoltaïque) souhaitant mutualiser les fonctions support, ou pour bénéficier du Pacte Dutreil lors de la transmission familiale. Particulièrement adaptée aux entreprises de la zone industrialo-portuaire de Fos-sur-Mer.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages fiscaux */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12 text-center">
            Les avantages fiscaux d'une holding à Marseille
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
                <p className="text-xs text-slate-600 font-light mb-2">Exemple chiffré (PME logistique) :</p>
                <ul className="space-y-1 text-xs text-slate-700 font-light">
                  <li>• Dividendes remontés : 1M€</li>
                  <li>• Quote-part imposable : 50K€</li>
                  <li>• IS à payer : 12,5K€</li>
                  <li className="text-emerald-700 font-medium">• <strong>Vs 300K€ en direct (PFU 30%)</strong></li>
                  <li className="text-emerald-700 font-medium">• <strong>Économie : 287,5K€/an</strong></li>
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
                <p className="text-xs text-slate-600 font-light mb-2">Exemple chiffré (cession filiale) :</p>
                <ul className="space-y-1 text-xs text-slate-700 font-light">
                  <li>• Cession filiale maritime : 7M€</li>
                  <li>• Plus-value : 6M€</li>
                  <li>• Quote-part imposable : 720K€</li>
                  <li>• IS à payer : 180K€</li>
                  <li className="text-emerald-700 font-medium">• <strong>Vs 1,8M€ en direct (PFU 30%)</strong></li>
                  <li className="text-emerald-700 font-medium">• <strong>Économie : 1,62M€</strong></li>
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
                <p className="text-xs text-slate-600 font-light mb-2">Exemple (groupe énergie) :</p>
                <ul className="space-y-1 text-xs text-slate-700 font-light">
                  <li>• Filiale A (hydrogène) : +1,5M€</li>
                  <li>• Filiale B (photovoltaïque) : -400K€</li>
                  <li>• Résultat groupe : 1,1M€</li>
                  <li>• IS groupe : 275K€</li>
                  <li className="text-emerald-700 font-medium">• <strong>Vs 375K€ sans intégration</strong></li>
                  <li className="text-emerald-700 font-medium">• <strong>Économie : 100K€/an</strong></li>
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

      {/* FAQ Marseille */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12 text-center">
            Questions fréquentes - Holding à Marseille
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Pourquoi créer une holding est-il particulièrement intéressant pour une entreprise marseillaise ?",
                r: "Marseille concentre le premier port de France (Marseille-Fos, 90M tonnes/an), plus de 20Md€ d'investissements dans la zone industrialo-portuaire de Fos-sur-Mer, et un écosystème unique maritime/logistique/transition énergétique. Créer une holding permet de structurer des participations dans plusieurs sociétés de ces secteurs (logistique portuaire, import-export, hydrogène, photovoltaïque), de bénéficier du régime mère-fille (95% des dividendes exonérés), et de faciliter l'accès aux financements régionaux et projets industriels structurants."
              },
              {
                q: "Combien coûte la création d'une holding à Marseille ?",
                r: "Pour une holding pure : entre 1 500€ et 3 000€ HT (rédaction des statuts, dépôt au greffe, annonce légale, immatriculation). Pour une holding animatrice avec structuration patrimoniale complexe et multi-filiales : entre 5 000€ et 12 000€ HT. Les coûts annuels de gestion sont de 1 500-2 500€/an pour une holding pure, et 3 000-8 000€/an pour une holding animatrice. Le retour sur investissement fiscal est généralement immédiat dès la première année."
              },
              {
                q: "Holding pure ou holding animatrice pour mon entreprise maritime/portuaire ?",
                r: "Si vous détendez une seule entreprise (armateur, logistique portuaire, import-export) sans volonté d'intervention opérationnelle quotidienne : privilégiez la holding pure (simplicité, coûts réduits, régime mère-fille). Si vous détendez plusieurs sociétés et souhaitez mutualiser des fonctions support (achats, commercial, technique) ou préparer une transmission familiale avec le Pacte Dutreil : optez pour la holding animatrice. Pour les groupes portuaires/maritimes marseillais, la holding animatrice est souvent recommandée pour coordonner les activités et optimiser les synergies."
              },
              {
                q: "Peut-on utiliser une holding pour racheter une entreprise dans la zone portuaire de Marseille ?",
                r: "Oui, c'est une excellente stratégie. Créer une holding permet de : (1) Structurer l'opération de rachat avec effet de levier (LBO). (2) Bénéficier du régime mère-fille sur les dividendes remontés par la société acquise. (3) Optimiser la fiscalité lors de la revente future (quote-part 12%). (4) Séparer les risques entre l'activité opérationnelle et la dette d'acquisition. (5) Faciliter les financements bancaires grâce à une structure solide. Particulièrement pertinent pour racheter des concurrents dans la logistique portuaire ou diversifier vers la transition énergétique."
              },
              {
                q: "Comment fonctionne le régime mère-fille pour une holding marseillaise ?",
                r: "Le régime mère-fille (art. 145 et 216 du CGI) permet à une holding de recevoir les dividendes de ses filiales avec 95% d'exonération d'impôt sur les sociétés. Seule une quote-part de 5% est imposée au taux normal de l'IS (25%). Conditions : détenir au moins 5% du capital de la filiale, et conserver les titres au moins 2 ans. Exemple concret pour une PME logistique portuaire : sur 1M€ de dividendes remontés, vous ne payez que 12,5K€ d'IS au lieu de 300K€ en direct (flat tax 30%). Économie : 287,5K€/an."
              },
              {
                q: "Quelle est la fiscalité en cas de cession d'une filiale maritime via une holding ?",
                r: "Lorsqu'une holding cède les titres d'une filiale détenue depuis plus de 2 ans, elle bénéficie du régime des plus-values long terme : seule une quote-part de 12% de la plus-value est imposable à l'IS (soit 3% d'imposition effective). Exemple : pour une cession à 7M€ avec 6M€ de plus-value, l'impôt est de 180K€ au lieu de 1,8M€ en cas de cession directe par une personne physique (PFU 30%). Économie : 1,62M€. C'est un avantage majeur pour les dirigeants marseillais souhaitant revendre leur entreprise maritime ou portuaire."
              },
              {
                q: "Peut-on transmettre une holding marseillaise avec le Pacte Dutreil ?",
                r: "Oui, mais uniquement pour une holding animatrice (pas pour une holding pure). Le Pacte Dutreil permet une exonération de 75% de la valeur transmise lors d'une donation ou succession. Conditions : (1) la holding doit avoir une activité d'animation de groupe (contrôle, direction, prestations de services aux filiales), (2) engagement collectif de conservation des titres pendant 2 ans, (3) engagement individuel de conservation de 4 ans supplémentaires, (4) poursuite de l'activité professionnelle pendant 3 ans (pour au moins un des héritiers). C'est un outil puissant pour transmettre une entreprise familiale marseillaise dans le maritime ou la logistique."
              },
              {
                q: "Intervention sur place à Marseille ou uniquement en visio ?",
                r: "Nous intervenons sur place à Marseille et dans toute la région PACA (Aix-en-Provence, Toulon, Nice, etc.) ou en visio selon votre préférence. Premier rendez-vous gratuit de 30 minutes pour analyser votre situation et vous proposer la structure holding optimale. Contactez-nous au 06 07 96 31 35 ou par email : florent@occitea-ip.fr."
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
            Prêt à créer votre holding à Marseille ?
          </h2>
          <p className="text-xl text-slate-300 font-light mb-12 leading-relaxed">
            Expertise holding pour dirigeants d'entreprises maritimes, portuaires, logistiques et transition énergétique à Marseille
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
  title: 'Création de Holding à Marseille | Expert Maritime & Logistique',
  description: 'Expert holding à Marseille. Structuration holdings pour dirigeants PME maritimes, portuaires, logistiques et transition énergétique. Port Marseille-Fos, Zone Fos. 06 07 96 31 35',
  keywords: [
    'holding marseille',
    'création holding marseille',
    'expert holding marseille',
    'holding maritime marseille',
    'holding portuaire marseille',
    'holding logistique marseille',
    'port marseille fos',
    'zone industrialo-portuaire fos',
    'holding transition énergétique',
    'régime mère-fille',
    'optimisation fiscale marseille',
    'transmission entreprise marseille',
    'holding pure marseille',
    'holding animatrice marseille'
  ],
  openGraph: {
    title: 'Création de Holding à Marseille | Expert Maritime & Logistique',
    description: 'Structuration holdings pour dirigeants marseillais. Maritime, Portuaire, Logistique, Transition énergétique. Régime mère-fille, optimisation fiscale.',
    url: 'https://expertholding.fr/villes/Marseille',
    type: 'website',
  },
}