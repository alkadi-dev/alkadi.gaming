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
  const { totalSizeNum, setCheckoutOpen, isCheckoutOpen } = useSelection();
  const [activeLimit, setActiveLimit] = useState<{
    threshold: number;
    title: string;
    message: string;
    icon?: React.ReactNode;
  } | null>(null);
  
  // Track the highest threshold already alerted to prevent spamming
  // Initialize with -1 to differentiate from the first calculation
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
    // This prevents the alert from firing immediately on page load
    if (lastThresholdRef.current === -1) {
      lastThresholdRef.current = currentThreshold;
      return;
    }

    // Only alert if we've crossed a threshold upwards and the checkout is not already open
    if (currentThreshold > lastThresholdRef.current && !isCheckoutOpen) {
      if (currentThreshold === 1800) {
        setActiveLimit({
          threshold: 1800,
          title: "Maximum Storage Reached!",
          message: "You have reached the absolute maximum storage limit of 1800 GB. Please review your selection and remove some games to continue.",
          icon: <Ban className="h-6 w-6 text-destructive" />
        });
      } else if (currentThreshold === 1400) {
        setActiveLimit({
          threshold: 1400,
          title: "Approaching Final Limit",
          message: "You have exceeded 1400 GB. Would you like to stop and remove some games, or confirm that you wish to continue towards the 1800 GB limit?",
          icon: <AlertTriangle className="h-6 w-6 text-primary" />
        });
      } else if (currentThreshold === 960) {
        setActiveLimit({
          threshold: 960,
          title: "Surpassed 960 GB!",
          message: "You have surpassed 960 GB. Your capacity is now transitioning to the 1.5 TB drive (Limit: 1400 GB). Keep going?",
          icon: <HardDrive className="h-6 w-6 text-primary" />
        });
      } else if (currentThreshold === 460) {
        setActiveLimit({
          threshold: 460,
          title: "1 TB Drive Required",
          message: "You have exceeded 460 GB. You are now using the 1 TB drive capacity (Limit: 960 GB). Continue adding?",
          icon: <HardDrive className="h-6 w-6 text-primary" />
        });
      } else if (currentThreshold === 280) {
        setActiveLimit({
          threshold: 280,
          title: "500 GB Drive Reached",
          message: "You have exceeded the 280 GB threshold and are now using the 500 GB drive (Limit: 460 GB). Keep going?",
          icon: <HardDrive className="h-6 w-6 text-primary" />
        });
      }
    }

    // Always keep track of the threshold to handle deletions resetting the alert trigger
    lastThresholdRef.current = currentThreshold;
  }, [totalSizeNum, isCheckoutOpen]);

  const handleReview = () => {
    setActiveLimit(null);
    // Small timeout to allow the alert dialog to close cleanly before opening checkout
    setTimeout(() => {
      setCheckoutOpen(true);
    }, 150);
  };

  const handleOpenChange = (open: boolean) => {
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
          <AlertDialogCancel className="w-full sm:w-auto bg-white/5 border-white/10 rounded-xl hover:bg-white/10 text-xs font-bold uppercase tracking-wider h-11">
            Keep Going
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleReview}
            className={`w-full sm:w-auto rounded-xl text-xs font-bold uppercase tracking-wider text-white h-11 ${
              activeLimit?.threshold >= 1400 ? 'bg-destructive hover:bg-destructive/90' : 'bg-primary hover:bg-primary/90'
            }`}
          >
            Review & Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
