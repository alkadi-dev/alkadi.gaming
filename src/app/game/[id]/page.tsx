import { Metadata } from 'next';
import { MOCK_GAMES } from '@/app/lib/mock-data';
import GameClient from './game-client';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const game = MOCK_GAMES.find((g) => g.id === id);
  
  if (!game) {
    return {
      title: 'Game Not Found | Alkadi Gaming',
    };
  }

  const cleanDescription = game.description.substring(0, 160).replace(/\r?\n|\r/g, " ");

  return {
    title: game.title,
    description: cleanDescription,
    openGraph: {
      title: `${game.title} | Alkadi Gaming Catalog`,
      description: cleanDescription,
      images: [game.thumbnail],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: game.title,
      description: cleanDescription,
      images: [game.thumbnail],
    },
  };
}

export default async function GameDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const game = MOCK_GAMES.find((g) => g.id === id);
  
  if (!game) {
    notFound();
  }

  return (
    <>
      {/* Schema.org markup for Game */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": game.title,
            "applicationCategory": "Game",
            "operatingSystem": "Gaming Consoles, PC",
            "description": game.description,
            "image": game.thumbnail,
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "USD",
              "price": "Check for Price"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150"
            }
          })
        }}
      />
      <GameClient params={params} />
    </>
  );
}
