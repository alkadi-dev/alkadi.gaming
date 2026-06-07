'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BackToTop() {
  const [showTop, setShowTop] = useState(false);
  const [showDown, setShowDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const currentScroll = window.scrollY;
      const scrollPercentage = currentScroll / scrollHeight;

      // 40% (0.4) threshold for the toggle effect
      const pastThreshold = scrollPercentage > 0.4;
      
      setShowTop(pastThreshold);
      setShowDown(!pastThreshold);
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

  const scrollToGoDown = () => {
    const libraryElement = document.getElementById('library');
    const mainElement = document.querySelector('main');
    
    // Target the library section if it exists (home page), otherwise the main content
    const targetElement = libraryElement || mainElement;

    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      // Fallback: scroll down 80% of the viewport height if no target found
      window.scrollTo({
        top: window.innerHeight * 0.8,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Back to Top Button: Appears after 40% scroll */}
      <Button
        variant="default"
        size="icon"
        className={cn(
          "fixed bottom-8 right-8 z-[60] rounded-full w-12 h-12 shadow-2xl transition-all duration-500 transform bg-primary hover:scale-110 active:scale-90",
          showTop ? "translate-y-0 opacity-100 pointer-events-auto scale-100" : "translate-y-20 opacity-0 pointer-events-none scale-50"
        )}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>

      {/* Go Down Button: Visible before 40% scroll */}
      <Button
        variant="secondary"
        size="icon"
        className={cn(
          "fixed bottom-8 right-8 z-[60] rounded-full w-12 h-12 shadow-2xl transition-all duration-500 transform bg-background/80 backdrop-blur-xl border border-white/10 hover:scale-110 active:scale-90 text-primary",
          showDown ? "translate-y-0 opacity-100 pointer-events-auto scale-100" : "translate-y-20 opacity-0 pointer-events-none scale-50"
        )}
        onClick={scrollToGoDown}
        aria-label="Go down"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </Button>
    </>
  );
}
