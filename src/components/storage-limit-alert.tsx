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
  const lastThresholdRef = useRef<number>(0);

  useEffect(() => {
    if (isCheckoutOpen) return;

    const currentThreshold = 
      totalSizeNum > 1800 ? 1800 : 
      totalSizeNum > 1400 ? 1400 :
      totalSizeNum > 960 ? 960 : 
      totalSizeNum > 460 ? 460 : 
      totalSizeNum > 280 ? 280 : 0;

    // Trigger only if we cross a threshold upwards
    if (currentThreshold > lastThresholdRef.current) {
      if (currentThreshold === 1800) {
        setActiveLimit({
          threshold: 1800,
          title: "Maximum Storage Reached!",
          message: "You have reached the maximum storage limit of 1800 GB. Please review your selection and remove some games to continue.",
          icon: <Ban className="h-6 w-6 text-destructive" />
        });
      } else if (currentThreshold === 1400) {
        setActiveLimit({
          threshold: 1400,
          title: "Approaching Final Limit",
          message: "You have reached 1400 GB. Would you like to review your selection and remove some games, or continue adding more until 1800 GB?",
          icon: <AlertTriangle className="h-6 w-6 text-primary" />
        });
      } else if (currentThreshold === 960) {
        setActiveLimit({
          threshold: 960,
          title: "Surpassed 960 GB!",
          message: "You have surpassed 960 GB. Switching to 2 TB drive capacity (Limit: 1400 GB). Keep going?",
          icon: <HardDrive className="h-6 w-6 text-primary" />
        });
      } else if (currentThreshold === 460) {
        setActiveLimit({
          threshold: 460,
          title: "1 TB Drive Required",
          message: "You have exceeded 460 GB. You are now using the 1 TB drive (Limit: 960 GB). Keep going?",
          icon: <HardDrive className="h-6 w-6 text-primary" />
        });
      } else if (currentThreshold === 280) {
        setActiveLimit({
          threshold: 280,
          title: "500 GB Drive Reached",
          message: "You have exceeded 280 GB and are using the 500 GB drive (Limit: 460 GB). Keep going?",
          icon: <HardDrive className="h-6 w-6 text-primary" />
        });
      }
    }

    lastThresholdRef.current = currentThreshold;
  }, [totalSizeNum, isCheckoutOpen]);

  const handleReview = () => {
    setActiveLimit(null);
    setTimeout(() => {
      document.body.style.pointerEvents = 'auto';
      document.body.style.overflow = 'auto';
      setCheckoutOpen(true);
    }, 300);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setActiveLimit(null);
      setTimeout(() => {
        if (!isCheckoutOpen) {
          document.body.style.pointerEvents = 'auto';
          document.body.style.overflow = 'auto';
        }
      }, 300);
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
          <AlertDialogCancel className="w-full sm:w-auto bg-white/5 border-white/10 rounded-xl hover:bg-white/10 text-xs font-bold uppercase tracking-wider">
            Keep Going
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleReview}
            className={`w-full sm:w-auto rounded-xl text-xs font-bold uppercase tracking-wider text-white ${
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
