'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import { Clock, User, Eye } from 'lucide-react'
import Link from 'next/link'

export default function BlogArticlesSection() {
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

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
        <p className="mt-4 text-slate-600 font-light">Chargement des articles...</p>
      </div>
    )
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12 bg-slate-50 rounded-lg border border-slate-200">
        <p className="text-slate-600 font-light">Aucun article publié pour le moment.</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}

function ArticleCard({ article }) {
  return (
    <Link href={`/blog/${article.slug}`} className="group block">
      <article className="bg-white border border-slate-200 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        {/* Image */}
        {article.image_url && (
          <div className="relative h-56 overflow-hidden bg-slate-100">
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow">
          {/* Catégorie */}
          {article.category && (
            <span className="inline-block px-3 py-1 text-xs font-light text-amber-600 bg-amber-50 border border-amber-100 rounded-sm mb-4 w-fit">
              {article.category}
            </span>
          )}

          {/* Titre */}
          <h3 className="text-xl font-light text-slate-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h3>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="text-slate-600 font-light leading-relaxed mb-4 line-clamp-3 flex-grow">
              {article.excerpt}
            </p>
          )}

          {/* Métadonnées */}
          <div className="flex items-center justify-between text-sm text-slate-500 font-light pt-4 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User size={14} />
                <span className="text-xs">{article.author || 'Florent C.'}</span>
              </div>
              
              {article.views > 0 && (
                <div className="flex items-center gap-1">
                  <Eye size={14} />
                  <span className="text-xs">{article.views}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-1">
              <Clock size={14} />
              <time dateTime={article.created_at} className="text-xs">
                {format(new Date(article.created_at), 'dd MMM yyyy', { locale: fr })}
              </time>
            </div>
          </div>

          {/* Tags (optionnel) */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
              {article.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-slate-50 text-slate-600 rounded-sm font-light"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}