import './globals.css'

export const metadata = {
  title: 'Keith Katale — Builder',
  description: 'Product-first builder. MVPs, AI tooling, and the messy work between idea and paying customer.',
  metadataBase: new URL('https://keith.atomiclabs.space'),
  openGraph: {
    title: 'Keith Katale — Builder',
    description: 'Product-first builder. MVPs, AI tooling, and the messy work between idea and paying customer.',
    url: 'https://keith.atomiclabs.space',
    siteName: 'Keith Katale',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keith Katale — Builder',
    description: 'Product-first builder. MVPs, AI tooling, and the messy work between idea and paying customer.',
    creator: '@keithkatale',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
