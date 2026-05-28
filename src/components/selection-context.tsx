'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface SelectionContextType {
  selectedIds: string[];
  addToSelection: (id: string) => void;
  removeFromSelection: (id: string) => void;
  isInSelection: (id: string) => boolean;
  clearSelection: () => void;
}

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

export function SelectionProvider({ children }: { children: React.ReactNode }) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

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

  const addToSelection = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const removeFromSelection = (id: string) => {
    setSelectedIds((prev) => prev.filter((i) => i !== id));
  };

  const isInSelection = (id: string) => selectedIds.includes(id);

  const clearSelection = () => setSelectedIds([]);

  return (
    <SelectionContext.Provider
      value={{ selectedIds, addToSelection, removeFromSelection, isInSelection, clearSelection }}
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
