import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

export default function ArticleCard({ article }) {
  return (
    <Link href={`/blog/${article.slug}`} className="group">
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {article.image_url && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={article.image_url}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="p-6">
          {/* Catégorie */}
          {article.category && (
            <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-600 bg-orange-100 rounded-full mb-3">
              {article.category}
            </span>
          )}

          {/* Titre */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="text-gray-600 mb-4 line-clamp-3">
              {article.excerpt}
            </p>
          )}

          {/* Métadonnées */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{article.author || 'Florent Cavailles'}</span>
            <time dateTime={article.created_at}>
              {format(new Date(article.created_at), 'dd MMMM yyyy', { locale: fr })}
            </time>
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {article.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}