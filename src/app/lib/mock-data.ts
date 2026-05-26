import { PlaceHolderImages } from '@/lib/placeholder-images';

export interface GameEntry {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  images: string[];
  videoUrl: string;
}

export const CATEGORIES = ['All', 'RPG', 'Race', 'Adventure', 'Open World'];

const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const MOCK_GAMES: GameEntry[] = [
  {
    id: '1',
    title: 'The Witcher 3',
    description: 'Become Geralt of Rivia, a professional monster hunter, and explore the war-torn Northern Kingdoms in search of the Child of Prophecy. A masterpiece of storytelling and open-world exploration.',
    category: 'RPG',
    thumbnail: getImg('witcher-thumb'),
    images: [
      getImg('witcher-hero'),
      getImg('witcher-gallery-1'),
      getImg('witcher-gallery-2')
    ],
    videoUrl: 'https://www.youtube.com/embed/XHrskkHf958'
  },
  {
    id: '2',
    title: 'Velocity Prime',
    description: 'Experience the next generation of street racing. Custom built engines, neon-lit tracks, and physics-defying drifts. Compete in underground tournaments to become the city king.',
    category: 'Race',
    thumbnail: 'https://picsum.photos/seed/g2/600/400',
    images: [
      'https://picsum.photos/seed/g2a/1200/800',
      'https://picsum.photos/seed/g2b/1200/800'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '3',
    title: 'Skyward Odyssey',
    description: 'A breathtaking adventure across floating islands. Use your mechanical wings to soar between peaks, solve ancient puzzles, and uncover the secrets of a civilization that lived above the clouds.',
    category: 'Adventure',
    thumbnail: 'https://picsum.photos/seed/g3/600/400',
    images: [
      'https://picsum.photos/seed/g3a/1200/800',
      'https://picsum.photos/seed/g3b/1200/800',
      'https://picsum.photos/seed/g3c/1200/800'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '4',
    title: 'Horizon Zero Frontier',
    description: 'Survive in a vast, seamless open world teeming with robotic wildlife. Build your settlement, forage for resources, and defend your territory against rival clans in this post-apocalyptic frontier.',
    category: 'Open World',
    thumbnail: 'https://picsum.photos/seed/g4/600/400',
    images: [
      'https://picsum.photos/seed/g4a/1200/800',
      'https://picsum.photos/seed/g4b/1200/800'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];
