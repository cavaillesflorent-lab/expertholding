import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, Scale, BookOpen, ExternalLink, Shield, FileText, TrendingUp } from 'lucide-react'

export default function LegalPage() {
  const legalArticles = [
    {
      id: 'regime-mere-fille',
      title: 'Régime mère-fille et intégration fiscale',
      description: 'Comprendre les régimes fiscaux applicables aux holdings : exonération des dividendes, quote-part de frais et charges, et consolidation fiscale des groupes.',
      articles: ['Article 145 du CGI', 'Article 216 du CGI', 'Article 223 A et suivants du CGI'],
      href: '/legal/regime-mere-fille-integration-fiscale/',
      icon: FileText,
      color: 'emerald'
    },
    {
      id: 'report-imposition',
      title: 'Report d\'imposition',
      description: 'Mécanisme de report obligatoire pour les plus-values réalisées lors de l\'apport de titres à une société contrôlée par l\'apporteur.',
      articles: ['Article 150-0 B ter du CGI'],
      href: '/legal/report-imposition-150-0-b-ter/',
      icon: TrendingUp,
      color: 'indigo'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="legal" />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-slate-700/50 px-4 py-2 rounded-full mb-6">
                <Scale className="w-5 h-5" />
                <span className="text-sm font-light">Références officielles BOFiP</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
                Cadre légal des holdings
              </h1>
              
              <p className="text-xl text-slate-200 font-light mb-8 leading-relaxed">
                Découvrez les textes juridiques et fiscaux qui encadrent les holdings patrimoniales, avec des définitions officielles issues du Bulletin Officiel des Finances Publiques (BOFiP).
              </p>

              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-light mb-1">{legalArticles.length}</div>
                  <div className="text-sm text-slate-300 font-light">Articles disponibles</div>
                </div>
                <div className="h-12 w-px bg-slate-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-light mb-1">CGI</div>
                  <div className="text-sm text-slate-300 font-light">Code Général des Impôts</div>
                </div>
                <div className="h-12 w-px bg-slate-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-light mb-1">BOFiP</div>
                  <div className="text-sm text-slate-300 font-light">Doctrine administrative</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl blur-3xl opacity-20"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <Scale className="w-32 h-32 text-slate-200 mx-auto mb-4" />
                  <p className="text-center text-slate-200 font-light">
                    Références juridiques officielles
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
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <div className="flex items-start space-x-3">
              <BookOpen className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-light text-lg text-slate-900 mb-2">À propos de cette section</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  Cette section présente les <strong>définitions officielles</strong> issues du BOFiP des principaux régimes fiscaux et juridiques applicables aux holdings. Pour chaque disposition, la référence BOFiP est cliquable et des exemples précis illustrent les situations pratiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles légaux */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-slate-900 mb-4">Articles du Code Général des Impôts</h2>
            <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
              Chaque article est détaillé avec sa définition officielle, les conditions d'application et des exemples concrets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {legalArticles.map((article) => {
              const IconComponent = article.icon
              const colorClasses = {
                emerald: {
                  bg: 'bg-emerald-50',
                  border: 'border-emerald-200',
                  iconBg: 'bg-emerald-100',
                  iconText: 'text-emerald-700',
                  button: 'bg-emerald-600 hover:bg-emerald-700'
                },
                indigo: {
                  bg: 'bg-indigo-50',
                  border: 'border-indigo-200',
                  iconBg: 'bg-indigo-100',
                  iconText: 'text-indigo-700',
                  button: 'bg-indigo-600 hover:bg-indigo-700'
                }
              }
              const colors = colorClasses[article.color]

              return (
                <div 
                  key={article.id} 
                  className={`${colors.bg} ${colors.border} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full`}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`${colors.iconBg} p-3 rounded-lg flex-shrink-0`}>
                      <IconComponent className={`w-6 h-6 ${colors.iconText}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-light text-xl text-slate-900 mb-2">{article.title}</h3>
                    </div>
                  </div>

                  <p className="text-slate-600 font-light leading-relaxed mb-4 flex-1">
                    {article.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <p className="text-sm font-light text-slate-500 uppercase tracking-wide">Articles couverts :</p>
                    <div className="space-y-2">
                      {article.articles.map((art, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-slate-700 font-light">
                          <Shield className="w-4 h-4 text-slate-400" />
                          <span>{art}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={article.href}
                    className={`w-full inline-flex items-center justify-center space-x-2 ${colors.button} text-white px-6 py-3 rounded-lg transition shadow-md font-light`}
                  >
                    <span>Consulter l'article</span>
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pourquoi ces références sont importantes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">Pourquoi ces références sont importantes ?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="bg-amber-100 p-3 rounded-lg w-fit mb-4">
                <BookOpen className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="font-light text-lg text-slate-900 mb-2">Doctrine officielle</h3>
              <p className="text-slate-600 font-light text-sm">
                Le BOFiP constitue la doctrine administrative de l'administration fiscale française. Il fait autorité pour l'interprétation des textes.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="bg-emerald-100 p-3 rounded-lg w-fit mb-4">
                <Shield className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="font-light text-lg text-slate-900 mb-2">Sécurité juridique</h3>
              <p className="text-slate-600 font-light text-sm">
                Connaître les textes applicables permet de sécuriser vos montages et d'anticiper les contrôles fiscaux.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="bg-indigo-100 p-3 rounded-lg w-fit mb-4">
                <TrendingUp className="w-6 h-6 text-indigo-700" />
              </div>
              <h3 className="font-light text-lg text-slate-900 mb-2">Optimisation fiscale</h3>
              <p className="text-slate-600 font-light text-sm">
                Comprendre les dispositifs légaux permet d'optimiser la fiscalité de votre holding en toute légalité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lien BOFiP */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800 text-white rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-slate-700 p-3 rounded-lg flex-shrink-0">
                <ExternalLink className="w-6 h-6 text-slate-200" />
              </div>
              <div className="flex-1">
                <h3 className="font-light text-xl mb-3">Accéder au BOFiP officiel</h3>
                <p className="text-slate-300 font-light leading-relaxed mb-4">
                  Pour consulter l'intégralité du Bulletin Officiel des Finances Publiques et accéder à tous les textes officiels, rendez-vous sur le site de l'administration fiscale.
                </p>
                <a 
                  href="https://bofip.impots.gouv.fr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-100 transition shadow-md font-light"
                >
                  <span>Consulter bofip.impots.gouv.fr</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-amber-500 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-4">Besoin d'un accompagnement juridique et fiscal ?</h2>
          <p className="text-xl text-amber-50 font-light mb-8 max-w-2xl mx-auto">
            Nos experts vous conseillent sur l'application de ces régimes fiscaux à votre situation personnelle et vous accompagnent dans vos démarches.
          </p>
          <a 
            href="/contact/" 
            className="inline-flex items-center space-x-2 bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-amber-50 transition shadow-lg font-light text-lg"
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