import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, BookOpen, ExternalLink, CheckCircle, Calculator, Building2, TrendingUp, FileText, Scale } from 'lucide-react'

export default function RegimeMereFilleIntegrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm mb-8 text-emerald-100">
            <a href="/" className="hover:text-white transition">Accueil</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/legal" className="hover:text-white transition">Légal</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-light">Régime mère-fille et intégration fiscale</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-emerald-500/20 px-4 py-2 rounded-full mb-6">
                <Scale className="w-5 h-5" />
                <span className="text-sm font-light">Références juridiques officielles</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
                Régime mère-fille et intégration fiscale
              </h1>
              
              <p className="text-xl text-emerald-50 font-light mb-8 leading-relaxed">
                Définitions officielles issues du BOFiP des principaux régimes fiscaux applicables aux holdings : régime mère-fille et intégration fiscale.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-light mb-1">5%</div>
                  <div className="text-sm text-emerald-100 font-light">Participation minimale</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-light mb-1">95%</div>
                  <div className="text-sm text-emerald-100 font-light">Intégration fiscale</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-light mb-1">3</div>
                  <div className="text-sm text-emerald-100 font-light">Articles du CGI</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl blur-3xl opacity-30"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <Scale className="w-32 h-32 text-emerald-100 mx-auto mb-4" />
                  <p className="text-center text-emerald-50 font-light">
                    Références BOFiP officielles
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
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
            <div className="flex items-start space-x-3">
              <BookOpen className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-light text-lg text-slate-900 mb-2">Bloc Légal – Régimes fiscaux des holdings</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  Ce bloc présente les définitions officielles issues du BOFiP des principaux régimes fiscaux applicables aux holdings. Pour chaque disposition, la référence BOFiP cliquable est indiquée, avec des exemples précis pour illustrer les situations.
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
              <a href="#article-145" className="flex items-center justify-between p-3 hover:bg-emerald-50 rounded-lg transition group">
                <span className="font-light text-slate-700 group-hover:text-emerald-700">1. Article 145 du CGI – Régime mère-fille</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600" />
              </a>
              <a href="#article-216" className="flex items-center justify-between p-3 hover:bg-emerald-50 rounded-lg transition group">
                <span className="font-light text-slate-700 group-hover:text-emerald-700">2. Article 216 du CGI – Quote-part de frais et charges</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600" />
              </a>
              <a href="#article-223" className="flex items-center justify-between p-3 hover:bg-emerald-50 rounded-lg transition group">
                <span className="font-light text-slate-700 group-hover:text-emerald-700">3. Article 223 A et suivants – Intégration fiscale</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600" />
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Article 145 - Régime mère-fille */}
      <section id="article-145" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-emerald-100 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-emerald-700" />
            </div>
            <h2 className="text-3xl font-light text-slate-900">Article 145 du CGI – Régime mère-fille</h2>
          </div>

          {/* Définition */}
          <div className="mb-8">
            <h3 className="text-xl font-light text-slate-900 mb-4">Définition</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-6">
              Ce régime permet à une société mère soumise à l'IS détenant au moins 5 % du capital et des droits de vote d'une filiale (également soumise à l'IS) d'exonérer la quasi-totalité des dividendes reçus de cette dernière, afin d'éviter la double imposition. Le régime s'applique quels que soient la forme juridique et le lieu du siège social de la filiale, tant que toutes les conditions sont remplies.
            </p>

            {/* Référence BOFiP */}
            <a 
              href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069577/LEGISCTA000006199175/#LEGISCTA000006199175" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition shadow-md"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="font-light">Consulter article 145 du CGI</span>
            </a>
          </div>

          {/* Conditions */}
          <div className="bg-emerald-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-light text-slate-900 mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 text-emerald-600 mr-2" />
              Conditions d'application
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light">Participation d'au moins <strong>5 % du capital</strong> de la filiale</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light">Détention d'au moins <strong>5 % des droits de vote</strong></p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light">Les titres doivent donner droit à <strong>dividende et à vote</strong></p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light">Mère et filiale soumises à l'<strong>impôt sur les sociétés (IS)</strong></p>
              </div>
            </div>
          </div>

          {/* Exemples */}
          <div className="space-y-6">
            <h3 className="text-xl font-light text-slate-900 mb-4">Exemples pratiques</h3>
            
            {/* Exemple 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                  <Calculator className="w-6 h-6 text-emerald-700" />
                </div>
                <div className="flex-1">
                  <h4 className="font-light text-lg text-slate-900 mb-3">Exemple 1 : Holding française détenant une filiale française</h4>
                  <p className="text-slate-600 font-light leading-relaxed mb-4">
                    Une société SAS « <strong>Holding Alpha</strong> » détient <strong>10 % du capital et des droits de vote</strong> d'une filiale « Filiale Beta ». Si Alpha reçoit <strong>100 000 €</strong> de dividendes de Beta :
                  </p>
                  
                  <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 font-light">Dividendes reçus</span>
                      <span className="font-light text-slate-900">100 000 €</span>
                    </div>
                    <div className="flex justify-between items-center text-emerald-700">
                      <span className="font-light">Exonération (95 %)</span>
                      <span className="font-light">- 95 000 €</span>
                    </div>
                    <div className="border-t border-slate-200 pt-2 flex justify-between items-center">
                      <span className="font-light text-slate-900">Quote-part imposable (5 %)</span>
                      <span className="font-light text-slate-900"><strong>5 000 €</strong></span>
                    </div>
                  </div>
                  
                  <p className="text-slate-500 font-light text-sm mt-3 italic">
                    → Seuls 5 000 € sont soumis à l'IS au titre de la quote-part de frais et charges.
                  </p>
                </div>
              </div>
            </div>

            {/* Exemple 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                  <Building2 className="w-6 h-6 text-emerald-700" />
                </div>
                <div className="flex-1">
                  <h4 className="font-light text-lg text-slate-900 mb-3">Exemple 2 : Holding française détenant une filiale étrangère (UE)</h4>
                  <p className="text-slate-600 font-light leading-relaxed mb-4">
                    Une société mère « <strong>Entreprise France</strong> », soumise à l'IS, détient <strong>8 % du capital</strong> d'une filiale espagnole également soumise à l'IS local. Les dividendes encaissés sont placés sous le régime mère-fille et bénéficient de l'exonération.
                  </p>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                    <p className="text-slate-700 font-light text-sm">
                      <strong>💡 Point important :</strong> Le régime s'applique même si la filiale est située dans un autre pays de l'UE, à condition que les titres remplissent les conditions de participation et de droit de vote.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article 216 - Quote-part */}
      <section id="article-216" className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-amber-100 p-3 rounded-lg">
              <Calculator className="w-6 h-6 text-amber-700" />
            </div>
            <h2 className="text-3xl font-light text-slate-900">Article 216 du CGI – Quote-part de frais et charges</h2>
          </div>

          {/* Définition */}
          <div className="mb-8">
            <h3 className="text-xl font-light text-slate-900 mb-4">Définition</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-6">
              Ce dispositif complète le régime mère-fille : même si les dividendes de filiale sont exonérés à 95 %, la société mère doit réintégrer dans son résultat imposable une <strong>quote-part forfaitaire de 5 %</strong> au titre des frais et charges.
            </p>

            {/* Référence BOFiP */}
            <a 
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042159298/2020-07-25" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition shadow-md"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="font-light">Consulter article 216 du CGI</span>
            </a>
          </div>

          {/* Tableau récapitulatif */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-slate-700 font-light">Élément</th>
                  <th className="px-6 py-4 text-left text-slate-700 font-light">Traitement fiscal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 text-slate-600 font-light">Dividendes reçus</td>
                  <td className="px-6 py-4 text-emerald-700 font-light">95 % exonérés</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-600 font-light">Quote-part de frais</td>
                  <td className="px-6 py-4 text-amber-700 font-light">5 % imposables à l'IS</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-600 font-light">Justification</td>
                  <td className="px-6 py-4 text-slate-700 font-light">Estimation forfaitaire des frais de gestion</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Exemple précis */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-lg flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-amber-700" />
              </div>
              <div className="flex-1">
                <h4 className="font-light text-lg text-slate-900 mb-3">Exemple de calcul détaillé</h4>
                <p className="text-slate-600 font-light leading-relaxed mb-4">
                  Une holding perçoit <strong>200 000 €</strong> de dividendes sous le régime mère-fille :
                </p>
                
                <div className="bg-slate-50 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-light">Dividendes perçus</span>
                    <span className="font-light text-slate-900">200 000 €</span>
                  </div>
                  
                  <div className="border-t border-slate-200 pt-3">
                    <div className="flex justify-between items-center text-emerald-700 mb-2">
                      <span className="font-light">Montant exonéré (95 %)</span>
                      <span className="font-light">190 000 €</span>
                    </div>
                    <div className="flex justify-between items-center text-amber-700">
                      <span className="font-light">Quote-part imposable (5 %)</span>
                      <span className="font-light"><strong>10 000 €</strong></span>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-light text-slate-900">IS à payer (25 % sur 10 000 €)</span>
                      <span className="font-light text-slate-900"><strong>2 500 €</strong></span>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-500 font-light text-sm mt-4 italic">
                  → La quote-part forfaitaire de 5 % correspond à l'estimation des frais nécessaires à la gestion de la participation (expertise comptable, juridique, administrative).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article 223 A - Intégration fiscale */}
      <section id="article-223" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Building2 className="w-6 h-6 text-blue-700" />
            </div>
            <h2 className="text-3xl font-light text-slate-900">Article 223 A et suivants du CGI – Intégration fiscale</h2>
          </div>

          {/* Définition */}
          <div className="mb-8">
            <h3 className="text-xl font-light text-slate-900 mb-4">Définition</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-6">
              L'intégration fiscale permet à une société mère soumise à l'IS, détenant au moins <strong>95 % au capital de ses filiales</strong>, de former un « groupe fiscal » pour lequel l'impôt sur les sociétés est calculé sur le résultat global du groupe. Les pertes et profits des sociétés membres sont ainsi consolidés et mutualisés.
            </p>

            {/* Référence BOFiP */}
            <a 
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000034387974" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="font-light">Consulter article 223 du CGI</span>
            </a>
          </div>

          {/* Conditions */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-light text-slate-900 mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
              Conditions d'application
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light">Détention d'au moins <strong>95 % du capital</strong> de chaque filiale intégrée</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light">Toutes les sociétés du groupe doivent être soumises à l'<strong>IS</strong></p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light">Option exercée par la société mère auprès de l'administration fiscale</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-light">Même date de clôture des exercices pour toutes les sociétés</p>
              </div>
            </div>
          </div>

          {/* Avantages */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-emerald-700" />
                </div>
                <h4 className="font-light text-lg text-slate-900">Avantages</h4>
              </div>
              <ul className="space-y-2 text-slate-600 font-light">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Compensation des résultats (profits et pertes)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Neutralisation des flux intra-groupe</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Économie d'impôt immédiate</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Simplification de la gestion fiscale</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <Scale className="w-5 h-5 text-amber-700" />
                </div>
                <h4 className="font-light text-lg text-slate-900">Obligations</h4>
              </div>
              <ul className="space-y-2 text-slate-600 font-light">
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Déclaration consolidée unique</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Engagement minimal de 5 ans</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Suivi des opérations intra-groupe</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>Documentation comptable spécifique</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Exemple complet */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                <Calculator className="w-6 h-6 text-blue-700" />
              </div>
              <div className="flex-1">
                <h4 className="font-light text-lg text-slate-900 mb-3">Exemple pratique complet</h4>
                <p className="text-slate-600 font-light leading-relaxed mb-4">
                  La holding « <strong>Groupe Famille</strong> » détient <strong>98 %</strong> de « Entreprise A », « Entreprise B » et « Entreprise C ». En optant pour le régime d'intégration fiscale :
                </p>
                
                <div className="bg-slate-50 rounded-lg p-4 mb-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 font-light">Entreprise A (bénéfice)</span>
                      <span className="font-light text-emerald-700">+ 200 000 €</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 font-light">Entreprise B (bénéfice)</span>
                      <span className="font-light text-emerald-700">+ 80 000 €</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 font-light">Entreprise C (perte)</span>
                      <span className="font-light text-red-700">- 50 000 €</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 font-light">Groupe Famille (perte)</span>
                      <span className="font-light text-red-700">- 30 000 €</span>
                    </div>
                    
                    <div className="border-t-2 border-slate-300 pt-3 flex justify-between items-center">
                      <span className="font-light text-slate-900"><strong>Résultat fiscal du groupe</strong></span>
                      <span className="font-light text-slate-900"><strong>200 000 €</strong></span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 font-light">IS à 25 %</span>
                      <span className="font-light text-slate-900"><strong>50 000 €</strong></span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-slate-700 font-light text-sm mb-2">
                    <strong>🎯 Avantage fiscal :</strong>
                  </p>
                  <p className="text-slate-600 font-light text-sm">
                    Sans intégration fiscale, l'IS aurait été calculé séparément sur les bénéfices de A et B (280 000 €), soit 70 000 € d'IS. Avec l'intégration, les pertes de C et de Groupe Famille (-80 000 €) viennent réduire la base imposable, générant une <strong>économie d'impôt de 20 000 €</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remarque méthodologique */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                <BookOpen className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="font-light text-xl text-slate-900 mb-3">Remarque méthodologique</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  Pour chaque article du CGI cité dans cette page, les définitions et exemples sont directement appuyés sur les instructions officielles du <strong>Bulletin Officiel des Finances Publiques (BOFiP)</strong>, accessibles via les liens fournis pour consultation détaillée. Ces références constituent la doctrine administrative de l'administration fiscale française.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-4">Besoin d'un accompagnement personnalisé ?</h2>
          <p className="text-xl text-emerald-50 font-light mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent dans la mise en place de structures juridiques et fiscales optimisées pour votre holding.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center space-x-2 bg-white text-emerald-700 px-8 py-4 rounded-lg hover:bg-emerald-50 transition shadow-lg font-light text-lg"
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