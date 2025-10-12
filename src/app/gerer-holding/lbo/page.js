import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TrendingUp, Shield, CheckCircle, ArrowRight, FileText, Users, AlertTriangle, DollarSign, Scale, Target, Building2, LineChart } from 'lucide-react'

export default function LBOPage() {
  const LIEN_CONTACT = "https://taap.it/i3gsEr"
  
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
            <span className="text-slate-900">LBO - Leverage Buy-Out</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80" 
            alt="LBO - Leverage Buy-Out" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-amber-600/10 backdrop-blur-sm border border-amber-600/20 mb-8">
              <span className="text-amber-400 text-sm font-light tracking-wide">GUIDE JURIDIQUE & FISCAL 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
              LBO<br />
              <span className="text-amber-400">Leverage Buy-Out</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 leading-relaxed">
              Acquérir une entreprise par effet de levier : mécanismes, fiscalité 2025, régime mère-fille, intégration fiscale et sécurisation du montage
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="https://taap.it/i3gsEr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-base font-light transition-all hover:shadow-xl hover:scale-105"
              >
                Je veux plus d'informations
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
                <span>Lecture 25 min</span>
              </span>
              <span className="flex items-center space-x-2">
                <CheckCircle size={16} />
                <span>Mis à jour : Janvier 2025</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
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
                <p><strong className="font-normal text-slate-900">Le LBO en 2025 :</strong> Outil majeur de transmission et d'investissement, soumis à des règles fiscales strictes : limitation de déductibilité des intérêts (30% de l'EBITDA fiscal - ATAD), régime mère-fille et amendement Charasse.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p><strong className="font-normal text-slate-900">Fiscalité optimisée :</strong> Régime mère-fille (quasi-exonération avec QPFC 5%), intégration fiscale possible, arbitrage PFU vs barème pour les cédants.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p><strong className="font-normal text-slate-900">Vigilance accrue :</strong> Risque d'abus de droit, substance de la holding requise, documentation probante indispensable, amendement Charasse si le cédant conserve le contrôle.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">Qu'est-ce qu'un LBO (Leverage Buy-Out) ?</h2>
          
          <div className="bg-white border border-slate-100 p-8 mb-12">
            <h3 className="text-xl font-light text-slate-900 mb-4">Définition</h3>
            <p className="text-slate-700 font-light leading-relaxed mb-6">
              Le <strong className="font-normal text-slate-900">LBO (Leverage Buy-Out)</strong> est une technique d'acquisition d'entreprise reposant sur l'<strong className="font-normal text-slate-900">effet de levier financier</strong>. Une société holding (NewCo/HoldCo) est créée pour acquérir une société cible (OpCo), en finançant l'acquisition principalement par de la dette bancaire.
            </p>
            <p className="text-slate-700 font-light leading-relaxed mb-6">
              Le remboursement de cette dette est assuré par les <strong className="font-normal text-slate-900">flux de trésorerie</strong> (dividendes, cash-flows) générés par la société cible elle-même.
            </p>
            <p className="text-slate-700 font-light leading-relaxed">
              Cette opération permet aux acquéreurs (fonds d'investissement, managers, famille) d'acquérir une entreprise avec un <strong className="font-normal text-slate-900">apport en capitaux propres limité</strong>, le reste étant financé par emprunt.
            </p>
          </div>

          <h3 className="text-2xl font-light text-slate-900 mb-6">Le mécanisme du LBO</h3>
          
          <div className="bg-slate-50 border-l-4 border-amber-500 p-6 mb-12">
            <h4 className="text-lg font-normal text-slate-900 mb-4">Étapes clés</h4>
            <ol className="space-y-3 text-slate-700 font-light">
              <li className="flex items-start">
                <span className="text-amber-600 font-normal mr-3">1.</span>
                <span><strong className="font-normal text-slate-900">Création d'une holding</strong> (HoldCo/NewCo) par les investisseurs</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-normal mr-3">2.</span>
                <span><strong className="font-normal text-slate-900">Financement mixte</strong> : capitaux propres (30-40%) + dette bancaire (60-70%)</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-normal mr-3">3.</span>
                <span><strong className="font-normal text-slate-900">Acquisition</strong> de la société cible par la holding</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-normal mr-3">4.</span>
                <span><strong className="font-normal text-slate-900">Remontée de dividendes</strong> de la cible vers la holding (régime mère-fille)</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-normal mr-3">5.</span>
                <span><strong className="font-normal text-slate-900">Service de la dette</strong> : remboursement du prêt bancaire via les dividendes</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-normal mr-3">6.</span>
                <span><strong className="font-normal text-slate-900">Sortie</strong> (5-7 ans) : revente, introduction en bourse ou refinancement</span>
              </li>
            </ol>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-8 text-white mb-12">
            <h4 className="text-xl font-light mb-4">L'effet de levier</h4>
            <p className="font-light leading-relaxed opacity-90 mb-4">
              L'effet de levier permet d'<strong className="font-normal">amplifier le rendement</strong> des capitaux propres investis. Si l'entreprise génère un retour sur investissement supérieur au coût de la dette, les actionnaires bénéficient d'un gain démultiplié.
            </p>
            <p className="font-light leading-relaxed opacity-90">
              <strong className="font-normal">Exemple :</strong> Avec 30M€ de fonds propres et 70M€ de dette pour acquérir une entreprise à 100M€, si sa valeur double en 5 ans, le retour pour les actionnaires est bien supérieur à un investissement direct à 100%.
            </p>
          </div>

          <h3 className="text-2xl font-light text-slate-900 mb-6">Les variantes du LBO</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-slate-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h4 className="text-lg font-light text-slate-900 mb-3">LMBO (Management Buy-Out)</h4>
              <p className="text-slate-600 font-light text-sm leading-relaxed">
                Reprise de l'entreprise par son équipe dirigeante, souvent avec l'appui d'un fonds d'investissement. Les managers deviennent actionnaires.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-50 flex items-center justify-center mb-4">
                <Target className="text-green-600" size={24} />
              </div>
              <h4 className="text-lg font-light text-slate-900 mb-3">LMBI (Management Buy-In)</h4>
              <p className="text-slate-600 font-light text-sm leading-relaxed">
                Acquisition par une équipe dirigeante externe qui souhaite prendre le contrôle et gérer l'entreprise.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber-50 flex items-center justify-center mb-4">
                <Building2 className="text-amber-600" size={24} />
              </div>
              <h4 className="text-lg font-light text-slate-900 mb-3">OBO (Owner Buy-Out)</h4>
              <p className="text-slate-600 font-light text-sm leading-relaxed">
                Le dirigeant-propriétaire vend à une holding qu'il contrôle, financée par dette. Il encaisse des liquidités tout en gardant le contrôle.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-50 flex items-center justify-center mb-4">
                <LineChart className="text-purple-600" size={24} />
              </div>
              <h4 className="text-lg font-light text-slate-900 mb-3">FBO (Family Buy-Out)</h4>
              <p className="text-slate-600 font-light text-sm leading-relaxed">
                Transmission familiale via holding de reprise, souvent articulée avec le pacte Dutreil pour optimisation fiscale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 1 */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
            Un projet de LBO ou de transmission ?
          </h3>
          <p className="text-amber-50 font-light mb-8 text-lg">
            Étude de faisabilité, structuration et optimisation fiscale de votre montage
          </p>
          <a 
            href="https://taap.it/i3gsEr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white hover:bg-slate-50 text-amber-600 px-8 py-4 text-base font-light transition-all hover:shadow-xl hover:scale-105"
          >
            Je veux plus d'informations
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Fiscalité du LBO */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Fiscalité du LBO en 2025</h2>
            <p className="text-xl font-light text-slate-600 max-w-3xl mx-auto">
              Un cadre fiscal complexe qui nécessite une structuration rigoureuse
            </p>
          </div>

          {/* Tableau des mécanismes fiscaux */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-16">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Mécanisme</th>
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Fondement</th>
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Effet fiscal</th>
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Conditions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-normal text-slate-900">Régime mère-fille</span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">CGI 145/216</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Quasi-exonération dividendes (QPFC 5%)</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-600">≥5% capital, 2 ans détention</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-normal text-slate-900">Intégration fiscale</span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">CGI 223 A et s.</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Consolidation résultats</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-600">Lien capitalistique, options</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-normal text-slate-900">Limitation intérêts (ATAD)</span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">CGI 209 IX, 212, 212 bis</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Plafond 30% EBITDA fiscal</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-600">Sauf exceptions</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-normal text-slate-900">Amendement Charasse</span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">CGI 223 B al. 6</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Limitation déduction intérêts</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-600">Cédant conserve contrôle</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Détails fiscaux */}
          <div className="space-y-12">
            {/* Régime mère-fille */}
            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-light text-slate-900 mb-6">1. Régime mère-fille (CGI art. 145 & 216)</h3>
              
              <p className="text-slate-700 font-light leading-relaxed mb-6">
                Le régime mère-fille permet une <strong className="font-normal text-slate-900">quasi-exonération</strong> des dividendes remontés de la cible (OpCo) vers la holding (HoldCo). C'est le mécanisme central qui rend le LBO fiscalement efficient.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-normal text-slate-900 mb-4">Conditions d'application</h4>
                <ul className="space-y-2 text-sm font-light text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Participation <strong className="font-normal text-slate-900">≥ 5%</strong> du capital de la société distributrice</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Détention pendant <strong className="font-normal text-slate-900">2 ans minimum</strong></span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Les deux sociétés doivent être soumises à l'<strong className="font-normal text-slate-900">impôt sur les sociétés</strong></span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Respect de la <strong className="font-normal text-slate-900">clause anti-abus</strong> (directive 2011/96/UE modifiée)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-lg p-6">
                <h4 className="text-lg font-normal text-green-900 mb-3">Traitement fiscal</h4>
                <p className="text-sm font-light text-green-800 mb-4">
                  Les dividendes reçus sont exonérés d'IS, à l'exception d'une <strong className="font-normal">quote-part de frais et charges (QPFC)</strong> de 5% réintégrée dans le résultat imposable.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-700 font-light">Dividende reçu</span>
                      <span className="font-normal text-slate-900">1 000 000 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-700 font-light">QPFC 5%</span>
                      <span className="font-normal text-slate-900">50 000 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-700 font-light">IS sur QPFC (25%)</span>
                      <span className="font-normal text-amber-600">12 500 €</span>
                    </div>
                    <div className="border-t border-slate-200 pt-2 flex justify-between">
                      <span className="font-normal text-slate-900">Frottement fiscal</span>
                      <span className="text-lg font-light text-amber-600">1,25%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Limitation des intérêts */}
            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-light text-slate-900 mb-6">2. Limitation de déductibilité des intérêts (ATAD)</h3>
              
              <p className="text-slate-700 font-light leading-relaxed mb-6">
                Depuis la transposition de la directive ATAD (Anti Tax Avoidance Directive), la déductibilité des charges financières est <strong className="font-normal text-slate-900">plafonnée à 30% de l'EBITDA fiscal</strong>.
              </p>

              <div className="bg-red-50 border border-red-100 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-normal text-red-900 mb-3">Impact sur le LBO</h4>
                <p className="text-sm font-light text-red-800 mb-4">
                  Cette limitation impacte directement la capacité de service de la dette et doit être intégrée dès la modélisation financière initiale. Un LBO trop endetté peut voir une partie de ses intérêts non déductibles.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm space-y-2">
                    <div className="font-normal text-slate-900 mb-2">Exemple de calcul :</div>
                    <div className="flex justify-between">
                      <span className="text-slate-700 font-light">EBITDA fiscal</span>
                      <span className="font-normal text-slate-900">5 000 000 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-700 font-light">Plafond déductible (30%)</span>
                      <span className="font-normal text-slate-900">1 500 000 €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-700 font-light">Intérêts payés</span>
                      <span className="font-normal text-slate-900">2 000 000 €</span>
                    </div>
                    <div className="border-t border-slate-200 pt-2 flex justify-between">
                      <span className="font-normal text-red-900">Intérêts non déductibles</span>
                      <span className="text-lg font-light text-red-600">500 000 €</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={20} />
                  <p className="text-sm font-light text-blue-900">
                    <strong className="font-normal">Point clé :</strong> Cette limitation rend indispensable une modélisation financière précise intégrant les flux fiscaux réels, et non uniquement les flux comptables.
                  </p>
                </div>
              </div>
            </div>

            {/* Amendement Charasse */}
            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-light text-slate-900 mb-6">3. Amendement Charasse (CGI art. 223 B, al. 6)</h3>
              
              <p className="text-slate-700 font-light leading-relaxed mb-6">
                L'amendement Charasse est un dispositif <strong className="font-normal text-slate-900">anti-abus</strong> qui limite la déduction des charges financières dans le cadre de l'intégration fiscale lorsque le cédant conserve le contrôle de la holding acheteuse.
              </p>

              <div className="bg-amber-50 border border-amber-100 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-normal text-amber-900 mb-3">Mécanisme</h4>
                <p className="text-sm font-light text-amber-800 mb-4">
                  Si le vendeur conserve le contrôle (seul ou de concert) de la holding qui a racheté son entreprise, les intérêts d'emprunt liés à l'acquisition ne peuvent pas être déduits via l'intégration fiscale.
                </p>
                <p className="text-sm font-light text-amber-800">
                  <strong className="font-normal">Objectif :</strong> Éviter qu'un dirigeant vende à "lui-même" via une holding endettée tout en bénéficiant de la déduction fiscale des intérêts.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                  <h4 className="text-sm font-normal text-red-900 mb-2">❌ Situation à risque</h4>
                  <p className="text-sm font-light text-red-800">
                    Le cédant reste actionnaire majoritaire ou de concert de la holding. L'amendement Charasse s'applique → intérêts non déductibles.
                  </p>
                </div>
                <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <h4 className="text-sm font-normal text-green-900 mb-2">✓ Situation sécurisée</h4>
                  <p className="text-sm font-light text-green-800">
                    Le cédant est minoritaire sans concert, ou sort complètement. Intérêts déductibles normalement.
                  </p>
                </div>
              </div>
            </div>

            {/* Intégration fiscale */}
            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-light text-slate-900 mb-6">4. Intégration fiscale (CGI art. 223 A et s.)</h3>
              
              <p className="text-slate-700 font-light leading-relaxed mb-6">
                L'intégration fiscale permet de <strong className="font-normal text-slate-900">consolider les résultats fiscaux</strong> de la holding et de ses filiales détenues à plus de 95%. Les bénéfices et pertes sont compensés au niveau du groupe.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-normal text-slate-900 mb-4">Avantages pour le LBO</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span className="text-slate-700 font-light">Neutralisation des flux intragroupe (dividendes, abandons de créances)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span className="text-slate-700 font-light">Déduction des charges financières de la holding sur les bénéfices du groupe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span className="text-slate-700 font-light">Optimisation globale de la charge fiscale</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <p className="text-sm font-light text-blue-900">
                  <strong className="font-normal">Attention :</strong> L'intégration fiscale doit être articulée avec la limitation ATAD (30%) et l'amendement Charasse. Option à formuler et conditions strictes à respecter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 2 */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80" 
            alt="Bureau" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
            Besoin d'optimiser la fiscalité de votre LBO ?
          </h3>
          <p className="text-xl text-slate-300 font-light mb-8 leading-relaxed">
            Modélisation fiscale, structuration optimale et sécurisation du montage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://taap.it/i3gsEr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-base font-light transition-all"
            >
              Je veux plus d'informations
            </a>
            <a 
              href="tel:0607963135" 
              className="inline-flex items-center border border-white/20 hover:bg-white/5 text-white px-8 py-4 text-base font-light transition-all"
            >
              06 07 96 31 35
            </a>
          </div>
        </div>
      </section>

      {/* Fiscalité du cédant */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Fiscalité du cédant</h2>
            <p className="text-xl font-light text-slate-600 max-w-3xl mx-auto">
              PFU, barème progressif et abattements : comment optimiser l'imposition de la plus-value
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* PFU */}
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl p-8">
              <h3 className="text-2xl font-light text-slate-900 mb-6">PFU (Prélèvement Forfaitaire Unique)</h3>
              
              <div className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-light">Impôt sur le revenu</span>
                    <span className="text-2xl font-light text-slate-900">12,8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-light">Prélèvements sociaux</span>
                    <span className="text-2xl font-light text-slate-900">17,2%</span>
                  </div>
                  <div className="border-t border-slate-200 pt-3 flex justify-between items-center">
                    <span className="text-slate-900 font-normal">Taux global</span>
                    <span className="text-3xl font-light text-amber-600">30%</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <h4 className="text-sm font-normal text-green-900 mb-2">✓ Avantages</h4>
                  <ul className="space-y-1 text-sm font-light text-green-800">
                    <li>• Simplicité et lisibilité</li>
                    <li>• Taux proportionnel</li>
                    <li>• Pas de formalité complexe</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                  <h4 className="text-sm font-normal text-red-900 mb-2">✗ Inconvénients</h4>
                  <ul className="space-y-1 text-sm font-light text-red-800">
                    <li>• Pas d'abattement pour durée</li>
                    <li>• Contribution exceptionnelle (CEHR) en sus si revenus élevés</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Barème */}
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl p-8">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Option pour le barème progressif</h3>
              
              <p className="text-slate-700 font-light leading-relaxed mb-6">
                Le cédant peut opter pour l'imposition au <strong className="font-normal text-slate-900">barème progressif de l'IR</strong> au lieu du PFU. Cette option peut être avantageuse si le cédant bénéficie d'<strong className="font-normal text-slate-900">abattements</strong>.
              </p>

              <div className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-normal text-slate-900 mb-4">Abattements disponibles (titres acquis avant 2018)</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <div>
                      <div className="font-normal text-slate-900">Abattement pour durée de détention (CGI 150-0 D)</div>
                      <div className="text-slate-600 font-light">50% si détention 2-8 ans, 65% si {`>`} 8 ans</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <div>
                      <div className="font-normal text-slate-900">Abattement renforcé PME {`<`} 10 ans</div>
                      <div className="text-slate-600 font-light">85% si conditions remplies (dirigeant, PME, détention {`>`} 3 ans)</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <div>
                      <div className="font-normal text-slate-900">Abattement départ retraite (CGI 150-0 D ter)</div>
                      <div className="text-slate-600 font-light">500 000 € sous conditions strictes</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
                <p className="text-sm font-light text-amber-900">
                  <strong className="font-normal">Important :</strong> Pour les titres acquis après le 1er janvier 2018, seul le PFU s'applique, sans abattement pour durée de détention.
                </p>
              </div>
            </div>
          </div>

          {/* Tableau comparatif */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
              <h4 className="text-lg font-normal text-slate-900">Comparaison PFU vs Barème (titres acquis avant 2018)</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="px-6 py-3 text-left text-sm font-normal text-slate-900">Situation</th>
                    <th className="px-6 py-3 text-left text-sm font-normal text-slate-900">Régime optimal</th>
                    <th className="px-6 py-3 text-left text-sm font-normal text-slate-900">Taux effectif</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Titres récents ({`<`} 2 ans)</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">PFU</td>
                    <td className="px-6 py-4 text-sm font-normal text-slate-900">30%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Titres 2-8 ans (avant 2018)</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Barème + abattement 50%</td>
                    <td className="px-6 py-4 text-sm font-normal text-slate-900">≈ 25-28%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Titres {`>`} 8 ans (avant 2018)</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Barème + abattement 65%</td>
                    <td className="px-6 py-4 text-sm font-normal text-slate-900">≈ 18-23%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">PME {`<`} 10 ans, dirigeant</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Barème + abattement 85%</td>
                    <td className="px-6 py-4 text-sm font-normal text-amber-600">≈ 12-15%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Risques et sécurisation */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Risques et sécurisation du montage</h2>
            <p className="text-xl font-light text-slate-600 max-w-3xl mx-auto">
              Un LBO mal structuré expose à des risques fiscaux, financiers et juridiques majeurs
            </p>
          </div>

          {/* Tableau des risques */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Risque</th>
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Manifestation</th>
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Parade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-normal bg-red-50 text-red-700">
                        Abus de droit
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Montage sans substance, but uniquement fiscal</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Substance holding, business plan, rationalité économique</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-normal bg-orange-50 text-orange-700">
                        Surendettement
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Flux insuffisants, défaut de paiement</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Ratios prudents, covenants, stress tests</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-normal bg-amber-50 text-amber-700">
                        Limitation ATAD
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Intérêts non déductibles ({`>`} 30% EBITDA)</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Modélisation fiscale, structure de dette adaptée</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-normal bg-purple-50 text-purple-700">
                        Amendement Charasse
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Cédant garde contrôle → intérêts non déductibles</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Structurer la gouvernance, dilution du cédant</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-normal bg-blue-50 text-blue-700">
                        Acte anormal de gestion
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Rémunération excessive, avantage injustifié</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Documentation, prix de marché, substance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Focus abus de droit */}
          <div className="bg-white border border-slate-100 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-light text-slate-900 mb-6">L'abus de droit (LPF L 64 / L 64 A)</h3>
            
            <p className="text-slate-700 font-light leading-relaxed mb-6">
              L'administration fiscale peut requalifier un LBO si elle démontre que l'opération a un <strong className="font-normal text-slate-900">but principalement fiscal</strong> et est dépourvue de substance économique.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border border-red-100 rounded-lg p-6">
                <h4 className="text-lg font-normal text-red-900 mb-4">🚫 Pratiques à risque</h4>
                <ul className="space-y-2 text-sm font-light text-red-800">
                  <li>• Holding "coquille vide" sans moyens propres</li>
                  <li>• Absence de business plan ou de stratégie</li>
                  <li>• Management fees fictifs ou excessifs</li>
                  <li>• Prix de cession non justifié</li>
                  <li>• Apport-cession avec soulte "d'opportunité"</li>
                  <li>• Absence totale de substance opérationnelle</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-lg p-6">
                <h4 className="text-lg font-normal text-green-900 mb-4">✓ Sécurisation</h4>
                <ul className="space-y-2 text-sm font-light text-green-800">
                  <li>• Holding avec moyens propres (bureaux, salariés)</li>
                  <li>• Business plan documenté sur 5-7 ans</li>
                  <li>• Prestations réelles facturées (lien direct TVA)</li>
                  <li>• Valorisation par expert indépendant</li>
                  <li>• Gouvernance active et organes effectifs</li>
                  <li>• Objectifs économiques démontrables</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h4 className="text-lg font-normal text-slate-900 mb-3">Jurisprudence clé</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">CE 01/02/2018 :</strong> Application de l'amendement Charasse confirmée pour limiter les optimisations abusives.</span>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">CE 12/07/2017 :</strong> Sanctionne les apports-cession avec soulte instrumentalisée.</span>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">QPC 2018-701 :</strong> Constitutionnalité de l'amendement Charasse confirmée.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist */}
          <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-light mb-6">Checklist de sécurisation</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                <span className="font-light">Business plan détaillé (5-7 ans)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                <span className="font-light">Modélisation fiscale avec ATAD 30%</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                <span className="font-light">Valorisation par expert indépendant</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                <span className="font-light">Substance de la holding (moyens, équipe)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                <span className="font-light">Documentation des prestations (TVA)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                <span className="font-light">Gouvernance post-deal (éviter Charasse)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                <span className="font-light">Covenants bancaires réalistes</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                <span className="font-light">Pacte d'actionnaires solide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cas pratique */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Exemple chiffré de LBO</h2>
            <p className="text-xl font-light text-slate-600">
              Illustration d'une acquisition avec les flux financiers et fiscaux
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-light text-slate-900 mb-6">Hypothèses de l'opération</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">Valeur d'acquisition</span>
                  <span className="font-normal text-slate-900">10 000 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">Fonds propres (35%)</span>
                  <span className="font-normal text-slate-900">3 500 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">Dette bancaire (65%)</span>
                  <span className="font-normal text-amber-600">6 500 000 €</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">EBITDA annuel (OpCo)</span>
                  <span className="font-normal text-slate-900">2 000 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">Taux d'intérêt dette</span>
                  <span className="font-normal text-slate-900">5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">Dividendes annuels</span>
                  <span className="font-normal text-slate-900">1 200 000 €</span>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-light text-slate-900 mb-4">Année 1 : Flux et fiscalité</h4>
            
            <div className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
              <h5 className="text-lg font-normal text-slate-900 mb-4">Chez HoldCo (holding)</h5>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">Dividendes reçus d'OpCo</span>
                  <span className="font-normal text-slate-900">1 200 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">QPFC 5% (régime mère-fille)</span>
                  <span className="font-normal text-slate-900">60 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">IS sur QPFC (25%)</span>
                  <span className="font-normal text-red-600">-15 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">Intérêts d'emprunt (5%)</span>
                  <span className="font-normal text-red-600">-325 000 €</span>
                </div>
                <div className="border-t border-slate-200 pt-3 flex justify-between">
                  <span className="text-slate-900 font-normal">Disponible pour rembourser capital</span>
                  <span className="text-xl font-light text-green-600">860 000 €</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-6">
              <h5 className="text-lg font-normal text-blue-900 mb-3">Vérification du plafond ATAD (30%)</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-800 font-light">EBITDA fiscal (OpCo)</span>
                  <span className="font-normal text-blue-900">2 000 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-800 font-light">Plafond déductible (30%)</span>
                  <span className="font-normal text-blue-900">600 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-800 font-light">Intérêts effectifs</span>
                  <span className="font-normal text-blue-900">325 000 €</span>
                </div>
                <div className="border-t border-blue-200 pt-2 flex justify-between">
                  <span className="font-normal text-blue-900">Intérêts déductibles</span>
                  <span className="text-lg font-light text-green-600">✓ OK ({`<`} plafond)</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h5 className="text-lg font-normal text-slate-900 mb-3">Remboursement de la dette</h5>
              <p className="text-sm font-light text-slate-700 mb-4">
                Avec 860 000 € disponibles annuellement, la dette de 6 500 000 € sera remboursée en environ <strong className="font-normal text-slate-900">7-8 ans</strong> (en tenant compte de la décroissance des intérêts).
              </p>
              <div className="bg-slate-50 rounded p-3 text-sm">
                <div className="font-normal text-slate-900 mb-2">Retour sur investissement :</div>
                <p className="text-slate-700 font-light">
                  Si l'entreprise est revendue 12M€ après 7 ans, les actionnaires auront investi 3,5M€ et récupéreront 12M€, soit un TRI de <strong className="font-normal text-amber-600">≈ 19%</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-8 text-white">
            <h4 className="text-xl font-light mb-4">Points clés de ce montage</h4>
            <ul className="space-y-3 font-light leading-relaxed opacity-90">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">→</span>
                <span>Le régime mère-fille permet un frottement fiscal minimal (1,25%)</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">→</span>
                <span>Les intérêts sont entièrement déductibles ({`<`} 30% EBITDA)</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">→</span>
                <span>L'effet de levier permet un TRI attractif pour les investisseurs</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">→</span>
                <span>La dette est remboursée par les flux de l'entreprise elle-même</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Questions fréquentes</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-md transition-all">
              <h3 className="text-lg font-normal text-slate-900 mb-3">Quelle est la différence entre LBO, LMBO et OBO ?</h3>
              <p className="text-slate-700 font-light leading-relaxed">
                Le LBO est le terme générique. Le LMBO (Management Buy-Out) désigne un rachat par les managers. L'OBO (Owner Buy-Out) est une vente à soi-même via une holding que le dirigeant contrôle. Le FBO est une transmission familiale via LBO.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-md transition-all">
              <h3 className="text-lg font-normal text-slate-900 mb-3">Comment fonctionne le régime mère-fille ?</h3>
              <p className="text-slate-700 font-light leading-relaxed">
                Les dividendes remontés de la société cible vers la holding sont quasi-exonérés d'IS (seulement 1,25% de frottement via la QPFC de 5%). Conditions : détention ≥5% du capital pendant 2 ans minimum.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-md transition-all">
              <h3 className="text-lg font-normal text-slate-900 mb-3">Qu'est-ce que l'amendement Charasse ?</h3>
              <p className="text-slate-700 font-light leading-relaxed">
                Dispositif anti-abus qui empêche la déduction des intérêts via l'intégration fiscale si le cédant conserve le contrôle (seul ou de concert) de la holding acheteuse. Objectif : éviter les montages "vente à soi-même".
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-md transition-all">
              <h3 className="text-lg font-normal text-slate-900 mb-3">Quelle est la limite de déductibilité des intérêts en 2025 ?</h3>
              <p className="text-slate-700 font-light leading-relaxed">
                Depuis la transposition de la directive ATAD, les charges financières nettes sont déductibles dans la limite de 30% de l'EBITDA fiscal. Au-delà, les intérêts ne sont pas déductibles et alourdissent la charge fiscale.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-md transition-all">
              <h3 className="text-lg font-normal text-slate-900 mb-3">Comment sécuriser un LBO face au risque d'abus de droit ?</h3>
              <p className="text-slate-700 font-light leading-relaxed">
                Substance de la holding (moyens, équipe), business plan documenté, valorisation par expert, prestations réelles facturées, gouvernance active, objectifs économiques démontrables. La documentation est essentielle.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-md transition-all">
              <h3 className="text-lg font-normal text-slate-900 mb-3">Quel est le niveau d'endettement optimal ?</h3>
              <p className="text-slate-700 font-light leading-relaxed">
                Généralement 60-70% de dette pour 30-40% de fonds propres. Mais l'optimal dépend de la capacité de l'entreprise à générer des flux stables, du secteur, et surtout du respect du plafond ATAD (30% EBITDA).
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
            Prêt à structurer votre LBO ?
          </h2>
          <p className="text-xl text-slate-300 font-light mb-12 leading-relaxed">
            Accompagnement complet : faisabilité, structuration juridique, modélisation fiscale et sécurisation du montage
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="https://taap.it/i3gsEr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-base font-light transition-all hover:shadow-xl"
            >
              Je veux plus d'informations
            </a>
            <a 
              href="tel:0607963135" 
              className="inline-flex items-center border border-white/20 text-white px-8 py-4 text-base font-light hover:bg-white/10 transition-all"
            >
              06 07 96 31 35
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-slate-400 font-light">
            <div className="flex items-center space-x-2">
              <CheckCircle size={18} className="text-amber-500" />
              <span>Expert certifié</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={18} className="text-amber-500" />
              <span>Modélisation fiscale</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={18} className="text-amber-500" />
              <span>Sécurisation juridique</span>
            </div>
          </div>
        </div>
      </section>

      <Footer currentPage="gerer" />
    </div>
  )
}