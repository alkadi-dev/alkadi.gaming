'use client';

import { use, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { MOCK_GAMES } from '@/app/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Sparkles, PlusCircle, CheckCircle2, HardDrive } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { refineGameDescription } from '@/ai/flows/refine-game-description';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';

export default function GameDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { toast } = useToast();
  const game = MOCK_GAMES.find((g) => g.id === id);
  const [refinedDescription, setRefinedDescription] = useState<string | null>(null);
  const [isRefining, setIsRefining] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

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

  const handleAddToSelection = () => {
    setIsAdded(true);
    toast({
      title: "Game Added!",
      description: `${game?.title} has been added to your selection.`,
    });
    // In a real app, this would update a cart or global state
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
      <div className="relative h-[65vh] w-full">
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
            className="bg-background/20 backdrop-blur-md hover:bg-background/40 text-white border border-white/10 rounded-full"
            onClick={() => router.push('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Catalog
          </Button>

          <Button
            variant="default"
            size="lg"
            className={`rounded-full transition-all duration-300 font-bold shadow-2xl ${
              isAdded ? 'bg-green-600 hover:bg-green-700' : 'bg-primary hover:scale-105 active:scale-95'
            }`}
            onClick={handleAddToSelection}
          >
            {isAdded ? (
              <><CheckCircle2 className="mr-2 h-5 w-5" /> Added to Selection</>
            ) : (
              <><PlusCircle className="mr-2 h-5 w-5" /> Add to Selection</>
            )}
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge className="bg-primary text-white px-4 py-1 text-sm">{game.category}</Badge>
            <Badge variant="secondary" className="bg-white/10 backdrop-blur-md text-white border-white/20 px-4 py-1 text-sm flex items-center gap-1">
              <HardDrive className="h-4 w-4" /> {game.size}
            </Badge>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold font-headline mb-4 tracking-tighter">
            {game.title}
          </h1>
        </div>
      </div>

      <main className="container mx-auto px-4 mt-8 max-w-5xl">
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

          {/* Shorts Section */}
          {game.shorts && game.shorts.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold font-headline mb-6">Shorts Video</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {game.shorts.map((url, index) => (
                  <div key={index} className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-white/5 shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <iframe
                      src={url}
                      title={`${game.title} Short ${index + 1}`}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
