
'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/language-context';
import { Badge } from '@/components/ui/badge';
import { Check, Gamepad2, Tag, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

interface PlanProps {
  id: string;
  name: string;
  storage: string;
  games: string;
  price: string;
  isRecommended?: boolean;
  offerBadge?: string;
  topLabel?: string;
}

function PricingCard({ name, storage, games, price, isRecommended, offerBadge, topLabel }: PlanProps) {
  const { t } = useLanguage();

  return (
    <div className={cn(
      "relative flex flex-col p-6 rounded-[2rem] border transition-all duration-500 group mb-4",
      isRecommended 
        ? "bg-primary/10 border-primary/40 shadow-[0_0_40px_rgba(var(--primary),0.15)] scale-105 z-10" 
        : "bg-secondary/20 border-white/5 hover:border-white/20 shadow-xl"
    )}>
      {topLabel ? (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 font-black uppercase tracking-tighter shadow-lg shadow-accent/20">
          {topLabel}
        </Badge>
      ) : isRecommended ? (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 font-black uppercase tracking-tighter shadow-lg shadow-primary/20">
          {t('pricing.recommended')}
        </Badge>
      ) : null}

      <div className="mb-6 flex flex-col items-center text-center">
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-muted-foreground mb-1">
          {name}
        </span>
        <div className="flex flex-col items-center gap-1 mb-4">
          <span className="text-4xl md:text-5xl font-black font-headline tracking-tighter text-white">
            {storage}
          </span>
          <span className="text-2xl font-bold text-primary tracking-tight">
            {price}
          </span>
        </div>
        {/* Game Count Display: Larger on mobile, smaller on desktop */}
        <div className="flex items-center gap-3 px-6 py-3 md:px-4 md:py-2 bg-white/5 rounded-full border border-white/5 shadow-inner">
          <Gamepad2 className="h-5 w-5 md:h-4 md:w-4 text-primary" />
          <span className="text-lg md:text-sm font-black text-white tracking-tight">{games} {t('pricing.games')}</span>
        </div>
      </div>

      <div className="space-y-4 mb-8 flex-1">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Check className="h-3 w-3 text-primary" />
          </div>
          <span className="text-xs font-medium text-white/70">{t('pricing.withEnclosure')}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Check className="h-3 w-3 text-primary" />
          </div>
          <span className="text-xs font-medium text-white/70">{t('pricing.freeDelivery')}</span>
        </div>
      </div>

      {offerBadge && (
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-white px-5 py-2 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-2xl shadow-primary/40 z-20 whitespace-nowrap">
           <Sparkles className="h-3.5 w-3.5" />
           {offerBadge}
        </div>
      )}
    </div>
  );
}

export function PricingDialog() {
  const { t, language } = useLanguage();

  const plans = [
    { id: '280gb', name: t('pricing.basic'), storage: '280GB', games: '3–5', price: '$39' },
    { id: '500gb', name: t('pricing.standard'), storage: '500GB', games: '5–10', price: '$59' },
    { 
      id: '1tb', 
      name: t('pricing.elite'), 
      storage: '1TB', 
      games: '10–20', 
      price: '$79', 
      isRecommended: true,
      offerBadge: language === 'ar' ? 'خصم 40%' : '40% OFF'
    },
    { id: '1.5tb', name: t('pricing.pro'), storage: '1.5TB', games: '20–30', price: '$99' },
    { 
      id: '2tb', 
      name: t('pricing.ultra'), 
      storage: '2TB', 
      games: '30–50', 
      price: '$119',
      isRecommended: true,
      topLabel: t('pricing.bigValue'),
      offerBadge: language === 'ar' ? 'خصم 40%' : '40% OFF'
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full h-8 px-2 sm:px-4 text-xs flex items-center gap-1.5 transition-all"
        >
          <Tag className="h-3.5 w-3.5" />
          <span className="font-bold">{t('nav.pricing')}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] md:max-w-6xl bg-background/95 backdrop-blur-2xl border-white/10 rounded-[3rem] p-0 overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6 md:p-12">
            <DialogHeader className="flex flex-col items-center text-center space-y-4 mb-12 md:mb-16">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary mb-2">
                <Tag className="h-8 w-8" />
              </div>
              <DialogTitle className="text-3xl md:text-6xl font-black font-headline tracking-tighter uppercase text-white">
                {t('pricing.title')}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-sm md:text-lg font-medium max-w-xl">
                {t('pricing.subtitle')}
              </DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 py-4 px-2">
              {plans.map((plan) => (
                <PricingCard key={plan.id} {...plan} />
              ))}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
