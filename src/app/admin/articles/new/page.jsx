'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import toast, { Toaster } from 'react-hot-toast'
import ArticleForm from '@/components/admin/ArticleForm'

export default function NewArticlePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(articleData) {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('articles')
        .insert([articleData])
        .select()
        .single()

      if (error) throw error

      toast.success('Article créé avec succès !')
      router.push('/admin/dashboard')
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="text-gray-600 hover:text-gray-900 mb-4"
          >
            ← Retour
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Nouvel Article</h1>
        </div>

        <ArticleForm onSubmit={handleSubmit} loading={loading} />
      </div>
    </div>
  )
}