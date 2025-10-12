'use client'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle2, AlertTriangle, Shield, Clock, Heart, Headphones } from 'lucide-react'

export default function ApportCessionOptimisationLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header minimaliste */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">EH</span>
            </div>
            <span className="font-bold text-xl text-slate-900">ExpertHolding.fr</span>
          </Link>
          <a 
            href="tel:0607963135"
            className="flex items-center space-x-2 px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition"
          >
            <Phone className="w-5 h-5" />
            <span>06 07 96 31 35</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Apport-Cession 150-0 B ter :<br />
              Vous avez peur de l'abus de droit ?
            </h1>
            <p className="text-xl md:text-2xl text-amber-200 mb-8">
              C'est normal. Ce dispositif peut vous faire économiser 200-500k€... ou vous coûter un redressement fiscal si c'est mal fait. Je suis là pour sécuriser votre opération de A à Z.
            </p>
          </div>

          {/* Formulaire Hero */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">
              On analyse votre situation ensemble (45 min)
            </h2>
            <p className="text-center text-slate-600 mb-6 text-sm">
              Vous me racontez votre projet de cession. Je vous dis si l'apport-cession est adapté à votre cas, comment le sécuriser juridiquement, et combien ça coûte.
            </p>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Prénom et Nom *"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-900"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email professionnel *"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-900"
                  required
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Téléphone *"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-900"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-amber-500 text-white font-bold py-4 rounded-lg hover:bg-amber-600 transition flex items-center justify-center"
              >
                Vérifier mon éligibilité
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
            <p className="text-sm text-slate-600 text-center mt-4">
              ✓ Analyse juridique • ✓ Sécurisation anti-abus • ✓ Devis transparent
            </p>
          </div>

          {/* Éléments de réassurance */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="text-amber-200">
              <div className="text-3xl font-bold mb-2">0</div>
              <div>redressement fiscal en 15 ans</div>
            </div>
            <div className="text-amber-200">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div>opérations sécurisées</div>
            </div>
            <div className="text-amber-200">
              <div className="text-3xl font-bold mb-2">1-30M€</div>
              <div>montants de cessions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo : Dirigeant inquiet face à des documents fiscaux */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-200 rounded-lg overflow-hidden" style={{height: '400px'}}>
            <div className="w-full h-full flex items-center justify-center text-slate-500">
              {/* REMPLACER PAR : Dirigeant face à une pile de documents fiscaux */}
              <div className="text-center">
                <p className="text-sm font-mono">[PHOTO 1]</p>
                <p className="text-xs mt-2">Dirigeant face à des documents fiscaux complexes</p>
                <p className="text-xs">Évoque la complexité, l'inquiétude face au fisc</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que vous ressentez */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Ce que vous ressentez probablement
          </h2>
          
          <div className="space-y-8 mb-12">
            <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-4" />
                <h3 className="text-xl font-bold text-slate-900">Vous avez entendu parler de l'apport-cession... et ça vous fait peur</h3>
              </div>
              <p className="text-slate-700">
                On vous a dit que ça peut faire économiser 30% d'impôts. Super. Mais on vous a aussi parlé d'"abus de droit", 
                de "redressement fiscal", de "majorations"... <strong>Vous ne voulez surtout pas vous faire rattraper par le fisc 3 ans après.</strong>
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-slate-400">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-slate-600 mr-4" />
                <h3 className="text-xl font-bold text-slate-900">Vous êtes perdu dans les conditions</h3>
              </div>
              <p className="text-slate-700">
                60% de réinvestissement ? Dans quoi exactement ? Sous 2 ans ? Mais si je trouve pas d'opportunité conforme ? 
                Conservation 5 ans ? De quoi, exactement ? <strong>Personne ne vous explique clairement, en français, ce que vous devez faire.</strong>
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-amber-500">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-amber-600 mr-4" />
                <h3 className="text-xl font-bold text-slate-900">Vous voulez juste sécuriser l'argent de votre vie</h3>
              </div>
              <p className="text-slate-700">
                Cette vente, c'est 20-30 ans de travail. Vous ne voulez pas perdre 300-500k€ d'impôts bêtement... 
                mais vous ne voulez PAS NON PLUS prendre de risque avec le fisc. <strong>Vous cherchez quelqu'un qui sait faire ça les yeux fermés.</strong>
              </p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <p className="text-lg text-slate-800 text-center">
              <strong className="text-green-700">Bonne nouvelle :</strong> L'apport-cession, c'est mon quotidien depuis 15 ans. 
              Je connais TOUS les pièges. Je sais exactement comment sécuriser juridiquement chaque opération.<br /><br />
              <strong>Et surtout : 0 redressement fiscal sur tous mes dossiers.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Photo : Avocat rassurant un client */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-200 rounded-lg overflow-hidden" style={{height: '400px'}}>
            <div className="w-full h-full flex items-center justify-center text-slate-500">
              {/* REMPLACER PAR : Conseiller rassurant expliquant à un dirigeant */}
              <div className="text-center">
                <p className="text-sm font-mono">[PHOTO 2]</p>
                <p className="text-xs mt-2">Conseiller expliquant calmement à un dirigeant</p>
                <p className="text-xs">Évoque la pédagogie, la réassurance, l'expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L'essentiel du 150-0 B ter */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            L'apport-cession en 3 minutes chrono
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Pas de jargon. Juste ce que vous devez comprendre.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Sans apport-cession (classique)</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mr-4">1</div>
                  <div className="text-slate-700">Vous vendez vos parts directement</div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mr-4">2</div>
                  <div className="text-slate-700">Vous payez 30% d'impôts IMMÉDIATEMENT sur la plus-value</div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mr-4">3</div>
                  <div className="text-slate-700">Exemple : 1M€ de plus-value = 300k€ partent au fisc direct</div>
                </div>
              </div>

              <div className="mt-8 bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <p className="font-bold text-red-700 mb-2">Vous perdez :</p>
                <p className="text-3xl font-bold text-red-600">300 000 €</p>
                <p className="text-sm text-slate-600 mt-2">que vous ne pourrez jamais réinvestir</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Avec apport-cession 150-0 B ter</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mr-4">1</div>
                  <div className="text-slate-700">Vous apportez d'abord vos parts à VOTRE holding</div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mr-4">2</div>
                  <div className="text-slate-700">Votre holding vend à l'acquéreur → pas d'impôt IMMÉDIAT</div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mr-4">3</div>
                  <div className="text-slate-700">Vous réinvestissez 60% minimum dans les 2 ans dans des actifs éligibles</div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mr-4">4</div>
                  <div className="text-slate-700">Vous conservez ces actifs 5 ans minimum</div>
                </div>
              </div>

              <div className="mt-8 bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <p className="font-bold text-green-700 mb-2">Vous gardez :</p>
                <p className="text-3xl font-bold text-green-600">300 000 €</p>
                <p className="text-sm text-slate-600 mt-2">disponibles pour réinvestir et faire travailler votre argent</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-100 border-2 border-amber-400 p-6 rounded-lg">
            <p className="text-center text-slate-800">
              <strong>En clair :</strong> Vous ne payez pas l'impôt maintenant. Vous le reportez. 
              Et pendant ce temps, ces 300k€ travaillent pour vous au lieu de dormir chez Bercy.
            </p>
          </div>
        </div>
      </section>

      {/* Les 4 pièges mortels */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Les 4 pièges qui font planter l'apport-cession
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Et comment je les évite systématiquement pour mes clients
          </p>
          
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-bold text-slate-900">PIÈGE 1 : Réinvestir dans du patrimoine perso (SCI passive, résidence secondaire...)</h3>
              </div>
              <div className="ml-9">
                <p className="text-slate-700 mb-3">
                  <strong className="text-red-700">Pourquoi c'est dangereux :</strong> Le fisc considère que vous utilisez le dispositif 
                  pour gérer votre patrimoine PERSONNEL, pas pour faire une vraie activité économique. = Abus de droit = Redressement.
                </p>
                <p className="text-slate-700">
                  <strong className="text-green-700">Comment je sécurise :</strong> Je vous oriente vers des actifs OPÉRATIONNELS : 
                  FCPR/FPCI agréés AMF, participations dans des PME, sociétés avec activité économique réelle. 
                  Mes avocats fiscalistes valident CHAQUE investissement AVANT que vous signiez.
                </p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-bold text-slate-900">PIÈGE 2 : Racheter vos propres actifs ou réinvestir chez l'acquéreur</h3>
              </div>
              <div className="ml-9">
                <p className="text-slate-700 mb-3">
                  <strong className="text-red-700">Pourquoi c'est dangereux :</strong> Montage circulaire = vous vous vendez à vous-même 
                  = le fisc dit "vous vous êtes moqué de nous" = Redressement + majoration 40-80%.
                </p>
                <p className="text-slate-700">
                  <strong className="text-green-700">Comment je sécurise :</strong> On investit dans des sociétés TIERCES, sans aucun lien 
                  avec vous ni avec l'acquéreur. Je documente tout : qui, quoi, pourquoi, justification économique claire.
                </p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-bold text-slate-900">PIÈGE 3 : Mettre l'argent en compte-courant sans projet économique</h3>
              </div>
              <div className="ml-9">
                <p className="text-slate-700 mb-3">
                  <strong className="text-red-700">Pourquoi c'est dangereux :</strong> Le fisc veut voir un VRAI réinvestissement économique, 
                  pas juste de l'argent qui dort sur un compte avec écrit "j'investirai un jour peut-être".
                </p>
                <p className="text-slate-700">
                  <strong className="text-green-700">Comment je sécurise :</strong> Si on utilise le compte-courant, c'est TEMPORAIRE 
                  et avec un plan d'investissement ÉCRIT et DATÉ. Business plan, cibles identifiées, calendrier précis. Tout documenté.
                </p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-bold text-slate-900">PIÈGE 4 : Pas respecter les délais et pourcentages (60% sous 2 ans, conservation 5 ans)</h3>
              </div>
              <div className="ml-9">
                <p className="text-slate-700 mb-3">
                  <strong className="text-red-700">Pourquoi c'est dangereux :</strong> Si vous êtes à 59% ou si vous vendez au bout de 4 ans et 11 mois, 
                  vous perdez TOUT le bénéfice du report + intérêts de retard + majoration.
                </p>
                <p className="text-slate-700">
                  <strong className="text-green-700">Comment je sécurise :</strong> Je mets en place un tableau de bord avec alertes. 
                  Vous recevez des rappels automatiques. Je valide CHAQUE sortie d'investissement AVANT qu'elle soit faite. 
                  Vous ne prenez aucune décision sans mon feu vert.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-green-50 border-2 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Ma méthode de sécurisation blindée</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">📋</div>
                <h4 className="font-bold text-slate-900 mb-2">Documentation exhaustive</h4>
                <p className="text-sm text-slate-700">Business plan, justification économique, PV d'assemblée, tout tracé</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⚖️</div>
                <h4 className="font-bold text-slate-900 mb-2">Avocats fiscalistes experts</h4>
                <p className="text-sm text-slate-700">Validation juridique avant CHAQUE décision, rescrit fiscal si besoin</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">✅</div>
                <h4 className="font-bold text-slate-900 mb-2">Suivi sur 5 ans</h4>
                <p className="text-sm text-slate-700">Alertes automatiques, reporting fiscal, vous ne loupez aucune échéance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo : Document validé avec tampon */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-200 rounded-lg overflow-hidden" style={{height: '400px'}}>
            <div className="w-full h-full flex items-center justify-center text-slate-500">
              {/* REMPLACER PAR : Document avec tampon "Approuvé" ou signature */}
              <div className="text-center">
                <p className="text-sm font-mono">[PHOTO 3]</p>
                <p className="text-xs mt-2">Document juridique validé avec signatures</p>
                <p className="text-xs">Évoque la sécurisation, la conformité légale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment je vous accompagne */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Comment je vous accompagne concrètement
          </h2>
          
          <div className="space-y-8">
            <div className="bg-amber-50 p-8 rounded-lg border-l-4 border-amber-500">
              <div className="flex items-start">
                <div className="bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 mr-6">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Premier RDV : Je vérifie si vous êtes éligible (45 min)</h3>
                  <p className="text-slate-700 mb-3">
                    Vous me racontez votre projet de cession. Je regarde si l'apport-cession est adapté à VOTRE cas 
                    (montant, timing, type d'acheteur, vos objectifs...).
                  </p>
                  <p className="text-slate-700">
                    <strong>À la fin :</strong> Je vous dis OUI c'est faisable (et comment) ou NON ce n'est pas adapté à votre situation 
                    (et je vous explique pourquoi + alternatives). Devis écrit si on va plus loin.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 mr-6">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Structuration et sécurisation juridique</h3>
                  <p className="text-slate-700 mb-3">
                    Je mobilise mes avocats fiscalistes. On monte le dossier béton : création ou utilisation de votre holding existante, 
                    rédaction des actes d'apport, justification économique en béton, documentation complète.
                  </p>
                  <p className="text-slate-700">
                    <strong>Option :</strong> On peut demander un rescrit fiscal (validation préalable par Bercy) si vous voulez dormir VRAIMENT tranquille.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-500">
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 mr-6">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Recherche des investissements éligibles</h3>
                  <p className="text-slate-700 mb-3">
                    Vous avez 2 ans pour réinvestir 60% minimum. Je ne vous laisse pas chercher seul dans le noir. 
                    Je vous envoie des alertes sur les FCPR/FPCI conformes, les participations PME intéressantes, les opportunités validées par mes avocats.
                  </p>
                  <p className="text-slate-700">
                    <strong>Vous décidez,</strong> mais je pré-valide TOUT pour éviter les mauvaises surprises.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-start">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 mr-6">4</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Suivi sur 5 ans minimum</h3>
                  <p className="text-slate-700 mb-3">
                    Conservation obligatoire 5 ans. Je ne vous abandonne pas après la signature. 
                    Vous recevez des rappels automatiques, un tableau de bord de conformité, et surtout : 
                    vous m'appelez AVANT de vendre quoi que ce soit.
                  </p>
                  <p className="text-slate-700">
                    <strong>Résultat :</strong> Vous respectez les conditions sans y penser. Zéro stress. Zéro redressement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Ce qu'ils disent après coup</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-md">
              <div className="mb-4">
                <div className="font-bold text-slate-900">Jean-Marc - 61 ans - Services</div>
                <div className="text-sm text-slate-600">Cession 4,5M€ - Toulouse</div>
              </div>
              <p className="text-slate-700 italic mb-4">
                "J'avais une trouille bleue de l'abus de droit. Mon comptable me disait 'fais gaffe', 
                mais personne ne me disait COMMENT faire gaffe. Florent et ses avocats ont tout sécurisé. 
                Aujourd'hui, 3 ans après, j'ai économisé 380k€ et AUCUN redressement."
              </p>
              <div className="text-green-600 font-bold">380k€ économisés • 0 redressement</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-md">
              <div className="mb-4">
                <div className="font-bold text-slate-900">Philippe - 59 ans - Industrie</div>
                <div className="text-sm text-slate-600">Cession 2,8M€ - Occitanie</div>
              </div>
              <p className="text-slate-700 italic mb-4">
                "Les alertes opportunités, ça change tout. Je ne savais pas où réinvestir. 
                Florent m'envoyait des trucs pré-validés. J'ai juste eu à dire oui ou non. 
                J'ai respecté les 60% en 18 mois pépère, sans stress."
              </p>
              <div className="text-green-600 font-bold">Conformité respectée sans stress</div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-md">
              <div className="mb-4">
                <div className="font-bold text-slate-900">Catherine - 57 ans - Commerce</div>
                <div className="text-sm text-slate-600">Cession 1,9M€ - Tarn</div>
              </div>
              <p className="text-slate-700 italic mb-4">
                "Le rescrit fiscal, au début je trouvais ça exagéré. Mais Florent m'a dit 'c'est Bercy qui valide AVANT, 
                pas après'. On l'a fait. J'ai dormi tranquille pendant 5 ans. Meilleure décision de tout le projet."
              </p>
              <div className="text-green-600 font-bold">Validation Bercy • Sérénité totale</div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo : Dirigeant serein regardant l'horizon */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-200 rounded-lg overflow-hidden" style={{height: '400px'}}>
            <div className="w-full h-full flex items-center justify-center text-slate-500">
              {/* REMPLACER PAR : Dirigeant serein, souriant, regardant vers l'avenir */}
              <div className="text-center">
                <p className="text-sm font-mono">[PHOTO 4]</p>
                <p className="text-xs mt-2">Dirigeant serein après opération réussie</p>
                <p className="text-xs">Évoque la sérénité, le soulagement, la réussite</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Les questions que vous vous posez</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                L'apport-cession, c'est pour moi ?
              </h3>
              <p className="text-slate-700">
                Ça dépend. Si vous vendez plus de 500k€ de plus-value, que vous avez un projet de réinvestissement économique réel, 
                et que vous acceptez de respecter les contraintes (60% sous 2 ans, conservation 5 ans), alors OUI probablement. 
                Le premier RDV me permet de vous le dire précisément.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                Et si je ne trouve pas d'investissement conforme dans les 2 ans ?
              </h3>
              <p className="text-slate-700">
                C'est exactement pour ça que je vous envoie des alertes régulières. FCPR, FPCI, participations PME... 
                Il y a toujours des opportunités conformes. Le vrai problème, c'est de savoir lesquelles sont VRAIMENT conformes. 
                Mes avocats fiscalistes valident tout AVANT que vous signiez.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                Combien ça coûte de sécuriser tout ça ?
              </h3>
              <p className="text-slate-700">
                Mes honoraires incluent : structuration holding, coordination avocats fiscalistes, recherche opportunités conformes, 
                suivi 5 ans. Le montant dépend de votre cession (pas les mêmes enjeux à 2M€ qu'à 20M€). 
                Devis écrit après le premier RDV. <strong>Mes clients économisent en moyenne 15x mes honoraires en impôts.</strong>
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                C'est quoi un rescrit fiscal ? C'est obligatoire ?
              </h3>
              <p className="text-slate-700">
                C'est une demande de validation préalable auprès de Bercy. Vous exposez votre projet, et ils vous disent PAR ÉCRIT 
                si c'est OK ou pas. C'est pas obligatoire, mais sur les montages complexes ou les gros montants, je le recommande fortement. 
                Ça coûte un peu plus cher, mais vous dormez tranquille : Bercy a validé AVANT.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                Pourquoi vous et pas mon comptable ou mon banquier ?
              </h3>
              <p className="text-slate-700">
                Votre comptable connaît la fiscalité d'ENTREPRISE, pas la fiscalité patrimoniale personnelle complexe. 
                Votre banquier veut vous vendre SES produits (qui ne sont souvent PAS conformes au 150-0 B ter). 
                Moi, je suis spécialisé dans ces montages depuis 15 ans, je coordonne des avocats fiscalistes experts, 
                et je n'ai aucun produit à vendre. <strong>Juste de la sécurisation.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vous voulez économiser 200-500k€ d'impôts ?<br />
            Mais vous ne voulez PAS de redressement fiscal ?
          </h2>
          <p className="text-xl mb-8">
            Premier rendez-vous : je vous dis si l'apport-cession est adapté à votre cas, comment je sécurise, combien ça coûte. (45 min)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link 
              href="https://taap.it/i3gsEr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-white text-amber-600 font-bold rounded-lg hover:bg-slate-100 transition shadow-lg text-lg"
            >
              Vérifier mon éligibilité maintenant
              <ArrowRight className="ml-2 w-6 h-6" />
            </Link>
            <a 
              href="tel:0607963135"
              className="inline-flex items-center px-10 py-5 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition shadow-lg text-lg"
            >
              <Phone className="mr-2 w-6 h-6" />
              06 07 96 31 35
            </a>
          </div>
          <p className="text-sm text-white/80">
            Email : florent@occitea-ip.fr
          </p>
          <p className="text-xs text-white/60 mt-4">
            15 ans d'expérience • 0 redressement fiscal • Sécurisation juridique blindée
          </p>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-400">
          <p>© 2025 ExpertHolding.fr - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  )
}