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
    videoUrl: "https://streamable.com/rhy4xm",
    posterUrl: "https://images.steamusercontent.com/ugc/18436219776708369386/A5EF63D963D549429C3156545E269E987B28BCA8/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=#000000&letterbox=false",
    title: "007 First Light"
  },
  {
    id: 'horizon',
    videoUrl: "https://streamable.com/jkn5pc",
    posterUrl: "https://wallpapercat.com/w/full/f/4/5/12034-1920x1080-desktop-full-hd-horizon-forbidden-west-background-image.jpg",
    title: "Horizon Forbidden West"
  },
  {
    id: 'cod',
    videoUrl: "https://streamable.com/43lu40",
    posterUrl: "https://wallpapercave.com/wp/wp11704100.jpg",
    title: "Call of Duty Modern Warfare 2"
  },
  {
    id: 'rdr2',
    videoUrl: "https://streamable.com/mw7sa5",
    posterUrl: "https://wallpapercave.com/wp/wp3770429.png",
    title: "Red Dead Redemption 2"
  },
  {
    id: 'spiderman2',
    videoUrl: "https://streamable.com/bf97w8",
    posterUrl: "https://4kwallpapers.com/images/walls/thumbs_2t/11609.jpeg",
    title: "Spider-Man 2"
  },
  {
    id: 'tlou2',
    videoUrl: "https://streamable.com/vyc9xi",
    posterUrl: "https://i.pinimg.com/originals/6d/49/67/6d4967f7c66011f46dc88cad2ef17770.jpg",
    title: "The Last of Us Part II"
  },
  {
    id: 'ac',
    videoUrl: "https://streamable.com/xgfa05",
    posterUrl: "https://wallpapercave.com/wp/wp13980393.jpg",
    title: "Assassin's Creed Shadows"
  },
  {
    id: 'gow',
    videoUrl: "https://streamable.com/4y7p0g",
    posterUrl: "https://wallpapers.com/images/hd/godof-war-ragnarok-kratos-atreus-winter-landscape-p0z1cxhlrscxekzw.jpg",
    title: "God of War Ragnarok"
  },
  {
    id: 'got',
    videoUrl: "https://streamable.com/1yusy4",
    posterUrl: "https://images3.alphacoders.com/138/thumbbig-1387219.webp",
    title: "Ghost of Tsushima"
  },
  {
    id: 'cyberpunk',
    videoUrl: "https://streamable.com/qr5uyd",
    posterUrl: "https://4kwallpapers.com/images/walls/thumbs_2t/20154.jpg",
    title: "Cyberpunk 2077"
  },
  {
    id: 'u4',
    videoUrl: "https://streamable.com/d11jh9",
    posterUrl: "https://wallpapercave.com/wp/wp2272912.jpg",
    title: "Uncharted 4"
  },
  {
    id: 're',
    videoUrl: "https://streamable.com/yloxlp",
    posterUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f05a9b5b-ead5-460e-8573-73ba2fff9cde/djxpgft-a53b41e0-9850-484d-9b01-1f19e4621bc6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9mMDVhOWI1Yi1lYWQ1LTQ2MGUtODU3My03M2JhMmZmZjljZGUvZGp4cGdmdC1hNTNiNDFlMC05ODUwLTQ4NGQtOWIwMS0xZjE5ZTQ2MjFiYzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VMBTlqB1IKBkCo8rL1VBzc-d83VgjfRTf5Q3UVM6-OI",
    title: "Resident Evil Requiem"
  }
];

