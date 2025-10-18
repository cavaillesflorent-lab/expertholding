
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog ExpertHolding',
  description: 'Conseils en gestion patrimoniale et holdings',
}

export default function BlogLayout({ children }) {
  return (
    <>
      <Header currentPage="blog" />
      {children}
      <Footer currentPage="blog" />
    </>
  )
}
