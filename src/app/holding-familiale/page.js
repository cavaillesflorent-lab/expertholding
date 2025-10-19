'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Shield, TrendingUp, Users, Building2, AlertTriangle, CheckCircle2, XCircle, ArrowRight, FileCheck } from 'lucide-react'

export default function HoldingFamilialePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="creer" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Holding Familiale : Guide Complet 2025
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 mb-8">
            Centraliser, protéger et transmettre votre patrimoine familial
          </p>
          <p className="text-lg text-slate-200 mb-8 max-w-3xl mx-auto">
            Un outil juridique, fiscal et patrimonial puissant pour structurer vos participations, 
            optimiser votre fiscalité et organiser la transmission dans un cadre maîtrisé.
          </p>
          <Link 
            href="https://taap.it/i3gsEr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition"
          >
            Être accompagné dans mon projet
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-amber-200">
              <div className="text-4xl font-bold text-amber-600 mb-2">95%</div>
              <p className="text-slate-700 font-medium">Exonération régime mère-fille</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-amber-200">
              <div className="text-4xl font-bold text-amber-600 mb-2">75%</div>
              <p className="text-slate-700 font-medium">Abattement Pacte Dutreil</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-amber-200">
              <div className="text-4xl font-bold text-amber-600 mb-2">Décote</div>
              <p className="text-slate-700 font-medium">15-30% sur titres non cotés</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-amber-200">
              <div className="text-4xl font-bold text-amber-600 mb-2">IFI</div>
              <p className="text-slate-700 font-medium">Optimisation via démembrement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Définition */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Qu'est-ce qu'une holding familiale ?</h2>
          
          <div className="prose prose-lg max-w-none text-slate-700 mb-10">
            <p className="text-lg leading-relaxed mb-6">
              Une holding familiale est une société dont l'objet principal est de <strong>détenir et gérer les participations</strong> 
              dans d'autres sociétés, généralement détenues par les membres d'une même famille. Elle centralise le patrimoine 
              professionnel et/ou financier familial au sein d'une structure unique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-amber-50 rounded-lg border-2 border-amber-300">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <Building2 className="w-6 h-6 text-amber-600 mr-2" />
                Holding Opérationnelle
              </h3>
              <p className="text-slate-700 mb-4">
                Participe activement à la gestion et au contrôle des filiales (services administratifs, financiers, juridiques).
              </p>
              <div className="text-sm text-slate-600">
                <strong>Avantage :</strong> Bénéficie de régimes fiscaux favorables (intégration fiscale, exonération IFI sous conditions).
              </div>
            </div>

            <div className="p-6 bg-slate-100 rounded-lg border-2 border-slate-300">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-slate-600 mr-2" />
                Holding Pure (Passive)
              </h3>
              <p className="text-slate-700 mb-4">
                Se contente de détenir des participations sans intervention opérationnelle active.
              </p>
              <div className="text-sm text-slate-600">
                <strong>Limite :</strong> Moins d'avantages fiscaux, notamment pour l'IFI et certains régimes de transmission.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Les avantages de la holding familiale</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Avantages fiscaux */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-slate-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Avantages fiscaux</h3>
              </div>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Régime mère-fille :</strong> Exonération de 95% des dividendes remontés (quote-part de frais et charges de 5%)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Intégration fiscale :</strong> Compensation des résultats entre sociétés du groupe</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Plus-values :</strong> Exonération sous conditions (quote-part 12%)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>IFI :</strong> Exonération totale si holding opérationnelle + Pacte Dutreil</span>
                </li>
              </ul>
            </div>

            {/* Avantages patrimoniaux */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-slate-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Avantages patrimoniaux</h3>
              </div>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Centralisation :</strong> Vision globale du patrimoine familial</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Démembrement :</strong> Optimisation de la transmission (nue-propriété/usufruit)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Financement :</strong> Effet de levier pour acquérir de nouvelles participations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Protection :</strong> Séparation des actifs professionnels et personnels</span>
                </li>
              </ul>
            </div>

            {/* Avantages juridiques */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-slate-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <FileCheck className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Avantages juridiques</h3>
              </div>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Contrôle :</strong> Maintien du pouvoir décisionnel via clauses statutaires</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Pactes d'actionnaires :</strong> Encadrement des cessions et entrées</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Continuité :</strong> Pérennité au-delà des aléas individuels</span>
                </li>
              </ul>
            </div>

            {/* Avantages transmission */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-slate-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Avantages transmission</h3>
              </div>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Abattement Dutreil :</strong> 75% d'exonération sur droits de succession/donation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Transmission progressive :</strong> Donations échelonnées sans perdre le contrôle</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Décote :</strong> 15 à 30% sur titres non cotés (minoritaire/illiquidité)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Leviers fiscaux */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Les 4 leviers fiscaux majeurs</h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Régime mère-fille (CGI art. 145 et 216)</h3>
              <p className="text-slate-700 mb-4">
                Les dividendes remontés des filiales vers la holding sont exonérés d'impôt à <strong>95%</strong>. 
                Seule une quote-part de frais et charges de 5% est taxable à l'IS (soit 1,25% effectif au taux de 25%).
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-slate-600 mb-2"><strong>Conditions :</strong></p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Participation ≥ 5% du capital de la filiale</li>
                  <li>• Détention minimale de 2 ans</li>
                  <li>• Filiale soumise à l'IS</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Intégration fiscale (CGI art. 223 A)</h3>
              <p className="text-slate-700 mb-4">
                Permet de <strong>compenser les résultats</strong> (bénéfices/déficits) entre la holding et ses filiales. 
                Une seule déclaration consolidée est déposée au niveau du groupe.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-slate-600 mb-2"><strong>Conditions :</strong></p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Détention ≥ 95% du capital des filiales</li>
                  <li>• Toutes les sociétés soumises à l'IS en France</li>
                  <li>• Option sur 5 ans renouvelable</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Apport-cession (CGI art. 150-0 B ter)</h3>
              <p className="text-slate-700 mb-4">
                Permet de <strong>reporter l'imposition</strong> de la plus-value lors de l'apport de titres à une holding, 
                sous réserve de réinvestir au moins 60% du produit de cession dans les 2 ans.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-slate-600">
                  <strong>Avantage :</strong> Report d'imposition jusqu'à la cession des titres de la holding ou événement de sortie.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Pacte Dutreil (CGI art. 787 B et C)</h3>
              <p className="text-slate-700 mb-4">
                Offre un <strong>abattement de 75%</strong> sur la valeur des titres transmis par donation ou succession, 
                permettant une transmission optimisée du patrimoine familial.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-slate-600 mb-2"><strong>Conditions :</strong></p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Engagement collectif de conservation de 2 ans minimum</li>
                  <li>• Engagement individuel de 4 ans après transmission</li>
                  <li>• Fonction de direction pendant 3 ans (donataire/héritier)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inconvénients */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Les inconvénients et limites</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md border border-slate-200">
              <thead>
                <tr className="bg-slate-200">
                  <th className="px-6 py-4 text-left text-slate-900 font-bold">Inconvénient</th>
                  <th className="px-6 py-4 text-left text-slate-900 font-bold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Coût de création et gestion</td>
                  <td className="px-6 py-4 text-slate-700">Frais de constitution (2 000-5 000€), comptabilité annuelle, commissaire aux comptes si seuils dépassés</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Complexité juridique et fiscale</td>
                  <td className="px-6 py-4 text-slate-700">Nécessite un accompagnement expert permanent, veille réglementaire</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Double imposition potentielle</td>
                  <td className="px-6 py-4 text-slate-700">IS au niveau holding + flat tax (30%) sur dividendes versés aux associés personnes physiques</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Risque de tensions familiales</td>
                  <td className="px-6 py-4 text-slate-700">Désaccords sur gestion, répartition dividendes, stratégie. Nécessite gouvernance claire</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Pas adaptée aux petits patrimoines</td>
                  <td className="px-6 py-4 text-slate-700">Rentable à partir de 500k€-1M€ de participations. En-dessous, coûts {`>`} gains fiscaux</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6 Pièges classiques */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Les 6 pièges classiques à éviter</h2>
          
          <div className="space-y-6">
            {[
              {
                titre: "Holding pure déguisée en opérationnelle",
                consequence: "Remise en cause des avantages fiscaux (IFI, Dutreil) par l'administration",
                parade: "Formaliser et facturer les prestations réelles (convention, bulletins de salaire si dirigeants)"
              },
              {
                titre: "Non-respect des engagements de conservation (Dutreil)",
                consequence: "Perte de l'abattement de 75% + intérêts de retard",
                parade: "Suivi rigoureux des délais (2+4 ans), fonction dirigeante effective 3 ans"
              },
              {
                titre: "Absence de pacte d'actionnaires",
                consequence: "Conflits familiaux, paralysie décisionnelle, cessions non maîtrisées",
                parade: "Rédiger un pacte détaillé : clauses d'agrément, préemption, sortie, arbitrage"
              },
              {
                titre: "Mauvaise répartition capital/usufruit",
                consequence: "Tensions sur distribution dividendes, perte de contrôle prématurée",
                parade: "Démembrement réfléchi avec clauses de quasi-usufruit si nécessaire"
              },
              {
                titre: "Holding sous-capitalisée",
                consequence: "Endettement excessif, incapacité à financer nouveaux projets, fragilité",
                parade: "Apports en capital suffisants, recours compte-courant avec modération"
              },
              {
                titre: "Oubli de la clause de variabilité du capital",
                consequence: "Formalisme lourd et coûteux à chaque entrée/sortie d'associé",
                parade: "Prévoir cette clause dans les statuts initiaux (SAS recommandée)"
              }
            ].map((piege, index) => (
              <div key={index} className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-slate-900">{piege.titre}</h3>
                </div>
                <div className="ml-9">
                  <p className="text-slate-700 mb-3">
                    <strong className="text-red-700">Conséquence :</strong> {piege.consequence}
                  </p>
                  <p className="text-slate-700">
                    <strong className="text-green-700">Parade :</strong> {piege.parade}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Intérêts pour les familles */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Les 5 intérêts majeurs pour les familles</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">1. Pérenniser l'entreprise familiale</h3>
              <p className="text-slate-700">
                La holding permet de <strong>maintenir la cohésion familiale</strong> autour d'un projet commun, 
                préserver le contrôle à long terme et assurer la continuité de gestion au-delà des générations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">2. Organiser une transmission en souplesse</h3>
              <p className="text-slate-700">
                Transmission progressive par donations échelonnées tout en <strong>conservant le contrôle</strong> 
                (usufruit, droit de vote double). Optimisation fiscale via abattements renouvelables tous les 15 ans 
                et Pacte Dutreil.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">3. Protéger le patrimoine professionnel</h3>
              <p className="text-slate-700">
                Séparation des actifs professionnels (dans la holding) et personnels, protection contre les créanciers 
                de l'un des membres, limitation de la responsabilité au montant des apports.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">4. Optimiser l'IFI</h3>
              <p className="text-slate-700">
                <strong>Exonération totale</strong> si holding opérationnelle de société(s) opérationnelle(s) + Pacte Dutreil. 
                Application des décotes minoritaire et illiquidité (15-30%) sur les titres non cotés.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-amber-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">5. Faciliter les opérations de croissance externe</h3>
              <p className="text-slate-700">
                La holding peut emprunter pour acquérir de nouvelles participations (<strong>effet de levier</strong>), 
                mutualiser la trésorerie du groupe, réinvestir les dividendes remontés sans fiscalité intermédiaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist 10 points */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Checklist : 10 points à vérifier avant de constituer votre holding familiale</h2>
          
          <div className="bg-gradient-to-br from-slate-50 to-amber-50 p-8 rounded-lg border-2 border-amber-300 shadow-lg">
            <div className="space-y-4">
              {[
                "Patrimoine suffisant (≥ 500k€-1M€) pour rentabiliser la structure",
                "Objectifs clairement définis : transmission, optimisation fiscale, financement",
                "Accord familial sur la gouvernance et la stratégie",
                "Choix du statut juridique adapté (SAS recommandée pour la souplesse)",
                "Rédaction d'un pacte d'actionnaires solide",
                "Détermination du caractère animateur ou passif (impact fiscal majeur)",
                "Anticipation du financement initial et du besoin en fonds propres",
                "Accompagnement par des experts (avocat fiscaliste, expert-comptable, notaire)",
                "Planification de la transmission (donations, démembrement, Dutreil)",
                "Mise en place d'une comptabilité et d'un reporting rigoureux"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-slate-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Créez votre holding familiale avec un accompagnement expert
          </h2>
          <p className="text-xl text-slate-200 mb-4">
            Chaque projet de holding familiale est unique et répond à des besoins spécifiques.
          </p>
          <p className="text-lg text-slate-300 mb-8">
            Notre cabinet et son réseau d'experts fiscaux vous accompagnent pour maintenir une trajectoire 
            sécurisée dans un environnement juridique en perpétuelle évolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link 
              href="https://taap.it/i3gsEr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition shadow-lg"
            >
              Prendre rendez-vous
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href="tel:0607963135"
              className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition shadow-lg"
            >
              06 07 96 31 35
            </a>
          </div>
          <p className="text-sm text-slate-400">
            Email : <a href="mailto:florent@occitea-ip.fr" className="text-amber-400 hover:text-amber-300 underline">florent@occitea-ip.fr</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}