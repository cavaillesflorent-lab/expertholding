'use client'

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    fonction: '',
    sujet: '',
    message: '',
    rgpd: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est requis';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le téléphone est requis';
    } else if (!/^(\+33|0)[1-9](\d{8})$/.test(formData.telephone.replace(/\s/g, ''))) {
      newErrors.telephone = 'Numéro invalide (ex: 06 12 34 56 78)';
    }
    if (!formData.sujet) newErrors.sujet = 'Veuillez sélectionner un sujet';
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    if (!formData.rgpd) newErrors.rgpd = 'Vous devez accepter la politique de confidentialité';
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  const newErrors = validateForm();
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi du message');
    }

    setIsSubmitted(true);
    
    // Réinitialiser le formulaire après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        entreprise: '',
        fonction: '',
        sujet: '',
        message: '',
        rgpd: false
      });
    }, 5000);
  } catch (error) {
    console.error('Erreur:', error);
    alert('Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou nous contacter directement par téléphone.');
  }


    // Ici, vous pouvez envoyer les données à votre backend ou service d'email
    console.log('Formulaire soumis:', formData);
    
    // Simuler l'envoi
    setIsSubmitted(true);
    
    // Réinitialiser le formulaire après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        entreprise: '',
        fonction: '',
        sujet: '',
        message: '',
        rgpd: false
      });
    }, 5000);
  };

  return (
    <>
      <Header currentPage="contact" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl text-slate-300">
            Notre équipe d'experts est à votre écoute pour répondre à vos questions et vous accompagner dans vos projets patrimoniaux
          </p>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Téléphone</h3>
              <a href="tel:0607963135" className="text-amber-600 hover:text-amber-700 transition">
                06 07 96 31 35
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Email</h3>
              <a href="mailto:florent@occitea-ip.fr" className="text-amber-600 hover:text-amber-700 transition break-all">
                florent@occitea-ip.fr
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Localisation</h3>
              <p className="text-slate-600">Occitanie, France</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Horaires</h3>
              <p className="text-slate-600 text-sm">Lun - Ven<br/>9h - 18h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Message envoyé avec succès !</h3>
              <p className="text-slate-600 mb-4">
                Nous avons bien reçu votre demande. Notre équipe vous contactera dans les plus brefs délais, généralement sous 24h ouvrées.
              </p>
              
               <a href="https://taap.it/i3gsEr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition"
              >
                Prendre rendez-vous directement
              </a>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Envoyez-nous un message</h2>
                <p className="text-slate-600">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Nom */}
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-slate-700 mb-2">
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.nom ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500`}
                      placeholder="Votre nom"
                    />
                    {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
                  </div>

                  {/* Prénom */}
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-slate-700 mb-2">
                      Prénom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.prenom ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500`}
                      placeholder="Votre prénom"
                    />
                    {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500`}
                      placeholder="votre.email@exemple.fr"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-slate-700 mb-2">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.telephone ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500`}
                      placeholder="06 12 34 56 78"
                    />
                    {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>}
                    <p className="text-xs text-slate-500 mt-1">Format : 06 12 34 56 78 ou +33 6 12 34 56 78</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Entreprise */}
                  <div>
                    <label htmlFor="entreprise" className="block text-sm font-medium text-slate-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="entreprise"
                      name="entreprise"
                      value={formData.entreprise}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  {/* Fonction */}
                  <div>
                    <label htmlFor="fonction" className="block text-sm font-medium text-slate-700 mb-2">
                      Fonction
                    </label>
                    <select
                      id="fonction"
                      name="fonction"
                      value={formData.fonction}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="">Sélectionnez votre fonction</option>
                      <option value="dirigeant">Dirigeant d'entreprise</option>
                      <option value="chef-entreprise">Chef d'entreprise</option>
                      <option value="daf">Directeur Administratif et Financier</option>
                      <option value="cadre">Cadre supérieur</option>
                      <option value="profession-liberale">Profession libérale</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                {/* Sujet */}
                <div className="mb-6">
                  <label htmlFor="sujet" className="block text-sm font-medium text-slate-700 mb-2">
                    Sujet de votre demande <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.sujet ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="creation-holding">Création d'une holding</option>
                    <option value="apport-cession">Apport-cession</option>
                    <option value="gestion-patrimoine">Gestion de patrimoine</option>
                    <option value="transmission">Transmission d'entreprise</option>
                    <option value="optimisation-fiscale">Optimisation fiscale</option>
                    <option value="investissement">Stratégie d'investissement</option>
                    <option value="autre">Autre demande</option>
                  </select>
                  {errors.sujet && <p className="text-red-500 text-sm mt-1">{errors.sujet}</p>}
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Votre message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-slate-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500`}
                    placeholder="Décrivez votre projet ou votre demande..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
{/* RGPD */}
<div className="mb-6">
  <label className="flex items-start">
    <input
      type="checkbox"
      name="rgpd"
      checked={formData.rgpd}
      onChange={handleChange}
      className="mt-1 mr-3 w-4 h-4 text-amber-600 border-slate-300 rounded focus:ring-amber-500"
    />
    <span className="text-sm text-slate-600">
      J'accepte que mes données personnelles soient utilisées pour me recontacter dans le cadre de ma demande. 
      Vos données sont traitées conformément au RGPD et ne seront jamais partagées avec des tiers. 
      Pour en savoir plus, consultez notre{' '}
      <a 
        href="/politique-confidentialite" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-amber-600 hover:text-amber-700 underline font-medium"
      >
        politique de confidentialité
      </a>.
      <span className="text-red-500"> *</span>
    </span>
  </label>
  {errors.rgpd && <p className="text-red-500 text-sm mt-1">{errors.rgpd}</p>}
</div>
                

                {/* Bouton d'envoi */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 px-8 py-4 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition transform hover:scale-105 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer ma demande
                  </button>
                  
                   <a href="https://taap.it/i3gsEr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 transition text-center"
                  >
                    Ou prendre RDV directement
                  </a>
                </div>

                <p className="text-xs text-slate-500 mt-4 text-center">
                  Délai de réponse moyen : 24h ouvrées
                </p>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Section rassurante */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Pourquoi nous contacter ?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-bold text-slate-900 mb-2">Confidentialité</h3>
              <p className="text-slate-600 text-sm">Vos informations sont traitées en toute confidentialité et conformément au RGPD</p>
            </div>
            <div>
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-slate-900 mb-2">Réactivité</h3>
              <p className="text-slate-600 text-sm">Notre équipe vous répond sous 24h ouvrées maximum</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-slate-900 mb-2">Expertise</h3>
              <p className="text-slate-600 text-sm">Accompagnement personnalisé par des experts en gestion patrimoniale</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}