import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, BookOpen, ExternalLink, CheckCircle, AlertTriangle, TrendingUp, RefreshCw, Shield, DollarSign } from 'lucide-react'

export default function ReportImposition150BterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-blue-700 to-cyan-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm mb-8 text-indigo-100">
            <a href="/" className="hover:text-white transition">Accueil</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/legal" className="hover:text-white transition">Légal</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-light">Report d'imposition – Article 150-0 B ter</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-indigo-500/20 px-4 py-2 rounded-full mb-6">
                <RefreshCw className="w-5 h-5" />
                <span className="text-sm font-light">Report d'imposition obligatoire</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
                Report d'imposition – Article 150-0 B ter du CGI
              </h1>
              
              <p className="text-xl text-indigo-50 font-light mb-8 leading-relaxed">
                Mécanisme de report obligatoire pour les plus-values réalisées lors de l'apport de titres à une société contrôlée par l'apporteur.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-light mb-1">0€</div>
                  <div className="text-sm text-indigo-100 font-light">Impôt immédiat</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-light mb-1">60%</div>
                  <div className="text-sm text-indigo-100 font-light">Réinvestissement min.</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-light mb-1">3 ans</div>
                  <div className="text-sm text-indigo-100 font-light">Délai réinvestissement</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-cyan-500 rounded-2xl blur-3xl opacity-30"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <RefreshCw className="w-32 h-32 text-indigo-100 mx-auto mb-4" />
                  <p className="text-center text-indigo-50 font-light">
                    Report d'imposition sur apport de titres
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
            <div className="flex items-start space-x-3">
              <BookOpen className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-light text-lg text-slate-900 mb-2">Définition officielle BOFiP</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  L'article 150-0 B ter du CGI prévoit un mécanisme de <strong>report d'imposition obligatoire</strong> pour les plus-values réalisées lors de l'apport de titres à une société contrôlée par l'apporteur. Ce report permet de ne pas payer immédiatement l'impôt sur la plus-value réalisée lors de l'apport, tant que certains événements ne surviennent pas (cession, remboursement, annulation des titres reçus en échange).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sommaire */}
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-light text-slate-900 mb-6">Sommaire</h2>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <nav className="space-y-3">
              <a href="#operations-concernees" className="flex items-center justify-between p-3 hover:bg-indigo-50 rounded-lg transition group">
                <span className="font-light text-slate-700 group-hover:text-indigo-700">1. Opérations concernées</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
              </a>
              <a href="#mecanisme" className="flex items-center justify-between p-3 hover:bg-indigo-50 rounded-lg transition group">
                <span className="font-light text-slate-700 group-hover:text-indigo-700">2. Mécanisme du report obligatoire</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
              </a>
              <a href="#chaine" className="flex items-center justify-between p-3 hover:bg-indigo-50 rounded-lg transition group">
                <span className="font-light text-slate-700 group-hover:text-indigo-700">3. Chaîne d'opérations successives</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
              </a>
              <a href="#exemples" className="flex items-center justify-between p-3 hover:bg-indigo-50 rounded-lg transition group">
                <span className="font-light text-slate-700 group-hover:text-indigo-700">4. Exemples pratiques</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
              </a>
              <a href="#vigilance" className="flex items-center justify-between p-3 hover:bg-indigo-50 rounded-lg transition group">
                <span className="font-light text-slate-700 group-hover:text-indigo-700">5. Points de vigilance</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Opérations concernées */}
      <section id="operations-concernees" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-indigo-700" />
            </div>
            <h2 className="text-3xl font-light text-slate-900">Opérations concernées</h2>
          </div>

          <p className="text-slate-600 font-light leading-relaxed mb-6">
            L'article 150-0 B ter s'applique aux <strong>apports de titres</strong> réalisés par des personnes physiques dans des conditions spécifiques :
          </p>

          <div className="bg-indigo-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-light text-slate-900 mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 text-indigo-600 mr-2" />
              Conditions d'application
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light"><strong>Apport de titres</strong> par une personne physique à une société</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light">Société bénéficiaire <strong>soumise à l'impôt sur les sociétés (IS)</strong></p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light">L'apporteur doit <strong>contrôler</strong> la société bénéficiaire de l'apport</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light">L'apport génère une <strong>plus-value imposable</strong></p>
              </div>
            </div>
          </div>

          {/* Notion de contrôle */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <h3 className="text-xl font-light text-slate-900 mb-4">💡 Notion de contrôle</h3>
            <p className="text-slate-600 font-light leading-relaxed">
              Le contrôle est caractérisé par la détention, directe ou indirecte, de plus de <strong>50 % des droits de vote</strong> ou des droits dans les bénéfices sociaux de la société bénéficiaire. Cette condition doit être respectée au moment de l'apport et durant toute la période de report.
            </p>
          </div>

          {/* Références BOFiP */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://bofip.impots.gouv.fr/bofip/4765-PGP.html/identifiant=BOI-RPPM-PVBMI-30-10-60-20-20120912" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition shadow-md"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="font-light">BOI-RPPM-PVBMI-30-10-60-20</span>
            </a>
            <a 
              href="https://bofip.impots.gouv.fr/bofip/4767-PGP.html/identifiant=BOI-RPPM-PVBMI-30-10-60-40-20120912" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition shadow-md"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="font-light">BOI-RPPM-PVBMI-30-10-60-40</span>
            </a>
          </div>
        </div>
      </section>

      {/* Mécanisme du report */}
      <section id="mecanisme" className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <RefreshCw className="w-6 h-6 text-blue-700" />
            </div>
            <h2 className="text-3xl font-light text-slate-900">Mécanisme du report obligatoire</h2>
          </div>

          <p className="text-slate-600 font-light leading-relaxed mb-8">
            Le report d'imposition s'applique <strong>automatiquement</strong> (de plein droit) lors de l'apport de titres à une société contrôlée. Le contribuable n'a pas à exercer d'option particulière.
          </p>

          {/* Fonctionnement */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-emerald-700" />
                </div>
                <h4 className="font-light text-lg text-slate-900">Au moment de l'apport</h4>
              </div>
              <ul className="space-y-2 text-slate-600 font-light">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>La plus-value est calculée normalement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Aucun impôt n'est dû immédiatement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>La plus-value est placée en report</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Déclaration obligatoire (annexe 2074)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <DollarSign className="w-5 h-5 text-amber-700" />
                </div>
                <h4 className="font-light text-lg text-slate-900">Fin du report</h4>
              </div>
              <ul className="space-y-2 text-slate-600 font-light">
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Cession des titres reçus en échange</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Rachat ou remboursement des titres</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Annulation des titres</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Perte du contrôle de la société</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Schéma simplifié */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-xl font-light text-slate-900 mb-6 text-center">Schéma simplifié du report d'imposition</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-4">
              {/* Étape 1 */}
              <div className="flex-1 text-center">
                <div className="bg-indigo-100 rounded-lg p-4 mb-3">
                  <TrendingUp className="w-8 h-8 text-indigo-700 mx-auto" />
                </div>
                <h4 className="font-light text-slate-900 mb-2">1. Apport de titres</h4>
                <p className="text-sm text-slate-600 font-light">À une société contrôlée</p>
              </div>

              <ChevronRight className="hidden md:block w-6 h-6 text-slate-400" />

              {/* Étape 2 */}
              <div className="flex-1 text-center">
                <div className="bg-emerald-100 rounded-lg p-4 mb-3">
                  <RefreshCw className="w-8 h-8 text-emerald-700 mx-auto" />
                </div>
                <h4 className="font-light text-slate-900 mb-2">2. Report d'imposition</h4>
                <p className="text-sm text-slate-600 font-light">Aucun impôt immédiat</p>
              </div>

              <ChevronRight className="hidden md:block w-6 h-6 text-slate-400" />

              {/* Étape 3 */}
              <div className="flex-1 text-center">
                <div className="bg-amber-100 rounded-lg p-4 mb-3">
                  <DollarSign className="w-8 h-8 text-amber-700 mx-auto" />
                </div>
                <h4 className="font-light text-slate-900 mb-2">3. Événement déclencheur</h4>
                <p className="text-sm text-slate-600 font-light">Cession, rachat, etc.</p>
              </div>

              <ChevronRight className="hidden md:block w-6 h-6 text-slate-400" />

              {/* Étape 4 */}
              <div className="flex-1 text-center">
                <div className="bg-red-100 rounded-lg p-4 mb-3">
                  <AlertTriangle className="w-8 h-8 text-red-700 mx-auto" />
                </div>
                <h4 className="font-light text-slate-900 mb-2">4. Imposition</h4>
                <p className="text-sm text-slate-600 font-light">Paiement de l'impôt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chaîne d'opérations */}
      <section id="chaine" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Shield className="w-6 h-6 text-purple-700" />
            </div>
            <h2 className="text-3xl font-light text-slate-900">Chaîne d'opérations successives</h2>
          </div>

          <p className="text-slate-600 font-light leading-relaxed mb-8">
            Le report d'imposition peut être maintenu lors d'opérations successives d'échange, d'apport ou de fusion, tant que les titres ne sont pas cédés et que les conditions restent remplies.
          </p>

          {/* Opérations neutres */}
          <div className="bg-purple-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-light text-slate-900 mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 text-purple-600 mr-2" />
              Opérations permettant le maintien du report
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light"><strong>Échange de titres</strong> sans soulte (ou avec soulte limitée)</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light"><strong>Fusion</strong> de la société bénéficiaire de l'apport</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light"><strong>Scission</strong> de la société bénéficiaire</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light"><strong>Apport partiel d'actif</strong> répondant aux conditions</p>
              </div>
            </div>
          </div>

          {/* Cas particulier : apport-cession */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-xl font-light text-slate-900 mb-4">⚠️ Cas particulier : apport-cession</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-4">
              Si la société holding <strong>cède les titres reçus</strong> lors de l'apport initial, le maintien du report d'imposition est conditionné à un <strong>réinvestissement économique réel</strong> :
            </p>
            
            <div className="bg-amber-50 rounded-lg p-4 space-y-3">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light">Au moins <strong>60 % du produit de cession</strong> doit être réinvesti</p>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light">Dans une société <strong>opérationnelle contrôlée</strong> par la holding</p>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light">Dans un <strong>délai de 3 ans</strong> à compter de la cession</p>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light">Respect des <strong>modalités de déclaration</strong> précises du BOFiP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exemples pratiques */}
      <section id="exemples" className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-slate-900 mb-8">Exemples pratiques</h2>
          
          {/* Exemple 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-emerald-700" />
              </div>
              <div className="flex-1">
                <h4 className="font-light text-lg text-slate-900 mb-3">Exemple 1 : Apport à une société holding contrôlée, maintien du report</h4>
                
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-slate-600 font-light mb-2"><strong>Année N :</strong></p>
                    <p className="text-slate-600 font-light">
                      Un entrepreneur apporte ses titres de la société « <strong>A</strong> » à une holding « <strong>B</strong> » qu'il contrôle à plus de 50 %. La plus-value en N est placée en <strong>report d'imposition</strong> grâce à l'article 150-0 B ter.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-slate-600 font-light mb-2"><strong>Année N+3 :</strong></p>
                    <p className="text-slate-600 font-light">
                      La société « B » fusionne sans soulte avec « <strong>C</strong> ». Les titres « C » reçus en échange <strong>prolongent le report d'imposition</strong>. Les plus-values restent en report tant qu'aucun événement de cession ou de remboursement n'intervient.
                    </p>
                  </div>

                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4">
                    <p className="text-slate-700 font-light text-sm">
                      <strong>✅ Résultat :</strong> Le report d'imposition est maintenu grâce à la fusion, opération neutre fiscalement. L'entrepreneur ne paie toujours aucun impôt sur la plus-value d'apport initiale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Exemple 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-lg flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-700" />
              </div>
              <div className="flex-1">
                <h4 className="font-light text-lg text-slate-900 mb-3">Exemple 2 : Cession partielle, fin du report</h4>
                
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-slate-600 font-light">
                      En <strong>N+5</strong>, l'apporteur cède <strong>25 % des titres « C »</strong> reçus lors de l'apport initial (après la fusion de l'exemple 1).
                    </p>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                    <p className="text-slate-700 font-light text-sm mb-3">
                      <strong>⚠️ Conséquence fiscale :</strong>
                    </p>
                    <p className="text-slate-700 font-light text-sm">
                      Le report d'imposition <strong>expire à hauteur de la cession</strong>. L'impôt sur la plus-value doit être payé sur la fraction des titres cédés (25 %), calculé sur la plus-value d'apport initiale correspondante.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-slate-600 font-light text-sm">
                      <strong>Calcul simplifié :</strong> Si la plus-value d'apport initiale était de 400 000 €, l'imposition portera sur 100 000 € (25 % × 400 000 €) au titre de l'année N+5.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Exemple 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-3 rounded-lg flex-shrink-0">
                <RefreshCw className="w-6 h-6 text-indigo-700" />
              </div>
              <div className="flex-1">
                <h4 className="font-light text-lg text-slate-900 mb-3">Exemple 3 : Réinvestissement, maintien du report (apport-cession)</h4>
                
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <p className="text-slate-600 font-light mb-3">
                      La société holding « <strong>B</strong> » cède les titres « A » reçus lors de l'apport initial pour un montant de <strong>1 000 000 €</strong>.
                    </p>
                    <p className="text-slate-600 font-light">
                      Pour maintenir le report d'imposition, la holding doit réinvestir <strong>au moins 600 000 €</strong> (60 % × 1 000 000 €) dans une société opérationnelle contrôlée, dans un délai de <strong>3 ans</strong>.
                    </p>
                  </div>

                  <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4">
                    <p className="text-slate-700 font-light text-sm mb-3">
                      <strong>✅ Si réinvestissement respecté :</strong>
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-1" />
                        <p className="text-slate-700 font-light text-sm">La plus-value d'apport reste en report d'imposition</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-1" />
                        <p className="text-slate-700 font-light text-sm">Aucun impôt à payer immédiatement</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-1" />
                        <p className="text-slate-700 font-light text-sm">Déclaration obligatoire des modalités de réinvestissement</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <p className="text-slate-700 font-light text-sm mb-2">
                      <strong>❌ Si réinvestissement non respecté :</strong>
                    </p>
                    <p className="text-slate-700 font-light text-sm">
                      Le report expire et l'impôt devient immédiatement exigible sur la plus-value d'apport initiale, majoré de l'intérêt de retard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points de vigilance */}
      <section id="vigilance" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-red-100 p-3 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-700" />
            </div>
            <h2 className="text-3xl font-light text-slate-900">Points de vigilance pour la pratique</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <h4 className="font-light text-lg text-slate-900 mb-2">Application automatique</h4>
                  <p className="text-slate-600 font-light">
                    Le report s'applique <strong>de plein droit</strong> à la plus-value sur l'apport de titres à une société contrôlée. Aucune option n'est à exercer, mais une déclaration spécifique (annexe 2074) est obligatoire.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-700" />
                </div>
                <div>
                  <h4 className="font-light text-lg text-slate-900 mb-2">Événements mettant fin au report</h4>
                  <p className="text-slate-600 font-light mb-3">
                    Le report prend fin en cas de :
                  </p>
                  <ul className="space-y-2 text-slate-600 font-light">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span><strong>Cession</strong> des titres reçus en échange (totale ou partielle)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span><strong>Rachat</strong> ou <strong>remboursement</strong> des titres</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span><strong>Annulation</strong> des titres</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span><strong>Perte du contrôle</strong> de la société bénéficiaire</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                  <RefreshCw className="w-5 h-5 text-purple-700" />
                </div>
                <div>
                  <h4 className="font-light text-lg text-slate-900 mb-2">Chaîne de report</h4>
                  <p className="text-slate-600 font-light">
                    Le report est maintenu lors d'<strong>opérations successives</strong> (échanges, fusions, scissions) si les conditions restent remplies. La traçabilité de la plus-value d'origine doit être conservée tout au long de la chaîne.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
                  <Shield className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h4 className="font-light text-lg text-slate-900 mb-2">Apport-cession et réinvestissement</h4>
                  <p className="text-slate-600 font-light">
                    En cas d'apport-cession, le maintien du report exige un <strong>réinvestissement économique réel</strong> : au moins 60 % du produit de cession doit être réinvesti dans une société opérationnelle contrôlée, dans un délai de 3 ans. Le non-respect entraîne l'imposition immédiate avec intérêts de retard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Références BOFiP */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-3 rounded-lg flex-shrink-0">
                <BookOpen className="w-6 h-6 text-indigo-700" />
              </div>
              <div className="flex-1">
                <h3 className="font-light text-xl text-slate-900 mb-3">Pour approfondir</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-4">
                  Consultez les références officielles du BOFiP pour une analyse détaillée de l'article 150-0 B ter du CGI et de ses modalités d'application :
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://bofip.impots.gouv.fr/bofip/4765-PGP.html/identifiant=BOI-RPPM-PVBMI-30-10-60-20-20120912" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition shadow-md"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-light">BOI-RPPM-PVBMI-30-10-60-20</span>
                  </a>
                  <a 
                    href="https://bofip.impots.gouv.fr/bofip/4767-PGP.html/identifiant=BOI-RPPM-PVBMI-30-10-60-40-20120912" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition shadow-md"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-light">BOI-RPPM-PVBMI-30-10-60-40</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-4">Besoin d'un accompagnement sur le report d'imposition ?</h2>
          <p className="text-xl text-indigo-50 font-light mb-8 max-w-2xl mx-auto">
            Nos experts vous conseillent sur les stratégies d'apport de titres et vous accompagnent dans la gestion du report d'imposition.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center space-x-2 bg-white text-indigo-700 px-8 py-4 rounded-lg hover:bg-indigo-50 transition shadow-lg font-light text-lg"
          >
            <span>Prendre rendez-vous</span>
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}