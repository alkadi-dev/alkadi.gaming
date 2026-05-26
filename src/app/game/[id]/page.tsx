'use client';

import { use, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { MOCK_GAMES } from '@/app/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Sparkles, Share2, Heart } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { refineGameDescription } from '@/ai/flows/refine-game-description';
import { Skeleton } from '@/components/ui/skeleton';

export default function GameDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const game = MOCK_GAMES.find((g) => g.id === id);
  const [refinedDescription, setRefinedDescription] = useState<string | null>(null);
  const [isRefining, setIsRefining] = useState(false);

  useEffect(() => {
    if (game && !refinedDescription) {
      handleRefine();
    }
  }, [game]);

  const handleRefine = async () => {
    if (!game) return;
    setIsRefining(true);
    try {
      const result = await refineGameDescription({ originalDescription: game.description });
      setRefinedDescription(result.refinedDescription);
    } catch (error) {
      console.error('Failed to refine description:', error);
      setRefinedDescription(game.description);
    } finally {
      setIsRefining(false);
    }
  };

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Game Not Found</h1>
          <Button onClick={() => router.push('/')}>Return to Catalog</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Hero / Header Navigation */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={game.images[0] || game.thumbnail}
          alt={game.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
          <Button
            variant="ghost"
            className="bg-background/20 backdrop-blur-md hover:bg-background/40 text-white border border-white/10"
            onClick={() => router.push('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Catalog
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="bg-background/20 backdrop-blur-md border border-white/10 rounded-full">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-background/20 backdrop-blur-md border border-white/10 rounded-full">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
          <Badge className="bg-primary text-white mb-4 px-4 py-1 text-sm">{game.category}</Badge>
          <h1 className="text-5xl md:text-7xl font-bold font-headline mb-4 tracking-tighter">
            {game.title}
          </h1>
        </div>
      </div>

      <main className="container mx-auto px-4 mt-8 max-w-5xl">
        {/* Main Content Area */}
        <div className="space-y-12">
          {/* Description Section with AI Enhancement */}
          <section className="bg-secondary/30 rounded-2xl p-8 border border-white/5">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold font-headline">The Story</h2>
              {isRefining ? (
                <div className="flex items-center text-xs text-primary animate-pulse">
                  <Sparkles className="mr-1 h-3 w-3" /> Enhancing with AI...
                </div>
              ) : (
                <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                  <Sparkles className="mr-1 h-3 w-3" /> AI Enhanced
                </Badge>
              )}
            </div>

            {isRefining ? (
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-[95%]" />
                <Skeleton className="h-4 w-[85%]" />
              </div>
            ) : (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {refinedDescription || game.description}
              </p>
            )}
            
            {!isRefining && !refinedDescription && (
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                {game.description}
              </p>
            )}
          </section>

          {/* Media Carousel */}
          <section>
            <h2 className="text-2xl font-bold font-headline mb-6">Gallery</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {game.images.map((img, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/5">
                      <Image
                        src={img}
                        alt={`${game.title} Screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-4">
                <CarouselPrevious className="relative translate-y-0 left-0" />
                <CarouselNext className="relative translate-y-0 right-0" />
              </div>
            </Carousel>
          </section>

          {/* Video Section */}
          <section>
            <h2 className="text-2xl font-bold font-headline mb-6">Cinematic Trailer</h2>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/5">
              <iframe
                src={game.videoUrl}
                title={`${game.title} Trailer`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
