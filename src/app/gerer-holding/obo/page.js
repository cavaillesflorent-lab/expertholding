import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TrendingUp, Shield, CheckCircle, ArrowRight, FileText, Users, AlertTriangle, DollarSign, Scale, Target } from 'lucide-react'

export default function OBOPage() {
  const LIEN_CONTACT = "https://taap.it/i3gsEr"
  
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="gerer" />

      {/* Fil d'Ariane */}
      <div className="bg-slate-50 border-b border-slate-100 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-slate-500 hover:text-slate-700 font-light transition-colors">Accueil</a>
            <span className="text-slate-300">/</span>
            <a href="/gerer-holding" className="text-slate-500 hover:text-slate-700 font-light transition-colors">Gérer sa Holding</a>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900">OBO - Owner Buy-Out</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80" 
            alt="OBO - Owner Buy-Out" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-amber-600/10 backdrop-blur-sm border border-amber-600/20 mb-8">
              <span className="text-amber-400 text-sm font-light tracking-wide">GUIDE EXPERT 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
              OBO<br />
              <span className="text-amber-400">Owner Buy-Out</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 leading-relaxed">
              Racheter sa propre entreprise : fonctionnement, avantages fiscaux, risques et stratégies d'optimisation patrimoniale
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href={LIEN_CONTACT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-base font-light transition-all hover:shadow-xl hover:scale-105"
              >
                Je veux plus d'informations
              </a>
              <a 
                href="tel:0607963135" 
                className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 text-base font-light backdrop-blur-sm transition-all"
              >
                06 07 96 31 35
              </a>
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-400 font-light">
              <span className="flex items-center space-x-2">
                <FileText size={16} />
                <span>Lecture 20 min</span>
              </span>
              <span className="flex items-center space-x-2">
                <CheckCircle size={16} />
                <span>Mis à jour : Janvier 2025</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 p-8 lg:p-12 mb-16">
            <h2 className="text-2xl md:text-3xl font-light text-slate-900 mb-6 flex items-center">
              <Shield className="text-amber-600 mr-3" size={28} />
              L'essentiel à retenir
            </h2>
            <div className="space-y-4 text-slate-700 font-light">
              <div className="flex items-start">
                <CheckCircle className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p><strong className="font-normal text-slate-900">L'OBO ("vente à soi-même") :</strong> Consiste à céder ses titres ou un actif immobilier à une holding que vous contrôlez, financée par emprunt. Vous encaissez le prix tout en conservant le contrôle indirect.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p><strong className="font-normal text-slate-900">Avantages clés :</strong> Liquidité immédiate, effet de levier, optimisation fiscale (PFU 12,8% + PS), régime mère-fille, préparation de la transmission.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <p><strong className="font-normal text-slate-900">Risques majeurs :</strong> Requalification fiscale (abus de droit), endettement excessif, impact IFI défavorable, valorisation contestée.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">Qu'est-ce qu'un OBO (Owner Buy-Out) ?</h2>
          
          <div className="bg-white border border-slate-100 p-8 mb-12">
            <h3 className="text-xl font-light text-slate-900 mb-4">Définition</h3>
            <p className="text-slate-700 font-light leading-relaxed mb-6">
              L'<strong className="font-normal text-slate-900">OBO (Owner Buy-Out)</strong> est une opération par laquelle un dirigeant cède ses titres ou un actif immobilier à une société qu'il contrôle (généralement une holding), qui se finance par emprunt bancaire pour réaliser l'acquisition.
            </p>
            <p className="text-slate-700 font-light leading-relaxed mb-6">
              Contrairement à une cession classique à un tiers, vous restez aux commandes : vous encaissez le produit de la vente tout en conservant le <strong className="font-normal text-slate-900">contrôle indirect</strong> de votre entreprise via la holding acheteuse.
            </p>
            <p className="text-slate-700 font-light leading-relaxed">
              Le remboursement de la dette s'effectue via les <strong className="font-normal text-slate-900">dividendes</strong> (pour les titres) ou les <strong className="font-normal text-slate-900">loyers</strong> (pour l'immobilier) générés par l'actif.
            </p>
          </div>

          <h3 className="text-2xl font-light text-slate-900 mb-6">Comment fonctionne un OBO ?</h3>
          
          <div className="bg-slate-50 border-l-4 border-amber-500 p-6 mb-12">
            <h4 className="text-lg font-normal text-slate-900 mb-4">Schéma type</h4>
            <ol className="space-y-3 text-slate-700 font-light">
              <li className="flex items-start">
                <span className="text-amber-600 font-normal mr-3">1.</span>
                <span>Création ou utilisation d'une <strong className="font-normal text-slate-900">holding de reprise</strong> que vous contrôlez</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-normal mr-3">2.</span>
                <span>La holding <strong className="font-normal text-slate-900">s'endette</strong> auprès d'une banque (+ éventuellement crédit-vendeur)</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-normal mr-3">3.</span>
                <span>La holding <strong className="font-normal text-slate-900">rachète vos titres ou votre bien</strong> au prix de marché</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-normal mr-3">4.</span>
                <span>Vous encaissez le <strong className="font-normal text-slate-900">produit de cession</strong> (liquidités immédiates)</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-normal mr-3">5.</span>
                <span>La holding rembourse la dette grâce aux <strong className="font-normal text-slate-900">flux financiers</strong> de l'actif (dividendes/loyers)</span>
              </li>
            </ol>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-8 text-white mb-12">
            <h4 className="text-xl font-light mb-4">Analogie pratique</h4>
            <p className="font-light leading-relaxed opacity-90">
              C'est comme si vous vendiez votre maison à une société que vous possédez, qui emprunte pour vous la racheter. Vous récupérez l'argent cash, mais vous restez propriétaire indirect via votre société. La société rembourse le crédit avec les loyers de la maison.
            </p>
          </div>

          <h3 className="text-2xl font-light text-slate-900 mb-6">Pourquoi réaliser un OBO ?</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-slate-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber-50 flex items-center justify-center mb-4">
                <DollarSign className="text-amber-600" size={24} />
              </div>
              <h4 className="text-lg font-light text-slate-900 mb-3">Liquidité immédiate</h4>
              <p className="text-slate-600 font-light text-sm leading-relaxed">
                Encaisser des liquidités sans perdre le contrôle de votre entreprise. Idéal pour diversifier votre patrimoine ou financer des projets personnels.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber-50 flex items-center justify-center mb-4">
                <TrendingUp className="text-amber-600" size={24} />
              </div>
              <h4 className="text-lg font-light text-slate-900 mb-3">Effet de levier</h4>
              <p className="text-slate-600 font-light text-sm leading-relaxed">
                Utiliser l'endettement pour racheter vos actifs. La dette est remboursée par les flux de l'entreprise, pas par vous personnellement.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber-50 flex items-center justify-center mb-4">
                <Scale className="text-amber-600" size={24} />
              </div>
              <h4 className="text-lg font-light text-slate-900 mb-3">Optimisation fiscale</h4>
              <p className="text-slate-600 font-light text-sm leading-relaxed">
                Taxation au PFU (12,8% + prélèvements sociaux), régime mère-fille pour les dividendes, report d'imposition possible en cas d'apport.
              </p>
            </div>

            <div className="bg-white border border-slate-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber-50 flex items-center justify-center mb-4">
                <Users className="text-amber-600" size={24} />
              </div>
              <h4 className="text-lg font-light text-slate-900 mb-3">Transmission facilitée</h4>
              <p className="text-slate-600 font-light text-sm leading-relaxed">
                Préparer la transmission familiale ou managériale tout en sécurisant votre patrimoine et en organisant la gouvernance future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 1 */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
            L'OBO est-il adapté à votre situation ?
          </h3>
          <p className="text-amber-50 font-light mb-8 text-lg">
            Analysons ensemble la faisabilité et les opportunités d'optimisation
          </p>
          <a 
            href= "https://taap.it/i3gsEr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white hover:bg-slate-50 text-amber-600 px-8 py-4 text-base font-light transition-all hover:shadow-xl hover:scale-105"
          >
            Je veux plus d'informations
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>

      {/* Les variantes d'OBO */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Les différentes formes d'OBO</h2>
            <p className="text-xl font-light text-slate-600 max-w-3xl mx-auto">
              Selon votre stratégie patrimoniale et vos objectifs, plusieurs montages sont possibles
            </p>
          </div>

          {/* Tableau comparatif */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-16">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Type d'OBO</th>
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Actionnariat</th>
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Avantages</th>
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Risques</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-normal text-slate-900">OBO "Pur"</span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">100% du cédant</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Simplicité, contrôle total</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-600">Risque abus de droit élevé</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-normal text-slate-900">OBO "Classique"</span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Cédant + co-investisseurs</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Substance renforcée, sécurité fiscale</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-600">Gouvernance partagée</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-normal text-slate-900">OBO Immobilier</span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Variable</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Amortissement, intérêts déductibles</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-600">Vacance, préemption, droits</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Détails des variantes */}
          <div className="space-y-12">
            {/* OBO Pur */}
            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-light text-slate-900 mb-4">1. OBO "Pur"</h3>
              <p className="text-slate-700 font-light leading-relaxed mb-6">
                La holding de reprise est détenue à 100% par le cédant. C'est la forme la plus simple mais aussi la plus exposée au risque de requalification fiscale.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <h4 className="text-sm font-normal text-green-900 mb-2">✓ Avantages</h4>
                  <ul className="space-y-1 text-sm font-light text-green-800">
                    <li>• Simplicité de mise en œuvre</li>
                    <li>• Contrôle total conservé</li>
                    <li>• Pas de dilution</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                  <h4 className="text-sm font-normal text-red-900 mb-2">✗ Inconvénients</h4>
                  <ul className="space-y-1 text-sm font-light text-red-800">
                    <li>• Risque d'abus de droit élevé</li>
                    <li>• Substance économique à prouver</li>
                    <li>• Financement 100% dette</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* OBO Classique */}
            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-light text-slate-900 mb-4">2. OBO "Classique"</h3>
              <p className="text-slate-700 font-light leading-relaxed mb-6">
                Ouverture du capital de la holding à des co-investisseurs (management, family office, fonds). Cette structure apporte une <strong className="font-normal text-slate-900">substance économique renforcée</strong> et diminue le risque fiscal.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <h4 className="text-sm font-normal text-green-900 mb-2">✓ Avantages</h4>
                  <ul className="space-y-1 text-sm font-light text-green-800">
                    <li>• Sécurité fiscale accrue</li>
                    <li>• Substance économique réelle</li>
                    <li>• Mix dette + fonds propres</li>
                    <li>• Gouvernance professionnelle</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-100 rounded-lg p-4">
                  <h4 className="text-sm font-normal text-orange-900 mb-2">⚠ Points de vigilance</h4>
                  <ul className="space-y-1 text-sm font-light text-orange-800">
                    <li>• Pacte d'associés indispensable</li>
                    <li>• Gouvernance partagée</li>
                    <li>• Alignement d'intérêts à organiser</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* OBO Immobilier */}
            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-light text-slate-900 mb-4">3. OBO Immobilier</h3>
              <p className="text-slate-700 font-light leading-relaxed mb-6">
                Vente d'un bien immobilier professionnel à une société contrôlée (SCI à l'IS ou autre structure). La société finance l'achat par emprunt et rembourse via les loyers.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-4">
                <h4 className="text-lg font-normal text-slate-900 mb-4">Spécificités fiscales</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">Cédant :</strong> Plus-value immobilière à 19% + 17,2% PS (avec abattements durée)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">Société :</strong> Droits d'enregistrement (5% en cas d'apport IS), amortissement hors terrain</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">Intérêts :</strong> Déductibles du résultat fiscal</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="text-amber-600 mr-2 mt-0.5 flex-shrink-0" size={20} />
                  <p className="text-sm font-light text-amber-900">
                    <strong className="font-normal">Points de vigilance :</strong> Risque de vacance locative, droit de préemption de la commune, nécessité de baux solides et d'une gestion rigoureuse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 2 */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=1600&q=80" 
            alt="Bureau" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
            Besoin d'un accompagnement personnalisé ?
          </h3>
          <p className="text-xl text-slate-300 font-light mb-8 leading-relaxed">
            Étude de faisabilité, structuration juridique et optimisation fiscale de votre OBO
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={LIEN_CONTACT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-base font-light transition-all"
            >
              Je veux plus d'informations
            </a>
            <a 
              href="tel:0607963135" 
              className="inline-flex items-center border border-white/20 hover:bg-white/5 text-white px-8 py-4 text-base font-light transition-all"
            >
              06 07 96 31 35
            </a>
          </div>
        </div>
      </section>

      {/* Aspects fiscaux détaillés */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Fiscalité de l'OBO</h2>
            <p className="text-xl font-light text-slate-600 max-w-3xl mx-auto">
              Comprendre les mécanismes fiscaux pour optimiser votre montage
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Cession de titres */}
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl p-8">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Cession de titres</h3>
              
              <div className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-normal text-slate-900 mb-4">Taxation au PFU</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-light">Impôt sur le revenu</span>
                    <span className="text-2xl font-light text-slate-900">12,8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-light">Prélèvements sociaux</span>
                    <span className="text-2xl font-light text-slate-900">17,2%</span>
                  </div>
                  <div className="border-t border-slate-200 pt-3 flex justify-between items-center">
                    <span className="text-slate-900 font-normal">Total</span>
                    <span className="text-3xl font-light text-amber-600">30%</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <h4 className="text-sm font-normal text-green-900 mb-2">✓ Abattements possibles</h4>
                  <ul className="space-y-2 text-sm font-light text-green-800">
                    <li>• Abattement pour départ à la retraite</li>
                    <li>• Dispositifs PME (151 septies, 238 quindecies)</li>
                    <li>• Pacte Dutreil (transmission)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <h4 className="text-sm font-normal text-blue-900 mb-2">💡 Report d'imposition</h4>
                  <p className="text-sm font-light text-blue-800">
                    En cas d'<strong className="font-normal">apport de titres</strong> à la holding (et non cession directe), possibilité de report d'imposition sous conditions (CGI 150-0 B ter).
                  </p>
                </div>
              </div>
            </div>

            {/* Régime mère-fille */}
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl p-8">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Régime mère-fille</h3>
              
              <p className="text-slate-700 font-light leading-relaxed mb-6">
                Une fois l'OBO réalisé, la holding détient les titres de votre société d'exploitation. Les <strong className="font-normal text-slate-900">dividendes</strong> remontés bénéficient du régime mère-fille.
              </p>

              <div className="bg-white border border-slate-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-normal text-slate-900 mb-4">Conditions</h4>
                <ul className="space-y-2 text-sm font-light text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Participation ≥ 5% du capital</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Détention pendant 2 ans minimum</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>Sociétés soumises à l'IS</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-lg p-6">
                <h4 className="text-lg font-normal text-green-900 mb-3">Avantage fiscal</h4>
                <p className="text-sm font-light text-green-800 mb-4">
                  Les dividendes sont exonérés d'impôt sur les sociétés, à l'exception d'une quote-part de frais et charges de <strong className="font-normal">5%</strong>.
                </p>
                <div className="bg-white rounded p-3 text-sm">
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700 font-light">Dividende reçu :</span>
                    <span className="font-normal text-slate-900">100 000 €</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700 font-light">Quote-part 5% :</span>
                    <span className="font-normal text-slate-900">5 000 €</span>
                  </div>
                  <div className="flex justify-between border-t pt-1 mt-1">
                    <span className="text-slate-700 font-light">IS sur quote-part (25%) :</span>
                    <span className="font-normal text-amber-600">1 250 €</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IFI */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 text-white">
            <div className="flex items-start mb-6">
              <AlertTriangle className="text-amber-400 mr-4 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-light mb-3">Impact sur l'IFI</h3>
                <p className="font-light leading-relaxed opacity-90 mb-4">
                  Point de vigilance majeur : la <strong className="font-normal">dette OBO contractée par la holding n'est généralement pas déductible</strong> de la valeur des parts pour le calcul de l'IFI.
                </p>
                <p className="font-light leading-relaxed opacity-90">
                  Résultat : votre base taxable à l'IFI peut <strong className="font-normal">augmenter</strong> après l'opération, malgré l'endettement de la holding. Une simulation patrimoniale préalable est indispensable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risques et dangers */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Risques et points de vigilance</h2>
            <p className="text-xl font-light text-slate-600 max-w-3xl mx-auto">
              L'OBO est une opération puissante mais complexe qui nécessite une structuration rigoureuse
            </p>
          </div>

          {/* Tableau des risques */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Risque</th>
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Manifestation</th>
                    <th className="px-6 py-4 text-left text-sm font-normal text-slate-900">Parade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-normal bg-red-50 text-red-700">
                        Abus de droit
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Montage sans substance, but uniquement fiscal</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Substance économique, business plan, co-investisseurs</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-normal bg-orange-50 text-orange-700">
                        Endettement
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Flux insuffisants pour rembourser</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Ratios prudents (DSCR), covenants, réserves</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-normal bg-amber-50 text-amber-700">
                        Valorisation
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Prix de cession contesté par l'administration</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Expertise indépendante, méthodes reconnues</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-normal bg-purple-50 text-purple-700">
                        IFI défavorable
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Base taxable augmentée</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Simulation patrimoniale préalable</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-normal bg-blue-50 text-blue-700">
                        Gouvernance
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Blocages, conflits entre associés</td>
                    <td className="px-6 py-4 text-sm font-light text-slate-700">Pacte d'associés solide, clauses de sortie</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Focus abus de droit */}
          <div className="bg-white border border-slate-100 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-light text-slate-900 mb-6">Focus : L'abus de droit (LPF art. L64 A)</h3>
            
            <p className="text-slate-700 font-light leading-relaxed mb-6">
              Le risque principal d'un OBO est la <strong className="font-normal text-slate-900">requalification fiscale</strong> pour abus de droit. L'administration peut remettre en cause l'opération si elle démontre qu'elle a un but <strong className="font-normal text-slate-900">principalement fiscal</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border border-red-100 rounded-lg p-6">
                <h4 className="text-lg font-normal text-red-900 mb-4">🚫 Signaux d'alerte</h4>
                <ul className="space-y-2 text-sm font-light text-red-800">
                  <li>• OBO "pur" sans co-investisseurs</li>
                  <li>• Absence de substance économique</li>
                  <li>• Prix de cession non justifié</li>
                  <li>• Absence de business plan</li>
                  <li>• Holding "coquille vide"</li>
                  <li>• Revente immédiate des titres reçus</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-lg p-6">
                <h4 className="text-lg font-normal text-green-900 mb-4">✓ Sécurisation</h4>
                <ul className="space-y-2 text-sm font-light text-green-800">
                  <li>• Ouverture du capital (OBO classique)</li>
                  <li>• Substance économique réelle</li>
                  <li>• Valorisation par expert indépendant</li>
                  <li>• Business plan sur 5-7 ans</li>
                  <li>• Moyens propres à la holding</li>
                  <li>• Intérêt économique durable</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h4 className="text-lg font-normal text-slate-900 mb-3">Jurisprudence de référence</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">CE 11 janvier 2011 :</strong> La création d'une holding de rachat n'est pas abusive si elle présente un intérêt économique, juridique et financier durable.</span>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="text-slate-700 font-light"><strong className="font-normal text-slate-900">CE 27 janvier 2011 n°320313 :</strong> Vigilance particulière sur la valorisation et la substance de l'opération.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist de sécurisation */}
          <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-light mb-6">Checklist anti-abus</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                <span className="font-light">Business plan détaillé et réaliste</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                <span className="font-light">Valorisation par expert indépendant</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                <span className="font-light">Holding avec moyens propres</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                <span className="font-light">Co-investisseurs si possible</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                <span className="font-light">Documentation complète du montage</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-2 mt-0.5 flex-shrink-0" size={20} />
                <span className="font-light">Objectifs extra-fiscaux identifiés</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cas pratique */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Exemple chiffré</h2>
            <p className="text-xl font-light text-slate-600">
              Illustration d'un OBO sur titres avec les flux financiers
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-light text-slate-900 mb-6">Hypothèses</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">Valeur des titres</span>
                  <span className="font-normal text-slate-900">2 000 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">Prix d'acquisition initial</span>
                  <span className="font-normal text-slate-900">200 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">Plus-value</span>
                  <span className="font-normal text-amber-600">1 800 000 €</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">Emprunt holding</span>
                  <span className="font-normal text-slate-900">1 600 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">Apport fonds propres</span>
                  <span className="font-normal text-slate-900">400 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">Dividendes annuels</span>
                  <span className="font-normal text-slate-900">250 000 €</span>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-light text-slate-900 mb-4">Fiscalité pour le cédant</h4>
            <div className="bg-white border border-slate-200 rounded-lg p-6 mb-8">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">Plus-value taxable</span>
                  <span className="font-normal text-slate-900">1 800 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">PFU 12,8%</span>
                  <span className="font-normal text-slate-900">230 400 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">Prélèvements sociaux 17,2%</span>
                  <span className="font-normal text-slate-900">309 600 €</span>
                </div>
                <div className="border-t border-slate-200 pt-3 flex justify-between">
                  <span className="text-slate-900 font-normal">Total impôts</span>
                  <span className="text-2xl font-light text-red-600">540 000 €</span>
                </div>
                <div className="border-t border-slate-200 pt-3 flex justify-between">
                  <span className="text-slate-900 font-normal">Net encaissé</span>
                  <span className="text-2xl font-light text-green-600">1 460 000 €</span>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-light text-slate-900 mb-4">Service de la dette (holding)</h4>
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">Dividendes annuels reçus</span>
                  <span className="font-normal text-slate-900">250 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">Quote-part 5% taxable</span>
                  <span className="font-normal text-slate-900">12 500 €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700 font-light">IS sur quote-part (25%)</span>
                  <span className="font-normal text-red-600">-3 125 €</span>
                </div>
                <div className="border-t border-slate-200 pt-3 flex justify-between">
                  <span className="text-slate-900 font-normal">Disponible pour la dette</span>
                  <span className="text-xl font-light text-green-600">≈ 246 875 €</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-light mt-4">
                *Hors intérêts d'emprunt. La holding peut ainsi rembourser environ 250k€/an de capital + intérêts.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="text-base font-normal text-blue-900 mb-2">Bilan de l'opération</h4>
                <p className="text-sm font-light text-blue-800">
                  Le cédant a encaissé <strong className="font-normal">1 460 000 € nets</strong> tout en conservant le contrôle indirect via la holding. La dette sera remboursée en 6-7 ans environ grâce aux dividendes, sans apport de trésorerie personnelle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50/30 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Questions fréquentes</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-md transition-all">
              <h3 className="text-lg font-normal text-slate-900 mb-3">L'OBO est-il risqué fiscalement ?</h3>
              <p className="text-slate-700 font-light leading-relaxed">
                L'OBO présente un risque de requalification si le montage n'a pas de substance économique. Pour sécuriser l'opération : ouvrez le capital à des co-investisseurs, établissez un business plan solide, valorisez par expert indépendant et documentez vos objectifs extra-fiscaux.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-md transition-all">
              <h3 className="text-lg font-normal text-slate-900 mb-3">Quelle est la différence entre OBO pur et classique ?</h3>
              <p className="text-slate-700 font-light leading-relaxed">
                L'OBO "pur" est détenu à 100% par le cédant (plus simple mais risqué). L'OBO "classique" associe le cédant et des co-investisseurs (management, fonds), ce qui apporte substance et sécurité fiscale au prix d'une gouvernance partagée.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-md transition-all">
              <h3 className="text-lg font-normal text-slate-900 mb-3">Comment fonctionne le remboursement de la dette ?</h3>
              <p className="text-slate-700 font-light leading-relaxed">
                La holding rembourse via les dividendes remontés de la société d'exploitation (régime mère-fille avec frottement limité à 1,25%). Pour l'immobilier, ce sont les loyers qui assurent le service de la dette.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-md transition-all">
              <h3 className="text-lg font-normal text-slate-900 mb-3">Quel est l'impact sur l'IFI ?</h3>
              <p className="text-slate-700 font-light leading-relaxed">
                Point critique : la dette OBO n'est généralement pas déductible de la valeur des parts pour le calcul de l'IFI. Votre base taxable peut donc augmenter. Une simulation patrimoniale avant l'opération est indispensable.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-md transition-all">
              <h3 className="text-lg font-normal text-slate-900 mb-3">Puis-je bénéficier d'un report d'imposition ?</h3>
              <p className="text-slate-700 font-light leading-relaxed">
                Oui, en réalisant un apport de titres (et non une cession directe) à votre holding contrôlée. Sous conditions (CGI 150-0 B ter), vous pouvez reporter l'imposition jusqu'à la cession ultérieure ou un événement déclencheur.
              </p>
            </div>

            <div className="bg-white border border-slate-100 rounded-xl p-8 hover:shadow-md transition-all">
              <h3 className="text-lg font-normal text-slate-900 mb-3">Combien de temps dure un montage OBO ?</h3>
              <p className="text-slate-700 font-light leading-relaxed">
                De l'étude de faisabilité au closing : 3 à 6 mois en moyenne (diagnostic, valorisation, structuration juridique, négociation bancaire, rédaction des actes). Le remboursement de la dette s'étale ensuite sur 5 à 10 ans selon les flux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Prêt à structurer votre OBO ?
          </h2>
          <p className="text-xl text-slate-300 font-light mb-12 leading-relaxed">
            Accompagnement complet : faisabilité, structuration juridique, optimisation fiscale et sécurisation du montage
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href={LIEN_CONTACT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-base font-light transition-all hover:shadow-xl"
            >
              Je veux plus d'informations
            </a>
            <a 
              href="tel:0607963135" 
              className="inline-flex items-center border border-white/20 text-white px-8 py-4 text-base font-light hover:bg-white/10 transition-all"
            >
              06 07 96 31 35
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-slate-400 font-light">
            <div className="flex items-center space-x-2">
              <CheckCircle size={18} className="text-amber-500" />
              <span>Expert certifié</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={18} className="text-amber-500" />
              <span>Accompagnement personnalisé</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={18} className="text-amber-500" />
              <span>Sécurisation fiscale</span>
            </div>
          </div>
        </div>
      </section>

      <Footer currentPage="gerer" />
    </div>
  )
}