'use client'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ImmobilierPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Immobilier d'investissement<br />
              <span className="text-blue-400">Optimisation fiscale via holdings</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Le dispositif 150-0 B ter permet de réinvestir en immobilier avec report d'imposition. 
              Une stratégie patrimoniale puissante pour les dirigeants et investisseurs.
            </p>
            <div className="flex gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Étudier mon projet
              </a>
              <a 
                href="#dispositif" 
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all backdrop-blur-sm"
              >
                Comprendre le 150-0 B ter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* L'essentiel à retenir */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">L'essentiel à retenir</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                <div className="text-3xl font-bold text-blue-600 mb-2">Report</div>
                <p className="text-gray-700">Plus-value différée lors de l'apport de titres à une holding</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                <p className="text-gray-700">Minimum à réinvestir dans les 24 mois en immobilier éligible</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                <div className="text-3xl font-bold text-blue-600 mb-2">LMNP</div>
                <p className="text-gray-700">Location meublée non professionnelle éligible depuis 2024</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                <div className="text-3xl font-bold text-blue-600 mb-2">5 ans</div>
                <p className="text-gray-700">Durée minimum de conservation des biens acquis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Définition et cadre légal */}
      <section id="dispositif" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Le dispositif 150-0 B ter : cadre juridique</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Principe général</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                L'article <strong>150-0 B ter du CGI</strong> permet de bénéficier d'un <strong>report d'imposition</strong> 
                de la plus-value réalisée lors de l'apport de titres d'une société à une holding, à condition de 
                réinvestir <strong>au moins 50 % du prix de cession</strong> dans des biens ou droits immobiliers éligibles 
                dans un délai de <strong>24 mois</strong>.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-lg mb-3 text-blue-900">Fondements légaux</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>CGI art. 150-0 B ter</strong> : mécanisme de report d'imposition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>LOI 2023-1322 du 29 décembre 2023</strong> (art. 18) : assouplissement LMNP</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>BOI-RPPM-PVBMI-30-10-60</strong> : doctrine administrative</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Rescrit 2017/69 du 3 octobre 2017</strong> : précisions sur les modalités</span>
                  </li>
                </ul>
              </div>

              <h4 className="font-bold text-lg mb-3">Conditions cumulatives</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">1</div>
                  <div>
                    <strong>Apport de titres</strong> d'une société exerçant une activité commerciale, industrielle, artisanale, libérale ou agricole
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">2</div>
                  <div>
                    <strong>Holding bénéficiaire</strong> soumise à l'IS (SAS, SARL, SA)
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">3</div>
                  <div>
                    <strong>Réinvestissement ≥ 50 %</strong> du prix de cession dans les 24 mois
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">4</div>
                  <div>
                    <strong>Conservation 5 ans minimum</strong> des biens acquis
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 font-bold">5</div>
                  <div>
                    <strong>Déclaration fiscale</strong> conforme (formulaire 2074-IMP)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actifs immobiliers éligibles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Actifs immobiliers éligibles en 2025</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
                <h3 className="text-xl font-bold mb-4 text-green-900">✅ Éligible</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span><strong>Immeubles nus</strong> (résidentiels, commerciaux, bureaux)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span><strong>Parts de SCI à l'IS</strong> détenant de l'immobilier</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span><strong>LMNP</strong> (location meublée non professionnelle) depuis 2024</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span><strong>Biens en VEFA</strong> (vente en l'état futur d'achèvement)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span><strong>Terrains à bâtir</strong> avec promesse de construction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span><strong>Droits réels</strong> (usufruit, nue-propriété)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
                <h3 className="text-xl font-bold mb-4 text-red-900">❌ Non éligible</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">•</span>
                    <span><strong>SCPI</strong> (sociétés civiles de placement immobilier)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">•</span>
                    <span><strong>OPCI</strong> (organismes de placement collectif immobilier)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">•</span>
                    <span><strong>SCI à l'IR</strong> (transparence fiscale)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">•</span>
                    <span><strong>Fonds immobiliers</strong> (FPI, SLP, SPPICAV)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">•</span>
                    <span><strong>Parts de sociétés</strong> exerçant activité mixte ( supérieures à 50% non immobilier)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 font-bold">•</span>
                    <span><strong>Meubles meublants</strong> ou équipements mobiliers seuls</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-blue-900">🆕 Nouveauté 2024 : LMNP éligible</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depuis la <strong>loi de finances 2024</strong> (art. 18), les biens en <strong>location meublée non professionnelle</strong> 
                (LMNP) sont désormais éligibles au réinvestissement 150-0 B ter, à condition que :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Le bien soit détenu <strong>directement par la holding</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>La location soit <strong>non professionnelle</strong> (seuil CA)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Conservation minimum de <strong>5 ans</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fiscalité et mécanisme */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Fiscalité et mécanisme du report</h2>

            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">Schéma de fonctionnement</h3>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                  <div className="font-bold text-lg mb-3">📊 Exemple chiffré</div>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Dirigeant :</strong> M. Dupont cède sa société opérationnelle</p>
                    <p><strong>Prix de cession :</strong> 2 000 000 €</p>
                    <p><strong>Plus-value :</strong> 1 500 000 €</p>
                    <p><strong>Fiscalité classique :</strong> 450 000 € (30% PFU)</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">Étape 1</div>
                    <p className="text-sm text-gray-700">Apport titres à holding SAS</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">Étape 2</div>
                    <p className="text-sm text-gray-700">Holding cède titres (2 M€)</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">Étape 3</div>
                    <p className="text-sm text-gray-700">Réinvesti ≥ 1 M€ en immobilier</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                  <div className="font-bold text-lg mb-3 text-green-900">✅ Résultat avec 150-0 B ter</div>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Impôt immédiat :</strong> 0 € (report d'imposition)</li>
                    <li><strong>Montant à réinvestir :</strong> 1 000 000 € minimum (50% de 2 M€)</li>
                    <li><strong>Disponible après réinvestissement :</strong> 1 000 000 €</li>
                    <li><strong>Économie de trésorerie :</strong> 450 000 € (report)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">Évènements déclencheurs du report</h3>
              <p className="text-gray-700 mb-4">
                Le report d'imposition prend fin et la plus-value devient imposable dans les cas suivants :
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl">⚠️</span>
                  <div>
                    <strong>Cession des titres apportés</strong> par la holding avant 5 ans
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl">⚠️</span>
                  <div>
                    <strong>Cession des biens immobiliers</strong> acquis avant 5 ans
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl">⚠️</span>
                  <div>
                    <strong>Non-respect du quota 50%</strong> de réinvestissement dans les 24 mois
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 mr-3 text-xl">⚠️</span>
                  <div>
                    <strong>Dissolution ou transmission</strong> de la holding avant 5 ans
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stratégies et structuration */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Stratégies de structuration patrimoniale</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold mb-4 text-blue-900">🏢 Holding patrimoniale passive</h3>
                <p className="text-gray-700 mb-4">
                  Détention d'un portefeuille immobilier diversifié avec gestion locative centralisée.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Bureaux, commerces, résidentiel</li>
                  <li>✓ Parts de SCI à l'IS</li>
                  <li>✓ LMNP (nouveauté 2024)</li>
                  <li>✓ Capitalisation des loyers dans la holding</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold mb-4 text-blue-900">🎯 Holding animatrice + immobilier</h3>
                <p className="text-gray-700 mb-4">
                  Combinaison d'activités opérationnelles et de détention immobilière professionnelle.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Locaux professionnels des filiales</li>
                  <li>✓ Pacte Dutreil éligible</li>
                  <li>✓ Exonération IFI partielle</li>
                  <li>✓ Optimisation fiscale globale</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 text-blue-900">🔄 Stratégies combinées</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">1.</span>
                  <div>
                    <strong>Apport-cession + immobilier locatif :</strong> Acquérir bureaux/commerces avec loyers réguliers
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">2.</span>
                  <div>
                    <strong>Démembrement immobilier :</strong> Nue-propriété en holding, usufruit personnel (optimisation IFI)
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">3.</span>
                  <div>
                    <strong>SCI filles à l'IS :</strong> Détention via SCI pour mutualiser gestion et optimiser transmission
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">4.</span>
                  <div>
                    <strong>Mix LMNP + nu :</strong> Diversification locative (meublé touristique + bureaux nus)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profils investisseurs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">À qui s'adresse ce dispositif ?</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Dirigeant cédant son entreprise</h3>
                    <p className="text-gray-700 mb-3">
                      Chef d'entreprise cédant sa société opérationnelle et souhaitant réinvestir dans l'immobilier 
                      locatif sans payer immédiatement 30% d'impôt.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg text-sm">
                      <strong>Exemple :</strong> Cession 3 M€ → Holding → Achat 2 immeubles commerciaux (1,5 M€) 
                      → Report 450 k€ d'impôt
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Investisseur immobilier patrimonial</h3>
                    <p className="text-gray-700 mb-3">
                      Personne physique détenant participations dans sociétés et souhaitant se constituer un 
                      portefeuille immobilier professionnel via holding.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg text-sm">
                      <strong>Exemple :</strong> Apport titres valorisés 1 M€ → Achat bureaux + LMNP (500 k€ mini) 
                      → Loyers capitalisés
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Famille patrimoniale multi-générationnelle</h3>
                    <p className="text-gray-700 mb-3">
                      Famille souhaitant structurer patrimoine immobilier dans holding familiale pour transmission 
                      avec Pacte Dutreil et démembrement.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg text-sm">
                      <strong>Exemple :</strong> Holding familiale SAS → Immeubles nus + SCI filles → Transmission 
                      optimisée aux enfants
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Associé sortant en mésentente</h3>
                    <p className="text-gray-700 mb-3">
                      Associé cédant ses parts dans contexte conflictuel et voulant sécuriser le produit de 
                      cession en immobilier tangible.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg text-sm">
                      <strong>Exemple :</strong> Cession parts SARL 800 k€ → Holding → Achat résidence services + 
                      bureaux (400 k€)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages & Inconvénients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Avantages & Points de vigilance</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-700">✅ Avantages</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong className="text-green-900">Report d'imposition</strong>
                    <p className="text-sm text-gray-700 mt-1">Pas de taxation immédiate de la plus-value (30% PFU économisé)</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong className="text-green-900">Effet de levier fiscal</strong>
                    <p className="text-sm text-gray-700 mt-1">Réinvestissement de 100% du capital sans décaissement fiscal</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong className="text-green-900">Diversification patrimoniale</strong>
                    <p className="text-sm text-gray-700 mt-1">Transition sociétaire → immobilier tangible et générateur de loyers</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong className="text-green-900">Loyers capitalisés</strong>
                    <p className="text-sm text-gray-700 mt-1">Revenus locatifs dans la holding à l'IS (15% puis 25%)</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong className="text-green-900">Transmission facilitée</strong>
                    <p className="text-sm text-gray-700 mt-1">Pacte Dutreil possible + démembrement + donation titres</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong className="text-green-900">Éligibilité LMNP 2024</strong>
                    <p className="text-sm text-gray-700 mt-1">Nouvelles opportunités location meublée non professionnelle</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-red-700">⚠️ Points de vigilance</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong className="text-red-900">Obligation réinvestissement 50%</strong>
                    <p className="text-sm text-gray-700 mt-1">Contrainte de débloquer au moins la moitié du prix de cession</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong className="text-red-900">Délai impératif 24 mois</strong>
                    <p className="text-sm text-gray-700 mt-1">Recherche et acquisition sous pression temporelle</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong className="text-red-900">Conservation 5 ans minimum</strong>
                    <p className="text-sm text-gray-700 mt-1">Immobilisation longue durée, illiquidité relative</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong className="text-red-900">Fiscalité IS sur loyers</strong>
                    <p className="text-sm text-gray-700 mt-1">Revenus locatifs taxés 15% puis 25% (vs IR progressif)</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong className="text-red-900">IFI sur immobilier</strong>
                    <p className="text-sm text-gray-700 mt-1">Biens détenus en holding passive intégrés à l'assiette IFI</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong className="text-red-900">Complexité administrative</strong>
                    <p className="text-sm text-gray-700 mt-1">Suivi comptable, déclaratif (2074-IMP), documentation précise</p>
                  </div>
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
              Optimisez votre apport-cession avec l'immobilier
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              "Le dispositif 150-0 B ter est un levier patrimonial majeur pour les dirigeants cédants. 
              Une structuration rigoureuse permet de différer l'impôt et de constituer un patrimoine 
              immobilier professionnel durable."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all inline-block"
              >
                Étudier mon projet immobilier
              </Link>
              <a 
                href="tel:+33785481809"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-block"
              >
                📞 07 85 48 18 09
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Premier rendez-vous téléphonique gratuit • Accompagnement personnalisé • Réseau d'experts immobiliers
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}