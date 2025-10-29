import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, BookOpen, ExternalLink, CheckCircle, Calculator, Building2, TrendingUp, FileText, Scale, Users, Shield, Clock, AlertTriangle } from 'lucide-react'

export default function PacteDutreilArticle787BPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm mb-8 text-blue-100">
            <a href="/" className="hover:text-white transition">Accueil</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/legal" className="hover:text-white transition">Légal</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-light">Pacte Dutreil - Article 787 B du CGI</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-full mb-6">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-light">Dispositif de transmission d'entreprise</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
                Pacte Dutreil – Article 787 B du CGI
              </h1>
              
              <p className="text-xl text-blue-50 font-light mb-8 leading-relaxed">
                Exonération de 75 % des droits de mutation à titre gratuit pour la transmission d'entreprises familiales sous conditions d'engagement de conservation.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-light mb-1">75%</div>
                  <div className="text-sm text-blue-100 font-light">Exonération</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-light mb-1">6 ans</div>
                  <div className="text-sm text-blue-100 font-light">Engagement total</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-light mb-1">34%</div>
                  <div className="text-sm text-blue-100 font-light">Seuil minimal</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl blur-3xl opacity-30"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <Shield className="w-32 h-32 text-blue-100 mx-auto mb-4" />
                  <p className="text-center text-blue-50 font-light">
                    Protection de la transmission familiale
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
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <div className="flex items-start space-x-3">
              <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-light text-lg text-slate-900 mb-2">Le dispositif « Pacte Dutreil »</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  L'article 787 B du Code général des impôts (CGI), connu comme le dispositif du « Pacte Dutreil », permet une exonération de droits de mutation à titre gratuit à hauteur de <strong>75 % de la valeur des parts ou actions transmises</strong> d'une société exerçant une activité éligible (industrielle, commerciale, artisanale, agricole ou libérale), à condition que certaines exigences de conservation et de gestion soient respectées.
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
              <a href="#fonctionnement" className="flex items-center justify-between p-3 hover:bg-blue-50 rounded-lg transition group">
                <span className="font-light text-slate-700 group-hover:text-blue-700">1. Fonctionnement de l'article 787 B du CGI</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
              </a>
              <a href="#conditions" className="flex items-center justify-between p-3 hover:bg-blue-50 rounded-lg transition group">
                <span className="font-light text-slate-700 group-hover:text-blue-700">2. Conditions d'application</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
              </a>
              <a href="#engagement-collectif" className="flex items-center justify-between p-3 hover:bg-blue-50 rounded-lg transition group">
                <span className="font-light text-slate-700 group-hover:text-blue-700">3. Engagement collectif de conservation (2 ans)</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
              </a>
              <a href="#engagement-individuel" className="flex items-center justify-between p-3 hover:bg-blue-50 rounded-lg transition group">
                <span className="font-light text-slate-700 group-hover:text-blue-700">4. Engagement individuel de conservation (4 ans)</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
              </a>
              <a href="#engagement-repute" className="flex items-center justify-between p-3 hover:bg-blue-50 rounded-lg transition group">
                <span className="font-light text-slate-700 group-hover:text-blue-700">5. Engagement réputé acquis</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
              </a>
              <a href="#exemples-bofip" className="flex items-center justify-between p-3 hover:bg-blue-50 rounded-lg transition group">
                <span className="font-light text-slate-700 group-hover:text-blue-700">6. Exemples concrets tirés du BOFiP</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
              </a>
              <a href="#precisions-legifrance" className="flex items-center justify-between p-3 hover:bg-blue-50 rounded-lg transition group">
                <span className="font-light text-slate-700 group-hover:text-blue-700">7. Précisions de Legifrance et sites d'avocats fiscalistes</span>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Section 1 - Fonctionnement */}
      <section id="fonctionnement" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-blue-700" />
            </div>
            <h2 className="text-3xl font-light text-slate-900">Fonctionnement de l'article 787 B du CGI</h2>
          </div>

          {/* Définition */}
          <div className="mb-8">
            <h3 className="text-xl font-light text-slate-900 mb-4">Définition</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-6">
              L'article 787 B concerne uniquement la <strong>transmission à titre gratuit (donation ou succession)</strong> de sociétés dotées d'une activité industrielle, commerciale, artisanale, agricole ou libérale. Il exclut les sociétés principalement dédiées à la gestion d'un patrimoine mobilier ou immobilier ainsi que les activités accessoires. Les bénéficiaires doivent prendre des <strong>engagements de conservation</strong> de leurs titres et au moins l'un d'eux doit exercer une fonction de direction dans la société.
            </p>

            {/* Référence Legifrance */}
            <a 
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047623071" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md mb-6"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="font-light">Consulter l'article 787 B sur Legifrance</span>
            </a>

            {/* Extraits officiels du code */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
              <h4 className="font-light text-lg text-slate-900 mb-3 flex items-center">
                <Scale className="w-5 h-5 text-blue-600 mr-2" />
                Extrait officiel de l'article 787 B du CGI
              </h4>
              <div className="space-y-4 text-sm text-slate-700 font-light leading-relaxed">
                <p className="italic bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  « Les parts ou les actions d'une société ayant une activité industrielle, commerciale, artisanale, agricole ou libérale transmises par décès ou entre vifs sont, à la demande expresse des ayants cause ou des donataires, exonérées de droits de mutation par décès ou de droits de donation, à concurrence de 75 % de leur valeur, à la double condition que ces parts ou actions aient fait l'objet d'un engagement collectif de conservation et que le ou les donataires, héritiers ou légataires s'engagent à conserver les parts ou actions ainsi transmises. »
                </p>
                <p className="italic bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  « L'engagement collectif de conservation est réputé acquis lorsque les parts ou actions détenues depuis deux ans au moins, directement ou indirectement [...] par une personne physique seule ou avec son conjoint, le partenaire avec lequel elle est liée par un pacte civil de solidarité ou son concubin notoire atteignent les seuils prévus au premier alinéa du 1, sous réserve que cette personne [...] exerce depuis deux ans au moins dans la société concernée son activité professionnelle principale ou l'une des fonctions énumérées au 1° du 1 du III de l'article 975 lorsque la société est soumise à l'impôt sur les sociétés. »
                </p>
              </div>
            </div>
          </div>

          {/* Principe de base */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-light text-slate-900 mb-4">Principe de base</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-4">
              La transmission anticipée de l'activité éligible entraîne une exonération sur <strong>50 % du total de la société</strong>. La transmission ne doit donc pas porter sur une simple société patrimoniale ou de gestion mobilière. L'activité éligible doit représenter au moins 50 % de l'actif.
            </p>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-slate-600 font-light">Exonération Pacte Dutreil</span>
                <span className="text-blue-700 font-light"><strong>75 %</strong></span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 font-light">Droits de mutation restants</span>
                <span className="text-slate-700 font-light"><strong>25 %</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Conditions */}
      <section id="conditions" className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-emerald-100 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-emerald-700" />
            </div>
            <h2 className="text-3xl font-light text-slate-900">Conditions d'application</h2>
          </div>

          {/* Liste des conditions principales */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
            <h3 className="text-xl font-light text-slate-900 mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 text-emerald-600 mr-2" />
              Conditions cumulatives
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-700 font-light"><strong>Activité éligible :</strong> La société doit exercer une activité industrielle, commerciale, artisanale, agricole ou libérale</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-700 font-light"><strong>Engagement collectif :</strong> Engagement de conservation des titres pendant au moins <strong>2 ans</strong> avant la transmission</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-700 font-light"><strong>Seuils de détention :</strong> Au moins <strong>34 % des droits de vote</strong> et <strong>17 % des droits financiers</strong> pour les sociétés non cotées (20 % et 10 % pour les sociétés cotées)</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-700 font-light"><strong>Engagement individuel :</strong> Les héritiers ou donataires doivent s'engager à conserver les titres pendant <strong>4 ans supplémentaires</strong></p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-700 font-light"><strong>Fonction de direction :</strong> L'un des bénéficiaires ou signataires doit exercer une fonction de direction pendant <strong>3 ans minimum</strong> après la transmission</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-700 font-light"><strong>Caractère permanent :</strong> Depuis la loi de finances rectificative 2022, l'activité opérationnelle doit être exercée durant toute la période des engagements de conservation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tableau récapitulatif des durées */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-4 text-left text-slate-700 font-light">Phase</th>
                  <th className="px-6 py-4 text-left text-slate-700 font-light">Durée</th>
                  <th className="px-6 py-4 text-left text-slate-700 font-light">Obligation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 text-slate-700 font-light">Engagement collectif</td>
                  <td className="px-6 py-4 text-blue-700 font-light"><strong>2 ans</strong></td>
                  <td className="px-6 py-4 text-slate-600 font-light">Avant la transmission</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-700 font-light">Engagement individuel</td>
                  <td className="px-6 py-4 text-blue-700 font-light"><strong>4 ans</strong></td>
                  <td className="px-6 py-4 text-slate-600 font-light">Après la transmission</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-700 font-light">Fonction de direction</td>
                  <td className="px-6 py-4 text-blue-700 font-light"><strong>3 ans</strong></td>
                  <td className="px-6 py-4 text-slate-600 font-light">Pendant et après la transmission</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 text-slate-900 font-light"><strong>Durée totale</strong></td>
                  <td className="px-6 py-4 text-blue-700 font-light"><strong>6 ans</strong></td>
                  <td className="px-6 py-4 text-slate-700 font-light">Conservation totale des titres</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 3 - Engagement collectif */}
      <section id="engagement-collectif" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-indigo-700" />
            </div>
            <h2 className="text-3xl font-light text-slate-900">Engagement collectif de conservation (2 ans)</h2>
          </div>

          <div className="space-y-6">
            <p className="text-slate-600 font-light leading-relaxed">
              L'engagement collectif de conservation est un acte par lequel les associés s'engagent à conserver leurs parts ou actions pendant une durée minimale de <strong>2 ans</strong>. Cet engagement doit être en cours au moment de la transmission.
            </p>

            <div className="bg-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-light text-slate-900 mb-4">Caractéristiques</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 font-light">Durée minimale de <strong>2 ans avant la transmission</strong></p>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 font-light">Peut être signé par un ou plusieurs associés (engagement collectif ou unilatéral depuis 2019)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Scale className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 font-light">Les signataires doivent détenir ensemble au moins 34 % des droits de vote et 17 % des droits financiers (sociétés non cotées)</p>
                </div>
              </div>
            </div>

            {/* Référence BOFiP */}
            <a 
              href="https://bofip.impots.gouv.fr/bofip/6509-PGP.html/identifiant=BOI-ENR-DMTG-10-20-40-10-20211221" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition shadow-md"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="font-light">Consulter le BOFiP sur l'engagement collectif</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 4 - Engagement individuel */}
      <section id="engagement-individuel" className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Shield className="w-6 h-6 text-purple-700" />
            </div>
            <h2 className="text-3xl font-light text-slate-900">Engagement individuel de conservation (4 ans)</h2>
          </div>

          <div className="space-y-6">
            <p className="text-slate-600 font-light leading-relaxed">
              Après la transmission, chaque bénéficiaire (héritier, donataire ou légataire) doit prendre un engagement individuel de conserver les titres reçus pendant une durée de <strong>4 ans supplémentaires</strong>, à compter de l'expiration de l'engagement collectif.
            </p>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-light text-slate-900 mb-4">Obligations des bénéficiaires</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 font-light">Engagement pris dans l'acte de donation ou dans la déclaration de succession</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 font-light">Conservation obligatoire pendant <strong>4 ans</strong> après la fin de l'engagement collectif</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 font-light">Interdiction de cession ou donation des titres pendant cette période</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 font-light">Déclaration de respect des conditions en fin d'engagement</p>
                </div>
              </div>
            </div>

            {/* Conséquences du non-respect */}
            <div className="bg-white rounded-xl shadow-sm border border-amber-300 p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-lg flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-amber-700" />
                </div>
                <div className="flex-1">
                  <h4 className="font-light text-lg text-slate-900 mb-3">⚠️ Conséquences du non-respect</h4>
                  <p className="text-slate-600 font-light leading-relaxed mb-3">
                    Depuis la loi de finances 2019, le non-respect de l'engagement par l'un des bénéficiaires n'entraîne plus la remise en cause totale du dispositif. Seule la part du bénéficiaire défaillant perd le bénéfice de l'exonération.
                  </p>
                  <p className="text-amber-700 font-light text-sm">
                    <strong>Exception :</strong> La cession ou donation à un tiers au pacte Dutreil remet en cause le dispositif dans sa totalité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Engagement réputé acquis */}
      <section id="engagement-repute" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-teal-100 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-teal-700" />
            </div>
            <h2 className="text-3xl font-light text-slate-900">Engagement réputé acquis</h2>
          </div>

          <div className="space-y-6">
            <p className="text-slate-600 font-light leading-relaxed">
              Pour ne pas pénaliser les transmissions intervenant par décès de façon précoce, <strong>l'engagement collectif de conservation est réputé acquis</strong> sous certaines conditions, sans qu'il soit nécessaire d'avoir formellement souscrit un engagement écrit avant le décès.
            </p>

            {/* Conditions de l'engagement réputé acquis */}
            <div className="bg-teal-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-light text-slate-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-teal-600 mr-2" />
                Conditions cumulatives
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 font-light">Le défunt ou donateur détenait depuis <strong>au moins 2 ans</strong> les titres représentant les seuils requis (34 % droits de vote / 17 % droits financiers)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 font-light">Le défunt ou donateur (ou son conjoint/partenaire pacsé) exerçait dans la société <strong>depuis plus de 2 ans</strong> son activité professionnelle principale ou une fonction de direction</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 font-light">L'un des héritiers, donataires ou légataires doit exercer une fonction de direction après la transmission</p>
                </div>
              </div>
            </div>

            {/* Point important sur la fonction de direction */}
            <div className="bg-white rounded-xl shadow-sm border border-teal-200 p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
                  <Building2 className="w-6 h-6 text-teal-700" />
                </div>
                <div className="flex-1">
                  <h4 className="font-light text-lg text-slate-900 mb-3">💡 Point crucial : Fonction de direction après transmission</h4>
                  <p className="text-slate-600 font-light leading-relaxed mb-3">
                    Dans l'hypothèse d'un engagement réputé acquis, <strong>le donateur ne peut pas être le seul à exercer la fonction de direction après la transmission</strong>. Au moins l'un des héritiers, donataires ou légataires doit exercer cette fonction pour que l'exonération soit maintenue.
                  </p>
                  <p className="text-teal-700 font-light text-sm">
                    <strong>BOFiP § 395 :</strong> Une codirection entre donateur et donataire est possible, mais le donataire doit impérativement exercer une fonction de direction.
                  </p>
                </div>
              </div>
            </div>

            {/* Référence réponse ministérielle */}
            <div className="bg-slate-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
              <p className="text-slate-600 font-light text-sm leading-relaxed">
                <strong>Réponse ministérielle (JOS 29/12/2022, question n° 00189) :</strong> « Dans l'hypothèse d'un engagement réputé acquis, le bénéfice de l'exonération partielle ne trouve pas à s'appliquer lorsque, postérieurement à la transmission, le donateur assure lui-même la fonction de dirigeant de la société. »
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Exemples BOFiP */}
      <section id="exemples-bofip" className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-emerald-100 p-3 rounded-lg">
              <Calculator className="w-6 h-6 text-emerald-700" />
            </div>
            <h2 className="text-3xl font-light text-slate-900">Exemples concrets tirés du BOFiP</h2>
          </div>

          <div className="space-y-6">
            {/* Exemple 1 - Transmission d'entreprise */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                  <Calculator className="w-6 h-6 text-emerald-700" />
                </div>
                <div className="flex-1">
                  <h4 className="font-light text-lg text-slate-900 mb-3">Exemple 1 : Transmission d'entreprise classique</h4>
                  <p className="text-slate-600 font-light leading-relaxed mb-4">
                    Un dirigeant fait la donation des titres de son entreprise évaluée à <strong>1 000 000 €</strong>. Le fonds de commerce représente <strong>80 % de la valeur totale</strong>, soit 800 000 €.
                  </p>
                  
                  <div className="bg-slate-50 rounded-lg p-4 space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 font-light">Valeur totale de l'entreprise</span>
                      <span className="font-light text-slate-900">1 000 000 €</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 font-light">Fonds de commerce (80 %)</span>
                      <span className="font-light text-slate-900">800 000 €</span>
                    </div>
                    
                    <div className="border-t border-slate-200 pt-3">
                      <div className="flex justify-between items-center text-emerald-700 mb-2">
                        <span className="font-light">Exonération Pacte Dutreil sur 800 000 € (75 %)</span>
                        <span className="font-light">- 600 000 €</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-light text-slate-700">Part exonérée sur activité (800 000 € × 75 %)</span>
                        <span className="font-light text-emerald-700"><strong>600 000 €</strong></span>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-light text-slate-700">Montant non exonéré</span>
                        <span className="font-light text-slate-900">200 000 €</span>
                      </div>
                      <div className="flex justify-between items-center text-blue-700">
                        <span className="font-light">Abattement donation ligne directe</span>
                        <span className="font-light">- 100 000 €</span>
                      </div>
                    </div>

                    <div className="border-t-2 border-slate-300 pt-3 flex justify-between items-center">
                      <span className="font-light text-slate-900"><strong>Base imposable finale</strong></span>
                      <span className="font-light text-slate-900"><strong>100 000 €</strong></span>
                    </div>
                  </div>
                  
                  <p className="text-slate-500 font-light text-sm italic">
                    → Le montant non exonéré (200 000 €) peut ensuite bénéficier de l'abattement classique de 100 000 € en ligne directe si le seuil n'a pas déjà été atteint. L'exonération partielle bénéficie d'un effet multiplicateur si le seuil d'abattement n'est pas dépassé, rendant fiscalement effective l'exonération à zéro euro jusqu'à une certaine hauteur de patrimoine transmis.
                  </p>
                </div>
              </div>
            </div>

            {/* Exemple 2 - Location patrimoniale */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-lg flex-shrink-0">
                  <Building2 className="w-6 h-6 text-amber-700" />
                </div>
                <div className="flex-1">
                  <h4 className="font-light text-lg text-slate-900 mb-3">Exemple 2 : Exclusion - Location patrimoniale</h4>
                  <p className="text-slate-600 font-light leading-relaxed mb-4">
                    Les parts d'une société dont l'objet principal est la détention et la <strong>gestion d'immeubles mobiliers avec location</strong> (ex : SCI de gestion patrimoniale) sont <strong>exclus du régime</strong>, même si la location meublée avec service, considérée comme une activité commerciale par le BIC, reste éligible à condition qu'elle soit l'activité principale et qu'elle représente au moins 50 % de l'actif.
                  </p>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                    <p className="text-slate-700 font-light text-sm">
                      <strong>⚠️ Attention :</strong> La simple location nue d'immeubles sans gestion active ou services annexes ne constitue pas une activité éligible au Pacte Dutreil. Seule la location meublée avec services (type résidence de tourisme, EHPAD) peut être éligible si elle remplit tous les critères d'exploitation commerciale.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemple 3 - Holding animatrice */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-blue-700" />
                </div>
                <div className="flex-1">
                  <h4 className="font-light text-lg text-slate-900 mb-3">Exemple 3 : Holding animatrice</h4>
                  <p className="text-slate-600 font-light leading-relaxed mb-4">
                    Une holding permettant l'animation du groupe et exerçant une <strong>fonction active dans la gestion de ses filiales</strong> est éligible, à condition qu'elle exerce réellement cette activité d'animation pendant toute la durée des engagements de conservation.
                  </p>
                  
                  <div className="bg-slate-50 rounded-lg p-4 mb-4">
                    <h5 className="font-light text-slate-900 mb-3">Critères d'une holding animatrice :</h5>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span className="text-slate-600 font-light">Valeur vénale des titres des filiales opérationnelles représente <strong>plus de 50 % de l'actif total</strong></span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span className="text-slate-600 font-light">Participation active à la conduite de la politique du groupe et au contrôle des filiales</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span className="text-slate-600 font-light">Fourniture de services administratifs, juridiques, comptables, financiers aux filiales</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="text-slate-700 font-light text-sm">
                      <strong>💡 Important :</strong> Depuis la loi de finances rectificative 2022, la condition d'activité opérationnelle doit être respectée durant <strong>toute la période couverte par les engagements de conservation</strong>. La perte du caractère de holding animatrice en cours d'engagement entraîne désormais la remise en cause du dispositif.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - Précisions Legifrance */}
      <section id="precisions-legifrance" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-slate-100 p-3 rounded-lg">
              <Scale className="w-6 h-6 text-slate-700" />
            </div>
            <h2 className="text-3xl font-light text-slate-900">Précisions de Legifrance et sites d'avocats fiscalistes</h2>
          </div>

          <div className="space-y-6">
            <p className="text-slate-600 font-light leading-relaxed">
              La législation actuelle, renforcée par la loi de finances pour 2024, clarifie que seule l'activité exercée à titre principal (critère de prépondérance d'au moins 50 %) permet d'obtenir l'exonération partielle via la transmission, et que les activités de simple location sans exploitation commerciale restent généralement admises.
            </p>

            {/* Points clés de la législation récente */}
            <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-light text-slate-900 mb-4">Points clés de la législation récente</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-light text-slate-900 mb-2">✅ Engagement unilatéral possible depuis 2019</h4>
                  <p className="text-slate-600 font-light text-sm">
                    Une personne seule peut désormais prendre un engagement pour elle et ses ayants-cause, rendant le dispositif accessible aux associés uniques et structures unipersonnelles.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-emerald-500">
                  <h4 className="font-light text-slate-900 mb-2">✅ Remise en cause partielle (non totale)</h4>
                  <p className="text-slate-600 font-light text-sm">
                    Depuis 2019, le non-respect des engagements par un bénéficiaire n'entraîne plus la remise en cause totale du pacte, sauf en cas de cession à un tiers non signataire.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-light text-slate-900 mb-2">⚠️ Permanence de l'activité éligible (2022)</h4>
                  <p className="text-slate-600 font-light text-sm">
                    La loi de finances rectificative 2022 impose que l'activité opérationnelle soit exercée durant toute la période des engagements, inversant la jurisprudence de la Cour de cassation du 25 mai 2022.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-light text-slate-900 mb-2">✅ Suppression de l'attestation annuelle</h4>
                  <p className="text-slate-600 font-light text-sm">
                    La loi de finances 2019 a supprimé l'obligation de fournir une attestation annuelle. Seules les déclarations en début et fin d'engagement restent obligatoires.
                  </p>
                </div>
              </div>
            </div>

            {/* Recommandations d'avocats fiscalistes */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-xl font-light text-slate-900 mb-4">Recommandations d'avocats fiscalistes</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">
                Les avocats fiscalistes recommandent de constituer des dossiers solides, démontrant la nature principale de l'activité et respectant strictement les conditions d'engagement et de gestion pour éviter toute requalification par l'administration fiscale.
              </p>
              <div className="bg-slate-50 rounded-lg p-4">
                <ul className="space-y-2 text-slate-600 font-light text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Préparer une documentation complète sur l'activité principale de la société</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Anticiper la mise en place du pacte plusieurs années avant la transmission envisagée</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Organiser la gouvernance pour garantir la fonction de direction par un héritier/donataire</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Surveiller le maintien du caractère opérationnel de l'activité pendant toute la durée des engagements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Consulter un fiscaliste avant toute opération susceptible d'affecter les conditions du pacte</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remarque méthodologique */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                <BookOpen className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h3 className="font-light text-xl text-slate-900 mb-3">Remarque méthodologique</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  Les définitions et exemples présentés sur cette page sont directement appuyés sur les instructions officielles du <strong>Bulletin Officiel des Finances Publiques (BOFiP)</strong>, le texte officiel de l'article 787 B du CGI publié sur Legifrance, ainsi que les commentaires des praticiens du droit fiscal. Ces références constituent la doctrine administrative de l'administration fiscale française et la jurisprudence en vigueur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Références BOFiP */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-light text-slate-900 mb-6">Références officielles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a 
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047623071" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition border border-slate-200"
            >
              <div className="flex items-center space-x-3">
                <ExternalLink className="w-5 h-5 text-blue-600" />
                <span className="font-light text-slate-700">Article 787 B du CGI - Legifrance</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </a>

            <a 
              href="https://bofip.impots.gouv.fr/bofip/6509-PGP.html/identifiant=BOI-ENR-DMTG-10-20-40-10-20211221" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition border border-slate-200"
            >
              <div className="flex items-center space-x-3">
                <ExternalLink className="w-5 h-5 text-blue-600" />
                <span className="font-light text-slate-700">BOFiP - Pacte Dutreil</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-4">Optimisez la transmission de votre entreprise</h2>
          <p className="text-xl text-blue-50 font-light mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent dans la mise en place du Pacte Dutreil et la structuration optimale de votre transmission familiale.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center space-x-2 bg-white text-blue-700 px-8 py-4 rounded-lg hover:bg-blue-50 transition shadow-lg font-light text-lg"
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