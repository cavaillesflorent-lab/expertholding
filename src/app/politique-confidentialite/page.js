'use client'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Shield, Lock, Eye, FileText, Mail, Clock, Users, Database } from 'lucide-react';

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header currentPage="politique" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-amber-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-center">Politique de Confidentialité</h1>
          <p className="text-xl text-slate-300 text-center">
            Protection de vos données personnelles - Conforme RGPD
          </p>
          <p className="text-sm text-slate-400 text-center mt-4">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Introduction */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-12 rounded-r-lg">
            <p className="text-slate-700 leading-relaxed">
              La présente politique de confidentialité a pour but de vous informer sur la manière dont <strong>ExpertHolding.fr</strong> collecte, 
              utilise et protège vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) 
              et à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée.
            </p>
          </div>

          {/* 1. Responsable du traitement */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">1. Responsable du traitement des données</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-4">
                Le responsable du traitement de vos données personnelles est :
              </p>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Raison sociale :</strong> Florent Cavailles</li>
                <li><strong>Forme juridique :</strong> EURL au capital de 20 000 €</li>
                <li><strong>Représentant légal :</strong> Florent Cavailles</li>
                <li><strong>Adresse :</strong> 504 route des Gaux, 81290 Labruguière, France</li>
                <li><strong>SIRET :</strong> 903 529 386 00018</li>
                <li><strong>Email :</strong> <a href="mailto:florent@occitea-ip.fr" className="text-amber-600 hover:text-amber-700">florent@occitea-ip.fr</a></li>
                <li><strong>Téléphone :</strong> <a href="tel:0607963135" className="text-amber-600 hover:text-amber-700">06 07 96 31 35</a></li>
              </ul>
              <p className="text-slate-700 mt-4">
                <strong>Délégué à la Protection des Données (DPO) :</strong> Florent Cavailles - Contact : 06 07 96 31 35
              </p>
            </div>
          </div>

          {/* 2. Données collectées */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">2. Données personnelles collectées</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-4">
                Nous collectons différentes catégories de données personnelles selon les traitements :
              </p>
              
              <h3 className="font-bold text-slate-900 mb-3 mt-6">Via le formulaire de contact :</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Nom de l'entreprise (facultatif)</li>
                <li>Fonction (facultatif)</li>
                <li>Objet et contenu du message</li>
              </ul>

              <h3 className="font-bold text-slate-900 mb-3 mt-6">Via la newsletter :</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Adresse email</li>
                <li>Prénom (si fourni)</li>
                <li>Données de suivi (ouvertures, clics)</li>
              </ul>

              <h3 className="font-bold text-slate-900 mb-3 mt-6">Données de navigation :</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Adresse IP</li>
                <li>Type de navigateur</li>
                <li>Pages visitées et durée de visite</li>
                <li>Source de trafic</li>
              </ul>
            </div>
          </div>

          {/* 3. Finalités et bases légales */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">3. Finalités et bases légales du traitement</h2>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Finalité</th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-slate-900">Base légale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 text-slate-700">Répondre à vos demandes de contact</td>
                    <td className="px-6 py-4 text-slate-700">Intérêt légitime / Exécution de mesures précontractuelles</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-700">Envoi de la newsletter</td>
                    <td className="px-6 py-4 text-slate-700">Consentement</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-700">Gestion de la relation client</td>
                    <td className="px-6 py-4 text-slate-700">Exécution du contrat</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-700">Analyses statistiques du site</td>
                    <td className="px-6 py-4 text-slate-700">Intérêt légitime (amélioration du site)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-700">Respect des obligations légales</td>
                    <td className="px-6 py-4 text-slate-700">Obligation légale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 4. Destinataires */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">4. Destinataires de vos données</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-4">
                Vos données personnelles sont destinées aux services internes d'ExpertHolding.fr et peuvent être transmises à nos sous-traitants :
              </p>
              <ul className="space-y-3 text-slate-700">
                <li>
                  <strong>o2switch</strong> - Hébergement du site web (France)
                </li>
                <li>
                  <strong>Resend</strong> - Envoi des emails transactionnels (conformité RGPD)
                </li>
                <li>
                  <strong>Brevo</strong> - Gestion de la newsletter (conformité RGPD, serveurs UE)
                </li>
                <li>
                  <strong>Wealthcome Pro</strong> - CRM et gestion de la relation client (conformité RGPD)
                </li>
                <li>
                  <strong>Plausible Analytics</strong> - Statistiques de fréquentation du site (données anonymisées, sans cookies, conforme RGPD)
                </li>
              </ul>
              <p className="text-slate-700 mt-4 bg-slate-50 p-4 rounded">
                <strong>Important :</strong> Tous nos sous-traitants présentent des garanties suffisantes en matière de protection des données 
                et sont soumis à des obligations contractuelles strictes conformément au RGPD.
              </p>
            </div>
          </div>

          {/* 5. Durée de conservation */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">5. Durée de conservation</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-4">
                Vos données sont conservées pendant des durées proportionnées aux finalités pour lesquelles elles ont été collectées :
              </p>
              <ul className="space-y-3 text-slate-700">
                <li>
                  <strong>Formulaire de contact (prospect non qualifié) :</strong> 1 an à compter du dernier contact
                </li>
                <li>
                  <strong>Formulaire de contact (prospect qualifié) :</strong> 3 ans à compter du dernier contact
                </li>
                <li>
                  <strong>Client actif :</strong> Durée de la relation contractuelle + 3 ans (délai de prescription)
                </li>
                <li>
                  <strong>Newsletter :</strong> Jusqu'à désinscription ou 3 ans d'inactivité
                </li>
                <li>
                  <strong>Données de navigation (cookies) :</strong> 13 mois maximum
                </li>
                <li>
                  <strong>Données comptables :</strong> 10 ans (obligation légale)
                </li>
              </ul>
              <p className="text-slate-700 mt-4">
                À l'issue de ces durées, vos données sont supprimées ou anonymisées de manière irréversible.
              </p>
            </div>
          </div>

          {/* 6. Sécurité */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">6. Sécurité de vos données</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-4">
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles :
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>• Chiffrement des données en transit (protocole HTTPS/SSL)</li>
                <li>• Hébergement sécurisé en France (o2switch)</li>
                <li>• Accès limité aux données aux seules personnes autorisées</li>
                <li>• Sauvegardes régulières et sécurisées</li>
                <li>• Pseudonymisation et chiffrement des données sensibles</li>
                <li>• Politique de mots de passe renforcée</li>
                <li>• Procédures internes de gestion des incidents de sécurité</li>
              </ul>
            </div>
          </div>

          {/* 7. Vos droits */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">7. Vos droits sur vos données</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-4">
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-amber-500 pl-4">
                  <h3 className="font-bold text-slate-900 mb-2">Droit d'accès</h3>
                  <p className="text-slate-700">Obtenir la confirmation que vos données sont traitées et accéder à ces données</p>
                </div>

                <div className="border-l-4 border-amber-500 pl-4">
                  <h3 className="font-bold text-slate-900 mb-2">Droit de rectification</h3>
                  <p className="text-slate-700">Faire corriger vos données inexactes ou incomplètes</p>
                </div>

                <div className="border-l-4 border-amber-500 pl-4">
                  <h3 className="font-bold text-slate-900 mb-2">Droit à l'effacement ("droit à l'oubli")</h3>
                  <p className="text-slate-700">Obtenir l'effacement de vos données dans certains cas</p>
                </div>

                <div className="border-l-4 border-amber-500 pl-4">
                  <h3 className="font-bold text-slate-900 mb-2">Droit à la limitation du traitement</h3>
                  <p className="text-slate-700">Obtenir la limitation du traitement de vos données dans certaines situations</p>
                </div>

                <div className="border-l-4 border-amber-500 pl-4">
                  <h3 className="font-bold text-slate-900 mb-2">Droit à la portabilité</h3>
                  <p className="text-slate-700">Recevoir vos données dans un format structuré et les transmettre à un autre responsable</p>
                </div>

                <div className="border-l-4 border-amber-500 pl-4">
                  <h3 className="font-bold text-slate-900 mb-2">Droit d'opposition</h3>
                  <p className="text-slate-700">Vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière</p>
                </div>

                <div className="border-l-4 border-amber-500 pl-4">
                  <h3 className="font-bold text-slate-900 mb-2">Droit de retirer votre consentement</h3>
                  <p className="text-slate-700">Retirer votre consentement à tout moment (newsletter, cookies)</p>
                </div>

                <div className="border-l-4 border-amber-500 pl-4">
                  <h3 className="font-bold text-slate-900 mb-2">Droit de définir des directives post-mortem</h3>
                  <p className="text-slate-700">Définir des directives relatives au sort de vos données après votre décès</p>
                </div>
              </div>

              <div className="mt-6 bg-amber-50 p-4 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-2">Comment exercer vos droits ?</h3>
                <p className="text-slate-700 mb-3">
                  Pour exercer vos droits, vous pouvez nous contacter :
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Par email : <a href="mailto:florent@occitea-ip.fr" className="text-amber-600 hover:text-amber-700 font-medium">florent@occitea-ip.fr</a></li>
                  <li>• Par téléphone : <a href="tel:0607963135" className="text-amber-600 hover:text-amber-700 font-medium">06 07 96 31 35</a></li>
                  <li>• Par courrier : Florent Cavailles, 504 route des Gaux, 81290 Labruguière</li>
                </ul>
                <p className="text-slate-700 mt-3 text-sm">
                  Nous nous engageons à répondre à votre demande dans un délai maximum d'<strong>1 mois</strong> à compter de sa réception. 
                  Une copie de votre pièce d'identité pourra être demandée pour vérifier votre identité.
                </p>
              </div>
            </div>
          </div>

          {/* 8. Cookies */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">8. Statistiques anonymes et respect de votre vie privée</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-r-lg">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-600" />
                  Analyse respectueuse de la vie privée
                </h3>
                <p className="text-slate-700">
                  Nous utilisons <strong>Plausible Analytics</strong>, un outil d'analyse web respectueux de la vie privée, 
                  pour comprendre comment notre site est utilisé et l'améliorer.
                </p>
              </div>

              <h3 className="font-bold text-slate-900 mb-3">Pourquoi Plausible ne nécessite pas votre consentement :</h3>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• <strong>Aucun cookie utilisé</strong> : Plausible ne dépose aucun cookie sur votre appareil</li>
                <li>• <strong>Aucune donnée personnelle collectée</strong> : Pas de suivi individuel, pas d'identification</li>
                <li>• <strong>Données 100% anonymisées</strong> : Impossible de vous identifier ou de vous suivre</li>
                <li>• <strong>Aucun suivi entre sites</strong> : Vos déplacements sur le web ne sont pas tracés</li>
                <li>• <strong>Conforme RGPD par défaut</strong> : Hébergé en Union Européenne</li>
                <li>• <strong>Données non revendues</strong> : Vos informations ne sont jamais partagées ou vendues</li>
              </ul>

              <h3 className="font-bold text-slate-900 mb-3">Ce que nous mesurons (de manière anonyme) :</h3>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• Pages visitées et durée des visites</li>
                <li>• Provenance du trafic (moteur de recherche, lien direct, etc.)</li>
                <li>• Type d'appareil utilisé (ordinateur, mobile, tablette)</li>
                <li>• Pays et région (sans identification précise)</li>
              </ul>

              <div className="bg-slate-50 p-4 rounded">
                <p className="text-slate-700 text-sm">
                  <strong>En savoir plus :</strong> Pour découvrir comment Plausible protège votre vie privée, 
                  consultez leur documentation : <a href="https://plausible.io/privacy-focused-web-analytics" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 underline">plausible.io/privacy-focused-web-analytics</a>
                </p>
              </div>

              <h3 className="font-bold text-slate-900 mb-3 mt-6">Cookies fonctionnels :</h3>
              <p className="text-slate-700 mb-3">
                Notre site peut utiliser des cookies strictement nécessaires au bon fonctionnement du site 
                (stockage de vos préférences, sécurité). Ces cookies ne nécessitent pas votre consentement.
              </p>

              <div className="bg-slate-50 p-4 rounded">
                <p className="text-slate-700">
                  <strong>Gestion des cookies :</strong> Vous pouvez à tout moment modifier vos préférences ou supprimer les cookies 
                  via les paramètres de votre navigateur.
                </p>
              </div>
            </div>
          </div>

          {/* 9. Transferts hors UE */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">9. Transferts de données hors de l'Union Européenne</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700">
                Vos données personnelles sont hébergées et traitées au sein de l'Union Européenne (France). 
                Certains de nos sous-traitants (Resend, Brevo, Wealthcome Pro) peuvent avoir des serveurs situés hors de l'UE, 
                mais disposent de garanties appropriées (Clauses Contractuelles Types de la Commission Européenne, Privacy Shield, etc.) 
                assurant un niveau de protection équivalent au RGPD.
              </p>
            </div>
          </div>

          {/* 10. Réclamation CNIL */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">10. Droit de réclamation auprès de la CNIL</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-4">
                Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, 
                vous pouvez introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
              </p>
              <div className="bg-slate-50 p-4 rounded">
                <p className="text-slate-700"><strong>CNIL</strong></p>
                <p className="text-slate-700">3 Place de Fontenoy</p>
                <p className="text-slate-700">TSA 80715</p>
                <p className="text-slate-700">75334 Paris Cedex 07</p>
                <p className="text-slate-700 mt-2">
                  Téléphone : 01 53 73 22 22
                </p>
                <p className="text-slate-700">
                  Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700">www.cnil.fr</a>
                </p>
              </div>
            </div>
          </div>

          {/* 11. Modifications */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">11. Modifications de la politique de confidentialité</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour. 
                Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications. 
                En cas de modification substantielle, nous vous en informerons par email ou via un avis sur notre site.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-xl border border-amber-200">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">Des questions ?</h2>
            </div>
            <p className="text-slate-700 mb-6">
              Pour toute question concernant cette politique de confidentialité ou l'exercice de vos droits, 
              n'hésitez pas à nous contacter :
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              
                <a href="mailto:florent@occitea-ip.fr"
                className="inline-block px-6 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition text-center"
              >
                Nous contacter par email
              </a>
              
                <a href="tel:0607963135"
                className="inline-block px-6 py-3 bg-slate-700 text-white font-medium rounded-lg hover:bg-slate-800 transition text-center"
              >
                06 07 96 31 35
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}