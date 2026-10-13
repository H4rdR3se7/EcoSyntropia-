import { useState, useEffect } from 'react';

export interface LocalClickRecord {
  productId: string;
  productName: string;
  collection: string;
  timestamp: string;
}

const STORAGE_KEY = 'ecosyntropia_demo_local_clicks_v1';

export function useClickTracker() {
  const [clickCount, setClickCount] = useState<number>(0);
  const [clickHistory, setClickHistory] = useState<LocalClickRecord[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as LocalClickRecord[];
        setClickHistory(parsed);
        setClickCount(parsed.length);
      }
    } catch {
      // Local storage disabled or error
    }
  }, []);

  const registerDemonstrativeClick = (productId: string, productName: string, collection: string) => {
    const newRecord: LocalClickRecord = {
      productId,
      productName,
      collection,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };

    setClickHistory(prev => {
      const updated = [newRecord, ...prev];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated.slice(0, 50)));
      } catch {
        // Safe ignore
      }
      return updated;
    });

    setClickCount(prev => prev + 1);
  };

  const resetLocalClicks = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Safe ignore
    }
    setClickHistory([]);
    setClickCount(0);
  };

  return {
    clickCount,
    clickHistory,
    registerDemonstrativeClick,
    resetLocalClicks
  };
}
