'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { GameEntry } from '@/app/lib/mock-data';
import { HardDrive, PlusCircle, CheckCircle2 } from 'lucide-react';
import { useSelection } from '@/components/selection-context';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface GameCardProps {
  game: GameEntry;
}

export function GameCard({ game }: GameCardProps) {
  const { addToSelection, isInSelection } = useSelection();
  const { toast } = useToast();
  const isAdded = isInSelection(game.id);

  const handleAddToSelection = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isAdded) {
      toast({
        title: "Already Selected",
        description: `${game.title} is already in your selection.`,
      });
      return;
    }

    addToSelection(game.id);
    toast({
      title: "Game Added!",
      description: `${game.title} has been added to your selection.`,
    });
  };

  return (
    <Card className="overflow-hidden bg-card border-none transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 flex flex-col h-full group/card">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Link href={`/game/${game.id}`} className="group block relative w-full h-full">
          <Image
            src={game.thumbnail}
            alt={game.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {/* Category Badge - Top Left */}
          <div className="absolute top-3 left-3">
            <Badge className="bg-primary/90 text-white border-none backdrop-blur-sm">
              {game.category}
            </Badge>
          </div>

          {/* Size Label - Bottom Left inside Image */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-[10px] font-bold bg-black/40 backdrop-blur-md px-2 py-1 rounded-md border border-white/10 shadow-lg">
            <HardDrive className="w-3 h-3" />
            <span>{game.size}</span>
          </div>
        </Link>

        {/* Quick Add Button - Bottom Right inside Image */}
        <div className="absolute bottom-3 right-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className={`h-9 w-9 rounded-full backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 ${
                  isAdded 
                    ? 'bg-green-600/80 text-white hover:bg-green-600' 
                    : 'bg-black/40 text-white hover:bg-primary hover:scale-110'
                }`}
                onClick={handleAddToSelection}
              >
                {isAdded ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <PlusCircle className="h-5 w-5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>{isAdded ? 'Added to Selection' : 'Add to Library'}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      
      <CardContent className="p-4 flex-1 flex flex-col">
        <Link href={`/game/${game.id}`} className="group block">
          <h3 className="text-xl font-bold font-headline text-foreground line-clamp-1 group-hover:text-accent transition-colors">
            {game.title}
          </h3>
        </Link>
      </CardContent>
    </Card>
  );
}
