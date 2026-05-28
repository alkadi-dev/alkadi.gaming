'use client';

import { use, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { MOCK_GAMES } from '@/app/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Sparkles, PlusCircle, CheckCircle2, HardDrive, Trash2 } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { refineGameDescription } from '@/ai/flows/refine-game-description';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { useSelection } from '@/components/selection-context';
import { CheckoutSheet } from '@/components/checkout-sheet';

export default function GameDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { toast } = useToast();
  const { addToSelection, removeFromSelection, isInSelection } = useSelection();
  const game = MOCK_GAMES.find((g) => g.id === id);
  const [refinedDescription, setRefinedDescription] = useState<string | null>(null);
  const [isRefining, setIsRefining] = useState(false);

  const isAdded = game ? isInSelection(game.id) : false;

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

  const handleToggleSelection = () => {
    if (!game) return;
    if (isAdded) {
      removeFromSelection(game.id);
      toast({
        title: "Removed from Selection",
        description: `${game.title} has been removed.`,
      });
    } else {
      addToSelection(game.id);
      toast({
        title: "Game Added!",
        description: `${game.title} has been added to your selection.`,
      });
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
      {/* Fixed Header Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="container mx-auto px-4 h-20 flex justify-between items-center">
          <Button
            variant="ghost"
            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full transition-all"
            onClick={() => router.push('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> <span className="hidden sm:inline">Back to Catalog</span>
          </Button>

          <div className="flex items-center gap-3">
            <CheckoutSheet />
            <Button
              variant="default"
              size="lg"
              className={`rounded-full transition-all duration-300 font-bold shadow-2xl px-8 ${
                isAdded ? 'bg-green-600 hover:bg-green-700' : 'bg-primary hover:scale-105 active:scale-95'
              }`}
              onClick={handleToggleSelection}
            >
              {isAdded ? (
                <><CheckCircle2 className="mr-2 h-5 w-5" /> Added</>
              ) : (
                <><PlusCircle className="mr-2 h-5 w-5" /> Add to Selection</>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[70vh] w-full mt-0">
        <Image
          src={game.images[0] || game.thumbnail}
          alt={game.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
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

      <main className="container mx-auto px-4 mt-12 max-w-5xl">
        <div className="space-y-16">
          {/* Description Section with AI Enhancement */}
          <section className="bg-secondary/30 rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold font-headline">The Story</h2>
              {isRefining ? (
                <div className="flex items-center text-xs text-primary animate-pulse">
                  <Sparkles className="mr-1 h-3 w-3" /> Enhancing with AI...
                </div>
              ) : (
                <Badge variant="outline" className="text-xs border-primary/30 text-primary px-3 py-1">
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
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                {refinedDescription || game.description}
              </p>
            )}
          </section>

          {/* Media Carousel */}
          <section>
            <h2 className="text-3xl font-bold font-headline mb-8">Gallery</h2>
            <Carousel className="w-full">
              <CarouselContent>
                {game.images.map((img, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 shadow-2xl group">
                      <Image
                        src={img}
                        alt={`${game.title} Screenshot ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-3 mt-6">
                <CarouselPrevious className="relative translate-y-0 left-0 bg-white/5 border-white/10 hover:bg-white/20" />
                <CarouselNext className="relative translate-y-0 right-0 bg-white/5 border-white/10 hover:bg-white/20" />
              </div>
            </Carousel>
          </section>

          {/* Video Section */}
          <section>
            <h2 className="text-3xl font-bold font-headline mb-8">Cinematic Trailer</h2>
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/5 ring-1 ring-white/10">
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
              <h2 className="text-3xl font-bold font-headline mb-8">Moments</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {game.shorts.map((url, index) => (
                  <div key={index} className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-black border border-white/5 shadow-2xl transition-all duration-500 hover:scale-[1.05] hover:-translate-y-2 ring-1 ring-white/10">
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
