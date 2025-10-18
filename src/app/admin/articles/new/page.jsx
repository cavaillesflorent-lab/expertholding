'use client'

import { Toaster } from 'react-hot-toast'
import ArticleEditor from '@/components/admin/ArticleEditor'

export default function NewArticlePage() {
  return (
    <>
      <Toaster position="top-right" />
      <ArticleEditor />
    </>
  )
}