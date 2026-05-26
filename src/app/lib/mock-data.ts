import { PlaceHolderImages } from '@/lib/placeholder-images';

export interface GameEntry {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  images: string[];
  videoUrl: string;
  shorts?: string[];
}

export const CATEGORIES = ['All', 'RPG', 'Race', 'Adventure', 'Open World', 'Action', 'Shooter', 'Horror'];

const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const MOCK_GAMES: GameEntry[] = [
  {
    id: '5',
    title: 'Red Dead Redemption 2',
    description: 'America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive.',
    category: 'Open World',
    thumbnail: getImg('rdr2-thumb'),
    images: [getImg('rdr2-hero'), getImg('rdr2-gallery-1')],
    videoUrl: 'https://www.youtube.com/embed/gmA6MrX81z4',
    shorts: [
      'https://www.youtube.com/embed/8-W75PzBvG4',
      'https://www.youtube.com/embed/BvH_nN1A8XQ',
      'https://www.youtube.com/embed/9G3Qy7B7QpY'
    ],
  },
  {
    id: '1',
    title: 'The Witcher 3',
    description: 'The Witcher 3: Wild Hunt is an open-world action RPG where you play as Geralt of Rivia, a monster hunter. The game is set in a rich, vast fantasy world, full of deep storytelling, complex characters, and massive choices that impact the world around you.',
    category: 'RPG',
    thumbnail: 'https://wallpapercave.com/wp/wp8510096.jpg',
    images: ['https://wallpapercave.com/wp/wp8510096.jpg', getImg('witcher-gallery-1'), getImg('witcher-gallery-2')],
    videoUrl: 'https://www.youtube.com/embed/gmA6MrX81z4',
  },
  {
    id: '2',
    title: 'Forza Horizon 5',
    description: 'Experience the ultimate driving festival. Explore a vibrant and ever-evolving open world with hundreds of the world\'s greatest cars in stunning 4K. Your ultimate Horizon adventure awaits.',
    category: 'Race',
    thumbnail: getImg('forza5-thumb'),
    images: [getImg('forza5-hero')],
    videoUrl: 'https://www.youtube.com/embed/gmA6MrX81z4',
  },
  {
    id: '6',
    title: 'Spider-Man 2',
    description: 'Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel\'s Spider-Man franchise. Swing, jump, and utilize the new Web Wings to travel across Marvel\'s New York.',
    category: 'Open World',
    thumbnail: getImg('spiderman2-thumb'),
    images: [getImg('spiderman2-hero')],
    videoUrl: 'https://www.youtube.com/embed/gmA6MrX81z4',
  },
  {
    id: '10',
    title: 'God of War Ragnarök',
    description: 'Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world.',
    category: 'Action',
    thumbnail: getImg('gowr-thumb'),
    images: [getImg('gowr-hero')],
    videoUrl: 'https://www.youtube.com/embed/gmA6MrX81z4',
  },
  {
    id: '12',
    title: 'Cyberpunk 2077',
    description: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary.',
    category: 'Open World',
    thumbnail: getImg('cp2077-thumb'),
    images: [getImg('cp2077-hero')],
    videoUrl: 'https://www.youtube.com/embed/gmA6MrX81z4',
  },
  {
    id: '50',
    title: 'Resident Evil 4',
    description: 'Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy has been dispatched to rescue the president\'s kidnapped daughter.',
    category: 'Horror',
    thumbnail: getImg('re4-thumb'),
    images: [getImg('re4-hero')],
    videoUrl: 'https://www.youtube.com/embed/gmA6MrX81z4',
  },
  {
    id: '55',
    title: 'Elden Ring',
    description: 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
    category: 'RPG',
    thumbnail: getImg('eldenring-thumb'),
    images: [getImg('eldenring-thumb')],
    videoUrl: 'https://www.youtube.com/embed/gmA6MrX81z4',
  },
  {
    id: '36',
    title: 'Detroit: Become Human',
    description: 'Detroit, 2038. Technology has evolved to a point where human like androids are everywhere. They speak, move and behave like human beings.',
    category: 'Adventure',
    thumbnail: getImg('detroit-thumb'),
    images: [getImg('detroit-hero')],
    videoUrl: 'https://www.youtube.com/embed/gmA6MrX81z4',
  },
  {
    id: '40',
    title: 'Batman: Arkham Knight',
    description: 'Batman: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion.',
    category: 'Action',
    thumbnail: getImg('batman-thumb'),
    images: [getImg('batman-hero')],
    videoUrl: 'https://www.youtube.com/embed/gmA6MrX81z4',
  },
  {
    id: 'mk1',
    title: 'Mortal Kombat 1',
    description: 'It\'s In Our Blood. Discover a reborn Mortal Kombat Universe created by the Fire God Liu Kang. Mortal Kombat 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and fatalities!',
    category: 'Action',
    thumbnail: getImg('mk1-thumb'),
    images: [getImg('mk1-thumb')],
    videoUrl: 'https://www.youtube.com/embed/gmA6MrX81z4',
  }
];