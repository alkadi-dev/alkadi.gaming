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
    videoUrl: 'https://www.youtube.com/embed/XHrskkHf958',
    shorts: [
      'https://www.youtube.com/embed/p1_v-F7m6X0',
      'https://www.youtube.com/embed/2-nFvY0wL2c',
      'https://www.youtube.com/embed/uI_O-Kx7K_k'
    ],
  },
  {
    id: 'ac-shadows',
    title: "Assassin's Creed Shadows",
    description: 'Experience an epic historical action-adventure story set in feudal Japan. Become a lethal shinobi assassin and a powerful legendary samurai as you explore a beautiful open world in a time of chaos.',
    category: 'Open World',
    thumbnail: getImg('ac-shadows-thumb'),
    images: [getImg('ac-shadows-hero')],
    videoUrl: 'https://www.youtube.com/embed/vovkzbtYBC8',
    shorts: [
      'https://www.youtube.com/embed/Z0oD6Xp1k-0',
      'https://www.youtube.com/embed/uI_O-Kx7K_k',
      'https://www.youtube.com/embed/A6NfIu3a8_4'
    ],
  },
  {
    id: 'ac-unity',
    title: "Assassin's Creed Unity",
    description: "Assassin's Creed Unity is an action-adventure game set in the city of Paris during one of its darkest hours, the French Revolution. Take ownership of the story by customizing your equipment to make the experience unique to you.",
    category: 'Open World',
    thumbnail: getImg('ac-unity-thumb'),
    images: [getImg('ac-unity-hero')],
    videoUrl: 'https://www.youtube.com/embed/xzCEdSKMkdU',
    shorts: [
      'https://www.youtube.com/embed/u2v_5h9qYmI',
      'https://www.youtube.com/embed/NnK-rC5A_nU',
      'https://www.youtube.com/embed/I0T8xZ9X0F4'
    ],
  },
  {
    id: 'ac-mirage',
    title: "Assassin's Creed Mirage",
    description: 'In Assassin’s Creed Mirage, you are Basim, a cunning street thief with nightmarish visions, seeking answers and justice. Join an ancient organization and come to understand a new creed – one that will change Basim’s fate in ways he never could have imagined.',
    category: 'Action',
    thumbnail: getImg('ac-mirage-thumb'),
    images: [getImg('ac-mirage-hero')],
    videoUrl: 'https://www.youtube.com/embed/k-BGWngy97I',
    shorts: [
      'https://www.youtube.com/embed/u_F8X-v8f8Y',
      'https://www.youtube.com/embed/A6NfIu3a8_4',
      'https://www.youtube.com/embed/PjE-0L5YIas'
    ],
  },
  {
    id: 'ac-odyssey',
    title: "Assassin's Creed Odyssey",
    description: 'Write your own epic odyssey and become a legendary Spartan hero. Forge your destiny in a world on the brink of tearing itself apart. Influence how history unfolds in an ever-changing world shaped by your choices.',
    category: 'RPG',
    thumbnail: getImg('ac-odyssey-thumb'),
    images: [getImg('ac-odyssey-hero')],
    videoUrl: 'https://www.youtube.com/embed/s_SJZSAtLBA',
    shorts: [
      'https://www.youtube.com/embed/rV9y9T-Xn7k',
      'https://www.youtube.com/embed/N-0_W88T5c0',
      'https://www.youtube.com/embed/2-nFvY0wL2c'
    ],
  },
  {
    id: 'ac-syndicate',
    title: "Assassin's Creed Syndicate",
    description: 'London, 1868. In the heart of the Industrial Revolution, lead your underworld organization and grow your influence to fight those who exploit the less privileged in the name of progress.',
    category: 'Open World',
    thumbnail: getImg('ac-syndicate-thumb'),
    images: [getImg('ac-syndicate-hero')],
    videoUrl: 'https://www.youtube.com/embed/3kGHHMc5dqE',
    shorts: [
      'https://www.youtube.com/embed/p1_v-F7m6X0',
      'https://www.youtube.com/embed/Z0oD6Xp1k-0',
      'https://www.youtube.com/embed/I0T8xZ9X0F4'
    ],
  },
  {
    id: '2',
    title: 'Forza Horizon 5',
    description: 'Experience the ultimate driving festival. Explore a vibrant and ever-evolving open world with hundreds of the world\'s greatest cars in stunning 4K. Your ultimate Horizon adventure awaits.',
    category: 'Race',
    thumbnail: getImg('forza5-thumb'),
    images: [getImg('forza5-hero')],
    videoUrl: 'https://www.youtube.com/embed/FYH9n37B7Yw',
    shorts: [
      'https://www.youtube.com/embed/rV9y9T-Xn7k',
      'https://www.youtube.com/embed/NnK-rC5A_nU',
      'https://www.youtube.com/embed/u2v_5h9qYmI'
    ],
  },
  {
    id: '6',
    title: 'Spider-Man 2',
    description: 'Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel\'s Spider-Man franchise. Swing, jump, and utilize the new Web Wings to travel across Marvel\'s New York.',
    category: 'Open World',
    thumbnail: getImg('spiderman2-thumb'),
    images: [getImg('spiderman2-hero')],
    videoUrl: 'https://www.youtube.com/embed/qIQ3uZvzOig',
    shorts: [
      'https://www.youtube.com/embed/Z0oD6Xp1k-0',
      'https://www.youtube.com/embed/uI_O-Kx7K_k',
      'https://www.youtube.com/embed/A6NfIu3a8_4'
    ],
  },
  {
    id: '10',
    title: 'God of War Ragnarök',
    description: 'Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world.',
    category: 'Action',
    thumbnail: getImg('gowr-thumb'),
    images: [getImg('gowr-hero')],
    videoUrl: 'https://www.youtube.com/embed/hfJ4Km46A-0',
    shorts: [
      'https://www.youtube.com/embed/I0T8xZ9X0F4',
      'https://www.youtube.com/embed/PjE-0L5YIas',
      'https://www.youtube.com/embed/NnK-rC5A_nU'
    ],
  },
  {
    id: '12',
    title: 'Cyberpunk 2077',
    description: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary.',
    category: 'Open World',
    thumbnail: getImg('cp2077-thumb'),
    images: [getImg('cp2077-hero')],
    videoUrl: 'https://www.youtube.com/embed/8X2kIfS6fb8',
    shorts: [
      'https://www.youtube.com/embed/A6NfIu3a8_4',
      'https://www.youtube.com/embed/u_F8X-v8f8Y',
      'https://www.youtube.com/embed/p1_v-F7m6X0'
    ],
  },
  {
    id: '50',
    title: 'Resident Evil 4',
    description: 'Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy has been dispatched to rescue the president\'s kidnapped daughter.',
    category: 'Horror',
    thumbnail: getImg('re4-thumb'),
    images: [getImg('re4-hero')],
    videoUrl: 'https://www.youtube.com/embed/j5Xv2lM96vM',
    shorts: [
      'https://www.youtube.com/embed/u2v_5h9qYmI',
      'https://www.youtube.com/embed/N-0_W88T5c0',
      'https://www.youtube.com/embed/2-nFvY0wL2c'
    ],
  },
  {
    id: '55',
    title: 'Elden Ring',
    description: 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
    category: 'RPG',
    thumbnail: getImg('eldenring-thumb'),
    images: [getImg('eldenring-thumb')],
    videoUrl: 'https://www.youtube.com/embed/E3Huy2cdih0',
    shorts: [
      'https://www.youtube.com/embed/Z0oD6Xp1k-0',
      'https://www.youtube.com/embed/PjE-0L5YIas',
      'https://www.youtube.com/embed/rV9y9T-Xn7k'
    ],
  },
  {
    id: '36',
    title: 'Detroit: Become Human',
    description: 'Detroit, 2038. Technology has evolved to a point where human like androids are everywhere. They speak, move and behave like human beings.',
    category: 'Adventure',
    thumbnail: getImg('detroit-thumb'),
    images: [getImg('detroit-hero')],
    videoUrl: 'https://www.youtube.com/embed/8a-EObAhYrg',
    shorts: [
      'https://www.youtube.com/embed/A6NfIu3a8_4',
      'https://www.youtube.com/embed/uI_O-Kx7K_k',
      'https://www.youtube.com/embed/NnK-rC5A_nU'
    ],
  },
  {
    id: '40',
    title: 'Batman: Arkham Knight',
    description: 'Batman: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion.',
    category: 'Action',
    thumbnail: getImg('batman-thumb'),
    images: [getImg('batman-hero')],
    videoUrl: 'https://www.youtube.com/embed/dxa34RatmSc',
    shorts: [
      'https://www.youtube.com/embed/I0T8xZ9X0F4',
      'https://www.youtube.com/embed/rV9y9T-Xn7k',
      'https://www.youtube.com/embed/Z0oD6Xp1k-0'
    ],
  },
  {
    id: 'mk1',
    title: 'Mortal Kombat 1',
    description: 'It\'s In Our Blood. Discover a reborn Mortal Kombat Universe created by the Fire God Liu Kang. Mortal Kombat 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and fatalities!',
    category: 'Action',
    thumbnail: getImg('mk1-thumb'),
    images: [getImg('mk1-thumb')],
    videoUrl: 'https://www.youtube.com/embed/MYGf9X-iM38',
    shorts: [
      'https://www.youtube.com/embed/u2v_5h9qYmI',
      'https://www.youtube.com/embed/NnK-rC5A_nU',
      'https://www.youtube.com/embed/I0T8xZ9X0F4'
    ],
  },
  {
    id: 'fc5',
    title: 'Far Cry 5',
    description: 'Welcome to Hope County, Montana, home to a fanatical doomsday cult known as Eden\'s Gate. Stand up to cult leader Joseph Seed and his siblings, the Heralds, to spark the fires of resistance and liberate the besieged community.',
    category: 'Adventure',
    thumbnail: getImg('farcry5-thumb'),
    images: [getImg('farcry5-hero')],
    videoUrl: 'https://www.youtube.com/embed/Kdaoe4hbMso',
    shorts: [
      'https://www.youtube.com/embed/uI_O-Kx7K_k',
      'https://www.youtube.com/embed/N-0_W88T5c0',
      'https://www.youtube.com/embed/A6NfIu3a8_4'
    ],
  },
  {
    id: 're2',
    title: 'Resident Evil 2',
    description: 'A deadly virus engulfs the residents of Raccoon City in September of 1998, plunging the city into chaos as flesh-eating zombies roam the streets for survivors.',
    category: 'Horror',
    thumbnail: getImg('re2-thumb'),
    images: [getImg('re2-hero')],
    videoUrl: 'https://www.youtube.com/embed/u3wS6CHEtas',
    shorts: [
      'https://www.youtube.com/embed/u2v_5h9qYmI',
      'https://www.youtube.com/embed/N-0_W88T5c0',
      'https://www.youtube.com/embed/I0T8xZ9X0F4'
    ],
  },
  {
    id: 'stalker2',
    title: 'STALKER 2',
    description: 'Heart of Chornobyl. Chornobyl Exclusion Zone has changed dramatically after the second second explosion in 2006. Dangerous mutants, deadly anomalies, and warring factions have made the Zone a very tough place to survive.',
    category: 'Shooter',
    thumbnail: getImg('stalker2-thumb'),
    images: [getImg('stalker2-hero')],
    videoUrl: 'https://www.youtube.com/embed/q_m_f-p944o',
    shorts: [
      'https://www.youtube.com/embed/u_F8X-v8f8Y',
      'https://www.youtube.com/embed/A6NfIu3a8_4',
      'https://www.youtube.com/embed/PjE-0L5YIas'
    ],
  },
  {
    id: 're3',
    title: 'Resident Evil 3',
    description: 'Jill Valentine is one of the last remaining people in Raccoon City to witness the atrocities Umbrella performed. To stop her, Umbrella unleashes their ultimate secret weapon: Nemesis!',
    category: 'Horror',
    thumbnail: getImg('re3-thumb'),
    images: [getImg('re3-thumb')],
    videoUrl: 'https://www.youtube.com/embed/Wghn3tO7D74',
    shorts: [
      'https://www.youtube.com/embed/u2v_5h9qYmI',
      'https://www.youtube.com/embed/p1_v-F7m6X0',
      'https://www.youtube.com/embed/2-nFvY0wL2c'
    ],
  },
  {
    id: 'jedi-survivor',
    title: 'Star Wars Jedi: Survivor',
    description: 'The story of Cal Kestis continues in Star Wars Jedi: Survivor, a third-person galaxy-spanning action-adventure game from Respawn Entertainment.',
    category: 'Adventure',
    thumbnail: getImg('jedi-survivor-thumb'),
    images: [getImg('jedi-survivor-thumb')],
    videoUrl: 'https://www.youtube.com/embed/BM9v_K7lS1Y',
    shorts: [
      'https://www.youtube.com/embed/Z0oD6Xp1k-0',
      'https://www.youtube.com/embed/PjE-0L5YIas',
      'https://www.youtube.com/embed/rV9y9T-Xn7k'
    ],
  },
  {
    id: 'nightmares3',
    title: 'Little Nightmares 3',
    description: 'Embark on a new adventure in the unique world of Little Nightmares. In Little Nightmares III, you follow the journey of Low & Alone, as they search for a path that could lead them out of the Nowhere.',
    category: 'Horror',
    thumbnail: getImg('nightmares3-thumb'),
    images: [getImg('nightmares3-thumb')],
    videoUrl: 'https://www.youtube.com/embed/z8j7Gof-v0I',
    shorts: [
      'https://www.youtube.com/embed/u2v_5h9qYmI',
      'https://www.youtube.com/embed/N-0_W88T5c0',
      'https://www.youtube.com/embed/I0T8xZ9X0F4'
    ],
  },
  {
    id: 'alanwake2',
    title: 'Alan Wake 2',
    description: 'A string of ritualistic murders threatens Bright Falls, an idyllic small-town community in the Pacific Northwest. Saga Anderson, an accomplished FBI agent, arrives to investigate.',
    category: 'Horror',
    thumbnail: getImg('alanwake2-thumb'),
    images: [getImg('alanwake2-thumb')],
    videoUrl: 'https://www.youtube.com/embed/dlQ3Fe69I2w',
    shorts: [
      'https://www.youtube.com/embed/u2v_5h9qYmI',
      'https://www.youtube.com/embed/NnK-rC5A_nU',
      'https://www.youtube.com/embed/I0T8xZ9X0F4'
    ],
  },
  {
    id: 'silenthill2',
    title: 'Silent Hill 2',
    description: 'Having received a letter from his deceased wife, James proceeds to where they shared so many memories, in the hope of seeing her one more time: Silent Hill.',
    category: 'Horror',
    thumbnail: getImg('silenthill2-thumb'),
    images: [getImg('silenthill2-thumb')],
    videoUrl: 'https://www.youtube.com/embed/dlQ3Fe69I2w',
    shorts: [
      'https://www.youtube.com/embed/u2v_5h9qYmI',
      'https://www.youtube.com/embed/N-0_W88T5c0',
      'https://www.youtube.com/embed/2-nFvY0wL2c'
    ],
  },
  {
    id: 'got',
    title: 'Ghost of Tsushima',
    description: 'In the late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East. Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet.',
    category: 'Open World',
    thumbnail: getImg('got-thumb'),
    images: [getImg('got-hero')],
    videoUrl: 'https://www.youtube.com/embed/mGvG6_JPrHc',
    shorts: [
      'https://www.youtube.com/embed/u_F8X-v8f8Y',
      'https://www.youtube.com/embed/A6NfIu3a8_4',
      'https://www.youtube.com/embed/PjE-0L5YIas'
    ],
  },
  {
    id: 'u4',
    title: 'Uncharted 4: A Thief\'s End',
    description: 'Several years after his last adventure, retired fortune hunter Nathan Drake is forced back into the world of thieves.',
    category: 'Adventure',
    thumbnail: getImg('u4-thumb'),
    images: [getImg('u4-hero')],
    videoUrl: 'https://www.youtube.com/embed/sB0xy74Zrj8',
    shorts: [
      'https://www.youtube.com/embed/rV9y9T-Xn7k',
      'https://www.youtube.com/embed/N-0_W88T5c0',
      'https://www.youtube.com/embed/2-nFvY0wL2c'
    ],
  },
  {
    id: 'tlou1',
    title: 'The Last of Us Part I',
    description: 'In a ravaged civilization, where infected and hardened survivors run wild, Joel, a weary protagonist, is hired to smuggle 14-year-old Ellie out of a military quarantine zone.',
    category: 'Action',
    thumbnail: getImg('tlou1-thumb'),
    images: [getImg('tlou1-hero')],
    videoUrl: 'https://www.youtube.com/embed/W01L78Cec1M',
    shorts: [
      'https://www.youtube.com/embed/p1_v-F7m6X0',
      'https://www.youtube.com/embed/Z0oD6Xp1k-0',
      'https://www.youtube.com/embed/I0T8xZ9X0F4'
    ],
  },
  {
    id: 'tlou2',
    title: 'The Last of Us Part II',
    description: 'Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming.',
    category: 'Action',
    thumbnail: getImg('tlou2-thumb'),
    images: [getImg('tlou2-hero')],
    videoUrl: 'https://www.youtube.com/embed/vhII1qlcZ4E',
    shorts: [
      'https://www.youtube.com/embed/u2v_5h9qYmI',
      'https://www.youtube.com/embed/NnK-rC5A_nU',
      'https://www.youtube.com/embed/I0T8xZ9X0F4'
    ],
  },
  {
    id: 'gtav',
    title: 'Grand Theft Auto V',
    description: 'When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld.',
    category: 'Open World',
    thumbnail: getImg('gtav-thumb'),
    images: [getImg('gtav-hero')],
    videoUrl: 'https://www.youtube.com/embed/QkkoHAzjnUs',
    shorts: [
      'https://www.youtube.com/embed/u_F8X-v8f8Y',
      'https://www.youtube.com/embed/A6NfIu3a8_4',
      'https://www.youtube.com/embed/PjE-0L5YIas'
    ],
  },
  {
    id: 'hzd',
    title: 'Horizon Zero Dawn',
    description: 'In an era where Machines roam the land and mankind is no longer the dominant species, a young hunter named Aloy embarks on a journey to discover her destiny.',
    category: 'Open World',
    thumbnail: getImg('hzd-thumb'),
    images: [getImg('hzd-hero')],
    videoUrl: 'https://www.youtube.com/embed/u4-GiBaWstc',
    shorts: [
      'https://www.youtube.com/embed/rV9y9T-Xn7k',
      'https://www.youtube.com/embed/N-0_W88T5c0',
      'https://www.youtube.com/embed/2-nFvY0wL2c'
    ],
  }
];
