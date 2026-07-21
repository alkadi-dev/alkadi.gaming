import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SelectionProvider } from '@/components/selection-context';
import { LanguageProvider } from '@/components/language-context';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { StorageLimitAlert } from '@/components/storage-limit-alert';
import { BackToTop } from '@/components/back-to-top';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  keywords: ['video games Lebanon', 'buy digital games', 'cheap games Lebanon', 'gaming catalog', 'Alkadi Gaming', 'pc games', 'PC games Lebanon', ' games Lebanon', 'gaming store Lebanon'],
  authors: [{ name: 'Alkadi Gaming' }],
  metadataBase: new URL('https://alkadigaming.store'), // Replace with actual domain when ready
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
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  manifest: '/manifest.json',
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&family=Noto+Sans+Arabic:wght@400;700&display=swap" rel="stylesheet" />
        
        {/* Manual fallback tags for guaranteed browser detection */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        
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
        <LanguageProvider>
          <SelectionProvider>
            <TooltipProvider>
              {children}
              <StorageLimitAlert />
              <BackToTop />
              <Toaster />
              <Analytics />
              <SpeedInsights />
            </TooltipProvider>
          </SelectionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
