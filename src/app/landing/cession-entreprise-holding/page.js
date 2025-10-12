'use client'
import Link from 'next/link'
import { Phone, ArrowRight, CheckCircle2, Clock, Users, Heart, Shield, Headphones } from 'lucide-react'

export default function CessionEntrepriseHoldingLanding() {
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
              Vous avez passé 20 ans à bâtir votre entreprise.<br />
              Ne gâchez pas votre sortie en 6 mois.
            </h1>
            <p className="text-xl md:text-2xl text-amber-200 mb-8">
              Vendre votre entreprise, c'est vendre une partie de vous. Je suis là pour vous accompagner humainement et techniquement, du premier jour jusqu'à votre nouvelle vie.
            </p>
          </div>

          {/* Formulaire Hero */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">
              Premier rendez-vous : on fait le point ensemble (45 min)
            </h2>
            <p className="text-center text-slate-600 mb-6 text-sm">
              Vous me racontez votre histoire, votre projet, vos inquiétudes. Je vous dis ce que je peux faire pour vous, combien ça coûte, et vous décidez.
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
                Prendre rendez-vous
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
            <p className="text-sm text-slate-600 text-center mt-4">
              ✓ Sans engagement • ✓ Échange confidentiel • ✓ Devis transparent
            </p>
          </div>

          {/* Éléments de réassurance */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="text-amber-200">
              <div className="text-3xl font-bold mb-2">15+ ans</div>
              <div>à accompagner des dirigeants</div>
            </div>
            <div className="text-amber-200">
              <div className="text-3xl font-bold mb-2">1-30M€</div>
              <div>montants de cessions</div>
            </div>
            <div className="text-amber-200">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div>sur-mesure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo : Dirigeant pensif devant son bureau */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-200 rounded-lg overflow-hidden" style={{height: '400px'}}>
            <div className="w-full h-full flex items-center justify-center text-slate-500">
              {/* REMPLACER PAR : Photo d'un dirigeant 55-65 ans, pensif, dans son bureau */}
              <div className="text-center">
                <p className="text-sm font-mono">[PHOTO 1]</p>
                <p className="text-xs mt-2">Dirigeant pensif devant son bureau</p>
                <p className="text-xs">Évoque la réflexion, le poids de la décision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section "Ce que vous vivez" */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Ce que vous vivez en ce moment
          </h2>
          
          <div className="space-y-8 mb-12">
            <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-amber-500">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-amber-600 mr-4" />
                <h3 className="text-xl font-bold text-slate-900">Vous n'avez pas le temps</h3>
              </div>
              <p className="text-slate-700">
                Entre la gestion de l'entreprise au quotidien, les négociations avec l'acquéreur, votre famille qui s'inquiète... 
                Vous devez aussi penser à l'après : holding ? apport-cession ? réinvestissement où ? transmission comment ?
                <strong> Vous n'êtes pas expert en fiscalité patrimoniale, et c'est normal.</strong>
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-xl font-bold text-slate-900">Vous êtes face à trop d'acteurs</h3>
              </div>
              <p className="text-slate-700">
                Votre comptable vous parle de plus-values. Votre avocat de clauses de garantie. Votre banquier veut vous vendre ses produits. 
                Votre notaire évoque la transmission. <strong>Chacun a son expertise, mais personne ne coordonne le tout.</strong> 
                Et vous, au milieu, vous ne savez plus qui croire ni par où commencer.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-green-600 mr-4" />
                <h3 className="text-xl font-bold text-slate-900">Vous voulez sécuriser ce que vous avez créé</h3>
              </div>
              <p className="text-slate-700">
                Cette entreprise, c'est 20, 25, 30 ans de votre vie. Des sacrifices. Des nuits blanches. Des moments de doute. 
                Vous voulez être sûr que <strong>cet argent sera bien protégé, bien investi, bien transmis à vos enfants.</strong> 
                Vous voulez enfin souffler, mais sereinement.
              </p>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
            <p className="text-lg text-slate-800 text-center">
              <strong className="text-red-700">Le problème :</strong> Vous êtes seul à porter tout ça. Vous n'avez personne qui parle VOTRE langue, qui comprend VOTRE parcours, et qui coordonne TOUS ces experts pour VOUS.<br /><br />
              <strong>C'est exactement pour ça que j'existe.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Photo : Poignée de main entre deux personnes */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-200 rounded-lg overflow-hidden" style={{height: '400px'}}>
            <div className="w-full h-full flex items-center justify-center text-slate-500">
              {/* REMPLACER PAR : Poignée de main chaleureuse entre conseiller et dirigeant */}
              <div className="text-center">
                <p className="text-sm font-mono">[PHOTO 2]</p>
                <p className="text-xs mt-2">Poignée de main entre conseiller et dirigeant</p>
                <p className="text-xs">Évoque la confiance, l'accompagnement humain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mon rôle */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Mon rôle : être à vos côtés, du début à la fin
          </h2>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-lg border-2 border-amber-300 mb-12">
            <div className="flex items-start mb-6">
              <Headphones className="w-12 h-12 text-amber-600 mr-6 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Je suis votre chef d'orchestre patrimonial</h3>
                <p className="text-slate-700 text-lg mb-4">
                  Comme un médecin de famille connaît votre dossier médical par cœur, <strong>je connais votre dossier patrimonial</strong>. 
                  Je suis votre interlocuteur unique, celui qui parle avec tous les experts et qui traduit tout ça en décisions claires pour vous.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-700">
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <p><strong>J'écoute d'abord :</strong> Votre histoire, vos objectifs, vos peurs, votre famille, vos projets de vie après la cession</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <p><strong>Je coordonne ensuite :</strong> Mes avocats fiscalistes, experts patrimoniaux, spécialistes retraite et prévoyance travaillent EN ÉQUIPE sur votre dossier</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <p><strong>Je vous accompagne tout du long :</strong> De la structuration holding jusqu'au réinvestissement final. Vous ne serez jamais seul</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <p><strong>Je reste disponible après :</strong> Suivi sur 2-5 ans, ajustements si nécessaire, questions quand vous en avez</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <p className="text-slate-700">
              <strong>Important :</strong> Je ne fais pas tout moi-même. Je mobilise un réseau d'experts pointus (avocats, patrimoniaux, fiscalistes) 
              qui travaillent en marque blanche pour vous. <strong>Vous payez mes honoraires, qui incluent leur coordination.</strong> 
              Tout est transparent dès le premier rendez-vous.
            </p>
          </div>
        </div>
      </section>

      {/* Photo : Équipe de conseillers autour d'une table */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-200 rounded-lg overflow-hidden" style={{height: '400px'}}>
            <div className="w-full h-full flex items-center justify-center text-slate-500">
              {/* REMPLACER PAR : Équipe de professionnels autour d'une table de réunion */}
              <div className="text-center">
                <p className="text-sm font-mono">[PHOTO 3]</p>
                <p className="text-xs mt-2">Équipe d'experts en réunion collaborative</p>
                <p className="text-xs">Évoque le réseau, la coordination, le travail d'équipe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ma méthode en 4 étapes */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Ma méthode en 4 étapes
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-500">
              <div className="flex items-start">
                <div className="bg-amber-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 mr-6">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Premier RDV : Diagnostic (45 min)</h3>
                  <p className="text-slate-700 mb-3">
                    On prend le temps. Vous me racontez tout : votre entreprise, la vente en cours, votre situation familiale, vos objectifs, vos inquiétudes.
                  </p>
                  <p className="text-slate-700">
                    <strong>À la fin :</strong> Je vous dis si je peux vous aider, comment, et combien ça coûte. Devis écrit, transparent, sans surprise.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-500">
              <div className="flex items-start">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 mr-6">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Audit patrimonial complet</h3>
                  <p className="text-slate-700 mb-3">
                    Je mobilise mon réseau d'experts. On analyse TOUT : fiscalité de la cession, structuration optimale (holding ou pas ?), apport-cession possible ?, 
                    transmission aux enfants, protection conjoint, prévoyance retraite.
                  </p>
                  <p className="text-slate-700">
                    <strong>Livrable :</strong> Un plan d'action complet, chiffré, sur-mesure pour VOTRE situation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-500">
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 mr-6">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Mise en œuvre coordonnée</h3>
                  <p className="text-slate-700 mb-3">
                    Je coordonne TOUT : création de la holding si nécessaire, sécurisation juridique de l'apport-cession avec les avocats, 
                    signature des actes avec le notaire, recherche des opportunités de réinvestissement éligibles.
                  </p>
                  <p className="text-slate-700">
                    <strong>Vous :</strong> Vous validez les grandes décisions. Moi : Je gère l'exécution.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-purple-500">
              <div className="flex items-start">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 mr-6">4</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Suivi long terme</h3>
                  <p className="text-slate-700 mb-3">
                    Apport-cession = réinvestir 60% sous 2 ans. Je vous envoie des alertes sur les opportunités conformes. 
                    Je vérifie que tout respecte les conditions fiscales. Je reste disponible pour ajuster si votre situation évolue.
                  </p>
                  <p className="text-slate-700">
                    <strong>Objectif :</strong> Zéro redressement fiscal. Zéro stress. Vous pouvez enfin souffler.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="https://taap.it/i3gsEr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition shadow-lg text-lg"
            >
              Prendre rendez-vous (45 min)
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photo : Famille heureuse */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-200 rounded-lg overflow-hidden" style={{height: '400px'}}>
            <div className="w-full h-full flex items-center justify-center text-slate-500">
              {/* REMPLACER PAR : Dirigeant retraité souriant avec sa famille */}
              <div className="text-center">
                <p className="text-sm font-mono">[PHOTO 4]</p>
                <p className="text-xs mt-2">Dirigeant retraité serein avec sa famille</p>
                <p className="text-xs">Évoque la sérénité post-cession, la transmission réussie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Ce que disent les dirigeants que j'accompagne</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <div className="mb-4">
                <div className="font-bold text-slate-900">Pierre - 58 ans - BTP</div>
                <div className="text-sm text-slate-600">Cession 3,2M€ - Tarn</div>
              </div>
              <p className="text-slate-700 italic mb-4">
                "Florent, c'est le mec qui traduit le chinois. Mon comptable me parlait de PFU, mon avocat d'abus de droit... 
                Lui, il m'a tout expliqué en français. Et surtout, il s'est occupé de TOUT coordonner. 
                J'ai pu me concentrer sur la vente sans me prendre la tête sur le reste."
              </p>
              <div className="text-amber-600 font-bold">Économie fiscale : 420k€</div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <div className="mb-4">
                <div className="font-bold text-slate-900">Marc - 62 ans - Industrie</div>
                <div className="text-sm text-slate-600">Cession 8M€ - Haute-Garonne</div>
              </div>
              <p className="text-slate-700 italic mb-4">
                "J'avais peur de me faire avoir. Trop de monde qui voulait me vendre des trucs. 
                Florent, lui, il n'avait rien à me vendre. Il a juste mobilisé les bons experts au bon moment. 
                Aujourd'hui, mon patrimoine est sécurisé, mes enfants sont protégés, et je dors tranquille."
              </p>
              <div className="text-amber-600 font-bold">Transmission optimisée</div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <div className="mb-4">
                <div className="font-bold text-slate-900">Sophie - 60 ans - Commerce</div>
                <div className="text-sm text-slate-600">Vente 2,1M€ - Occitanie</div>
              </div>
              <p className="text-slate-700 italic mb-4">
                "J'avais peur que le fisc me tombe dessus après la vente. Florent a tout sécurisé avec ses avocats. 
                Résultat : 0 redressement, tout est carré. Et surtout, j'ai enfin pu souffler. 
                Il reste dispo même 2 ans après, ça, ça n'a pas de prix."
              </p>
              <div className="text-amber-600 font-bold">Sérénité retrouvée</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi me faire confiance */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Pourquoi me faire confiance ?</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-amber-500">
              <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-center">
                <Shield className="w-6 h-6 text-amber-600 mr-3" />
                Je ne vends pas de produits
              </h3>
              <p className="text-slate-700">
                Contrairement aux banquiers qui ont des objectifs de vente sur leurs produits maison, 
                je suis indépendant. Je sélectionne les MEILLEURS produits du marché pour VOUS, pas pour moi.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-center">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                Je mobilise des experts pointus
              </h3>
              <p className="text-slate-700">
                Avocats fiscalistes qui ont fait 50+ apport-cessions, experts patrimoniaux spécialisés dirigeants, 
                courtiers contrats luxembourgeois... Vous bénéficiez du meilleur, sans les chercher vous-même.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-center">
                <CheckCircle2 className="w-6 h-6 text-green-600 mr-3" />
                15 ans à accompagner des dirigeants
              </h3>
              <p className="text-slate-700">
                J'ai vu toutes les situations : cessions 1M€ comme 30M€, familles recomposées, enfants en désaccord, 
                transmissions complexes... Je sais gérer la partie technique ET la partie humaine.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-center">
                <Heart className="w-6 h-6 text-purple-600 mr-3" />
                Je parle votre langue
              </h3>
              <p className="text-slate-700">
                Pas de jargon technique. Pas de condescendance. Je vous explique tout clairement, 
                je prends le temps qu'il faut, et surtout : je vous écoute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Vos questions</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                Le premier rendez-vous est-il vraiment gratuit ?
              </h3>
              <p className="text-slate-700">
                Non. Le premier rendez-vous me permet d'établir un diagnostic et un devis. C'est comme chez le médecin : 
                la consultation a un coût, mais c'est là qu'on définit ensemble si je peux vous aider et combien ça coûtera. 
                <strong> Tout est transparent dès le départ.</strong>
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                Combien coûtent vos services ?
              </h3>
              <p className="text-slate-700">
                Ça dépend de votre situation. Une cession à 2M€ ne coûte pas le même accompagnement qu'une à 20M€. 
                Mes honoraires incluent la coordination de tous les experts (avocats, patrimoniaux, etc). 
                Je vous donne un devis écrit après notre premier échange, et mes clients économisent en moyenne 10x mes honoraires en optimisation fiscale.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                Pourquoi ne pas juste demander à mon comptable ?
              </h3>
              <p className="text-slate-700">
                Votre comptable est excellent pour optimiser la fiscalité de votre ENTREPRISE. 
                Mais la fiscalité patrimoniale personnelle post-cession, ce n'est pas son métier. 
                Moi, je me concentre sur VOTRE patrimoine PERSONNEL : comment le protéger, le faire fructifier, le transmettre. 
                <strong>Je travaille EN COMPLÉMENT de votre comptable, pas à sa place.</strong>
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                Et si je me trompe de stratégie ?
              </h3>
              <p className="text-slate-700">
                C'est justement pour ça que je mobilise des avocats fiscalistes qui sécurisent juridiquement chaque opération. 
                On demande parfois un rescrit fiscal (validation préalable par l'administration) sur les montages complexes. 
                <strong>Résultat : 0 redressement fiscal sur tous mes dossiers depuis 15 ans.</strong>
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                Combien de temps ça prend ?
              </h3>
              <p className="text-slate-700">
                De la première consultation à la mise en place complète : comptez 3-6 mois selon la complexité. 
                Ensuite, suivi sur 2 à 5 ans (selon votre dispositif choisi) pour s'assurer que tout reste conforme. 
                Mais rassurez-vous : <strong>je gère l'exécution, vous validez juste les grandes décisions.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vous avez bâti votre entreprise pendant 20 ans.<br />
            Ne gâchez pas votre sortie en 6 mois.
          </h2>
          <p className="text-xl mb-8">
            Premier rendez-vous : on fait le point ensemble (45 min)<br />
            Vous me racontez tout, je vous dis comment je peux vous aider, combien ça coûte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link 
              href="https://taap.it/i3gsEr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-white text-amber-600 font-bold rounded-lg hover:bg-slate-100 transition shadow-lg text-lg"
            >
              Prendre rendez-vous maintenant
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