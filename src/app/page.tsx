'use client';

import { useState, useEffect, useLayoutEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MOCK_GAMES, CATEGORIES } from '@/app/lib/mock-data';
import { GameCard } from '@/components/game-card';
import { Button } from '@/components/ui/button';
import { Search, HardDrive, Filter, ArrowUpDown, Check, Facebook, Instagram, MessageCircle, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { CheckoutSheet } from '@/components/checkout-sheet';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

export default function HomePage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [maxSize, setMaxSize] = useState(140);
  const [sortOrder, setSortOrder] = useState('title-asc');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isRestored, setIsRestored] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Restore state as early as possible
  useLayoutEffect(() => {
    const restoredCategory = sessionStorage.getItem('home-category');
    const restoredMaxSize = sessionStorage.getItem('home-max-size');
    const restoredSort = sessionStorage.getItem('home-sort');

    if (restoredCategory) setSelectedCategory(restoredCategory);
    if (restoredMaxSize) {
      const parsed = parseInt(restoredMaxSize, 10);
      setMaxSize(parsed > 140 ? 140 : parsed);
    }
    if (restoredSort) setSortOrder(restoredSort);

    // Note: searchQuery is intentionally NOT restored to reset search on return as requested
    setIsRestored(true);
  }, []);

  // Restore scroll position
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

  // Save state on change
  useEffect(() => {
    if (!isRestored) return;
    sessionStorage.setItem('home-category', selectedCategory);
    sessionStorage.setItem('home-max-size', maxSize.toString());
    sessionStorage.setItem('home-sort', sortOrder);
  }, [selectedCategory, maxSize, sortOrder, isRestored]);

  // Save scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isRestored) {
        sessionStorage.setItem('home-scroll-position', window.scrollY.toString());
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isRestored]);

  // Handle outside clicks to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Calculate category counts
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

  const activeFiltersCount = (maxSize < 140 ? 1 : 0) + (sortOrder !== 'title-asc' ? 1 : 0) + (selectedCategory !== 'All' ? 1 : 0);

  const handleSuggestionClick = (gameId: string) => {
    router.push(`/game/${gameId}`);
    setShowSuggestions(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full bg-background/60 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="cursor-pointer select-none flex items-center gap-1.5" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="text-base font-black font-headline tracking-tighter text-white uppercase">
                ALKADI
              </span>
              <span className="text-base font-black font-headline tracking-tighter text-primary uppercase">
                GAMING
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <CheckoutSheet />
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-12 bg-gradient-to-br from-primary/20 to-accent/20 border border-white/5 p-8 md:p-12">
          <div className="max-w-4xl relative z-10 mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-headline mb-4 leading-tight">
              <span className="text-white uppercase block mb-2 tracking-tighter">ALKADI GAMING</span>
              <span className="text-primary text-xl md:text-3xl block font-normal">Buy Your Game Easy, Cheap, and Fast</span>
            </h1>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Discover a new world of games on our site, where excitement and detail come together in a unique experience. Explore now and enjoy a wide range of unbeatable prices!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                onClick={scrollToLibrary}
              >
                Browse Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-primary hover:text-white border-white/20 shadow-lg hover:shadow-primary/20"
                onClick={scrollToContact}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Library Controls */}
        <div id="library" className="flex flex-col gap-8 mb-8 scroll-mt-24">
          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-headline">Library</h2>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
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
                    {cat}
                    <span className={cn(
                      "ml-1.5 px-1.5 py-0.5 rounded-full text-[9px]",
                      selectedCategory === cat ? "bg-white/20" : "bg-primary/10 text-primary"
                    )}>
                      {categoryCounts[cat] || 0}
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
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
                    <span className="text-xs font-bold uppercase tracking-tight">Filters</span>
                    {activeFiltersCount > 0 && (
                      <span className="ml-1 bg-white/20 rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                        {activeFiltersCount}
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-6 bg-background/95 backdrop-blur-xl border-white/10 rounded-2xl shadow-2xl" side="bottom" align="start">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground flex items-center gap-2">
                        <ArrowUpDown className="h-3 w-3 text-primary" /> Sort By
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
                          <SelectItem value="title-asc">Alphabetical (A-Z)</SelectItem>
                          <SelectItem value="year-desc">Year: Newest to Oldest</SelectItem>
                          <SelectItem value="year-asc">Year: Oldest to Newest</SelectItem>
                          <SelectItem value="size-asc">Size: Smallest to Largest</SelectItem>
                          <SelectItem value="size-desc">Size: Largest to Smallest</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center mb-1">
                        <Label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground flex items-center gap-2">
                          <HardDrive className="h-3 w-3 text-primary" /> Max Storage
                        </Label>
                        <span className="text-xs font-bold text-primary">{maxSize} GB</span>
                      </div>
                      <Slider
                        value={[maxSize]}
                        min={1}
                        max={140}
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
                        <Check className="w-3.5 h-3.5 mr-2" /> View Results
                      </Button>
                      {(maxSize < 140 || sortOrder !== 'title-asc' || selectedCategory !== 'All') && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="w-full text-[10px] h-8 text-primary hover:text-primary hover:bg-primary/5 rounded-lg font-bold uppercase tracking-tight"
                          onClick={() => {
                            setMaxSize(140);
                            setSortOrder('title-asc');
                            setSelectedCategory('All');
                            setIsFilterOpen(false);
                          }}
                        >
                          Reset Filters
                        </Button>
                      )}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <div className="relative flex-1" ref={searchContainerRef}>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search games..."
                  className="pl-10 pr-10 bg-secondary/50 border-none h-10 rounded-xl text-sm"
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
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-transparent text-muted-foreground hover:text-foreground"
                    onClick={() => setSearchQuery('')}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
                
                {/* Suggestions Dropdown - Compact Design */}
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

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-secondary/10 rounded-3xl border border-dashed border-white/10">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-20" />
            <h3 className="text-xl font-medium">No games match your filters</h3>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto mt-2">
              Try adjusting your filters or search terms.
            </p>
            <Button
              variant="link"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setMaxSize(140);
                setSortOrder('title-asc');
              }}
              className="text-primary mt-4 font-bold"
            >
              Reset all filters
            </Button>
          </div>
        )}
      </main>

      {/* Social Footer */}
      <footer id="contact" className="border-t border-white/5 bg-secondary/10 pt-16 pb-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold font-headline uppercase tracking-tighter text-primary mb-2">Connect With Us</h3>
              <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                Join our community on social media for exclusive deals and updates.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-sm mx-auto sm:max-w-none">
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full bg-white/5 border-white/10 hover:bg-white/10 group transition-all" asChild>
                <a href="https://www.facebook.com/share/1MBEKXoXME/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-2 h-5 w-5 text-[#1877F2]" /> Facebook
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full bg-white/5 border-white/10 hover:bg-white/10 group transition-all" asChild>
                <a href="https://www.instagram.com/alkadi.leb?igsh=NGdtOTZuM2ZtbmVn&utm_source=qr" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-5 w-5 text-[#E4405F]" /> Instagram
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full bg-white/5 border-white/10 hover:bg-white/10 group transition-all" asChild>
                <a href="https://www.tiktok.com/@alkadi.leb" target="_blank" rel="noopener noreferrer">
                  <svg 
                    className="mr-2 h-5 w-5 fill-current" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01-.01 2.62-.02 5.24-.04 7.86-.02 2.03-.54 4.07-1.81 5.66-1.49 1.86-3.89 2.81-6.22 2.44-2.11-.33-4.07-1.63-5.07-3.41-1.22-2.19-1.14-5.11.33-7.14 1.25-1.74 3.48-2.61 5.59-2.22v4.13c-.93-.15-1.91.07-2.66.68-.73.59-1.1 1.55-.99 2.48.06.9.59 1.73 1.39 2.15.82.44 1.84.45 2.66-.01.81-.46 1.29-1.37 1.34-2.31.02-3.66.01-7.32.01-10.98.01-1.98.01-3.96.01-5.94Z"/>
                  </svg>
                  TikTok
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full bg-white/5 border-white/10 hover:bg-white/10 group transition-all" asChild>
                <a href="https://wa.link/udsgnn" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5 text-[#25D366]" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
