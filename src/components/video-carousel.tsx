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
    id: 'firstlight',
    imageUrl: "https://images.steamusercontent.com/ugc/18436219776708369386/A5EF63D963D549429C3156545E269E987B28BCA8/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=#000000&letterbox=false",
    title: "007 First Light"
  },
  {
    id: 'horizon',
    imageUrl: "https://wallpapercat.com/w/full/f/4/5/12034-1920x1080-desktop-full-hd-horizon-forbidden-west-background-image.jpg",
    title: "Horizon Forbidden West"
  },
  {
    id: 'cod',
    imageUrl: "https://wallpapercave.com/wp/wp11704100.jpg",
    title: "Call of Duty Modern Warfare 2"
  },
  {
    id: 'rdr2',
    imageUrl: "https://wallpapercave.com/wp/wp3770429.png",
    title: "Red Dead Redemption 2"
  },
  {
    id: 'spiderman2',
    imageUrl: "https://4kwallpapers.com/images/walls/thumbs_2t/11609.jpeg",
    title: "Spider-Man 2"
  },
  {
    id: 'tlou2',
    imageUrl: "https://i.pinimg.com/originals/6d/49/67/6d4967f7c66011f46dc88cad2ef17770.jpg",
    title: "The Last of Us Part II"
  },
  {
    id: 'ac',
    imageUrl: "https://wallpapercave.com/wp/wp13980393.jpg",
    title: "Assassin's Creed Shadows"
  },
  {
    id: 'gow',
    imageUrl: "https://wallpapers.com/images/hd/godof-war-ragnarok-kratos-atreus-winter-landscape-p0z1cxhlrscxekzw.jpg",
    title: "God of War Ragnarok"
  },
  {
    id: 'got',
    imageUrl: "https://images3.alphacoders.com/138/thumbbig-1387219.webp",
    title: "Ghost of Tsushima"
  },
  {
    id: 'cyberpunk',
    imageUrl: "https://4kwallpapers.com/images/walls/thumbs_2t/20154.jpg",
    title: "Cyberpunk 2077"
  },
  {
    id: 'u4',
    imageUrl: "https://wallpapercave.com/wp/wp2272912.jpg",
    title: "Uncharted 4"
  },
  {
    id: 're',
    imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f05a9b5b-ead5-460e-8573-73ba2fff9cde/djxpgft-a53b41e0-9850-484d-9b01-1f19e4621bc6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9mMDVhOWI1Yi1lYWQ1LTQ2MGUtODU3My03M2JhMmZmZjljZGUvZGp4cGdmdC1hNTNiNDFlMC05ODUwLTQ4NGQtOWIwMS0xZjE5ZTQ2MjFiYzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VMBTlqB1IKBkCo8rL1VBzc-d83VgjfRTf5Q3UVM6-OI",
    title: "Resident Evil Requiem"
  },
  // New Games
  {
    id: 'wukong',
    imageUrl: "https://4kwallpapers.com/images/walls/thumbs/17948.jpeg",
    title: "Black Myth: Wukong"
  },
  {
    id: 'crimson',
    imageUrl: "https://wallpaperaccess.com/full/26027678.jpg",
    title: "Crimson Desert"
  },
  {
    id: 'forza6',
    imageUrl: "https://wolfsgamingblog.com/wp-content/uploads/2026/05/forza-horizon-6-key-art.jpg?w=1024",
    title: "Forza Horizon 6"
  },
  {
    id: 'pragmata',
    imageUrl: "https://wallpaperaccess.com/full/26417427.jpg",
    title: "Pragmata"
  },
  {
    id: 'witcher3re',
    imageUrl: "https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt6d161a29da0dd367/6a7f92fd3ad392027f6f8c41/shop_product_feature_card_w3re_logo.webp",
    title: "The Witcher 3 Remastered"
  },
  {
    id: 'tlou1',
    imageUrl: "https://preview.redd.it/4k-the-last-of-us-part-1-cover-art-wallpaper-v0-3z733s5snn491.png?width=640&crop=smart&auto=webp&s=fcf82bdc024dbd42597db28d31f496ae0aded7fa",
    title: "The Last of Us Part I"
  },
  {
    id: 'fc5',
    imageUrl: "https://wallpapers.com/images/featured/far-cry-5-background-b36npu7jc7uygn0x.jpg",
    title: "Far Cry 5"
  },
  {
    id: 'eldenring',
    imageUrl: "https://wallpapers.com/images/featured/elden-ring-pictures-6r85th0gnhifsqd0.jpg",
    title: "Elden Ring"
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
