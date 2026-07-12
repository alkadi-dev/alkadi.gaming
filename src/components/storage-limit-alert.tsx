'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useSelection } from '@/components/selection-context';
import { useLanguage } from '@/components/language-context';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertTriangle, HardDrive, Ban } from 'lucide-react';

export function StorageLimitAlert() {
  const { totalSizeNum, setCheckoutOpen, isCheckoutOpen } = useSelection();
  const { t } = useLanguage();
  const [activeLimit, setActiveLimit] = useState<{
    threshold: number;
    title: string;
    message: string;
    icon?: React.ReactNode;
  } | null>(null);
  
  // Track the highest threshold already alerted to prevent spamming
  const lastThresholdRef = useRef<number>(-1);

  useEffect(() => {
    // Determine the current threshold category
    const currentThreshold = 
      totalSizeNum > 1800 ? 1800 : 
      totalSizeNum > 1400 ? 1400 :
      totalSizeNum > 960 ? 960 : 
      totalSizeNum > 460 ? 460 : 
      totalSizeNum > 280 ? 280 : 0;

    // First time initializing: just set the current threshold without alerting
    if (lastThresholdRef.current === -1) {
      lastThresholdRef.current = currentThreshold;
      return;
    }

    // Only alert if we've crossed a threshold upwards and the checkout is not already open
    if (currentThreshold > lastThresholdRef.current && !isCheckoutOpen) {
      if (currentThreshold === 1800) {
        setActiveLimit({
          threshold: 1800,
          title: t('alert.maxStorage'),
          message: t('alert.maxStorageDesc'),
          icon: <Ban className="h-6 w-6 text-destructive" />
        });
      } else if (currentThreshold === 1400) {
        setActiveLimit({
          threshold: 1400,
          title: t('alert.approaching'),
          message: t('alert.approachingDesc'),
          icon: <AlertTriangle className="h-6 w-6 text-primary" />
        });
      } else if (currentThreshold === 960) {
        setActiveLimit({
          threshold: 960,
          title: t('alert.surpassed960'),
          message: t('alert.surpassed960Desc'),
          icon: <HardDrive className="h-6 w-6 text-primary" />
        });
      } else if (currentThreshold === 460) {
        setActiveLimit({
          threshold: 460,
          title: t('alert.1tbRequired'),
          message: t('alert.1tbRequiredDesc'),
          icon: <HardDrive className="h-6 w-6 text-primary" />
        });
      } else if (currentThreshold === 280) {
        setActiveLimit({
          threshold: 280,
          title: t('alert.500gbReached'),
          message: t('alert.500gbReachedDesc'),
          icon: <HardDrive className="h-6 w-6 text-primary" />
        });
      }
    }

    // Always keep track of the threshold to handle deletions resetting the alert trigger
    lastThresholdRef.current = currentThreshold;
  }, [totalSizeNum, isCheckoutOpen, t]);

  const handleReview = () => {
    setActiveLimit(null);
    // Small timeout to allow the alert dialog to close cleanly before opening checkout
    setTimeout(() => {
      setCheckoutOpen(true);
    }, 150);
  };

  const handleOpenChange = (open: boolean) => {
    // If it's the 1800 limit, do not allow closing it through clicking outside or ESC
    if (!open && activeLimit?.threshold === 1800) {
      return;
    }
    if (!open) {
      setActiveLimit(null);
    }
  };

  return (
    <AlertDialog open={!!activeLimit} onOpenChange={handleOpenChange}>
      <AlertDialogContent className="bg-background/95 backdrop-blur-xl border-white/10 rounded-3xl max-w-sm sm:max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-full bg-primary/10">
              {activeLimit?.icon || <HardDrive className="h-6 w-6 text-primary" />}
            </div>
            <AlertDialogTitle className="text-xl font-bold font-headline">{activeLimit?.title}</AlertDialogTitle>
          </div>
          <AlertDialogDescription className="text-muted-foreground text-sm leading-relaxed">
            {activeLimit?.message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
          {activeLimit?.threshold !== 1800 && (
            <AlertDialogCancel className="w-full sm:w-auto bg-white/5 border-white/10 rounded-xl hover:bg-white/10 text-xs font-bold uppercase tracking-wider h-11">
              {t('alert.keepGoing')}
            </AlertDialogCancel>
          )}
          <AlertDialogAction 
            onClick={handleReview}
            className={`w-full sm:w-auto rounded-xl text-xs font-bold uppercase tracking-wider text-white h-11 ${
              activeLimit?.threshold >= 1400 ? 'bg-destructive hover:bg-destructive/90' : 'bg-primary hover:bg-primary/90'
            }`}
          >
            {t('alert.reviewDelete')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
