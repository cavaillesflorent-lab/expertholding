import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export function useArticles(limit = null, published = true) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchArticles()
  }, [limit, published])

  async function fetchArticles() {
    try {
      setLoading(true)
      let query = supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false })

      if (published) {
        query = query.eq('published', true)
      }

      if (limit) {
        query = query.limit(limit)
      }

      const { data, error } = await query

      if (error) throw error
      setArticles(data || [])
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { articles, loading, error, refetch: fetchArticles }
}

export function useArticle(slug) {
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (slug) {
      fetchArticle()
    }
  }, [slug])

  async function fetchArticle() {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .single()

      if (error) throw error

      // Incrémenter les vues
      await supabase
        .from('articles')
        .update({ views: (data.views || 0) + 1 })
        .eq('id', data.id)

      setArticle(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { article, loading, error }
}