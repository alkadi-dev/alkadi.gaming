'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { MOCK_GAMES } from '@/app/lib/mock-data';

interface SelectionContextType {
  selectedIds: string[];
  addToSelection: (id: string) => void;
  removeFromSelection: (id: string) => void;
  isInSelection: (id: string) => boolean;
  clearSelection: () => void;
  totalSizeNum: number;
  isOverLimit: boolean;
  currentCapacity: number;
  isCheckoutOpen: boolean;
  setCheckoutOpen: (open: boolean) => void;
  usageColorClass: string;
  fillColorClass: string;
  usagePercentage: number;
}

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

export function SelectionProvider({ children }: { children: React.ReactNode }) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  // Load selection from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('alkadi_selection');
    if (saved) {
      try {
        setSelectedIds(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse selection from localStorage', e);
      }
    }
  }, []);

  // Save selection to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('alkadi_selection', JSON.stringify(selectedIds));
  }, [selectedIds]);

  // Global Safety Reset for UI Freezes
  useEffect(() => {
    if (!isCheckoutOpen) {
      const timer = setTimeout(() => {
        if (document.body.style.pointerEvents === 'none') {
          document.body.style.pointerEvents = 'auto';
          document.body.style.overflow = 'auto';
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isCheckoutOpen]);

  const totalSizeNum = useMemo(() => {
    return selectedIds.reduce((acc, id) => {
      const game = MOCK_GAMES.find((g) => g.id === id);
      if (!game) return acc;
      const sizeValue = parseFloat(game.size.replace(/[^\d.]/g, ''));
      return acc + (isNaN(sizeValue) ? 0 : sizeValue);
    }, 0);
  }, [selectedIds]);

  // Calculate current capacity milestone
  const currentCapacity = useMemo(() => {
    if (totalSizeNum > 1400) return 1800;
    if (totalSizeNum > 960) return 1400;
    if (totalSizeNum > 460) return 960;
    if (totalSizeNum > 280) return 460;
    return 280;
  }, [totalSizeNum]);

  const isOverLimit = totalSizeNum > 1800;

  const usagePercentage = useMemo(() => {
    if (currentCapacity === 0) return 0;
    return Math.min((totalSizeNum / currentCapacity) * 100, 100);
  }, [totalSizeNum, currentCapacity]);

  const status = useMemo(() => {
    // Thresholds based on drive type for the border color
    if (currentCapacity === 280) {
      if (totalSizeNum >= 270) return 'critical';
      if (totalSizeNum >= 230) return 'medium';
      if (totalSizeNum >= 200) return 'low';
    } else if (currentCapacity === 460) {
      if (totalSizeNum >= 450) return 'critical';
      if (totalSizeNum >= 430) return 'medium';
      if (totalSizeNum >= 400) return 'low';
    } else if (currentCapacity === 960) {
      if (totalSizeNum >= 950) return 'critical';
      if (totalSizeNum >= 930) return 'medium';
      if (totalSizeNum >= 900) return 'low';
    } else if (currentCapacity === 1400) {
      if (totalSizeNum >= 1380) return 'critical';
      if (totalSizeNum >= 1350) return 'medium';
      if (totalSizeNum >= 1300) return 'low';
    } else if (currentCapacity === 1800) {
      if (totalSizeNum >= 1790) return 'critical';
      if (totalSizeNum >= 1750) return 'medium';
      if (totalSizeNum >= 1700) return 'low';
    }
    return 'normal';
  }, [totalSizeNum, currentCapacity]);

  const usageColorClass = useMemo(() => {
    switch (status) {
      case 'critical': return "border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.2)]";
      case 'medium': return "border-red-500";
      case 'low': return "border-orange-500";
      default: return "border-white/10";
    }
  }, [status]);

  const fillColorClass = useMemo(() => {
    // Progressive fill color every 15% of usage
    if (usagePercentage <= 15) return "bg-red-500/10"; // Very light red
    if (usagePercentage <= 30) return "bg-red-500/25"; // Light red
    if (usagePercentage <= 45) return "bg-red-500/45"; // Soft red
    if (usagePercentage <= 60) return "bg-red-500/65"; // Medium red
    if (usagePercentage <= 75) return "bg-red-600/85"; // Dark red
    if (usagePercentage <= 90) return "bg-red-800";    // Deep red
    return "bg-red-600"; // Bright, intense red (90-100%)
  }, [usagePercentage]);

  const addToSelection = (id: string) => {
    if (isOverLimit) return;
    setSelectedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const removeFromSelection = (id: string) => {
    setSelectedIds((prev) => prev.filter((i) => i !== id));
  };

  const isInSelection = (id: string) => selectedIds.includes(id);

  const clearSelection = () => setSelectedIds([]);

  return (
    <SelectionContext.Provider
      value={{ 
        selectedIds, 
        addToSelection, 
        removeFromSelection, 
        isInSelection, 
        clearSelection,
        totalSizeNum,
        isOverLimit,
        currentCapacity,
        isCheckoutOpen,
        setCheckoutOpen,
        usageColorClass,
        fillColorClass,
        usagePercentage
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelection() {
  const context = useContext(SelectionContext);
  if (context === undefined) {
    throw new Error('useSelection must be used within a SelectionProvider');
  }
  return context;
}
