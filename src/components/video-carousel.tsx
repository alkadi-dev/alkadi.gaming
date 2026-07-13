'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const VIDEO_URL = "https://6a3b66710a4149112241450e.imgix.net/firstlight.mp4";
const VIDEO_COUNT = 8;

export function VideoCarousel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-48 md:h-80 w-full bg-black/20" />;

  return (
    <section className="relative w-full overflow-hidden bg-black/40 py-12 md:py-20 border-y border-white/5">
      {/* Cinematic Overlays */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="flex overflow-hidden">
        {/* Infinite Scroll Track */}
        <div className="flex animate-scroll-horizontal whitespace-nowrap">
          {[...Array(VIDEO_COUNT * 2)].map((_, i) => (
            <div 
              key={i} 
              className="inline-block px-2 md:px-4 w-[280px] md:w-[450px]"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary/20 shadow-2xl ring-1 ring-white/10 group">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                >
                  <source src={VIDEO_URL} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-horizontal {
          animation: scroll-horizontal 40s linear infinite;
        }
        /* Faster on mobile */
        @media (max-width: 768px) {
          .animate-scroll-horizontal {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  );
}
