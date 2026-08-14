'use client';

import React, { useState, useMemo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { useSelection } from '@/components/selection-context';
import { useLanguage } from '@/components/language-context';
import { MOCK_GAMES } from '@/app/lib/mock-data';
import { HardDrive, XCircle } from 'lucide-react';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

interface RemainingSpaceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onContinueToWhatsApp: () => void;
}

export function RemainingSpaceDialog({ open, onOpenChange, onContinueToWhatsApp }: RemainingSpaceDialogProps) {
  const { remainingSpace, addToSelection, selectedIds, isInSelection } = useSelection();
  const { t, isRTL } = useLanguage();
  const [showGames, setShowGames] = useState(false);

  // Filter games that fit and aren't already selected
  const recommendedGames = useMemo(() => {
    return MOCK_GAMES
      .filter(game => {
        const gameSize = parseFloat(game.size.replace(/[^\d.]/g, '')) || 0;
        return gameSize <= remainingSpace && !isInSelection(game.id);
      })
      .sort((a, b) => {
        const sizeA = parseFloat(a.size.replace(/[^\d.]/g, '')) || 0;
        const sizeB = parseFloat(b.size.replace(/[^\d.]/g, '')) || 0;
        return sizeB - sizeA; // Largest to smallest
      });
  }, [remainingSpace, selectedIds, isInSelection]);

  const handleReset = () => {
    setShowGames(false);
    onOpenChange(false);
  };

  const handleContinue = () => {
    handleReset();
    onContinueToWhatsApp();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background/95 backdrop-blur-2xl border-white/10 rounded-[2.5rem] max-w-lg p-0 overflow-hidden shadow-2xl transition-all duration-500">
        {!showGames ? (
          <div className="p-8 flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 shadow-[0_0_40px_rgba(var(--primary),0.2)] animate-pulse">
              <HardDrive className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-2">
              <DialogHeader className="items-center text-center">
                <DialogTitle className="text-3xl font-black font-headline tracking-tighter uppercase text-white leading-none">
                  {t('remaining.title')}
                </DialogTitle>
              </DialogHeader>
              <DialogDescription className="text-muted-foreground text-lg font-medium">
                {t('remaining.message', { space: remainingSpace.toFixed(0) })}
              </DialogDescription>
            </div>

            <div className="w-full flex flex-col gap-3 pt-4">
              <Button 
                onClick={() => setShowGames(true)}
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-7 font-black uppercase tracking-tight shadow-xl shadow-primary/20 text-lg transition-all hover:scale-[1.02]"
              >
                {t('remaining.yes')}
              </Button>
              <Button 
                variant="ghost"
                onClick={handleContinue}
                className="w-full text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-2xl py-5 font-bold uppercase tracking-widest text-xs transition-colors"
              >
                {t('remaining.no')}
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-[80vh] sm:h-[70vh]">
            <div className="p-6 border-b border-white/5 bg-secondary/10 flex flex-col items-center text-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <h3 className="text-xl font-black font-headline uppercase tracking-tighter text-white">
                  {remainingSpace.toFixed(0)} GB {isRTL ? "متبقي" : "REMAINING"}
                </h3>
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                  {recommendedGames.length} {isRTL ? "ألعاب متاحة" : "GAMES AVAILABLE"}
                </p>
              </div>
              {recommendedGames.length > 0 && (
                <Button 
                  variant="default"
                  size="sm"
                  onClick={handleContinue}
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-bold px-8 h-9 shadow-lg w-full sm:w-auto"
                >
                  {t('checkout.whatsapp')}
                </Button>
              )}
            </div>

            <ScrollArea className="flex-1">
              {recommendedGames.length > 0 ? (
                <div className="p-4 space-y-3">
                  {recommendedGames.map((game) => (
                    <div key={game.id} className="flex flex-col items-center gap-4 p-5 rounded-[2rem] bg-secondary/20 border border-white/5 group hover:border-primary/30 transition-all duration-300 text-center">
                      <div className="relative h-28 w-44 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
                        <Image src={game.thumbnail} alt={game.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-base text-white line-clamp-1" dir="ltr">{game.title}</h4>
                        <p className="text-sm text-primary font-black uppercase tracking-tight mt-1">{game.size}</p>
                      </div>
                      <Button
                        onClick={() => addToSelection(game.id)}
                        className="w-full sm:w-auto rounded-full px-8 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all shadow-md active:scale-95 font-bold uppercase text-[10px] tracking-widest"
                      >
                        {t('remaining.add')}
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                    <XCircle className="h-8 w-8 text-destructive opacity-40" />
                  </div>
                  <p className="text-muted-foreground font-medium max-w-[200px]">
                    {t('remaining.none')}
                  </p>
                  <Button 
                    variant="ghost" 
                    onClick={handleContinue} 
                    className="rounded-full font-bold text-primary hover:text-primary/80 hover:bg-primary/5 px-8"
                  >
                    {t('remaining.continue')}
                  </Button>
                </div>
              )}
            </ScrollArea>
            
            <div className="p-4 bg-background/50 border-t border-white/5">
              <Button 
                variant="ghost" 
                onClick={() => setShowGames(false)}
                className="w-full text-muted-foreground hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors h-12"
              >
                {isRTL ? "العودة للخلف" : "GO BACK"}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
