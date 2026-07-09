'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GameEntry } from '@/app/lib/mock-data';
import { HardDrive, ImageOff, Calendar, Plus, Check } from 'lucide-react';
import { useSelection } from '@/components/selection-context';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface GameCardProps {
  game: GameEntry;
}

export function GameCard({ game }: GameCardProps) {
  const { isInSelection, addToSelection, removeFromSelection, isOverLimit } = useSelection();
  const { toast } = useToast();
  const isAdded = isInSelection(game.id);
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleToggleSelection = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isAdded) {
      removeFromSelection(game.id);
      toast({
        title: "Removed from Selection",
        description: `${game.title} has been removed.`,
      });
    } else {
      if (isOverLimit) {
        toast({
          variant: "destructive",
          title: "Storage Limit Exceeded",
          description: "You have reached the maximum storage limit.",
        });
        return;
      }
      addToSelection(game.id);
      toast({
        title: "Game Added!",
        description: `${game.title} has been added to your selection.`,
      });
    }
  };

  const hasThumbnail = game.thumbnail && game.thumbnail.trim() !== '' && !imageError;

  return (
    <div 
      ref={cardRef}
      className={cn(
        "transition-all duration-1000 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
    >
      <Card className="overflow-hidden bg-card border-none flex flex-col h-full shadow-lg">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Link href={`/game/${game.id}`} className="block relative w-full h-full">
            {hasThumbnail ? (
              <Image
                src={game.thumbnail}
                alt={game.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-secondary/50 flex flex-col items-center justify-center gap-2">
                <ImageOff className="w-8 h-8 text-muted-foreground/20" />
                <span className="text-[10px] text-muted-foreground/40 font-bold uppercase">No Image</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 transition-opacity" />
            
            <div className="absolute top-3 left-3">
              {game.categories && game.categories.length > 0 && (
                <Badge className="bg-primary/90 text-white border-none backdrop-blur-sm text-[10px] px-2.5 py-0.5 w-fit uppercase font-bold tracking-tight shadow-xl">
                  {game.categories[0]}
                </Badge>
              )}
            </div>

            {!isAdded && game.isRecommended && (
              <div className="absolute top-3 right-3 pointer-events-none">
                <div className="text-white text-[9px] px-3 py-1 w-fit uppercase font-black tracking-widest flex items-center bg-black/60 backdrop-blur-md rounded-full border border-white/10 shadow-lg px-2">
                  Recommended
                </div>
              </div>
            )}

            <div className="absolute bottom-2 left-2 flex items-center gap-1.5 text-white text-[9px] font-bold bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/10 shadow-lg">
              <div className="flex items-center gap-1">
                <HardDrive className="w-2.5 h-2.5" />
                <span>{game.size}</span>
              </div>
              <span className="opacity-40">|</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-2.5 h-2.5" />
                <span>{game.releaseYear}</span>
              </div>
            </div>
          </Link>

          {/* Quick Add Button */}
          <Button
            size="icon"
            className={cn(
              "absolute bottom-2 right-2 z-20 rounded-full w-8 h-8 shadow-2xl transition-all duration-500 transform border border-white/10",
              isAdded 
                ? "bg-primary hover:bg-primary/90 scale-110 text-white" 
                : "bg-white/20 backdrop-blur-md text-white hover:bg-white/40 hover:scale-110 active:scale-95"
            )}
            onClick={handleToggleSelection}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Plus 
                className={cn(
                  "absolute h-4 w-4 transition-all duration-500",
                  isAdded ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                )} 
              />
              <Check 
                className={cn(
                  "absolute h-4 w-4 transition-all duration-500",
                  isAdded ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                )} 
              />
            </div>
          </Button>
        </div>
        
        <CardContent className="p-3 flex-1 flex flex-col items-center text-center">
          <Link href={`/game/${game.id}`} className="block w-full">
            <h3 className="text-lg font-bold font-headline text-foreground line-clamp-1">
              {game.title}
            </h3>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