export function VideoCarousel() {
  const [mounted, setMounted] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CarouselItem | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-48 md:h-80 w-full" />;

  // Row Logic
  const mobileRow1 = CAROUSEL_ITEMS.slice(0, 4);
  const mobileRow2 = CAROUSEL_ITEMS.slice(4, 8);
  const mobileRow3 = CAROUSEL_ITEMS.slice(8, 12);

  const desktopRow1 = CAROUSEL_ITEMS.slice(0, 6);
  const desktopRow2 = CAROUSEL_ITEMS.slice(6, 12);

  // Triple buffers for seamless looping
  const row1Items = [...mobileRow1, ...mobileRow1, ...mobileRow1];
  const row2Items = [...mobileRow2, ...mobileRow2, ...mobileRow2];
  const row3Items = [...mobileRow3, ...mobileRow3, ...mobileRow3];

  const dRow1Items = [...desktopRow1, ...desktopRow1, ...desktopRow1];
  const dRow2Items = [...desktopRow2, ...desktopRow2, ...desktopRow2];

  const renderItem = (item: CarouselItem, index: number, rowTag: string) => {
    return (
      <div 
        key={`${item.id}-${index}-${rowTag}`} 
        className={cn(
          "inline-block px-2 md:px-4 w-[240px] md:w-[450px] transition-all duration-500 ease-out transform-gpu cursor-pointer",
          "group/item",
          selectedItem && "blur-md opacity-30 scale-95"
        )}
        onClick={() => setSelectedItem(item)}
      >
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black transition-all duration-300">
          <Image
            src={item.posterUrl}
            alt={item.title}
            fill
            className="object-cover opacity-80 group-hover/item:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 240px, 450px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    );
  };

  const isStreamable = (url: string) => url.includes('streamable.com');
  
  const getStreamableEmbedUrl = (url: string) => {
    // For Mobile: Autoplay, Muted by default to bypass blocks, but ENABLE controls
    if (isMobile) {
      return url.replace('streamable.com/', 'streamable.com/e/') + '?autoplay=1&muted=1&controls=1&playsinline=1';
    }
    // For Desktop: Clean cinematic loop (original behavior)
    return url.replace('streamable.com/', 'streamable.com/e/') + '?autoplay=1&muted=1&controls=0';
  };

  return (
    <section className="relative w-full overflow-hidden py-8 md:py-20" dir="ltr">
      <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
      
      <div className="flex flex-col gap-10 py-10 overflow-visible">
        {isMobile ? (
          <>
            <div className="flex overflow-visible">
              <div className={cn("flex animate-scroll-left whitespace-nowrap", selectedItem && "paused-animation")}>
                {row1Items.map((item, i) => renderItem(item, i, 'm-r1'))}
              </div>
            </div>
            <div className="flex overflow-visible">
              <div className={cn("flex animate-scroll-right whitespace-nowrap", selectedItem && "paused-animation")}>
                {row2Items.map((item, i) => renderItem(item, i, 'm-r2'))}
              </div>
            </div>
            <div className="flex overflow-visible">
              <div className={cn("flex animate-scroll-left whitespace-nowrap", selectedItem && "paused-animation")}>
                {row3Items.map((item, i) => renderItem(item, i, 'm-r3'))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex overflow-visible">
              <div className={cn("flex animate-scroll-left whitespace-nowrap", selectedItem && "paused-animation")}>
                {dRow1Items.map((item, i) => renderItem(item, i, 'd-r1'))}
              </div>
            </div>
            <div className="flex overflow-visible">
              <div className={cn("flex animate-scroll-right whitespace-nowrap", selectedItem && "paused-animation")}>
                {dRow2Items.map((item, i) => renderItem(item, i, 'd-r2'))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Full Screen Active Video Overlay */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[150] flex items-center justify-center bg-background/90 backdrop-blur-xl p-4 sm:p-10 cursor-pointer animate-in fade-in duration-300"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(var(--primary),0.2)] border border-white/10 animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()} // Prevent closing when interacting with the video/controls
          >
            {isStreamable(selectedItem.videoUrl) ? (
              <div className="w-full h-full relative">
                <iframe
                  src={getStreamableEmbedUrl(selectedItem.videoUrl)}
                  className="w-full h-full border-none"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            ) : (
              <video
                autoPlay
                loop
                muted
                playsInline
                controls={isMobile}
                className={cn("w-full h-full object-cover", !isMobile && "no-controls")}
                src={selectedItem.videoUrl}
              />
            )}
            
            {!isMobile && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
