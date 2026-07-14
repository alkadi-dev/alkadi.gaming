
'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const [centeredOffset, setCenteredOffset] = useState({ x: 0, y: 0 });
  const [isVideoReady, setIsVideoReady] = useState(false);
  const isMobile = useIsMobile();
  const centeringTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-48 md:h-80 w-full" />;

  const mobileRow1 = CAROUSEL_ITEMS.slice(0, 4);
  const mobileRow2 = CAROUSEL_ITEMS.slice(4, 8);

  const desktopItems = [...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS];
  const row1Items = [...mobileRow1, ...mobileRow1, ...mobileRow1];
  const row2Items = [...mobileRow2, ...mobileRow2, ...mobileRow2];

  const handleInteraction = (e: React.MouseEvent | React.TouchEvent, key: string) => {
    if (!isMobile) return;
    
    // If tapping the already active item, close it
    if (activeId === key) {
      setActiveId(null);
      setCenteredOffset({ x: 0, y: 0 });
      setIsVideoReady(false);
      if (centeringTimeoutRef.current) clearTimeout(centeringTimeoutRef.current);
      return;
    }

    // Centering Logic
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const screenCenterX = window.innerWidth / 2;
    const screenCenterY = window.innerHeight / 2;

    setActiveId(key);
    setCenteredOffset({
      x: screenCenterX - centerX,
      y: screenCenterY - centerY
    });
    
    // Wait for the move animation (500ms) before allowing video
    setIsVideoReady(false);
    if (centeringTimeoutRef.current) clearTimeout(centeringTimeoutRef.current);
    centeringTimeoutRef.current = setTimeout(() => {
      setIsVideoReady(true);
    }, 500);
  };

  const renderItem = (item: CarouselItem, index: number, isRow2: boolean = false) => {
    const uniqueKey = `${item.id}-${index}-${isRow2 ? 'r2' : 'r1'}`;
    const isActive = activeId === uniqueKey;
    const showVideo = isMobile ? (isActive && isVideoReady) : isActive;

    return (
      <div 
        key={uniqueKey} 
        className={cn(
          "inline-block px-2 md:px-4 w-[240px] md:w-[450px] transition-all duration-500 ease-out transform-gpu will-change-transform",
          "group/item",
          activeId && !isActive ? "blur-md opacity-30 scale-90 pointer-events-none" : "blur-none opacity-100 scale-100",
          isMobile && isActive && "z-[100]"
        )}
        style={isMobile && isActive ? {
          transform: `translate(${centeredOffset.x}px, ${centeredOffset.y}px) scale(1.15)`
        } : undefined}
        onMouseEnter={!isMobile ? () => setActiveId(uniqueKey) : undefined}
        onMouseLeave={!isMobile ? () => {
          setActiveId(null);
          setIsVideoReady(false);
        } : undefined}
        onClick={(e) => handleInteraction(e, uniqueKey)}
      >
        <div className={cn(
          "relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black transition-all duration-500 cursor-pointer",
          !isMobile && "group-hover/item:scale-[1.05]"
        )}>
          {showVideo ? (
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
              className="object-cover opacity-80 transition-opacity duration-500"
              sizes="(max-width: 768px) 240px, 450px"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full overflow-hidden py-8 md:py-20">
      {/* Cinematic Overlays */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
      
      {isMobile ? (
        <div className="flex flex-col gap-10 py-6">
          {/* Mobile Row 1: Right to Left */}
          <div className="flex overflow-visible">
            <div className={cn(
              "flex animate-scroll-left whitespace-nowrap",
              activeId && "paused-animation"
            )}>
              {row1Items.map((item, i) => renderItem(item, i))}
            </div>
          </div>
          
          {/* Mobile Row 2: Left to Right */}
          <div className="flex overflow-visible">
            <div className={cn(
              "flex animate-scroll-right whitespace-nowrap",
              activeId && "paused-animation"
            )}>
              {row2Items.map((item, i) => renderItem(item, i, true))}
            </div>
          </div>
        </div>
      ) : (
        /* Desktop Version: Single Row */
        <div className="flex overflow-hidden group/carousel py-4">
          <div className={cn(
            "flex animate-scroll-horizontal-desktop whitespace-nowrap",
            activeId && "paused-animation"
          )}>
            {desktopItems.map((item, i) => renderItem(item, i))}
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes scroll-horizontal-desktop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-33.3333%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-horizontal-desktop {
          animation: scroll-horizontal-desktop 40s linear infinite;
        }
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }
        .paused-animation {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}
