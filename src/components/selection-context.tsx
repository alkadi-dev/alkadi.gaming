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
    if (totalSizeNum > 900) return 1400;
    if (totalSizeNum > 760) return 900;
    if (totalSizeNum > 460) return 760;
    if (totalSizeNum > 280) return 460;
    return 280;
  }, [totalSizeNum]);

  const isOverLimit = totalSizeNum > 1800;

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
        setCheckoutOpen
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
