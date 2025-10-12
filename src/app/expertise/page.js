'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, ChevronDown, CheckCircle, Users, Shield, TrendingUp, Award, Heart, Target, BarChart3, Building, Landmark, PiggyBank, Home, TrendingDown } from 'lucide-react'

export default function ExpertisePage() {
  const [openSolution, setOpenSolution] = useState(null)

  const solutions = [
    {
      id: 'assurance-vie-lux',
      title: 'Assurance-vie luxembourgeoise',
      icon: <Shield className="w-6 h-6" />,
      description: 'Protection renforcée, diversification internationale, cadre juridique sécurisé',
      details: 'Le Luxembourg offre un cadre réglementaire protecteur avec le super-privilège des assurés, une gamme d\'actifs élargie et une fiscalité attractive pour les patrimoines significatifs.'
    },
    {
      id: 'capitalisation-lux',
      title: 'Contrat de capitalisation luxembourgeois',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Transmission facilitée, fiscalité optimisée, gestion pilotée',
      details: 'Idéal pour la constitution et la transmission de patrimoine, le contrat de capitalisation luxembourgeois permet une gestion professionnelle avec une fiscalité avantageuse en cas de transmission.'
    },
    {
      id: 'compte-titres',
      title: 'Compte titres',
      icon: <BarChart3 className="w-6 h-6" />,
      description: 'Liberté totale, liquidité, accès aux marchés internationaux',
      details: 'Sans plafond ni contrainte, le compte-titres permet d\'investir sur tous les marchés et de bénéficier d\'une fiscalité attractive après 8 ans de détention (abattement 500 000 € PFU).'
    },
    {
      id: 'private-equity',
      title: 'Private Equity',
      icon: <Building className="w-6 h-6" />,
      description: 'Performance long terme, diversification, participation à la croissance',
      details: 'Accédez aux meilleures opportunités du non-coté : capital-transmission, capital-développement, capital-risque. Horizon 5-10 ans, objectifs de performance supérieurs aux marchés cotés.'
    },
    {
      id: 'immobilier',
      title: 'Immobilier',
      icon: <Home className="w-6 h-6" />,
      description: 'Valeur refuge, revenus locatifs, levier bancaire',
      details: 'Investissement direct ou via SCI, résidentiel ou professionnel. L\'immobilier reste un pilier de diversification patrimoniale avec des revenus récurrents et une valorisation long terme.'
    },
    {
      id: 'defiscalisation',
      title: 'Défiscalisation',
      icon: <TrendingDown className="w-6 h-6" />,
      description: 'Optimisation fiscale, dispositifs légaux, réduction d\'impôts',
      details: 'Loi Pinel, Malraux, Monuments Historiques, FCPI/FIP, girardin industriel. Réduisez votre impôt tout en constituant un patrimoine pérenne grâce aux dispositifs légaux.'
    },
    {
      id: 'scpi',
      title: 'SCPI',
      icon: <Landmark className="w-6 h-6" />,
      description: 'Revenus réguliers, mutualisation, gestion déléguée',
      description: 'Investissement immobilier clé en main avec revenus trimestriels. Les SCPI offrent une exposition diversifiée (bureaux, commerces, santé, logistique) sans contrainte de gestion.'
    }
  ]

  return (
    <>
      <Header currentPage="expertise" />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-slate-900 text-white py-32">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80" 
              alt="Expertise patrimoniale"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto px-6">
            {/* Fil d'Ariane */}
            <div className="flex items-center space-x-2 text-sm text-slate-300 mb-8">
              <a href="/" className="hover:text-white transition">Accueil</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Expertise</span>
            </div>

            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Un médecin de famille<br />
              <span className="text-amber-400">pour votre patrimoine</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl leading-relaxed">
              Depuis 2020, une approche holistique de votre patrimoine : écoute, expertise technique et réseau de spécialistes pour un accompagnement durable.
            </p>
          </div>
        </div>

        {/* Introduction - Approche médicale */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Une approche centrée sur votre projet de vie</h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Depuis 2020, Florent exerce une mission singulière dans la gestion patrimoniale : celle d'un <strong>véritable médecin de famille pour votre patrimoine</strong>. Cette métaphore illustre parfaitement son approche centrée sur le client, où chaque situation est analysée dans sa globalité, avec rigueur et bienveillance.
                </p>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Comme un médecin suit ses patients sur le long terme, Florent accompagne ses clients à chaque étape de leur vie patrimoniale, <strong>anticipant les besoins, ajustant les stratégies et sécurisant les décisions</strong>.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                  <p className="text-slate-700">
                    Le patrimoine est envisagé comme un <strong>organisme vivant, évolutif</strong>, qu'il faut soigner, protéger et faire fructifier dans le respect des objectifs de vie.
                  </p>
                </div>
              </div>
              
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" 
                  alt="Approche personnalisée"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Synergie experte */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Une synergie experte au service de votre projet</h2>
              <p className="text-xl text-slate-600">Un réseau de spécialistes pour une prise en charge complète</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                  alt="Réseau d'experts"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Florent ne travaille jamais seul. Il s'est entouré d'un <strong>réseau solide de spécialistes reconnus</strong> dans les domaines clés de la gestion patrimoniale : experts en retraite et prévoyance, fiscalistes aguerris, conseillers en optimisation patrimoniale.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Users className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Coordination multiprofessionnelle</h4>
                      <p className="text-slate-600 text-sm">Notaires, experts-comptables, avocats : une synergie parfaite pour sécuriser juridiquement et fiscalement vos opérations</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Shield className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Anticipation des risques</h4>
                      <p className="text-slate-600 text-sm">Analyse approfondie pour identifier et prévenir les risques patrimoniaux, fiscaux et juridiques</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Target className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Cohérence globale</h4>
                      <p className="text-slate-600 text-sm">Une vision d'ensemble pour garantir l'harmonie entre toutes les dimensions de votre patrimoine</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Exemple concret : transmission familiale via holding</h3>
              <p className="text-slate-700 mb-4 leading-relaxed">
                Dans le cadre d'une transmission familiale via une holding patrimoniale, Florent travaille en étroite collaboration :
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Avec le <strong>notaire</strong> pour rédiger les actes de donation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Avec l'<strong>expert-comptable</strong> pour structurer fiscalement la holding</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Avec l'<strong>avocat</strong> pour sécuriser les clauses spécifiques (Dutreil, démembrement)</span>
                </li>
              </ul>
              <p className="text-slate-700 mt-4 italic">
                Cette orchestration garantit une stratégie fluide, sécurisée et parfaitement adaptée à votre situation.
              </p>
            </div>
          </div>
        </section>

        {/* Holdings patrimoniales depuis 2020 */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Expertise confirmée en holdings patrimoniales</h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Depuis 2020, Florent intervient régulièrement dans la <strong>structuration et la gestion de holdings patrimoniales</strong>, un outil incontournable pour les entrepreneurs, familles et investisseurs souhaitant optimiser la gestion, la transmission et la protection de leur patrimoine.
                </p>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">Avantages de la holding patrimoniale</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Centralisation des actifs et simplification de la gestion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Transmission facilitée via démembrement de propriété</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Optimisation fiscale (intégration fiscale, régime mère-fille, Pacte Dutreil)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Protection du patrimoine et maîtrise de la gouvernance</span>
                  </li>
                </ul>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                  <h4 className="font-bold text-slate-900 mb-2">Cas concret</h4>
                  <p className="text-slate-700 text-sm">
                    Un entrepreneur souhaitant transmettre progressivement son entreprise familiale à ses enfants peut mettre en place une <strong>holding animatrice</strong>, combinant démembrement de parts sociales et Pacte Dutreil, pour <strong>réduire drastiquement les droits de succession</strong> tout en conservant le contrôle opérationnel.
                  </p>
                </div>
              </div>

              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" 
                  alt="Holdings patrimoniales"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Approche globale : retraite, prévoyance, fiscalité */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Approche globale : retraite, prévoyance et fiscalité</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <PiggyBank className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Retraite</h3>
                <p className="text-slate-700 mb-4">
                  Optimisation des régimes obligatoires et complémentaires pour <strong>sécuriser votre avenir</strong> et celui de votre famille.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>TNS, dirigeants, salariés, professions libérales</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>PER, Madelin, Article 83, PERCO</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Intégration dans la stratégie patrimoniale globale</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Prévoyance</h3>
                <p className="text-slate-700 mb-4">
                  Protection sociale renforcée pour <strong>préserver votre famille</strong> en cas d'aléa de la vie.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Garanties décès, invalidité, incapacité</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Contrats collectifs et individuels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Analyse des besoins et dimensionnement adapté</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <TrendingDown className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Fiscalité</h3>
                <p className="text-slate-700 mb-4">
                  Optimisation légale pour <strong>maximiser la rentabilité</strong> et faciliter la transmission.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Revenus, plus-values, droits de succession</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Démembrement, donations, dispositifs locatifs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Veille réglementaire et opportunités légales</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section Solutions - Accordéon */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Nos solutions d'investissement</h2>
              <p className="text-xl text-slate-600">Accédez aux meilleures opportunités, sélectionnées pour leur qualité et leur performance</p>
            </div>

            <div className="space-y-4">
              {solutions.map((solution) => (
                <div key={solution.id} className="bg-slate-50 rounded-xl overflow-hidden border-2 border-slate-200 hover:border-amber-400 transition">
                  <button
                    onClick={() => setOpenSolution(openSolution === solution.id ? null : solution.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center flex-1">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        {solution.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{solution.title}</h3>
                        <p className="text-sm text-slate-600">{solution.description}</p>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`w-6 h-6 text-slate-400 transition-transform ${
                        openSolution === solution.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {openSolution === solution.id && (
                    <div className="px-6 pb-6 border-t border-slate-200 pt-4">
                      <p className="text-slate-700 leading-relaxed">{solution.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Le projet client au centre */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Le projet client : la pierre angulaire</h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Chaque démarche patrimoniale initiée par Florent place le <strong>projet client au centre</strong>. Il ne s'agit pas seulement de gérer des actifs, mais de comprendre les aspirations profondes, les contraintes personnelles, et les objectifs de vie.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <Heart className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Diagnostic patrimonial complet</h4>
                      <p className="text-slate-600 text-sm">Analyse globale de votre situation actuelle et de vos objectifs futurs</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Target className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Définition claire des priorités</h4>
                      <p className="text-slate-600 text-sm">Hiérarchisation des objectifs selon vos projets de vie</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Suivi régulier et ajustements</h4>
                      <p className="text-slate-600 text-sm">Accompagnement dans la durée avec transparence et pédagogie</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="font-bold text-slate-900 mb-3">Exemple : transmission et préparation retraite</h4>
                  <p className="text-slate-700 text-sm">
                    Un couple préparant la transmission de son patrimoine bénéficie d'un accompagnement sur-mesure intégrant la <strong>fiscalité successorale</strong>, la <strong>protection du conjoint survivant</strong>, et la <strong>préparation de la retraite</strong>, tout en tenant compte des spécificités familiales et professionnelles.
                  </p>
                </div>
              </div>

              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" 
                  alt="Projet client"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Garantie d'excellence - Inspiré Cheval Blanc */}
        <section className="py-20 bg-amber-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500 rounded-full mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Notre garantie d'excellence</h2>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              ExpertiseHolding s'engage, dans le cadre de sa mission de conseil en investissement financier, à <strong>suivre vos investissements, vous conseiller, et s'assurer de la continuité de vos objectifs</strong> dans le temps.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-amber-500 mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Architecture ouverte</h4>
                <p className="text-sm text-slate-600">Sélection objective des meilleures solutions sans contrainte commerciale</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-amber-500 mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Performance suivie</h4>
                <p className="text-sm text-slate-600">Suivi régulier des performances et ajustements si nécessaire</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-amber-500 mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Veille continue</h4>
                <p className="text-sm text-slate-600">Remise en question permanente pour s'adapter aux évolutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1600&q=80" 
              alt="Contact expertise"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à donner un sens à votre patrimoine ?</h2>
            <p className="text-xl text-slate-200 mb-8">
              Bénéficiez d'un accompagnement expert, personnalisé et durable pour atteindre vos objectifs patrimoniaux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:florent@occitea-ip.fr" 
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition"
              >
                Prendre RDV
              </a>
              <a 
                href="tel:0607963135" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition"
              >
                06 07 96 31 35
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-700">
              <p className="text-slate-300 text-sm italic">
                "Ne vous confiez pas à ceux qui ont déjà trouvé la vérité. Confiez-vous à ceux qui continuent de la chercher."
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer currentPage="expertise" />
    </>
  )
}