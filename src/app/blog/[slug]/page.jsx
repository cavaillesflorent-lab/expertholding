'EOF'
'use client'

import { useArticle } from '@/hooks/useArticles'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

export default function ArticlePage({ params }) {
  const { article, loading, error } = useArticle(params.slug)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-light text-slate-900 mb-4">Article non trouvé</h1>
          <Link href="/blog" className="text-amber-600 hover:underline">
            ← Retour au blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header currentPage="blog" />
      <article className="min-h-screen bg-white">
        {article.image_url && (
          <div className="relative h-[400px] w-full">
            <img src={article.image_url} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        <div className="container mx-auto px-4 -mt-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8 text-sm font-light">
              <Link href="/" className="text-white hover:underline">Accueil</Link>
              <span className="text-white mx-2">/</span>
              <Link href="/blog" className="text-white hover:underline">Blog</Link>
              <span className="text-white mx-2">/</span>
              <span className="text-white">{article.title}</span>
            </nav>

            <div className="bg-white rounded-sm shadow-xl p-8 md:p-12 mb-8">
              {article.category && (
                <span className="inline-block px-3 py-1 text-sm font-light text-amber-600 bg-amber-50 border border-amber-100 rounded-sm mb-4">
                  {article.category}
                </span>
              )}

              <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-slate-600 font-light mb-6 pb-6 border-b">
                <span>{article.author || 'Florent Cavailles'}</span>
                <span>•</span>
                <time dateTime={article.created_at}>
                  {format(new Date(article.created_at), 'dd MMMM yyyy', { locale: fr })}
                </time>
                {article.views > 0 && (
                  <>
                    <span>•</span>
                    <span>{article.views} vues</span>
                  </>
                )}
              </div>

              {article.excerpt && (
                <p className="text-xl text-slate-700 leading-relaxed mb-8 font-light">
                  {article.excerpt}
                </p>
              )}

              <div className="prose prose-lg max-w-none prose-headings:font-light prose-p:font-light">
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                  {article.content}
                </ReactMarkdown>
              </div>

              {article.tags && article.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-sm font-light mb-3">Tags :</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 text-sm bg-slate-50 text-slate-700 rounded-sm border">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-sm shadow-xl p-8 text-white text-center mb-8">
              <h3 className="text-2xl font-light mb-4">Valorisez Votre Entreprise Gratuitement</h3>
              <p className="text-lg opacity-90 mb-6 font-light">
                Découvrez combien vaut votre entreprise en 8 minutes
              </p>
              <Link
                href="/gerer-holding/valoriser-entreprise"
                className="inline-block px-8 py-3 bg-white text-amber-600 font-light rounded-sm hover:bg-slate-50"
              >
                Faire Mon Évaluation →
              </Link>
            </div>

            <div className="py-8">
              <Link href="/blog" className="text-amber-600 hover:underline font-light">
                ← Retour au blog
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer currentPage="blog" />
    </>
  )
}
EOF