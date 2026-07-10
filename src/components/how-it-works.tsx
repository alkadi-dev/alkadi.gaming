'use client';

import { useRef, useState, useEffect } from 'react';
import { HardDrive, Gamepad2, MessageCircle, Truck, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/components/language-context';
import { cn } from '@/lib/utils';

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: any;
  isReversed?: boolean;
  isLast?: boolean;
}

function Step({ 
  number, 
  title, 
  description, 
  icon: Icon, 
  isReversed, 
  isLast 
}: StepProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { isRTL } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={cn(
        "relative flex flex-col md:flex-row items-center gap-12 md:gap-24 py-16 transition-all duration-1000 ease-out",
        isReversed ? "md:flex-row-reverse" : "md:flex-row",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      )}
    >
      {/* Connector Line (Desktop Only) */}
      {!isLast && (
        <div className="hidden md:block absolute left-1/2 top-[85%] -translate-x-1/2 w-px h-[40%] bg-gradient-to-b from-primary/40 to-transparent z-0" />
      )}

      {/* Content Column */}
      <div className={cn(
        "flex-1 w-full space-y-5",
        isReversed 
          ? (isRTL ? "md:text-left" : "md:text-right") 
          : (isRTL ? "md:text-right" : "md:text-left"),
        "text-center" // Centered on mobile
      )}>
        <div className={cn(
          "inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-black text-3xl shadow-[0_0_30px_rgba(var(--primary),0.4)] mb-4",
          isVisible ? "scale-100 rotate-0" : "scale-50 rotate-45 transition-transform duration-700"
        )}>
          {number}
        </div>
        <h3 className="text-3xl md:text-5xl font-black font-headline text-white uppercase tracking-tighter leading-none drop-shadow-lg">
          {title}
        </h3>
        <p className="text-muted-foreground text-base md:text-xl font-medium leading-relaxed max-w-lg mx-auto md:mx-0">
          {description}
        </p>
      </div>

      {/* Illustration Column */}
      <div className="flex-1 flex justify-center items-center w-full z-10">
        <div className="relative group">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-all duration-1000 opacity-50" />
          
          {/* Main Card */}
          <div className="relative w-44 h-44 md:w-72 md:h-72 rounded-[3rem] bg-secondary/30 backdrop-blur-sm border border-white/10 shadow-2xl flex items-center justify-center transform transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-primary/40 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <Icon className="w-24 h-24 md:w-40 md:h-40 text-primary drop-shadow-[0_0_20px_rgba(var(--primary),0.6)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t('how.step1.title'),
      desc: t('how.step1.desc'),
      icon: HardDrive
    },
    {
      title: t('how.step2.title'),
      desc: t('how.step2.desc'),
      icon: Gamepad2
    },
    {
      title: t('how.step3.title'),
      desc: t('how.step3.desc'),
      icon: MessageCircle
    },
    {
      title: t('how.step4.title'),
      desc: t('how.step4.desc'),
      icon: ShieldCheck
    },
    {
      title: t('how.step5.title'),
      desc: t('how.step5.desc'),
      icon: Truck
    }
  ];

  return (
    <section className="relative container mx-auto px-4 py-24 md:py-40 overflow-hidden border-t border-white/5">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="text-center mb-24 md:mb-40">
        <h2 className="text-4xl md:text-8xl font-black font-headline tracking-tighter text-white uppercase mb-6 drop-shadow-2xl">
          {t('how.title')}
        </h2>
        <div className="h-2 w-32 bg-primary mx-auto rounded-full shadow-lg shadow-primary/50" />
      </div>

      <div className="max-w-6xl mx-auto space-y-16 md:space-y-0">
        {steps.map((step, idx) => (
          <Step 
            key={idx}
            number={(idx + 1).toString()}
            title={step.title}
            description={step.desc}
            icon={step.icon}
            isReversed={idx % 2 !== 0}
            isLast={idx === steps.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
