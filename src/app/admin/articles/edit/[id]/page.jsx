'use client'

import { Toaster } from 'react-hot-toast'
import ArticleEditor from '@/components/admin/ArticleEditor'

export default function EditArticlePage({ params }) {
  return (
    <>
      <Toaster position="top-right" />
      <ArticleEditor articleId={params.id} />
    </>
  )
}