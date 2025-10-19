'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { Calendar, Clock, Search, Filter, ChevronRight } from 'lucide-react'

export default function BlogPage() {
  const [articles, setArticles] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { value: 'all', label: 'Tous les articles', emoji: '📚' },
    { value: 'holding', label: 'Holding', emoji: '🏢' },
    { value: 'fiscalite', label: 'Fiscalité', emoji: '💰' },
    { value: 'transmission', label: 'Transmission', emoji: '🤝' },
    { value: 'patrimoine', label: 'Patrimoine', emoji: '💎' },
    { value: 'juridique', label: 'Juridique', emoji: '⚖️' }
  ]

  useEffect(() => {
    fetchArticles()
  }, [])

  useEffect(() => {
    filterArticles()
  }, [articles, searchTerm, selectedCategory])

  async function fetchArticles() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })

      if (error) throw error
      setArticles(data || [])
    } catch (error) {
      console.error('Erreur chargement articles:', error)
    } finally {
      setLoading(false)
    }
  }

  function filterArticles() {
    let filtered = articles

    // Filtrer par catégorie
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => article.category === selectedCategory)
    }

    // Filtrer par recherche
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredArticles(filtered)
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
    if (!content) return '5 min'
    const wordsPerMinute = 200
    const wordCount = content.trim().split(/\s+/).length
    const minutes = Math.ceil(wordCount / wordsPerMinute)
    return `${minutes} min`
  }

  const getCategoryLabel = (category) => {
    const cat = categories.find(c => c.value === category)
    return cat ? `${cat.emoji} ${cat.label}` : category
  }

  return (
    <>
      <Header currentPage="blog" />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24 lg:py-32">
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-blog" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M0 32V0h32" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-blog)"/>
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Fil d'Ariane */}
            <div className="flex items-center space-x-2 text-sm text-slate-300 mb-8">
              <Link href="/" className="hover:text-white transition">Accueil</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Actualités</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 leading-tight">
              Actualités & Conseils
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl leading-relaxed">
              Analyses, décryptages et stratégies pour optimiser votre patrimoine et maîtriser votre holding
            </p>
          </div>
        </section>

        {/* Filtres et recherche */}
        <section className="sticky top-20 z-40 bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Recherche */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent font-light"
                />
              </div>

              {/* Filtres catégories */}
              <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap font-light transition-all ${
                      selectedCategory === cat.value
                        ? 'bg-amber-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat.emoji} {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Compteur résultats */}
            <div className="mt-4 text-sm text-slate-600 font-light">
              {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} trouvé{filteredArticles.length > 1 ? 's' : ''}
            </div>
          </div>
        </section>

        {/* Liste des articles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
              </div>
            ) : filteredArticles.length === 0 ? (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-light text-slate-900 mb-2">Aucun article trouvé</h3>
                <p className="text-slate-600 font-light">
                  Essayez de modifier vos critères de recherche
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/blog/${article.slug}`}
                    className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image */}
                    {article.cover_image && (
                      <div className="relative h-48 overflow-hidden bg-slate-100">
                        <img
                          src={article.cover_image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-sm rounded-full font-light">
                            {getCategoryLabel(article.category)}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Contenu */}
                    <div className="p-6">
                      <h3 className="text-xl font-light text-slate-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors">
                        {article.title}
                      </h3>

                      {article.excerpt && (
                        <p className="text-slate-600 font-light text-sm mb-4 line-clamp-3 leading-relaxed">
                          {article.excerpt}
                        </p>
                      )}

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-slate-500 font-light">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {formatDate(article.created_at)}
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {estimateReadTime(article.content)}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Newsletter */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">
              Ne manquez aucune actualité
            </h2>
            <p className="text-xl text-slate-600 font-light mb-8">
              Recevez nos derniers articles et conseils directement dans votre boîte mail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent font-light"
              />
              <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors font-light">
                S'inscrire
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-4 font-light">
              Pas de spam, désinscription possible à tout moment
            </p>
          </div>
        </section>

        {/* CTA Contact */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Une question sur votre situation patrimoniale ?
            </h2>
            <p className="text-xl text-slate-300 font-light mb-8">
              Discutons de votre projet lors d'un premier rendez-vous
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
        </section>
      </div>

      <Footer currentPage="blog" />
    </>
  )
}