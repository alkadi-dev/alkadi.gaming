import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { GameEntry } from '@/app/lib/mock-data';

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
      <CardContent className="p-4 flex-1 flex items-center justify-center">
        <Link href={`/game/${game.id}`} className="group w-full">
          <h3 className="text-xl font-bold font-headline text-foreground line-clamp-1 group-hover:text-accent transition-colors text-center">
            {game.title}
          </h3>
        </Link>
      </CardContent>
    </Card>
  );
}
