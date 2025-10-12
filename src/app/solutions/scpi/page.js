'use client'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function SCPIPage() {
  const [activeTab, setActiveTab] = useState('rendement');

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              SCPI<br />
              <span className="text-blue-400">Investir dans l'immobilier locatif sans contrainte</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Les Sociétés Civiles de Placement Immobilier permettent d'accéder à un patrimoine immobilier 
              diversifié avec gestion déléguée. Découvrez les avantages, la fiscalité et les stratégies 
              d'optimisation via holdings en 2025.
            </p>
            <div className="flex gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Analyser mon projet
              </a>
              <a 
                href="#types" 
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all backdrop-blur-sm"
              >
                Découvrir les SCPI
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contexte 2025 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-3 text-yellow-900">⚠️ Contexte 2025 : Hausse des taux et liquidité</h3>
              <p className="text-gray-700">
                La hausse des taux d'intérêt en 2024-2025 a impacté les SCPI : augmentation du coût du financement, 
                réévaluation à la baisse des actifs immobiliers, et problématiques de liquidité sur le marché secondaire. 
                Les délais de revente se sont allongés et des décotes sont souvent nécessaires.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-center mb-12">Les SCPI en chiffres (2024)</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                <div className="text-3xl font-bold text-blue-600 mb-2">4,52%</div>
                <p className="text-gray-700 font-semibold mb-1">Taux de distribution</p>
                <p className="text-sm text-gray-600">Moyenne 2023</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                <div className="text-3xl font-bold text-blue-600 mb-2">200€</div>
                <p className="text-gray-700 font-semibold mb-1">Ticket d'entrée</p>
                <p className="text-sm text-gray-600">Accessible à tous</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                <div className="text-3xl font-bold text-blue-600 mb-2">AMF</div>
                <p className="text-gray-700 font-semibold mb-1">Régulation</p>
                <p className="text-sm text-gray-600">Cadre sécurisé</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
                <p className="text-gray-700 font-semibold mb-1">Gestion</p>
                <p className="text-sm text-gray-600">100% déléguée</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Définition et fonctionnement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Qu'est-ce qu'une SCPI ?</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Les <strong>Sociétés Civiles de Placement Immobilier (SCPI)</strong> sont des véhicules d'investissement 
                collectif permettant d'acquérir des parts dans un portefeuille immobilier diversifié, composé principalement 
                de biens professionnels (bureaux, commerces, locaux d'activité, santé, logistique) mais aussi résidentiels.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-lg mb-4 text-blue-900">Fonctionnement</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">1</div>
                    <div>
                      <strong>Collecte de capitaux</strong> : Les investisseurs achètent des parts de SCPI
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">2</div>
                    <div>
                      <strong>Acquisition d'actifs</strong> : La société de gestion achète des biens immobiliers
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">3</div>
                    <div>
                      <strong>Gestion locative</strong> : Location des biens et perception des loyers
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">4</div>
                    <div>
                      <strong>Distribution</strong> : Versement trimestriel ou mensuel de dividendes aux porteurs de parts
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm">
                <strong>Régulation :</strong> Les SCPI sont agréées et contrôlées par l'<strong>Autorité des Marchés 
                Financiers (AMF)</strong>, garantissant transparence et sécurité pour les investisseurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types de SCPI */}
      <section id="types" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Les différents types de SCPI</h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {[
                { id: 'rendement', label: 'SCPI de rendement' },
                { id: 'fiscales', label: 'SCPI fiscales' },
                { id: 'plusvalue', label: 'SCPI de plus-value' },
                { id: 'diversifiees', label: 'SCPI diversifiées' }
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

            {/* SCPI de rendement */}
            {activeTab === 'rendement' && (
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">📊 SCPI de rendement</h3>
                
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Les SCPI de rendement représentent la <strong>majorité des SCPI en France</strong>. Elles investissent 
                    principalement dans l'immobilier professionnel (bureaux, commerces, locaux d'activité, santé, logistique) 
                    pour générer des revenus locatifs réguliers redistribués sous forme de dividendes.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-blue-900">✅ Avantages</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Revenus réguliers (trimestriels ou mensuels)</li>
                      <li>✓ Taux de distribution attractif (4-5% en moyenne)</li>
                      <li>✓ Diversification géographique et sectorielle</li>
                      <li>✓ Gestion 100% déléguée</li>
                      <li>✓ Mutualisation du risque locatif</li>
                      <li>✓ Accès à l'immobilier professionnel</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-red-900">⚠️ Points de vigilance</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>⚠ Liquidité limitée (marché secondaire)</li>
                      <li>⚠ Frais d'entrée élevés (8-12%)</li>
                      <li>⚠ Fiscalité : revenus fonciers + PS 17,2%</li>
                      <li>⚠ Sensibilité aux cycles immobiliers</li>
                      <li>⚠ Impact hausse des taux (2024-2025)</li>
                      <li>⚠ Pas de garantie de rendement</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h4 className="font-bold mb-3">📊 Exemple de rendement</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Investissement :</strong> 10 000 € (50 parts à 200 €)</p>
                    <p><strong>Frais d'entrée (10%) :</strong> 1 000 €</p>
                    <p><strong>Capital investi :</strong> 9 000 €</p>
                    <p><strong>Taux de distribution :</strong> 4,5%</p>
                    <p className="pt-3 border-t border-blue-300"><strong>Revenus annuels bruts :</strong> 10 000 € × 4,5% = <span className="text-2xl font-bold text-blue-900">450 €</span></p>
                    <p className="text-sm text-gray-600">Soit 37,50 € par mois (avant fiscalité)</p>
                  </div>
                </div>
              </div>
            )}

            {/* SCPI fiscales */}
            {activeTab === 'fiscales' && (
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">💰 SCPI fiscales</h3>
                
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Les SCPI fiscales investissent dans des biens immobiliers éligibles à des <strong>dispositifs de 
                    défiscalisation</strong> (Pinel, Malraux, Déficit Foncier), permettant de réduire l'impôt sur le 
                    revenu en contrepartie d'une durée d'engagement locatif.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-blue-900">✅ Avantages</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Réduction d'impôt immédiate</li>
                      <li>✓ Mutualisation des risques</li>
                      <li>✓ Gestion déléguée</li>
                      <li>✓ Accès aux dispositifs Pinel, Malraux, etc.</li>
                      <li>✓ Investissement à partir de quelques milliers d'euros</li>
                      <li>✓ Diversification géographique</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-red-900">⚠️ Contraintes</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>⚠ Engagement long (9-15 ans selon dispositif)</li>
                      <li>⚠ Liquidité très limitée pendant l'engagement</li>
                      <li>⚠ Rendement distribué faible (1-3%)</li>
                      <li>⚠ Frais d'entrée importants (10-12%)</li>
                      <li>⚠ Dépendance aux dispositifs fiscaux</li>
                      <li>⚠ Risque législatif (fin du Pinel 2024)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
                  <h4 className="font-bold mb-3 text-yellow-900">⚠️ Attention : Fin du Pinel au 31/12/2024</h4>
                  <p className="text-gray-700 text-sm">
                    Le dispositif Pinel ayant pris fin, les nouvelles SCPI fiscales se tournent vers d'autres 
                    dispositifs comme la loi Denormandie, Malraux ou le déficit foncier. Vérifiez bien les 
                    dispositifs utilisés par la SCPI avant d'investir.
                  </p>
                </div>
              </div>
            )}

            {/* SCPI de plus-value */}
            {activeTab === 'plusvalue' && (
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">📈 SCPI de plus-value</h3>
                
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Les SCPI de plus-value visent la <strong>valorisation du capital à long terme</strong> plutôt que 
                    la distribution de revenus réguliers. Elles investissent souvent dans des actifs résidentiels ou 
                    des projets de rénovation lourde avec potentiel de revalorisation important.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-blue-900">✅ Avantages</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Potentiel de plus-value important</li>
                      <li>✓ Fiscalité plus-value (abattement progressif)</li>
                      <li>✓ Stratégies de rénovation et valorisation</li>
                      <li>✓ Diversification résidentiel + commercial</li>
                      <li>✓ Gestion professionnelle</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-red-900">⚠️ Risques</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>⚠ Revenus distribués faibles ou nuls</li>
                      <li>⚠ Liquidité très limitée</li>
                      <li>⚠ Durée d'investissement longue (10-15 ans)</li>
                      <li>⚠ Risque de non-valorisation</li>
                      <li>⚠ Sensibilité aux cycles immobiliers</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* SCPI diversifiées */}
            {activeTab === 'diversifiees' && (
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">🌍 SCPI diversifiées</h3>
                
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Les SCPI diversifiées combinent <strong>plusieurs types d'actifs et stratégies</strong> pour 
                    équilibrer rendement régulier et potentiel de valorisation. Elles peuvent investir dans différents 
                    secteurs (bureaux, commerces, santé, logistique, résidentiel) et zones géographiques (France, Europe).
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="font-bold mb-3 text-blue-900">Stratégie d'investissement</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ Mix rendement + plus-value</li>
                    <li>✓ Diversification sectorielle maximale</li>
                    <li>✓ Exposition France + international</li>
                    <li>✓ Adaptation aux cycles économiques</li>
                    <li>✓ Répartition des risques optimisée</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h4 className="font-bold mb-3">🎯 Pour qui ?</h4>
                  <p className="text-gray-700">
                    Les SCPI diversifiées conviennent aux investisseurs recherchant un <strong>équilibre entre revenus 
                    réguliers et valorisation du capital</strong>, avec une diversification maximale pour limiter les risques.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Avantages et inconvénients */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Avantages & Inconvénients des SCPI</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-700">✅ Avantages</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <strong className="text-green-900">Mutualisation du risque</strong>
                    <p className="text-sm text-gray-700 mt-1">Diversification sur de nombreux actifs et locataires</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <strong className="text-green-900">Gestion 100% déléguée</strong>
                    <p className="text-sm text-gray-700 mt-1">Aucune contrainte de gestion locative ou travaux</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <strong className="text-green-900">Accessibilité financière</strong>
                    <p className="text-sm text-gray-700 mt-1">Investissement possible dès 200 €</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <strong className="text-green-900">Revenus réguliers</strong>
                    <p className="text-sm text-gray-700 mt-1">Distribution trimestrielle ou mensuelle</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <strong className="text-green-900">Cadre réglementé AMF</strong>
                    <p className="text-sm text-gray-700 mt-1">Sécurité et transparence garanties</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <strong className="text-green-900">Diversification patrimoniale</strong>
                    <p className="text-sm text-gray-700 mt-1">Accès immobilier professionnel France + Europe</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-red-700">⚠️ Inconvénients</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <strong className="text-red-900">Liquidité limitée</strong>
                    <p className="text-sm text-gray-700 mt-1">Délais de revente longs, décote parfois nécessaire</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <strong className="text-red-900">Frais élevés</strong>
                    <p className="text-sm text-gray-700 mt-1">Frais d'entrée 8-12%, frais de gestion annuels</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <strong className="text-red-900">Fiscalité contraignante</strong>
                    <p className="text-sm text-gray-700 mt-1">Revenus fonciers + PS 17,2%, TMI élevée</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <strong className="text-red-900">Sensibilité aux cycles</strong>
                    <p className="text-sm text-gray-700 mt-1">Impact hausse des taux, conjoncture économique</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <strong className="text-red-900">Risque de perte en capital</strong>
                    <p className="text-sm text-gray-700 mt-1">Valeur des parts peut diminuer</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <strong className="text-red-900">Pas de garantie de rendement</strong>
                    <p className="text-sm text-gray-700 mt-1">Performance dépend des loyers et vacance locative</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fiscalité */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Fiscalité des SCPI</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-4 text-blue-900">📊 Imposition des revenus</h3>
                <p className="text-gray-700 mb-4">
                  Les dividendes perçus sont imposés dans la catégorie des <strong>revenus fonciers</strong>.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold mb-2">Régime micro-foncier</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Si revenus fonciers {`<`} 15 000 € : abattement forfaitaire 30%</li>
                    <li>• Simplification déclarative</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Régime réel</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Déduction des charges réelles : intérêts d'emprunt, travaux, frais de gestion</li>
                    <li>• Option à privilégier si charges élevées</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Prélèvements sociaux :</strong> 17,2% sur les revenus distribués
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-4 text-blue-900">💰 Plus-values à la revente</h3>
                <p className="text-gray-700 mb-4">
                  Les plus-values réalisées lors de la cession des parts sont soumises au <strong>régime des plus-values 
                  immobilières des particuliers</strong>.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Abattement progressif</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Impôt sur le revenu :</strong> exonération totale après 22 ans</li>
                    <li>• <strong>Prélèvements sociaux :</strong> exonération totale après 30 ans</li>
                    <li>• Abattement de 6% par an au-delà de 5 ans (IR)</li>
                    <li>• Abattement de 1,65% à 9% par an (PS)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCPI via holding */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Investir en SCPI via une holding à l'IS</h2>

            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                L'acquisition de parts de SCPI via une <strong>société soumise à l'Impôt sur les Sociétés (IS)</strong> 
                est une stratégie patrimoniale et fiscale intéressante pour les entrepreneurs et investisseurs professionnels.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4 text-green-900">✅ Avantages fiscaux</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li><strong>Taux réduit IS 15%</strong> jusqu'à 38 000 € de bénéfices</li>
                    <li><strong>Régime mère-fille :</strong> exonération 95% des dividendes</li>
                    <li><strong>Intégration fiscale :</strong> compensation profits/pertes du groupe</li>
                    <li><strong>Déduction charges :</strong> intérêts d'emprunt, frais de gestion</li>
                    <li><strong>Report d'imposition</strong> possible sur les plus-values</li>
                    <li><strong>Optimisation transmission</strong> patrimoniale</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4 text-red-900">⚠️ Contraintes</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li><strong>Double imposition :</strong> IS puis IR lors distribution aux associés</li>
                    <li><strong>Plus-values professionnelles :</strong> régime moins avantageux</li>
                    <li><strong>Complexité administrative</strong> accrue</li>
                    <li><strong>Coûts de structure :</strong> comptabilité, gestion</li>
                    <li><strong>Liquidité :</strong> même problématique qu'en direct</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-bold mb-3 text-blue-900">📋 Conditions régime mère-fille</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Holding et filiales soumises à l'IS</li>
                  <li>• Holding détient ≥ 5% du capital de chaque filiale</li>
                  <li>• Exonération 95% des dividendes reçus</li>
                  <li>• Évite la double imposition des bénéfices</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">🔄 Démembrement : usufruit temporaire</h3>
              
              <p className="text-gray-700 mb-4">
                Le <strong>démembrement de propriété</strong> via l'usufruit temporaire est une stratégie avancée 
                permettant à une holding de valoriser sa trésorerie tout en optimisant la fiscalité.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold mb-3">Principe</h4>
                <p className="text-gray-700 text-sm mb-4">
                  La pleine propriété se divise en deux droits : <strong>usufruit</strong> (droit aux revenus) et 
                  <strong>nue-propriété</strong> (propriété du bien sans revenus).
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Usufruitier :</strong> perçoit les dividendes pendant la durée de l'usufruit</li>
                  <li>• <strong>Nu-propriétaire :</strong> récupère la pleine propriété à l'extinction de l'usufruit</li>
                  <li>• <strong>Clé de démembrement :</strong> répartition de la valeur selon durée ou âge usufruitier</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                <h4 className="font-bold mb-3">🎯 Avantages pour une holding</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ <strong>Valorisation trésorerie</strong> à long terme</li>
                  <li>✓ <strong>Réduction impôts</strong> en répartissant sur plusieurs années</li>
                  <li>✓ <strong>Optimisation transmission</strong> (nu-propriété à prix réduit)</li>
                  <li>✓ <strong>Revenus immédiats</strong> pour l'usufruitier</li>
                  <li>✓ <strong>Flexibilité patrimoniale</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liquidité et taux */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Liquidité des SCPI et impact de la hausse des taux (2024-2025)</h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-3 text-yellow-900">⚠️ Contexte économique 2024-2025</h3>
              <p className="text-gray-700">
                La hausse des taux d'intérêt a fortement impacté le marché des SCPI, créant des tensions 
                sur la liquidité et la valorisation des parts. Les investisseurs doivent en tenir compte dans 
                leur stratégie d'investissement.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-red-900">🔴 Problématiques de liquidité</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl">•</span>
                    <div>
                      <strong>Marché secondaire peu actif :</strong> La revente dépend du marché organisé par 
                      la société de gestion, qui peut manquer de liquidité en période de tension
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl">•</span>
                    <div>
                      <strong>Délais allongés :</strong> En 2024-2025, les délais de revente se sont considérablement 
                      rallongés (plusieurs mois)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl">•</span>
                    <div>
                      <strong>Décote nécessaire :</strong> Pour accélérer la cession, les vendeurs doivent souvent 
                      accepter une décote sur le prix des parts
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-blue-900">📉 Impact de la hausse des taux</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-red-900">Coût du financement accru</h4>
                    <p className="text-sm text-gray-700">
                      Les sociétés de gestion voient leurs frais financiers augmenter, ce qui peut réduire 
                      la distribution de dividendes aux porteurs de parts.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-red-900">Réévaluation des actifs immobiliers</h4>
                    <p className="text-sm text-gray-700">
                      La hausse des taux entraîne une augmentation des taux de capitalisation, ce qui diminue 
                      la valeur vénale des biens immobiliers détenus par les SCPI.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-red-900">Baisse de la valeur des parts</h4>
                    <p className="text-sm text-gray-700">
                      Pour refléter la dépréciation des actifs, plusieurs SCPI ont ajusté à la baisse le prix 
                      de leurs parts en 2024-2025 (baisse de 5 à 15% selon les SCPI).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-bold mb-3 text-blue-900">💡 Conséquences pour l'investisseur</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Privilégier un <strong>investissement à moyen-long terme</strong> (8-10 ans minimum)</li>
                  <li>✓ Diversifier entre <strong>plusieurs SCPI</strong> pour limiter les risques</li>
                  <li>✓ Sélectionner rigoureusement les SCPI (qualité actifs, société de gestion, taux d'occupation)</li>
                  <li>✓ Prendre en compte la <strong>volatilité du prix des parts</strong> dans la gestion du portefeuille</li>
                  <li>✓ Ne pas compter sur une <strong>liquidité immédiate</strong> en cas de besoin</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profils investisseurs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">À qui s'adressent les SCPI ?</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3">🎯 Investisseur patrimonial recherchant des revenus</h3>
                <p className="text-gray-700 mb-3">
                  Personne souhaitant percevoir des revenus locatifs réguliers sans contrainte de gestion.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg text-sm">
                  <strong>SCPI recommandées :</strong> SCPI de rendement (bureaux, commerces, diversifiées)
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3">💼 Contribuable fortement imposé</h3>
                <p className="text-gray-700 mb-3">
                  Recherche de défiscalisation tout en investissant dans l'immobilier.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg text-sm">
                  <strong>SCPI recommandées :</strong> SCPI fiscales (Denormandie, Malraux, déficit foncier)
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3">🏢 Entrepreneur avec holding</h3>
                <p className="text-gray-700 mb-3">
                  Valorisation de la trésorerie d'entreprise avec optimisation fiscale.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg text-sm">
                  <strong>Stratégie :</strong> SCPI via holding à l'IS (régime mère-fille, usufruit temporaire)
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3">👨‍👩‍👧‍👦 Famille préparant une transmission</h3>
                <p className="text-gray-700 mb-3">
                  Optimisation de la transmission patrimoniale aux générations futures.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg text-sm">
                  <strong>Stratégie :</strong> Démembrement (usufruit parents / nue-propriété enfants)
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
              Investir en SCPI avec une stratégie adaptée
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              "Les SCPI restent un placement attractif en 2025 malgré les tensions de liquidité. Une sélection 
              rigoureuse, une vision long terme et une structuration optimale (holding, démembrement) sont les 
              clés de la réussite."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all inline-block"
              >
                Analyser mon projet SCPI
              </Link>
              <a 
                href="tel:+33785481809"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-block"
              >
                📞 06 07 96 31 35
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Sélection SCPI personnalisée • Stratégies holdings • Accompagnement complet
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}