'use client';

import { useState, useEffect, useRef } from 'react';
import { Gamepad2, ShieldCheck, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCounterProps {
  end: number;
  label: string;
  suffix?: string;
  icon: React.ReactNode;
  duration?: number;
}

function StatCounter({ end, label, suffix = '', icon, duration = 2000 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(entry.target);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Quartic out easing for a smoother finish
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    
    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [hasStarted, end, duration]);

  return (
    <div 
      ref={counterRef}
      className="flex flex-col items-center justify-center p-8 rounded-3xl bg-secondary/20 border border-white/5 shadow-2xl"
    >
      <div className="mb-6 p-4 rounded-2xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="text-5xl md:text-6xl font-black font-headline tracking-tighter mb-2 text-white tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground text-center">
        {label}
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        <StatCounter 
          end={80} 
          label="Game Collection" 
          suffix="+" 
          icon={<Gamepad2 className="w-8 h-8 md:w-10 md:h-10" />} 
        />
        <StatCounter 
          end={100} 
          label="Working Games" 
          suffix="%" 
          icon={<ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />} 
        />
        <StatCounter 
          end={60} 
          label="Happy Customers" 
          suffix="+" 
          icon={<Users className="w-8 h-8 md:w-10 md:h-10" />} 
        />
      </div>
    </section>
  );
}
