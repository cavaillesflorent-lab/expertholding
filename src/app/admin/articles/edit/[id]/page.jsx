'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import toast, { Toaster } from 'react-hot-toast'
import ArticleForm from '@/components/admin/ArticleForm'

export default function EditArticlePage({ params }) {
  const router = useRouter()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(false)
  const [fetchLoading, setFetchLoading] = useState(true)

  useEffect(() => {
    fetchArticle()
  }, [params.id])

  async function fetchArticle() {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('id', params.id)
        .single()
      if (error) throw error
      setArticle(data)
    } catch (error) {
      toast.error('Article introuvable')
      router.push('/admin/dashboard')
    } finally {
      setFetchLoading(false)
    }
  }

  async function handleSubmit(articleData) {
    setLoading(true)
    try {
      const { error } = await supabase
        .from('articles')
        .update(articleData)
        .eq('id', params.id)
      if (error) throw error
      toast.success('Article mis à jour !')
      router.push('/admin/dashboard')
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (fetchLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <button onClick={() => router.back()} className="text-gray-600 hover:text-gray-900 mb-4">
          ← Retour
        </button>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Modifier l'Article</h1>
        <ArticleForm initialData={article} onSubmit={handleSubmit} loading={loading} isEdit />
      </div>
    </div>
  )
}
