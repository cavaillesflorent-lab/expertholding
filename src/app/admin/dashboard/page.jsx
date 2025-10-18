cat > src/app/admin/dashboard/page.jsx << 'EOF'
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import toast, { Toaster } from 'react-hot-toast'

export default function AdminDashboard() {
  const router = useRouter()
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    checkAuth()
  }, [])

  async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      router.push('/admin/login')
      return
    }
    setUser(session.user)
    fetchArticles()
  }

  async function fetchArticles() {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false })
      if (error) throw error
      setArticles(data || [])
    } catch (error) {
      toast.error('Erreur chargement')
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(id) {
    if (!confirm('Supprimer cet article ?')) return
    try {
      const { error } = await supabase.from('articles').delete().eq('id', id)
      if (error) throw error
      toast.success('Supprimé')
      fetchArticles()
    } catch (error) {
      toast.error('Erreur')
    }
  }

  async function handleTogglePublish(article) {
    try {
      const { error } = await supabase
        .from('articles')
        .update({ published: !article.published })
        .eq('id', article.id)
      if (error) throw error
      toast.success(article.published ? 'Dépublié' : 'Publié')
      fetchArticles()
    } catch (error) {
      toast.error('Erreur')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard Admin</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{user?.email}</span>
            <button onClick={() => supabase.auth.signOut().then(() => router.push('/admin/login'))}>
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between">
          <h2 className="text-xl font-bold">Articles ({articles.length})</h2>
          <Link href="/admin/articles/new" className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700">
            + Nouvel Article
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Titre</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {articles.map((a) => (
                <tr key={a.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium">{a.title}</div>
                    <div className="text-sm text-gray-500">{a.slug}</div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleTogglePublish(a)}
                      className={`px-3 py-1 text-xs rounded-full ${
                        a.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {a.published ? 'Publié' : 'Brouillon'}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {format(new Date(a.created_at), 'dd/MM/yyyy', { locale: fr })}
                  </td>
                  <td className="px-6 py-4 text-right text-sm space-x-2">
                    <Link href={`/blog/${a.slug}`} target="_blank" className="text-blue-600">Voir</Link>
                    <Link href={`/admin/articles/edit/${a.id}`} className="text-amber-600">Modifier</Link>
                    <button onClick={() => handleDelete(a.id)} className="text-red-600">Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {articles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Aucun article</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
EOF