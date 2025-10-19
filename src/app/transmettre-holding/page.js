'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, CheckCircle, AlertTriangle, TrendingUp, Users, Shield, FileText, Award, Scale, DollarSign } from 'lucide-react'

export default function TransmettreHoldingPage() {
  return (
    <>
      <Header currentPage="transmettre" />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-slate-900 text-white py-32">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80" 
              alt="Transmission patrimoine"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto px-6">
            {/* Fil d'Ariane */}
            <div className="flex items-center space-x-2 text-sm text-slate-300 mb-8">
              <a href="/" className="hover:text-white transition">Accueil</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Transmettre sa Holding</span>
            </div>

            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Transmettre sa Holding<br />
              <span className="text-amber-400">en 2025</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl leading-relaxed">
              Optimisez la transmission de votre patrimoine (SAS, SARL, SCI à l'IS) avec les dispositifs fiscaux adaptés : Pacte Dutreil, démembrement, donation-partage.
            </p>
          </div>
        </div>

        {/* Sommaire interactif */}
        <div className="bg-slate-50 border-b border-slate-200 sticky top-0 z-40 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#enjeux" className="text-slate-600 hover:text-amber-600 transition font-medium">Enjeux</a>
              <a href="#strategies" className="text-slate-600 hover:text-amber-600 transition font-medium">Stratégies</a>
              <a href="#dutreil" className="text-slate-600 hover:text-amber-600 transition font-medium">Pacte Dutreil</a>
              <a href="#cas-clients" className="text-slate-600 hover:text-amber-600 transition font-medium">Cas Clients</a>
              <a href="#role-cgp" className="text-slate-600 hover:text-amber-600 transition font-medium">Rôle du CGP</a>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                La transmission d'une holding patrimoniale est un acte stratégique majeur qui requiert une approche globale intégrant <strong>les dimensions juridiques, fiscales et patrimoniales</strong>. En 2025, les dispositifs de faveur (Pacte Dutreil, démembrement, donation-partage) permettent d'optimiser significativement la charge fiscale tout en organisant une gouvernance pérenne.
              </p>
              
              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Périmètre de cette analyse</h3>
                <p className="text-slate-700 mb-0">
                  Cette note opérationnelle s'appuie sur les textes légaux du CGI et du Code civil, la doctrine administrative (BOI) et la jurisprudence applicable en 2025. Elle présente trois cas clients concrets (SAS, SARL, SCI à l'IS) et situe le rôle clé du CGP au sein d'une équipe multiprofessionnelle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Enjeux avec photo */}
        <section id="enjeux" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Enjeux de la transmission</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Enjeux civils et familiaux</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Respecter la réserve héréditaire</strong> et organiser une répartition équitable</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Éviter l'indivision</strong> grâce à la structure holding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Organiser la gouvernance</strong> (droits de vote, clauses d'agrément)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Protéger le conjoint</strong> et lisser les transferts</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80" 
                  alt="Famille et transmission"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" 
                  alt="Optimisation fiscale"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Enjeux fiscaux et financiers</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <TrendingUp className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Abattement 100 000 €</strong> par parent et par enfant (renouvelable tous les 15 ans)</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Exonération Dutreil 75 %</strong> de la valeur des titres éligibles</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Réduction 50 % des droits</strong> si donation pleine propriété et donateur moins de 70 ans</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Décotes minorité/liquidité</strong> de 10 % à 20 % selon jurisprudence</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-6 h-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Démembrement</strong> selon barème art. 669 CGI (répartition USU/NP)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stratégies de transmission */}
        <section id="strategies" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Stratégies de transmission</h2>
            <p className="text-xl text-slate-600 mb-12">Chaque modalité présente des avantages spécifiques selon vos objectifs patrimoniaux</p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Donation pleine propriété */}
              <div className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-amber-400 transition">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Donation pleine propriété</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  Transfert immédiat du pouvoir et des revenus. Privilégie la <strong>réduction de 50 % des droits</strong> sous Dutreil si le donateur a moins de 70 ans.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700"><strong>Idéal pour :</strong> Transmission rapide avec optimisation fiscale maximale</p>
                </div>
              </div>

              {/* Donation démembrée */}
              <div className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-amber-400 transition">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                    <Scale className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Donation démembrée</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  Le donateur conserve l'usufruit (revenus et/ou contrôle), seule la nue-propriété est transmise. <strong>Base taxable réduite</strong> selon l'âge (art. 669 CGI).
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700"><strong>Idéal pour :</strong> Conserver les revenus tout en préparant la succession</p>
                </div>
              </div>

              {/* Donation-partage */}
              <div className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-amber-400 transition">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Donation-partage</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  Fige les valeurs au jour de l'acte et évite le rapport ultérieur. <strong>Répartition apaisée</strong> entre les enfants, combinable avec décotes et Dutreil.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700"><strong>Idéal pour :</strong> Prévenir les conflits et figer les valorisations</p>
                </div>
              </div>

              {/* Cession */}
              <div className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-amber-400 transition">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                    <DollarSign className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Cession à titre onéreux</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  Alternative pour transmission à des tiers ou MBO familial. Attention à la <strong>plus-value (PFU 12,8 % + PS)</strong>, sauf purge par donation préalable.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700"><strong>Idéal pour :</strong> Transmission hors famille ou liquidation patrimoniale</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pacte Dutreil avec photo */}
        <section id="dutreil" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Le Pacte Dutreil : exonération de 75 %</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-xl text-slate-700 mb-6 leading-relaxed">
                  Le Pacte Dutreil (art. 787 B et 787 C CGI) permet de bénéficier d'une <strong>exonération de 75 % de la valeur</strong> des titres transmis par donation ou succession, sous conditions strictes.
                </p>
                
                <div className="bg-white border-2 border-amber-400 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                    <Award className="w-5 h-5 text-amber-500 mr-2" />
                    Avantage fiscal majeur
                  </h4>
                  <p className="text-slate-700">
                    Sur une holding valorisée à <strong>2 M€</strong>, l'exonération Dutreil ramène l'assiette taxable à <strong>500 000 €</strong>. Combiné aux abattements et à la réduction de 50 % (si donateur moins de 70 ans), l'économie fiscale peut atteindre plusieurs centaines de milliers d'euros.
                  </p>
                </div>
              </div>
              
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80" 
                  alt="Pacte Dutreil"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-6">Conditions d'éligibilité</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Engagement collectif</h4>
                <p className="text-slate-600 text-sm">
                  Minimum 2 ans avant transmission, portant sur au moins 34 % des droits de vote et 17 % des droits financiers
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Engagement individuel</h4>
                <p className="text-slate-600 text-sm">
                  Conservation des titres pendant 4 ans minimum par les bénéficiaires
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Fonction de direction</h4>
                <p className="text-slate-600 text-sm">
                  Pour les sociétés à l'IS : exercice d'une fonction de direction pendant 3 ans minimum après la transmission
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                <AlertTriangle className="w-5 h-5 text-amber-600 mr-2" />
                Holdings opérationnelles vs pures
              </h4>
              <p className="text-slate-700 mb-4">
                Le Pacte Dutreil s'applique aux <strong>holdings opérationnelles</strong> qui exercent une activité d'animation de groupe (services partagés, stratégie commune, conventions intragroupe). Pour les holdings pures, l'éligibilité peut être obtenue par interposition si elles détiennent des filiales opérationnelles éligibles.
              </p>
              <p className="text-slate-700 mb-0">
                <strong>Documentation essentielle :</strong> procès-verbaux, conventions de services, organigramme fonctionnel, preuves de l'animation effective.
              </p>
            </div>
          </div>
        </section>

        {/* Section Cas Clients - MISE EN AVANT */}
        <section id="cas-clients" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">3 Cas Clients Concrets en 2025</h2>
              <p className="text-xl text-slate-600">Stratégies de transmission adaptées selon la structure et les objectifs patrimoniaux</p>
            </div>

            {/* Cas 1 - SAS */}
            <div className="mb-16 bg-slate-50 rounded-2xl p-10 border-2 border-amber-400">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">SAS à l'IS - Holding opérationnelle</h3>
                  <p className="text-slate-600">Valorisation 2 000 000 € • 2 enfants</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Objectif</h4>
                  <p className="text-slate-700 mb-4">
                    Transmettre 100 % des actions tout en maintenant une gouvernance familiale claire. Donateur âgé de moins de 70 ans.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mb-4 mt-6">Stratégie retenue</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Engagement collectif puis individuel (Dutreil)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Donation-partage en pleine propriété (50/50)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Clauses statutaires renforcées (agrément, inaliénabilité 10 ans, pacte d'associés)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Calcul de la base taxable</h4>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Valeur totale de la SAS</span>
                      <span className="font-semibold text-slate-900">2 000 000 €</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Exonération Dutreil (75 %)</span>
                      <span className="font-semibold text-amber-600">- 1 500 000 €</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Assiette après Dutreil</span>
                      <span className="font-semibold text-slate-900">500 000 €</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Part par enfant</span>
                      <span className="font-semibold text-slate-900">250 000 €</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Abattement (100 000 € × 2 enfants)</span>
                      <span className="font-semibold text-amber-600">- 100 000 €</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b-2 border-slate-300">
                      <span className="text-slate-600">Base résiduelle par enfant</span>
                      <span className="font-semibold text-slate-900">150 000 €</span>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg mt-4">
                      <p className="text-slate-700 text-xs mb-1"><strong>Réduction de 50 % applicable</strong></p>
                      <p className="text-slate-600 text-xs">Donation pleine propriété + donateur moins de 70 ans</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">Points de vigilance</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Preuve de l'animation (comité stratégique, conventions intragroupe)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Respect des engagements de conservation (6 ans total)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Exercice fonction de direction pendant 3 ans par l'un des enfants</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Documentation des décotes si appliquées (minorité/liquidité)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cas 2 - SARL */}
            <div className="mb-16 bg-slate-50 rounded-2xl p-10 border-2 border-amber-400">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">SARL à l'IS - Holding familiale</h3>
                  <p className="text-slate-600">Valorisation 1 200 000 € • 1 enfant</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Objectif</h4>
                  <p className="text-slate-700 mb-4">
                    Transmettre en optimisant la fiscalité tout en conservant les revenus (dividendes). Préparation progressive de la succession.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mb-4 mt-6">Stratégie retenue</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Donation démembrée (nue-propriété à l'enfant)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Usufruit conservé par le parent</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Éligibilité Dutreil sous conditions</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Calcul de la base taxable</h4>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Valeur totale de la SARL</span>
                      <span className="font-semibold text-slate-900">1 200 000 €</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Exonération Dutreil (75 %)</span>
                      <span className="font-semibold text-amber-600">- 900 000 €</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Assiette après Dutreil</span>
                      <span className="font-semibold text-slate-900">300 000 €</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Évaluation nue-propriété (art. 669)</span>
                      <span className="font-semibold text-slate-900">Selon âge USU</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b-2 border-slate-300">
                      <span className="text-slate-600">Abattement ligne directe</span>
                      <span className="font-semibold text-amber-600">- 100 000 €</span>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg mt-4">
                      <p className="text-slate-700 text-xs mb-1"><strong>Réduction 50 % NON applicable</strong></p>
                      <p className="text-slate-600 text-xs">Donation en démembrement (pas en pleine propriété)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">Gouvernance et flux</h4>
                <p className="text-slate-700 mb-3">
                  Le parent conserve l'usufruit avec <strong>droit aux dividendes</strong>. Attention aux cotisations sociales si gérant majoritaire. La mise en réserve est possible pour renforcer les fonds propres, en évitant toute requalification en donation indirecte.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700">
                    <strong>Régime mère-fille :</strong> Quote-part de frais et charges de 5 % sur les dividendes remontés des filiales à la holding.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">Points de vigilance</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Clauses d'agrément propres à la SARL</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Limitation des droits de l'usufruitier si Dutreil</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Gestion du statut social du gérant (cotisations sur dividendes)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Documentation des décotes éventuelles (minorité, liquidité)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cas 3 - SCI */}
            <div className="bg-slate-50 rounded-2xl p-10 border-2 border-amber-400">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">SCI à l'IS - Prépondérance immobilière</h3>
                  <p className="text-slate-600">Valorisation 900 000 € • 2 enfants</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Objectif</h4>
                  <p className="text-slate-700 mb-4">
                    Éviter l'indivision immobilière et transmettre progressivement le patrimoine immobilier détenu via la SCI.
                  </p>
                  
                  <h4 className="text-xl font-bold text-slate-900 mb-4 mt-6">Stratégie retenue</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Donation-partage démembrée des parts sociales</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Nue-propriété aux enfants, usufruit conservé</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">Dutreil non mobilisable (pure détention civile)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Calcul de la base taxable</h4>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Valeur totale de la SCI</span>
                      <span className="font-semibold text-slate-900">900 000 €</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Dutreil</span>
                      <span className="font-semibold text-red-600">Non applicable</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Évaluation nue-propriété (art. 669)</span>
                      <span className="font-semibold text-slate-900">Selon âge USU</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Décotes (minorité/liquidité)</span>
                      <span className="font-semibold text-amber-600">10 % à 20 %</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b-2 border-slate-300">
                      <span className="text-slate-600">Abattements (2 enfants × 2 parents)</span>
                      <span className="font-semibold text-amber-600">4 × 100 000 €</span>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg mt-4">
                      <p className="text-slate-700 text-xs mb-1"><strong>Justification des décotes essentielle</strong></p>
                      <p className="text-slate-600 text-xs">Clauses d'agrément, absence de marché, minorité</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">Spécificités IS pour SCI</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Plus-values immobilières taxées à l'IS au niveau de la SCI</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Pas d'abattement pour durée de détention (contrairement à l'IR)</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Attention aux conséquences d'une cession ultérieure d'immeuble</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">IFI : vigilance pour titres de sociétés à prépondérance immobilière</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3">Points de vigilance</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Gérance civile avec clauses d'agrément strictes</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Pacte familial pour arbitrages (travaux, dividendes)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Documentation valorisation et décotes (rapport indépendant)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">Effet de l'IS sur fiscalité des cessions immobilières</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tableau comparatif SAS/SARL/SCI avec photo */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Comparatif opérationnel des structures</h2>
            <p className="text-xl text-slate-600 mb-12">Chaque forme juridique présente des spécificités à considérer</p>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80" 
                  alt="Comparaison structures"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div>
                <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">SAS à l'IS</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Souplesse statutaire maximale (agrément, inaliénabilité, exclusion)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Actions facilement transmissibles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Idéal pour Dutreil (holding opérationnelle)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">SARL à l'IS</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cadre juridique éprouvé, souplesse moyenne</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Parts plus encadrées (agrément obligatoire)</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cotisations sociales sur dividendes du gérant majoritaire</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">SCI à l'IS</h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Outil de détention immobilière (évite l'indivision)</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dutreil non applicable sauf animation de groupe</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Plus-values immobilières à l'IS sans abattement durée</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rôle du CGP avec photo */}
        <section id="role-cgp" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Le CGP, chef d'orchestre de la transmission</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
                  alt="CGP coordination"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Le Conseiller en Gestion de Patrimoine joue un <strong>rôle central</strong> dans la conception, la coordination multiprofessionnelle et le suivi des engagements, garantissant la cohérence probatoire et la pérennité du montage.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <FileText className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Diagnostic global</h4>
                      <p className="text-slate-600 text-sm">Situation familiale, cartographie des actifs, objectifs (contrôle, revenus, égalité)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Scale className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Ingénierie juridique et fiscale</h4>
                      <p className="text-slate-600 text-sm">Choix de la forme sociale, mode de transmission, activation Dutreil, décotes</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Users className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Coordination multiprofessionnelle</h4>
                      <p className="text-slate-600 text-sm">Interface entre notaire, avocat fiscaliste, expert-comptable</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Shield className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Gouvernance et médiation</h4>
                      <p className="text-slate-600 text-sm">Rédaction/revue des statuts et pactes, organisation des droits de vote</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Suivi et conformité</h4>
                      <p className="text-slate-600 text-sm">Calendrier des engagements, attestations, veille légale/fiscale</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Livrables attendus par phase</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-bold text-amber-600 mb-2">Diagnostic</h4>
                  <p className="text-sm text-slate-700">Note d'audit, schéma cible, analyse des risques</p>
                </div>
                <div>
                  <h4 className="font-bold text-amber-600 mb-2">Structuration</h4>
                  <p className="text-sm text-slate-700">Mémos fiscaux, term-sheet statutaire, stratégie Dutreil</p>
                </div>
                <div>
                  <h4 className="font-bold text-amber-600 mb-2">Exécution</h4>
                  <p className="text-sm text-slate-700">Dataroom, justificatifs décotes, preuves animation</p>
                </div>
                <div>
                  <h4 className="font-bold text-amber-600 mb-2">Suivi</h4>
                  <p className="text-sm text-slate-700">Calendrier engagements, checklists annuelles</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Points de vigilance */}
        <section className="py-20 bg-amber-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Points de vigilance essentiels</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">Requalification holding pure</h3>
                </div>
                <p className="text-slate-700 mb-3">Perte du bénéfice Dutreil si l'animation n'est pas prouvée.</p>
                <p className="text-sm text-slate-600"><strong>Leviers :</strong> Preuves d'animation, conventions intragroupe, PV, organes actifs</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">Non-respect des engagements</h3>
                </div>
                <p className="text-slate-700 mb-3">Droits supplémentaires, pénalités et intérêts de retard.</p>
                <p className="text-sm text-slate-600"><strong>Leviers :</strong> Calendrier, attestations, suivi annuel, responsabilités désignées</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">Décotes insuffisamment justifiées</h3>
                </div>
                <p className="text-slate-700 mb-3">Redressement de l'assiette taxable par l'administration.</p>
                <p className="text-sm text-slate-600"><strong>Leviers :</strong> Rapport d'évaluation indépendant, documentation des clauses</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">Droits usufruitier trop étendus</h3>
                </div>
                <p className="text-slate-700 mb-3">Risque de remise en cause du Pacte Dutreil.</p>
                <p className="text-sm text-slate-600"><strong>Leviers :</strong> Clauses limitatives, répartition claire des droits de vote</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">Dividendes SARL (gérant maj.)</h3>
                </div>
                <p className="text-slate-700 mb-3">Surcoût lié aux cotisations sociales obligatoires.</p>
                <p className="text-sm text-slate-600"><strong>Leviers :</strong> Politique de distribution, arbitrage rémunération/dividendes</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                  <h3 className="text-xl font-bold text-slate-900">Apport 150-0 B ter mal suivi</h3>
                </div>
                <p className="text-slate-700 mb-3">Perte du report d'imposition en cas de non-respect.</p>
                <p className="text-sm text-slate-600"><strong>Leviers :</strong> Respect des délais, réinvestissement éligible, traçabilité</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=1600&q=80" 
              alt="Contact"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à optimiser la transmission de votre holding ?</h2>
            <p className="text-xl text-slate-200 mb-8">
              Bénéficiez d'un accompagnement expert pour structurer votre transmission patrimoniale en toute sécurité.
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
          </div>
        </section>

        {/* Références légales */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Références légales et réglementaires</h3>
            <div className="prose prose-sm max-w-none text-slate-600">
              <p className="mb-4">
                <strong>Code Général des Impôts :</strong> Art. 787 B et 787 C (Pacte Dutreil), Art. 790 (réduction 50%), Art. 200 A, 2 (PFU), Art. 150-0 B ter (report d'imposition), Art. 669 (barème démembrement), Art. 1133 (réunion usufruit/NP).
              </p>
              <p className="mb-4">
                <strong>Doctrine administrative :</strong> BOI sur holdings opérationnelles/pures, engagements de conservation, transmissions successives, majoration prix de revient.
              </p>
              <p className="mb-0">
                <strong>Jurisprudence :</strong> Décotes minorité/liquidité (15%-20%), conditions Dutreil, mise en réserve post-démembrement.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer currentPage="transmettre" />
    </>
  )
}