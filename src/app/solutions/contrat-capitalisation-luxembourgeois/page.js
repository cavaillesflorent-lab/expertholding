'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, TrendingUp, Users, Building, FileText, CheckCircle, AlertTriangle, Scale, Shield, Globe, DollarSign, Lock } from 'lucide-react'

export default function CapitalisationLuxPage() {
  return (
    <>
      <Header currentPage="expertise" />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-slate-900 text-white py-32">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&q=80" 
              alt="Contrat de capitalisation"
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
              <span className="text-white">Contrat de capitalisation luxembourgeois</span>
            </div>

            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Contrat de capitalisation<br />
              <span className="text-amber-400">luxembourgeois</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl leading-relaxed">
              L'outil patrimonial de référence pour capitaliser sans frottement fiscal, diversifier internationalement et optimiser la transmission via holdings.
            </p>
          </div>
        </div>

        {/* Qu'est-ce que c'est */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Qu'est-ce qu'un contrat de capitalisation luxembourgeois ?</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  C'est un instrument d'épargne et d'investissement souscrit auprès d'un assureur luxembourgeois, qui permet de placer des capitaux sur une <strong>très large gamme de supports</strong> : fonds euros, unités de compte, FID, private equity, immobilier indirect, multi-devises.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-6">
                  <h4 className="font-bold text-slate-900 mb-3">Différence clé avec l'assurance-vie</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Pas de clause bénéficiaire</strong> : le contrat est transmissible de plein droit</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Intégré au patrimoine</strong> du souscripteur (succession classique)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Antériorité fiscale conservée</strong> lors d'une donation</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <DollarSign className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-slate-700 text-sm"><strong>Versement libre</strong> à partir de 250 000 € (private banking), sans plafond</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <Shield className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-slate-700 text-sm"><strong>Triangle de sécurité</strong> luxembourgeois (séparation assureur/dépositaire/CAA)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <Building className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-slate-700 text-sm"><strong>Ouvert aux personnes morales</strong> (sociétés IS, holdings passives)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80" 
                  alt="Capitalisation patrimoine"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Avantages majeurs */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Avantages majeurs</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Avantage 1 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Sécurité luxembourgeoise</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Triangle de sécurité + privilège de premier rang en cas de défaillance. Protection renforcée via supervision du CAA.
                </p>
              </div>

              {/* Avantage 2 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Fiscalité différée</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  <strong>Imposition uniquement lors d'un rachat</strong>. Arbitrages internes non imposables. Capitalisation pure jusqu'au retrait.
                </p>
              </div>

              {/* Avantage 3 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Flexibilité patrimoniale</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Donation/démembrement <strong>sans perte d'antériorité fiscale</strong>. Rachat libre à tout moment.
                </p>
              </div>

              {/* Avantage 4 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Diversification mondiale</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Fonds mondiaux, titres vifs, multi-devises, private equity, FID personnalisés. Architecture véritablement ouverte.
                </p>
              </div>

              {/* Avantage 5 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Lock className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Neutralité fiscale</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Aucun prélèvement luxembourgeois. Application de la fiscalité du pays de résidence uniquement.
                </p>
              </div>

              {/* Avantage 6 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Building className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Optimisation holdings</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Placement des excédents de trésorerie dans une enveloppe capitalisante, <strong>sans impact comptable immédiat</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fiscalité détaillée */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Fiscalité détaillée</h2>

            {/* Personne physique */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-amber-500 mr-3" />
                <h3 className="text-3xl font-bold text-slate-900">Personnes physiques (résidents français)</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Pendant la vie du contrat</h4>
                  <p className="text-slate-700 mb-3">
                    <strong>Aucun impôt</strong> tant qu'il n'y a pas de rachat. Les arbitrages internes ne déclenchent pas d'imposition.
                  </p>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-700"><strong>Capitalisation pure</strong> : vos gains fructifient sans friction fiscale</p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Lors d'un rachat</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>PFU 30 % (12,8 % IR + 17,2 % PS) ou barème progressif</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Après 8 ans :</strong> abattement 4 600 € / 9 200 € (couple)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Taux réduit 7,5 % si primes inférieures à 150 000 €</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">IFI</h4>
                  <p className="text-slate-700">
                    Valeur du contrat <strong>hors UC à sous-jacent immobilier</strong>. Si UC immobilières supérieures à 20 %, quotes-parts taxables (CGI art. 972).
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Succession</h4>
                  <p className="text-slate-700 mb-2">
                    Valeur <strong>intégrale réintégrée</strong> dans la succession.
                  </p>
                  <p className="text-sm text-slate-600 italic">
                    Droits de succession selon le lien de parenté (pas d'abattement 152 500 € comme en assurance-vie)
                  </p>
                </div>
              </div>
            </div>

            {/* Société IS */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-amber-500 mr-3" />
                <h3 className="text-3xl font-bold text-slate-900">Sociétés soumises à l'IS</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Critère</th>
                      <th className="px-6 py-4 text-left">Holding patrimoniale (passive)</th>
                      <th className="px-6 py-4 text-left">Holding opérationnelle</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-semibold text-slate-900">Éligibilité</td>
                      <td className="px-6 py-4 text-green-600 font-bold">Oui (supérieur à 90 % gestion patrimoniale)</td>
                      <td className="px-6 py-4 text-red-600">Non (sauf trésorerie stable)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-semibold text-slate-900">Comptabilisation</td>
                      <td className="px-6 py-4 text-slate-700">Actif immobilisé, pas de produit sans rachat</td>
                      <td className="px-6 py-4 text-slate-700">Même traitement</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-semibold text-slate-900">IS sur gains</td>
                      <td className="px-6 py-4 text-slate-700">Imposé lors d'un rachat (15 % puis taux normal)</td>
                      <td className="px-6 py-4 text-slate-700">Même régime</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-semibold text-slate-900">Intérêt patrimonial</td>
                      <td className="px-6 py-4 text-amber-600 font-bold">Capitaliser les excédents + transmission optimisée</td>
                      <td className="px-6 py-4 text-slate-700">Souplesse réduite</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 p-6">
                <p className="text-slate-700">
                  <strong>Point clé :</strong> Lors d'une donation de parts sociales, la valeur du contrat inscrit à l'actif est retenue pour l'assiette, déduction faite du passif social.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Utilisation via holdings */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Utilisation via holdings : stratégies</h2>
            <p className="text-xl text-slate-600 mb-12 text-center">Un outil puissant pour optimiser la trésorerie et préparer la transmission</p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                  alt="Stratégie holding"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Holding patrimoniale passive</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Investir la trésorerie excédentaire</h4>
                      <p className="text-slate-600 text-sm">Dividendes non distribués, plus-values de cession → enveloppe capitalisante</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Préparer la transmission</h4>
                      <p className="text-slate-600 text-sm">Donation des titres de holding plutôt qu'actifs dispersés</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Optimiser et lisser la fiscalité</h4>
                      <p className="text-slate-600 text-sm">Gains non taxés tant qu'il n'y a pas de rachat</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Pourquoi ça fonctionne ?
                  </h4>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Pas de plafond de versement</li>
                    <li>• Contrat nantissable (levier LBO patrimonial)</li>
                    <li>• Donation parts = neutralisation valeur latente via déduction passif</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Usages combinés */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Usages combinés personne physique / holding</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Apport-cession (150-0 B ter)</h4>
                  <p className="text-slate-700 text-sm">
                    Après vente d'une participation, apport à holding → report de plus-value → trésorerie dans contrat luxembourgeois
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Rachat partiel programmé</h4>
                  <p className="text-slate-700 text-sm">
                    La société effectue des rachats pour financer des dividendes réguliers, en maintenant l'essentiel du capital investi
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Démembrement interne</h4>
                  <p className="text-slate-700 text-sm">
                    Parents = usufruit parts holding, enfants = nue-propriété. Le contrat fructifie à l'abri de l'IR jusqu'au terme
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profils d'investisseurs */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">À qui s'adresse ce contrat ?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-xl p-8 border-2 border-amber-400">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-amber-500 mr-3" />
                  <h3 className="text-2xl font-bold text-slate-900">Dirigeants post-cession</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  Capital important à replacer, volonté de <strong>différer l'IR</strong> et de protéger le capital dans un cadre sécurisé.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-slate-600"><strong>Exemple :</strong> Cédant avec 5 M€ → contrat capitalisation Luxembourg → gains capitalisés sans impôt jusqu'au rachat</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 border-2 border-amber-400">
                <div className="flex items-center mb-4">
                  <Building className="w-8 h-8 text-amber-500 mr-3" />
                  <h3 className="text-2xl font-bold text-slate-900">Familles patrimoniales</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  Structuration via SCI ou holding, souhait d'<strong>organiser la gouvernance</strong> et la transmission inter-générationnelle.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-slate-600"><strong>Exemple :</strong> Holding familiale détient le contrat → donation parts holding = transmission optimisée</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 border-2 border-amber-400">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-amber-500 mr-3" />
                  <h3 className="text-2xl font-bold text-slate-900">Expatriés / non-résidents</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  Recherche d'un outil <strong>portable, neutre fiscalement</strong> au Luxembourg et reconnu internationalement.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-slate-600"><strong>Exemple :</strong> Cadre détaché à Dubaï → contrat suit la mobilité sans friction fiscale</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 border-2 border-amber-400">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-8 h-8 text-amber-500 mr-3" />
                  <h3 className="text-2xl font-bold text-slate-900">Trésorerie d'entreprise stable</h3>
                </div>
                <p className="text-slate-700 mb-4">
                  Excédents non nécessaires à court terme, recherche de <strong>diversification</strong> plus riche que les fonds monétaires.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-slate-600"><strong>Exemple :</strong> Holding avec 2 M€ de trésorerie → contrat avec FID diversifié internationalement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparaison avec compte-titres */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Comparaison avec le compte-titres ordinaire</h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Critère</th>
                    <th className="px-6 py-4 text-left">Contrat de capitalisation</th>
                    <th className="px-6 py-4 text-left">Compte-titres</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">Imposition revenus</td>
                    <td className="px-6 py-4 text-green-600 font-bold">Uniquement lors d'un rachat</td>
                    <td className="px-6 py-4 text-slate-700">Chaque dividende/coupon (PFU 30 %)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">Plus-values</td>
                    <td className="px-6 py-4 text-green-600 font-bold">Différée jusqu'au rachat</td>
                    <td className="px-6 py-4 text-slate-700">À chaque vente (PFU 30 %)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">Abattement après 8 ans</td>
                    <td className="px-6 py-4 text-green-600 font-bold">Oui (4 600 € / 9 200 €)</td>
                    <td className="px-6 py-4 text-red-600">Non</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">Transmission / donation</td>
                    <td className="px-6 py-4 text-green-600 font-bold">Antériorité conservée</td>
                    <td className="px-6 py-4 text-red-600">Perte d'antériorité</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">Diversification</td>
                    <td className="px-6 py-4 text-slate-700">FID, PE, SCPI, multi-devise</td>
                    <td className="px-6 py-4 text-slate-700">Actions, obligations, OPCVM, ETF</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">Protection avoirs</td>
                    <td className="px-6 py-4 text-green-600 font-bold">Triangle de sécurité</td>
                    <td className="px-6 py-4 text-slate-700">FGDR (70 k€ espèces / 100 k€ titres)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">Frais</td>
                    <td className="px-6 py-4 text-red-600">Entrée/gestion/arbitrage (plus élevés)</td>
                    <td className="px-6 py-4 text-green-600 font-bold">Courtage/garde (plus faibles)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">Moins-values</td>
                    <td className="px-6 py-4 text-red-600">Non imputables hors contrat</td>
                    <td className="px-6 py-4 text-green-600 font-bold">Imputables 10 ans</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">Liquidité</td>
                    <td className="px-6 py-4 text-slate-700">Délai 3-10 jours</td>
                    <td className="px-6 py-4 text-green-600 font-bold">Instantanée (marché)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
              <h4 className="font-bold text-slate-900 mb-2">Lecture synthétique</h4>
              <p className="text-slate-700">
                Le contrat de capitalisation surclasse le CTO pour les <strong>stratégies de capitalisation long terme</strong>, la protection juridique et la gestion internationale. Le CTO reste préférable pour la <strong>gestion active court terme</strong>, l'imputation des moins-values et la réduction des frais.
              </p>
            </div>
          </div>
        </section>

        {/* Inconvénients */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Inconvénients et points de vigilance</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-slate-900">Intégration dans la succession</h3>
                </div>
                <p className="text-slate-700 text-sm mb-2">
                  Le contrat n'est <strong>pas hors succession</strong> : droits de mutation applicables sans abattement spécifique assurance-vie (152 500 €).
                </p>
                <p className="text-slate-600 text-xs italic">Absence d'application CGI art. 990 I</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-slate-900">Frais potentiellement élevés</h3>
                </div>
                <p className="text-slate-700 text-sm mb-2">
                  Frais d'entrée (0-3 %), gestion (0,30-1,20 %/an), FID/mandat, parfois frais de sortie.
                </p>
                <p className="text-slate-600 text-xs italic">Vérifier documents d'information clé</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-slate-900">Complexité administrative</h3>
                </div>
                <p className="text-slate-700 text-sm mb-2">
                  KYC renforcé, reporting CRS/FATCA, obligation annuelle de déclaration (Imprimé 3916-bis).
                </p>
                <p className="text-slate-600 text-xs italic">CGI art. 1649 AA</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-slate-900">Moins-values non imputables</h3>
                </div>
                <p className="text-slate-700 text-sm mb-2">
                  Les pertes constatées à l'intérieur du contrat <strong>ne sont pas déductibles</strong> des plus-values externes.
                </p>
                <p className="text-slate-600 text-xs italic">BOI-RPPM-RCM-20-15 n° 230</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-slate-900">Démembrement : incertitudes</h3>
                </div>
                <p className="text-slate-700 text-sm mb-2">
                  Incertitude sur la purge de la plus-value latente lors d'une donation de nue-propriété.
                </p>
                <p className="text-slate-600 text-xs italic">Rescrit conseillé en pratique</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border-2 border-red-200">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                  <h3 className="text-lg font-bold text-slate-900">Éligibilité sociétaire restreinte</h3>
                </div>
                <p className="text-slate-700 text-sm mb-2">
                  Les sociétés à activité commerciale/libérale supérieures à 10 % du CA ne peuvent pas souscrire.
                </p>
                <p className="text-slate-600 text-xs italic">Charte FFA/FFSA 2011/2019</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80" 
              alt="Contact"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Le contrat de capitalisation est-il adapté à votre situation ?</h2>
            <p className="text-xl text-slate-200 mb-8">
              Bénéficiez d'une analyse personnalisée pour déterminer si cet outil correspond à vos objectifs patrimoniaux et à votre structure.
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