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

  // CRITICAL FIX: Global Safety Reset for UI Freezes
  // This watches the checkout sheet state and forces interaction recovery if Radix fails to clean up.
  useEffect(() => {
    if (!isCheckoutOpen) {
      const timer = setTimeout(() => {
        // Only force recovery if the body is actually stuck (pointer-events: none)
        if (document.body.style.pointerEvents === 'none') {
          document.body.style.pointerEvents = 'auto';
          document.body.style.overflow = 'auto';
        }
      }, 500); // Give plenty of time for exit animations
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

  const isOverLimit = totalSizeNum > 1800;

  const addToSelection = (id: string) => {
    // If we are already over the limit, prevent adding more
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
