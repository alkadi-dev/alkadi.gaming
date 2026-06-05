'use client';

import { useState } from 'react';
import { MOCK_GAMES, CATEGORIES } from '@/app/lib/mock-data';
import { GameCard } from '@/components/game-card';
import { Button } from '@/components/ui/button';
import { Search, HardDrive, Filter, ArrowUpDown, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { CheckoutSheet } from '@/components/checkout-sheet';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [maxSize, setMaxSize] = useState(250);
  const [sortOrder, setSortOrder] = useState('title-asc');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const activeFiltersCount = (maxSize < 250 ? 1 : 0) + (sortOrder !== 'title-asc' ? 1 : 0);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold font-headline tracking-tighter text-primary uppercase">
              Alkadi <span className="text-foreground">Gaming</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative w-full max-w-sm hidden md:flex items-center">
              <Search className="absolute left-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search games..."
                className="pl-10 bg-secondary/50 border-none focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <CheckoutSheet />
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="relative rounded-3xl overflow-hidden mb-12 bg-gradient-to-br from-primary/20 to-accent/20 border border-white/5 p-8 md:p-12">
          <div className="max-w-4xl relative z-10 mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-headline mb-4 leading-tight">
              <span className="text-white uppercase block mb-2">ALKADI GAMING</span>
              <span className="text-primary text-xl md:text-3xl block font-normal">buy your game eazy, cheap and fast</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover your next adventure—explore and buy the hottest games in one place. Curated collections, unique finds, and unbeatable prices—start your gaming journey today!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                onClick={scrollToLibrary}
              >
                Browse Now
              </Button>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-primary/10 to-transparent hidden lg:block" />
        </div>

        <div id="library" className="flex flex-col gap-8 mb-8 scroll-mt-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-4 flex-1">
              <h2 className="text-2xl font-bold font-headline">Library</h2>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
                {CATEGORIES.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? 'default' : 'secondary'}
                    size="sm"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-6 transition-all h-8 text-xs flex items-center justify-center ${
                      selectedCategory === cat ? 'bg-primary' : 'hover:bg-primary/20'
                    }`}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <PopoverTrigger asChild>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className={`rounded-full h-10 px-4 gap-2 transition-all border border-white/5 ${
                      activeFiltersCount > 0 ? 'bg-primary text-white' : 'bg-secondary/50'
                    }`}
                  >
                    <Filter className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-tight">Filters & Sort</span>
                    {activeFiltersCount > 0 && (
                      <span className="ml-1 bg-white/20 rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                        {activeFiltersCount}
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-6 bg-background/95 backdrop-blur-xl border-white/10 rounded-2xl shadow-2xl" side="bottom" align="end">
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
                        <span className="text-xs font-bold text-primary">1 - {maxSize} GB</span>
                      </div>
                      <Slider
                        value={[maxSize]}
                        min={1}
                        max={250}
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
                      {(maxSize < 250 || sortOrder !== 'title-asc') && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="w-full text-[10px] h-8 text-primary hover:text-primary hover:bg-primary/5 rounded-lg font-bold uppercase tracking-tight"
                          onClick={() => {
                            setMaxSize(250);
                            setSortOrder('title-asc');
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
            </div>
          </div>

          <div className="md:hidden">
            <Input
              placeholder="Search games..."
              className="bg-secondary/50 border-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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
            <h3 className="text-xl font-medium">No games match your filters</h3>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto mt-2">
              Try adjusting your category, search terms, or storage size range.
            </p>
            <Button
              variant="link"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setMaxSize(250);
                setSortOrder('title-asc');
              }}
              className="text-primary mt-4 font-bold"
            >
              Reset all filters
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
