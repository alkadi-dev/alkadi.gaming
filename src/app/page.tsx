'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MOCK_GAMES, CATEGORIES } from '@/app/lib/mock-data';
import { GameCard } from '@/components/game-card';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = MOCK_GAMES.filter((game) => {
    const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-8">
              <Image
                src="https://preview.redd.it/vu4yon5f36yg1.png?width=140&height=78&auto=webp&s=59b64e26f9f88a37877f2f2aae3c6342a6fc812e"
                alt="Alkadi Gaming Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-bold font-headline tracking-tight uppercase hidden sm:inline-block">
              ALKADI<span className="text-primary"> GAMING</span>
            </span>
          </div>
          
          <div className="relative w-full max-w-sm hidden md:flex items-center">
            <Search className="absolute left-3 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search games..."
              className="pl-10 bg-secondary/50 border-none focus-visible:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:flex">Catalog</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-12 bg-gradient-to-br from-primary/20 to-accent/20 border border-white/5 p-8 md:p-12">
          <div className="max-w-2xl relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 leading-tight">
              Discover Your Next <span className="text-accent underline underline-offset-8 decoration-primary">Digital Adventure</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our curated selection of top-tier gaming experiences across all genres. From epic RPGs to high-octane racing.
            </p>
            <div className="flex flex-wrap gap-4">
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

        {/* Filters */}
        <div id="library" className="flex flex-col gap-6 mb-8 scroll-mt-24">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-bold font-headline">Library</h2>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
              {CATEGORIES.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? 'default' : 'secondary'}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-6 transition-all ${
                    selectedCategory === cat ? 'bg-primary' : 'hover:bg-primary/20'
                  }`}
                >
                  {cat}
                </Button>
              ))}
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

        {/* Gallery */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-medium">No games found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
            <Button
              variant="link"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-primary mt-2"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
