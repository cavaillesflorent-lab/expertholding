import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, CheckCircle, AlertTriangle, TrendingUp, Shield, FileText, DollarSign, Building2, Users } from 'lucide-react'

export default function HoldingPurePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="creer" />

      {/* Hero avec image */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80" 
            alt="Holding pure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <a href="/" className="text-slate-300 hover:text-white transition-colors">Accueil</a>
            <ChevronRight size={16} className="text-slate-400" />
            <a href="/creer-holding" className="text-slate-300 hover:text-white transition-colors">Créer une Holding</a>
            <ChevronRight size={16} className="text-slate-400" />
            <span className="text-amber-400">Holding Pure (Passive)</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
              Holding Pure (Passive) 2025
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 leading-relaxed">
              Définition, avantages fiscaux, création et optimisation patrimoniale
            </p>
            
            {/* Stats clés */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">95%</div>
                <div className="text-sm text-slate-300 font-light">Exonération dividendes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">2-5K€</div>
                <div className="text-sm text-slate-300 font-light">Coût création</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-sm">
                <div className="text-3xl font-light text-white mb-2">Simple</div>
                <div className="text-sm text-slate-300 font-light">Gestion administrative</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sommaire */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-light text-slate-900 mb-6">Sommaire</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Qu'est-ce qu'une holding pure ?",
              "Caractéristiques principales",
              "Holding pure vs animatrice",
              "Exemples concrets (2025)",
              "Formes juridiques possibles",
              "Avantages fiscaux",
              "Limites et risques",
              "Comment créer ?",
              "Coûts de création",
              "Cas pratiques chiffrés"
            ].map((item, idx) => (
              <a key={idx} href={`#section-${idx + 1}`} className="flex items-center text-slate-600 hover:text-amber-600 font-light transition-colors">
                <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 : Définition */}
      <section id="section-1" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Qu'est-ce qu'une holding pure ?
              </h2>
              
              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <p>
                  La <strong className="text-slate-900">holding pure</strong> (également appelée <strong className="text-slate-900">holding passive</strong>) est une société dont l'activité exclusive consiste à détenir et gérer un portefeuille de participations dans d'autres sociétés, sans intervenir dans leur gestion opérationnelle ni leur contrôle quotidien.
                </p>

                <div className="bg-amber-50 border border-amber-100 p-6">
                  <h3 className="text-lg font-light text-slate-900 mb-3">📖 Définition juridique</h3>
                  <p className="text-sm mb-3">
                    <strong>Article 1447 du CGI :</strong> La gestion d'un portefeuille de titres, sans prestation de services, n'est pas considérée comme une activité professionnelle.
                  </p>
                  <p className="text-sm">
                    <strong>BOFiP-IF-CFE-10-20-20 (12/09/2012) :</strong> Confirme que la simple gestion de patrimoine privé, même via une société, n'est pas assimilée à une activité professionnelle.
                  </p>
                </div>

                <p>
                  Contrairement à une société opérationnelle, la holding pure se limite à une activité strictement <strong className="text-slate-900">financière et patrimoniale</strong> : acquisition et détention de titres, perception de dividendes, réalisation de plus-values lors de cessions.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                alt="Gestion portefeuille" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </div>

          {/* Activités autorisées/interdites */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-emerald-50 border border-emerald-100 p-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-light text-slate-900 mb-4">Activités autorisées</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Détenir des participations dans des sociétés</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Acheter et vendre des titres</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Percevoir des dividendes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Réaliser des plus-values de cession</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Consentir des avances de trésorerie</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-100 p-8">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-light text-slate-900 mb-4">Activités interdites</h3>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li className="flex items-start">
                  <AlertTriangle size={16} className="text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Facturer des prestations de services</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle size={16} className="text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Exercer un contrôle opérationnel quotidien</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle size={16} className="text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Mettre du personnel à disposition</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle size={16} className="text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Participer à la politique du groupe</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle size={16} className="text-red-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Fournir une assistance administrative</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 : Caractéristiques */}
      <section id="section-2" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 text-center">
            Caractéristiques principales
          </h2>
          <p className="text-lg text-slate-600 font-light text-center max-w-3xl mx-auto mb-16">
            Six caractéristiques clés définissent la holding pure
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileText, title: "Activité", desc: "Détention et gestion de titres exclusivement", color: "blue" },
              { icon: DollarSign, title: "Revenus", desc: "Dividendes, intérêts, plus-values sur cessions", color: "emerald" },
              { icon: TrendingUp, title: "Fiscalité", desc: "Soumise à l'IS + régime mère-fille possible", color: "amber" },
              { icon: Users, title: "Personnel", desc: "Aucun salarié en général", color: "slate" },
              { icon: CheckCircle, title: "Gestion", desc: "Simplicité administrative", color: "emerald" },
              { icon: Building2, title: "Objectif", desc: "Optimisation patrimoniale et fiscale", color: "blue" }
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-white border border-slate-100 p-8 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center mb-6`}>
                    <Icon className={`text-${item.color}-600`} size={24} />
                  </div>
                  <h3 className="text-xl font-light text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Régime fiscal */}
          <div className="mt-16 bg-white border border-slate-100 p-8">
            <h3 className="text-2xl font-light text-slate-900 mb-6">Régime fiscal de la holding pure</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>IS :</strong> 25% (15% jusqu'à 42 500€)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Régime mère-fille :</strong> 95% exonération dividendes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Plus-values :</strong> exonération sous conditions</span>
                </li>
              </ul>
              <ul className="space-y-3 text-sm text-slate-600 font-light">
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>TVA :</strong> exonérée sur activité principale</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>CFE :</strong> peut ne pas s'appliquer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 : Comparaison pure vs animatrice */}
      <section id="section-3" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 text-center">
            Holding pure vs holding animatrice
          </h2>
          <p className="text-lg text-slate-600 font-light text-center max-w-3xl mx-auto mb-16">
            La distinction est fondamentale car elle détermine le régime fiscal applicable
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-light text-slate-900 border-b border-slate-200">Critère</th>
                  <th className="px-6 py-4 text-left text-sm font-light text-slate-900 border-b border-l border-slate-200">Holding Pure</th>
                  <th className="px-6 py-4 text-left text-sm font-light text-slate-900 border-b border-l border-slate-200">Holding Animatrice</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Activité</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">Détention passive de titres</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">Animation active du groupe</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Gestion opérationnelle</td>
                  <td className="px-6 py-4 text-sm text-red-600 border-b border-l border-slate-200">✗ Aucune</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 border-b border-l border-slate-200">✓ Contrôle et pilotage</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Prestations de services</td>
                  <td className="px-6 py-4 text-sm text-red-600 border-b border-l border-slate-200">✗ Interdites</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 border-b border-l border-slate-200">✓ Autorisées (management fees)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Personnel</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">Généralement aucun</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">Souvent des salariés</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Régime mère-fille</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 border-b border-l border-slate-200">✓ Oui</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 border-b border-l border-slate-200">✓ Oui</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Pacte Dutreil (75% abattement)</td>
                  <td className="px-6 py-4 text-sm text-red-600 border-b border-l border-slate-200">✗ Non</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 border-b border-l border-slate-200">✓ Oui</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Exonération IFI</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">Limitée</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 border-b border-l border-slate-200">✓ Totale possible</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Complexité</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">Faible</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">Moyenne à élevée</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600">Coûts annuels</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-l border-slate-200">1 500 - 2 500€</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-l border-slate-200">3 000 - 8 000€+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-emerald-50 border border-emerald-100 p-6">
            <h3 className="text-lg font-light text-slate-900 mb-3">💡 Quel type choisir ?</h3>
            <ul className="space-y-2 text-sm text-slate-600 font-light">
              <li className="flex items-start">
                <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                <span><strong>Holding pure</strong> si votre objectif est uniquement l'optimisation des flux de dividendes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="text-emerald-600 mr-2 flex-shrink-0 mt-1" />
                <span><strong>Holding animatrice</strong> si vous visez le Pacte Dutreil ou l'exonération IFI totale</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA intermédiaire */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
            Besoin d'aide pour choisir entre holding pure et animatrice ?
          </h3>
          <p className="text-lg text-amber-100 font-light mb-8">
            Nos experts analysent votre situation et vous orientent vers la structure optimale
          </p>
          <a 
            href="mailto:florent@occitea-ip.fr" 
            className="inline-block bg-white hover:bg-slate-50 text-amber-600 px-8 py-4 text-base font-light transition-all"
          >
            Analyse gratuite
          </a>
        </div>
      </section>

      {/* Section 4 : Exemples concrets */}
      <section id="section-4" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-16 text-center">
            Exemples concrets de holdings pures (2025)
          </h2>

          <div className="space-y-8">
            {/* Exemple 1 */}
            <div className="bg-white border border-slate-100 p-8">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-600 font-light">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-light text-slate-900 mb-3">Holding SASU Pure pour start-ups tech</h3>
                  <p className="text-sm text-slate-600 font-light mb-4">
                    <strong>Situation :</strong> Sophie, investisseuse, détient des participations dans 3 start-ups technologiques via sa SASU "TechInvest".
                  </p>
                  <div className="bg-slate-50 p-4 mb-4">
                    <p className="text-sm text-slate-600 font-light mb-2"><strong>Structure :</strong></p>
                    <ul className="text-sm text-slate-600 font-light space-y-1 ml-4">
                      <li>• 30% de StartupA (valorisation 500K€)</li>
                      <li>• 15% de StartupB (valorisation 1M€)</li>
                      <li>• 25% de StartupC (valorisation 800K€)</li>
                    </ul>
                  </div>
                  <p className="text-sm text-emerald-600 font-light">
                    <strong>Avantages :</strong> Régime mère-fille sur dividendes, exonération plus-values de cession
                  </p>
                </div>
              </div>
            </div>

            {/* Exemple 2 */}
            <div className="bg-white border border-slate-100 p-8">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-amber-600 font-light">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-light text-slate-900 mb-3">Holding SARL Pure familiale</h3>
                  <p className="text-sm text-slate-600 font-light mb-4">
                    <strong>Situation :</strong> La famille Martin détient 3 SCI via une SARL holding "FamilyPack".
                  </p>
                  <div className="bg-slate-50 p-4 mb-4">
                    <p className="text-sm text-slate-600 font-light mb-2"><strong>Structure :</strong></p>
                    <ul className="text-sm text-slate-600 font-light space-y-1 ml-4">
                      <li>• 100% de SCI Immo 1 (immeuble Paris)</li>
                      <li>• 100% de SCI Immo 2 (bureaux Lyon)</li>
                      <li>• 100% de SCI Immo 3 (commerces Bordeaux)</li>
                    </ul>
                  </div>
                  <p className="text-sm text-emerald-600 font-light">
                    <strong>Avantages :</strong> Centralisation patrimoine, optimisation transmission, régime mère-fille
                  </p>
                </div>
              </div>
            </div>

            {/* Exemple 3 */}
            <div className="bg-white border border-slate-100 p-8">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-emerald-600 font-light">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-light text-slate-900 mb-3">Holding pure pour indépendant multi-activités</h3>
                  <p className="text-sm text-slate-600 font-light mb-4">
                    <strong>Situation :</strong> Thomas, consultant, a développé 3 activités distinctes dans 3 SASU différentes.
                  </p>
                  <div className="bg-slate-50 p-4 mb-4">
                    <p className="text-sm text-slate-600 font-light mb-2"><strong>Structure :</strong></p>
                    <ul className="text-sm text-slate-600 font-light space-y-1 ml-4">
                      <li>• 100% SASU Conseil (stratégie)</li>
                      <li>• 100% SASU Formation (professionnelle)</li>
                      <li>• 100% SASU Digital (création contenu)</li>
                    </ul>
                  </div>
                  <p className="text-sm text-emerald-600 font-light">
                    <strong>Avantages :</strong> Remontée dividendes 95% exonéré, mutualisation trésorerie, intégration fiscale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 : Avantages avec photo */}
      <section id="section-6" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Avantages et bénéfices fiscaux
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h3 className="text-xl font-light text-slate-900 mb-3">1. Optimisation fiscale (régime mère-fille)</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed mb-3">
                    Le principal avantage : 95% des dividendes remontés sont exonérés d'IS. Seule une quote-part de 5% est imposée.
                  </p>
                  <div className="bg-emerald-50 p-4">
                    <p className="text-sm font-light text-slate-900 mb-2"><strong>Exemple chiffré :</strong></p>
                    <ul className="text-sm text-slate-600 font-light space-y-1">
                      <li>• Sans holding : 100K€ dividendes → 30K€ impôt (30%)</li>
                      <li>• Avec holding pure : 100K€ → 1 250€ impôt</li>
                      <li className="text-emerald-600 font-medium">• Gain : 28 750€ (96% économie !)</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-light text-slate-900 mb-3">2. Exonération plus-values de cession</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    Sous conditions (détention {`>`}2 ans, participation {`>`}5%), les plus-values sont quasi-exonérées. Quote-part imposable : seulement 12%.
                  </p>
                </div>

                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-xl font-light text-slate-900 mb-3">3. Protection patrimoniale</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    Cloisonnement des risques, séparation juridique des activités, protection contre les créanciers.
                  </p>
                </div>

                <div className="border-l-4 border-slate-500 pl-6">
                  <h3 className="text-xl font-light text-slate-900 mb-3">4. Transmission facilitée</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    Donation progressive des parts de holding (plus simple que de transmettre chaque société).
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[700px] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" 
                alt="Avantages fiscaux" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Prêt à créer votre holding pure ?
          </h2>
          <p className="text-xl text-slate-300 font-light mb-12 leading-relaxed">
            Nos experts en structuration patrimoniale vous accompagnent de A à Z
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:florent@occitea-ip.fr" 
              className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-base font-light transition-all hover:shadow-xl"
            >
              Démarrer mon projet
            </a>
            <a 
              href="tel:0607963135" 
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 text-base font-light backdrop-blur-sm transition-all"
            >
              06 07 96 31 35
            </a>
          </div>
        </div>
      </section>

      <Footer currentPage="creer" />
    </div>
  )
}