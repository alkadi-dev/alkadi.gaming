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

export const CATEGORIES = ['All', 'RPG', 'Race', 'Adventure', 'Open World', 'Action', 'Sports', 'Shooter', 'Fighting', 'Horror'];

const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';
const NEW_TRAILER_URL = 'https://www.youtube.com/embed/gmA6MrX81z4';

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
    videoUrl: NEW_TRAILER_URL
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
    videoUrl: NEW_TRAILER_URL
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
    videoUrl: NEW_TRAILER_URL
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
    videoUrl: NEW_TRAILER_URL
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
    videoUrl: NEW_TRAILER_URL
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
    videoUrl: NEW_TRAILER_URL
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
    videoUrl: NEW_TRAILER_URL
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
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '9',
    title: 'God of War',
    description: 'Living as a man outside the shadow of the gods, Kratos must adapt to unfamiliar lands, unexpected threats, and a second chance at being a father. Together with his son Atreus, the pair will venture into the brutal Norse wilds and fight to fulfill a deeply personal quest.',
    category: 'Action',
    thumbnail: getImg('gow-thumb'),
    images: [getImg('gow-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '10',
    title: 'God of War Ragnarök',
    description: 'Fimbulwinter is well underway. Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world. Along the way, they will explore stunning, mythical landscapes, and face fearsome enemies in the form of Norse gods and monsters.',
    category: 'Action',
    thumbnail: getImg('gowr-thumb'),
    images: [getImg('gowr-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '11',
    title: 'Grand Theft Auto V',
    description: 'When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.',
    category: 'Open World',
    thumbnail: getImg('gtav-thumb'),
    images: [getImg('gtav-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '12',
    title: 'Cyberpunk 2077',
    description: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades.',
    category: 'Open World',
    thumbnail: getImg('cp2077-thumb'),
    images: [getImg('cp2077-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '13',
    title: 'Uncharted 4: A Thief\'s End',
    description: 'Several years after his last adventure, retired fortune hunter, Nathan Drake, is forced back into the world of thieves. With the stakes much more personal, Drake embarks on a globe-trotting journey in pursuit of a historical conspiracy behind a fabled pirate treasure. His greatest adventure will test his physical limits, his resolve, and ultimately what he\'s willing to sacrifice to save the ones he loves.',
    category: 'Adventure',
    thumbnail: getImg('u4-thumb'),
    images: [getImg('u4-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '14',
    title: 'Ghost of Tsushima',
    description: 'In the late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East. Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet led by the ruthless and cunning general, Khotun Khan.',
    category: 'Open World',
    thumbnail: getImg('got-thumb'),
    images: [getImg('got-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '15',
    title: 'Crimson Desert',
    description: 'Crimson Desert is an upcoming open world action-adventure game. A story of survival, Crimson Desert follows a group of struggling mercenaries and the many characters who cross their paths in the vast continent of Pywel. It is a world where heroes are made, but not without incredible hardship, pain and perseverance.',
    category: 'RPG',
    thumbnail: getImg('crimson-thumb'),
    images: [getImg('crimson-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '16',
    title: 'Marvel\'s Spider-Man',
    description: 'Starring one of the world\'s most iconic Super Heroes, Marvel\'s Spider-Man features the acrobatic abilities, improvisation and web-slinging that the wall-crawler is famous for, while also introducing elements never-before-seen in a Spider-Man game.',
    category: 'Open World',
    thumbnail: getImg('spiderman-thumb'),
    images: [getImg('spiderman-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '17',
    title: 'Marvel\'s Spider-Man: Miles Morales',
    description: 'In the latest adventure in the Marvel\'s Spider-Man universe, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. But when a fierce power struggle threatens to destroy his new home, the aspiring hero realizes that with great power, there must also come great responsibility.',
    category: 'Open World',
    thumbnail: getImg('miles-thumb'),
    images: [getImg('miles-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '18',
    title: 'Hitman World of Assassination',
    description: 'Enter the world of the ultimate assassin. HITMAN World of Assassination brings together the best of HITMAN, HITMAN 2 and HITMAN 3 including the main campaign, contracts mode, elusive targets and the roguelike inspired game mode HITMAN: Freelancer.',
    category: 'Action',
    thumbnail: getImg('hitman-thumb'),
    images: [getImg('hitman-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '19',
    title: 'Horizon Zero Dawn',
    description: 'In an era where Machines roam the land and Mankind is no longer the dominant species, a young hunter named Aloy embarks on a journey to discover her destiny. Explore a vibrant and lush world inhabited by mysterious mechanized creatures.',
    category: 'Open World',
    thumbnail: getImg('hzd-thumb'),
    images: [getImg('hzd-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '20',
    title: 'FIFA 23',
    description: 'EA SPORTS™ FIFA 23 brings The World\'s Game to the pitch, with HyperMotion2 Technology that delivers even more gameplay realism, both the men\'s and women\'s FIFA World Cup™ coming to the game as post-launch updates, the addition of women\'s club teams, cross-play features, and more.',
    category: 'Sports',
    thumbnail: getImg('fifa23-thumb'),
    images: [getImg('fifa23-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '21',
    title: 'FIFA 26',
    description: 'The future of football simulation. FIFA 26 takes realism to new heights with next-generation physics, expanded leagues, and a revolutionary career mode that puts you at the heart of the global game.',
    category: 'Sports',
    thumbnail: getImg('fifa26-thumb'),
    images: [getImg('fifa26-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '22',
    title: 'Sniper Elite 4',
    description: 'Sniper Elite 4 is a third-person tactical shooter that combines genre-defining ballistics, breathless emergent stealth, and gripping third-person action across the most diverse environments ever seen in a Sniper Elite game.',
    category: 'Shooter',
    thumbnail: getImg('se4-thumb'),
    images: [getImg('se4-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '23',
    title: 'Watch Dogs 2',
    description: 'Play as Marcus Holloway, a brilliant young hacker living in the birthplace of the tech revolution, the San Francisco Bay Area. Team up with Dedsec, a notorious group of hackers, to execute the biggest hack in history; take down ctOS 2.0.',
    category: 'Open World',
    thumbnail: getImg('wd2-thumb'),
    images: [getImg('wd2-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '24',
    title: 'Battlefield V',
    description: 'Enter mankind\'s greatest conflict with Battlefield™ V as the series goes back to its roots in a never-before-seen portrayal of World War 2. Take on physical, all-out multiplayer with your squad in modes like the vast Grand Operations and the cooperative Combined Arms.',
    category: 'Shooter',
    thumbnail: getImg('bf5-thumb'),
    images: [getImg('bf5-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '25',
    title: 'Battlefield 2042',
    description: 'Battlefield™ 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise. In a near-future world transformed by disorder, adapt and overcome dynamically-changing battlegrounds with the help of your squad and a cutting-edge arsenal.',
    category: 'Shooter',
    thumbnail: getImg('bf6-thumb'),
    images: [getImg('bf6-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '26',
    title: 'Call of Duty: Vanguard',
    description: 'Rise on every front: Dogfight over the Pacific, airdrop over France, defend Stalingrad with a sniper\'s precision and blast through advancing forces in North Africa. The Call of Duty® franchise returns with Call of Duty®: Vanguard.',
    category: 'Shooter',
    thumbnail: getImg('cod-v-thumb'),
    images: [getImg('cod-v-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '27',
    title: 'Call of Duty: WWII',
    description: 'Call of Duty® returns to its roots with Call of Duty®: WWII - a breathtaking experience that redefines World War II for a new gaming generation. Land in Normandy on D-Day and battle across Europe through iconic locations in history\'s most monumental war.',
    category: 'Shooter',
    thumbnail: getImg('cod-ww2-thumb'),
    images: [getImg('cod-ww2-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '28',
    title: 'Call of Duty: Modern Warfare',
    description: 'Prepare to go dark, Modern Warfare® is back! The stakes have never been higher as players take on the role of lethal Tier One operators in a heart-pounding saga that will affect the global balance of power.',
    category: 'Shooter',
    thumbnail: getImg('cod-mw-thumb'),
    images: [getImg('cod-mw-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '29',
    title: 'Call of Duty: Modern Warfare II',
    description: 'Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic operators of Task Force 141. From small-scale, high-stakes infiltration tactical ops to highly classified missions, players will deploy alongside friends in a truly immersive experience.',
    category: 'Shooter',
    thumbnail: getImg('cod-mw2-thumb'),
    images: [getImg('cod-mw2-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '30',
    title: 'Call of Duty: Modern Warfare III',
    description: 'In the direct sequel to the record-breaking Call of Duty®: Modern Warfare® II, Captain Price and Task Force 141 face off against the ultimate threat. The ultranationalist war criminal Vladimir Makarov is extending his grasp across the world causing Task Force 141 to fight like never before.',
    category: 'Shooter',
    thumbnail: getImg('cod-mw3-thumb'),
    images: [getImg('cod-mw3-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '31',
    title: 'Assassin\'s Creed Shadows',
    description: 'Live the intertwined stories of Naoe, an adept shinobi Assassin from Iga Province, and Yasuke, the powerful African samurai of historical legend. Against the backdrop of the late Sengoku period, discover their common destiny as they usher in a new era for Japan.',
    category: 'Action',
    thumbnail: getImg('ac-shadows-thumb'),
    images: [getImg('ac-shadows-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '32',
    title: 'Assassin\'s Creed Unity',
    description: 'Assassin\'s Creed Unity is an action-adventure game set in the city of Paris during one of its darkest hours, the French Revolution. Take ownership of the story by customizing Arno\'s equipment to make the experience unique to you, both visually and mechanically.',
    category: 'Action',
    thumbnail: getImg('ac-unity-thumb'),
    images: [getImg('ac-unity-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '33',
    title: 'Assassin\'s Creed Mirage',
    description: 'Experience the story of Basim, a cunning street thief seeking answers and justice as he navigates the bustling streets of ninth-century Baghdad. Become the most versatile Assassin in franchise history in this modern take on the series\' iconic parkour and stealth gameplay.',
    category: 'Action',
    thumbnail: getImg('ac-mirage-thumb'),
    images: [getImg('ac-mirage-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '34',
    title: 'Assassin\'s Creed Odyssey',
    description: 'Write your own epic odyssey and become a legendary Spartan hero. Forge your destiny in a world on the brink of tearing itself apart. Influence how history unfolds in an ever-changing world shaped by your choices.',
    category: 'RPG',
    thumbnail: getImg('ac-odyssey-thumb'),
    images: [getImg('ac-odyssey-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '35',
    title: 'Assassin\'s Creed Syndicate',
    description: 'London, 1868. The Industrial Revolution fattens the purses of the privileged while the working class struggles to survive — until two Assassins rise from the underworld to rally to their aid and lead a street war that will echo through history.',
    category: 'Action',
    thumbnail: getImg('ac-syndicate-thumb'),
    images: [getImg('ac-syndicate-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '36',
    title: 'Detroit: Become Human',
    description: 'Detroit, 2038. Technology has evolved to a point where human like androids are everywhere. They speak, move and behave like human beings, but they are only machines serving humans.',
    category: 'Adventure',
    thumbnail: getImg('detroit-thumb'),
    images: [getImg('detroit-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '37',
    title: 'Far Cry 5',
    description: 'Welcome to Hope County, Montana, land of the free and the brave but also home to a fanatical doomsday cult known as Eden’s Gate. Stand up to cult leader Joseph Seed, and his siblings, the Heralds, to kindle the fires of resistance and liberate the besieged community.',
    category: 'Open World',
    thumbnail: getImg('farcry5-thumb'),
    images: [getImg('farcry5-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '38',
    title: 'Far Cry 4',
    description: 'Hidden in the towering Himalayas lies Kyrat, a country steeped in tradition and violence. You are Ajay Ghale. Traveling to Kyrat to fulfill your mother’s dying wish, you find yourself caught up in a civil war to overthrow the oppressive regime of dictator Pagan Min.',
    category: 'Open World',
    thumbnail: getImg('farcry4-thumb'),
    images: [getImg('farcry4-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '39',
    title: 'Gotham Knights',
    description: 'Batman is dead. A new expansive, criminal underworld has swept the streets of Gotham City. It is now up to the Batman Family - Batgirl, Nightwing, Red Hood, and Robin - to protect Gotham, bring hope to its citizens, discipline to its cops, and fear to its criminals.',
    category: 'Action',
    thumbnail: getImg('gotham-thumb'),
    images: [getImg('gotham-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '40',
    title: 'Batman: Arkham Knight',
    description: 'Batman: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion. Developed exclusively for New-Gen platforms, Batman: Arkham Knight introduces Rocksteady’s uniquely designed version of the Batmobile.',
    category: 'Action',
    thumbnail: getImg('batman-thumb'),
    images: [getImg('batman-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '41',
    title: 'Cronos: The New Dawn',
    description: 'A third-person survival horror game that follows a gripping story where the past and the future collide. Explore a dark world, battle terrifying creatures, and uncover the mysteries of time.',
    category: 'Adventure',
    thumbnail: getImg('cronos-thumb'),
    images: [getImg('cronos-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '42',
    title: 'Ready or Not',
    description: 'Ready or Not is an intense, tactical, first-person shooter that depicts a modern day world in which SWAT police units are called to defuse hostile and confronting situations.',
    category: 'Shooter',
    thumbnail: getImg('readyornot-thumb'),
    images: [getImg('readyornot-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '43',
    title: 'Echoes of the End',
    description: 'Echoes of the End is a third-person action-adventure game set in a unique fantasy world. Players take on the role of Ryn, a seasoned fighter with the ability to manipulate matter, as she embarks on a journey across a vast continent.',
    category: 'Adventure',
    thumbnail: getImg('echoes-thumb'),
    images: [getImg('echoes-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '44',
    title: 'Forza Horizon 5',
    description: 'Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world’s greatest cars.',
    category: 'Race',
    thumbnail: getImg('forza5-thumb'),
    images: [getImg('forza5-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '45',
    title: 'Dying Light 2: Stay Human',
    description: 'Over twenty years ago in Harran, we fought the virus—and lost. Now, we’re losing again. The City, one of the last large human settlements, is torn by conflict. Civilization has fallen back into the Dark Ages.',
    category: 'Open World',
    thumbnail: getImg('dl2-thumb'),
    images: [getImg('dl2-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '46',
    title: 'Dead Island 2',
    description: 'Dead Island 2 is a thrilling First-Person Action RPG, taking players across a brand-new playground – a hellish vision of LA. It’s stylish, vibrant and flooded with zombie infection.',
    category: 'Action',
    thumbnail: getImg('di2-thumb'),
    images: [getImg('di2-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '47',
    title: 'Days Gone',
    description: 'Ride and fight into a deadly, post-pandemic America. Play as Deacon St. John, a drifter and bounty hunter who rides the broken road, fighting to survive while searching for a reason to live.',
    category: 'Open World',
    thumbnail: getImg('daysgone-thumb'),
    images: [getImg('daysgone-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '48',
    title: 'S.T.A.L.K.E.R. 2: Heart of Chornobyl',
    description: 'Discover the vast Chornobyl Exclusion Zone full of dangerous enemies, deadly anomalies and powerful artifacts. Unveil your own epic story as you make your way to the Heart of Chornobyl.',
    category: 'Shooter',
    thumbnail: getImg('stalker2-thumb'),
    images: [getImg('stalker2-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '49',
    title: 'Resident Evil 2',
    description: 'A deadly virus engulfs the residents of Raccoon City in September of 1998, plunging the city into chaos as flesh eating zombies roam the streets for survivors. An unparalleled adrenaline rush, gripping storyline, and unimaginable horrors await you.',
    category: 'Horror',
    thumbnail: getImg('re2-thumb'),
    images: [getImg('re2-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '50',
    title: 'Resident Evil 4',
    description: 'Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, has been dispatched to rescue the president\'s kidnapped daughter.',
    category: 'Horror',
    thumbnail: getImg('re4-thumb'),
    images: [getImg('re4-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '51',
    title: 'Resident Evil Village',
    description: 'Experience survival horror like never before in the eighth major installment in the storied Resident Evil franchise - Resident Evil Village. With all-new graphics, intense first-person action and masterful storytelling, the terror has never felt more real.',
    category: 'Horror',
    thumbnail: getImg('revillage-thumb'),
    images: [getImg('revillage-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '52',
    title: 'Resident Evil Biohazard',
    description: 'Fear and isolation seep through the walls of an abandoned southern farmhouse. "7" marks a new beginning for survival horror with the “Isolated View” of the visceral new first-person perspective.',
    category: 'Horror',
    thumbnail: getImg('rebio-thumb'),
    images: [getImg('rebio-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '53',
    title: 'Resident Evil Requiem',
    description: 'Far across the sea, an island calls... Embark on a heartrending journey into a brutal, breathtaking world twisted by supernatural forces. After escaping their devastated homeland, Amicia and Hugo travel far south, to new regions and vibrant cities.',
    category: 'Horror',
    thumbnail: getImg('plague-thumb'),
    images: [getImg('plague-hero')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '54',
    title: 'Resident Evil 3',
    description: 'Jill Valentine is one of the last remaining people in Raccoon City to witness the atrocities Umbrella performed. To stop her, Umbrella unleashes their ultimate secret weapon: Nemesis!',
    category: 'Horror',
    thumbnail: getImg('re3-thumb'),
    images: [getImg('re3-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '55',
    title: 'Elden Ring',
    description: 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. Explore a vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected.',
    category: 'RPG',
    thumbnail: getImg('eldenring-thumb'),
    images: [getImg('eldenring-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '56',
    title: 'Elden Ring: Shadow of the Erdtree',
    description: 'In the Land of Shadow, Miquella awaits the return of his promised Lord. An expansion to the award-winning action RPG Elden Ring, offering a new story, new enemies, and new powers.',
    category: 'RPG',
    thumbnail: getImg('elden-shadow-thumb'),
    images: [getImg('elden-shadow-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '57',
    title: 'Mortal Kombat 1',
    description: 'It\'s In Our Blood. Discover a reborn Mortal Kombat Universe created by the Fire God Liu Kang. Mortal Kombat 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and fatalities!',
    category: 'Fighting',
    thumbnail: getImg('mk1-thumb'),
    images: [getImg('mk1-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '58',
    title: 'Star Wars Jedi: Survivor',
    description: 'The story of Cal Kestis continues in Star Wars Jedi: Survivor, a third-person, galaxy-spanning, action-adventure game from Respawn Entertainment, developed in collaboration with Lucasfilm Games.',
    category: 'Adventure',
    thumbnail: getImg('jedi-survivor-thumb'),
    images: [getImg('jedi-survivor-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '59',
    title: 'The Little Nightmares 3',
    description: 'In Little Nightmares III, you follow the journey of Low & Alone, as they search for a path that could lead them out of the Nowhere. Trapped within the Spiral, a cluster of disturbing places, the two friends will have to work together to survive.',
    category: 'Horror',
    thumbnail: getImg('nightmares3-thumb'),
    images: [getImg('nightmares3-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '60',
    title: 'Ninja Gaiden 4',
    description: 'The legendary master ninja Ryu Hayabusa returns in an all-new high-speed action spectacle. Face off against a new threat to the world with unmatched precision and lethal combat techniques.',
    category: 'Action',
    thumbnail: getImg('ninjag4-thumb'),
    images: [getImg('ninjag4-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '61',
    title: 'Clair Obscur: Expedition 33',
    description: 'A reactive turn-based RPG set in the Belle Époque. Join the Expedition 33 on their quest to stop the Paintress and her cycle of death.',
    category: 'RPG',
    thumbnail: getImg('exp33-thumb'),
    images: [getImg('exp33-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '62',
    title: 'Avatar: Frontiers of Pandora',
    description: 'Avatar: Frontiers of Pandora™ is a first-person action-adventure game set in the open world of the Western Frontier of Pandora. Abducted by the human militaristic corporation known as the RDA, you, a Na’vi, were trained and molded to serve their purpose.',
    category: 'Adventure',
    thumbnail: getImg('avatar-pandora-thumb'),
    images: [getImg('avatar-pandora-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '63',
    title: 'Reanimal',
    description: 'The original creators of Little Nightmares return with a dark, terrifying journey. Face your deepest fears as you navigate a world of twisted creatures and haunting environments.',
    category: 'Horror',
    thumbnail: getImg('reanimal-thumb'),
    images: [getImg('reanimal-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '64',
    title: 'Alan Wake 2',
    description: 'A string of ritualistic murders threatens Bright Falls, an eerie community surrounded by the Pacific Northwest wilderness. Saga Anderson, an accomplished FBI agent, arrives to investigate. Meanwhile, Alan Wake, a trapped writer, writes a dark story to shape the reality around him.',
    category: 'Horror',
    thumbnail: getImg('alanwake2-thumb'),
    images: [getImg('alanwake2-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '65',
    title: 'Metal Gear Solid V: The Phantom Pain',
    description: 'Ushering in a new era for the Metal Gear franchise with cutting-edge technology powered by the Fox Engine, Metal Gear Solid V: The Phantom Pain provides players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.',
    category: 'Action',
    thumbnail: getImg('mgs5-thumb'),
    images: [getImg('mgs5-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '66',
    title: 'Senua\'s Saga: Hellblade II',
    description: 'The sequel to the award-winning Hellblade: Senua\'s Sacrifice, Senua returns in a brutal journey of survival through the myth and tyranny of Viking Iceland. Intent on saving those who have fallen victim to the horrors of tyranny, Senua faces a battle of overcoming the darkness within and without.',
    category: 'Adventure',
    thumbnail: getImg('hellblade2-thumb'),
    images: [getImg('hellblade2-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '67',
    title: 'Death Stranding 2: On the Beach',
    description: 'Sam Porter Bridges and his companions embark on a new journey to connect a fractured world. A masterpiece from Hideo Kojima, pushing the boundaries of storytelling and gameplay.',
    category: 'Adventure',
    thumbnail: getImg('ds2-thumb'),
    images: [getImg('ds2-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '68',
    title: 'Just Cause 4',
    description: 'Rogue agent Rico Rodriguez journeys to Solis, a huge South American world home of conflict, tyranny and extreme weather conditions. Strap into your wingsuit, equip your fully customizable grappling hook, and get ready to bring the thunder!',
    category: 'Action',
    thumbnail: getImg('jc4-thumb'),
    images: [getImg('jc4-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '69',
    title: 'Mafia: The Old Country',
    description: 'Uncover the origins of organized crime in Mafia: The Old Country, a gritty mob story set in the brutal underworld of 1900s Sicily. Fight to survive in this dangerous and unforgiving era.',
    category: 'Open World',
    thumbnail: getImg('mafia-old-thumb'),
    images: [getImg('mafia-old-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '70',
    title: 'Mafia III: Definitive Edition',
    description: 'Part three of the Mafia crime saga – 1968, New Bordeaux, LA. After years of combat in Vietnam, Lincoln Clay knows this truth: family isn’t who you’re born with, it’s who you die for.',
    category: 'Open World',
    thumbnail: getImg('mafia3-thumb'),
    images: [getImg('mafia3-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '71',
    title: 'Max Payne 3',
    description: 'For Max Payne, the tragedies that took his loved ones years ago are wounds that refuse to heal. No longer a cop, close to washed up and addicted to pain killers, Max takes a job in São Paulo, Brazil, protecting the family of wealthy real estate mogul Rodrigo Branco.',
    category: 'Action',
    thumbnail: getImg('maxpayne3-thumb'),
    images: [getImg('maxpayne3-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '72',
    title: 'Ferocious',
    description: 'A prehistoric survival shooter. Discover a mysterious island where dinosaurs still roam. Fight to survive against primeval threats and uncovering the secrets of a lost world.',
    category: 'Shooter',
    thumbnail: getImg('ferocious-thumb'),
    images: [getImg('ferocious-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '73',
    title: 'Need for Speed Unbound',
    description: 'The world is your canvas in Need for Speed Unbound. Prove you have what it takes to win The Grand, Lakeshore’s ultimate street racing challenge.',
    category: 'Race',
    thumbnail: getImg('nfs-unbound-thumb'),
    images: [getImg('nfs-unbound-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '74',
    title: 'Need for Speed Heat',
    description: 'Hustle by day and risk it all by night in Need for Speed Heat, a white-knuckle street racer, where the lines of the law fade as the sun starts to set.',
    category: 'Race',
    thumbnail: getImg('nfs-heat-thumb'),
    images: [getImg('nfs-heat-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '75',
    title: 'The Crew 2',
    description: 'Take on the American motorsports scene as you explore and dominate the land, air, and sea of the USA in one of the most exhilarating open worlds ever created.',
    category: 'Race',
    thumbnail: getImg('crew2-thumb'),
    images: [getImg('crew2-thumb')],
    videoUrl: NEW_TRAILER_URL
  },
  {
    id: '76',
    title: 'Silent Hill 2',
    description: 'Having received a letter from his deceased wife, James returns to where they made so many memories, in the hope of seeing her one more time: Silent Hill. A remake of the legendary survival horror masterpiece.',
    category: 'Horror',
    thumbnail: getImg('silenthill2-thumb'),
    images: [getImg('silenthill2-thumb')],
    videoUrl: NEW_TRAILER_URL
  }
];
