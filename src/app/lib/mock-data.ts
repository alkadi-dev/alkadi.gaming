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

const NEW_SHORTS = [
  'https://www.youtube.com/embed/0d-U2QL2Qvc?si=bHpYGwiXYsGjmox8',
  'https://www.youtube.com/embed/XsaXfkpKPNM?si=jaFUTogTmJJA6Quj',
  'https://www.youtube.com/embed/ax_HkEnW_ig?si=c10FMUWfn3HkiDuC'
];

export const MOCK_GAMES: GameEntry[] = [
  {
    id: '5',
    title: 'Red Dead Redemption 2',
    description: 'America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive.',
    category: 'Open World',
    thumbnail: 'https://wallpapercave.com/wp/wp3770429.png',
    images: [
      'https://wallpapercave.com/wp/wp3770429.png',
      'https://images6.alphacoders.com/952/thumbbig-952687.webp',
      'https://wallpapers.com/images/hd/red-dead-redemption-2-desktop-dd0fimlsbzh0zihw.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/gmA6MrX81z4',
    shorts: [
      'https://www.youtube.com/embed/0d-U2QL2Qvc?si=u_uaO45UmkJ4UHDq',
      'https://www.youtube.com/embed/XsaXfkpKPNM?si=9qaxQN7xEEVKVfIn',
      'https://www.youtube.com/embed/ax_HkEnW_ig?si=xXoL5iPzvwJ18AtK'
    ],
  },
  {
    id: '1',
    title: 'The Witcher 3',
    description: 'The Witcher 3: Wild Hunt is an open-world action RPG where you play as Geralt of Rivia, a monster hunter. The game is set in a rich, vast fantasy world, full of deep storytelling, complex characters, and massive choices that impact the world around you.',
    category: 'RPG',
    thumbnail: 'https://wallpapercat.com/w/full/f/3/f/5549-3840x2160-desktop-4k-the-witcher-game-wallpaper-photo.jpg',
    images: [
      'https://wallpapercat.com/w/full/f/3/f/5549-3840x2160-desktop-4k-the-witcher-game-wallpaper-photo.jpg',
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2022/12/geralt-standing-in-front-of-kaer-morhen.jpg?q=50&fit=crop&w=825&dpr=1.5',
      'https://getwallpapers.com/wallpaper/full/a/7/8/23018.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/XHrskkHf958',
    shorts: [
      'https://www.youtube.com/embed/9HxO2Yg2AEQ?si=qKvoPgUhwaSl2_il',
      'https://www.youtube.com/embed/AT5PlpAKo0I?si=DSdU6m9qafDR3_qt',
      'https://www.youtube.com/embed/40omY9j5-y8?si=caiQiSbDzD5v7ugo'
    ],
  },
  {
    id: 'ac-shadows',
    title: "Assassin's Creed Shadows",
    description: 'Experience an epic historical action-adventure story set in feudal Japan. Become a lethal shinobi assassin and a powerful legendary samurai as you explore a beautiful open world in a time of chaos.',
    category: 'Open World',
    thumbnail: 'https://images6.alphacoders.com/139/thumbbig-1394470.webp',
    images: [
      'https://images6.alphacoders.com/139/thumbbig-1394470.webp',
      'https://preview.redd.it/two-new-screenshots-of-ac-shadows-world-v0-whm6mgnqhsee1.png?width=640&crop=smart&auto=webp&s=f0d47b92ba36516422cfee81603b63221662a440',
      'https://wallpapercave.com/wp/wp13980388.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/vovkzbtYBC8',
    shorts: [
      'https://www.youtube.com/embed/zGsXns95g4I?si=L580j9Mw1LFt06O4',
      'https://www.youtube.com/embed/R5cq8FnyPFI?si=2AVA1TyCbroVAJhD',
      'https://www.youtube.com/embed/mnIMU7BH57A?si=7_p6ID87TvhjRjHV'
    ],
  },
  {
    id: 'ac-unity',
    title: "Assassin's Creed Unity",
    description: "Assassin's Creed Unity is an action-adventure game set in the city of Paris during one of its darkest hours, the French Revolution. Take ownership of the story by customizing your equipment to make the experience unique to you.",
    category: 'Open World',
    thumbnail: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/Assassins-Creed-Unity.jpg?q=50&fit=crop&w=825&dpr=1.5',
    images: [
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/Assassins-Creed-Unity.jpg?q=50&fit=crop&w=825&dpr=1.5',
      'https://pixelkin.org/wp-content/uploads/2014/11/assassinscreedunityheader.jpg',
      'https://wallpapers.com/images/hd/assassin-s-creed-unity-1920-x-1080-wallpaper-nmwpxl1khg7mzdzg.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/xzCEdSKMkdU',
    shorts: [
      'https://www.youtube.com/embed/r_6otR28kMc',
      'https://www.youtube.com/embed/nQS1zvQLo_8',
      'https://www.youtube.com/embed/vrJAL-3J6xU'
    ],
  },
  {
    id: 'ac-mirage',
    title: "Assassin's Creed Mirage",
    description: 'In Assassin’s Creed Mirage, you are Basim, a cunning street thief with nightmarish visions, seeking answers and justice. Join an ancient organization and come to understand a new creed – one that will change Basim’s fate in ways he never could have imagined.',
    category: 'Action',
    thumbnail: 'https://wallpapercave.com/wp/wp11468139.jpg',
    images: [
      'https://wallpapercave.com/wp/wp11468139.jpg',
      "https://www.wallpapergap.com/cdn/24/343/assassin's-creed-mirage-full-hd-wallpaper-2000x1000.jpg",
      'https://gameinformer.com/sites/default/files/styles/content_header_l/public/2023/08/28/144dbd58/359_reveal_webhero.jpg.webp'
    ],
    videoUrl: 'https://www.youtube.com/embed/x55lAlFtXmw',
    shorts: [
      'https://www.youtube.com/embed/rylZ_xlq5MA?si=DxAmmAgKvNwbSs5Q',
      'https://www.youtube.com/embed/kJi7hP50VvA?si=C6UH7NYxM7HWfrqG',
      'https://www.youtube.com/embed/fG1VfOGixBg?si=9FGHe5kor155xYzH'
    ],
  },
  {
    id: 'ac-odyssey',
    title: "Assassin's Creed Odyssey",
    description: 'Write your own epic odyssey and become a legendary Spartan hero. Forge your destiny in a world on the brink of tearing itself apart. Influence how history unfolds in an ever-changing world shaped by your choices.',
    category: 'RPG',
    thumbnail: 'https://wallpaperaccess.com/full/1110212.jpg',
    images: [
      'https://wallpaperaccess.com/full/1110212.jpg',
      'https://wallpapers.com/images/hd/4k-assassin-s-creed-odyssey-background-3840-x-2160-vzqb12fb66jcw0tw.jpg',
      'https://wallpapercave.com/wp/wp4452951.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/s_SJZSAtLBA',
    shorts: [
      'https://www.youtube.com/embed/ikDXF2ngf9I?si=fxNsLXuv7MMmH1Fp',
      'https://www.youtube.com/embed/AqJbLJs5dW4?si=HvgdZYmYmJVmVFFa',
      'https://www.youtube.com/embed/QtT_F0TRaj8?si=w164WS64IBBuLki4'
    ],
  },
  {
    id: 'ac-syndicate',
    title: "Assassin's Creed Syndicate",
    description: 'London, 1868. In the heart of the Industrial Revolution, lead your underworld organization and grow your influence to fight those who exploit the less privileged in the name of progress.',
    category: 'Open World',
    thumbnail: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/Diesel_productv2_assassins-creed-syndicate_home_ACS-STD-2560x1440-635b7b6c86f18730071426375e7c4fe0bd831ddd.jpg?q=50&fit=crop&w=825&dpr=1.5',
    images: [
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/Diesel_productv2_assassins-creed-syndicate_home_ACS-STD-2560x1440-635b7b6c86f18730071426375e7c4fe0bd831ddd.jpg?q=50&fit=crop&w=825&dpr=1.5',
      'https://wallpaperaccess.com/full/1994779.jpg',
      'https://wallpaperaccess.com/full/2377333.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/3kGHHMc5dqE',
    shorts: [
      'https://www.youtube.com/embed/ruoguclV31o?si=WCUl0dPvDuitjTbj',
      'https://www.youtube.com/embed/MSE2U30VUi8?si=L_5E5YdoIV3j8yXd',
      'https://www.youtube.com/embed/IGtWAbFKVbs?si=AqATRV2OdI0dnUtq'
    ],
  },
  {
    id: '2',
    title: 'Forza Horizon 5',
    description: 'Experience the ultimate driving festival. Explore a vibrant and ever-evolving open world with hundreds of the world\'s greatest cars in stunning 4K. Your ultimate Horizon adventure awaits.',
    category: 'Race',
    thumbnail: 'https://traxion.gg/wp-content/uploads/2021/08/Forza-Horizon-5-game-cover-1000x600.jpg',
    images: [
      'https://traxion.gg/wp-content/uploads/2021/08/Forza-Horizon-5-game-cover-1000x600.jpg',
      'https://wallpapercave.com/wp/wp12405375.jpg',
      'https://wallpapers.com/images/hd/forza-horizon-5-4k-dac6pfcwb8wy8spw.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/FYH9n37B7Yw',
    shorts: [
      'https://www.youtube.com/embed/3pGgPrbdKaU?si=pk6rmiOf9AWXUPds',
      'https://www.youtube.com/embed/SsZoqBH3aYw?si=9dEKoN0Zx0sZEB0d',
      'https://www.youtube.com/embed/mwQpOPkGnCE?si=VqS2IQW3yOdNPz8Y'
    ],
  },
  {
    id: '6',
    title: 'Spider-Man 2',
    description: 'Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel\'s Spider-Man franchise. Swing, jump, and utilize the new Web Wings to travel across Marvel\'s New York.',
    category: 'Open World',
    thumbnail: 'https://4kwallpapers.com/images/walls/thumbs_2t/11609.jpeg',
    images: [
      'https://4kwallpapers.com/images/walls/thumbs_2t/11609.jpeg',
      'https://i.pinimg.com/originals/05/6d/d3/056dd39fccee614d4e46d77ef8814bf8.jpg',
      'https://wallpapercg.com/media/ts_orig/16684.webp'
    ],
    videoUrl: 'https://www.youtube.com/embed/nq1M_Wc4FIc',
    shorts: [
      'https://www.youtube.com/embed/ayeQ3CTLlMU?si=MGm4_43xG5IFmYm2',
      'https://www.youtube.com/embed/bhhyNlvVfr8?si=cra8Nomzn_6dANHO',
      'https://www.youtube.com/embed/y6vWl-8_0QI?si=NeegL4e8DJ4NKOmr'
    ],
  },
  {
    id: '10',
    title: 'God of War Ragnarök',
    description: 'Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world.',
    category: 'Action',
    thumbnail: 'https://wallpapers.com/images/hd/godof-war-ragnarok-kratos-atreus-winter-landscape-p0z1cxhlrscxekzw.jpg',
    images: [
      'https://wallpapers.com/images/hd/godof-war-ragnarok-kratos-atreus-winter-landscape-p0z1cxhlrscxekzw.jpg',
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2022/11/God-Of-War-Ragnarok-Jotenheim.jpg?q=50&fit=crop&w=825&dpr=1.5',
      'https://i0.wp.com/waytoomany.games/wp-content/uploads/2022/11/God-of-War-Ragnarok_20221111004210.jpg?resize=860,484&ssl=1'
    ],
    videoUrl: 'https://www.youtube.com/embed/hfJ4Km46A-0',
    shorts: [
      'https://www.youtube.com/embed/crQ5pazN840?si=1A7CkPYi10vgc541',
      'https://www.youtube.com/embed/D7Enav00Lp8?si=3Hwvsl4HKV1YWcOX',
      'https://www.youtube.com/embed/Nhug66isXqU?si=u5J8EE1GrzPJv3N1'
    ],
  },
  {
    id: '12',
    title: 'Cyberpunk 2077',
    description: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary.',
    category: 'Open World',
    thumbnail: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36407bf0-7675-4fc7-953d-91ab3af07156/debwpo6-883d3fab-7062-4491-8f2e-54544d459e43.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8zNjQwN2JmMC03Njc1LTRmYzctOTUzZC05MWFiM2FmMDcxNTYvZGVid3BvNi04ODNkM2ZhYi03MDYyLTQ0OTEtOGYyZS01NDU0NGQ0NTllNDMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XKAjdSGGNfkWO8z4X11qVeUUkinK4nKdKPNqPYZWO7c',
    images: [
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36407bf0-7675-4fc7-953d-91ab3af07156/debwpo6-883d3fab-7062-4491-8f2e-54544d459e43.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8zNjQwN2JmMC03Njc1LTRmYzctOTUzZC05MWFiM2FmMDcxNTYvZGVid3BvNi04ODNkM2ZhYi03MDYyLTQ0OTEtOGYyZS01NDU0NGQ0NTllNDMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XKAjdSGGNfkWO8z4X11qVeUUkinK4nKdKPNqPYZWO7c',
      'https://t3.ftcdn.net/jpg/09/73/58/72/360_F_973587215_lhxTUODZnPlbm3MkZG4kPKN0vYOrfFQh.jpg',
      'https://cdn.displate.com/artwork/2024-01-22/6c79a40a4801073d14023f605f2d9b0b_3227d717a9dec1fe67135c66a145fa46.jpg?speedsize=w_681'
    ],
    videoUrl: 'https://www.youtube.com/embed/8X2kIfS6fb8',
    shorts: [
      'https://www.youtube.com/embed/DWUp56Eqw-U?si=D0vuwhtV6rIWCNNp',
      'https://www.youtube.com/embed/AQFfvd9k5Kw?si=reTyJg11daABpJlV',
      'https://www.youtube.com/embed/jqquRqfAWHA?si=dB9kfW2G9T_tK0bZ'
    ],
  },
  {
    id: '50',
    title: 'Resident Evil 4',
    description: 'Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy has been dispatched to rescue the president\'s kidnapped daughter.',
    category: 'Horror',
    thumbnail: 'https://wallpaperaccess.com/full/8929582.jpg',
    images: [
      'https://wallpaperaccess.com/full/8929582.jpg',
      'https://wallpapercave.com/wp/wp11812031.jpg',
      'https://wallpaperaccess.com/full/9423775.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/j5Xv2lM96vM',
    shorts: [...NEW_SHORTS],
  },
  {
    id: '55',
    title: 'Elden Ring',
    description: 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
    category: 'RPG',
    thumbnail: getImg('eldenring-thumb'),
    images: [getImg('eldenring-thumb')],
    videoUrl: 'https://www.youtube.com/embed/E3Huy2cdih0',
    shorts: [...NEW_SHORTS],
  },
  {
    id: '36',
    title: 'Detroit: Become Human',
    description: 'Detroit, 2038. Technology has evolved to a point where human like androids are everywhere. They speak, move and behave like human beings.',
    category: 'Adventure',
    thumbnail: getImg('detroit-thumb'),
    images: [getImg('detroit-hero'), getImg('detroit-thumb')],
    videoUrl: 'https://www.youtube.com/embed/8a-EObAhYrg',
    shorts: [...NEW_SHORTS],
  },
  {
    id: '40',
    title: 'Batman: Arkham Knight',
    description: 'Batman: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion.',
    category: 'Action',
    thumbnail: getImg('batman-thumb'),
    images: [getImg('batman-hero'), getImg('batman-thumb')],
    videoUrl: 'https://www.youtube.com/embed/dxa34RatmSc',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'mk1',
    title: 'Mortal Kombat 1',
    description: 'It\'s In Our Blood. Discover a reborn Mortal Kombat Universe created by the Fire God Liu Kang. Mortal Kombat 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and fatalities!',
    category: 'Action',
    thumbnail: getImg('mk1-thumb'),
    images: [getImg('mk1-thumb')],
    videoUrl: 'https://www.youtube.com/embed/MYGf9X-iM38',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'fc5',
    title: 'Far Cry 5',
    description: 'Welcome to Hope County, Montana, home to a fanatical doomsday cult known as Eden\'s Gate. Stand up to cult leader Joseph Seed and his siblings, the Heralels, to spark the fires of resistance and liberate the besieged community.',
    category: 'Adventure',
    thumbnail: getImg('farcry5-thumb'),
    images: [getImg('farcry5-hero'), getImg('farcry5-thumb')],
    videoUrl: 'https://www.youtube.com/embed/Kdaoe4hbMso',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 're2',
    title: 'Resident Evil 2',
    description: 'A deadly virus engulfs the residents of Raccoon City in September of 1998, plunging the city into chaos as flesh-eating zombies roam the streets for survivors.',
    category: 'Horror',
    thumbnail: getImg('re2-thumb'),
    images: [getImg('re2-hero'), getImg('re2-thumb')],
    videoUrl: 'https://www.youtube.com/embed/u3wS6CHEtas',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'stalker2',
    title: 'STALKER 2',
    description: 'Heart of Chornobyl. Chornobyl Exclusion Zone has changed dramatically after the second second explosion in 2006. Dangerous mutants, deadly anomalies, and warring factions have made the Zone a very tough place to survive.',
    category: 'Shooter',
    thumbnail: getImg('stalker2-thumb'),
    images: [getImg('stalker2-hero'), getImg('stalker2-thumb')],
    videoUrl: 'https://www.youtube.com/embed/q_m_f-p944o',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 're3',
    title: 'Resident Evil 3',
    description: 'Jill Valentine is one of the last remaining people in Raccoon City to witness the atrocities Umbrella performed. To stop her, Umbrella unleashes their ultimate secret weapon: Nemesis!',
    category: 'Horror',
    thumbnail: getImg('re3-thumb'),
    images: [getImg('re3-thumb')],
    videoUrl: 'https://www.youtube.com/embed/Wghn3tO7D74',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'jedi-survivor',
    title: 'Star Wars Jedi: Survivor',
    description: 'The story of Cal Kestis continues in Star Wars Jedi: Survivor, a third-person galaxy-spanning action-adventure game from Respawn Entertainment.',
    category: 'Adventure',
    thumbnail: getImg('jedi-survivor-thumb'),
    images: [getImg('jedi-survivor-thumb')],
    videoUrl: 'https://www.youtube.com/embed/BM9v_K7lS1Y',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'nightmares3',
    title: 'Little Nightmares 3',
    description: 'Embark on a new adventure in the unique world of Little Nightmares. In Little Nightmares III, you follow the journey of Low & Alone, as they search for a path that could lead them out of the Nowhere.',
    category: 'Horror',
    thumbnail: getImg('nightmares3-thumb'),
    images: [getImg('nightmares3-thumb')],
    videoUrl: 'https://www.youtube.com/embed/z8j7Gof-v0I',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'alanwake2',
    title: 'Alan Wake 2',
    description: 'A string of ritualistic murders threatens Bright Falls, an idyllic small-town community in the Pacific Northwest. Saga Anderson, an accomplished FBI agent, arrives to investigate.',
    category: 'Horror',
    thumbnail: getImg('alanwake2-thumb'),
    images: [getImg('alanwake2-thumb')],
    videoUrl: 'https://www.youtube.com/embed/dlQ3Fe69I2w',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'silenthill2',
    title: 'Silent Hill 2',
    description: 'Having received a letter from his deceased wife, James proceeds to where they shared so many memories, in the hope of seeing her one more time: Silent Hill.',
    category: 'Horror',
    thumbnail: getImg('silenthill2-thumb'),
    images: [getImg('silenthill2-thumb')],
    videoUrl: 'https://www.youtube.com/embed/dlQ3Fe69I2w',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'got',
    title: 'Ghost of Tsushima',
    description: 'In the late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East. Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet.',
    category: 'Open World',
    thumbnail: getImg('got-thumb'),
    images: [getImg('got-hero'), getImg('got-thumb')],
    videoUrl: 'https://www.youtube.com/embed/mGvG6_JPrHc',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'u4',
    title: 'Uncharted 4: A Thief\'s End',
    description: 'Several years after his last adventure, retired fortune hunter Nathan Drake is forced back into the world of thieves.',
    category: 'Adventure',
    thumbnail: getImg('u4-thumb'),
    images: [getImg('u4-hero'), getImg('u4-thumb')],
    videoUrl: 'https://www.youtube.com/embed/sB0xy74Zrj8',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'tlou1',
    title: 'The Last of Us Part I',
    description: 'In a ravaged civilization, where infected and hardened survivors run wild, Joel, a weary protagonist, is hired to smuggle 14-year-old Ellie out of a military quarantine zone.',
    category: 'Action',
    thumbnail: 'https://picsum.photos/seed/tlou1-hero/1200/800',
    images: ['https://picsum.photos/seed/tlou1-hero/1200/800'],
    videoUrl: 'https://www.youtube.com/embed/W01L78Cec1M',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'tlou2',
    title: 'The Last of Us Part II',
    description: 'Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming.',
    category: 'Action',
    thumbnail: getImg('tlou2-thumb'),
    images: [getImg('tlou2-hero'), getImg('tlou2-thumb')],
    videoUrl: 'https://www.youtube.com/embed/vhII1qlcZ4E',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'gtav',
    title: 'Grand Theft Auto V',
    description: 'When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld.',
    category: 'Open World',
    thumbnail: getImg('gtav-thumb'),
    images: [getImg('gtav-hero'), getImg('gtav-thumb')],
    videoUrl: 'https://www.youtube.com/embed/QkkoHAzjnUs',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'hzd',
    title: 'Horizon Zero Dawn',
    description: 'In an era where Machines roam the land and mankind is no longer the dominant species, a young hunter named Aloy embarks on a journey to discover her destiny.',
    category: 'Open World',
    thumbnail: getImg('hzd-thumb'),
    images: [getImg('hzd-hero'), getImg('hzd-thumb')],
    videoUrl: 'https://www.youtube.com/embed/u4-GiBaWstc',
    shorts: [...NEW_SHORTS],
  }
];
