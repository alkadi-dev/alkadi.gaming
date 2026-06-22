import type {Metadata} from 'next';
import './globals.css';
import { SelectionProvider } from '@/components/selection-context';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { StorageLimitAlert } from '@/components/storage-limit-alert';
import { BackToTop } from '@/components/back-to-top';

export const metadata: Metadata = {
  title: 'Alkadi Gaming',
  description: 'Explore an immersive catalog of games with rich media.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/icon.png',
      },
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
