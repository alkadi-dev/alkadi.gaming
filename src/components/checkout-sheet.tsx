'use client';

import { useSelection } from '@/components/selection-context';
import { MOCK_GAMES } from '@/app/lib/mock-data';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Trash2, Copy, Check, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

export function CheckoutSheet() {
  const { selectedIds, removeFromSelection, clearSelection } = useSelection();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const selectedGames = MOCK_GAMES.filter((game) => selectedIds.includes(game.id));

  const calculateTotalSize = () => {
    let totalGb = 0;
    selectedGames.forEach(game => {
      const sizeValue = parseFloat(game.size.replace(/[^\d.]/g, ''));
      if (!isNaN(sizeValue)) {
        totalGb += sizeValue;
      }
    });
    return totalGb.toFixed(1);
  };

  const generateListContent = () => {
    const listText = selectedGames
      .map((game, index) => `${index + 1}. ${game.title} (${game.size})`)
      .join('\n');
    
    const totalSize = calculateTotalSize();
    return `My Alkadi Gaming Selection:\n\n${listText}\n\nTotal Games: ${selectedGames.length}\nTotal Size: ~${totalSize} GB`;
  };

  const handleCopyList = () => {
    if (selectedGames.length === 0) return;

    const finalContent = generateListContent();
    const totalSize = calculateTotalSize();

    navigator.clipboard.writeText(finalContent).then(() => {
      setCopied(true);
      toast({
        title: "List Copied!",
        description: `Selected ${selectedGames.length} games (${totalSize} GB).`,
      });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleWhatsAppRedirect = () => {
    if (selectedGames.length === 0) return;

    const finalContent = generateListContent();
    
    // Auto-copy to clipboard first
    navigator.clipboard.writeText(finalContent);
    
    // Then redirect to WhatsApp with pre-filled text
    const encodedText = encodeURIComponent(finalContent);
    window.open(`https://wa.link/vhw7ol?text=${encodedText}`, '_blank');
    
    toast({
      title: "Opening WhatsApp",
      description: "List copied to clipboard and pre-filled.",
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="relative bg-white/5 border-white/10 hover:bg-white/10 rounded-full h-8 px-3 text-xs">
          <ShoppingCart className="h-3.5 w-3.5 mr-1.5" />
          Checkout
          {selectedIds.length > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white shadow-lg border-2 border-background">
              {selectedIds.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md bg-background/95 backdrop-blur-xl border-l border-white/10">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-bold font-headline flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-primary" />
            Your Selection
          </SheetTitle>
        </SheetHeader>

        {selectedGames.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4">
              <ShoppingCart className="h-10 w-10 text-muted-foreground opacity-20" />
            </div>
            <h3 className="text-lg font-medium mb-2">Your list is empty</h3>
            <p className="text-muted-foreground text-sm">Add some games to your selection to see them here.</p>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <ScrollArea className="flex-1 pr-4">
              <div className="space-y-4">
                {selectedGames.map((game) => (
                  <div key={game.id} className="flex gap-4 p-3 rounded-2xl bg-secondary/30 border border-white/5 group">
                    <div className="relative h-16 w-24 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={game.thumbnail}
                        alt={game.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm truncate">{game.title}</h4>
                      <p className="text-xs text-muted-foreground">{game.category} • {game.size}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full"
                      onClick={() => removeFromSelection(game.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="mt-auto pt-6 pb-8 space-y-3">
              <div className="bg-secondary/20 p-4 rounded-2xl border border-white/5 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground text-sm">Selected Games</span>
                  <span className="font-bold">{selectedGames.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Total Storage</span>
                  <span className="font-bold text-primary">{calculateTotalSize()} GB</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                <Button 
                  onClick={handleCopyList} 
                  className="w-full bg-secondary hover:bg-secondary/80 text-foreground transition-all rounded-xl py-6 font-bold"
                >
                  {copied ? (
                    <><Check className="mr-2 h-5 w-5" /> Copied!</>
                  ) : (
                    <><Copy className="mr-2 h-5 w-5" /> Copy List</>
                  )}
                </Button>

                <Button 
                  onClick={handleWhatsAppRedirect} 
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white hover:scale-[1.02] transition-all rounded-xl py-6 font-bold"
                >
                  <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
                </Button>
              </div>
              
              <Button 
                variant="ghost" 
                onClick={clearSelection}
                className="w-full text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl mt-2"
              >
                Clear Entire List
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
