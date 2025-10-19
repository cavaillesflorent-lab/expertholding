import './globals.css'

export const metadata = {
  title: 'ExpertHolding.fr - Expert en Structuration de Holdings | Toulouse',
  description: 'Accompagnement des dirigeants dans la création, gestion et transmission de holdings. Optimisation fiscale, régime mère-fille, pacte Dutreil. Expert patrimonial à Toulouse.',
  keywords: 'holding, chef d\'entreprise, optimisation fiscale, transmission entreprise, régime mère-fille, pacte Dutreil, Toulouse, expert patrimonial',
  authors: [{ name: 'Florent Cavailles' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'ExpertHolding.fr - Expert en Structuration de Holdings',
    description: 'Optimisation fiscale, transmission sécurisée et protection patrimoniale pour chefs d\'entreprise',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://expertholding.fr',
    siteName: 'ExpertHolding.fr',
    images: [
      {
        url: 'https://expertholding.fr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ExpertHolding.fr - Expert en Holdings Patrimoniales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExpertHolding.fr',
    description: 'Expert en Holdings Patrimoniales',
    images: ['https://expertholding.fr/og-image.jpg'],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Plausible Analytics - DANS LE HEAD */}
        <script defer data-domain="expertholding.fr" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}