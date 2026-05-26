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
    id: 'ninjag4',
    title: 'Ninja Gaiden 4',
    description: 'The legendary ninja Ryu Hayabusa returns in a high-octane action experience that redefines the genre with brutal combat and supernatural foes.',
    category: 'Action',
    thumbnail: getImg('ninjag4-thumb'),
    images: [getImg('ninjag4-thumb')],
    videoUrl: 'https://www.youtube.com/embed/uI_O-Kx7K_k',
    shorts: [
      'https://www.youtube.com/embed/A6NfIu3a8_4',
      'https://www.youtube.com/embed/p1_v-F7m6X0',
      'https://www.youtube.com/embed/Z0oD6Xp1k-0'
    ],
  },
  {
    id: 'exp33',
    title: 'Expedition 33',
    description: 'A turn-based RPG with real-time mechanics. Lead a group of explorers in a world inspired by the Belle Époque as they attempt to break the cycle of death.',
    category: 'Adventure',
    thumbnail: getImg('exp33-thumb'),
    images: [getImg('exp33-thumb')],
    videoUrl: 'https://www.youtube.com/embed/8a-EObAhYrg',
    shorts: [
      'https://www.youtube.com/embed/uI_O-Kx7K_k',
      'https://www.youtube.com/embed/NnK-rC5A_nU',
      'https://www.youtube.com/embed/p1_v-F7m6X0'
    ],
  },
  {
    id: 'avatar-pandora',
    title: 'Avatar: Frontiers of Pandora',
    description: 'Avatar: Frontiers of Pandora is a first-person action-adventure game set in the never-before-seen Western Frontier of Pandora.',
    category: 'Adventure',
    thumbnail: getImg('avatar-pandora-thumb'),
    images: [getImg('avatar-pandora-thumb')],
    videoUrl: 'https://www.youtube.com/embed/0G6VInO9o7s',
    shorts: [
      'https://www.youtube.com/embed/A6NfIu3a8_4',
      'https://www.youtube.com/embed/uI_O-Kx7K_k',
      'https://www.youtube.com/embed/NnK-rC5A_nU'
    ],
  },
  {
    id: 'reanimal',
    title: 'Reanimal',
    description: 'The creators of Little Nightmares return with a new, dark cooperative adventure that explores the grotesque and the beautiful in a haunting world.',
    category: 'Horror',
    thumbnail: getImg('reanimal-thumb'),
    images: [getImg('reanimal-thumb')],
    videoUrl: 'https://www.youtube.com/embed/PjE-0L5YIas',
    shorts: [
      'https://www.youtube.com/embed/I0T8xZ9X0F4',
      'https://www.youtube.com/embed/rV9y9T-Xn7k',
      'https://www.youtube.com/embed/Z0oD6Xp1k-0'
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
    id: 'mgs5',
    title: 'Metal Gear Solid 5',
    description: 'Experience a new era for the franchise with cutting-edge technology powered by the Fox Engine, MGSV: The Phantom Pain provides players a first-rate gaming experience as they are offered tactical freedom.',
    category: 'Action',
    thumbnail: getImg('mgs5-thumb'),
    images: [getImg('mgs5-thumb')],
    videoUrl: 'https://www.youtube.com/embed/A9JV0EvCkMI',
    shorts: [
      'https://www.youtube.com/embed/uI_O-Kx7K_k',
      'https://www.youtube.com/embed/N-0_W88T5c0',
      'https://www.youtube.com/embed/A6NfIu3a8_4'
    ],
  },
  {
    id: 'hellblade2',
    title: 'Senua\'s Saga: Hellblade 2',
    description: 'The sequel to the award-winning Hellblade: Senua’s Sacrifice, Senua returns in a brutal journey of survival through the myth and torment of Viking Iceland.',
    category: 'Adventure',
    thumbnail: getImg('hellblade2-thumb'),
    images: [getImg('hellblade2-thumb')],
    videoUrl: 'https://www.youtube.com/embed/2-nFvY0wL2c',
    shorts: [
      'https://www.youtube.com/embed/u2v_5h9qYmI',
      'https://www.youtube.com/embed/N-0_W88T5c0',
      'https://www.youtube.com/embed/I0T8xZ9X0F4'
    ],
  },
  {
    id: 'ds2',
    title: 'Death Stranding 2',
    description: 'Sam Porter Bridges returns for a new journey to connect humanity in a world transformed by the Death Stranding. A masterpiece from Hideo Kojima.',
    category: 'Adventure',
    thumbnail: getImg('ds2-thumb'),
    images: [getImg('ds2-thumb')],
    videoUrl: 'https://www.youtube.com/embed/u_F8X-v8f8Y',
    shorts: [
      'https://www.youtube.com/embed/u_F8X-v8f8Y',
      'https://www.youtube.com/embed/A6NfIu3a8_4',
      'https://www.youtube.com/embed/PjE-0L5YIas'
    ],
  },
  {
    id: 'jc4',
    title: 'Just Cause 4',
    description: 'Rico Rodriguez visits Solis, a huge South American home of conflict, oppression and extreme weather conditions. Strap into your wingsuit, equip your fully customizable grappling hook, and get ready to bring the thunder!',
    category: 'Action',
    thumbnail: getImg('jc4-thumb'),
    images: [getImg('jc4-thumb')],
    videoUrl: 'https://www.youtube.com/embed/LImn9O4KscA',
    shorts: [
      'https://www.youtube.com/embed/uI_O-Kx7K_k',
      'https://www.youtube.com/embed/p1_v-F7m6X0',
      'https://www.youtube.com/embed/2-nFvY0wL2c'
    ],
  },
  {
    id: 'mafia-old',
    title: 'Mafia: The Old Country',
    description: 'Uncover the origins of organized crime in Mafia: The Old Country, a gritty mob story set in the brutal underworld of 1900s Sicily.',
    category: 'Adventure',
    thumbnail: getImg('mafia-old-thumb'),
    images: [getImg('mafia-old-thumb')],
    videoUrl: 'https://www.youtube.com/embed/zM7i8-D8R1g',
    shorts: [
      'https://www.youtube.com/embed/A6NfIu3a8_4',
      'https://www.youtube.com/embed/uI_O-Kx7K_k',
      'https://www.youtube.com/embed/NnK-rC5A_nU'
    ],
  },
  {
    id: 'mafia3',
    title: 'Mafia 3: Definitive Edition',
    description: 'After years of combat in Vietnam, Lincoln Clay knows this truth: family isn’t who you’re born with, it’s who you die for.',
    category: 'Adventure',
    thumbnail: getImg('mafia3-thumb'),
    images: [getImg('mafia3-thumb')],
    videoUrl: 'https://www.youtube.com/embed/4UdSpFXz8Q4',
    shorts: [
      'https://www.youtube.com/embed/I0T8xZ9X0F4',
      'https://www.youtube.com/embed/rV9y9T-Xn7k',
      'https://www.youtube.com/embed/Z0oD6Xp1k-0'
    ],
  },
  {
    id: 'maxpayne3',
    title: 'Max Payne 3',
    description: 'For Max Payne, the tragedies that took his loved ones years ago are wounds that refuse to heal. No longer a cop, close to washed up and addicted to pain killers, Max takes a job in São Paulo, Brazil.',
    category: 'Adventure',
    thumbnail: getImg('maxpayne3-thumb'),
    images: [getImg('maxpayne3-thumb')],
    videoUrl: 'https://www.youtube.com/embed/dxa34RatmSc',
    shorts: [
      'https://www.youtube.com/embed/u2v_5h9qYmI',
      'https://www.youtube.com/embed/NnK-rC5A_nU',
      'https://www.youtube.com/embed/I0T8xZ9X0F4'
    ],
  },
  {
    id: 'ferocious',
    title: 'Ferocious',
    description: 'FEROCIOUS is a first-person shooter that combines a mysterious story with brutal action in a breathtaking, prehistoric world.',
    category: 'Shooter',
    thumbnail: getImg('ferocious-thumb'),
    images: [getImg('ferocious-thumb')],
    videoUrl: 'https://www.youtube.com/embed/uI_O-Kx7K_k',
    shorts: [
      'https://www.youtube.com/embed/uI_O-Kx7K_k',
      'https://www.youtube.com/embed/N-0_W88T5c0',
      'https://www.youtube.com/embed/A6NfIu3a8_4'
    ],
  },
  {
    id: 'nfs-unbound',
    title: 'Need for Speed Unbound',
    description: 'Race against time, outsmart the cops, and take on weekly qualifiers to reach The Grand, Lakeshore\'s ultimate street racing challenge.',
    category: 'Race',
    thumbnail: getImg('nfs-unbound-thumb'),
    images: [getImg('nfs-unbound-thumb')],
    videoUrl: 'https://www.youtube.com/embed/H2Y8XCe7F9E',
    shorts: [
      'https://www.youtube.com/embed/u2v_5h9qYmI',
      'https://www.youtube.com/embed/N-0_W88T5c0',
      'https://www.youtube.com/embed/I0T8xZ9X0F4'
    ],
  },
  {
    id: 'nfs-heat',
    title: 'Need for Speed Heat',
    description: 'Hustle by day and risk it all by night in Need for Speed Heat, a white-knuckle street racer, where the lines of the law fade as the sun starts to set.',
    category: 'Race',
    thumbnail: getImg('nfs-heat-thumb'),
    images: [getImg('nfs-heat-thumb')],
    videoUrl: 'https://www.youtube.com/embed/FYH9n37B7Yw',
    shorts: [
      'https://www.youtube.com/embed/u_F8X-v8f8Y',
      'https://www.youtube.com/embed/A6NfIu3a8_4',
      'https://www.youtube.com/embed/PjE-0L5YIas'
    ],
  },
  {
    id: 'crew2',
    title: 'The Crew 2',
    description: 'Take on the American motorsports scene as you explore and dominate the land, air, and sea of the United States in one of the most exhilarating open worlds ever created.',
    category: 'Race',
    thumbnail: getImg('crew2-thumb'),
    images: [getImg('crew2-thumb')],
    videoUrl: 'https://www.youtube.com/embed/FYH9n37B7Yw',
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
  }
];
