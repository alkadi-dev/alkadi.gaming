'use client';

import { use, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { MOCK_GAMES } from '@/app/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Sparkles, PlusCircle, CheckCircle2, HardDrive, ImageOff, Calendar, Languages } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { refineGameDescription } from '@/ai/flows/refine-game-description';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { useSelection } from '@/components/selection-context';
import { useLanguage } from '@/components/language-context';
import { CheckoutSheet } from '@/components/checkout-sheet';
import { cn } from '@/lib/utils';

function RevealSection({ children, className }: { children: React.ReactNode, className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(entry.target);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={cn(
        "transition-all duration-1000 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        className
      )}
    >
      {children}
    </div>
  );
}

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full h-8 px-2 sm:px-3 text-xs flex items-center gap-1.5"
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
    >
      <Languages className="h-3.5 w-3.5" />
      <span className="font-bold">{language === 'en' ? 'AR' : 'EN'}</span>
    </Button>
  );
}

export default function GameClient({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { toast } = useToast();
  const { addToSelection, removeFromSelection, isInSelection, isOverLimit, totalSizeNum, currentCapacity } = useSelection();
  const { t, isRTL } = useLanguage();
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
        title: t('toast.removed'),
        description: `${game.title} has been removed.`,
      });
    } else {
      if (isOverLimit) {
        toast({
          variant: "destructive",
          title: t('toast.storageLimit'),
          description: t('toast.storageLimitDesc'),
        });
        return;
      }
      addToSelection(game.id);
      toast({
        title: t('toast.added'),
        description: `${game.title} has been added to your selection.`,
      });
    }
  };

  const handleBackToCatalog = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-6">
          <h1 className="text-4xl font-bold mb-4">{t('game.notfound')}</h1>
          <Button onClick={() => router.push('/')}>{t('game.return')}</Button>
        </div>
      </div>
    );
  }

  const heroImage = (game.images && game.images[0] && game.images[0].trim() !== '') 
    ? game.images[0] 
    : (game.thumbnail && game.thumbnail.trim() !== '') ? game.thumbnail : null;

  return (
    <div className="min-h-screen pb-20">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center gap-2" dir="ltr">
          <Button
            variant="ghost"
            size="sm"
            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full h-8 px-2 sm:px-3 text-xs"
            onClick={handleBackToCatalog}
          >
            {isRTL ? (
              <><span className="hidden sm:inline">{t('nav.catalog')}</span> <ArrowRight className="ml-1 sm:ml-1.5 h-3.5 w-3.5" /></>
            ) : (
              <><ArrowLeft className="mr-1 sm:mr-1.5 h-3.5 w-3.5" /> <span className="hidden sm:inline">{t('nav.catalog')}</span></>
            )}
          </Button>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <LanguageSwitcher />
             <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 transition-all hover:bg-white/10">
              <HardDrive className="h-3 sm:h-3.5 w-3 sm:w-3.5 text-primary" />
              <div className="text-[9px] sm:text-[10px] font-bold tracking-tight whitespace-nowrap">
                <span className={cn(totalSizeNum > currentCapacity ? "text-destructive" : "text-white")}>
                  {totalSizeNum.toFixed(0)}
                </span>
                <span className="text-muted-foreground mx-0.5">/</span>
                <span className="text-muted-foreground">{currentCapacity} GB</span>
              </div>
            </div>
            <CheckoutSheet />
            <Button
              variant="default"
              size="sm"
              disabled={!isAdded && isOverLimit}
              className={cn(
                "rounded-full transition-all duration-300 font-bold shadow-2xl h-8 px-3 sm:px-4 text-[10px] sm:text-xs",
                isAdded 
                  ? 'bg-primary hover:bg-primary/90' 
                  : isOverLimit
                    ? 'bg-primary/20 cursor-not-allowed opacity-50'
                    : 'bg-white/10 hover:bg-white/20 border border-white/10'
              )}
              onClick={handleToggleSelection}
            >
              {isAdded ? (
                <><CheckCircle2 className={cn("h-3 w-3 sm:h-3.5 sm:w-3.5", isRTL ? "ml-1 sm:ml-1.5" : "mr-1 sm:mr-1.5")} /> {t('game.added')}</>
              ) : (
                <><PlusCircle className={cn("h-3 w-3 sm:h-3.5 sm:w-3.5", isRTL ? "ml-1 sm:ml-1.5" : "mr-1 sm:mr-1.5")} /> {t('game.add')}</>
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="relative h-[60vh] w-full mt-0 pt-16 sm:pt-0">
        {heroImage ? (
          <Image
            src={heroImage}
            alt={game.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-secondary flex flex-col items-center justify-center gap-4">
            <ImageOff className="w-16 h-16 text-muted-foreground/20" />
            <span className="text-sm text-muted-foreground/40 font-bold uppercase tracking-widest">Image Unavailable</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 container mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="secondary" className="bg-white/10 backdrop-blur-md text-white border-white/20 px-4 py-1.5 text-sm flex items-center gap-1 font-bold">
              <Calendar className="h-3.5 w-3.5" /> {game.releaseYear}
            </Badge>
            {game.categories.map((cat, i) => (
              <Badge key={i} className="bg-primary text-white px-4 py-1.5 text-sm uppercase tracking-wider font-bold shadow-2xl">
                {t(`cat.${cat}`)}
              </Badge>
            ))}
            <Badge variant="secondary" className="bg-white/10 backdrop-blur-md text-white border-white/20 px-4 py-1.5 text-sm flex items-center gap-1 font-bold">
              <HardDrive className="h-3.5 w-3.5" /> {game.size}
            </Badge>
          </div>
          <h1 className="text-3xl md:text-7xl font-bold font-headline tracking-tighter leading-none" dir="ltr">
            {game.title}
          </h1>
        </div>
      </div>

      <main className="container mx-auto px-4 mt-8 max-w-5xl">
        <div className="space-y-10">
          <RevealSection>
            <section className="bg-secondary/20 rounded-3xl p-6 md:p-10 border border-white/5 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold font-headline uppercase tracking-tight">{t('game.story')}</h2>
                {isRefining ? (
                  <div className="flex items-center text-[10px] text-primary animate-pulse font-semibold">
                    <Sparkles className={cn("h-3 w-3", isRTL ? "ml-1" : "mr-1")} /> {t('game.refining')}
                  </div>
                ) : (
                  <Badge variant="outline" className="text-[9px] border-primary/30 text-primary px-2 py-0 uppercase font-bold">
                    <Sparkles className={cn("h-3 w-3", isRTL ? "ml-1" : "mr-1")} /> {t('game.aiEnhanced')}
                  </Badge>
                )}
              </div>

              {isRefining ? (
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[90%]" />
                  <Skeleton className="h-4 w-[95%]" />
                </div>
              ) : (
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                  {refinedDescription || game.description}
                </p>
              )}
            </section>
          </RevealSection>

          {game.images && game.images.filter(img => img && img.trim() !== '').length > 0 && (
            <RevealSection>
              <section>
                <h2 className="text-xl font-bold font-headline mb-6 uppercase tracking-tight">{t('game.gallery')}</h2>
                <Carousel className="w-full">
                  <CarouselContent>
                    {game.images.filter(img => img && img.trim() !== '').map((img, index) => (
                      <CarouselItem key={index} className="md:basis-1/2">
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
                  <div className={cn("flex gap-2 mt-4", isRTL ? "justify-start" : "justify-end")}>
                    <CarouselPrevious className="relative translate-y-0 left-0 bg-white/5 border-white/10 hover:bg-white/20 h-9 w-9" />
                    <CarouselNext className="relative translate-y-0 right-0 bg-white/5 border-white/10 hover:bg-white/20 h-9 w-9" />
                  </div>
                </Carousel>
              </section>
            </RevealSection>
          )}

          <RevealSection>
            <section>
              <h2 className="text-xl font-bold font-headline mb-6 uppercase tracking-tight">{t('game.trailer')}</h2>
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
          </RevealSection>

          {game.shorts && game.shorts.length > 0 && (
            <RevealSection>
              <section>
                <h2 className="text-xl font-bold font-headline mb-6 uppercase tracking-tight">{t('game.moments')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {game.shorts.map((url, index) => (
                    <div key={index} className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-black border border-white/5 shadow-2xl transition-all duration-500 hover:scale-[1.02] ring-1 ring-white/10">
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
            </RevealSection>
          )}
        </div>
      </main>
    </div>
  );
}
