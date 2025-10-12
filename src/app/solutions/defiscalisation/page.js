'use client'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function DefiscalisationPage() {
  const [activeTab, setActiveTab] = useState('denormandie');

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Défiscalisation immobilière<br />
              <span className="text-blue-400">Les dispositifs en vigueur en 2025</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Après la fin du dispositif Pinel, découvrez les solutions de défiscalisation immobilière 
              disponibles en 2025 : Denormandie, Malraux, LMNP, déficit foncier et Monuments historiques.
            </p>
            <div className="flex gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Étudier mon projet
              </a>
              <a 
                href="#dispositifs" 
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all backdrop-blur-sm"
              >
                Comparer les dispositifs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contexte 2025 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-3 text-red-900">🔴 Fin du dispositif Pinel au 31/12/2024</h3>
              <p className="text-gray-700">
                Le dispositif Pinel, qui permettait une réduction d'impôt jusqu'à 21% sur 12 ans pour l'investissement 
                locatif dans le neuf, a pris fin le 31 décembre 2024. Aucun nouveau dispositif équivalent n'a été 
                instauré pour 2025, ce qui pousse les investisseurs à se tourner vers d'autres solutions.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-center mb-12">Dispositifs en vigueur en 2025</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                <div className="text-3xl font-bold text-green-600 mb-2">21%</div>
                <p className="text-gray-700 font-semibold mb-1">Loi Denormandie</p>
                <p className="text-sm text-gray-600">Ancien rénové, réduction sur 12 ans</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
                <p className="text-gray-700 font-semibold mb-1">Loi Malraux</p>
                <p className="text-sm text-gray-600">Secteur sauvegardé, travaux</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                <div className="text-3xl font-bold text-green-600 mb-2">LMNP</div>
                <p className="text-gray-700 font-semibold mb-1">Location meublée</p>
                <p className="text-sm text-gray-600">Amortissement du bien</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                <div className="text-3xl font-bold text-green-600 mb-2">10 700€</div>
                <p className="text-gray-700 font-semibold mb-1">Déficit foncier</p>
                <p className="text-sm text-gray-600">Imputation sur revenu global</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tableau comparatif */}
      <section id="dispositifs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Comparatif des dispositifs 2025</h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Dispositif</th>
                      <th className="px-6 py-4 text-left">Type de bien</th>
                      <th className="px-6 py-4 text-left">Avantage fiscal</th>
                      <th className="px-6 py-4 text-left">Conditions clés</th>
                      <th className="px-6 py-4 text-left">Statut 2025</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-red-50">
                      <td className="px-6 py-4 font-semibold">Loi Pinel</td>
                      <td className="px-6 py-4">Neuf</td>
                      <td className="px-6 py-4">Jusqu'à 21% sur 12 ans</td>
                      <td className="px-6 py-4 text-sm">Location 6-12 ans, plafonds</td>
                      <td className="px-6 py-4"><span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs">Terminé</span></td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-6 py-4 font-semibold">Loi Denormandie</td>
                      <td className="px-6 py-4">Ancien rénové</td>
                      <td className="px-6 py-4">Jusqu'à 21% sur 12 ans</td>
                      <td className="px-6 py-4 text-sm">Travaux {`>`} 25%, DPE</td>
                      <td className="px-6 py-4"><span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">En vigueur</span></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Loi Malraux</td>
                      <td className="px-6 py-4">Secteur protégé</td>
                      <td className="px-6 py-4">22-30% sur travaux</td>
                      <td className="px-6 py-4 text-sm">Secteur sauvegardé, ABF</td>
                      <td className="px-6 py-4"><span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">En vigueur</span></td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-6 py-4 font-semibold">LMNP</td>
                      <td className="px-6 py-4">Meublé</td>
                      <td className="px-6 py-4">Amortissement</td>
                      <td className="px-6 py-4 text-sm">Location meublée, non pro</td>
                      <td className="px-6 py-4"><span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">En vigueur</span></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Déficit foncier</td>
                      <td className="px-6 py-4">Ancien + travaux</td>
                      <td className="px-6 py-4">Imputation 10 700€/an</td>
                      <td className="px-6 py-4 text-sm">Travaux déductibles</td>
                      <td className="px-6 py-4"><span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">En vigueur</span></td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="px-6 py-4 font-semibold">Censi-Bouvard</td>
                      <td className="px-6 py-4">Résidences services</td>
                      <td className="px-6 py-4">11% sur 9 ans</td>
                      <td className="px-6 py-4 text-sm">Location meublée, gestionnaire</td>
                      <td className="px-6 py-4"><span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs">Incertain</span></td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-6 py-4 font-semibold">Loi Cosse</td>
                      <td className="px-6 py-4">Ancien</td>
                      <td className="px-6 py-4">Déduction sur loyers</td>
                      <td className="px-6 py-4 text-sm">Convention ANAH</td>
                      <td className="px-6 py-4"><span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">En vigueur</span></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Monuments historiques</td>
                      <td className="px-6 py-4">Immeuble classé</td>
                      <td className="px-6 py-4">Déduction totale travaux</td>
                      <td className="px-6 py-4 text-sm">Conservation, travaux encadrés</td>
                      <td className="px-6 py-4"><span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs">En vigueur</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dispositifs détaillés avec onglets */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Focus sur les principaux dispositifs</h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {[
                { id: 'denormandie', label: 'Denormandie' },
                { id: 'malraux', label: 'Malraux' },
                { id: 'lmnp', label: 'LMNP' },
                { id: 'deficit', label: 'Déficit foncier' },
                { id: 'monuments', label: 'Monuments historiques' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === tab.id 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Denormandie */}
            {activeTab === 'denormandie' && (
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">🏘️ Loi Denormandie</h3>
                
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-3">Principe</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    La loi Denormandie permet de bénéficier d'une <strong>réduction d'impôt jusqu'à 21%</strong> du prix 
                    d'achat pour l'acquisition d'un logement ancien à rénover, mis en location dans les communes 
                    ayant signé une convention "Cœur de ville" ou ORT.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Référence : <strong>Article 199 novovicies du CGI</strong> et <strong>Arrêté du 26 mars 2019</strong>.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-blue-900">✅ Avantages</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Réduction d'impôt <strong>12%, 18% ou 21%</strong> selon durée</li>
                      <li>✓ Plafond <strong>300 000€</strong> de prix de revient</li>
                      <li>✓ Valorisation patrimoine ancien rénové</li>
                      <li>✓ <strong>245 communes</strong> éligibles</li>
                      <li>✓ Norme énergétique améliorée (-20% collectif, -30% individuel)</li>
                      <li>✓ Travaux <strong>≥ 25%</strong> du prix global pris en charge</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-red-900">⚠️ Contraintes</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>⚠ Engagement location <strong>6, 9 ou 12 ans</strong></li>
                      <li>⚠ Plafonds de <strong>loyers</strong> selon zone (9,50€ à 18,25€/m²)</li>
                      <li>⚠ Plafonds de <strong>ressources locataires</strong></li>
                      <li>⚠ Travaux terminés sous <strong>2 ans</strong></li>
                      <li>⚠ Localisation limitée aux communes conventionnées</li>
                      <li>⚠ Pas de cumul avec Loc'Avantages</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h4 className="font-bold mb-3">📊 Exemple de calcul</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Prix d'acquisition :</strong> 150 000 €</p>
                    <p><strong>Travaux :</strong> 50 000 € (33% du prix total)</p>
                    <p><strong>Frais d'acquisition (7,5%) :</strong> 15 000 €</p>
                    <p><strong>Prix de revient net :</strong> 215 000 €</p>
                    <p className="pt-3 border-t border-blue-300"><strong>Réduction d'impôt sur 12 ans :</strong> 215 000 € × 21% = <span className="text-2xl font-bold text-blue-900">45 150 €</span></p>
                    <p className="text-sm text-gray-600">Soit 3 763 € par an pendant 9 ans, puis 1 882 € pendant 3 ans</p>
                  </div>
                </div>
              </div>
            )}

            {/* Malraux */}
            {activeTab === 'malraux' && (
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">🏛️ Loi Malraux</h3>
                
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-3">Principe</h4>
                  <p className="text-gray-700 leading-relaxed">
                    La loi Malraux offre une <strong>réduction d'impôt de 22% à 30%</strong> du montant des travaux 
                    de restauration réalisés sur des immeubles situés dans des <strong>secteurs sauvegardés</strong> ou 
                    zones de protection du patrimoine architectural, urbain et paysager (ZPPAUP).
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-blue-900">✅ Avantages</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Réduction <strong>30%</strong> en secteur sauvegardé</li>
                      <li>✓ Réduction <strong>22%</strong> en ZPPAUP/AVAP</li>
                      <li>✓ <strong>Pas de plafond</strong> sur montant des travaux</li>
                      <li>✓ Plafond annuel <strong>400 000€</strong> de travaux éligibles</li>
                      <li>✓ Préservation patrimoine historique</li>
                      <li>✓ Valorisation importante du bien</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-red-900">⚠️ Contraintes</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>⚠ Travaux validés par <strong>Architecte des Bâtiments de France (ABF)</strong></li>
                      <li>⚠ Location nue <strong>9 ans minimum</strong></li>
                      <li>⚠ Coût des travaux très élevé</li>
                      <li>⚠ Localisation limitée (secteurs protégés)</li>
                      <li>⚠ Délai d'instruction administratif</li>
                      <li>⚠ Complexité technique et juridique</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h4 className="font-bold mb-3">📊 Exemple de calcul</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Prix d'acquisition :</strong> 300 000 €</p>
                    <p><strong>Travaux de restauration :</strong> 400 000 € (plafond annuel)</p>
                    <p><strong>Secteur :</strong> Secteur sauvegardé (30%)</p>
                    <p className="pt-3 border-t border-blue-300"><strong>Réduction d'impôt :</strong> 400 000 € × 30% = <span className="text-2xl font-bold text-blue-900">120 000 €</span></p>
                    <p className="text-sm text-gray-600">Réduction étalée sur les années de réalisation des travaux</p>
                  </div>
                </div>
              </div>
            )}

            {/* LMNP */}
            {activeTab === 'lmnp' && (
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">🛋️ LMNP (Loueur Meublé Non Professionnel)</h3>
                
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-3">Principe</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Le statut LMNP permet de louer un bien meublé et de bénéficier d'une <strong>fiscalité avantageuse</strong> 
                    grâce à l'amortissement du bien et du mobilier. Les revenus locatifs sont imposés dans la catégorie 
                    des BIC (Bénéfices Industriels et Commerciaux) au lieu des revenus fonciers.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-blue-900">✅ Avantages</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ <strong>Amortissement</strong> du bien et du mobilier</li>
                      <li>✓ Faible imposition des loyers (voire nulle pendant plusieurs années)</li>
                      <li>✓ Déduction des charges et intérêts d'emprunt</li>
                      <li>✓ Récupération <strong>TVA</strong> (résidences services)</li>
                      <li>✓ Pas de plafond de loyer ni de ressources locataires</li>
                      <li>✓ Flexibilité : neuf ou ancien</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-red-900">⚠️ Contraintes</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>⚠ Revenus locatifs {`<`} <strong>23 000€/an</strong> ou {`<`} 50% revenus globaux</li>
                      <li>⚠ Gestion locative plus complexe (meublé)</li>
                      <li>⚠ Comptabilité obligatoire (régime réel)</li>
                      <li>⚠ Plus-value professionnelle si activité {`>`} 5 ans</li>
                      <li>⚠ Risque vacance locative</li>
                      <li>⚠ Usure du mobilier à renouveler</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h4 className="font-bold mb-3">📊 Exemple de calcul</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Prix d'acquisition :</strong> 200 000 €</p>
                    <p><strong>Mobilier :</strong> 10 000 €</p>
                    <p><strong>Loyers annuels :</strong> 12 000 €</p>
                    <p><strong>Charges déductibles :</strong> 3 000 €</p>
                    <p><strong>Amortissement annuel (bien sur 30 ans + mobilier sur 7 ans) :</strong> 8 100 €</p>
                    <p className="pt-3 border-t border-blue-300"><strong>Résultat fiscal :</strong> 12 000 - 3 000 - 8 100 = <span className="text-2xl font-bold text-blue-900">900 €</span></p>
                    <p className="text-sm text-gray-600">Imposition minimale grâce à l'amortissement</p>
                  </div>
                </div>
              </div>
            )}

            {/* Déficit foncier */}
            {activeTab === 'deficit' && (
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">📉 Déficit foncier</h3>
                
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-3">Principe</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Le déficit foncier permet d'<strong>imputer sur le revenu global</strong> les charges et travaux 
                    déductibles qui dépassent les revenus fonciers, dans la limite de <strong>10 700€ par an</strong>. 
                    Le surplus est reportable sur les revenus fonciers des 10 années suivantes.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-blue-900">✅ Avantages</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Réduction d'impôt immédiate (<strong>10 700€ max/an</strong>)</li>
                      <li>✓ <strong>Travaux déductibles</strong> : rénovation, réparation, entretien</li>
                      <li>✓ Surplus reportable sur <strong>10 ans</strong></li>
                      <li>✓ Pas de plafond de loyer ni de ressources</li>
                      <li>✓ Amélioration et valorisation du bien</li>
                      <li>✓ Compatibilité avec autres dispositifs</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-red-900">⚠️ Contraintes</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>⚠ Obligation de louer <strong>3 ans minimum</strong> après travaux</li>
                      <li>⚠ Travaux de construction/reconstruction <strong>non déductibles</strong></li>
                      <li>⚠ Plafond annuel <strong>10 700€</strong></li>
                      <li>⚠ Intérêts d'emprunt imputables uniquement sur revenus fonciers</li>
                      <li>⚠ Régime réel obligatoire</li>
                      <li>⚠ Déclaration spécifique (2044)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h4 className="font-bold mb-3">📊 Exemple de calcul</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Revenus fonciers annuels :</strong> 8 000 €</p>
                    <p><strong>Charges déductibles :</strong> 2 000 €</p>
                    <p><strong>Travaux déductibles :</strong> 25 000 €</p>
                    <p><strong>Intérêts d'emprunt :</strong> 3 000 €</p>
                    <p className="pt-3 border-t border-blue-300"><strong>Déficit foncier :</strong> 8 000 - 2 000 - 25 000 - 3 000 = <span className="text-2xl font-bold text-red-600">-22 000 €</span></p>
                    <p><strong>Imputable sur revenu global :</strong> 10 700 € (économie fiscale TMI × 10 700€)</p>
                    <p><strong>Reportable sur revenus fonciers :</strong> 11 300 € sur 10 ans</p>
                  </div>
                </div>
              </div>
            )}

            {/* Monuments historiques */}
            {activeTab === 'monuments' && (
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">🏰 Monuments historiques</h3>
                
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-3">Principe</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Les propriétaires d'immeubles classés ou inscrits au titre des <strong>Monuments historiques</strong> 
                    peuvent déduire <strong>la totalité des travaux</strong> de restauration de leur revenu global, 
                    sans plafond, à condition de conserver le bien et de respecter les prescriptions architecturales.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-blue-900">✅ Avantages</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Déduction <strong>intégrale</strong> des travaux sur revenu global</li>
                      <li>✓ <strong>Pas de plafond</strong> de déduction</li>
                      <li>✓ Préservation patrimoine historique exceptionnel</li>
                      <li>✓ Exonération partielle IFI (75% si ouvert au public)</li>
                      <li>✓ Exonération droits de succession (sous conditions)</li>
                      <li>✓ Prestige et valorisation patrimoniale</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-red-900">⚠️ Contraintes</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>⚠ Obligation de <strong>conservation 15 ans minimum</strong></li>
                      <li>⚠ Travaux validés par <strong>Architecte des Bâtiments de France</strong></li>
                      <li>⚠ Coût des travaux <strong>très élevé</strong></li>
                      <li>⚠ Contraintes architecturales strictes</li>
                      <li>⚠ Engagement d'ouverture au public (partielle)</li>
                      <li>⚠ Rareté et prix d'acquisition élevés</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h4 className="font-bold mb-3">📊 Exemple de calcul</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Prix d'acquisition :</strong> 800 000 €</p>
                    <p><strong>Travaux de restauration :</strong> 500 000 €</p>
                    <p><strong>Revenu global :</strong> 200 000 €</p>
                    <p><strong>TMI :</strong> 45%</p>
                    <p className="pt-3 border-t border-blue-300"><strong>Économie d'impôt :</strong> 500 000 € × 45% = <span className="text-2xl font-bold text-blue-900">225 000 €</span></p>
                    <p className="text-sm text-gray-600">Déduction étalée sur plusieurs années selon réalisation des travaux</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Fiscalité des revenus et plus-values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Fiscalité des revenus et plus-values</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-900">📊 Imposition des revenus locatifs</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Location nue (Revenus fonciers)</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Micro-foncier : abattement 30% si {`<`} 15 000€</li>
                      <li>• Régime réel : déduction charges, travaux, intérêts</li>
                      <li>• Imposition : TMI + prélèvements sociaux 17,2%</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Location meublée (BIC)</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Micro-BIC : abattement 50% si {`<`} 77 700€</li>
                      <li>• Régime réel : amortissement + charges</li>
                      <li>• Fiscalité très avantageuse avec amortissement</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-blue-900">💰 Plus-value immobilière</h3>
                <div className="space-y-4">
                  <p className="text-sm text-gray-700">
                    La plus-value à la revente est imposée à l'impôt sur le revenu (19%) et aux prélèvements 
                    sociaux (17,2%), soit <strong>36,2% au total</strong>.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Abattement progressif</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>IR :</strong> exonération totale après 22 ans</li>
                      <li>• <strong>PS :</strong> exonération totale après 30 ans</li>
                      <li>• Abattement de 6% par an au-delà de 5 ans (IR)</li>
                      <li>• Abattement de 1,65% à 9% par an (PS)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profils investisseurs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Quel dispositif pour quel profil ?</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3">🎯 Contribuable fortement imposé (TMI 41-45%)</h3>
                <p className="text-gray-700 mb-3">
                  Priorité à la réduction d'impôt maximale avec des dispositifs puissants.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg text-sm">
                  <strong>Dispositifs recommandés :</strong> Malraux (22-30%), Monuments historiques (déduction totale), 
                  Déficit foncier (10 700€/an)
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3">👨‍💼 Investisseur patrimonial long terme</h3>
                <p className="text-gray-700 mb-3">
                  Constitution d'un patrimoine immobilier avec revenus complémentaires.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg text-sm">
                  <strong>Dispositifs recommandés :</strong> LMNP (amortissement), Denormandie (21% + valorisation), 
                  Déficit foncier (travaux)
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3">🏡 Primo-accédant investisseur</h3>
                <p className="text-gray-700 mb-3">
                  Premier investissement locatif avec contraintes budgétaires.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg text-sm">
                  <strong>Dispositifs recommandés :</strong> Denormandie (21% sur ancien), Déficit foncier 
                  (travaux déductibles), Loi Cosse
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3">💼 Passionné du patrimoine historique</h3>
                <p className="text-gray-700 mb-3">
                  Préservation du patrimoine avec avantages fiscaux exceptionnels.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg text-sm">
                  <strong>Dispositifs recommandés :</strong> Malraux (secteur sauvegardé), Monuments historiques 
                  (déduction totale + prestige)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Optimisez votre fiscalité immobilière en 2025
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              "Après la fin du Pinel, les dispositifs Denormandie, Malraux et LMNP offrent des opportunités 
              majeures de défiscalisation. Une stratégie adaptée à votre profil fiscal maximise votre rentabilité."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all inline-block"
              >
                Analyser mon projet
              </Link>
              <a 
                href="tel:+33785481809"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-block"
              >
                📞 07 85 48 18 09
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Audit fiscal gratuit • Simulation personnalisée • Accompagnement complet
            </p>
            
            <div className="mt-8 pt-8 border-t border-blue-700">
              <p className="text-blue-100 mb-4">En partenariat avec</p>
              <a 
                href="https://www.fiscaliasolution.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2 backdrop-blur-sm border border-white/20"
              >
                Pour en savoir plus
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}