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
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { ShoppingCart, Trash2, MessageCircle, AlertTriangle, Info, Ban, HardDrive, Tag, BadgePercent } from 'lucide-react';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { cn } from '@/lib/utils';

export function CheckoutSheet() {
  const { selectedIds, removeFromSelection, clearSelection, totalSizeNum, isCheckoutOpen, setCheckoutOpen, currentCapacity } = useSelection();
  const { t, isRTL, language } = useLanguage();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [isUpgradeOfferOpen, setIsUpgradeOfferOpen] = useState(false);
  const [is2TBUpgradeOfferOpen, setIs2TBUpgradeOfferOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const selectedGames = MOCK_GAMES.filter((game) => selectedIds.includes(game.id));

  const generateListContent = (isUpgraded = false) => {
    const listText = selectedGames
      .map((game, index) => `${index + 1}. ${game.title} (${game.size})`)
      .join('\n');
    
    // Map internal thresholds to display drive sizes
    let driveInfo = `${currentCapacity === 460 ? "500 GB" : currentCapacity === 960 ? "1 TB" : currentCapacity === 280 ? "320 GB" : currentCapacity + " GB"}`;
    if (isUpgraded) {
        if (currentCapacity === 460) driveInfo = "1 TB (UPGRADED FROM 500GB OFFER)";
        if (currentCapacity === 960) driveInfo = "2 TB (UPGRADED FROM 1TB OFFER)";
    }

    return `ALKADI GAMING SELECTION\n\n${listText}\n\nSelected Storage: ${driveInfo}\nTotal Data Size: ~${totalSizeNum.toFixed(1)} GB`;
  };

  const handleWhatsAppRedirect = (isUpgraded = false) => {
    if (selectedGames.length === 0) return;

    // Trigger upgrade popup only if user is in 500GB tier and hasn't already accepted/declined upgrade
    if (!isUpgradeOfferOpen && !isUpgraded && currentCapacity === 460) {
      setIsUpgradeOfferOpen(true);
      return;
    }

    // Trigger upgrade popup for 1TB -> 2TB
    if (!is2TBUpgradeOfferOpen && !isUpgraded && currentCapacity === 960) {
      setIs2TBUpgradeOfferOpen(true);
      return;
    }

    const finalContent = generateListContent(isUpgraded);
    const encodedText = encodeURIComponent(finalContent);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    
    if (isUpgraded) {
      setIsUpgradeOfferOpen(false);
      setIs2TBUpgradeOfferOpen(false);
    }

    toast({
      title: "WhatsApp Ready!",
      description: "Your selection has been prepared for WhatsApp.",
    });
  };

  const handleUpgradeToLibrary = () => {
    setIsUpgradeOfferOpen(false);
    setIs2TBUpgradeOfferOpen(false);
    setCheckoutOpen(false);
    
    // Find the library section and scroll to it
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

    toast({
      title: t('upgrade.title'),
      description: "Ready for more games! Choose your titles for your expanded drive.",
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
        <span className="hidden sm:inline">{t('nav.catalog')}</span>
      </Button>
    );
  }

  return (
    <>
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
                    onClick={() => handleWhatsAppRedirect(false)} 
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

      {/* Special Upgrade Offer Dialog - 500GB to 1TB */}
      <Dialog open={isUpgradeOfferOpen} onOpenChange={setIsUpgradeOfferOpen}>
        <DialogContent className="bg-background/95 backdrop-blur-2xl border-white/10 rounded-3xl max-w-sm sm:max-w-md p-0 overflow-hidden shadow-2xl">
          <div className="bg-primary/20 p-6 flex flex-col items-center text-center gap-4 relative">
             <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                <BadgePercent className="h-8 w-8 text-primary" />
             </div>
             <DialogHeader>
                <DialogTitle className="text-2xl font-black font-headline tracking-tighter uppercase text-white">
                  {t('upgrade.title')}
                </DialogTitle>
             </DialogHeader>
          </div>
          
          <div className="p-8 space-y-6">
            <div className="text-center text-muted-foreground text-base font-medium leading-relaxed">
              {language === 'en' ? (
                <>Get <span className="text-primary font-bold">40% OFF</span> by upgrading to the 1TB hard drive instead of choosing the 500GB option.</>
              ) : (
                <>احصل على <span className="text-primary font-bold">خصم 40%</span> عند الترقية إلى قرص صلب سعة 1 تيرابايت بدلاً من اختيار 500 جيجابايت.</>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6 font-bold uppercase tracking-tight shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group transition-all hover:scale-[1.02]"
                onClick={handleUpgradeToLibrary}
              >
                <HardDrive className="h-4 w-4 group-hover:scale-110 transition-transform" />
                {t('upgrade.btnUpgrade')}
              </Button>
              <Button 
                variant="ghost" 
                className="w-full text-destructive bg-destructive/5 hover:bg-destructive/5 hover:text-destructive sm:text-muted-foreground sm:bg-transparent sm:hover:text-destructive sm:hover:bg-destructive/5 rounded-xl py-4 font-bold text-xs uppercase tracking-widest transition-all duration-300"
                onClick={() => handleWhatsAppRedirect(false)}
              >
                {t('upgrade.btnContinue')}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Special Upgrade Offer Dialog - 1TB to 2TB */}
      <Dialog open={is2TBUpgradeOfferOpen} onOpenChange={setIs2TBUpgradeOfferOpen}>
        <DialogContent className="bg-background/95 backdrop-blur-2xl border-white/10 rounded-3xl max-w-sm sm:max-w-md p-0 overflow-hidden shadow-2xl">
          <div className="bg-primary/20 p-6 flex flex-col items-center text-center gap-4 relative">
             <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                <BadgePercent className="h-8 w-8 text-primary" />
             </div>
             <DialogHeader>
                <DialogTitle className="text-2xl font-black font-headline tracking-tighter uppercase text-white">
                  {t('upgrade.title')}
                </DialogTitle>
             </DialogHeader>
          </div>
          
          <div className="p-8 space-y-6">
            <div className="text-center text-muted-foreground text-base font-medium leading-relaxed">
              {language === 'en' ? (
                <>Get <span className="text-primary font-bold">40% OFF</span> by upgrading to the 2TB hard drive instead of choosing the 1TB option.</>
              ) : (
                <>احصل على <span className="text-primary font-bold">خصم 40%</span> عند الترقية إلى قرص صلب سعة 2 تيرابايت بدلاً من اختيار 1 تيرابايت.</>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-6 font-bold uppercase tracking-tight shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group transition-all hover:scale-[1.02]"
                onClick={handleUpgradeToLibrary}
              >
                <HardDrive className="h-4 w-4 group-hover:scale-110 transition-transform" />
                {t('upgrade.btnUpgrade2tb')}
              </Button>
              <Button 
                variant="ghost" 
                className="w-full text-destructive bg-destructive/5 hover:bg-destructive/5 hover:text-destructive sm:text-muted-foreground sm:bg-transparent sm:hover:text-destructive sm:hover:bg-destructive/5 rounded-xl py-4 font-bold text-xs uppercase tracking-widest transition-all duration-300"
                onClick={() => handleWhatsAppRedirect(false)}
              >
                {t('upgrade.btnContinue1tb')}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
