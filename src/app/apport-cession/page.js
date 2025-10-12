'use client'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function ApportCessionPage() {
  const [activeTab, setActiveTab] = useState('principe');

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Apport-Cession<br />
              <span className="text-blue-400">Optimiser la fiscalité de votre cession</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              L'apport-cession (article 150-0 B ter du CGI) permet de différer l'imposition de la 
              plus-value lors de la cession de votre entreprise en apportant vos titres à une holding. 
              Découvrez ce mécanisme fiscal puissant mais complexe.
            </p>
            <div className="flex gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Simuler mon projet
              </a>
              <a 
                href="#mecanisme" 
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all backdrop-blur-sm"
              >
                Comprendre le mécanisme
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* L'essentiel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#111827' }}>L'essentiel à retenir</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                <div className="text-3xl font-bold text-blue-600 mb-2">Report</div>
                <p className="text-gray-700">Plus-value différée jusqu'à événement de sortie</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                <div className="text-3xl font-bold text-blue-600 mb-2">3 ans</div>
                <p className="text-gray-700">Délai clé pour éviter l'obligation de remploi 60%</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                <p className="text-gray-700">Quota minimum à réinvestir si cession {`<`} 3 ans</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                <div className="text-3xl font-bold text-blue-600 mb-2">2 ans</div>
                <p className="text-gray-700">Délai pour réinvestir + bénéficier niche Copé (3%)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Définition et principe */}
      <section id="mecanisme" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#111827' }}>Qu'est-ce que l'apport-cession ?</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#1e3a8a' }}>Définition</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                L'<strong>apport-cession</strong> est une stratégie d'optimisation fiscale prévue à 
                l'<strong>article 150-0 B ter du Code Général des Impôts</strong>. Elle consiste à :
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">1</div>
                  <div>
                    <strong>Créer une holding</strong> soumise à l'IS que vous contrôlez (≥ 33,33% des parts)
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">2</div>
                  <div>
                    <strong>Apporter vos titres</strong> de la société opérationnelle à cette holding
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">3</div>
                  <div>
                    <strong>La holding cède</strong> ensuite les titres au repreneur final
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">4</div>
                  <div>
                    <strong>Report d'imposition</strong> : la plus-value est gelée, non exigible immédiatement
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h4 className="font-bold mb-3" style={{ color: '#1e3a8a' }}>Cadre légal</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Article 150-0 B ter du CGI</strong> : report automatique de la plus-value d'apport</li>
                  <li>• <strong>Article 219, I, a quinquies du CGI</strong> : régime "niche Copé" (fiscalité 3%)</li>
                  <li>• Holding soumise à l'IS avec contrôle minimum 33,33%</li>
                  <li>• Report jusqu'à événement de sortie (cession, donation, décès, expatriation)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparaison cession directe vs apport-cession */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#111827' }}>Cession directe vs Apport-cession</h2>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#1e3a8a' }}>Exemple chiffré</h3>
              <div className="space-y-4">
                <div>
                  <strong>Hypothèse :</strong>
                  <ul className="text-gray-700 mt-2 space-y-1">
                    <li>• Prix de cession : 800 000 €</li>
                    <li>• Plus-value réalisée : 750 000 €</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-600">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#7f1d1d' }}>Cession directe (sans holding)</h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div>
                    <strong>Plus-value :</strong> 750 000 €
                  </div>
                  <div>
                    <strong>Flat Tax (30%) :</strong> 225 000 €
                  </div>
                  <div>
                    <strong>CEHR (3%) :</strong> 22 500 €
                  </div>
                  <div className="pt-3 border-t border-red-200">
                    <strong>Total impôt :</strong> <span className="text-2xl font-bold text-red-600">247 500 €</span>
                  </div>
                  <div className="pt-2">
                    <strong>Montant net disponible :</strong> <span className="text-xl font-bold">557 000 €</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-4">
                    ≈ 70% du prix de vente disponible
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-600">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#14532d' }}>Apport-cession (avec holding)</h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <div>
                    <strong>Plus-value :</strong> 750 000 €
                  </div>
                  <div>
                    <strong>Impôt calculé mais NON EXIGIBLE :</strong> 247 500 €
                  </div>
                  <div>
                    <strong>Report d'imposition :</strong> Oui
                  </div>
                  <div className="pt-3 border-t border-green-200">
                    <strong>Impôt immédiat :</strong> <span className="text-2xl font-bold text-green-600">0 €</span>
                  </div>
                  <div className="pt-2">
                    <strong>Montant disponible dans holding :</strong> <span className="text-xl font-bold">800 000 €</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-4">
                    100% du prix disponible pour réinvestir
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600 mt-8">
              <h4 className="font-bold mb-3" style={{ color: '#14532d' }}>Économie immédiate</h4>
              <p className="text-gray-700">
                <strong>247 500 € d'impôt reporté</strong>, soit 100% du capital disponible pour réinvestir 
                au lieu de 70%. L'État vous accorde en quelque sorte un <strong>"prêt à taux zéro"</strong> pour 
                développer vos nouveaux projets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les 2 délais critiques */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#111827' }}>Les 2 délais critiques à maîtriser</h2>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mr-4 text-2xl font-bold">
                    3 ans
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: '#7f1d1d' }}>Délai de l'obligation de remploi</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Si la cession intervient <strong>moins de 3 ans après l'apport</strong>, vous devez 
                  <strong> réinvestir 60% minimum</strong> du prix de cession dans des <strong>activités 
                  économiques éligibles</strong> dans un délai de <strong>2 ans</strong>.
                </p>

                <div className="bg-red-50 p-6 rounded-lg mb-4">
                  <h4 className="font-bold mb-3" style={{ color: '#7f1d1d' }}>⚠️ Si cession {`<`} 3 ans après apport</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Obligation :</strong> Réinvestir ≥ 60% du prix de cession</li>
                    <li>• <strong>Délai :</strong> 2 ans maximum pour réinvestir</li>
                    <li>• <strong>Conservation :</strong> 1 an (investissements directs) ou 5 ans (fonds)</li>
                    <li>• <strong>Sanction :</strong> À défaut, report tombe et impôt immédiatement exigible</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold mb-3" style={{ color: '#14532d' }}>✅ Si cession {`>`} 3 ans après apport</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Aucune obligation de remploi</strong></li>
                    <li>• Liberté totale d'utilisation du prix de cession dans la holding</li>
                    <li>• Report d'imposition maintenu jusqu'à événement de sortie</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mr-4 text-2xl font-bold">
                    2 ans
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: '#1e3a8a' }}>Délai de la "niche Copé" (fiscalité 3%)</h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Si la holding cède les titres <strong>plus de 2 ans après l'apport</strong>, elle bénéficie 
                  d'une <strong>fiscalité ultra-réduite de 3%</strong> sur la plus-value réalisée entre l'apport 
                  et la cession (au lieu de 25%).
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h4 className="font-bold mb-3" style={{ color: '#1e3a8a' }}>Exemple chiffré</h4>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <p><strong>Apport des titres :</strong> 2 000 000 € (02/03/2023)</p>
                    <p><strong>Offre d'achat :</strong> 4 000 000 € (décembre 2024)</p>
                    <p><strong>Plus-value holding :</strong> 2 000 000 €</p>
                    <hr className="my-3" />
                    <p><strong>Si cession avant le 03/03/2025 ({`<`} 2 ans) :</strong></p>
                    <p className="ml-4">Fiscalité IS 25% = <span className="text-red-600 font-bold">500 000 €</span></p>
                    <p className="mt-2"><strong>Si cession après le 03/03/2025 ({`>`} 2 ans) :</strong></p>
                    <p className="ml-4">Fiscalité "niche Copé" 3% = <span className="text-green-600 font-bold">60 000 €</span></p>
                    <p className="mt-3 pt-3 border-t border-blue-300">
                      <strong>Économie en attendant 3 mois :</strong> <span className="text-2xl font-bold" style={{ color: '#1e3a8a' }}>440 000 €</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Réinvestissements éligibles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#111827' }}>Réinvestissements éligibles (quota 60%)</h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg mb-8">
              <p className="text-gray-700">
                <strong>Rappel :</strong> L'obligation de réinvestir 60% du prix de cession ne s'applique QUE 
                si la cession intervient moins de 3 ans après l'apport. Les 40% restants peuvent être utilisés 
                librement.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1e3a8a' }}>1. Investissement direct dans des sociétés</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-xl">•</span>
                    <div>
                      <strong>Financement d'actifs d'exploitation :</strong> Acquisition de locaux, matériel, 
                      immobilier professionnel nécessaire à l'activité de la holding
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-xl">•</span>
                    <div>
                      <strong>Prise de contrôle :</strong> Acquisition de titres permettant d'obtenir le contrôle 
                      d'une société exerçant une activité économique (commerciale, industrielle, artisanale, 
                      libérale, agricole, financière)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 text-xl">•</span>
                    <div>
                      <strong>Souscription au capital :</strong> Participation à la création ou augmentation de 
                      capital d'une société (pas besoin de contrôle)
                    </div>
                  </li>
                </ul>
                <div className="mt-4 bg-blue-50 p-4 rounded-lg text-sm">
                  <strong>Conditions :</strong> Siège social en France ou UE, société à l'IS, activité économique éligible
                </div>
                <div className="mt-4 bg-green-50 p-4 rounded-lg text-sm">
                  <strong>Conservation :</strong> 12 mois minimum
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1e3a8a' }}>2. Fonds et sociétés d'investissement</h3>
                <p className="text-gray-700 mb-4">
                  Investissement indirect via des placements en <strong>private equity</strong> :
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">FCPR</h4>
                    <p className="text-sm text-gray-700">Fonds Commun de Placement à Risques</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">FPCI</h4>
                    <p className="text-sm text-gray-700">Fonds Professionnel de Capital Investissement</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">SLP</h4>
                    <p className="text-sm text-gray-700">Société de Libre Partenariat</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">SCR</h4>
                    <p className="text-sm text-gray-700">Société de Capital-Risque</p>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold mb-2" style={{ color: '#14532d' }}>Avantages</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Gestion déléguée à des professionnels</li>
                    <li>• Diversification du risque (multiple PME financées)</li>
                    <li>• Rendement attractif : 12,2% moyen selon France Invest</li>
                    <li>• Fiscalité avantageuse : 15% d'IS sur plus-values (fonds fiscaux)</li>
                    <li>• Appels de fonds progressifs (trésorerie conservée)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-sm">
                  <strong>Conditions :</strong> Conservation 5 ans minimum, 75% de l'actif investi dans sociétés éligibles
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#7f1d1d' }}>❌ Investissements NON éligibles</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Gestion de patrimoine immobilier (SCPI, immobilier locatif classique)</li>
                  <li>• Assurance-vie</li>
                  <li>• Titres cotés en bourse</li>
                  <li>• Comptes courants d'associés (sauf exception)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Événements de sortie */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#111827' }}>Quand le report d'imposition prend-il fin ?</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#7f1d1d' }}>Événements rendant l'impôt EXIGIBLE</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-red-600 mr-3 text-2xl">1.</span>
                    <div>
                      <strong style={{ color: '#7f1d1d' }}>Cession des titres de la holding</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Vente, échange, rachat ou annulation des parts de la holding → impôt exigible 
                        proportionnellement aux titres cédés
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-3 text-2xl">2.</span>
                    <div>
                      <strong style={{ color: '#7f1d1d' }}>Cession des titres apportés {`<`} 3 ans SANS remploi 60%</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Si la holding cède les titres moins de 3 ans après l'apport et ne réinvestit pas 60% 
                        dans des activités éligibles → impôt immédiatement exigible
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-3 text-2xl">3.</span>
                    <div>
                      <strong style={{ color: '#7f1d1d' }}>Expatriation fiscale</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Transfert du domicile fiscal hors de France → impôt exigible (avec possibilité de 
                        sursis selon pays et conditions)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#14532d' }}>Cas d'EXONÉRATION définitive (purge)</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-green-600 mr-3 text-2xl">1.</span>
                    <div>
                      <strong style={{ color: '#14532d' }}>Décès de l'apporteur</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Le décès purge définitivement la plus-value en report. Aucun impôt n'est transmis 
                        aux héritiers. Aucune durée de conservation requise.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 mr-3 text-2xl">2.</span>
                    <div>
                      <strong style={{ color: '#14532d' }}>Donation des titres de la holding</strong>
                      <p className="text-gray-700 text-sm mt-1 mb-2">
                        La donation transfère le report au donataire. La plus-value est définitivement purgée si :
                      </p>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Conservation des titres pendant <strong>5 ans</strong> (investissement direct)</li>
                        <li>• Conservation des titres pendant <strong>10 ans</strong> (si remploi via fonds FCPR/FPCI/SLP/SCR)</li>
                      </ul>
                      <p className="text-gray-700 text-sm mt-2 bg-green-50 p-3 rounded">
                        <strong>Stratégie optimale :</strong> Apport-cession + donation permet de transmettre 
                        son patrimoine avec une fiscalité très avantageuse
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages et inconvénients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#111827' }}>Avantages & Inconvénients</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#059669' }}>✅ Avantages</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong style={{ color: '#14532d' }}>Report d'imposition automatique</strong>
                    <p className="text-sm text-gray-700 mt-1">Pas d'impôt immédiat sur la plus-value d'apport</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong style={{ color: '#14532d' }}>100% du capital disponible</strong>
                    <p className="text-sm text-gray-700 mt-1">Réinvestissement de l'intégralité du prix de cession</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong style={{ color: '#14532d' }}>Fiscalité holding ultra-réduite</strong>
                    <p className="text-sm text-gray-700 mt-1">3% d'IS après 2 ans (niche Copé) vs 25%</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong style={{ color: '#14532d' }}>Transmission optimisée</strong>
                    <p className="text-sm text-gray-700 mt-1">Donation + conservation 5/10 ans = purge définitive</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong style={{ color: '#14532d' }}>Flexibilité après 3 ans</strong>
                    <p className="text-sm text-gray-700 mt-1">Liberté totale d'utilisation du produit de cession</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong style={{ color: '#14532d' }}>Effet de levier fiscal</strong>
                    <p className="text-sm text-gray-700 mt-1">"Prêt à taux zéro" de l'État pour réinvestir</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#dc2626' }}>⚠️ Inconvénients & Points de vigilance</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong style={{ color: '#7f1d1d' }}>Complexité technique</strong>
                    <p className="text-sm text-gray-700 mt-1">Mise en place rigoureuse, respect strict des délais</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong style={{ color: '#7f1d1d' }}>Obligation de remploi si {`<`} 3 ans</strong>
                    <p className="text-sm text-gray-700 mt-1">Contrainte 60% minimum, délai 2 ans, activités éligibles</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong style={{ color: '#7f1d1d' }}>Illiquidité relative</strong>
                    <p className="text-sm text-gray-700 mt-1">Fonds bloqués 5 ans, réinvestissements conservés 1-5 ans</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong style={{ color: '#7f1d1d' }}>Risque de sortie prématurée</strong>
                    <p className="text-sm text-gray-700 mt-1">Non-respect conditions → impôt exigible + pénalités</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong style={{ color: '#7f1d1d' }}>Gestion administrative</strong>
                    <p className="text-sm text-gray-700 mt-1">Déclarations annuelles, suivi comptable précis</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong style={{ color: '#7f1d1d' }}>Double fiscalité pour appréhension</strong>
                    <p className="text-sm text-gray-700 mt-1">Distribution dividendes holding → personne physique taxée 34%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stratégies recommandées */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#111827' }}>Stratégies recommandées selon votre profil</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3">🚀 Entrepreneur qui veut repartir dans un projet</h3>
                <p className="text-gray-700 mb-3">
                  Nouvel investissement opérationnel, prise de contrôle d'une société, développement d'une activité.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg text-sm">
                  <strong>Stratégie :</strong> Apport-cession → cession rapide → réinvestissement direct 
                  (60% mini) dans nouvelle société + fonds pour diversifier
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3">💼 Entrepreneur "à la retraite"</h3>
                <p className="text-gray-700 mb-3">
                  Souhait de diversifier son patrimoine sans s'impliquer dans la gestion.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg text-sm">
                  <strong>Stratégie :</strong> Apport-cession → attendre 3 ans → cession sans contrainte 
                  de remploi → investissement via fonds (FCPR/FPCI/SLP) avec gestion déléguée
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3">👨‍👩‍👧‍👦 Famille préparant transmission</h3>
                <p className="text-gray-700 mb-3">
                  Optimisation de la transmission patrimoniale aux enfants.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg text-sm">
                  <strong>Stratégie :</strong> Apport-cession → cession {`>`} 3 ans après → donation titres 
                  holding aux enfants → conservation 5-10 ans → purge définitive + Pacte Dutreil possible
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-3">⚖️ Cession partielle (mix direct + holding)</h3>
                <p className="text-gray-700 mb-3">
                  Besoin de liquidités immédiates + optimisation fiscale sur le reste.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg text-sm">
                  <strong>Stratégie :</strong> Cession 30% en direct (liquidités personnelles) + apport-cession 
                  70% restants (report + réinvestissement via holding). Permet flexibilité maximale.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommandations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#111827' }}>Nos recommandations</h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#a16207' }}>⚠️ Points critiques à anticiper</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">•</span>
                  <span><strong>Timing de l'apport :</strong> Apporter trop tôt ou trop tard peut être pénalisant. 
                  Analyser l'horizon de cession ({`<`} ou {`>`} 3 ans)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">•</span>
                  <span><strong>Montant à apporter :</strong> Apport partiel parfois plus pertinent (conserver 
                  partie en direct pour liquidités personnelles)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">•</span>
                  <span><strong>Identification réinvestissements :</strong> Ne pas attendre le dernier moment 
                  pour trouver des actifs éligibles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">•</span>
                  <span><strong>Vision patrimoniale globale :</strong> Intégrer transmission, expatriation, 
                  besoins personnels dans la stratégie</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1e3a8a' }}>💡 Nos conseils d'experts</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">1.</span>
                  <div>
                    <strong>Se faire accompagner AVANT l'opération</strong>
                    <p className="text-sm mt-1">
                      L'apport-cession est complexe. Un accompagnement juridique et fiscal dès le départ 
                      évite les erreurs coûteuses.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">2.</span>
                  <div>
                    <strong>Modéliser plusieurs scénarios</strong>
                    <p className="text-sm mt-1">
                      Comparer cession directe vs apport-cession, apport total vs partiel, cession {`<`} 3 ans 
                      vs {`>`} 3 ans avec impacts chiffrés.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">3.</span>
                  <div>
                    <strong>Anticiper les réinvestissements</strong>
                    <p className="text-sm mt-1">
                      Si cession {`<`} 3 ans, identifier dès maintenant les fonds ou sociétés éligibles 
                      (FCPR, FPCI, SLP, nouvelles participations).
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">4.</span>
                  <div>
                    <strong>Combiner avec d'autres dispositifs</strong>
                    <p className="text-sm mt-1">
                      Pacte Dutreil, donations avant cession, démembrement, stratégie globale pour 
                      optimiser transmission et fiscalité.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">5.</span>
                  <div>
                    <strong>Suivi rigoureux post-opération</strong>
                    <p className="text-sm mt-1">
                      Déclarations fiscales annuelles, respect des délais de remploi et conservation, 
                      documentation complète.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Abus de droit et vigilance juridique */}
      <section className="py-16 bg-white border-t-4 border-red-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#111827' }}>Abus de droit : une vigilance indispensable</h2>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#7f1d1d' }}>⚠️ Qu'est-ce que l'abus de droit fiscal ?</h3>
              <p className="text-gray-700 mb-4">
                L'<strong>abus de droit</strong> (article L64 du Livre des Procédures Fiscales) se caractérise par :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">1.</span>
                  <div>
                    <strong>Acte fictif :</strong> Opération qui ne correspond pas à la réalité (donation déguisée en vente, etc.)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 font-bold">2.</span>
                  <div>
                    <strong>Montage abusif :</strong> Opération qui respecte la lettre de la loi mais en détourne l'esprit, 
                    réalisée dans le <strong>seul but de réduire la charge fiscale</strong> sans justification économique réelle
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#7f1d1d' }}>Exemples de montages à risque</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl">⚠</span>
                    <div>
                      <strong style={{ color: '#7f1d1d' }}>Investissement purement patrimonial</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Acquisition de parts de SCI à gestion patrimoniale, immobilier locatif classique → 
                        Non éligible, car pas d'activité économique réelle
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl">⚠</span>
                    <div>
                      <strong style={{ color: '#7f1d1d' }}>Rachat de ses propres actifs</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Faire racheter par la holding des biens que vous déteniez personnellement → 
                        Pas de véritable investissement, simple changement de détention
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl">⚠</span>
                    <div>
                      <strong style={{ color: '#7f1d1d' }}>Compte-courant sans objet économique</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Avance en compte-courant à une filiale sans financer d'actifs d'exploitation → 
                        Simple trésorerie, non éligible
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl">⚠</span>
                    <div>
                      <strong style={{ color: '#7f1d1d' }}>Réinvestissement dans l'acquéreur</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Réinvestir 60% dans l'augmentation de capital de la société qui a racheté vos titres → 
                        Montage circulaire sans substance, récemment épinglé par l'administration
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#7f1d1d' }}>Sanctions en cas d'abus de droit</h3>
                <div className="space-y-3">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong style={{ color: '#7f1d1d' }}>Perte du report d'imposition</strong>
                    <p className="text-sm text-gray-700 mt-1">
                      L'impôt sur la plus-value devient <strong>immédiatement exigible</strong>, même si le capital 
                      est déjà réinvesti et indisponible
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong style={{ color: '#7f1d1d' }}>Pénalités de retard</strong>
                    <p className="text-sm text-gray-700 mt-1">
                      Calculées depuis la date de cession (pas seulement depuis la requalification)
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <strong style={{ color: '#7f1d1d' }}>Majoration 40% à 80%</strong>
                    <p className="text-sm text-gray-700 mt-1">
                      • <strong>80%</strong> si vous êtes à l'initiative du montage abusif<br />
                      • <strong>40%</strong> si vous n'êtes pas le principal bénéficiaire
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                    <strong style={{ color: '#7f1d1d' }}>⚠️ Sanctions pénales possibles</strong>
                    <p className="text-sm text-gray-700 mt-1">
                      Si majoration ≥ 100 000 € : dénonciation obligatoire au procureur<br />
                      Risque : jusqu'à <strong>5 ans de prison + 500 000 € d'amende</strong> (voire le double de l'impôt dû)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#1e3a8a' }}>Comment sécuriser votre opération ?</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">1</div>
                  <div>
                    <strong style={{ color: '#1e3a8a' }}>Accompagnement juridique et fiscal dès le départ</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      L'apport-cession ne se fait pas seul. Nos experts travaillent en synergie avec des avocats 
                      fiscalistes spécialisés pour sécuriser chaque étape de votre projet.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">2</div>
                  <div>
                    <strong style={{ color: '#1e3a8a' }}>Justification économique réelle</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Chaque réinvestissement doit répondre à un objectif économique tangible, documenté et 
                      cohérent avec votre stratégie patrimoniale et entrepreneuriale.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">3</div>
                  <div>
                    <strong style={{ color: '#1e3a8a' }}>Rescrit fiscal préalable</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      En cas de doute, consultation écrite de la DGFiP avant l'opération. Absence de réponse sous 
                      6 mois = accord tacite, protection contre procédure d'abus de droit.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">4</div>
                  <div>
                    <strong style={{ color: '#1e3a8a' }}>Sélection rigoureuse des investissements</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Privilégier des fonds éligibles (FCPR, FPCI, SLP, SCR) gérés par des professionnels reconnus, 
                      ou des prises de participation dans des sociétés opérationnelles solides.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">5</div>
                  <div>
                    <strong style={{ color: '#1e3a8a' }}>Documentation exhaustive</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Conservation de tous les justificatifs, conventions, rapports d'investissement pour démontrer 
                      la substance économique de l'opération en cas de contrôle.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                <h4 className="font-bold mb-3" style={{ color: '#1e3a8a' }}>Notre approche : sécurité et conformité</h4>
                <p className="text-gray-700 leading-relaxed">
                  Chaque projet de cession est unique et répond à des besoins précis. La finalisation des conseils 
                  auprès d'<strong>avocats spécialisés en fiscalité</strong> permet de maintenir une trajectoire 
                  sécurisée dans un environnement juridique en perpétuelle évolution. Notre cabinet s'entoure d'un 
                  <strong>réseau d'experts fiscaux reconnus</strong> pour accompagner les dirigeants dans ces montages 
                  complexes, en garantissant à la fois l'optimisation fiscale et la conformité juridique.
                </p>
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
              Optimisez votre cession avec l'apport-cession
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              "L'apport-cession est un outil fiscal redoutablement efficace mais qui requiert rigueur, 
              anticipation et accompagnement. Chaque situation est unique et mérite une stratégie sur-mesure."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="https://taap.it/i3gsEr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-all inline-block"
              >
                Analyser mon projet de cession
              </Link>
              <a 
                href="tel:0607963135"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all inline-block"
              >
                📞 06 07 96 31 35
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Modélisation personnalisée • Stratégie fiscale optimale • Accompagnement complet
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}