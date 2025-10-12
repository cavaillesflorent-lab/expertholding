'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, TrendingUp, Building, CheckCircle, AlertTriangle, Target, Shield, DollarSign, Users, BarChart3, Zap, Lock } from 'lucide-react'

export default function PrivateEquityPage() {
  return (
    <>
      <Header currentPage="expertise" />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-slate-900 text-white py-32">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80" 
              alt="Private Equity"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto px-6">
            {/* Fil d'Ariane */}
            <div className="flex items-center space-x-2 text-sm text-slate-300 mb-8">
              <a href="/" className="hover:text-white transition">Accueil</a>
              <ChevronRight className="w-4 h-4" />
              <a href="/expertise" className="hover:text-white transition">Expertise</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Private Equity</span>
            </div>

            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Private Equity<br />
              <span className="text-amber-400">Investir dans l'économie réelle</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl leading-relaxed">
              Accédez aux sociétés non cotées via holdings et contrat de capitalisation luxembourgeois pour des rendements historiques à deux chiffres.
            </p>
          </div>
        </div>

        {/* Synthèse */}
        <section className="py-20 bg-amber-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Pourquoi le Private Equity ?</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-amber-500 mb-2">13,3%</div>
                <p className="text-slate-700 text-sm">Rendement annuel moyen en France (15 ans)</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-amber-500 mb-2">5-10 ans</div>
                <p className="text-slate-700 text-sm">Horizon d'investissement recommandé</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-amber-500 mb-2">+5,2 pts</div>
                <p className="text-slate-700 text-sm">Surperformance vs actions cotées (2004-2018)</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
                <p className="text-slate-700">
                  <strong>Rendements supérieurs :</strong> prime d'illiquidité et création de valeur opérationnelle, TRI historique 12-14 %/an
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
                <p className="text-slate-700">
                  <strong>Diversification :</strong> faible corrélation aux marchés cotés, accès à l'innovation et aux ruptures technologiques
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <AlertTriangle className="w-8 h-8 text-amber-500 mb-3" />
                <p className="text-slate-700">
                  <strong>Illiquidité :</strong> blocage 5-10 ans avant événement de liquidité (cession, IPO), impossibilité de sortie anticipée
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <AlertTriangle className="w-8 h-8 text-amber-500 mb-3" />
                <p className="text-slate-700">
                  <strong>Risque de perte :</strong> taux de défaillance significatif en capital-risque, nécessité de diversification
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qu'est-ce que le PE */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Qu'est-ce que le Private Equity ?</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Le private equity désigne <strong>toute prise de participation au capital de sociétés non cotées</strong> (CGI art. 200 A 2). L'objectif : financer leur démarrage, leur croissance ou leur transmission.
                </p>

                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  À la différence des investissements boursiers, le private equity permet d'<strong>agir activement sur la gestion</strong> des entreprises pour accroître leur valeur. Les fonds spécialisés collectent des capitaux, investissent, accompagnent pendant 3-10 ans, puis sortent via cession ou introduction en bourse.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                  <p className="text-slate-700 text-sm">
                    <strong>Performance historique :</strong> Entre 2004 et 2018, le secteur a généré un rendement annuel moyen de 14,2 %, surpassant les actions cotées de 5,2 points.
                  </p>
                </div>
              </div>

              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" 
                  alt="Private Equity croissance"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Les 4 stratégies */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Les 4 stratégies d'investissement</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Capital-risque */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Capital-risque (Venture Capital)</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  <strong>Amorçage ou early-stage</strong> de start-up technologiques à fort potentiel. Finance l'innovation et les ruptures.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700"><strong>Risque :</strong> Élevé • <strong>TRI cible :</strong> 20-30 %</p>
                </div>
              </div>

              {/* Capital-développement */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Capital-développement (Growth)</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  <strong>Renforcement des fonds propres</strong> de PME en croissance. Financement de l'expansion internationale, acquisitions.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700"><strong>Risque :</strong> Modéré • <strong>TRI cible :</strong> 12-18 %</p>
                </div>
              </div>

              {/* LBO */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                    <Building className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Capital-transmission (LBO)</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  <strong>Rachat d'entreprise mature</strong> avec levier d'endettement. Remboursement via les cash-flows générés.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700"><strong>Risque :</strong> Modéré à élevé • <strong>TRI cible :</strong> 15-20 %</p>
                </div>
              </div>

              {/* Capital-retournement */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Capital-retournement</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  <strong>Restructuration d'entreprises</strong> en difficulté. Redressement opérationnel et financier.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700"><strong>Risque :</strong> Très élevé • <strong>TRI cible :</strong> 25-35 %</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fiscalité */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Fiscalité : 3 modes de détention</h2>

            {/* Détention directe */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-amber-500 mr-3" />
                <h3 className="text-3xl font-bold text-slate-900">1. Détention directe (personne physique)</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Revenus & plus-values</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <DollarSign className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Dividendes :</strong> PFU 30 % ou option barème IR</span>
                    </li>
                    <li className="flex items-start">
                      <DollarSign className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Plus-values :</strong> PFU 30 % ou barème + abattements (titres {`<`} 2018)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Fonds fiscaux (FIP, FCPI, FCPR)</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Réduction d'IR à l'entrée : 18-25 % du montant investi</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Plafond : 12 000 € (célibataire) / 24 000 € (couple)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Exonération plus-values après 5 ans (CGI art. 163 quinquies B)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Holding opérationnelle */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-amber-500 mr-3" />
                <h3 className="text-3xl font-bold text-slate-900">2. Via holding opérationnelle (animatrice)</h3>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8">
                <p className="text-lg text-slate-700 mb-6">
                  <strong>Participation active</strong> à la conduite de la politique du groupe. Rend des services administratifs, juridiques, stratégiques ou financiers à ses filiales.
                </p>

                <h4 className="font-bold text-slate-900 mb-4">Avantages fiscaux clés</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h5 className="font-bold text-slate-900 mb-2">Régime mère-fille</h5>
                    <p className="text-slate-700 text-sm">Exonération 95 % des dividendes (quote-part 5 % réintégrée)</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h5 className="font-bold text-slate-900 mb-2">Intégration fiscale</h5>
                    <p className="text-slate-700 text-sm">Compensation pertes/profits intra-groupe, déductibilité intérêts</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h5 className="font-bold text-slate-900 mb-2">Exonération IFI</h5>
                    <p className="text-slate-700 text-sm">Titres = biens professionnels, hors assiette IFI</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg">
                    <h5 className="font-bold text-slate-900 mb-2">Pacte Dutreil</h5>
                    <p className="text-slate-700 text-sm">Exonération 75 % transmission, sans limitation niveaux</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Holding patrimoniale */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-amber-500 mr-3" />
                <h3 className="text-3xl font-bold text-slate-900">3. Via holding patrimoniale (passive)</h3>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8">
                <p className="text-lg text-slate-700 mb-6">
                  Objet social <strong>exclusivement financier</strong>, aucune animation directe des filiales.
                </p>

                <h4 className="font-bold text-slate-900 mb-4">Régimes accessibles sous conditions</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Réduction Madelin :</strong> si actif atteint 70 % de participations PME</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Dutreil :</strong> limité à 2 niveaux d'interposition</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700"><strong>IFI :</strong> exonération partielle, 1 niveau uniquement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Régime mère-fille :</strong> 95 % d'exonération maintenu</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contrat Luxembourg */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Logement dans un contrat de capitalisation luxembourgeois</h2>
            <p className="text-xl text-slate-600 mb-12 text-center">Une enveloppe optimisée pour les sociétés</p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&q=80" 
                  alt="Contrat Luxembourg"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  La société (ou holding) peut placer sa trésorerie excédentaire sur un contrat luxembourgeois pour accéder à un <strong>univers d'investissement élargi</strong> : fonds de private equity, club deals, obligations convertibles, etc.
                </p>

                <h4 className="font-bold text-slate-900 mb-4">Avantages spécifiques</h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Neutralité fiscale :</strong> pas d'imposition au Luxembourg, base imposable uniquement au rachat</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700"><strong>360° d'allocation :</strong> compartiments non cotés, side-pockets, SPV de LBO</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Triangle de sécurité :</strong> séparation juridique actifs/assureur/dépositaire</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700"><strong>Portabilité :</strong> maintien du contrat en cas de mobilité EEE</span>
                  </li>
                </ul>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                  <h5 className="font-bold text-slate-900 mb-2">Traitement fiscal à l'IS</h5>
                  <p className="text-slate-700 text-sm">
                    Variations latentes = non imposables. Rachat partiel : quote-part de PV intégrée au résultat (IS 15 % puis 25 %).
                  </p>
                </div>
              </div>
            </div>

            {/* Inconvénients */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-slate-900 mb-6">Inconvénients et contraintes</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm mb-1">Déclaration annuelle obligatoire</h5>
                    <p className="text-slate-600 text-xs">CGI art. 1649 AA : contrats détenus à l'étranger</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm mb-1">Frais élevés</h5>
                    <p className="text-slate-600 text-xs">Entrée 0,5-3 %, gestion 0,30-1,20 % + carried interest PE</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm mb-1">Inéligibilité US persons</h5>
                    <p className="text-slate-600 text-xs">FATCA : refus pour actionnaires américains</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm mb-1">Risque de requalification</h5>
                    <p className="text-slate-600 text-xs">Holding animatrice : vigilance AMF (gestion OPCVM)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* À qui s'adresse */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">À qui s'adresse le Private Equity ?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-xl p-8 border-2 border-amber-400">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Entrepreneur cédant</h3>
                <p className="text-slate-700 mb-4">
                  <strong>Objectif :</strong> Réinvestir le produit de cession, différer l'IR via report art. 150-0 B ter
                </p>
                <p className="text-slate-600 text-sm mb-4">
                  <strong>Véhicule :</strong> Holding opérationnelle + contrat luxembourgeois pour trésorerie de réemploi
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-xs text-slate-600">Optimisation fiscale départ retraite (abattement 500 000 €)</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 border-2 border-amber-400">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Famille patrimoniale ({`>`} 5 M€)</h3>
                <p className="text-slate-700 mb-4">
                  <strong>Objectif :</strong> Diversifier, mutualiser, préparer transmission (Dutreil, démembrement)
                </p>
                <p className="text-slate-600 text-sm mb-4">
                  <strong>Véhicule :</strong> Holding patrimoniale + contrat luxembourgeois
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-xs text-slate-600">Réduction IFI via biens professionnels</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 border-2 border-amber-400">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Trésorerie d'entreprise ({`>`} 1 M€)</h3>
                <p className="text-slate-700 mb-4">
                  <strong>Objectif :</strong> Dynamiser le rendement excédentaire, construire plan stock-options
                </p>
                <p className="text-slate-600 text-sm mb-4">
                  <strong>Véhicule :</strong> Souscription directe contrat luxembourgeois au bilan
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-xs text-slate-600">Marge {`>`} 0,5 % vs placement monétaire classique</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 border-2 border-amber-400">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Expatrié français</h3>
                <p className="text-slate-700 mb-4">
                  <strong>Objectif :</strong> Protection luxembourgeoise, neutralité fiscale à l'entrée
                </p>
                <p className="text-slate-600 text-sm mb-4">
                  <strong>Véhicule :</strong> Contrat luxembourgeois + FPCI éligible art. 244 bis B
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-xs text-slate-600">Arbitrage fiscal selon pays de résidence future</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages & Inconvénients */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Avantages et inconvénients synthétiques</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Avantages */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-6">Avantages</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Potentiel de rendement</h4>
                      <p className="text-slate-600 text-xs">Historique 12-14 %/an, prime d'illiquidité</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Diversification</h4>
                      <p className="text-slate-600 text-xs">Faible corrélation marchés cotés, volatilité réduite</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Accès à l'innovation</h4>
                      <p className="text-slate-600 text-xs">Ruptures technologiques hors radars boursiers</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Ingénierie patrimoniale</h4>
                      <p className="text-slate-600 text-xs">Holdings : réinvestissement sans friction, Dutreil</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Impact économique</h4>
                      <p className="text-slate-600 text-xs">Financement PME, création d'emplois, dynamisme</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Inconvénients */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-red-600 mb-6">Inconvénients</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Illiquidité</h4>
                      <p className="text-slate-600 text-xs">Blocage 5-10 ans (12 ans max), impossibilité sortie anticipée</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Risque perte totale</h4>
                      <p className="text-slate-600 text-xs">Taux défaillance significatif capital-risque, diversification nécessaire</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Complexité</h4>
                      <p className="text-slate-600 text-xs">Due diligence, crédit LBO, conventions, clauses liquidité</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Frais élevés</h4>
                      <p className="text-slate-600 text-xs">2-3 % gestion + 20-30 % carried interest</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Transparence réduite</h4>
                      <p className="text-slate-600 text-xs">Reporting trimestriel vs cotation continue bourse</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bonnes pratiques */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Bonnes pratiques de structuration</h2>

            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Assurer la substance de la holding</h4>
                    <p className="text-slate-600 text-sm">Compétences, locaux, procès-verbaux d'animation → éviter requalification en passive</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Rédiger un pacte d'associés clair</h4>
                    <p className="text-slate-600 text-sm">Drag along/tag along, ratchet, ratification budgets</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Diversifier les millésimes</h4>
                    <p className="text-slate-600 text-sm">Investir sur plusieurs années et fonds → lisser le vintage risk</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Contrôler la cascade de frais</h4>
                    <p className="text-slate-600 text-sm">Fonds de fonds + contrat Lux = multiplication commissions → share-classes institutionnelles</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold text-sm">5</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Synchroniser horizons de liquidité</h4>
                    <p className="text-slate-600 text-sm">Aligner maturité dette holding avec durée blocage fonds → éviter wall of debt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1600&q=80" 
              alt="Contact"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à investir dans le Private Equity ?</h2>
            <p className="text-xl text-slate-200 mb-8">
              Bénéficiez d'un accompagnement expert pour structurer votre investissement via holding ou contrat luxembourgeois.
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
      </div>

      <Footer currentPage="expertise" />
    </>
  )
}