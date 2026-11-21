'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface CarouselItem {
  id: string;
  imageUrl: string;
  title: string;
}

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: '007firstlight',
    imageUrl: "/thumbnail/007firstlight.jpg",
    title: "007 First Light"
  },
  {
    id: 'hfw',
    imageUrl: "/thumbnail/hfw.jpg",
    title: "Horizon Forbidden West"
  },
  {
    id: 'cod-mw2',
    imageUrl: "/thumbnail/cod-mw2.jpg",
    title: "Call of Duty Modern Warfare 2"
  },
  {
    id: '5',
    imageUrl: "/thumbnail/5.jpg",
    title: "Red Dead Redemption 2"
  },
  {
    id: '6',
    imageUrl: "/thumbnail/6.jpg",
    title: "Spider-Man 2"
  },
  {
    id: 'tlou2',
    imageUrl: "/thumbnail/tlou2.jpg",
    title: "The Last of Us Part II"
  },
  {
    id: 'ac-shadows',
    imageUrl: "/thumbnail/ac-shadows.jpg",
    title: "Assassin's Creed Shadows"
  },
  {
    id: '10',
    imageUrl: "/thumbnail/10.jpg",
    title: "God of War Ragnarok"
  },
  {
    id: 'got',
    imageUrl: "/thumbnail/got.jpg",
    title: "Ghost of Tsushima"
  },
  {
    id: '12',
    imageUrl: "/thumbnail/12.jpg",
    title: "Cyberpunk 2077"
  },
  {
    id: 'u4',
    imageUrl: "/thumbnail/u4.jpg",
    title: "Uncharted 4"
  },
  {
    id: 'plague',
    imageUrl: "/thumbnail/plague.jpg",
    title: "Resident Evil Requiem"
  },
  // New Games
  {
    id: 'wukong',
    imageUrl: "/thumbnail/wukong.jpg",
    title: "Black Myth: Wukong"
  },
  {
    id: 'crimson',
    imageUrl: "/thumbnail/crimson.jpg",
    title: "Crimson Desert"
  },
  {
    id: 'forza6',
    imageUrl: "/thumbnail/forza6.jpg",
    title: "Forza Horizon 6"
  },
  {
    id: 'pragmata',
    imageUrl: "/thumbnail/pragmata.jpg",
    title: "Pragmata"
  },
  {
    id: 'witcher3-remastered',
    imageUrl: "/thumbnail/witcher3-remastered.jpg",
    title: "The Witcher 3 Remastered"
  },
  {
    id: 'tlou1',
    imageUrl: "/thumbnail/tlou1.jpg",
    title: "The Last of Us Part I"
  },
  {
    id: 'fc5',
    imageUrl: "/thumbnail/fc5.jpg",
    title: "Far Cry 5"
  },
  {
    id: '55',
    imageUrl: "/thumbnail/55.jpg"
  }
];

export function VideoCarousel() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-48 md:h-80 w-full" />;

  const mobileRow1 = CAROUSEL_ITEMS.slice(0, 4);
  const mobileRow2 = CAROUSEL_ITEMS.slice(4, 8);
  const mobileRow3 = CAROUSEL_ITEMS.slice(8, 12);
  const mobileRow4 = CAROUSEL_ITEMS.slice(12, 16);
  const mobileRow5 = CAROUSEL_ITEMS.slice(16, 20);

  const desktopRow1 = CAROUSEL_ITEMS.slice(0, 6);
  const desktopRow2 = CAROUSEL_ITEMS.slice(6, 12);
  const desktopRow3 = CAROUSEL_ITEMS.slice(12, 18); // Show the specific 6 for desktop line 3

  const row1Items = isMobile ? [...mobileRow1, ...mobileRow1, ...mobileRow1] : [...desktopRow1, ...desktopRow1, ...desktopRow1];
  const row2Items = isMobile ? [...mobileRow2, ...mobileRow2, ...mobileRow2] : [...desktopRow2, ...desktopRow2, ...desktopRow2];
  const row3Items = isMobile ? [...mobileRow3, ...mobileRow3, ...mobileRow3] : [...desktopRow3, ...desktopRow3, ...desktopRow3];
  const row4Items = isMobile ? [...mobileRow4, ...mobileRow4, ...mobileRow4] : [];
  const row5Items = isMobile ? [...mobileRow5, ...mobileRow5, ...mobileRow5] : [];

  const renderItem = (item: CarouselItem, index: number, rowTag: string) => {
    return (
      <div 
        key={`${item.id}-${index}-${rowTag}`} 
        className="inline-block px-2 md:px-4 w-[240px] md:w-[450px] transform-gpu"
      >
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover opacity-80"
            sizes="(max-width: 768px) 240px, 450px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full overflow-hidden py-8 md:py-20" dir="ltr">
      <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
      
      <div className="flex flex-col gap-6 md:gap-10 py-10 overflow-visible">
        <div className="flex overflow-visible">
          <div className="flex animate-scroll-left whitespace-nowrap">
            {row1Items.map((item, i) => renderItem(item, i, 'r1'))}
          </div>
        </div>
        <div className="flex overflow-visible">
          <div className="flex animate-scroll-right whitespace-nowrap">
            {row2Items.map((item, i) => renderItem(item, i, 'r2'))}
          </div>
        </div>
        <div className="flex overflow-visible">
          <div className="flex animate-scroll-left whitespace-nowrap">
            {row3Items.map((item, i) => renderItem(item, i, 'r3'))}
          </div>
        </div>
        {isMobile && (
          <>
            <div className="flex overflow-visible">
              <div className="flex animate-scroll-right whitespace-nowrap">
                {row4Items.map((item, i) => renderItem(item, i, 'r4'))}
              </div>
            </div>
            <div className="flex overflow-visible">
              <div className="flex animate-scroll-left whitespace-nowrap">
                {row5Items.map((item, i) => renderItem(item, i, 'r5'))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
