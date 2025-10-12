'use client'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FileText, Server, Shield, Scale } from 'lucide-react';

export default function MentionsLegalesPage() {
  return (
    <>
      <Header currentPage="mentions" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center mb-6">
            <Scale className="w-12 h-12 text-amber-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-center">Mentions Légales</h1>
          <p className="text-xl text-slate-300 text-center">
            Informations légales relatives au site ExpertHolding.fr
          </p>
          <p className="text-sm text-slate-400 text-center mt-4">
            Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* 1. Éditeur du site */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">1. Éditeur du site</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-4">
                Le site <strong>ExpertHolding.fr</strong> est édité par :
              </p>
              <div className="bg-slate-50 p-4 rounded">
                <ul className="space-y-2 text-slate-700">
                  <li><strong>Raison sociale :</strong> Florent Cavailles</li>
                  <li><strong>Nom commercial :</strong> Occitea Patrimoine</li>
                  <li><strong>Forme juridique :</strong> EURL (Entreprise Unipersonnelle à Responsabilité Limitée)</li>
                  <li><strong>Capital social :</strong> 20 000 €</li>
                  <li><strong>Siège social :</strong> 504 route des Gaux, 81290 Labruguière, France</li>
                  <li><strong>SIRET :</strong> 903 529 386 00018</li>
                  <li><strong>RCS :</strong> Castres</li>
                  <li><strong>TVA Intracommunautaire :</strong> FR91903529386</li>
                  <li><strong>Email :</strong> <a href="mailto:florent@occitea-ip.fr" className="text-amber-600 hover:text-amber-700">florent@occitea-ip.fr</a></li>
                  <li><strong>Téléphone :</strong> <a href="tel:0607963135" className="text-amber-600 hover:text-amber-700">06 07 96 31 35</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Directeur de la publication */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">2. Directeur de la publication</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700">
                <strong>Directeur de la publication :</strong> Florent Cavailles, Gérant
              </p>
              <p className="text-slate-700 mt-2">
                <strong>Contact :</strong> <a href="mailto:florent@occitea-ip.fr" className="text-amber-600 hover:text-amber-700">florent@occitea-ip.fr</a>
              </p>
            </div>
          </div>

          {/* 3. Hébergement */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Server className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">3. Hébergement du site</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-4">
                Le site <strong>ExpertHolding.fr</strong> est hébergé par :
              </p>
              <div className="bg-slate-50 p-4 rounded">
                <ul className="space-y-2 text-slate-700">
                  <li><strong>Hébergeur :</strong> o2switch</li>
                  <li><strong>Raison sociale :</strong> o2switch SARL</li>
                  <li><strong>Siège social :</strong> Chemin des Pardiaux, 63000 Clermont-Ferrand, France</li>
                  <li><strong>Téléphone :</strong> 04 44 44 60 40</li>
                  <li><strong>Site web :</strong> <a href="https://www.o2switch.fr" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700">www.o2switch.fr</a></li>
                  <li><strong>Localisation des serveurs :</strong> France</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. Activité réglementée */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">4. Activité réglementée</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-4">
                Occitea Patrimoine exerce une activité de conseil en gestion de patrimoine, soumise à réglementation :
              </p>
              <div className="space-y-3">
                <div className="bg-amber-50 p-4 rounded">
                  <p className="text-slate-700"><strong>Inscription ORIAS :</strong></p>
                  <p className="text-slate-700 text-sm mt-1">
                    Vérifiable sur <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700">www.orias.fr</a>
                  </p>
                </div>
                <p className="text-slate-700 text-sm">
                  <em>Note : Si vous êtes inscrit à l'ORIAS en tant que CIF (Conseiller en Investissements Financiers), 
                  COA (Courtier en Assurance), COBSP (Courtier en Opérations de Banque), sous le numéro : 21008193 .</em>
                </p>
              </div>
            </div>
          </div>

          {/* 5. Propriété intellectuelle */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">5. Propriété intellectuelle</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-4">
                L'ensemble de ce site (structure, textes, logos, images, vidéos, graphismes, etc.) relève de la législation française 
                et internationale sur le droit d'auteur et la propriété intellectuelle.
              </p>
              <p className="text-slate-700 mb-4">
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-slate-700 mb-4">
                La reproduction de tout ou partie de ce site sur un support électronique ou autre quel qu'il soit est formellement interdite 
                sauf autorisation expresse du directeur de publication.
              </p>
              <div className="bg-slate-50 p-4 rounded mt-4">
                <p className="text-slate-700">
                  <strong>Crédits :</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 mt-2">
                  <li>Photos : Unsplash, Pexels (licence libre de droits)</li>
                  <li>Icônes : Lucide React</li>
                  <li>Conception technique : Occitea Patrimoine</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 6. Protection des données */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">6. Protection des données personnelles</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-4">
                Les informations relatives à la collecte et au traitement de vos données personnelles sont détaillées dans notre 
                <a href="/politique-confidentialite" className="text-amber-600 hover:text-amber-700 font-medium"> Politique de Confidentialité</a>.
              </p>
              <p className="text-slate-700">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, 
                vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles.
              </p>
            </div>
          </div>

          {/* 7. Cookies */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">7. Cookies</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-4">
                Le site ExpertHolding.fr utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visite.
              </p>
              <p className="text-slate-700 mb-4">
                Ces cookies sont déposés avec votre consentement, que vous pouvez retirer à tout moment via les paramètres de votre navigateur.
              </p>
              <p className="text-slate-700">
                Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-amber-600 hover:text-amber-700 font-medium">Politique de Confidentialité</a>.
              </p>
            </div>
          </div>

          {/* 8. Liens hypertextes */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">8. Liens hypertextes</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-4">
                Le site ExpertHolding.fr peut contenir des liens hypertextes vers d'autres sites internet. 
                Occitea Patrimoine n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, 
                leur disponibilité et les éventuels dommages pouvant résulter de leur consultation.
              </p>
              <p className="text-slate-700">
                La mise en place de liens hypertextes vers le site ExpertHolding.fr nécessite une autorisation préalable écrite. 
                Pour toute demande, contactez-nous à : <a href="mailto:florent@occitea-ip.fr" className="text-amber-600 hover:text-amber-700">florent@occitea-ip.fr</a>
              </p>
            </div>
          </div>

          {/* 9. Limitation de responsabilité */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Scale className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">9. Limitation de responsabilité</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-4">
                Occitea Patrimoine s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, 
                dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
              </p>
              <p className="text-slate-700 mb-4">
                Toutefois, Occitea Patrimoine ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p className="text-slate-700 mb-4">
                Occitea Patrimoine ne saurait être tenue pour responsable :
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Des interruptions temporaires du site pour des raisons de maintenance</li>
                <li>Des dommages directs ou indirects résultant de l'accès au site ou de l'impossibilité d'y accéder</li>
                <li>De l'utilisation du site par l'internaute</li>
                <li>De tout dysfonctionnement du réseau internet</li>
              </ul>
            </div>
          </div>

          {/* 10. Droit applicable */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Scale className="w-6 h-6 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-slate-900">10. Droit applicable et juridiction compétente</h2>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-4">
                Les présentes mentions légales sont soumises au droit français.
              </p>
              <p className="text-slate-700">
                Tout litige relatif à l'utilisation du site ExpertHolding.fr est soumis à la compétence exclusive des tribunaux français, 
                et notamment du tribunal de commerce de Castres.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-xl border border-amber-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Questions ?</h2>
            <p className="text-slate-700 mb-6">
              Pour toute question concernant ces mentions légales, contactez-nous :
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