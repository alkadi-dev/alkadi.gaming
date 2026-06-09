import { PlaceHolderImages } from '@/lib/placeholder-images';

export interface GameEntry {
  id: string;
  title: string;
  description: string;
  categories: string[];
  thumbnail: string;
  images: string[];
  videoUrl: string;
  size: string;
  releaseYear: string;
  shorts?: string[];
  isRecommended?: boolean;
}

export const CATEGORIES = ['All', 'Recommended', '2 players', 'RPG', 'Race', 'Adventure', 'Open World', 'Action', 'Shooter', 'Horror'];

export const MOCK_GAMES: GameEntry[] = [
  {
    id: 'lego-batman-legacy',
    title: 'LEGO Batman: Legacy of the Dark Knight',
    description: 'The Caped Crusader returns in a massive new LEGO adventure. Explore Gotham City like never before, building and battling through iconic locations. Play as a huge cast of heroes and villains in this definitive LEGO Batman experience.',
    categories: ['Adventure'],
    thumbnail: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215200/a07a9a6c0c9c1225f5b260b4f29fe40e6f099f6b/header.jpg?t=1780591479',
    size: '20 GB',
    releaseYear: '2025',
    images: [
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215200/a07a9a6c0c9c1225f5b260b4f29fe40e6f099f6b/header.jpg?t=1780591479',
      'https://images.alphacoders.com/140/thumb-1920-1400002.png',
      'https://wallpapercave.com/wp/wp16013669.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/DfJaUpW_P00',
    shorts: [
      'https://www.youtube.com/embed/SC8ZnHfHpjM',
      'https://www.youtube.com/embed/rvtVI8IP0M4',
      'https://www.youtube.com/embed/S27ZWt8C-04'
    ],
    isRecommended: true,
  },
  {
    id: '5',
    title: 'Red Dead Redemption 2',
    description: 'Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive.',
    categories: ['Open World'],
    thumbnail: 'https://wallpapercave.com/wp/wp3770429.png',
    size: '69 GB',
    releaseYear: '2018',
    images: [
      'https://wallpapercave.com/wp/wp3770429.png',
      'https://images6.alphacoders.com/952/thumbbig-952687.webp',
      'https://wallpapers.com/images/hd/red-dead-redemption-2-desktop-dd0fimlsbzh0zihw.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/gmA6MrX81z4',
    shorts: [
      'https://www.youtube.com/embed/0d-U2QL2Qvc',
      'https://www.youtube.com/embed/1LcJ2gQD1O8',
      'https://www.youtube.com/embed/ax_HkEnW_ig'
    ],
    isRecommended: true,
  },
  {
    id: '1',
    title: 'The Witcher 3',
    description: 'The Witcher 3: Wild Hunt is an open-world action RPG where you play as Geralt of Rivia, a monster hunter. The game is set in a rich, vast fantasy world, full of deep storytelling, complex characters, and massive choices that impact the world around you.',
    categories: ['RPG'],
    thumbnail: 'https://wallpapercat.com/w/full/f/3/f/5549-3840x2160-desktop-4k-the-witcher-game-wallpaper-photo.jpg',
    size: '32 GB',
    releaseYear: '2015',
    images: [
      'https://wallpapercat.com/w/full/f/3/f/5549-3840x2160-desktop-4k-the-witcher-game-wallpaper-photo.jpg',
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2022/12/geralt-standing-front-of-kaer-morhen.jpg?q=50&fit=crop&w=825&dpr=1.5',
      'https://wallpapercat.com/w/full/b/0/1/14420-3840x2160-desktop-4k-the-witcher-game-wallpaper-photo.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/XHrskkHr958',
    shorts: [
      'https://www.youtube.com/embed/9HxO2Yg2AEQ',
      'https://www.youtube.com/embed/AT5PlpAKo0I',
      'https://www.youtube.com/embed/40omY9j5-y8'
    ],
  },
  {
    id: 'ac-shadows',
    title: "Assassin's Creed Shadows",
    description: 'Experience an epic historical action-adventure story set in feudal Japan. Become a lethal shinobi assassin and a powerful legendary samurai as you explore a beautiful open world in a time of chaos.',
    categories: ['Open World'],
    thumbnail: 'https://wallpapercave.com/wp/wp13980393.jpg',
    size: '70 GB',
    releaseYear: '2025',
    images: [
      'https://wallpapercave.com/wp/wp13980393.jpg',
      'https://preview.redd.it/two-new-screenshots-of-ac-shadows-world-v0-whm6mgnqhsee1.png?width=640&crop=smart&auto=webp&s=f0d47b92ba36516422cfee81603b63221662a440',
      'https://wallpapercave.com/wp/wp13980388.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/vovkzbtYBC8',
    shorts: [
      'https://www.youtube.com/embed/zGsXns95g4I',
      'https://www.youtube.com/embed/R5cq8FnyPFI',
      'https://www.youtube.com/embed/mnIMU7BH57A'
    ],
    isRecommended: true,
  },
  {
    id: '2',
    title: 'Forza Horizon 5',
    description: 'Experience the ultimate driving festival. Explore a vibrant and ever-evolving open world with hundreds of the world\'s greatest cars in stunning 4K.',
    categories: ['Race'],
    thumbnail: 'https://traxion.gg/wp-content/uploads/2021/08/Forza-Horizon-5-game-cover-1000x600.jpg',
    size: '82 GB',
    releaseYear: '2021',
    images: [
      'https://traxion.gg/wp-content/uploads/2021/08/Forza-Horizon-5-game-cover-1000x600.jpg',
      'https://wallpapercave.com/wp/wp12405375.jpg',
      'https://wallpapers.com/images/hd/forza-horizon-5-4k-dac6pfcwb8wy8spw.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/FYH9n37B7Yw',
    shorts: [
      'https://www.youtube.com/embed/3pGgPrbdKaU',
      'https://www.youtube.com/embed/SsZoqBH3aYw',
      'https://www.youtube.com/embed/mwQpOPpGnCE'
    ],
  },
  {
    id: '6',
    title: 'Spider-Man 2',
    description: 'Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel\'s Spider-Man franchise.',
    categories: ['Open World'],
    thumbnail: 'https://4kwallpapers.com/images/walls/thumbs_2t/11609.jpeg',
    size: '67 GB',
    releaseYear: '2023',
    images: [
      'https://4kwallpapers.com/images/walls/thumbs_2t/11609.jpeg',
      'https://i.pinimg.com/originals/05/6d/d3/056dd39fccee614d4e46d77ef8814bf8.jpg',
      'https://wallpapers.com/images/hd/spider-man-2-miles-morales-and-peter-parker-v4198305c754v2b7.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/nq1M_Wc4FIc',
    shorts: [
      'https://www.youtube.com/embed/ayeQ3CTLlMU',
      'https://www.youtube.com/embed/bhhyNlvVfr8',
      'https://www.youtube.com/embed/y6vWl-8_0QI'
    ],
    isRecommended: true,
  },
  {
    id: '10',
    title: 'God of War Ragnarök',
    description: 'Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world.',
    categories: ['Action'],
    thumbnail: 'https://wallpapers.com/images/hd/godof-war-ragnarok-kratos-atreus-winter-landscape-p0z1cxhlrscxekzw.jpg',
    size: '67 GB',
    releaseYear: '2022',
    images: [
      'https://wallpapers.com/images/hd/godof-war-ragnarok-kratos-atreus-winter-landscape-p0z1cxhlrscxekzw.jpg',
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2022/11/God-Of-War-Ragnarok-Jotenheim.jpg?q=50&fit=crop&w=825&dpr=1.5',
      'https://i0.wp.com/waytoomany.games/wp-content/uploads/2022/11/God-of-War-Ragnarok_20221111004210.jpg?resize=860,484&ssl=1'
    ],
    videoUrl: 'https://www.youtube.com/embed/hfJ4Km46A-0',
    shorts: [
      'https://www.youtube.com/embed/crQ5pazN840',
      'https://www.youtube.com/embed/D7Enav00Lp8',
      'https://www.youtube.com/embed/Nhug66isXqU'
    ],
    isRecommended: true,
  },
  {
    id: '12',
    title: 'Cyberpunk 2077',
    description: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary.',
    categories: ['Open World'],
    thumbnail: 'https://4kwallpapers.com/images/walls/thumbs_2t/20154.jpg',
    size: '55 GB',
    releaseYear: '2020',
    images: [
      'https://4kwallpapers.com/images/walls/thumbs_2t/20154.jpg',
      'https://t3.ftcdn.net/jpg/09/73/58/72/360_F_973587215_lhxTUODZnPlbm3MkZG4kPKN0vOrfFQh.jpg',
      'https://cdn.displate.com/artwork/2024-01-22/6c79a40a4801073d14023f605f2d9b0b_3227d717a9dec1fe67135c66a145fa46.jpg?speedsize=w_681'
    ],
    videoUrl: 'https://www.youtube.com/embed/8X2kIfS6fb8',
    shorts: [
      'https://www.youtube.com/embed/DWUp56Eqw5U',
      'https://www.youtube.com/embed/AQFfvd9k5Kw',
      'https://www.youtube.com/embed/jqquRqfAWHA'
    ],
  },
  {
    id: 're4-remake',
    title: 'Resident Evil 4',
    description: 'Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy has been dispatched to rescue the president\'s kidnapped daughter.',
    categories: ['Horror'],
    thumbnail: 'https://wallpaperaccess.com/full/8929582.jpg',
    size: '58 GB',
    releaseYear: '2023',
    images: [
      'https://wallpaperaccess.com/full/8929582.jpg',
      'https://wallpapercave.com/wp/wp11812031.jpg',
      'https://wallpaperaccess.com/full/9423775.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/E69tKrfEQag',
    shorts: [
      'https://www.youtube.com/embed/wlP02yvRLxA',
      'https://www.youtube.com/embed/Y_15ydJ1fw4',
      'https://www.youtube.com/embed/AtzRA2Zz1qc'
    ],
  },
  {
    id: 'gtav',
    title: 'Grand Theft Auto V',
    description: 'When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with the criminal underworld.',
    categories: ['Open World'],
    thumbnail: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/04/grand-theft-auto-5-biggest-changes-in-update-156.jpg?q=50&fit=crop&w=825&dpr=1.5',
    size: '110 GB',
    releaseYear: '2013',
    images: [
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/04/grand-theft-auto-5-biggest-changes-in-update-156.jpg?q=50&fit=crop&w=825&dpr=1.5',
      'https://wallpapercat.com/w/full/1/7/e/130549-1920x1080-desktop-1080p-grand-theft-auto-5-background-photo.jpg',
      'https://wallpaperaccess.com/full/11181407.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/QkkoHAzjnUs',
    shorts: [
      'https://www.youtube.com/embed/oYlsmbxTVM4',
      'https://www.youtube.com/embed/-uiN7H4SYE4',
      'https://www.youtube.com/embed/zLE4Y6CoSnU'
    ],
    isRecommended: true,
  }
];