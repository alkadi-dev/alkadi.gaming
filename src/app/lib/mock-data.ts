
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

export const CATEGORIES = ['All', 'RPG', 'Race', 'Adventure', 'Open World', 'Action', 'Sports', 'Shooter'];

const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const MOCK_GAMES: GameEntry[] = [
  {
    id: '5',
    title: 'Red Dead Redemption 2',
    description: 'America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive.',
    category: 'Open World',
    thumbnail: getImg('rdr2-thumb'),
    images: [
      getImg('rdr2-hero'),
      getImg('rdr2-gallery-1')
    ],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '1',
    title: 'The Witcher 3',
    description: 'The Witcher 3: Wild Hunt is an open-world action RPG where you play as Geralt of Rivia, a monster hunter. The game is set in a rich, vast fantasy world, full of deep storytelling, complex characters, and massive choices that impact the world around you.',
    category: 'RPG',
    thumbnail: 'https://wallpapercave.com/wp/wp8510096.jpg',
    images: [
      'https://wallpapercave.com/wp/wp8510096.jpg',
      getImg('witcher-gallery-1'),
      getImg('witcher-gallery-2')
    ],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '2',
    title: 'Forza Horizon 6',
    description: 'Experience the ultimate driving festival. Explore a vibrant and ever-evolving open world with hundreds of the world\'s greatest cars in stunning 4K. Your ultimate Horizon adventure awaits.',
    category: 'Race',
    thumbnail: getImg('forza-thumb'),
    images: [
      getImg('forza-hero'),
      getImg('forza-gallery-1')
    ],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '3',
    title: 'Skyward Odyssey',
    description: 'A breathtaking adventure across floating islands. Use your mechanical wings to soar between peaks, solve ancient puzzles, and uncover the secrets of a civilization that lived above the clouds.',
    category: 'Adventure',
    thumbnail: getImg('skyward-thumb'),
    images: [
      'https://picsum.photos/seed/g3a/1200/800',
      'https://picsum.photos/seed/g3b/1200/800'
    ],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '4',
    title: 'Horizon Zero Frontier',
    description: 'Survive in a vast, seamless open world teeming with robotic wildlife. Build your settlement, forage for resources, and defend your territory against rival clans in this post-apocalyptic frontier.',
    category: 'Open World',
    thumbnail: getImg('hzf-thumb'),
    images: [
      'https://picsum.photos/seed/g4a/1200/800',
      'https://picsum.photos/seed/g4b/1200/800'
    ],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '6',
    title: 'Spider-Man 2',
    description: 'Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel\'s Spider-Man franchise. Swing, jump, and utilize the new Web Wings to travel across Marvel\'s New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers.',
    category: 'Open World',
    thumbnail: getImg('spiderman2-thumb'),
    images: [
      getImg('spiderman2-hero')
    ],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '7',
    title: 'The Last of Us Part I',
    description: 'Experience the emotional storytelling and unforgettable characters in The Last of Us, winner of over 200 Game of the Year awards. In a ravaged civilization, where infected and hardened survivors run rampant, Joel, a weary protagonist, is hired to smuggle 14-year-old Ellie out of a military quarantine zone.',
    category: 'Adventure',
    thumbnail: getImg('tlou1-thumb'),
    images: [
      getImg('tlou1-hero')
    ],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '8',
    title: 'The Last of Us Part II',
    description: 'Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors.',
    category: 'Adventure',
    thumbnail: getImg('tlou2-thumb'),
    images: [
      getImg('tlou2-hero')
    ],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '9',
    title: 'God of War',
    description: 'Living as a man outside the shadow of the gods, Kratos must adapt to unfamiliar lands, unexpected threats, and a second chance at being a father. Together with his son Atreus, the pair will venture into the brutal Norse wilds and fight to fulfill a deeply personal quest.',
    category: 'Action',
    thumbnail: getImg('gow-thumb'),
    images: [getImg('gow-hero')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '10',
    title: 'God of War Ragnarök',
    description: 'Fimbulwinter is well underway. Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world. Along the way, they will explore stunning, mythical landscapes, and face fearsome enemies in the form of Norse gods and monsters.',
    category: 'Action',
    thumbnail: getImg('gowr-thumb'),
    images: [getImg('gowr-hero')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '11',
    title: 'Grand Theft Auto V',
    description: 'When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.',
    category: 'Open World',
    thumbnail: getImg('gtav-thumb'),
    images: [getImg('gtav-hero')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '12',
    title: 'Cyberpunk 2077',
    description: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades.',
    category: 'Open World',
    thumbnail: getImg('cp2077-thumb'),
    images: [getImg('cp2077-hero')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '13',
    title: 'Uncharted 4: A Thief\'s End',
    description: 'Several years after his last adventure, retired fortune hunter, Nathan Drake, is forced back into the world of thieves. With the stakes much more personal, Drake embarks on a globe-trotting journey in pursuit of a historical conspiracy behind a fabled pirate treasure. His greatest adventure will test his physical limits, his resolve, and ultimately what he\'s willing to sacrifice to save the ones he loves.',
    category: 'Adventure',
    thumbnail: getImg('u4-thumb'),
    images: [getImg('u4-hero')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '14',
    title: 'Ghost of Tsushima',
    description: 'In the late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East. Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet led by the ruthless and cunning general, Khotun Khan.',
    category: 'Open World',
    thumbnail: getImg('got-thumb'),
    images: [getImg('got-hero')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '15',
    title: 'Crimson Desert',
    description: 'Crimson Desert is an upcoming open world action-adventure game. A story of survival, Crimson Desert follows a group of struggling mercenaries and the many characters who cross their paths in the vast continent of Pywel. It is a world where heroes are made, but not without incredible hardship, pain and perseverance.',
    category: 'RPG',
    thumbnail: getImg('crimson-thumb'),
    images: [getImg('crimson-hero')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '16',
    title: 'Marvel\'s Spider-Man',
    description: 'Starring one of the world\'s most iconic Super Heroes, Marvel\'s Spider-Man features the acrobatic abilities, improvisation and web-slinging that the wall-crawler is famous for, while also introducing elements never-before-seen in a Spider-Man game.',
    category: 'Open World',
    thumbnail: getImg('spiderman-thumb'),
    images: [getImg('spiderman-hero')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '17',
    title: 'Marvel\'s Spider-Man: Miles Morales',
    description: 'In the latest adventure in the Marvel\'s Spider-Man universe, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. But when a fierce power struggle threatens to destroy his new home, the aspiring hero realizes that with great power, there must also come great responsibility.',
    category: 'Open World',
    thumbnail: getImg('miles-thumb'),
    images: [getImg('miles-hero')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '18',
    title: 'Hitman World of Assassination',
    description: 'Enter the world of the ultimate assassin. HITMAN World of Assassination brings together the best of HITMAN, HITMAN 2 and HITMAN 3 including the main campaign, contracts mode, elusive targets and the roguelike inspired game mode HITMAN: Freelancer.',
    category: 'Action',
    thumbnail: getImg('hitman-thumb'),
    images: [getImg('hitman-hero')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '19',
    title: 'Horizon Zero Dawn',
    description: 'In an era where Machines roam the land and Mankind is no longer the dominant species, a young hunter named Aloy embarks on a journey to discover her destiny. Explore a vibrant and lush world inhabited by mysterious mechanized creatures.',
    category: 'Open World',
    thumbnail: getImg('hzd-thumb'),
    images: [getImg('hzd-hero')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '20',
    title: 'FIFA 23',
    description: 'EA SPORTS™ FIFA 23 brings The World\'s Game to the pitch, with HyperMotion2 Technology that delivers even more gameplay realism, both the men\'s and women\'s FIFA World Cup™ coming to the game as post-launch updates, the addition of women\'s club teams, cross-play features, and more.',
    category: 'Sports',
    thumbnail: getImg('fifa23-thumb'),
    images: [getImg('fifa23-hero')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '21',
    title: 'FIFA 26',
    description: 'The future of football simulation. FIFA 26 takes realism to new heights with next-generation physics, expanded leagues, and a revolutionary career mode that puts you at the heart of the global game.',
    category: 'Sports',
    thumbnail: getImg('fifa26-thumb'),
    images: [getImg('fifa26-hero')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '22',
    title: 'Sniper Elite 4',
    description: 'Sniper Elite 4 is a third-person tactical shooter that combines genre-defining ballistics, breathless emergent stealth, and gripping third-person action across the most diverse environments ever seen in a Sniper Elite game.',
    category: 'Shooter',
    thumbnail: getImg('se4-thumb'),
    images: [getImg('se4-thumb')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '23',
    title: 'Watch Dogs 2',
    description: 'Play as Marcus Holloway, a brilliant young hacker living in the birthplace of the tech revolution, the San Francisco Bay Area. Team up with Dedsec, a notorious group of hackers, to execute the biggest hack in history; take down ctOS 2.0.',
    category: 'Open World',
    thumbnail: getImg('wd2-thumb'),
    images: [getImg('wd2-thumb')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '24',
    title: 'Battlefield V',
    description: 'Enter mankind\'s greatest conflict with Battlefield™ V as the series goes back to its roots in a never-before-seen portrayal of World War 2. Take on physical, all-out multiplayer with your squad in modes like the vast Grand Operations and the cooperative Combined Arms.',
    category: 'Shooter',
    thumbnail: getImg('bf5-thumb'),
    images: [getImg('bf5-thumb')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '25',
    title: 'Battlefield 2042',
    description: 'Battlefield™ 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise. In a near-future world transformed by disorder, adapt and overcome dynamically-changing battlegrounds with the help of your squad and a cutting-edge arsenal.',
    category: 'Shooter',
    thumbnail: getImg('bf6-thumb'),
    images: [getImg('bf6-thumb')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '26',
    title: 'Call of Duty: Vanguard',
    description: 'Rise on every front: Dogfight over the Pacific, airdrop over France, defend Stalingrad with a sniper\'s precision and blast through advancing forces in North Africa. The Call of Duty® franchise returns with Call of Duty®: Vanguard.',
    category: 'Shooter',
    thumbnail: getImg('cod-v-thumb'),
    images: [getImg('cod-v-thumb')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '27',
    title: 'Call of Duty: WWII',
    description: 'Call of Duty® returns to its roots with Call of Duty®: WWII - a breathtaking experience that redefines World War II for a new gaming generation. Land in Normandy on D-Day and battle across Europe through iconic locations in history\'s most monumental war.',
    category: 'Shooter',
    thumbnail: getImg('cod-ww2-thumb'),
    images: [getImg('cod-ww2-thumb')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '28',
    title: 'Call of Duty: Modern Warfare',
    description: 'Prepare to go dark, Modern Warfare® is back! The stakes have never been higher as players take on the role of lethal Tier One operators in a heart-pounding saga that will affect the global balance of power.',
    category: 'Shooter',
    thumbnail: getImg('cod-mw-thumb'),
    images: [getImg('cod-mw-thumb')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '29',
    title: 'Call of Duty: Modern Warfare II',
    description: 'Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic operators of Task Force 141. From small-scale, high-stakes infiltration tactical ops to highly classified missions, players will deploy alongside friends in a truly immersive experience.',
    category: 'Shooter',
    thumbnail: getImg('cod-mw2-thumb'),
    images: [getImg('cod-mw2-thumb')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '30',
    title: 'Call of Duty: Modern Warfare III',
    description: 'In the direct sequel to the record-breaking Call of Duty®: Modern Warfare® II, Captain Price and Task Force 141 face off against the ultimate threat. The ultranationalist war criminal Vladimir Makarov is extending his grasp across the world causing Task Force 141 to fight like never before.',
    category: 'Shooter',
    thumbnail: getImg('cod-mw3-thumb'),
    images: [getImg('cod-mw3-thumb')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '31',
    title: 'Assassin\'s Creed Shadows',
    description: 'Live the intertwined stories of Naoe, an adept shinobi Assassin from Iga Province, and Yasuke, the powerful African samurai of historical legend. Against the backdrop of the late Sengoku period, discover their common destiny as they usher in a new era for Japan.',
    category: 'Action',
    thumbnail: getImg('ac-shadows-thumb'),
    images: [getImg('ac-shadows-hero')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '32',
    title: 'Assassin\'s Creed Unity',
    description: 'Assassin\'s Creed Unity is an action-adventure game set in the city of Paris during one of its darkest hours, the French Revolution. Take ownership of the story by customizing Arno\'s equipment to make the experience unique to you, both visually and mechanically.',
    category: 'Action',
    thumbnail: getImg('ac-unity-thumb'),
    images: [getImg('ac-unity-hero')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '33',
    title: 'Assassin\'s Creed Mirage',
    description: 'Experience the story of Basim, a cunning street thief seeking answers and justice as he navigates the bustling streets of ninth-century Baghdad. Become the most versatile Assassin in franchise history in this modern take on the series\' iconic parkour and stealth gameplay.',
    category: 'Action',
    thumbnail: getImg('ac-mirage-thumb'),
    images: [getImg('ac-mirage-hero')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '34',
    title: 'Assassin\'s Creed Odyssey',
    description: 'Write your own epic odyssey and become a legendary Spartan hero. Forge your destiny in a world on the brink of tearing itself apart. Influence how history unfolds in an ever-changing world shaped by your choices.',
    category: 'RPG',
    thumbnail: getImg('ac-odyssey-thumb'),
    images: [getImg('ac-odyssey-hero')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  },
  {
    id: '35',
    title: 'Assassin\'s Creed Syndicate',
    description: 'London, 1868. The Industrial Revolution fattens the purses of the privileged while the working class struggles to survive — until two Assassins rise from the underworld to rally to their aid and lead a street war that will echo through history.',
    category: 'Action',
    thumbnail: getImg('ac-syndicate-thumb'),
    images: [getImg('ac-syndicate-hero')],
    videoUrl: 'https://www.youtube.com/embed/pWw-UENvdTw'
  }
];
