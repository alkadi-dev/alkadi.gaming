'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface CarouselItem {
  id: string;
  videoUrl: string;
  posterUrl: string;
  title: string;
}

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: 'firstlight',
    videoUrl: "https://6a3b66710a4149112241450e.imgix.net/firstlight.mp4",
    posterUrl: "https://images.steamusercontent.com/ugc/18436219776708369386/A5EF63D963D549429C3156545E269E987B28BCA8/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=#000000&letterbox=false",
    title: "007 First Light"
  },
  {
    id: 'horizon',
    videoUrl: "https://6a3b66710a4149112241450e.imgix.net/horizon.mp4",
    posterUrl: "https://wallpapercat.com/w/full/f/4/5/12034-1920x1080-desktop-full-hd-horizon-forbidden-west-background-image.jpg",
    title: "Horizon Forbidden West"
  },
  {
    id: 'cod',
    videoUrl: "https://6a3b66710a4149112241450e.imgix.net/call%20of%20duty.mp4",
    posterUrl: "https://wallpapercave.com/wp/wp11704100.jpg",
    title: "Call of Duty"
  },
  {
    id: 'rdr2',
    videoUrl: "https://6a3b66710a4149112241450e.imgix.net/red%20dead%20redemption%202.mp4",
    posterUrl: "https://wallpapercave.com/wp/wp3770429.png",
    title: "Red Dead Redemption 2"
  },
  {
    id: 'spiderman2',
    videoUrl: "https://6a3b66710a4149112241450e.imgix.net/spider%20man%202.mp4",
    posterUrl: "https://4kwallpapers.com/images/walls/thumbs_2t/11609.jpeg",
    title: "Spider-Man 2"
  },
  {
    id: 'tlou2',
    videoUrl: "https://6a3b66710a4149112241450e.imgix.net/the%20last%20of%20us%20part%202.mp4",
    posterUrl: "https://i.pinimg.com/originals/6d/49/67/6d4967f7c66011f46dc88cad2ef17770.jpg",
    title: "The Last of Us Part II"
  },
  {
    id: 'ac',
    videoUrl: "https://6a3b66710a4149112241450e.imgix.net/assassin%20creed.mp4",
    posterUrl: "https://cdn.mos.cms.futurecdn.net/7d0eaf1ba3b5bf9571dd46c203b89d10.jpg",
    title: "Assassin's Creed Shadows"
  },
  {
    id: 'gow',
    videoUrl: "https://6a3b66710a4149112241450e.imgix.net/god%20of%20war.mp4",
    posterUrl: "https://wallpapers.com/images/hd/godof-war-ragnarok-kratos-atreus-winter-landscape-p0z1cxhlrscxekzw.jpg",
    title: "God of War Ragnarok"
  }
];

export function VideoCarousel() {
  const [mounted, setMounted] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-48 md:h-80 w-full" />;

  // Doubling the array for seamless infinite scroll
  const items = [...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS];

  return (
    <section className="relative w-full overflow-hidden py-12 md:py-20">
      {/* Cinematic Overlays */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
      
      <div className="flex overflow-hidden group/carousel">
        {/* Pause animation when activeId is set (hovered or touched) */}
        <div className={cn(
          "flex animate-scroll-horizontal whitespace-nowrap",
          activeId && "paused-animation"
        )}>
          {items.map((item, i) => {
            const uniqueKey = `${item.id}-${i}`;
            const isHovered = activeId === uniqueKey;
            
            return (
              <div 
                key={uniqueKey} 
                className={cn(
                  "inline-block px-2 md:px-4 w-[280px] md:w-[450px] transition-all duration-500",
                  "group/item",
                  activeId && !isHovered ? "blur-sm opacity-40 scale-95" : "blur-none opacity-100 scale-100"
                )}
                onMouseEnter={() => setActiveId(uniqueKey)}
                onMouseLeave={() => setActiveId(null)}
                onTouchStart={() => setActiveId(uniqueKey)}
                onTouchEnd={() => setActiveId(null)}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black group-hover/item:scale-[1.05] transition-all duration-500 cursor-pointer">
                  {isHovered ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-500"
                    >
                      <source src={item.videoUrl} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={item.posterUrl}
                      alt={item.title}
                      fill
                      className="object-cover opacity-80 group-hover/item:opacity-100 transition-opacity duration-500"
                      sizes="(max-width: 768px) 280px, 450px"
                    />
                  )}
                  
                  {/* Subtle Gradient Shadow for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            );
          })}
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
        .paused-animation {
          animation-play-state: paused !important;
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
