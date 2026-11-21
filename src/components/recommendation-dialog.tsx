
'use client';

import React, { useState, useMemo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/language-context';
import { useSelection } from '@/components/selection-context';
import { MOCK_GAMES, GameEntry } from '@/app/lib/mock-data';
import { Sparkles, ArrowLeft, ArrowRight, Check, HardDrive, Gamepad2, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 'results';

interface Answers {
  budget: number;
  genres: string[];
  style: 'Open World' | 'Story-driven' | 'Both';
  players: 'Single-player' | 'Multiplayer' | 'Both';
  experience: string[];
  era: 'New' | 'Old' | 'Both';
}

const BUDGETS = [
  { label: '$39', value: 39, capacity: 280 },
  { label: '$69', value: 69, capacity: 460 },
  { label: '$89', value: 89, capacity: 930 },
  { label: '$139', value: 139, capacity: 1800 },
];

const GENRES = ['RPG', 'Race', 'Adventure', 'Open World', 'Action', 'Horror', '2D game'];

export function RecommendationDialog() {
  const { t, isRTL, language } = useLanguage();
  const { setSelectedIds, setCheckoutOpen } = useSelection();
  const { toast } = useToast();
  
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [answers, setAnswers] = useState<Answers>({
    budget: 39,
    genres: [],
    style: 'Both',
    players: 'Both',
    experience: [],
    era: 'Both',
  });

  const progress = (step === 'results' ? 100 : (Number(step) / 6) * 100);

  const reset = () => {
    setStep(1);
    setAnswers({
      budget: 39,
      genres: [],
      style: 'Both',
      players: 'Both',
      experience: [],
      era: 'Both',
    });
  };

  const handleNext = () => {
    if (typeof step === 'number' && step < 6) {
      setStep((step + 1) as Step);
    } else if (step === 6) {
      setStep('results');
    }
  };

  const handleBack = () => {
    if (typeof step === 'number' && step > 1) {
      setStep((step - 1) as Step);
    }
  };

  const toggleGenre = (genre: string) => {
    setAnswers(prev => ({
      ...prev,
      genres: prev.genres.includes(genre) ? prev.genres.filter(g => g !== genre) : [...prev.genres, genre]
    }));
  };

  const toggleExperience = (exp: string) => {
    setAnswers(prev => ({
      ...prev,
      experience: prev.experience.includes(exp) ? prev.experience.filter(e => e !== exp) : [...prev.experience, exp]
    }));
  };

  // Bundle Algorithm
  const bundle = useMemo(() => {
    if (step !== 'results') return null;

    const targetCapacity = BUDGETS.find(b => b.value === answers.budget)?.capacity || 280;
    
    // 1. Calculate Score for each game
    const scoredGames = MOCK_GAMES.map(game => {
      let score = 0;
      const gameSize = parseFloat(game.size.replace(/[^\d.]/g, '')) || 0;
      const gameYear = parseInt(game.releaseYear) || 2020;

      // Genre Match
      answers.genres.forEach(g => {
        if (game.categories.includes(g)) score += 10;
      });

      // Style Match
      if (answers.style === 'Open World' && game.categories.includes('Open World')) score += 15;
      if (answers.style === 'Story-driven' && game.categories.includes('Adventure')) score += 15;
      
      // Players Match
      const isMulti = game.categories.includes('2 players');
      if (answers.players === 'Multiplayer' && isMulti) score += 20;
      if (answers.players === 'Single-player' && !isMulti) score += 10;

      // Era Match
      if (answers.era === 'New' && gameYear >= 2022) score += 10;
      if (answers.era === 'Old' && gameYear < 2022) score += 10;

      // Recommended bonus
      if (game.isRecommended) score += 5;

      return { game, score, size: gameSize };
    }).sort((a, b) => b.score - a.score);

    // 2. Build Bundle
    const selected: GameEntry[] = [];
    let currentSize = 0;

    for (const item of scoredGames) {
      if (currentSize + item.size <= targetCapacity) {
        selected.push(item.game);
        currentSize += item.size;
      }
      if (currentSize >= targetCapacity - 5) break; // Close enough
    }

    return {
      games: selected,
      totalSize: currentSize,
      targetCapacity,
      budget: BUDGETS.find(b => b.value === answers.budget)?.label || '$39'
    };
  }, [step, answers]);

  const applyBundle = () => {
    if (bundle) {
      setSelectedIds(bundle.games.map(g => g.id));
      setIsOpen(false);
      setCheckoutOpen(true);
      toast({
        title: "Bundle Applied!",
        description: `${bundle.games.length} games have been added to your selection.`,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (open) reset(); }}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full sm:w-auto rounded-full bg-primary/10 border-primary/20 hover:bg-primary text-white font-bold h-12 px-8 shadow-2xl transition-all duration-300 group"
        >
          <Sparkles className={cn("h-4 w-4 text-primary group-hover:text-white transition-colors", isRTL ? "ml-2" : "mr-2")} />
          {t('recommend.title')}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] md:max-w-3xl bg-background/95 backdrop-blur-2xl border-white/10 rounded-[2.5rem] p-0 overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/5">
          <Progress value={progress} className="h-full rounded-none bg-transparent" />
        </div>

        <div className="p-6 md:p-10">
          <DialogHeader className="mb-8 flex flex-col items-center text-center">
            <DialogTitle className="text-xl md:text-3xl font-black font-headline tracking-tighter uppercase text-white mb-2">
              {step === 'results' ? t('recommend.results.title') : t('recommend.title')}
            </DialogTitle>
            {step !== 'results' && (
              <DialogDescription className="text-muted-foreground text-sm font-medium">
                Step {step} of 6
              </DialogDescription>
            )}
          </DialogHeader>

          <div className="min-h-[350px] flex flex-col">
            {step === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="col-span-full mb-4 text-center">
                  <h3 className="text-lg font-bold text-white/90">{t('recommend.q1')}</h3>
                </div>
                {BUDGETS.map((b) => (
                  <button
                    key={b.value}
                    onClick={() => setAnswers(prev => ({ ...prev, budget: b.value }))}
                    className={cn(
                      "p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center gap-2",
                      answers.budget === b.value 
                        ? "bg-primary border-primary shadow-[0_0_20px_rgba(var(--primary),0.3)] scale-105" 
                        : "bg-secondary/20 border-white/5 hover:border-white/20"
                    )}
                  >
                    <span className="text-3xl font-black text-white">{b.label}</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-white/60">Limit: {b.capacity}GB</span>
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white/90">{t('recommend.q2')}</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {GENRES.map((g) => (
                    <button
                      key={g}
                      onClick={() => toggleGenre(g)}
                      className={cn(
                        "px-6 py-3 rounded-full border text-xs font-bold uppercase tracking-wider transition-all duration-300",
                        answers.genres.includes(g)
                          ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                          : "bg-secondary/20 border-white/5 text-muted-foreground hover:border-white/20"
                      )}
                    >
                      {t(`cat.${g}`)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white/90">{t('recommend.q3')}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {([
                    { id: 'Open World', label: t('recommend.q3.open') },
                    { id: 'Story-driven', label: t('recommend.q3.story') },
                    { id: 'Both', label: t('recommend.q3.both') }
                  ] as const).map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setAnswers(prev => ({ ...prev, style: s.id }))}
                      className={cn(
                        "p-6 rounded-2xl border transition-all duration-300 font-bold",
                        answers.style === s.id
                          ? "bg-primary border-primary text-white"
                          : "bg-secondary/20 border-white/5 text-muted-foreground hover:border-white/20"
                      )}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white/90">{t('recommend.q4')}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {([
                    { id: 'Single-player', label: t('recommend.q4.single') },
                    { id: 'Multiplayer', label: t('recommend.q4.multi') },
                    { id: 'Both', label: t('recommend.q4.both') }
                  ] as const).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setAnswers(prev => ({ ...prev, players: p.id }))}
                      className={cn(
                        "p-6 rounded-2xl border transition-all duration-300 font-bold",
                        answers.players === p.id
                          ? "bg-primary border-primary text-white"
                          : "bg-secondary/20 border-white/5 text-muted-foreground hover:border-white/20"
                      )}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white/90">{t('recommend.q5')}</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { id: 'Story', label: t('recommend.q5.story') },
                    { id: 'Competitive', label: t('recommend.q5.comp') },
                    { id: 'Relaxing', label: t('recommend.q5.relax') },
                    { id: 'Action', label: t('recommend.q5.action') },
                    { id: 'Exploration', label: t('recommend.q5.explore') }
                  ].map((e) => (
                    <button
                      key={e.id}
                      onClick={() => toggleExperience(e.id)}
                      className={cn(
                        "px-6 py-3 rounded-full border text-xs font-bold uppercase tracking-wider transition-all duration-300",
                        answers.experience.includes(e.id)
                          ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                          : "bg-secondary/20 border-white/5 text-muted-foreground hover:border-white/20"
                      )}
                    >
                      {e.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white/90">{t('recommend.q6')}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {([
                    { id: 'New', label: t('recommend.q6.new') },
                    { id: 'Old', label: t('recommend.q6.old') },
                    { id: 'Both', label: t('recommend.q6.both') }
                  ] as const).map((e) => (
                    <button
                      key={e.id}
                      onClick={() => setAnswers(prev => ({ ...prev, era: e.id }))}
                      className={cn(
                        "p-6 rounded-2xl border transition-all duration-300 font-bold",
                        answers.era === e.id
                          ? "bg-primary border-primary text-white"
                          : "bg-secondary/20 border-white/5 text-muted-foreground hover:border-white/20"
                      )}
                    >
                      {e.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 'results' && bundle && (
              <div className="flex flex-col h-full animate-in fade-in zoom-in-95 duration-700">
                <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-black text-white tracking-tighter uppercase">{t('recommend.results.pkg', { pkg: bundle.budget })}</h3>
                    <p className="text-primary font-bold text-sm">{t('recommend.results.storage', { size: bundle.targetCapacity })}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">{t('recommend.results.games', { count: bundle.games.length }).split(' ')[1]}</p>
                      <p className="text-xl font-black text-white">{bundle.games.length}</p>
                    </div>
                    <div className="h-8 w-px bg-white/10" />
                    <div className="text-center">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">{t('recommend.results.total', { size: 0 }).split(':')[0]}</p>
                      <p className="text-xl font-black text-primary">{bundle.totalSize.toFixed(0)} GB</p>
                    </div>
                  </div>
                </div>

                <ScrollArea className="flex-1 max-h-[400px] pr-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {bundle.games.map((game) => (
                      <div key={game.id} className="flex items-center gap-3 p-2 rounded-xl bg-secondary/20 border border-white/5">
                        <div className="relative h-12 w-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image src={game.thumbnail} alt={game.title} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-xs truncate" dir="ltr">{game.title}</h4>
                          <p className="text-[9px] text-muted-foreground uppercase font-medium">{t(`cat.${game.categories[0]}`)} • {game.size}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-8 font-black uppercase tracking-tight shadow-xl shadow-primary/20 text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-3 mt-4"
                  onClick={applyBundle}
                >
                  <Check className="h-6 w-6" />
                  {t('recommend.results.apply')}
                </Button>
              </div>
            )}

            {step !== 'results' && (
              <div className="mt-auto pt-8 flex items-center justify-between border-t border-white/5">
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  disabled={step === 1}
                  className="rounded-xl px-6 font-bold text-muted-foreground hover:text-white disabled:opacity-0"
                >
                  <ArrowLeft className={cn("h-4 w-4", isRTL ? "ml-2" : "mr-2")} />
                  {t('recommend.btn.back')}
                </Button>
                <Button
                  onClick={handleNext}
                  className="rounded-xl px-10 bg-white/10 hover:bg-primary text-white font-bold transition-all shadow-xl"
                >
                  {step === 6 ? t('recommend.btn.finish') : t('recommend.btn.next')}
                  <ArrowRight className={cn("h-4 w-4", isRTL ? "mr-2" : "ml-2")} />
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
