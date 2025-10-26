import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ChevronRight, CheckCircle, TrendingUp, Building2, Beaker, Factory, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

export default function HoldingLyonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="villes" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=1600&q=80')] bg-cover bg-center opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={16} className="text-slate-400" />
            <span className="text-amber-400">Holding Lyon</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="text-amber-400" size={32} />
              <span className="text-amber-400 font-light text-lg">Auvergne-Rhône-Alpes</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
              Création de Holding à Lyon
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 leading-relaxed">
              Expert en structuration de holdings pour dirigeants d'entreprises chimie, pharma, biotech et industrie à Lyon. Accompagnement personnalisé des PME de la Vallée de la Chimie et de Lyonbiopôle.
            </p>
            
            {/* Stats Lyon */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">77 000</div>
                <div className="text-sm text-slate-300 font-light">Emplois industriels</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">7 600</div>
                <div className="text-sm text-slate-300 font-light">Établissements</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">N°1</div>
                <div className="text-sm text-slate-300 font-light">Agglo industrielle FR</div>
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

      {/* Pourquoi Lyon */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
              Pourquoi créer une holding à Lyon ?
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Lyon est <strong className="text-slate-900">la première agglomération industrielle de France</strong>, avec plus de 77 000 emplois industriels et 7 600 établissements. L'industrie représente 13% de l'emploi local. Cette concentration unique dans la chimie, la pharma-biotech et la métallurgie en fait une ville stratégique pour la création de holdings, notamment pour les groupes industriels et les dirigeants de PME à forte intensité technologique.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white border border-slate-200 p-8">
              <h3 className="text-xl font-light text-slate-900 mb-6 flex items-center">
                <Beaker className="w-6 h-6 text-amber-600 mr-3" />
                Écosystème industriel unique
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Chimie - Vallée de la Chimie :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Premier pôle européen avec Arkema, Solvay, BASF et un réseau dense de PME spécialisées</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Pharma-biotech et santé :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Lyonbiopôle, Sanofi, Boehringer Ingelheim, bioMérieux - pôle mondial des sciences de la vie</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Métallurgie et équipements :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Plus de 13 000 emplois, tradition du travail des métaux et usines d'envergure</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Énergies renouvelables et textile :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Transition écologique, innovation textile, agroalimentaire, transports et numérique</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 p-8">
              <h3 className="text-xl font-light text-slate-900 mb-6 flex items-center">
                <Factory className="w-6 h-6 text-amber-600 mr-3" />
                Avantages stratégiques d'une holding lyonnaise
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">1</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Centralisation et gouvernance</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Uniformiser les décisions et coordonner les filiales dans un environnement industriel diversifié</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">2</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Protection patrimoniale</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Isoler les actifs et les risques contre les aléas sectoriels dans une région fortement capitalisée</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">3</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Transmission facilitée</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Regroupement des participations pour simplifier la succession avec le Pacte Dutreil</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">4</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Optimisation fiscale</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Régime mère-fille (95% exonération) et intégration fiscale pour compenser pertes/bénéfices</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">5</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Flexibilité d'investissement</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Stratégies multi-filiales avec dispositifs locaux d'accompagnement et fonds industriels</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cas pratiques Lyon */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4 text-center">
            Cas pratiques : Holdings lyonnaises
          </h2>
          <p className="text-lg text-slate-600 font-light text-center mb-12 max-w-3xl mx-auto">
            Exemples concrets d'optimisation patrimoniale pour dirigeants d'entreprises chimie, pharma et industrie à Lyon
          </p>

          <div className="space-y-8">
            {/* Cas 1 : PME chimie Vallée de la Chimie */}
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 lg:p-12">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Beaker className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-slate-900 mb-2">
                    PME chimie - Vallée de la Chimie
                  </h3>
                  <p className="text-slate-600 font-light">Dirigeant 55 ans, CA 18M€, spécialisé chimie fine et additifs</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white border border-slate-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Sans holding</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• CA : 18M€</li>
                    <li>• Bénéfice net : 2,2M€/an</li>
                    <li>• Dividendes versés : 1,2M€/an</li>
                    <li>• Flat tax 30% : <strong className="text-red-600">360K€/an</strong></li>
                    <li>• Net après impôt : 840K€</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Avec holding pure + régime mère-fille</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• Holding détient 100% de la PME</li>
                    <li>• Dividendes remontés : 1,2M€</li>
                    <li>• Quote-part 5% imposable : 60K€</li>
                    <li>• IS sur 60K€ (25%) : <strong className="text-emerald-600">15K€/an</strong></li>
                    <li className="text-emerald-700 font-medium">• <strong>Économie : 345K€/an</strong></li>
                    <li>• Trésorerie holding : 1,185M€ disponible</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                <h4 className="text-lg font-light text-slate-900 mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 text-amber-600 mr-2" />
                  Bénéfices complémentaires pour ce dirigeant
                </h4>
                <ul className="space-y-2 text-sm text-slate-700 font-light">
                  <li>✓ <strong>Réinvestissement optimisé :</strong> Utiliser les 1,185M€ pour racheter un concurrent dans la Vallée de la Chimie ou diversifier dans la pharma lyonnaise</li>
                  <li>✓ <strong>Protection patrimoniale :</strong> Séparer l'outil de production (PME chimie) du patrimoine immobilier et financier (holding)</li>
                  <li>✓ <strong>Transmission facilitée :</strong> Donation progressive des parts de holding aux enfants avec abattements fiscaux renouvelables tous les 15 ans</li>
                  <li>✓ <strong>Accès aux fonds industriels :</strong> Solidité financière renforcée pour accéder aux dispositifs d'accompagnement régionaux</li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 font-light">
                  <strong>Cadre légal :</strong> Régime mère-fille (art. 145 et 216 CGI). Conditions : détention {`>`}5%, conservation {`>`}2 ans. Source : BOFiP-IS-BASE-10-10-10-10.
                </p>
              </div>
            </div>

            {/* Cas 2 : Groupe pharma-biotech */}
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 lg:p-12">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Building2 className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-slate-900 mb-2">
                    Groupe pharma-biotech multi-filiales
                  </h3>
                  <p className="text-slate-600 font-light">Dirigeant 50 ans, détient 2 sociétés (biotech + labo analyses)</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white border border-slate-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Sans holding</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• Société A (biotech) : 600K€ dividendes</li>
                    <li>• Société B (labo) : 400K€ dividendes</li>
                    <li>• <strong>Total dividendes : 1M€/an</strong></li>
                    <li>• Flat tax 30% : <strong className="text-red-600">300K€/an</strong></li>
                    <li>• Net après impôt : 700K€</li>
                    <li>• Pas de compensation des résultats</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Avec holding + intégration fiscale</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• Holding détient 100% des 2 sociétés</li>
                    <li>• Dividendes remontés : 1M€</li>
                    <li>• Quote-part 5% imposable : 50K€</li>
                    <li>• IS sur 50K€ (25%) : <strong className="text-emerald-600">12,5K€/an</strong></li>
                    <li className="text-emerald-700 font-medium">• <strong>Économie dividendes : 287,5K€/an</strong></li>
                    <li>• + Intégration fiscale : compensation pertes/bénéfices</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h4 className="text-lg font-light text-slate-900 mb-3">Stratégie recommandée pour groupes lyonnais</h4>
                <ul className="space-y-2 text-sm text-slate-700 font-light">
                  <li>1. <strong>Créer une holding animatrice</strong> pour piloter les 2 sociétés et mutualiser les fonctions support (DAF, achats, qualité)</li>
                  <li>2. <strong>Opter pour l'intégration fiscale</strong> (art. 223 A CGI) pour compenser les résultats entre filiales</li>
                  <li>3. <strong>Bénéficier du régime mère-fille</strong> sur les dividendes remontés (95% exonération)</li>
                  <li>4. <strong>Préparer la transmission</strong> avec le Pacte Dutreil (75% abattement sur droits de succession)</li>
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
            Holding pure vs Holding animatrice à Lyon
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
                    <td className="px-6 py-4 font-light text-slate-600">Souvent des salariés (DAF, responsable qualité)</td>
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
                    <td className="px-6 py-4 font-light text-slate-600">Investisseur, patrimoine, mono-société</td>
                    <td className="px-6 py-4 font-light text-slate-600">Groupe industriel, transmission familiale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 p-6">
            <h3 className="text-lg font-light text-slate-900 mb-3">
              Pour les dirigeants lyonnais
            </h3>
            <p className="text-sm text-slate-700 font-light leading-relaxed">
              <strong>Holding pure :</strong> Recommandée pour les dirigeants détenant une seule PME chimie ou pharma, ou les investisseurs avec participations multiples sans besoin d'animation quotidienne.
              <br /><br />
              <strong>Holding animatrice :</strong> Privilégiée pour les groupes industriels lyonnais (chimie, biotech, métallurgie) souhaitant mutualiser les fonctions support (achats, qualité, RH), ou pour bénéficier du Pacte Dutreil lors de la transmission familiale. Particulièrement adaptée aux entreprises de la Vallée de la Chimie et de Lyonbiopôle.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages fiscaux */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12 text-center">
            Les avantages fiscaux d'une holding à Lyon
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
                <p className="text-xs text-slate-600 font-light mb-2">Exemple chiffré (PME chimie) :</p>
                <ul className="space-y-1 text-xs text-slate-700 font-light">
                  <li>• Dividendes remontés : 1,2M€</li>
                  <li>• Quote-part imposable : 60K€</li>
                  <li>• IS à payer : 15K€</li>
                  <li className="text-emerald-700 font-medium">• <strong>Vs 360K€ en direct (PFU 30%)</strong></li>
                  <li className="text-emerald-700 font-medium">• <strong>Économie : 345K€/an</strong></li>
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
                  <li>• Cession filiale biotech : 6M€</li>
                  <li>• Plus-value : 5M€</li>
                  <li>• Quote-part imposable : 600K€</li>
                  <li>• IS à payer : 150K€</li>
                  <li className="text-emerald-700 font-medium">• <strong>Vs 1,5M€ en direct (PFU 30%)</strong></li>
                  <li className="text-emerald-700 font-medium">• <strong>Économie : 1,35M€</strong></li>
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
                <p className="text-xs text-slate-600 font-light mb-2">Exemple (groupe chimie/biotech) :</p>
                <ul className="space-y-1 text-xs text-slate-700 font-light">
                  <li>• Filiale A (chimie) : +1,8M€</li>
                  <li>• Filiale B (biotech) : -500K€</li>
                  <li>• Résultat groupe : 1,3M€</li>
                  <li>• IS groupe : 325K€</li>
                  <li className="text-emerald-700 font-medium">• <strong>Vs 450K€ sans intégration</strong></li>
                  <li className="text-emerald-700 font-medium">• <strong>Économie : 125K€/an</strong></li>
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

      {/* FAQ Lyon */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12 text-center">
            Questions fréquentes - Holding à Lyon
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Pourquoi créer une holding est-il particulièrement intéressant pour une entreprise lyonnaise ?",
                r: "Lyon est la première agglomération industrielle de France avec 77 000 emplois industriels, concentrés dans la chimie (Vallée de la Chimie), la pharma-biotech (Lyonbiopôle) et la métallurgie. Créer une holding permet de structurer des participations dans plusieurs sociétés de ces secteurs, de bénéficier du régime mère-fille (95% des dividendes exonérés), et de faciliter l'accès aux fonds industriels et dispositifs d'accompagnement régionaux dans un environnement fortement capitalisé."
              },
              {
                q: "Combien coûte la création d'une holding à Lyon ?",
                r: "Pour une holding pure : entre 1 500€ et 3 000€ HT (rédaction des statuts, dépôt au greffe, annonce légale, immatriculation). Pour une holding animatrice avec structuration patrimoniale complexe et multi-filiales : entre 5 000€ et 12 000€ HT. Les coûts annuels de gestion sont de 1 500-2 500€/an pour une holding pure, et 3 000-8 000€/an pour une holding animatrice. Le retour sur investissement fiscal est généralement immédiat dès la première année."
              },
              {
                q: "Holding pure ou holding animatrice pour mon entreprise chimie/pharma ?",
                r: "Si vous détenez une seule PME sans volonté d'intervention opérationnelle quotidienne : privilégiez la holding pure (simplicité, coûts réduits, régime mère-fille). Si vous détendez plusieurs sociétés et souhaitez mutualiser des fonctions support (achats, qualité, RH, stratégie) ou préparer une transmission familiale avec le Pacte Dutreil : optez pour la holding animatrice. Pour les groupes chimie/pharma lyonnais, la holding animatrice est souvent recommandée pour coordonner les relations avec les donneurs d'ordres et optimiser les synergies."
              },
              {
                q: "Peut-on utiliser une holding pour racheter une entreprise dans la Vallée de la Chimie ?",
                r: "Oui, c'est une excellente stratégie. Créer une holding permet de : (1) Structurer l'opération de rachat avec effet de levier (LBO). (2) Bénéficier du régime mère-fille sur les dividendes remontés par la société acquise. (3) Optimiser la fiscalité lors de la revente future (quote-part 12%). (4) Séparer les risques entre l'activité opérationnelle et la dette d'acquisition. (5) Faciliter les financements bancaires grâce à une structure solide."
              },
              {
                q: "Comment fonctionne le régime mère-fille pour une holding lyonnaise ?",
                r: "Le régime mère-fille (art. 145 et 216 du CGI) permet à une holding de recevoir les dividendes de ses filiales avec 95% d'exonération d'impôt sur les sociétés. Seule une quote-part de 5% est imposée au taux normal de l'IS (25%). Conditions : détenir au moins 5% du capital de la filiale, et conserver les titres au moins 2 ans. Exemple concret pour une PME chimie : sur 1,2M€ de dividendes remontés, vous ne payez que 15K€ d'IS au lieu de 360K€ en direct (flat tax 30%). Économie : 345K€/an."
              },
              {
                q: "Quelle est la fiscalité en cas de cession d'une filiale via une holding ?",
                r: "Lorsqu'une holding cède les titres d'une filiale détenue depuis plus de 2 ans, elle bénéficie du régime des plus-values long terme : seule une quote-part de 12% de la plus-value est imposable à l'IS (soit 3% d'imposition effective). Exemple : pour une cession à 6M€ avec 5M€ de plus-value, l'impôt est de 150K€ au lieu de 1,5M€ en cas de cession directe par une personne physique (PFU 30%). Économie : 1,35M€. C'est un avantage majeur pour les dirigeants lyonnais souhaitant revendre leur entreprise."
              },
              {
                q: "Peut-on transmettre une holding lyonnaise avec le Pacte Dutreil ?",
                r: "Oui, mais uniquement pour une holding animatrice (pas pour une holding pure). Le Pacte Dutreil permet une exonération de 75% de la valeur transmise lors d'une donation ou succession. Conditions : (1) la holding doit avoir une activité d'animation de groupe (contrôle, direction, prestations de services aux filiales), (2) engagement collectif de conservation des titres pendant 2 ans, (3) engagement individuel de conservation de 4 ans supplémentaires, (4) poursuite de l'activité professionnelle pendant 3 ans (pour au moins un des héritiers). C'est un outil puissant pour transmettre une entreprise familiale lyonnaise dans la chimie ou la pharma."
              },
              {
                q: "Intervention sur place à Lyon ou uniquement en visio ?",
                r: "Nous intervenons sur place à Lyon et dans toute la région Auvergne-Rhône-Alpes (Grenoble, Saint-Étienne, Villeurbanne, etc.) ou en visio selon votre préférence. Premier rendez-vous gratuit de 30 minutes pour analyser votre situation et vous proposer la structure holding optimale. Contactez-nous au 06 07 96 31 35 ou par email : florent@occitea-ip.fr."
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
            Prêt à créer votre holding à Lyon ?
          </h2>
          <p className="text-xl text-slate-300 font-light mb-12 leading-relaxed">
            Expertise holding pour dirigeants d'entreprises chimie, pharma, biotech et industrie à Lyon
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
  title: 'Création de Holding à Lyon | Expert Chimie, Pharma & Biotech',
  description: 'Expert holding à Lyon. Structuration holdings pour dirigeants PME chimie, pharma, biotech. Vallée de la Chimie, Lyonbiopôle. Régime mère-fille, optimisation fiscale. 06 07 96 31 35',
  keywords: [
    'holding lyon',
    'création holding lyon',
    'expert holding lyon',
    'holding chimie lyon',
    'holding pharma lyon',
    'holding biotech lyon',
    'vallée de la chimie',
    'lyonbiopôle',
    'régime mère-fille',
    'optimisation fiscale lyon',
    'transmission entreprise lyon',
    'holding pure lyon',
    'holding animatrice lyon'
  ],
  openGraph: {
    title: 'Création de Holding à Lyon | Expert Chimie, Pharma & Biotech',
    description: 'Structuration holdings pour dirigeants lyonnais. Chimie, Pharma, Biotech. Régime mère-fille, optimisation fiscale.',
    url: 'https://expertholding.fr/villes/Lyon',
    type: 'website',
  },
}