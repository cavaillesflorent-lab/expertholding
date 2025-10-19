import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticlesSection from '@/components/ArticlesSection'
import { TrendingUp, Shield, Users, ChevronRight, Clock, Target, Award, Briefcase, FileText } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="accueil" />

      {/* Hero avec image background */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Image background avec overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80" 
            alt="Bureau moderne" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <a 
              href="https://www.forbes.fr/mediasfrance/occitea-patrimoine/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-amber-600/10 backdrop-blur-sm border border-amber-600/20 mb-8 hover:bg-amber-600/20 transition-colors"
            >
              <span className="text-amber-400 text-sm font-light tracking-wide">VU SUR FORBES</span>
            </a>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
              Expert en Structuration de <span className="text-amber-400">Holding</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 leading-relaxed">
              Accompagnement des dirigeants dans la création, gestion et transmission de holdings patrimoniales
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://taap.it/i3gsEr"
                className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-base font-light transition-all hover:shadow-xl hover:scale-105"
              >
                Prendre rendez-vous
              </a>
              <a 
                href="tel:0607963135" 
                className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 text-base font-light backdrop-blur-sm transition-all"
              >
                06 07 96 31 35
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-amber-600 mb-3">95%</div>
              <div className="text-slate-600 font-light">d'exonération fiscale sur dividendes</div>
            </div>
            <div className="text-center border-x border-slate-100">
              <div className="text-4xl md:text-5xl font-light text-amber-600 mb-3">5+</div>
              <div className="text-slate-600 font-light">années d'expérience patrimoniale</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-amber-600 mb-3">360°</div>
              <div className="text-slate-600 font-light">approche globale avec réseau d'experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Spécialisation - avec photo */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Texte */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
                Notre Spécialisation : Holding de <span className="text-amber-600">1M€ à 30M€</span>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                Nous accompagnons exclusivement les dirigeants de PME et ETI dans la structuration optimale de leur patrimoine professionnel. Notre expertise se concentre sur les holdings dont l'actif se situe entre 1 et 30 millions d'euros, une taille critique qui nécessite une approche sur-mesure.
              </p>

              <div className="space-y-6">
                <div className="border-l-2 border-amber-600 pl-6">
                  <h3 className="text-xl font-light text-slate-900 mb-2">1M€ - 5M€ : Primo-création</h3>
                  <p className="text-slate-600 font-light">
                    Structuration initiale, régime mère-fille, optimisation fiscale de base
                  </p>
                </div>
                
                <div className="border-l-2 border-amber-600 pl-6">
                  <h3 className="text-xl font-light text-slate-900 mb-2">5M€ - 15M€ : Consolidation</h3>
                  <p className="text-slate-600 font-light">
                    Intégration fiscale, holding animatrice, diversification patrimoniale
                  </p>
                </div>
                
                <div className="border-l-2 border-amber-600 pl-6">
                  <h3 className="text-xl font-light text-slate-900 mb-2">15M€ - 30M€ : Transmission</h3>
                  <p className="text-slate-600 font-light">
                    Pacte Dutreil, démembrement, family buy-out, philanthropie
                  </p>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80" 
                alt="Conseil en gestion patrimoniale" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Anticipation */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" 
                alt="Planification stratégique" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>

            {/* Texte */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full flex items-center justify-center mr-4">
                  <Clock className="text-amber-600" size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-light text-slate-900">
                  L'Anticipation : Maître-Mot de la <span className="text-amber-600">Réussite</span>
                </h2>
              </div>

              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                La transmission d'entreprise est un processus complexe qui nécessite une préparation rigoureuse et méthodique. Notre expérience démontre qu'une anticipation de <strong className="text-amber-600">15 à 20 ans</strong> est optimale pour bâtir une stratégie patrimoniale efficace et pérenne.
              </p>

              <div className="bg-white border border-amber-100 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-light text-slate-900 mb-4">Pourquoi anticiper si tôt ?</h3>
                <ul className="space-y-3 text-slate-600 font-light">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 mt-1">•</span>
                    <span><strong>Optimisation fiscale progressive :</strong> étaler les donations et abattements sur plusieurs périodes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 mt-1">•</span>
                    <span><strong>Pacte Dutreil :</strong> respecter les engagements collectifs et individuels de conservation (6 ans minimum)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 mt-1">•</span>
                    <span><strong>Valorisation de l'entreprise :</strong> préparer la société aux critères d'attractivité des acquéreurs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 mt-1">•</span>
                    <span><strong>Gouvernance familiale :</strong> préparer la nouvelle génération à la reprise ou organiser une cession externe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 mt-1">•</span>
                    <span><strong>Sécurité juridique :</strong> anticiper les évolutions législatives et adapter la structure en conséquence</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-slate-700 font-light leading-relaxed">
                  <strong className="text-amber-600">Une transmission réussie ne s'improvise pas.</strong> Elle se construit pas à pas, 
                  en intégrant les dimensions fiscales, juridiques, financières et humaines. L'anticipation vous permet de garder 
                  la maîtrise de votre calendrier et d'optimiser chaque étape du processus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi une Holding */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
              Pourquoi créer une holding en 2025 ?
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              La holding patrimoniale est un outil puissant pour optimiser, protéger et transmettre votre patrimoine professionnel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white border border-slate-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-light text-slate-900 mb-3">Optimisation Fiscale</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">
                Régime mère-fille : exonération de 95% sur les dividendes remontés. Intégration fiscale pour compenser résultats déficitaires et bénéficiaires.
              </p>
              <div className="text-amber-600 font-light text-sm">Économie moyenne : 50k€/an</div>
            </div>
            
            <div className="group bg-white border border-slate-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-light text-slate-900 mb-3">Protection Patrimoniale</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">
                Séparation des actifs professionnels et personnels. Protection contre les créanciers. Sécurisation du patrimoine familial.
              </p>
              <div className="text-blue-600 font-light text-sm">Sécurité juridique renforcée</div>
            </div>
            
            <div className="group bg-white border border-slate-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-light text-slate-900 mb-3">Transmission Facilitée</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">
                Pacte Dutreil : jusqu'à 75% d'abattement. Donation progressive sans perte de contrôle. Démembrement de propriété optimisé.
              </p>
              <div className="text-emerald-600 font-light text-sm">Économie : jusqu'à 300k€</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tableau comparatif */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">
              Avec ou sans holding ?
            </h2>
            <p className="text-lg text-slate-600 font-light">
              Comparatif concret sur une distribution de 100k€ de dividendes
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-light text-slate-900 border-b border-slate-200">Critère</th>
                  <th className="px-6 py-4 text-left text-sm font-light text-slate-900 border-b border-l border-slate-200">Sans Holding</th>
                  <th className="px-6 py-4 text-left text-sm font-light text-amber-600 border-b border-l border-slate-200">Avec Holding</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Dividendes distribués</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">100 000 €</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">100 000 €</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Flat tax (30%)</td>
                  <td className="px-6 py-4 text-sm text-red-600 border-b border-l border-slate-200">- 30 000 €</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 border-b border-l border-slate-200">Exonéré à 95%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-600 border-b border-slate-200">Quote-part 5%</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">N/A</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">- 1 250 € (IS 25%)</td>
                </tr>
                <tr className="bg-slate-50 font-medium">
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-slate-200">Net perçu</td>
                  <td className="px-6 py-4 text-sm text-slate-900 border-b border-l border-slate-200">70 000 €</td>
                  <td className="px-6 py-4 text-sm text-emerald-600 border-b border-l border-slate-200">98 750 €</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="px-6 py-4 text-base font-light text-slate-900">Gain fiscal</td>
                  <td className="px-6 py-4 text-base font-light text-slate-900 border-l border-slate-200">—</td>
                  <td className="px-6 py-4 text-base font-light text-amber-600 border-l border-slate-200">+ 28 750 € / an</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-amber-50 border border-amber-100">
            <p className="text-sm text-slate-700 font-light leading-relaxed">
              <strong className="text-amber-600">Sur 10 ans :</strong> économie fiscale cumulée de 287 500 € (hors actualisation), soit l'équivalent de 3 années de dividendes supplémentaires disponibles pour réinvestir ou transmettre.
            </p>
          </div>
        </div>
      </section>

      {/* Qui suis-je */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Texte */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-50 rounded-full flex items-center justify-center mr-4">
                  <Award className="text-slate-700" size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-light text-slate-900">
                  Qui suis-je ?
                </h2>
              </div>

              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Avant de me consacrer à la gestion patrimoniale, j'ai servi pendant <strong className="text-slate-900">11 ans dans l'Armée de Terre</strong>, 
                avec plusieurs déploiements en opérations extérieures. Cette expérience a forgé ma vision du conseil et de l'accompagnement.
              </p>

              <div className="bg-slate-50 border-l-4 border-slate-700 p-6 rounded-r-lg mb-6">
                <p className="text-slate-700 font-light leading-relaxed mb-4">
                  Au sein de l'armée, j'ai appris que <strong>l'anticipation, la préparation minutieuse et l'exécution rigoureuse</strong> sont les clés du succès. 
                  Qu'il s'agisse d'une mission ou d'un projet patrimonial, les principes restent identiques : analyser, planifier, coordonner et exécuter.
                </p>
              </div>

              <h3 className="text-xl font-light text-slate-900 mb-4">Des valeurs partagées avec le chef d'entreprise</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Target className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-light text-slate-900 mb-1">Objectif et Mission</h4>
                    <p className="text-slate-600 text-sm font-light">Définir un cap clair et mobiliser toutes les ressources pour l'atteindre</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-light text-slate-900 mb-1">Travail d'Équipe</h4>
                    <p className="text-slate-600 text-sm font-light">La réussite dépend de la coordination entre experts complémentaires</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-light text-slate-900 mb-1">Engagement et Rigueur</h4>
                    <p className="text-slate-600 text-sm font-light">Tenir ses engagements avec méthode et précision, sans compromis sur la qualité</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Award className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-light text-slate-900 mb-1">Don de Soi et Confiance</h4>
                    <p className="text-slate-600 text-sm font-light">Se mettre au service du projet avec loyauté et bâtir une relation durable</p>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 font-light leading-relaxed">
                Aujourd'hui, j'applique ces principes au service des dirigeants pour <strong className="text-amber-600">sécuriser, optimiser et transmettre</strong> 
                leur patrimoine avec la même exigence et la même détermination qu'une mission opérationnelle.
              </p>
            </div>

            {/* Photo */}
            <div className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="/images/pages/home/home-Florent.jpg" 
                alt="Florent Cavailles" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-light text-white mb-2">Florent Cavailles</h3>
                <p className="text-slate-200 font-light">Expert en Structuration de Holding</p>
                <p className="text-slate-300 text-sm font-light mt-2">Ancien militaire • 12+ ans d'expérience patrimoniale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Méthode - Version améliorée */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
              Notre Méthode d'Accompagnement
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Une approche immersive et structurée en 4 étapes, fondée sur la confiance et l'interprofessionnalité
            </p>
          </div>

          <div className="space-y-8">
            {/* Étape 1 */}
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-12 gap-0">
                <div className="md:col-span-1 bg-gradient-to-b from-amber-600 to-amber-700 flex items-center justify-center p-6">
                  <span className="text-4xl font-light text-white">01</span>
                </div>
                <div className="md:col-span-11 p-8">
                  <div className="flex items-start mb-4">
                    <Briefcase className="text-amber-600 mr-4 mt-1 flex-shrink-0" size={28} />
                    <div>
                      <h3 className="text-2xl font-light text-slate-900 mb-2">Audit Patrimonial Complet</h3>
                      <p className="text-amber-600 text-sm font-light">Durée : 1h30 à 2h</p>
                    </div>
                  </div>
                  <p className="text-slate-600 font-light leading-relaxed mb-4">
                    Notre approche va bien plus loin que la simple gestion des intérêts financiers. Pour être efficients dans la gestion 
                    de votre patrimoine, nous élargissons notre vision à des considérations qui dépassent le cadre strictement financier. 
                    <strong className="text-slate-900"> Nous devenons votre homme ou femme de confiance</strong>, intégré dans vos processus 
                    de prise de décisions stratégiques.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-slate-700 text-sm font-light mb-2"><strong>Nous analysons :</strong></p>
                    <ul className="text-slate-600 text-sm font-light space-y-1">
                      <li>• Votre structure actuelle et son fonctionnement</li>
                      <li>• Vos objectifs patrimoniaux à court, moyen et long terme</li>
                      <li>• Votre situation familiale et vos enjeux de transmission</li>
                      <li>• Les opportunités d'optimisation fiscale et juridique</li>
                      <li>• Vos besoins en protection et sécurisation du patrimoine</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-12 gap-0">
                <div className="md:col-span-1 bg-gradient-to-b from-blue-600 to-blue-700 flex items-center justify-center p-6">
                  <span className="text-4xl font-light text-white">02</span>
                </div>
                <div className="md:col-span-11 p-8">
                  <div className="flex items-start mb-4">
                    <FileText className="text-blue-600 mr-4 mt-1 flex-shrink-0" size={28} />
                    <div>
                      <h3 className="text-2xl font-light text-slate-900 mb-2">Élaboration d'un Devis au Forfait</h3>
                      <p className="text-blue-600 text-sm font-light">Transparence totale • Aucun frais caché</p>
                    </div>
                  </div>
                  <p className="text-slate-600 font-light leading-relaxed mb-4">
                    Suite à l'audit, nous vous présentons un <strong className="text-slate-900">devis détaillé au forfait</strong> incluant 
                    l'ensemble des prestations nécessaires à la réalisation de votre projet. Chaque mission est chiffrée en amont, 
                    vous garantissant une <strong className="text-slate-900">maîtrise totale de votre budget</strong>.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                    <p className="text-slate-700 text-sm font-light">
                      <strong className="text-blue-600">Notre engagement :</strong> Pas de surprise, pas de dépassement. 
                      Tout est indiqué dès le début pour que vous puissiez prendre votre décision en toute connaissance de cause.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-12 gap-0">
                <div className="md:col-span-1 bg-gradient-to-b from-emerald-600 to-emerald-700 flex items-center justify-center p-6">
                  <span className="text-4xl font-light text-white">03</span>
                </div>
                <div className="md:col-span-11 p-8">
                  <div className="flex items-start mb-4">
                    <Users className="text-emerald-600 mr-4 mt-1 flex-shrink-0" size={28} />
                    <div>
                      <h3 className="text-2xl font-light text-slate-900 mb-2">Stratégie Sur-Mesure & Interprofessionnalité</h3>
                      <p className="text-emerald-600 text-sm font-light">Coordination d'un réseau d'experts</p>
                    </div>
                  </div>
                  <p className="text-slate-600 font-light leading-relaxed mb-4">
                    Après validation du devis, nous élaborons votre stratégie patrimoniale en mobilisant, si besoin, notre réseau d'experts : 
                    notaires, avocats, experts-comptables, banquiers privés. <strong className="text-slate-900">L'interprofessionnalité 
                    est au cœur de notre méthode</strong> pour éviter les « angles morts ».
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg mb-4">
                    <p className="text-slate-700 text-sm font-light mb-2"><strong>Notre valeur ajoutée :</strong></p>
                    <p className="text-slate-600 text-sm font-light leading-relaxed">
                      En centralisant la vision de chaque expert qui, par définition, agit dans le cadre exclusif de ses compétences, 
                      nous élargissons l'angle de vue à l'ensemble des disciplines susceptibles d'influencer votre performance patrimoniale. 
                      Cette coordination évite les incohérences et optimise chaque décision.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-slate-200 p-3 rounded">
                      <p className="text-slate-900 text-sm font-light mb-1"><strong>Notaires</strong></p>
                      <p className="text-slate-600 text-xs font-light">Actes juridiques, donations, pactes</p>
                    </div>
                    <div className="border border-slate-200 p-3 rounded">
                      <p className="text-slate-900 text-sm font-light mb-1"><strong>Avocats</strong></p>
                      <p className="text-slate-600 text-xs font-light">Sécurité juridique, contentieux</p>
                    </div>
                    <div className="border border-slate-200 p-3 rounded">
                      <p className="text-slate-900 text-sm font-light mb-1"><strong>Experts-Comptables</strong></p>
                      <p className="text-slate-600 text-xs font-light">Optimisation fiscale, comptes</p>
                    </div>
                    <div className="border border-slate-200 p-3 rounded">
                      <p className="text-slate-900 text-sm font-light mb-1"><strong>Assets Management</strong></p>
                      <p className="text-slate-600 text-xs font-light">Allocation, trésorerie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Étape 4 */}
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-12 gap-0">
                <div className="md:col-span-1 bg-gradient-to-b from-purple-600 to-purple-700 flex items-center justify-center p-6">
                  <span className="text-4xl font-light text-white">04</span>
                </div>
                <div className="md:col-span-11 p-8">
                  <div className="flex items-start mb-4">
                    <Target className="text-purple-600 mr-4 mt-1 flex-shrink-0" size={28} />
                    <div>
                      <h3 className="text-2xl font-light text-slate-900 mb-2">Suivi & Optimisation dans le Temps</h3>
                      <p className="text-purple-600 text-sm font-light">Accompagnement continu</p>
                    </div>
                  </div>
                  <p className="text-slate-600 font-light leading-relaxed mb-4">
                    La gestion patrimoniale n'est pas un événement ponctuel mais un <strong className="text-slate-900">processus continu</strong>. 
                    Nous assurons un suivi régulier de votre structure pour l'adapter aux évolutions législatives, à votre situation personnelle 
                    et aux opportunités du marché.
                  </p>
                  <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg">
                    <p className="text-slate-700 text-sm font-light mb-2">
                      <strong className="text-purple-600">Notre position privilégiée</strong> nous confère à la fois le recul nécessaire 
                      à une analyse froide des paramètres et une connexion forte qui nous permet de comprendre vos priorités réelles. 
                      Nous proposons ainsi des orientations parfois plus humaines que purement financières.
                    </p>
                    <p className="text-slate-600 text-xs font-light mt-2">
                      Points d'étape trimestriels • Veille juridique et fiscale • Ajustements stratégiques
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Citation finale */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-amber-50 to-slate-50 border border-amber-100 p-8 rounded-lg">
              <p className="text-lg text-slate-700 font-light leading-relaxed italic mb-4">
                « Dans la pratique du noble art de la gestion de patrimoine, la confiance et la connaissance sont au cœur 
                de notre accompagnement. Nous sommes dépositaires et gardiens de la confiance qui nous est accordée pour 
                nous immerger dans vos problématiques. »
              </p>
              <p className="text-amber-600 font-light text-sm">— Florent Cavailles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Actualités */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
              Actualités & Conseils
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Découvrez nos derniers articles sur la gestion patrimoniale, les holdings et la transmission d'entreprise
            </p>
          </div>

          <ArticlesSection />

          {/* CTA vers le blog */}
          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-flex items-center justify-center border border-slate-200 hover:border-amber-600 hover:bg-amber-50 text-slate-900 px-8 py-4 text-base font-light transition-all group"
            >
              Voir tous les articles
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-cta" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M0 32V0h32" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-cta)"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Prêt à optimiser votre structure patrimoniale ?
          </h2>
          <p className="text-xl text-slate-300 font-light mb-12 leading-relaxed">
            Échangeons sur votre situation et vos objectifs lors d'un premier rendez-vous sans engagement
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://taap.it/i3gsEr" 
              className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-base font-light transition-all hover:shadow-xl hover:scale-105"
            >
              Prendre rendez-vous
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

      <Footer currentPage="accueil" />
    </div>
  )
}