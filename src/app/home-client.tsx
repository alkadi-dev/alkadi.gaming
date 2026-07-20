'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MOCK_GAMES, CATEGORIES } from '@/app/lib/mock-data';
import { GameCard } from '@/components/game-card';
import { Button } from '@/components/ui/button';
import { Search, HardDrive, Filter, ArrowUpDown, Check, X, Languages, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { CheckoutSheet } from '@/components/checkout-sheet';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSelection } from '@/components/selection-context';
import { StatsSection } from '@/components/stats-section';
import { HowItWorks } from '@/components/how-it-works';
import { VideoCarousel } from '@/components/video-carousel';
import { useLanguage } from '@/components/language-context';
import { PricingDialog } from '@/components/pricing-dialog';
import { cn } from '@/lib/utils';

// Module-level variable to persist across client-side navigation in the same tab session
let hasSplashBeenShown = false;

// --- Brand Icons ---
const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.388-.667.666-1.078 1.335-1.384 2.122-.297.765-.499 1.636-.559 2.912-.06 1.281-.074 1.688-.074 4.948s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.387 2.126.666.666 1.335 1.079 2.122 1.385.765.296 1.636.499 2.912.558 1.281.06 1.687.074 4.948.074s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.387.666-.666 1.079-1.335 1.385-2.122.296-.765.499-1.636.558-2.912.06 1.281.074-1.687.074-4.948s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.387-2.126C21.319 1.347 20.651.935 19.864.63c-.765-.297-1.636-.499-2.912-.559C15.669.015 15.262 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.493.559.217.96.477 1.38.896.419.42.679.819.896 1.379.244.422.438 1.056.493 2.227.056 1.265.071 1.647.071 4.85s-.015 3.585-.071 4.85c-.055 1.17-.249 1.805-.493 2.227-.217.559-.477.96-.896 1.38-.42.419-.819.679-1.379.896-.422.244-1.056.438-2.227.493-1.265.056-1.647.071-4.85.071s-3.585-.015-4.85-.071c-1.17-.055-1.805-.249-2.227-.493-.559-.217-.96-.477-1.38-.896-.419-.42-.679-.819-.896-1.379-.244-.422-.438-1.056-.493-2.227C2.175 15.585 2.16 15.203 2.16 12s.016-3.585.071-4.85c.055-1.17.249-1.805.493-2.227.217-.559.477-.96.896-1.38.42-.419.819-.679 1.379-.896.422-.244 1.056-.438 2.227-.493 1.265-.055 1.647-.071 4.85-.071zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16.02a4.02 4.02 0 110-8.04 4.02 4.02 0 010 8.04zm7.846-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
);

const TikTokIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.84.11V9.5a6.33 6.33 0 0 0-1-.08 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.29 8.29 0 0 0 3.3 1.05V6.69z"/></svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.328-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.123.57-.081 1.758-.718 2.005-1.412.248-.695.248-1.29.173-1.412-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
);

function SocialLink({ href, label, icon, color }: { href: string, label: string, icon: React.ReactNode, color: string }) {
  return (
    <Button 
      variant="outline" 
      size="lg" 
      className="w-full sm:w-auto rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group flex items-center gap-3 px-6 shadow-sm hover:shadow-lg"
      asChild
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <span className="transition-all duration-300 group-hover:scale-110" style={{ color }}>
          {icon}
        </span>
        <span className="font-bold text-sm tracking-tight text-white/80 group-hover:text-white">{label}</span>
      </a>
    </Button>
  );
}

