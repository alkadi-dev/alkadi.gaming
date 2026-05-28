import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { GameEntry } from '@/app/lib/mock-data';
import { HardDrive } from 'lucide-react';

interface GameCardProps {
  game: GameEntry;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card className="overflow-hidden bg-card border-none transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 flex flex-col h-full">
      <Link href={`/game/${game.id}`} className="group block relative aspect-[16/9] overflow-hidden">
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
