'use client';

import React from 'react';
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

interface RemainingSpaceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onContinueToWhatsApp: () => void;
}

export function RemainingSpaceDialog({ open, onOpenChange, onContinueToWhatsApp }: RemainingSpaceDialogProps) {
  const { remainingSpace, toggleRemainingSpaceMode, setCheckoutOpen } = useSelection();
  const { t } = useLanguage();

  const handleShowGames = () => {
    toggleRemainingSpaceMode(true);
    onOpenChange(false);
    setCheckoutOpen(false);
    
    // Scroll to library section
    const element = document.getElementById('library');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleContinue = () => {
    onOpenChange(false);
    onContinueToWhatsApp();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background/95 backdrop-blur-2xl border-white/10 rounded-[2.5rem] max-w-lg p-0 overflow-hidden shadow-2xl transition-all duration-500">
        <div className="p-8 flex flex-col items-center text-center space-y-6">
          <div className="space-y-4">
            <DialogHeader className="items-center text-center">
              <DialogTitle className="text-3xl font-black font-headline tracking-tighter uppercase text-white leading-none text-center w-full">
                {t('remaining.title')}
              </DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-muted-foreground text-lg font-medium text-center w-full">
              {t('remaining.message', { space: remainingSpace.toFixed(0) })}
            </DialogDescription>
          </div>

          <div className="w-full flex flex-col gap-3 pt-4">
            <Button 
              onClick={handleShowGames}
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-7 font-black uppercase tracking-tight shadow-xl shadow-primary/20 text-lg transition-all hover:scale-[1.02]"
            >
              {t('remaining.yes')}
            </Button>
            <Button 
              variant="ghost"
              onClick={handleContinue}
              className="w-full text-white bg-transparent hover:bg-destructive/10 hover:text-destructive rounded-2xl py-5 font-bold uppercase tracking-widest text-xs transition-colors"
            >
              {t('remaining.no')}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}