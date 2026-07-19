'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/components/language-context';

export function BackToTop() {
  const { language, setLanguage } = useLanguage();
  const [showTop, setShowTop] = useState(false);
  const [showDown, setShowDown] = useState(true);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (scrollHeight <= 0) {
            ticking.current = false;
            return;
          }

          const currentScroll = window.scrollY;
          const scrollPercentage = currentScroll / scrollHeight;

          // 50% (0.5) threshold for the toggle effect
          const pastThreshold = scrollPercentage > 0.5;
          
          setShowTop(pastThreshold);
          setShowDown(!pastThreshold);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
    // Scroll to the absolute bottom of the page
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Floating Language Switcher: Positioned above scroll buttons */}
      <Button
        variant="secondary"
        size="icon"
        className={cn(
          "fixed bottom-24 right-8 z-[60] rounded-full w-12 h-12 shadow-2xl transition-all duration-500 transform bg-background/80 backdrop-blur-xl border border-white/10 hover:scale-110 active:scale-90 text-primary flex items-center justify-center font-bold text-xs uppercase"
        )}
        onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
        aria-label="Toggle language"
      >
        {language === 'en' ? 'AR' : 'EN'}
      </Button>

      {/* Back to Top Button: Appears after 50% scroll */}
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

      {/* Go Down Button: Visible before 50% scroll */}
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
