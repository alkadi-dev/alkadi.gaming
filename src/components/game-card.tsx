'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { GameEntry } from '@/app/lib/mock-data';
import { HardDrive, PlusCircle, CheckCircle2, ImageOff, Calendar, Star } from 'lucide-react';
import { useSelection } from '@/components/selection-context';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface GameCardProps {
  game: GameEntry;
}

export function GameCard({ game }: GameCardProps) {
  const { addToSelection, removeFromSelection, isInSelection, isOverLimit } = useSelection();
  const { toast } = useToast();
  const isAdded = isInSelection(game.id);

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
          description: "You have reached the 1800 GB limit. Remove games before adding more.",
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

  const hasThumbnail = game.thumbnail && game.thumbnail.trim() !== '';

  return (
    <Card className="overflow-hidden bg-card border-none transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 flex flex-col h-full group/card">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Link href={`/game/${game.id}`} className="group block relative w-full h-full">
          {hasThumbnail ? (
            <Image
              src={game.thumbnail}
              alt={game.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-secondary/50 flex flex-col items-center justify-center gap-2">
              <ImageOff className="w-8 h-8 text-muted-foreground/20" />
              <span className="text-[10px] text-muted-foreground/40 font-bold uppercase">No Image</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {/* Category Badge - Top Left */}
          <div className="absolute top-3 left-3">
            {game.categories && game.categories.length > 0 && (
              <Badge className="bg-primary/90 text-white border-none backdrop-blur-sm text-xs px-3 py-1 w-fit uppercase font-bold tracking-tight shadow-xl">
                {game.categories[0]}
              </Badge>
            )}
          </div>

          {/* Recommended Badge - Top Right */}
          {game.isRecommended && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-amber-500 text-white border-none backdrop-blur-md text-[9px] px-2 py-0.5 w-fit uppercase font-black tracking-widest shadow-2xl flex items-center gap-1 border border-white/20 animate-pulse">
                <Star className="w-2.5 h-2.5 fill-current" /> Recommended
              </Badge>
            </div>
          )}

          {/* Info Labels - Bottom Left inside Image */}
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

        {/* Toggle Selection Button - Bottom Right inside Image */}
        <div className="absolute bottom-2 right-2">
          <Button
            size="icon"
            variant="ghost"
            disabled={!isAdded && isOverLimit}
            className={`h-7 w-7 rounded-full backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 ${
              isAdded 
                ? 'bg-green-600/80 text-white hover:bg-green-600' 
                : isOverLimit 
                  ? 'bg-black/20 text-white/40 cursor-not-allowed'
                  : 'bg-black/40 text-white hover:bg-primary hover:scale-110'
            }`}
            onClick={handleToggleSelection}
          >
            {isAdded ? (
              <CheckCircle2 className="h-4 w-4" />
            ) : (
              <PlusCircle className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      
      <CardContent className="p-3 flex-1 flex flex-col items-center text-center">
        <Link href={`/game/${game.id}`} className="group block w-full">
          <h3 className="text-lg font-bold font-headline text-foreground line-clamp-1 group-hover:text-accent transition-colors">
            {game.title}
          </h3>
        </Link>
      </CardContent>
    </Card>
  );
}
