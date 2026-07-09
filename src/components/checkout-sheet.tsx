'use client';

import { useEffect, useState } from 'react';
import { useSelection } from '@/components/selection-context';
import { MOCK_GAMES } from '@/app/lib/mock-data';
import { useLanguage } from '@/components/language-context';
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
import { cn } from '@/lib/utils';

export function CheckoutSheet() {
  const { selectedIds, removeFromSelection, clearSelection, totalSizeNum, isCheckoutOpen, setCheckoutOpen } = useSelection();
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const selectedGames = MOCK_GAMES.filter((game) => selectedIds.includes(game.id));

  const generateListContent = () => {
    const listText = selectedGames
      .map((game, index) => `${index + 1}. ${game.title} (${game.size})`)
      .join('\n');
    
    return `ALKADI GAMING SELECTION\n\n${listText}\n\nTotal Storage: ~${totalSizeNum.toFixed(1)} GB`;
  };

  const handleWhatsAppRedirect = () => {
    if (selectedGames.length === 0) return;

    const finalContent = generateListContent();
    const encodedText = encodeURIComponent(finalContent);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    toast({
      title: "WhatsApp Ready!",
      description: "Your selection has been prepared for WhatsApp.",
    });
  };

  const getWarning = () => {
    if (totalSizeNum > 1800) return t('alert.maxStorage');
    if (totalSizeNum > 1400) return t('alert.approaching');
    if (totalSizeNum > 960) return t('alert.surpassed960');
    if (totalSizeNum > 460) return t('alert.1tbRequired');
    if (totalSizeNum > 280) return t('alert.500gbReached');
    return null;
  };

  const warning = getWarning();

  const handleOnOpenChange = (open: boolean) => {
    if (!open && totalSizeNum > 1800) {
      toast({
        variant: "destructive",
        title: t('alert.actionRequired'),
        description: t('alert.removeGames'),
      });
      return;
    }
    setCheckoutOpen(open);
  };

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" className="relative bg-white/5 border-white/10 hover:bg-white/10 rounded-full h-8 px-2 sm:px-3 text-xs opacity-50">
        <ShoppingCart className="h-3.5 w-3.5 sm:mr-1.5" />
        <span className="hidden sm:inline">{t('nav.checkout')}</span>
      </Button>
    );
  }

  return (
    <Sheet open={isCheckoutOpen} onOpenChange={handleOnOpenChange}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="relative bg-white/5 border-white/10 hover:bg-white/10 rounded-full h-8 px-2 sm:px-3 text-xs">
          <ShoppingCart className={cn("h-3.5 w-3.5", isRTL ? "sm:ml-1.5" : "sm:mr-1.5")} />
          <span className="hidden sm:inline">{t('nav.checkout')}</span>
          {selectedIds.length > 0 && (
            <span className={cn("absolute -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white shadow-lg border-2 border-background", isRTL ? "-left-1" : "-right-1")}>
              {selectedIds.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side={isRTL ? "left" : "right"} className="w-full sm:max-w-md bg-background/95 backdrop-blur-xl border-white/10 flex flex-col p-0">
        <SheetHeader className="p-6 pb-2">
          <SheetTitle className="text-2xl font-bold font-headline flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-primary" />
            {t('checkout.title')}
          </SheetTitle>
        </SheetHeader>

        {selectedGames.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 text-center p-6">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4">
              <ShoppingCart className="h-10 w-10 text-muted-foreground opacity-20" />
            </div>
            <h3 className="text-lg font-medium mb-2">{t('checkout.empty')}</h3>
            <p className="text-muted-foreground text-sm">{t('checkout.emptyDesc')}</p>
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
                      <h4 className="font-bold text-xs sm:text-sm truncate" dir="ltr">{game.title}</h4>
                      <p className="text-[9px] sm:text-[10px] text-muted-foreground">
                        {game.categories.map(c => t(`cat.${c}`)).join(' / ')} • {game.size}
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
                  <span className="text-muted-foreground text-[10px] uppercase tracking-wider font-bold">{t('checkout.games')}</span>
                  <span className="font-bold text-sm">{selectedGames.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-[10px] uppercase tracking-wider font-bold">{t('checkout.totalStorage')}</span>
                  <span className="font-bold text-sm text-primary">{totalSizeNum.toFixed(1)} GB</span>
                </div>
              </div>

              {warning && (
                <Alert className={`mb-4 py-3 px-4 rounded-xl border-none ${
                  totalSizeNum >= 1400 ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'
                }`}>
                  <div className="flex items-center gap-2">
                    {totalSizeNum >= 1800 ? <Ban className="h-4 w-4" /> : totalSizeNum >= 1400 ? <AlertTriangle className="h-4 w-4" /> : <Info className="h-4 w-4" />}
                    <AlertDescription className="text-[11px] font-bold uppercase leading-tight tracking-tight">
                      {warning}
                    </AlertDescription>
                  </div>
                </Alert>
              )}
              
              <div className="flex flex-col gap-2">
                <Button 
                  onClick={handleWhatsAppRedirect} 
                  disabled={totalSizeNum > 1800}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white hover:scale-[1.01] transition-all rounded-xl py-6 font-bold text-sm disabled:opacity-50"
                >
                  <MessageCircle className="mr-2 h-5 w-5" /> {t('checkout.whatsapp')}
                </Button>
              </div>
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="default"
                    className="w-full text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl py-4 text-xs font-medium"
                  >
                    {t('checkout.clear')}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-background border-white/10 rounded-3xl">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-xl font-bold font-headline">{t('checkout.clearConfirm')}</AlertDialogTitle>
                    <AlertDialogDescription className="text-muted-foreground">
                      {t('checkout.clearDesc')}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="flex gap-2">
                    <AlertDialogCancel className="flex-1 bg-white/5 border-white/10 rounded-xl hover:bg-white/10 transition-colors m-0">{t('checkout.no')}</AlertDialogCancel>
                    <AlertDialogAction 
                      onClick={clearSelection}
                      className="flex-1 bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-xl transition-colors m-0"
                    >
                      {t('checkout.yes')}
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
