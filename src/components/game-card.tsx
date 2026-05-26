import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { GameEntry } from '@/app/lib/mock-data';
import { Button } from '@/components/ui/button';
import { BookOpen, Info, Layout } from 'lucide-react';

interface GameCardProps {
  game: GameEntry;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card className="overflow-hidden bg-card border-none transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 flex flex-col">
      <Link href={`/game/${game.id}`} className="group block relative aspect-[16/9] overflow-hidden">
        <Image
          src={game.thumbnail}
          alt={game.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        <Badge className="absolute top-3 left-3 bg-primary/90 text-white border-none backdrop-blur-sm">
          {game.category}
        </Badge>
      </Link>
      <CardContent className="p-4 flex-1">
        <Link href={`/game/${game.id}`} className="group">
          <h3 className="text-xl font-bold font-headline text-foreground line-clamp-1 group-hover:text-accent transition-colors">
            {game.title}
          </h3>
        </Link>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col gap-2">
        <div className="grid grid-cols-3 gap-1 w-full border-t border-white/5 pt-4">
          <a
            href={game.infoLinks.features}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors text-center"
          >
            <Layout className="w-3.5 h-3.5" />
            Features
          </a>
          <a
            href={game.infoLinks.storyline}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors text-center"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Storyline
          </a>
          <a
            href={game.infoLinks.gameplay}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors text-center"
          >
            <Info className="w-3.5 h-3.5" />
            Gameplay
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
