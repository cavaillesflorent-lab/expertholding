//import { supabase } from '@/lib/supabase'

export async function generateMetadata({ params }) {
  try {
    const { data: article } = await supabase
      .from('articles')
      .select('title, excerpt, image_url, author, created_at, tags')
      .eq('slug', params.slug)
      .eq('published', true)
      .single()

    if (!article) {
      return { title: 'Article non trouvé | ExpertHolding' }
    }

    return {
      title: `${article.title} | ExpertHolding`,
      description: article.excerpt || article.title.substring(0, 160),
      keywords: article.tags?.join(', '),
      openGraph: {
        title: article.title,
        description: article.excerpt,
        images: article.image_url ? [article.image_url] : [],
        type: 'article',
        publishedTime: article.created_at,
      },
    }
  } catch (error) {
    return { title: 'ExpertHolding Blog' }
  }
}

export default function ArticleLayout({ children }) {
  return <>{children}</>
}
