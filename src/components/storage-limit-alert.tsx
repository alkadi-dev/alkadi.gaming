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
import { AlertTriangle, HardDrive } from 'lucide-react';

export function StorageLimitAlert() {
  const { totalSizeNum, setCheckoutOpen } = useSelection();
  const [activeLimit, setActiveLimit] = useState<{
    threshold: number;
    title: string;
    message: string;
  } | null>(null);
  
  // Track the highest threshold already alerted to prevent spamming
  const lastThresholdRef = useRef<number>(0);

  useEffect(() => {
    const currentThreshold = totalSizeNum > 900 ? 900 : totalSizeNum > 450 ? 450 : totalSizeNum > 280 ? 280 : 0;

    // Trigger only if we cross a threshold upwards
    if (currentThreshold > lastThresholdRef.current) {
      if (currentThreshold === 900) {
        setActiveLimit({
          threshold: 900,
          title: "Surpassed 1 TB!",
          message: "You have surpassed 1 TB. Would you like to review your selection and delete some games, or keep going?",
        });
      } else if (currentThreshold === 450) {
        setActiveLimit({
          threshold: 450,
          title: "1 TB Drive Required",
          message: "You are now using the 1 TB drive. Would you like to review your selection and delete some games, or keep going?",
        });
      } else if (currentThreshold === 280) {
        setActiveLimit({
          threshold: 280,
          title: "500 GB Drive Reached",
          message: "You have exceeded 280 GB and are using the 500 GB drive. Would you like to review your selection and delete some games, or keep going?",
        });
      }
    }

    // Always keep lastThresholdRef synced with current selection state
    lastThresholdRef.current = currentThreshold;
  }, [totalSizeNum]);

  const handleReview = () => {
    setActiveLimit(null);
    setCheckoutOpen(true);
  };

  return (
    <AlertDialog open={!!activeLimit} onOpenChange={(open) => !open && setActiveLimit(null)}>
      <AlertDialogContent className="bg-background/95 backdrop-blur-xl border-white/10 rounded-3xl max-w-sm sm:max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <HardDrive className="h-6 w-6" />
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
            className="w-full sm:w-auto bg-primary text-white rounded-xl hover:bg-primary/90 text-xs font-bold uppercase tracking-wider"
          >
            Review & Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
