'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useSelection } from '@/components/selection-context';
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
  const { totalSizeNum, setCheckoutOpen } = useSelection();
  const [activeLimit, setActiveLimit] = useState<{
    threshold: number;
    title: string;
    message: string;
    icon?: React.ReactNode;
  } | null>(null);
  
  // Track the highest threshold already alerted to prevent spamming
  const lastThresholdRef = useRef<number>(0);

  useEffect(() => {
    const currentThreshold = 
      totalSizeNum > 1800 ? 1800 : 
      totalSizeNum > 900 ? 900 : 
      totalSizeNum > 450 ? 450 : 
      totalSizeNum > 280 ? 280 : 0;

    // Trigger only if we cross a threshold upwards
    if (currentThreshold > lastThresholdRef.current) {
      if (currentThreshold === 1800) {
        setActiveLimit({
          threshold: 1800,
          title: "Maximum Storage Reached!",
          message: "You have reached the maximum storage limit of 1800 GB. Please review your selection and delete some games to continue.",
          icon: <Ban className="h-6 w-6 text-destructive" />
        });
      } else if (currentThreshold === 900) {
        setActiveLimit({
          threshold: 900,
          title: "Surpassed 1 TB!",
          message: "You have surpassed 1 TB. Would you like to review your selection and delete some games, or keep going?",
          icon: <AlertTriangle className="h-6 w-6 text-primary" />
        });
      } else if (currentThreshold === 450) {
        setActiveLimit({
          threshold: 450,
          title: "1 TB Drive Required",
          message: "You are now using the 1 TB drive. Would you like to review your selection and delete some games, or keep going?",
          icon: <HardDrive className="h-6 w-6 text-primary" />
        });
      } else if (currentThreshold === 280) {
        setActiveLimit({
          threshold: 280,
          title: "500 GB Drive Reached",
          message: "You have exceeded 280 GB and are using the 500 GB drive. Would you like to review your selection and delete some games, or keep going?",
          icon: <HardDrive className="h-6 w-6 text-primary" />
        });
      }
    }

    // Always keep lastThresholdRef synced with current selection state
    lastThresholdRef.current = currentThreshold;
  }, [totalSizeNum]);

  const handleReview = () => {
    // Close the alert first
    setActiveLimit(null);
    
    // Delay opening the checkout sheet slightly to avoid Radix UI overlay/scroll-lock collisions
    // which can lead to a "frozen" UI state where pointer events are stuck.
    setTimeout(() => {
      setCheckoutOpen(true);
    }, 100);
  };

  return (
    <AlertDialog open={!!activeLimit} onOpenChange={(open) => {
      if (!open) setActiveLimit(null);
    }}>
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
          <AlertDialogCancel className="w-full sm:w-auto bg-white/5 border-white/10 rounded-xl hover:bg-white/10 text-xs font-bold uppercase tracking-wider">
            Keep Going
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleReview}
            className={`w-full sm:w-auto rounded-xl text-xs font-bold uppercase tracking-wider text-white ${
              activeLimit?.threshold === 1800 ? 'bg-destructive hover:bg-destructive/90' : 'bg-primary hover:bg-primary/90'
            }`}
          >
            Review & Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
