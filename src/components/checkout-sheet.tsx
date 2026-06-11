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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button';
import { ShoppingCart, Trash2, MessageCircle, AlertTriangle, Info, Ban } from 'lucide-react';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription } from '@/components/ui/alert';

export function CheckoutSheet() {
  const { selectedIds, removeFromSelection, clearSelection, totalSizeNum, isCheckoutOpen, setCheckoutOpen } = useSelection();
  const { toast } = useToast();

  const selectedGames = MOCK_GAMES.filter((game) => selectedIds.includes(game.id));

  const generateListContent = () => {
    const listText = selectedGames
      .map((game, index) => `${index + 1}. ${game.title} (${game.size})`)
      .join('\n');
    
    return `Hello Alkadi Gaming! 🎮\n\nI've selected the following games from your catalog:\n\n${listText}\n\nTotal Games: ${selectedGames.length}\nTotal Storage: ~${totalSizeNum.toFixed(1)} GB\n\nPlease let me know the availability and how to proceed! Thank you.`;
  };

  const handleWhatsAppRedirect = () => {
    if (selectedGames.length === 0) return;

    const finalContent = generateListContent();
    const encodedText = encodeURIComponent(finalContent);
    
    // api.whatsapp.com/send is the most robust endpoint for cross-platform pre-filled messages
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
    
    // 1. Attempt to copy to clipboard as a reliable fallback/convenience
    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(finalContent)
        .catch((err) => console.warn("Clipboard sync failed:", err))
        .finally(() => {
          // 2. Open WhatsApp in a new tab - standard for mobile app trigger and desktop web
          window.open(whatsappUrl, '_blank');
          
          toast({
            title: "Order List Ready!",
            description: "Your selection is pre-filled in WhatsApp. You can also paste the text from your clipboard if needed!",
          });
        });
    } else {
      // Direct fallback if clipboard API is unavailable
      window.open(whatsappUrl, '_blank');
    }
  };

  const getWarning = () => {
    if (totalSizeNum > 1800) return "Maximum storage limit reached (1800 GB).";
    if (totalSizeNum > 900) return "You have surpassed 1 TB.";
    if (totalSizeNum > 450) return "You are now using the 1 TB drive.";
    if (totalSizeNum > 280) return "You have exceeded 280 GB and are using the 500 GB drive.";
    return null;
  };

  const warning = getWarning();

  return (
    <Sheet open={isCheckoutOpen} onOpenChange={setCheckoutOpen}>
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
      <SheetContent className="w-full sm:max-w-md bg-background/95 backdrop-blur-xl border-l border-white/10 flex flex-col p-0">
        <SheetHeader className="p-6 pb-2">
          <SheetTitle className="text-2xl font-bold font-headline flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-primary" />
            Your Selection
          </SheetTitle>
        </SheetHeader>

        {selectedGames.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 text-center p-6">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4">
              <ShoppingCart className="h-10 w-10 text-muted-foreground opacity-20" />
            </div>
            <h3 className="text-lg font-medium mb-2">Your list is empty</h3>
            <p className="text-muted-foreground text-sm">Add some games to your selection to see them here.</p>
          </div>
        ) : (
          <div className="flex flex-col h-full overflow-hidden">
            <ScrollArea className="flex-1 px-4 sm:px-6">
              <div className="space-y-3 py-4">
                {selectedGames.map((game) => (
                  <div key={game.id} className="flex items-center gap-3 p-2 rounded-xl bg-secondary/30 border border-white/5 group">
                    <div className="relative h-12 w-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={game.thumbnail}
                        alt={game.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs sm:text-sm truncate">{game.title}</h4>
                      <p className="text-[9px] sm:text-[10px] text-muted-foreground">
                        {game.categories.join(' / ')} • {game.size}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full h-8 w-8"
                      onClick={() => removeFromSelection(game.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 sm:p-6 bg-background/50 backdrop-blur-md border-t border-white/5 space-y-3">
              <div className="bg-secondary/20 p-3 sm:p-4 rounded-xl border border-white/5 mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-muted-foreground text-[10px] uppercase tracking-wider font-bold">Games</span>
                  <span className="font-bold text-sm">{selectedGames.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-[10px] uppercase tracking-wider font-bold">Total Storage</span>
                  <span className="font-bold text-sm text-primary">{totalSizeNum.toFixed(1)} GB</span>
                </div>
              </div>

              {warning && (
                <Alert className={`mb-4 py-3 px-4 rounded-xl border-none ${
                  totalSizeNum > 1800 || totalSizeNum > 900 ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'
                }`}>
                  <div className="flex items-center gap-2">
                    {totalSizeNum > 1800 ? <Ban className="h-4 w-4" /> : totalSizeNum > 900 ? <AlertTriangle className="h-4 w-4" /> : <Info className="h-4 w-4" />}
                    <AlertDescription className="text-[11px] font-bold uppercase leading-tight tracking-tight">
                      {warning}
                    </AlertDescription>
                  </div>
                </Alert>
              )}
              
              <div className="grid grid-cols-1 gap-2">
                <Button 
                  onClick={handleWhatsAppRedirect} 
                  disabled={totalSizeNum > 1800}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white hover:scale-[1.01] transition-all rounded-xl py-6 font-bold text-xs sm:text-sm disabled:opacity-50"
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> Open in WhatsApp
                </Button>
              </div>
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="default"
                    className="w-full text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl py-4 text-xs font-medium"
                  >
                    Clear Entire List
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-background border-white/10 rounded-3xl">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-xl font-bold font-headline">Clear entire list?</AlertDialogTitle>
                    <AlertDialogDescription className="text-muted-foreground">
                      This action will remove all games from your selection. Are you sure you want to proceed?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-white/5 border-white/10 rounded-xl hover:bg-white/10 transition-colors">No</AlertDialogCancel>
                    <AlertDialogAction 
                      onClick={clearSelection}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-xl transition-colors"
                    >
                      Yes
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
