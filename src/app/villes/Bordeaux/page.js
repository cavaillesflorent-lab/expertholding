import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ChevronRight, CheckCircle, TrendingUp, Building2, Grape, Plane, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

export default function HoldingBordeauxPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="villes" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557993404-1ad42dd1e403?w=1600&q=80')] bg-cover bg-center opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">Accueil</Link>
            <ChevronRight size={16} className="text-slate-400" />
            <span className="text-amber-400">Holding Bordeaux</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="text-amber-400" size={32} />
              <span className="text-amber-400 font-light text-lg">Nouvelle-Aquitaine</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
              Création de Holding à Bordeaux
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 leading-relaxed">
              Expert en structuration de holdings pour dirigeants d'entreprises viticoles, aéronautiques, santé-biotech et numériques à Bordeaux. Accompagnement personnalisé dans un écosystème multi-sectoriel innovant.
            </p>
            
            {/* Stats Bordeaux */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">+113K</div>
                <div className="text-sm text-slate-300 font-light">Emplois industrie</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">953M€</div>
                <div className="text-sm text-slate-300 font-light">Investissements Q1 2025</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">5 400</div>
                <div className="text-sm text-slate-300 font-light">Exploitations viticoles</div>
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

      {/* Pourquoi Bordeaux */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
              Pourquoi créer une holding à Bordeaux ?
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Bordeaux bénéficie d'un <strong className="text-slate-900">tissu industriel diversifié et innovant</strong>, labellisée "Territoire d'industrie" depuis 2023 pour accélérer l'émergence d'industries du futur. Avec plus de 113 000 emplois industriels (aéronautique 26K, santé 60K, numérique 27K), 5 400 exploitations viticoles (premier bassin viticole bio de France) et 953 millions d'euros d'investissements au premier trimestre 2025, la métropole bordelaise est un terreau fertile pour la création de holdings, notamment pour les entreprises multi-sectorielles et patrimoniales.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white border border-slate-200 p-8">
              <h3 className="text-xl font-light text-slate-900 mb-6 flex items-center">
                <Grape className="w-6 h-6 text-amber-600 mr-3" />
                Écosystème multi-sectoriel unique
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Aéronautique, spatial et défense :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">+26 000 emplois avec Airbus, Dassault Aviation, Thales, ArianeGroup, Safran</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Santé, biotech et e-santé :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">~60 000 emplois, cluster GIPSO, Merck, Sanofi, Bordeaux Care Lab</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Numérique & IA :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">+27 000 emplois, French Tech, pôle majeur jeu vidéo, e-santé et big data</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Vigne et vin :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Premier employeur privé du département, 5 400 exploitations, premier bassin viticole bio de France</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Chimie, matériaux et nanotechnologies :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Chimie verte, pôles Xylofutur et Aerospace Valley, Saft, Solvay, Véolia</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Agroalimentaire, bois et logistique :</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Industrie papetière, transformation, Grand Port maritime</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 p-8">
              <h3 className="text-xl font-light text-slate-900 mb-6 flex items-center">
                <Plane className="w-6 h-6 text-amber-600 mr-3" />
                Avantages stratégiques d'une holding bordelaise
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">1</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Structuration multi-sectorielle</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Mutualiser fonctions support, consolider filiales dans plusieurs branches (aéronautique, bio, numérique, vin) et accroître résilience</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">2</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Avantages fiscaux</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Régime mère-fille (95% exonération dividendes), intégration fiscale, optimisation cessions et transmission</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">3</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Facilité d'investissement</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Réinvestir dividendes, augmenter capacité d'emprunt (effet levier LBO), financer croissance et acquisitions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">4</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Transmission patrimoniale</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Faciliter succession familiale via Pacte Dutreil, limiter risques et protéger patrimoine (domaines viticoles, groupes industriels)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-amber-600 font-medium text-sm">5</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">Accompagnement de l'innovation</strong>
                    <p className="text-slate-600 font-light text-sm mt-1">Investir dans plusieurs pôles d'innovation bordelais (vigne, digital, santé, énergies renouvelables)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cas pratiques Bordeaux */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4 text-center">
            Cas pratiques : Holdings bordelaises
          </h2>
          <p className="text-lg text-slate-600 font-light text-center mb-12 max-w-3xl mx-auto">
            Exemples concrets d'optimisation patrimoniale pour propriétaires de domaines viticoles et dirigeants de groupes multi-sectoriels à Bordeaux
          </p>

          <div className="space-y-8">
            {/* Cas 1 : Domaine viticole familial */}
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 lg:p-12">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Grape className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-slate-900 mb-2">
                    Domaine viticole familial - Grand Cru Classé
                  </h3>
                  <p className="text-slate-600 font-light">Propriétaire 62 ans, exploitation 45 hectares, CA 3,5M€, souhaite transmettre à ses 2 enfants</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white border border-slate-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Sans holding</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• CA : 3,5M€</li>
                    <li>• Bénéfice net : 700K€/an</li>
                    <li>• Dividendes versés : 500K€/an</li>
                    <li>• Flat tax 30% : <strong className="text-red-600">150K€/an</strong></li>
                    <li>• Net après impôt : 350K€</li>
                    <li>• Droits succession (valeur 15M€) : <strong className="text-red-600">~5,5M€</strong></li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Avec holding familiale + Pacte Dutreil</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• Holding détient 100% du domaine</li>
                    <li>• Dividendes remontés : 500K€</li>
                    <li>• Quote-part 5% imposable : 25K€</li>
                    <li>• IS sur 25K€ (25%) : <strong className="text-emerald-600">6,25K€/an</strong></li>
                    <li className="text-emerald-700 font-medium">• <strong>Économie annuelle : 143,75K€</strong></li>
                    <li>• Pacte Dutreil : 75% abattement</li>
                    <li>• Droits succession : <strong className="text-emerald-600">~1,38M€ (vs 5,5M€)</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                <h4 className="text-lg font-light text-slate-900 mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 text-amber-600 mr-2" />
                  Stratégie de transmission optimale pour ce domaine viticole
                </h4>
                <ul className="space-y-2 text-sm text-slate-700 font-light">
                  <li>✓ <strong>Année 1 :</strong> Créer une holding familiale animatrice, y apporter les titres du domaine (report d'imposition art. 150-0 B ter CGI)</li>
                  <li>✓ <strong>Années 1-2 :</strong> Signer un engagement collectif de conservation (Pacte Dutreil) avec les 2 enfants pour 2 ans minimum</li>
                  <li>✓ <strong>Année 3 :</strong> Donation progressive des parts de holding aux enfants (75% d'abattement fiscal grâce au Pacte Dutreil)</li>
                  <li>✓ <strong>Années 3-6 :</strong> Engagement individuel de conservation pendant 4 ans + poursuite activité professionnelle par au moins 1 enfant pendant 3 ans</li>
                  <li>✓ <strong>Économie totale :</strong> 4,12M€ de droits de succession + 143,75K€/an d'économie fiscale sur dividendes = <strong>5,56M€ d'économie sur 10 ans</strong></li>
                  <li>✓ <strong>Bonus :</strong> Donation tous les 15 ans avec abattements (100K€ par parent par enfant) = optimisation supplémentaire</li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 font-light">
                  <strong>Cadre légal :</strong> Régime mère-fille (art. 145 et 216 CGI). Pacte Dutreil (art. 787 B CGI) pour holding animatrice. Report d'imposition (art. 150-0 B ter CGI). Source : BOFiP-IS-BASE-10-10-10-10 et BOFiP-ENR-DMTG-10-20-40.
                </p>
              </div>
            </div>

            {/* Cas 2 : Groupe multi-sectoriel */}
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 lg:p-12">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Building2 className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-slate-900 mb-2">
                    Groupe multi-sectoriel aéronautique + biotech
                  </h3>
                  <p className="text-slate-600 font-light">Entrepreneur 51 ans, détient 2 sociétés (PME aéro sous-traitante + laboratoire biotech)</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white border border-slate-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Sans holding</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• Société A (aéro) : 800K€ bénéfice, 600K€ dividendes</li>
                    <li>• Société B (biotech) : -200K€ (R&D intensive)</li>
                    <li>• <strong>Dividendes imposables : 600K€</strong></li>
                    <li>• Flat tax 30% : <strong className="text-red-600">180K€/an</strong></li>
                    <li>• Net après impôt : 420K€</li>
                    <li>• <strong>Déficit biotech perdu</strong> (pas de compensation)</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 p-6">
                  <h4 className="text-sm font-light text-slate-500 uppercase tracking-wide mb-4">Avec holding + intégration fiscale</h4>
                  <ul className="space-y-2 text-sm text-slate-700 font-light">
                    <li>• Holding détient 100% des 2 sociétés</li>
                    <li>• Dividendes remontés : 600K€</li>
                    <li>• Quote-part 5% imposable : 30K€</li>
                    <li>• IS sur 30K€ (25%) : <strong className="text-emerald-600">7,5K€/an</strong></li>
                    <li className="text-emerald-700 font-medium">• <strong>Économie dividendes : 172,5K€/an</strong></li>
                    <li>• Intégration fiscale : compensation -200K€ biotech</li>
                    <li className="text-emerald-700 font-medium">• <strong>Économie supplémentaire : 50K€/an</strong></li>
                    <li className="text-emerald-700 font-medium">• <strong>Économie totale : 222,5K€/an</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h4 className="text-lg font-light text-slate-900 mb-3">Stratégie recommandée pour groupes bordelais multi-sectoriels</h4>
                <ul className="space-y-2 text-sm text-slate-700 font-light">
                  <li>1. <strong>Créer une holding animatrice</strong> pour piloter les 2 sociétés et mutualiser les fonctions support (achats, commercial, administratif)</li>
                  <li>2. <strong>Opter pour l'intégration fiscale</strong> (art. 223 A CGI) dès la création pour compenser les résultats entre filiales (secteur biotech = investissements R&D importants)</li>
                  <li>3. <strong>Bénéficier du régime mère-fille</strong> sur les dividendes remontés (95% exonération, seulement 5% de quote-part imposable)</li>
                  <li>4. <strong>Réinvestir intelligemment</strong> : Utiliser les 592,5K€ disponibles dans la holding pour acquérir une 3ème société ou diversifier (immobilier, private equity)</li>
                  <li>5. <strong>Préparer la transmission</strong> : Holding animatrice éligible au Pacte Dutreil (75% abattement sur droits de succession)</li>
                  <li>6. <strong>Accéder aux financements</strong> : Solidité financière renforcée pour lever des fonds (banques, investisseurs, aides régionales Nouvelle-Aquitaine)</li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 font-light">
                  <strong>Cadre légal :</strong> Intégration fiscale (art. 223 A et suivants CGI). Régime mère-fille (art. 145 et 216 CGI). Pacte Dutreil (art. 787 B CGI) pour holding animatrice. Source : BOFiP-IS-RICI-10-10 et BOFiP-ENR-DMTG-10-20-40.
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
            Holding pure vs Holding animatrice à Bordeaux
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
                    <td className="px-6 py-4 font-light text-slate-600">Petits domaines viticoles, PME unique</td>
                    <td className="px-6 py-4 font-light text-slate-600">Grands domaines, groupes multi-sectoriels</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 p-6">
            <h3 className="text-lg font-light text-slate-900 mb-3">
              Pour les dirigeants bordelais
            </h3>
            <p className="text-sm text-slate-700 font-light leading-relaxed">
              <strong>Holding pure :</strong> Recommandée pour les propriétaires de petits domaines viticoles ou PME uniques (aéronautique, biotech) sans besoin d'animation quotidienne. Idéale pour l'optimisation fiscale simple (régime mère-fille).
              <br /><br />
              <strong>Holding animatrice :</strong> Privilégiée pour les grands domaines viticoles (Grand Cru Classé), les groupes multi-sectoriels (aéronautique + santé, vin + agroalimentaire) ou pour bénéficier du Pacte Dutreil lors de la transmission familiale. Particulièrement adaptée aux entrepreneurs bordelais ayant plusieurs activités dans l'écosystème local (vigne, numérique, santé).
            </p>
          </div>
        </div>
      </section>

      {/* Avantages fiscaux */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12 text-center">
            Les avantages fiscaux d'une holding à Bordeaux
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
                <p className="text-xs text-slate-600 font-light mb-2">Exemple chiffré (domaine viticole) :</p>
                <ul className="space-y-1 text-xs text-slate-700 font-light">
                  <li>• Dividendes remontés : 500K€</li>
                  <li>• Quote-part imposable : 25K€</li>
                  <li>• IS à payer : 6,25K€</li>
                  <li className="text-emerald-700 font-medium">• <strong>Vs 150K€ en direct (PFU 30%)</strong></li>
                  <li className="text-emerald-700 font-medium">• <strong>Économie : 143,75K€/an</strong></li>
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
              <h3 className="text-xl font-light text-slate-900 mb-4">Pacte Dutreil</h3>
              <p className="text-slate-700 font-light mb-4 text-sm leading-relaxed">
                <strong>75% d'abattement sur les droits de succession</strong> pour la transmission d'une holding animatrice (domaines viticoles, groupes industriels).
              </p>
              <div className="bg-white border border-slate-200 p-4">
                <p className="text-xs text-slate-600 font-light mb-2">Exemple chiffré (transmission domaine 15M€) :</p>
                <ul className="space-y-1 text-xs text-slate-700 font-light">
                  <li>• Valeur domaine : 15M€</li>
                  <li>• Abattement Dutreil 75% : 11,25M€</li>
                  <li>• Base imposable : 3,75M€</li>
                  <li>• Droits succession : 1,38M€</li>
                  <li className="text-emerald-700 font-medium">• <strong>Vs 5,5M€ sans Pacte Dutreil</strong></li>
                  <li className="text-emerald-700 font-medium">• <strong>Économie : 4,12M€</strong></li>
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500 font-light">
                  Art. 787 B du CGI. Holding animatrice uniquement.
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
                <p className="text-xs text-slate-600 font-light mb-2">Exemple (groupe aéro + biotech) :</p>
                <ul className="space-y-1 text-xs text-slate-700 font-light">
                  <li>• Filiale A (aéro) : +800K€</li>
                  <li>• Filiale B (biotech) : -200K€</li>
                  <li>• Résultat groupe : 600K€</li>
                  <li>• IS groupe : 150K€</li>
                  <li className="text-emerald-700 font-medium">• <strong>Vs 200K€ sans intégration</strong></li>
                  <li className="text-emerald-700 font-medium">• <strong>Économie : 50K€/an</strong></li>
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

      {/* FAQ Bordeaux */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12 text-center">
            Questions fréquentes - Holding à Bordeaux
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Pourquoi créer une holding est-il particulièrement intéressant pour un domaine viticole bordelais ?",
                r: "Les domaines viticoles bordelais bénéficient d'avantages fiscaux exceptionnels via une holding : (1) Régime mère-fille : 95% des dividendes remontés sont exonérés d'IS (vs 30% de flat tax en direct). (2) Pacte Dutreil : 75% d'abattement sur les droits de succession pour transmission familiale (holding animatrice). (3) Protection patrimoniale : séparation entre l'exploitation viticole et le patrimoine personnel. (4) Facilitation de la transmission : donation progressive aux enfants avec abattements renouvelables tous les 15 ans. Pour un Grand Cru Classé valorisé 15M€, l'économie totale peut atteindre 5,5M€ sur 10 ans."
              },
              {
                q: "Combien coûte la création d'une holding à Bordeaux ?",
                r: "Pour une holding pure : entre 1 500€ et 3 000€ HT (rédaction des statuts, dépôt au greffe, annonce légale, immatriculation). Pour une holding animatrice avec structuration patrimoniale complexe (domaine viticole, groupe multi-sectoriels) : entre 5 000€ et 12 000€ HT selon la complexité. Les coûts annuels de gestion sont de 1 500-2 500€/an pour une holding pure, et 3 000-8 000€/an pour une holding animatrice. Le retour sur investissement fiscal est généralement immédiat dès la première année (économie de 100K€+ pour un domaine viticole moyen)."
              },
              {
                q: "Holding pure ou holding animatrice pour mon domaine viticole ?",
                r: "Pour un petit domaine viticole sans volonté de transmission immédiate : privilégiez la holding pure (simplicité, coûts réduits, régime mère-fille). Pour un Grand Cru Classé ou domaine de prestige avec projet de transmission familiale : optez pour la holding animatrice (éligibilité Pacte Dutreil = 75% d'abattement sur droits de succession). La holding animatrice nécessite une animation effective (prestations de services aux filiales, contrôle stratégique) mais offre une économie de plusieurs millions d'euros lors de la transmission."
              },
              {
                q: "Peut-on utiliser une holding pour racheter un château ou domaine viticole à Bordeaux ?",
                r: "Oui, c'est une excellente stratégie. Créer une holding permet de : (1) Structurer l'opération de rachat avec effet de levier (LBO). (2) Bénéficier du régime mère-fille sur les dividendes remontés par le domaine acquis. (3) Optimiser la fiscalité lors de la revente future (quote-part 12%). (4) Séparer les risques entre l'exploitation viticole et la dette d'acquisition. (5) Faciliter les financements bancaires grâce à une structure solide. Particulièrement pertinent pour racheter un concurrent ou diversifier dans d'autres appellations bordelaises (Médoc, Saint-Émilion, Pomerol)."
              },
              {
                q: "Comment fonctionne le régime mère-fille pour une holding viticole bordelaise ?",
                r: "Le régime mère-fille (art. 145 et 216 du CGI) permet à une holding de recevoir les dividendes de son domaine viticole avec 95% d'exonération d'impôt sur les sociétés. Seule une quote-part de 5% est imposée au taux normal de l'IS (25%). Conditions : détenir au moins 5% du capital du domaine, et conserver les titres au moins 2 ans. Exemple concret pour un domaine CA 3,5M€ : sur 500K€ de dividendes remontés, vous ne payez que 6,25K€ d'IS au lieu de 150K€ en direct (flat tax 30%). Économie : 143,75K€/an, soit 1,44M€ sur 10 ans."
              },
              {
                q: "Quelle est la fiscalité en cas de cession d'un domaine viticole via une holding ?",
                r: "Lorsqu'une holding cède les titres d'un domaine viticole détenu depuis plus de 2 ans, elle bénéficie du régime des plus-values long terme : seule une quote-part de 12% de la plus-value est imposable à l'IS (soit 3% d'imposition effective). Exemple : pour une cession à 20M€ avec 18M€ de plus-value, l'impôt est de 540K€ au lieu de 5,4M€ en cas de cession directe par une personne physique (PFU 30%). Économie : 4,86M€. C'est un avantage majeur pour les propriétaires bordelais souhaitant revendre leur domaine."
              },
              {
                q: "Peut-on transmettre un domaine viticole bordelais avec le Pacte Dutreil ?",
                r: "Oui, mais uniquement via une holding animatrice (pas pour une holding pure). Le Pacte Dutreil permet une exonération de 75% de la valeur transmise lors d'une donation ou succession. Conditions : (1) la holding doit avoir une activité d'animation de groupe (contrôle, direction, prestations de services), (2) engagement collectif de conservation des titres pendant 2 ans, (3) engagement individuel de conservation de 4 ans supplémentaires, (4) poursuite de l'activité viticole pendant 3 ans (pour au moins un des héritiers). Pour un domaine valorisé 15M€, économie de 4,12M€ de droits de succession. C'est un outil puissant pour transmettre un patrimoine viticole familial bordelais."
              },
              {
                q: "Intervention sur place à Bordeaux ou uniquement en visio ?",
                r: "Nous intervenons sur place à Bordeaux et dans toute la Nouvelle-Aquitaine (Bordeaux Métropole, Médoc, Saint-Émilion, Pomerol, etc.) ou en visio selon votre préférence. Premier rendez-vous gratuit de 30 minutes pour analyser votre situation (domaine viticole, groupe multi-sectoriel) et vous proposer la structure holding optimale. Contactez-nous au 06 07 96 31 35 ou par email : florent@occitea-ip.fr."
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
            Prêt à créer votre holding à Bordeaux ?
          </h2>
          <p className="text-xl text-slate-300 font-light mb-12 leading-relaxed">
            Expertise holding pour propriétaires de domaines viticoles et dirigeants de groupes multi-sectoriels à Bordeaux
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
                href="/creer-holding/holding-familiale" 
                className="text-amber-400 hover:text-amber-300 text-sm font-light flex items-center transition-colors"
              >
                Holding familiale <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link 
                href="/transmettre-holding" 
                className="text-amber-400 hover:text-amber-300 text-sm font-light flex items-center transition-colors"
              >
                Transmettre sa holding <ArrowRight className="w-4 h-4 ml-1" />
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
  title: 'Création de Holding à Bordeaux | Expert Vin & Aéronautique',
  description: 'Expert holding à Bordeaux. Structuration holdings pour propriétaires domaines viticoles et dirigeants groupes aéronautique, santé, numérique. Pacte Dutreil. 06 07 96 31 35',
  keywords: [
    'holding bordeaux',
    'création holding bordeaux',
    'expert holding bordeaux',
    'holding viticole bordeaux',
    'holding vin bordeaux',
    'domaine viticole holding',
    'pacte dutreil bordeaux',
    'holding aéronautique bordeaux',
    'holding biotech bordeaux',
    'transmission domaine viticole',
    'régime mère-fille',
    'optimisation fiscale bordeaux',
    'holding familiale bordeaux',
    'grand cru classé holding'
  ],
  openGraph: {
    title: 'Création de Holding à Bordeaux | Expert Vin & Aéronautique',
    description: 'Structuration holdings pour domaines viticoles et groupes bordelais. Vin, Aéronautique, Santé, Numérique. Pacte Dutreil, régime mère-fille, transmission familiale.',
    url: 'https://expertholding.fr/villes/Bordeaux',
    type: 'website',
  },
}