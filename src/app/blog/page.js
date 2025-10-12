import { supabase } from '@/lib/supabase'

export const revalidate = 60 // Revalider chaque minute

export default async function BlogPage() {
  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <h1>Blog ExpertHolding</h1>
      {/* Affichage des articles */}
    </div>
  )
}