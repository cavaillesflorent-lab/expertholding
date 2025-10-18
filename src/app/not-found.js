'EOF'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Page non trouvée | ExpertHolding',
}

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-light text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Page non trouvée</p>
          <Link href="/" className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700">
            Retour à l'accueil
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
EOF