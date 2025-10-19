import { notFound } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import ArticleContent from '@/components/ArticleContent'

export async function generateMetadata({ params }) {
  const { slug } = params
  
  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!article) {
    return {
      title: 'Article non trouvé',
    }
  }

  return {
    title: article.meta_title || article.title,
    description: article.meta_description || article.excerpt,
    keywords: article.keywords,
    openGraph: {
      title: article.meta_title || article.title,
      description: article.meta_description || article.excerpt,
      images: article.cover_image ? [article.cover_image] : [],
    },
  }
}

export default async function ArticlePage({ params }) {
  const { slug } = params

  const { data: article, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error || !article) {
    notFound()
  }

  const getCategoryLabel = (category) => {
    const categories = {
      'holding': '🏢 Holding',
      'fiscalite': '💰 Fiscalité',
      'transmission': '🤝 Transmission',
      'patrimoine': '💎 Patrimoine',
      'juridique': '⚖️ Juridique'
    }
    return categories[category] || category
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    })
  }

  const estimateReadTime = (content) => {
    const wordsPerMinute = 200
    const wordCount = content.trim().split(/\s+/).length
    const minutes = Math.ceil(wordCount / wordsPerMinute)
    return `${minutes} min de lecture`
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero avec image de couverture */}
      {article.cover_image && (
        <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
          <img 
            src={article.cover_image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
        </div>
      )}

      {/* Contenu de l'article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête article */}
        <div className={`${article.cover_image ? '-mt-32' : 'pt-32'} relative z-10 mb-12`}>
          <Link 
            href="/"
            className="inline-flex items-center text-slate-600 hover:text-amber-600 transition-colors mb-6 font-light"
          >
            <ArrowLeft size={18} className="mr-2" />
            Retour à l'accueil
          </Link>

          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-sm font-light">
              {getCategoryLabel(article.category)}
            </span>
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 leading-tight ${
            article.cover_image ? 'text-white' : 'text-slate-900'
          }`}>
            {article.title}
          </h1>

          {article.excerpt && (
            <p className={`text-xl md:text-2xl font-light leading-relaxed mb-8 ${
              article.cover_image ? 'text-slate-200' : 'text-slate-600'
            }`}>
              {article.excerpt}
            </p>
          )}

          <div className={`flex items-center space-x-6 text-sm font-light ${
            article.cover_image ? 'text-slate-300' : 'text-slate-600'
          }`}>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              {formatDate(article.created_at)}
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              {estimateReadTime(article.content)}
            </div>
          </div>
        </div>

        {/* Contenu de l'article avec styles */}
        <div className="mb-16 bg-white">
          <ArticleContent content={article.content} />
        </div>

        {/* Section auteur */}
        <div className="border-t border-slate-200 pt-12 mb-16 bg-white">
          <div className="flex items-start space-x-6">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-slate-100">
              <img 
                src="/images/pages/expertise/Florent.jpg" 
                alt="Florent Cavailles"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-light text-slate-900 mb-2">Florent Cavailles</h3>
              <p className="text-amber-600 font-light mb-3">Expert en Structuration de Holding</p>
              <p className="text-slate-600 font-light leading-relaxed">
                Ancien militaire reconverti dans la gestion patrimoniale, j'accompagne les dirigeants 
                dans la structuration et l'optimisation de leurs holdings. Mon approche combine rigueur 
                opérationnelle et vision stratégique à long terme.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-8 md:p-12 text-center mb-16">
          <h2 className="text-3xl font-light text-white mb-4">
            Besoin d'un accompagnement personnalisé ?
          </h2>
          <p className="text-xl text-slate-300 font-light mb-8">
            Discutons de votre projet patrimonial lors d'un premier rendez-vous
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://taap.it/i3gsEr"
              className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-base font-light transition-all hover:shadow-xl"
            >
              Prendre rendez-vous
            </a>
            <a 
              href="tel:0607963135"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 text-base font-light backdrop-blur-sm transition-all"
            >
              06 07 96 31 35
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}