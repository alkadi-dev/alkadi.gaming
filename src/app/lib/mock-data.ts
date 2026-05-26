import { PlaceHolderImages } from '@/lib/placeholder-images';

export interface GameEntry {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  images: string[];
  videoUrl: string;
  infoLinks: {
    features: string;
    storyline: string;
    gameplay: string;
  };
}

export const CATEGORIES = ['All', 'RPG', 'Race', 'Adventure', 'Open World', 'Action', 'Sports', 'Shooter', 'Fighting', 'Horror'];

const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';
const getInfoUrl = (title: string, type: string) => `https://www.ign.com/games/${title.toLowerCase().replace(/[:']/g, '').replace(/\s+/g, '-')}/${type}`;

export const MOCK_GAMES: GameEntry[] = [
  {
    id: '5',
    title: 'Red Dead Redemption 2',
    description: 'America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive.',
    category: 'Open World',
    thumbnail: getImg('rdr2-thumb'),
    images: [getImg('rdr2-hero'), getImg('rdr2-gallery-1')],
    videoUrl: 'https://www.youtube.com/embed/eaW0tYpxn0k',
    infoLinks: {
      features: getInfoUrl('Red Dead Redemption 2', 'features'),
      storyline: getInfoUrl('Red Dead Redemption 2', 'storyline'),
      gameplay: getInfoUrl('Red Dead Redemption 2', 'gameplay')
    }
  },
  {
    id: '1',
    title: 'The Witcher 3',
    description: 'The Witcher 3: Wild Hunt is an open-world action RPG where you play as Geralt of Rivia, a monster hunter. The game is set in a rich, vast fantasy world, full of deep storytelling, complex characters, and massive choices that impact the world around you.',
    category: 'RPG',
    thumbnail: 'https://wallpapercave.com/wp/wp8510096.jpg',
    images: ['https://wallpapercave.com/wp/wp8510096.jpg', getImg('witcher-gallery-1'), getImg('witcher-gallery-2')],
    videoUrl: 'https://www.youtube.com/embed/XHrskkq9534',
    infoLinks: {
      features: getInfoUrl('The Witcher 3', 'features'),
      storyline: getInfoUrl('The Witcher 3', 'storyline'),
      gameplay: getInfoUrl('The Witcher 3', 'gameplay')
    }
  },
  {
    id: '2',
    title: 'Forza Horizon 6',
    description: 'Experience the ultimate driving festival. Explore a vibrant and ever-evolving open world with hundreds of the world\'s greatest cars in stunning 4K. Your ultimate Horizon adventure awaits.',
    category: 'Race',
    thumbnail: getImg('forza-thumb'),
    images: [getImg('forza-hero'), getImg('forza-gallery-1')],
    videoUrl: 'https://www.youtube.com/embed/FYH9n37B7Yw',
    infoLinks: {
      features: getInfoUrl('Forza Horizon 6', 'features'),
      storyline: getInfoUrl('Forza Horizon 6', 'storyline'),
      gameplay: getInfoUrl('Forza Horizon 6', 'gameplay')
    }
  },
  {
    id: '6',
    title: 'Spider-Man 2',
    description: 'Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel\'s Spider-Man franchise. Swing, jump, and utilize the new Web Wings to travel across Marvel\'s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers.',
    category: 'Open World',
    thumbnail: getImg('spiderman2-thumb'),
    images: [getImg('spiderman2-hero')],
    videoUrl: 'https://www.youtube.com/embed/bgqGdIoa52s',
    infoLinks: {
      features: getInfoUrl('Spider-Man 2', 'features'),
      storyline: getInfoUrl('Spider-Man 2', 'storyline'),
      gameplay: getInfoUrl('Spider-Man 2', 'gameplay')
    }
  },
  {
    id: '10',
    title: 'God of War Ragnarök',
    description: 'Fimbulwinter is well underway. Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world. Along the way, they will explore stunning, mythical landscapes, and face fearsome enemies in the form of Norse gods and monsters.',
    category: 'Action',
    thumbnail: getImg('gowr-thumb'),
    images: [getImg('gowr-hero')],
    videoUrl: 'https://www.youtube.com/embed/hfJ4Km46A-0',
    infoLinks: {
      features: getInfoUrl('God of War Ragnarok', 'features'),
      storyline: getInfoUrl('God of War Ragnarok', 'storyline'),
      gameplay: getInfoUrl('God of War Ragnarok', 'gameplay')
    }
  },
  {
    id: '12',
    title: 'Cyberpunk 2077',
    description: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades.',
    category: 'Open World',
    thumbnail: getImg('cp2077-thumb'),
    images: [getImg('cp2077-hero')],
    videoUrl: 'https://www.youtube.com/embed/8X2kIfS6fb8',
    infoLinks: {
      features: getInfoUrl('Cyberpunk 2077', 'features'),
      storyline: getInfoUrl('Cyberpunk 2077', 'storyline'),
      gameplay: getInfoUrl('Cyberpunk 2077', 'gameplay')
    }
  },
  {
    id: '15',
    title: 'Crimson Desert',
    description: 'Crimson Desert is an upcoming open world action-adventure game. A story of survival, Crimson Desert follows a group of struggling mercenaries and the many characters who cross their paths in the vast continent of Pywel. It is a world where heroes are made, but not without incredible hardship, pain and perseverance.',
    category: 'RPG',
    thumbnail: getImg('crimson-thumb'),
    images: [getImg('crimson-hero')],
    videoUrl: 'https://www.youtube.com/embed/tSAnfS_a6No',
    infoLinks: {
      features: getInfoUrl('Crimson Desert', 'features'),
      storyline: getInfoUrl('Crimson Desert', 'storyline'),
      gameplay: getInfoUrl('Crimson Desert', 'gameplay')
    }
  },
  {
    id: '31',
    title: 'Assassin\'s Creed Shadows',
    description: 'Live the intertwined stories of Naoe, an adept shinobi Assassin from Iga Province, and Yasuke, the powerful African samurai of historical legend. Against the backdrop of the late Sengoku period, discover their common destiny as they usher in a new era for Japan.',
    category: 'Action',
    thumbnail: getImg('ac-shadows-thumb'),
    images: [getImg('ac-shadows-hero')],
    videoUrl: 'https://www.youtube.com/embed/vovkzJzPFpg',
    infoLinks: {
      features: getInfoUrl('Assassins Creed Shadows', 'features'),
      storyline: getInfoUrl('Assassins Creed Shadows', 'storyline'),
      gameplay: getInfoUrl('Assassins Creed Shadows', 'gameplay')
    }
  },
  {
    id: '33',
    title: 'Assassin\'s Creed Mirage',
    description: 'Experience the story of Basim, a cunning street thief seeking answers and justice as he navigates the bustling streets of ninth-century Baghdad. Become the most versatile Assassin in franchise history in this modern take on the series\' iconic parkour and stealth gameplay.',
    category: 'Action',
    thumbnail: getImg('ac-mirage-thumb'),
    images: [getImg('ac-mirage-hero')],
    videoUrl: 'https://www.youtube.com/embed/x55lAlFtXmw',
    infoLinks: {
      features: getInfoUrl('Assassins Creed Mirage', 'features'),
      storyline: getInfoUrl('Assassins Creed Mirage', 'storyline'),
      gameplay: getInfoUrl('Assassins Creed Mirage', 'gameplay')
    }
  },
  {
    id: '34',
    title: 'Assassin\'s Creed Odyssey',
    description: 'Write your own epic odyssey and become a legendary Spartan hero. Forge your destiny in a world on the brink of tearing itself apart. Influence how history unfolds in an ever-changing world shaped by your choices.',
    category: 'RPG',
    thumbnail: getImg('ac-odyssey-thumb'),
    images: [getImg('ac-odyssey-hero')],
    videoUrl: 'https://www.youtube.com/embed/s_SJZSAtLBA',
    infoLinks: {
      features: getInfoUrl('Assassins Creed Odyssey', 'features'),
      storyline: getInfoUrl('Assassins Creed Odyssey', 'storyline'),
      gameplay: getInfoUrl('Assassins Creed Odyssey', 'gameplay')
    }
  },
  {
    id: '36',
    title: 'Detroit: Become Human',
    description: 'Detroit, 2038. Technology has evolved to a point where human like androids are everywhere. They speak, move and behave like human beings, but they are only machines serving humans.',
    category: 'Adventure',
    thumbnail: getImg('detroit-thumb'),
    images: [getImg('detroit-hero')],
    videoUrl: 'https://www.youtube.com/embed/8a-EobLUPmY',
    infoLinks: {
      features: getInfoUrl('Detroit Become Human', 'features'),
      storyline: getInfoUrl('Detroit Become Human', 'storyline'),
      gameplay: getInfoUrl('Detroit Become Human', 'gameplay')
    }
  },
  {
    id: '40',
    title: 'Batman: Arkham Knight',
    description: 'Batman: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion. Developed exclusively for New-Gen platforms, Batman: Arkham Knight introduces Rocksteady’s uniquely designed version of the Batmobile.',
    category: 'Action',
    thumbnail: getImg('batman-thumb'),
    images: [getImg('batman-hero')],
    videoUrl: 'https://www.youtube.com/embed/dxa3zkxPdf8',
    infoLinks: {
      features: getInfoUrl('Batman Arkham Knight', 'features'),
      storyline: getInfoUrl('Batman Arkham Knight', 'storyline'),
      gameplay: getInfoUrl('Batman Arkham Knight', 'gameplay')
    }
  },
  {
    id: '45',
    title: 'Dying Light 2: Stay Human',
    description: 'Over twenty years ago in Harran, we fought the virus—and lost. Now, we’re losing again. The City, one of the last large human settlements, is torn by conflict. Civilization has fallen back into the Dark Ages.',
    category: 'Open World',
    thumbnail: getImg('dl2-thumb'),
    images: [getImg('dl2-hero')],
    videoUrl: 'https://www.youtube.com/embed/98oJYDRblLI',
    infoLinks: {
      features: getInfoUrl('Dying Light 2', 'features'),
      storyline: getInfoUrl('Dying Light 2', 'storyline'),
      gameplay: getInfoUrl('Dying Light 2', 'gameplay')
    }
  },
  {
    id: '48',
    title: 'S.T.A.L.K.E.R. 2: Heart of Chornobyl',
    description: 'Discover the vast Chornobyl Exclusion Zone full of dangerous enemies, deadly anomalies and powerful artifacts. Unveil your own epic story as you make your way to the Heart of Chornobyl.',
    category: 'Shooter',
    thumbnail: getImg('stalker2-thumb'),
    images: [getImg('stalker2-hero')],
    videoUrl: 'https://www.youtube.com/embed/SjS_X3C3Ats',
    infoLinks: {
      features: getInfoUrl('Stalker 2', 'features'),
      storyline: getInfoUrl('Stalker 2', 'storyline'),
      gameplay: getInfoUrl('Stalker 2', 'gameplay')
    }
  },
  {
    id: '50',
    title: 'Resident Evil 4',
    description: 'Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, has been dispatched to rescue the president\'s kidnapped daughter.',
    category: 'Horror',
    thumbnail: getImg('re4-thumb'),
    images: [getImg('re4-hero')],
    videoUrl: 'https://www.youtube.com/embed/j5Xv2lM9w_A',
    infoLinks: {
      features: getInfoUrl('Resident Evil 4', 'features'),
      storyline: getInfoUrl('Resident Evil 4', 'storyline'),
      gameplay: getInfoUrl('Resident Evil 4', 'gameplay')
    }
  },
  {
    id: '51',
    title: 'Resident Evil Village',
    description: 'Experience survival horror like never before in the eighth major installment in the storied Resident Evil franchise - Resident Evil Village. With all-new graphics, intense first-person action and masterful storytelling, the terror has never felt more real.',
    category: 'Horror',
    thumbnail: getImg('revillage-thumb'),
    images: [getImg('revillage-hero')],
    videoUrl: 'https://www.youtube.com/embed/Bt92uSHeP0Q',
    infoLinks: {
      features: getInfoUrl('Resident Evil Village', 'features'),
      storyline: getInfoUrl('Resident Evil Village', 'storyline'),
      gameplay: getInfoUrl('Resident Evil Village', 'gameplay')
    }
  },
  {
    id: '55',
    title: 'Elden Ring',
    description: 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. Explore a vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected.',
    category: 'RPG',
    thumbnail: getImg('eldenring-thumb'),
    images: [getImg('eldenring-thumb')],
    videoUrl: 'https://www.youtube.com/embed/E3Huy2cdih0',
    infoLinks: {
      features: getInfoUrl('Elden Ring', 'features'),
      storyline: getInfoUrl('Elden Ring', 'storyline'),
      gameplay: getInfoUrl('Elden Ring', 'gameplay')
    }
  },
  {
    id: '57',
    title: 'Mortal Kombat 1',
    description: 'It\'s In Our Blood. Discover a reborn Mortal Kombat Universe created by the Fire God Liu Kang. Mortal Kombat 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and fatalities!',
    category: 'Fighting',
    thumbnail: getImg('mk1-thumb'),
    images: [getImg('mk1-thumb')],
    videoUrl: 'https://www.youtube.com/embed/MYG7-SAnfS0',
    infoLinks: {
      features: getInfoUrl('Mortal Kombat 1', 'features'),
      storyline: getInfoUrl('Mortal Kombat 1', 'storyline'),
      gameplay: getInfoUrl('Mortal Kombat 1', 'gameplay')
    }
  },
  {
    id: '64',
    title: 'Alan Wake 2',
    description: 'A string of ritualistic murders threatens Bright Falls, an eerie community surrounded by the Pacific Northwest wilderness. Saga Anderson, an accomplished FBI agent, arrives to investigate. Meanwhile, Alan Wake, a trapped writer, writes a dark story to shape the reality around him.',
    category: 'Horror',
    thumbnail: getImg('alanwake2-thumb'),
    images: [getImg('alanwake2-thumb')],
    videoUrl: 'https://www.youtube.com/embed/dlQ3Feat5S4',
    infoLinks: {
      features: getInfoUrl('Alan Wake 2', 'features'),
      storyline: getInfoUrl('Alan Wake 2', 'storyline'),
      gameplay: getInfoUrl('Alan Wake 2', 'gameplay')
    }
  },
  {
    id: '76',
    title: 'Silent Hill 2',
    description: 'Having received a letter from his deceased wife, James returns to where they made so many memories, in the hope of seeing her one more time: Silent Hill. A remake of the legendary survival horror masterpiece.',
    category: 'Horror',
    thumbnail: getImg('silenthill2-thumb'),
    images: [getImg('silenthill2-thumb')],
    videoUrl: 'https://www.youtube.com/embed/pyC_qiW_49E',
    infoLinks: {
      features: getInfoUrl('Silent Hill 2', 'features'),
      storyline: getInfoUrl('Silent Hill 2', 'storyline'),
      gameplay: getInfoUrl('Silent Hill 2', 'gameplay')
    }
  }
];
