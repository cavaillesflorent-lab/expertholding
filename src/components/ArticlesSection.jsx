'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function ArticlesSection() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles()
  }, [])

  async function fetchArticles() {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(3)

      if (error) throw error
      setArticles(data || [])
    } catch (error) {
      console.error('Erreur chargement articles:', error)
    } finally {
      setLoading(false)
    }
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
    return `${minutes} min`
  }

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-lg overflow-hidden animate-pulse">
            <div className="h-48 bg-slate-200"></div>
            <div className="p-6 space-y-3">
              <div className="h-4 bg-slate-200 rounded w-1/3"></div>
              <div className="h-6 bg-slate-200 rounded"></div>
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12 bg-slate-50 rounded-lg border border-slate-100">
        <p className="text-slate-600 font-light">Aucun article publié pour le moment.</p>
        <p className="text-slate-500 text-sm mt-2">Les derniers articles apparaîtront ici prochainement.</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {articles.map((article) => (
        <Link 
          key={article.id} 
          href={`/blog/${article.slug}`}
          className="group bg-white border border-slate-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          {/* Image de couverture */}
          <div className="relative h-48 overflow-hidden bg-slate-100">
            {article.cover_image ? (
              <img 
                src={article.cover_image} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-50 to-slate-50">
                <span className="text-4xl">{getCategoryLabel(article.category).split(' ')[0]}</span>
              </div>
            )}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-amber-600 text-xs font-light rounded-sm">
                {getCategoryLabel(article.category)}
              </span>
            </div>
          </div>
          
          {/* Contenu */}
          <div className="p-6">
            <h3 className="text-xl font-light text-slate-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
              {article.title}
            </h3>
            
            {article.excerpt && (
              <p className="text-slate-600 font-light text-sm mb-4 line-clamp-3">
                {article.excerpt}
              </p>
            )}
            
            <div className="flex items-center justify-between text-xs text-slate-500 font-light pt-4 border-t border-slate-100">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {formatDate(article.created_at)}
                </span>
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {estimateReadTime(article.content)}
                </span>
              </div>
            </div>
            
            <div className="mt-4">
              <span className="text-amber-600 text-sm font-light group-hover:underline inline-flex items-center">
                Lire l'article 
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}