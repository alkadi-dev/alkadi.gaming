'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const currentScroll = window.scrollY;
      const scrollPercentage = currentScroll / scrollHeight;

      // Show button if user has scrolled past 40% (0.4)
      setIsVisible(scrollPercentage > 0.4);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case the page is already scrolled on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      variant="default"
      size="icon"
      className={cn(
        "fixed bottom-8 right-8 z-[60] rounded-full w-12 h-12 shadow-2xl transition-all duration-500 transform bg-primary hover:scale-110 active:scale-90",
        isVisible ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-20 opacity-0 pointer-events-none"
      )}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  );
}
