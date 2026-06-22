import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SelectionProvider } from '@/components/selection-context';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { StorageLimitAlert } from '@/components/storage-limit-alert';
import { BackToTop } from '@/components/back-to-top';

export const viewport: Viewport = {
  themeColor: '#0a0c10',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Alkadi Gaming | Buy Video Games Easy, Cheap & Fast',
    template: '%s | Alkadi Gaming'
  },
  description: 'Explore Alkadi Gaming for the best deals on video games in Lebanon. Immersive catalog with rich media, trailers, and easy digital selection.',
  keywords: ['video games Lebanon', 'buy digital games', 'cheap games Lebanon', 'gaming catalog', 'Alkadi Gaming', 'PlayStation games Lebanon', 'PC games Lebanon', 'Xbox games Lebanon', 'gaming store Lebanon'],
  authors: [{ name: 'Alkadi Gaming' }],
  metadataBase: new URL('https://alkadigaming.com'), // Replace with actual domain when ready
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Alkadi Gaming | Premium Video Game Catalog',
    description: 'Discover your next favorite game. Browse our extensive library with trailers, screenshots, and unbeatable prices.',
    type: 'website',
    siteName: 'Alkadi Gaming',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alkadi Gaming | Buy Video Games Easy, Cheap & Fast',
    description: 'The ultimate destination for gamers in Lebanon. Browse our massive digital catalog.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
        
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Alkadi Gaming",
              "url": "https://alkadigaming.com",
              "logo": "https://alkadigaming.com/icon.png",
              "description": "Buy Video Games Easy, Cheap & Fast in Lebanon.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+961-000000",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen">
        <SelectionProvider>
          <TooltipProvider>
            {children}
            <StorageLimitAlert />
            <BackToTop />
            <Toaster />
          </TooltipProvider>
        </SelectionProvider>
      </body>
    </html>
  );
}