export default function HomeClient() {
  const router = useRouter();
  const { totalSizeNum, currentCapacity } = useSelection();
  const { t, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [maxSize, setMaxSize] = useState(150);
  const [sortOrder, setSortOrder] = useState('title-asc');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isRestored, setIsRestored] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Set isVideoReady based on whether splash was already shown to prevent re-triggering on navigation
  const [isVideoReady, setIsVideoReady] = useState(hasSplashBeenShown);
  
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroVideoUrl = "https://6a3b66710a4149112241450e.imgix.net/controller%20video.mov";

  useEffect(() => {
    setMounted(true);
    
    // Only run splash timer if it hasn't been shown in this tab session
    if (!hasSplashBeenShown) {
      const timer = setTimeout(() => {
        setIsVideoReady(true);
        hasSplashBeenShown = true;
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setIsVideoReady(true);
      hasSplashBeenShown = true;
    }
  }, [mounted]);

  useEffect(() => {
    const restoredCategory = sessionStorage.getItem('home-category');
    const restoredMaxSize = sessionStorage.getItem('home-max-size');
    const restoredSort = sessionStorage.getItem('home-sort');

    if (restoredCategory) setSelectedCategory(restoredCategory);
    if (restoredMaxSize) {
      const parsed = parseInt(restoredMaxSize, 10);
      setMaxSize(parsed > 150 ? 150 : parsed);
    }
    if (restoredSort) setSortOrder(restoredSort);

    setIsRestored(true);
  }, []);

  useEffect(() => {
    if (!isRestored) return;

    const restoredScroll = sessionStorage.getItem('home-scroll-position');
    if (restoredScroll) {
      const timer = setTimeout(() => {
        window.scrollTo({
          top: parseInt(restoredScroll, 10),
          behavior: 'instant'
        });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isRestored]);

  useEffect(() => {
    if (!isRestored) return;
    sessionStorage.setItem('home-category', selectedCategory);
    sessionStorage.setItem('home-max-size', maxSize.toString());
    sessionStorage.setItem('home-sort', sortOrder);
  }, [selectedCategory, maxSize, sortOrder, isRestored]);

  useEffect(() => {
    const handleScroll = () => {
      if (isRestored) {
        sessionStorage.setItem('home-scroll-position', window.scrollY.toString());
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isRestored]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CATEGORIES.forEach(cat => {
      if (cat === 'All') {
        counts[cat] = MOCK_GAMES.length;
      } else if (cat === 'Recommended') {
        counts[cat] = MOCK_GAMES.filter(g => g.isRecommended).length;
      } else {
        counts[cat] = MOCK_GAMES.filter(g => g.categories.includes(cat)).length;
      }
    });
    return counts;
  }, []);

  const suggestions = searchQuery.trim().length > 0 
    ? MOCK_GAMES.filter(game => game.title.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
    : [];

  const filteredGames = MOCK_GAMES.filter((game) => {
    const matchesCategory = 
      selectedCategory === 'All' ? true :
      selectedCategory === 'Recommended' ? game.isRecommended :
      game.categories.includes(selectedCategory);
      
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    const gameSize = parseFloat(game.size.replace(/[^\d.]/g, '')) || 0;
    const matchesSize = gameSize <= maxSize;
    
    return matchesCategory && matchesSearch && matchesSize;
  }).sort((a, b) => {
    if (sortOrder === 'year-desc') {
      return parseInt(b.releaseYear) - parseInt(a.releaseYear);
    }
    if (sortOrder === 'year-asc') {
      return parseInt(a.releaseYear) - parseInt(b.releaseYear);
    }
    if (sortOrder === 'size-asc') {
      const sizeA = parseFloat(a.size.replace(/[^\d.]/g, '')) || 0;
      const sizeB = parseFloat(b.size.replace(/[^\d.]/g, '')) || 0;
      return sizeA - sizeB;
    }
    if (sortOrder === 'size-desc') {
      const sizeA = parseFloat(a.size.replace(/[^\d.]/g, '')) || 0;
      const sizeB = parseFloat(b.size.replace(/[^\d.]/g, '')) || 0;
      return sizeB - sizeA;
    }
    return a.title.localeCompare(b.title);
  });

  const scrollToLibrary = () => {
    const element = document.getElementById('library');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const activeFiltersCount = (maxSize < 150 ? 1 : 0) + (sortOrder !== 'title-asc' ? 1 : 0) + (selectedCategory !== 'All' ? 1 : 0);

  const handleSuggestionClick = (gameId: string) => {
    router.push(`/game/${gameId}`);
    setShowSuggestions(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Visual Splash Screen until Video is Ready - Only show if not previously shown in session */}
      {mounted && !isVideoReady && !hasSplashBeenShown && (
        <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-700">
          <div className="flex flex-col items-center gap-6 animate-in fade-in zoom-in-95 duration-1000">
             <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl sm:text-4xl font-black font-headline tracking-tighter text-white uppercase">
                ALKADI
              </span>
              <span className="text-3xl sm:text-4xl font-black font-headline tracking-tighter text-primary uppercase">
                GAMING
              </span>
            </div>
            <div className="relative w-48 h-1 bg-white/5 rounded-full overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-primary animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
            </div>
            <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/40 mt-2">Initializing Experience</p>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 w-full bg-background/60 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between gap-2" dir="ltr">
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <div 
              className="cursor-pointer select-none flex items-center gap-1" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="text-sm sm:text-base font-black font-headline tracking-tighter text-white uppercase">
                ALKADI
              </span>
              <span className="text-sm sm:text-base font-black font-headline tracking-tighter text-primary uppercase">
                GAMING
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 flex-grow justify-end">
            {mounted && <PricingDialog />}
            <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 px-2.5 sm:px-3 rounded-full border border-white/10 transition-all hover:bg-white/10 h-8">
              <HardDrive className="h-3.5 w-3.5 text-primary" />
              <div className="text-[10px] sm:text-xs font-bold tracking-tight whitespace-nowrap">
                <span className={cn(totalSizeNum > currentCapacity ? "text-destructive" : "text-white")}>
                  {totalSizeNum.toFixed(0)}
                </span>
                <span className="text-muted-foreground mx-0.5">/</span>
                <span className="text-muted-foreground">{currentCapacity} GB</span>
              </div>
            </div>
            {mounted && <CheckoutSheet />}
          </div>
        </div>
      </header>

      {/* Hero Section - Edge to Edge Video */}
      <section className="relative w-full overflow-hidden h-[600px] lg:h-[calc(100vh-56px)] flex items-center justify-center mb-12 bg-black">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={() => {
            setIsVideoReady(true);
            hasSplashBeenShown = true;
          }}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
            isVideoReady ? "opacity-80" : "opacity-0"
          )}
        >
          <source src={heroVideoUrl} />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        <div className={cn(
          "w-full max-w-5xl relative z-10 mx-auto text-center px-6 sm:px-16 py-12 transition-all duration-1000 transform",
          isVideoReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h1 className="text-4xl md:text-8xl lg:text-9xl font-bold font-headline mb-8 leading-tight" dir="ltr">
            <span className="text-white uppercase block mb-4 md:mb-6 tracking-tighter drop-shadow-2xl">ALKADI GAMING</span>
            <span className="text-primary text-2xl md:text-5xl lg:text-7xl block font-normal drop-shadow-lg">{t('hero.subtitle')}</span>
          </h1>
          <h2 className="sr-only">Alkadi Gaming Catalog</h2>
          <p className="text-white/90 text-base md:text-2xl lg:text-4xl max-w-4xl mx-auto mb-10 md:mb-14 leading-relaxed font-medium drop-shadow-md">
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              className="bg-primary text-white text-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-primary/40 px-8 h-14 rounded-md"
              onClick={scrollToLibrary}
            >
              {t('hero.browse')}
            </button>
            <button 
              className="text-white text-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95 bg-white/10 backdrop-blur-md hover:bg-primary hover:text-white border border-white/20 shadow-2xl px-8 h-14 rounded-md"
              onClick={scrollToContact}
            >
              {t('hero.contact')}
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <div className={cn(
        "transition-opacity duration-1000",
        isVideoReady ? "opacity-100" : "opacity-0"
      )}>
        <StatsSection />
      </div>

      {/* Video Carousel Section */}
      <div className={cn(
        "transition-opacity duration-1000",
        isVideoReady ? "opacity-100" : "opacity-0"
      )}>
        <VideoCarousel />
      </div>

      {/* How It Works Section */}
      <div className={cn(
        "transition-opacity duration-1000",
        isVideoReady ? "opacity-100" : "opacity-0"
      )}>
        <HowItWorks />
      </div>

      <main className={cn(
        "flex-1 container mx-auto px-4 py-8 transition-opacity duration-1000",
        isVideoReady ? "opacity-100" : "opacity-0"
      )}>
        <div id="library" className="flex flex-col gap-12 mb-12 scroll-mt-24">
          <div className="flex flex-col space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-7xl font-black font-headline tracking-tighter text-white uppercase">
                {t('library.title')}
              </h2>
              <div className="h-1.5 w-24 bg-primary mx-auto rounded-full shadow-lg shadow-primary/20" />
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-start gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
                {CATEGORIES.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? 'default' : 'secondary'}
                    size="sm"
                    onClick={() => setSelectedCategory(cat)}
                    className={cn(
                      "rounded-full px-4 transition-all h-8 text-[10px] sm:text-xs font-bold uppercase tracking-tight whitespace-nowrap",
                      selectedCategory === cat ? "bg-primary" : "hover:bg-primary/20"
                    )}
                  >
                    {t(`cat.${cat}`)}
                    <span className={cn(
                      "px-1.5 py-0.5 rounded-full text-[9px]",
                      selectedCategory === cat ? "bg-white/20" : "bg-primary/10 text-primary",
                      isRTL ? "mr-1.5" : "ml-1.5"
                    )}>
                      {categoryCounts[cat] || 0}
                    </span>
                  </Button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {mounted ? (
                  <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                    <PopoverTrigger asChild>
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        className={cn(
                          "rounded-xl h-10 px-4 gap-2 transition-all border border-white/5",
                          activeFiltersCount > 0 ? "bg-primary text-white" : "bg-secondary/50"
                        )}
                      >
                        <Filter className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-tight">{t('filters.label')}</span>
                        {activeFiltersCount > 0 && (
                          <span className={cn("bg-white/20 rounded-full h-4 w-4 flex items-center justify-center text-[10px]", isRTL ? "mr-1" : "ml-1")}>
                            {activeFiltersCount}
                          </span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-6 bg-background/95 backdrop-blur-xl border-white/10 rounded-2xl shadow-2xl" side="bottom" align="start">
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <Label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground flex items-center gap-2">
                            <ArrowUpDown className="h-3 w-3 text-primary" /> {t('filters.sortBy')}
                          </Label>
                          <Select 
                            value={sortOrder} 
                            onValueChange={(val) => {
                              setSortOrder(val);
                              setIsFilterOpen(false);
                            }}
                          >
                            <SelectTrigger className="bg-secondary/30 border-white/5 rounded-xl h-10">
                              <SelectValue placeholder="Sort order" />
                            </SelectTrigger>
                            <SelectContent className="bg-background border-white/10 rounded-xl">
                              <SelectItem value="title-asc">{t('filters.alphabetical')}</SelectItem>
                              <SelectItem value="year-desc">{t('filters.newest')}</SelectItem>
                              <SelectItem value="year-asc">{t('filters.oldest')}</SelectItem>
                              <SelectItem value="size-asc">{t('filters.smallest')}</SelectItem>
                              <SelectItem value="size-desc">{t('filters.largest')}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-4">
                          <div className="flex justify-between items-center mb-1">
                            <Label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground flex items-center gap-2">
                              <HardDrive className="h-3 w-3 text-primary" /> {t('filters.maxStorage')}
                            </Label>
                            <span className="text-xs font-bold text-primary">{maxSize} GB</span>
                          </div>
                          <Slider
                            value={[maxSize]}
                            min={1}
                            max={150}
                            step={1}
                            onValueChange={(val) => setMaxSize(val[0])}
                            className="py-1"
                          />
                        </div>

                        <div className="pt-4 border-t border-white/5 flex flex-col gap-2">
                          <Button
                            className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-10 font-bold uppercase tracking-tight text-xs"
                            onClick={() => setIsFilterOpen(false)}
                          >
                            <Check className={cn("w-3.5 h-3.5", isRTL ? "ml-2" : "mr-2")} /> {t('filters.viewResults')}
                          </Button>
                          {(maxSize < 150 || sortOrder !== 'title-asc' || selectedCategory !== 'All') && (
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className="w-full text-[10px] h-8 text-primary hover:text-primary hover:bg-primary/5 rounded-lg font-bold uppercase tracking-tight"
                              onClick={() => {
                                setMaxSize(150);
                                setSortOrder('title-asc');
                                setSelectedCategory('All');
                                setIsFilterOpen(false);
                              }}
                            >
                              {t('filters.reset')}
                            </Button>
                          )}
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <Button variant="secondary" size="sm" className="rounded-xl h-10 px-4 gap-2 bg-secondary/50 border border-white/5 opacity-50">
                    <Filter className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-tight">{t('filters.label')}</span>
                  </Button>
                )}

                <div className="relative flex-1" ref={searchContainerRef}>
                  <Search className={cn("absolute top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground", isRTL ? "right-3" : "left-3")} />
                  <Input
                    placeholder={t('search.placeholder')}
                    className={cn("bg-secondary/50 border-none h-10 rounded-xl text-sm", isRTL ? "pr-10 pl-10" : "pl-10 pr-10")}
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                  />
                  {searchQuery && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn("absolute top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-transparent text-muted-foreground hover:text-foreground", isRTL ? "left-2" : "right-2")}
                      onClick={() => setSearchQuery('')}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                  
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 z-[60] bg-background/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="p-1 space-y-0.5">
                        {suggestions.map((game) => (
                          <button
                            key={game.id}
                            className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-secondary/50 transition-colors text-left group"
                            onClick={() => handleSuggestionClick(game.id)}
                          >
                            <div className="relative h-8 w-12 rounded overflow-hidden flex-shrink-0">
                              <Image src={game.thumbnail} alt={game.title} fill className="object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] font-bold truncate group-hover:text-primary transition-colors">{game.title}</p>
                              <p className="text-[9px] text-muted-foreground">{game.releaseYear} • {game.size}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-secondary/10 rounded-3xl border border-dashed border-white/10">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-20" />
            <h3 className="text-xl font-medium">{t('search.noResults')}</h3>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto mt-2">
              {t('search.tryAdjusting')}
            </p>
            <Button
              variant="link"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setMaxSize(150);
                setSortOrder('title-asc');
              }}
              className="text-primary mt-4 font-bold"
            >
              {t('filters.reset')}
            </Button>
          </div>
        )}
      </main>

      <footer id="contact" className={cn(
        "border-t border-white/5 bg-secondary/10 pt-16 pb-12 mt-20 transition-opacity duration-1000",
        isVideoReady ? "opacity-100" : "opacity-0"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold font-headline uppercase tracking-tighter text-primary mb-2">{t('footer.connect')}</h3>
              <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                {t('footer.join')}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-2xl mx-auto" dir="ltr">
              <SocialLink 
                href="https://www.facebook.com/share/1MBEKXoXME/?mibextid=wwXIfr" 
                label="Facebook" 
                icon={<FacebookIcon />} 
                color="#1877F2" 
              />
              <SocialLink 
                href="https://www.instagram.com/alkadi.leb?igsh=NGdtOTZuM2ZtbmVn&utm_source=qr" 
                label="Instagram" 
                icon={<InstagramIcon />} 
                color="#E4405F" 
              />
              <SocialLink 
                href="https://www.tiktok.com/@alkadi.leb" 
                label="TikTok" 
                icon={<TikTokIcon />} 
                color="#FFFFFF" 
              />
              <SocialLink 
                href="https://wa.link/udsgnn" 
                label="WhatsApp" 
                icon={<WhatsAppIcon />} 
                color="#25D366" 
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
