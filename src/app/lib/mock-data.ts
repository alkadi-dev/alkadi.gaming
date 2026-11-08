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

export const CATEGORIES = ['All', 'Recommended', '2 players', 'RPG', 'Race', 'Adventure', 'Open World', 'Action', 'Shooter', 'Horror', '2D game'];

const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const MOCK_GAMES: GameEntry[] = [
  {
    id: 'lego-batman-legacy',
    title: 'LEGO Batman: Legacy of the Dark Knight',
    description: 'The Caped Crusader returns in a massive new LEGO adventure. Explore Gotham City like never before, building and battling through iconic locations. Play as a huge cast of heroes and villains in this definitive LEGO Batman experience.',
    categories: ['Adventure'],
    thumbnail: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215200/a07a9a6c0c9c1225f5b260b4f29fe40e6f099f6b/header.jpg?t=1780591479',
    size: '30 GB',
    releaseYear: '2026',
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
    size: '70 GB',
    releaseYear: '2018',
    images: [
      'https://wallpapercave.com/wp/wp3770429.png',
      'https://images6.alphacoders.com/952/thumbbig-952687.webp',
      'https://wallpapers.com/images/hd/red-dead-redemption-2-desktop-dd0fimlsbzh0zihw.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/gmA6MrX81z4',
    shorts: [
      'https://www.youtube.com/embed/0d-U2QL2Qvc?si=u_uaO45UmkJ4UHDq',
      'https://www.youtube.com/embed/dJK-d6KXjsI',
      'https://www.youtube.com/embed/ax_HkEnW_ig?si=xXoL5iPzvwJ18AtK'
    ],
    isRecommended: true,
  },
  {
    id: '1',
    title: 'The Witcher 3',
    description: 'The Witcher 3: Wild Hunt is an open-world action RPG where you play as Geralt of Rivia, a monster hunter. The game is set in a rich, vast fantasy world, full of deep storytelling, complex characters, and massive choices that impact the world around you.',
    categories: ['RPG'],
    thumbnail: 'https://wallpapercat.com/w/full/f/3/f/5549-3840x2160-desktop-4k-the-witcher-game-wallpaper-photo.jpg',
    size: '33 GB',
    releaseYear: '2015',
    images: [
      'https://wallpapercat.com/w/full/f/3/f/5549-3840x2160-desktop-4k-the-witcher-game-wallpaper-photo.jpg',
      'https://getwallpapers.com/wallpaper/full/a/7/8/23018.jpg',
      'https://wallpaperaccess.com/full/8799600.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/1-l29HlKkXU',
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
    categories: ['Open World'],
    thumbnail: 'https://wallpapercave.com/wp/wp13980393.jpg',
    size: '76 GB',
    releaseYear: '2025',
    images: [
      'https://wallpapercave.com/wp/wp13980393.jpg',
      'https://preview.redd.it/two-new-screenshots-of-ac-shadows-world-v0-whm6mgnqhsee1.png?width=640&crop=smart&auto=webp&s=f0d47b92ba36516422cfee81603b63221662a440',
      'https://wallpapercave.com/wp/wp13980388.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/vovkzbtYBC8',
    shorts: [
      'https://www.youtube.com/embed/zGsXns95g4I?si=L580j9Mw1LFt06O4',
      'https://www.youtube.com/embed/xMgA-CaBxAs',
      'https://www.youtube.com/embed/ea376amceaU'
    ],
    isRecommended: true,
  },
  {
    id: 'ac-unity',
    title: "Assassin's Creed Unity",
    description: "Assassin's Creed Unity is an action-adventure game set in the city of Paris during one of its darkest hours, the French Revolution. Take ownership of the story by customizing your equipment to make the experience unique to you.",
    categories: ['Open World'],
    thumbnail: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/Assassins-Creed-Unity.jpg?q=50&fit=crop&w=825&dpr=1.5',
    size: '33 GB',
    releaseYear: '2014',
    images: [
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/Assassins-Creed-Unity.jpg?q=50&fit=crop&w=825&dpr=1.5',
      'https://wallpapercave.com/wp/wp1869825.jpg',
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
    categories: ['Action'],
    thumbnail: 'https://wallpapercave.com/wp/wp11468139.jpg',
    size: '20 GB',
    releaseYear: '2023',
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
    categories: ['RPG'],
    thumbnail: 'https://wallpaperaccess.com/full/1110212.jpg',
    size: '36 GB',
    releaseYear: '2018',
    images: [
      'https://wallpaperaccess.com/full/1110212.jpg',
      'https://wallpapers.com/images/hd/4k-assassin-s-creed-odyssey-background-3840-x-2160-vzqb12fb66jcw0tw.jpg',
      'https://wallpapercave.com/wp/wp4452951.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/s_SJZSAtLBA',
    shorts: [
      'https://www.youtube.com/embed/ikDXF26ngf9I?si=fxNsLXuv7MMmH1Fp',
      'https://www.youtube.com/embed/AqJbLJs5dW4?si=HvgdZYmYmJVmVFFa',
      'https://www.youtube.com/embed/QtT_F0TRaj8?si=w164WS64IBBuLki4'
    ],
  },
  {
    id: 'ac-syndicate',
    title: "Assassin's Creed Syndicate",
    description: 'London, 1868. In the heart of the Industrial Revolution, lead your underworld organization and grow your influence to fight those who exploit the less privileged in the name of progress.',
    categories: ['Open World'],
    thumbnail: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/Diesel_productv2_assassins-creed-syndicate_home_ACS-STD-2560x1440-635b7b6c86f18730071426375e7c4fe0bd831ddd.jpg?q=50&fit=crop&w=825&dpr=1.5',
    size: '21 GB',
    releaseYear: '2015',
    images: [
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/Diesel_productv2_assassins-creed-syndicate_home_ACS-STD-2560x1440-635b7b6c86f18730071426375e7c4fe0bd831ddd.jpg?q=50&fit=crop&w=825&dpr=1.5',
      'https://wallpaperaccess.com/full/1994779.jpg',
      'https://wallpaperaccess.com/full/2377333.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/3kGHHMc5dqE',
    shorts: [
      'https://www.youtube.com/embed/ruoguclV31o?si=WCUl0dPvDuitjTbj',
      'https://www.youtube.com/embed/MSE2U30VUi8?si=L_5E5YdoIV3j8yXd',
      'https://www.youtube.com/embed/InzsqRY6MIk'
    ],
  },
  {
    id: '2',
    title: 'Forza Horizon 5',
    description: 'Experience the ultimate driving festival. Explore a vibrant and ever-evolving open world with hundreds of the world\'s greatest cars in stunning 4K. Your ultimate Horizon adventure awaits.',
    categories: ['Race'],
    thumbnail: 'https://traxion.gg/wp-content/uploads/2021/08/Forza-Horizon-5-game-cover.jpg',
    size: '83 GB',
    releaseYear: '2021',
    images: [
      'https://traxion.gg/wp-content/uploads/2021/08/Forza-Horizon-5-game-cover.jpg',
      'https://wallpapercave.com/wp/wp12405375.jpg',
      'https://wallpapers.com/images/hd/forza-horizon-5-4k-dac6pfcwb8wy8spw.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/FYH9n37B7Yw',
    shorts: [
      'https://www.youtube.com/embed/3pGgPrbdKaU?si=pk6rmiOf9AWXUPds',
      'https://www.youtube.com/embed/SsZoqBH3aYw?si=9dEKoN0Zx0sZEB0d',
      'https://www.youtube.com/embed/FtN9_eeZd0M'
    ],
  },
  {
    id: '6',
    title: 'Spider-Man 2',
    description: 'Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvel\'s Spider-Man franchise. Swing, jump, and utilize the new Web Wings to travel across Marvel\'s New York.',
    categories: ['Open World'],
    thumbnail: 'https://4kwallpapers.com/images/walls/thumbs_2t/11609.jpeg',
    size: '68 GB',
    releaseYear: '2023',
    images: [
      'https://4kwallpapers.com/images/walls/thumbs_2t/11609.jpeg',
      'https://i.pinimg.com/originals/05/6d/d3/056dd39fccee614d4e46d77ef8814bf8.jpg',
      'https://wallpapers.com/images/hd/spider-man-2-miles-morales-and-peter-parker-v4198305c754v2b7.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/nq1M_Wc4FIc',
    shorts: [
      'https://www.youtube.com/embed/ayeQ3CTLlMU?si=MGm4_43xG5IFmYm2',
      'https://www.youtube.com/embed/bhhyNlvVfr8?si=cra8Nomzn_6dANHO',
      'https://www.youtube.com/embed/y6vWl-8_0QI?si=NeegL4e8DJ4NKOmr'
    ],
    isRecommended: true,
  },
  {
    id: '10',
    title: 'God of War Ragnarök',
    description: 'Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world.',
    categories: ['Action'],
    thumbnail: 'https://wallpapers.com/images/hd/godof-war-ragnarok-kratos-atreus-winter-landscape-p0z1cxhlrscxekzw.jpg',
    size: '68 GB',
    releaseYear: '2022',
    images: [
      'https://wallpapers.com/images/hd/godof-war-ragnarok-kratos-atreus-winter-landscape-p0z1cxhlrscxekzw.jpg',
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2022/11/God-Of-War-Ragnarok-Jotenheim.jpg?q=50&fit=crop&w=825&dpr=1.5',
      'https://i0.wp.com/waytoomany.games/wp-content/uploads/2022/11/God-of-War-Ragnarok_20221111004210.jpg?resize=860,484&ssl=1'
    ],
    videoUrl: 'https://www.youtube.com/embed/hfJ4Km46A-0',
    shorts: [
      'https://www.youtube.com/embed/crQ5pazN840?si=1A7CkPYi10vgc541',
      'https://www.youtube.com/embed/D7Enav00Lp8?si=3Hwvsl4HKV1YWcOX',
      'https://www.youtube.com/embed/_Y_Y1cFj4rk'
    ],
    isRecommended: true,
  },
  {
    id: '12',
    title: 'Cyberpunk 2077',
    description: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary.',
    categories: ['Open World'],
    thumbnail: 'https://4kwallpapers.com/images/walls/thumbs_2t/20154.jpg',
    size: '56 GB',
    releaseYear: '2020',
    images: [
      'https://4kwallpapers.com/images/walls/thumbs_2t/20154.jpg',
      'https://t3.ftcdn.net/jpg/09/73/58/72/360_F_973587215_lhxTUODZnPlbm3MkZG4kPKN0vOrfFQh.jpg',
      'https://cdn.displate.com/artwork/2024-01-22/6c79a40a4801073d14023f605f2d9b0b_3227d717a9dec1fe67135c66a145fa46.jpg?speedsize=w_681'
    ],
    videoUrl: 'https://www.youtube.com/embed/8X2kIfS6fb8',
    shorts: [
      'https://www.youtube.com/embed/9OzhWHMmRmc',
      'https://www.youtube.com/embed/AQFfvd9k5Kw?si=reTyJg11daABpJlV',
      'https://www.youtube.com/embed/jqquRqfAWHA?si=dB9kfW2G9T_tK0bZ'
    ],
  },
  {
    id: '50',
    title: 'Resident Evil 4',
    description: 'Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy has been dispatched to rescue the president\'s kidnapped daughter.',
    categories: ['Horror'],
    thumbnail: 'https://wallpaperaccess.com/full/8929582.jpg',
    size: '50 GB',
    releaseYear: '2023',
    images: [
      'https://wallpaperaccess.com/full/8929582.jpg',
      'https://wallpapercave.com/wp/wp11812031.jpg',
      'https://wallpaperaccess.com/full/9423775.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/E69tKrfEQag',
    shorts: [
      'https://www.youtube.com/embed/wlP02yvRLxA?si=_Qwu88A98ohpGWWN',
      'https://www.youtube.com/embed/Y_15ydJ1fw4?si=LMfaCPw4TZffrUr5',
      'https://www.youtube.com/embed/AtzRA2Zz1qc?si=uLu1fZLZhMyRx-D7'
    ],
  },
  {
    id: '55',
    title: 'Elden Ring',
    description: 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.',
    categories: ['RPG'],
    thumbnail: 'https://wallpapers.com/images/featured/elden-ring-pictures-6r85th0gnhifsqd0.jpg',
    size: '50 GB',
    releaseYear: '2022',
    images: [
      'https://wallpapers.com/images/featured/elden-ring-pictures-6r85th0gnhifsqd0.jpg',
      'https://wallpapers.com/images/hd/elden-ring-game-scenery-u6f65ngdqukwsshd.jpg',
      'https://wallpapers.com/images/hd/elden-ring-background-c7pyny29pa8k3ptb.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/E3Huy2cdih0',
    shorts: [
      'https://www.youtube.com/embed/K-T-kPvlZt0?si=-u2Q7-wO0pgW4dkB',
      'https://www.youtube.com/embed/c9akEr9y7XA?si=nBmoOJFs5rZ852_Y',
      'https://www.youtube.com/embed/fLmu19go2cs?si=66R3Y2gRei6Ny1h7'
    ],
  },
  {
    id: '36',
    title: 'Detroit: Become Human',
    description: 'Detroit, 2038. Technology has evolved to a point where human like androids are everywhere. They speak, move and behave like human beings.',
    categories: ['Adventure'],
    thumbnail: 'https://mygamingtutorials.com/wp-content/uploads/2025/05/capsule_616x353-4-1.jpg?w=616',
    size: '33 GB',
    releaseYear: '2018',
    images: [
      'https://mygamingtutorials.com/wp-content/uploads/2025/05/capsule_616x353-4-1.jpg?w=616',
      'https://i.pinimg.com/originals/c7/12/ab/c712ab2487a5b047b568afe3bdbe1874.jpg',
      'https://i.pinimg.com/originals/95/67/48/95674854a4a3dfe6a8c205aa4c6ef764.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/8a-EObAhYrg',
    shorts: [
      'https://www.youtube.com/embed/oEyRv0k-b5w?si=PiPNQUKFFiJFKa16',
      'https://www.youtube.com/embed/eWOrGdhxY-Y?si=6LSBnZkGsz35l9GB',
      'https://www.youtube.com/embed/nDRQoEMbL0U?si=rW4KzOSAyIKWyq0m'
    ],
  },
  {
    id: '40',
    title: 'Batman: Arkham Knight',
    description: 'Batman: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion.',
    categories: ['Action'],
    thumbnail: 'https://wallpapercave.com/wp/wp1835411.jpg',
    size: '27 GB',
    releaseYear: '2015',
    images: [
      'https://wallpapercave.com/wp/wp1835411.jpg',
      'https://i.pinimg.com/originals/86/e6/9a/86e69a057b732ddd9c21ce76959a0beb.jpg',
      'https://wallpapercave.com/wp/wp1835407.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/dxa34RatmSc',
    shorts: [
      'https://www.youtube.com/embed/Eu1g5W9z0ps?si=sUzkIvZUk0oRjPaL',
      'https://www.youtube.com/embed/p6FZ63ap0jo?si=NlSFu6RN6SA5cCGr',
      'https://www.youtube.com/embed/ooh5oJ5Exds?si=TlviG3x15lhvFUsf'
    ],
    isRecommended: true,
  },
  {
    id: 'fc5',
    title: 'Far Cry 5',
    description: 'Welcome to Hope County, Montana, home to a fanatical doomsday cult known as Eden\'s Gate. Stand up to cult leader Joseph Seed and his siblings, the Heralels, to spark the fires of resistance and liberate the besieged community.',
    categories: ['Adventure'],
    thumbnail: 'https://wallpapers.com/images/featured/far-cry-5-background-b36npu7jc7uygn0x.jpg',
    size: '37 GB',
    releaseYear: '2018',
    images: [
      'https://wallpapers.com/images/featured/far-cry-5-background-b36npu7jc7uygn0x.jpg',
      'https://i.pinimg.com/originals/e2/f3/be/e2f3beba5b3848e2f831840c2e9a5db1.jpg',
      'https://wallpapercave.com/wp/wp3279291.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/Kdaoe4hbMso',
    shorts: [
      'https://www.youtube.com/embed/STg-lGNo5sk?si=i4D-_yUpb35V0Tca',
      'https://www.youtube.com/embed/3A5ODFmve14?si=AcWRz0tXvksYJqI7',
      'https://www.youtube.com/embed/f-0vWXmHG9c?si=hD4PRaH59HMsY1sv'
    ],
  },
  {
    id: 're2',
    title: 'Resident Evil 2',
    description: 'A deadly virus engulfs the residents of Raccoon City in September of 1998, plunging the city into chaos as flesh-eating zombies roam the streets for survivors.',
    categories: ['Horror'],
    thumbnail: 'https://www.thumbculture.co.uk/wp-content/uploads/2021/01/residentevil2-featured-1024x597.png',
    size: '17 GB',
    releaseYear: '2019',
    images: [
      'https://www.thumbculture.co.uk/wp-content/uploads/2021/01/residentevil2-featured-1024x597.png',
      'https://wallpapercave.com/wp/wp3815695.jpg',
      'https://wallpapercave.com/wp/wp3815709.png'
    ],
    videoUrl: 'https://www.youtube.com/embed/xtxJtQa6VSw',
    shorts: [
      'https://www.youtube.com/embed/PfCEqgu6-PE?si=8H6uaNz9JcQjx-ut',
      'https://www.youtube.com/embed/YtBVJKS0tnc?si=wKBTBFTA-OQWPV0i',
      'https://www.youtube.com/embed/9I66d6Bt86A?si=f_6bAKOYs2NupeVj'
    ],
  },
  {
    id: 'stalker2',
    title: 'STALKER 2',
    description: 'Heart of Chornobyl. Chornobyl Exclusion Zone has changed dramatically after the second second explosion in 2006. Dangerous mutants, deadly anomalies, and warring factions have made the Zone a very tough place to survive.',
    categories: ['Shooter'],
    thumbnail: 'https://external-preview.redd.it/BacipTv5BtO8PH9bcn9iiAdyf8jxR1jRBTKE5bsDFGo.jpg?width=640&crop=smart&auto=webp&s=0fef5ec4e85ad25c7745cf0bdf227e87b56883f2',
    size: '130 GB',
    releaseYear: '2024',
    images: [
      'https://external-preview.redd.it/BacipTv5BtO8PH9bcn9iiAdyf8jxR1jRBTKE5bsDFGo.jpg?width=640&crop=smart&auto=webp&s=0fef5ec4e85ad25c7745cf0bdf227e87b56883f2',
      'https://wallpapercave.com/wp/wp8285372.jpg',
      'https://preview.redd.it/duabwooed0d51.jpg?width=640&crop=smart&auto=webp&s=13cb3ece5f7a2aa5d75c6258c5d7a056c1f9d7d4'
    ],
    videoUrl: 'https://www.youtube.com/embed/xf5leG0NNag',
    shorts: [
      'https://www.youtube.com/embed/Jt_iqVwZgX4?si=ggtfSjDh4Wy-oEpY',
      'https://www.youtube.com/embed/RBiGvd7IDK8?si=63L60mm2xvUyyJ2o',
      'https://www.youtube.com/embed/KL4RQx39CSk?si=ksylJg4AEav7G3Tk'
    ],
  },
  {
    id: 're3',
    title: 'Resident Evil 3',
    description: 'Jill Valentine is one of the last remaining people in Raccoon City to witness the atrocities Umbrella performed. To stop her, Umbrella unleashes their ultimate secret weapon: Nemesis!',
    categories: ['Horror'],
    thumbnail: 'https://cdn.wallpapersafari.com/0/83/VhnwM9.jpg',
    size: '15 GB',
    releaseYear: '2020',
    images: [
      'https://cdn.wallpapersafari.com/0/83/VhnwM9.jpg',
      'https://wallpapercave.com/wp/wp5995960.jpg',
      'https://cdn.wallpapersafari.com/81/40/uenEqr.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/BBky2uCNqtM',
    shorts: [
      'https://www.youtube.com/embed/n7JPFgNqHdo',
      'https://www.youtube.com/embed/mNd9HPf1x5o?si=SXMU-QVzWGaVrC1J',
      'https://www.youtube.com/embed/GfCz9GVOJUE?si=d5Vdd5CfKS63ZX1B'
    ],
  },
  {
    id: 'jedi-survivor',
    title: 'Star Wars Jedi: Survivor',
    description: 'The story of Cal Kestis continues in Star Wars Jedi: Survivor, a third-person galaxy-spanning action-adventure game from Respawn Entertainment.',
    categories: ['Adventure'],
    thumbnail: 'https://wallpapercave.com/wp/wp12005399.jpg',
    size: '117 GB',
    releaseYear: '2023',
    images: [
      'https://wallpapercave.com/wp/wp12005399.jpg',
      'https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt1b9287112543738d/650ec7b5a86f96062da23371/STAR_WARS_Jedi_Survivor%E2%84%A2_20230419143317.jpg/?width=1280&auto=webp&quality=80&disable=upscale',
      'https://wallpapercave.com/wp/wp12245898.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/VRaobDJjiec',
    shorts: [
      'https://www.youtube.com/embed/zd8XsE3rDmw?si=vzmrh69Kr8HQ_Tub',
      'https://www.youtube.com/embed/IsnRUSBu3yo?si=eZrCqvUmYk4wm_72',
      'https://www.youtube.com/embed/n0Xmhuj4fWY?si=4MC3Kro9jNqsKN6f'
    ],
  },
  {
    id: 'nightmares3',
    title: 'Little Nightmares 3',
    description: 'Embark on a new adventure in the unique world of Little Nightmares. In Little Nightmares III, you follow the journey of Low & Alone, as they search for a path that could lead them out of the Nowhere.',
    categories: ['Horror'],
    thumbnail: 'https://i.redd.it/8wnn4vuu4rjb1.jpg',
    size: '10 GB',
    releaseYear: '2024',
    images: [
      'https://i.redd.it/8wnn4vuu4rjb1.jpg',
      'https://wallpapercave.com/wp/wp15851273.jpg',
      'https://wallpapercave.com/wp/wp15851314.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/XFHOsobwFrA',
    shorts: [
      'https://www.youtube.com/embed/yGt6IVz9p_A?si=y-pYEksmgLlPiA0i',
      'https://www.youtube.com/embed/ewNs60GgoDg?si=gaXwz1w7rpWSVmZJ',
      'https://www.youtube.com/embed/wxeVIg-PSDI?si=p4342DGlp3j0k9vX'
    ],
  },
  {
    id: 'alanwake2',
    title: 'Alan Wake 2',
    description: 'A string of ritualistic murders threatens Bright Falls, an idyllic small-town community in the Pacific Northwest. Saga Anderson, an accomplished FBI agent, arrives to investigate.',
    categories: ['Horror'],
    thumbnail: 'https://img.uhdpaper.com/wallpaper/alan-wake-2-267@1@m',
    size: '76 GB',
    releaseYear: '2023',
    images: [
      'https://img.uhdpaper.com/wallpaper/alan-wake-2-267@1@m',
      'https://wallpaperaccess.com/full/10969140.jpg',
      'https://images8.alphacoders.com/137/thumb-1920-1376384.png'
    ],
    videoUrl: 'https://www.youtube.com/embed/dlQ3FeNu5Yw',
    shorts: [
      'https://www.youtube.com/embed/RyXtIn0RV-M?si=TKYDcwcGO8_660ow',
      'https://www.youtube.com/embed/Z_f9JlKHAPE?si=TSbOvNxyHvPBwKDN',
      'https://www.youtube.com/embed/rVLEWq8bgQA?si=023phmDjtj0tJMZD'
    ],
  },
  {
    id: 'silenthill2',
    title: 'Silent Hill 2',
    description: 'Having received a letter from his deceased wife, James proceeds to where they shared so many memories, in the hope of seeing her one more time: Silent Hill.',
    categories: ['Horror'],
    thumbnail: 'https://www.grimdarkmagazine.com/wp-content/uploads/2024/11/Silent-Hill-2-Cover.jpg',
    size: '26 GB',
    releaseYear: '2024',
    images: [
      'https://www.grimdarkmagazine.com/wp-content/uploads/2024/11/Silent-Hill-2-Cover.jpg',
      'https://wallpapercave.com/wp/wp13015730.jpg',
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/10/silent-hill-2-remake-screenshots-3.jpg?q=49&fit=crop&w=450&h=225&dpr=2'
    ],
    videoUrl: 'https://www.youtube.com/embed/pyC_qiW_4ZY?si=3Hfo1HanbLku42iz',
    shorts: [
      'https://www.youtube.com/embed/w33j0RqVJu8?si=j7a7kDrLFE_K1FAf',
      'https://www.youtube.com/embed/ilUET2suOK0?si=jBXok38l8NgyoVsh',

    ],
  },
  {
    id: 'got',
    title: 'Ghost of Tsushima',
    description: 'In the late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East. Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet.',
    categories: ['Open World'],
    thumbnail: 'https://images3.alphacoders.com/138/thumbbig-1387219.webp',
    size: '34 GB',
    releaseYear: '2020',
    images: [
      'https://images3.alphacoders.com/138/thumbbig-1387219.webp',
      'https://i.pinimg.com/originals/d5/29/a4/d529a491cb3269b8e100314a0af2d6a6.jpg',
      'https://wallpapercave.com/wp/wp11003113.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/RcWk08PBe7k',
    shorts: [
      'https://www.youtube.com/embed/nVhXp6FX7Y4?si=N6unwSA8sDuqt-G7',
      'https://www.youtube.com/embed/vpUEm4-sGHw?si=sxi4X-VrtseSchw9',
      'https://www.youtube.com/embed/rIy42KSFQ4c?si=h154yf9aFShEnbGC'
    ],
    isRecommended: true,
  },
  {
    id: 'u4',
    title: 'Uncharted 4: A Thief\'s End',
    description: 'Several years after his last adventure, retired fortune hunter Nathan Drake is forced back into the world of thieves.',
    categories: ['Adventure'],
    thumbnail: 'https://wallpapercave.com/wp/wp2272912.jpg',
    size: '50 GB',
    releaseYear: '2016',
    images: [
      'https://wallpapercave.com/wp/wp2272912.jpg',
      'https://i.pinimg.com/originals/18/60/d1/1860d17c779f1d922d57d96be15246a6.jpg',
      'https://wallpapercat.com/w/full/a/d/1/119162-3840x2160-desktop-4k-uncharted-background-photo.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/sB0xy74Zrj8',
    shorts: [
      'https://www.youtube.com/embed/pUPJdWe-zVU?si=pOarvKzldXcuE8vA',
      'https://www.youtube.com/embed/23l8h9a6Qi8?si=OqLI6NAmJYHD5hGq',
      'https://www.youtube.com/embed/3El-xx1g-2c?si=pd2h5MpASHp-Oxxk'
    ],
    isRecommended: true,
  },
  {
    id: 'tlou1',
    title: 'The Last of Us Part I',
    description: 'In a ravaged civilization, where infected and hardened survivors run wild, Joel, a weary protagonist, is hired to smuggle 14-year-old Ellie out of a military quarantine zone.',
    categories: ['Action'],
    thumbnail: 'https://preview.redd.it/4k-the-last-of-us-part-1-cover-art-wallpaper-v0-3z733s5snn491.png?width=640&crop=smart&auto=webp&s=fcf82bdc024dbd42597db28d31f496ae0aded7fa',
    size: '43 GB',
    releaseYear: '2022',
    images: [
      'https://preview.redd.it/4k-the-last-of-us-part-1-cover-art-wallpaper-v0-3z733s5snn491.png?width=640&crop=smart&auto=webp&s=fcf82bdc024dbd42597db28d31f496ae0aded7fa',
      'https://wallpapercave.com/wp/wp15026001.webp',
      'https://wallpapercave.com/wp/wp14445566.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/WxjeV10H1F0',
    shorts: [
      'https://www.youtube.com/embed/4yozWNTnOfo?si=930_ooVSLhp3fDpU',
      'https://www.youtube.com/embed/gM1C42wzGAM?si=_7WoT5yyP0iBE-U0',
      'https://www.youtube.com/embed/mB-4rrrXw-s?si=XZDnIVwbWUMpPqKK'
    ],
    isRecommended: true,
  },
  {
    id: 'tlou2',
    title: 'The Last of Us Part II',
    description: 'Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming.',
    categories: ['Action'],
    thumbnail: 'https://i.pinimg.com/originals/6d/49/67/6d4967f7c66011f46dc88cad2ef17770.jpg',
    size: '54 GB',
    releaseYear: '2024',
    images: [
      'https://i.pinimg.com/originals/6d/49/67/6d4967f7c66011f46dc88cad2ef17770.jpg',
      'https://images.squarespace-cdn.com/content/v1/5f0f94f64a47900bb21e117e/1620696600821-SWBP5IZ915Z4FD9BU3Q6/Picture1.jpg',
      'https://preview.redd.it/ebmyt82afuc51.png?width=640&crop=smart&auto=webp&s=f8f2b3c2e1f2b3c2e1f2b3c2'
    ],
    videoUrl: 'https://www.youtube.com/embed/vhII1qlcZ4E',
    shorts: [
      'https://www.youtube.com/embed/zIJRUH9KRNw?si=VGeUp4ObAMCaBGYg',
      'https://www.youtube.com/embed/PImmK6WU8SI?si=4O3O94d3jPZy2Jd9',
      'https://www.youtube.com/embed/UGWg6IIko2o?si=VvfvdN2DDu5Vfc65'
    ],
    isRecommended: true,
  },
  {
    id: 'gtav',
    title: 'Grand Theft Auto V',
    description: 'When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld.',
    categories: ['Open World'],
    thumbnail: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/04/grand-theft-auto-5-biggest-changes-in-update-156.jpg?q=50&fit=crop&w=825&dpr=1.5',
    size: '62 GB',
    releaseYear: '2013',
    images: [
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/04/grand-theft-auto-5-biggest-changes-in-update-156.jpg?q=50&fit=crop&w=825&dpr=1.5',
      'https://wallpapercat.com/w/full/1/7/e/130549-1920x1080-desktop-1080p-grand-theft-auto-5-background-photo.jpg',
      'https://wallpaperaccess.com/full/11181407.jpg'    ],
    videoUrl: 'https://www.youtube.com/embed/QkkoHAzjnUs',
    shorts: [
      'https://www.youtube.com/embed/oYlsmbxTVM4?si=bP3Meaz940YkrLBV',
      'https://www.youtube.com/embed/GpeNQnbDMtc',
      'https://www.youtube.com/embed/-uiN7H4SYE4?si=dYkQClA2xXyy4w_P'
    ],
    isRecommended: true,
  },
  {
    id: 'hzd',
    title: 'Horizon Zero Dawn',
    description: 'In an era where Machines roam the land and mankind is no longer the dominant species, a young hunter named Aloy embarks on a journey to discover her destiny.',
    categories: ['Open World'],
    thumbnail: 'https://wallpapers.com/images/hd/horizon-zero-dawn-fanart-cover-sugmfb0fbmof1vns.jpg',
    size: '63 GB',
    releaseYear: '2017',
    images: [
      'https://wallpapers.com/images/hd/horizon-zero-dawn-fanart-cover-sugmfb0fbmof1vns.jpg',
      'https://i.pinimg.com/originals/2c/b9/97/2cb997a4e03c53f49fa6472ceadbbd51.jpg',
      'https://wallpapers.com/images/hd/papel-de-parede-horizon-zero-dawn-kxu12nitxfat9f9j.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/u4-FCsiF5x4',
    shorts: [
      'https://www.youtube.com/embed/VAa_09DzPVI',
      'https://www.youtube.com/embed/Qcf8NzbxX2k',
      'https://www.youtube.com/embed/DgAFQ1leafY'
    ],
    isRecommended: true,
  },
  {
    id: 'fifa23',
    title: 'FIFA 23',
    description: 'Experience the pinnacle of international football with the FIFA World Cup Qatar 2022 and FIFA Women’s World Cup Australia and New Zealand 2023.',
    categories: ['2 players'],
    thumbnail: 'https://prod.assets.earlygamecdn.com/images/FIFA-23-Cover-2.jpeg?transform=Gallery+Webp',
    size: '43 GB',
    releaseYear: '2022',
    images: [
      'https://prod.assets.earlygamecdn.com/images/FIFA-23-Cover-2.jpeg?transform=Gallery+Webp',
      'https://wallpaperaccess.com/full/8406398.jpg',
      'https://wallpaperaccess.com/full/8406387.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/cgDlmvU2sA4',
    shorts: [
      'https://www.youtube.com/embed/cgDlmvU2sA4',
      'https://www.youtube.com/embed/C2VNcQ6tZbs',
      'https://www.youtube.com/embed/2fB09IQ4P-0'
    ],
  },
  {
    id: 'fifa26',
    title: 'FIFA 26',
    description: 'The future of football simulation. Advanced HyperMotion technology and deep career mode improvements bring the beautiful game to life like never before.',
    categories: ['2 players'],
    thumbnail: 'https://wallpapercave.com/wp/wp15596323.jpg',
    size: '52 GB',
    releaseYear: '2025',
    images: [
      'https://wallpapercave.com/wp/wp15596323.jpg',
      'https://wallpaperaccess.com/full/22537363.jpg',
      'https://d1lss44hh2trtw.cloudfront.net/resize?type=webp&url=https://shacknews-www.s3.amazonaws.com/assets/article/2025/10/04/ea-sports-fc_feature.jpg&width=1032&sign=wEovsnYqz4UhLyPzNR94TNIe9giQ3uVrIvUAMW2poww'
    ],
    videoUrl: 'https://www.youtube.com/embed/TSi0iJYSQ24',
    shorts: [
      'https://www.youtube.com/embed/0DhlHlUX3eA',
      'https://www.youtube.com/embed/CFwV3YNSV8',
      'https://www.youtube.com/embed/3kJu2q4nmCM'
    ],
  },
  {
    id: 'se4',
    title: 'Sniper Elite 4',
    description: 'Discover unrivalled sniping freedom in the largest and most advanced World War 2 shooter ever built. Experience tactical third-person combat and epic longshots.',
    categories: ['Shooter'],
    thumbnail: 'https://cdn.wccftech.com/wp-content/uploads/2017/02/Sniper-Elite-4-Logo-740x382.jpg',
    size: '25 GB',
    releaseYear: '2017',
    images: [
      'https://cdn.wccftech.com/wp-content/uploads/2017/02/Sniper-Elite-4-Logo-740x382.jpg',
      'https://wallpaperaccess.com/full/2434001.jpg',
      'https://picsum.photos/seed/sniper4-gallery/120/800'
    ],
    videoUrl: 'https://www.youtube.com/embed/lGBRAEvXZ94?si=4_-Ahqq0QN30Nz1s',
    shorts: [
      'https://www.youtube.com/embed/atYEA0FbDgc?si=rISGmJeM8wodveqh',
      'https://www.youtube.com/embed/1myPuSGZCZw?si=1myPuSGZCZw',
      'https://www.youtube.com/embed/X1tEMQHZao8?si=719f0wzWF721cwXm'
    ],
  },
  {
    id: 'wd2',
    title: 'Watch Dogs 2',
    description: 'Play as Marcus Holloway, a brilliant young hacker living in the birthplace of the tech revolution, the San Francisco Bay Area.',
    categories: ['Open World'],
    thumbnail: 'https://wallpaperset.com/w/full/b/b/e/457681.jpg',
    size: '22 GB',
    releaseYear: '2016',
    images: [
      'https://wallpaperset.com/w/full/b/b/e/457681.jpg',
      'https://wallpapercave.com/wp/wp1841052.jpg',
      'https://wallpapercave.com/wp/wp1841031.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/hh9x4NqW0Dw',
    shorts: [
      'https://www.youtube.com/embed/CiHv5SNpjGs',
      'https://www.youtube.com/embed/QVnjcGu9zTM',
      'https://www.youtube.com/embed/qzn9vhq9RW8'
    ],
  },
  {
    id: 'bf5',
    title: 'Battlefield V',
    description: 'Enter mankind’s greatest conflict with Battlefield V as the series goes back to its roots in a never-before-seen portrayal of World War 2.',
    categories: ['Shooter'],
    thumbnail: 'https://wallpaperaccess.com/full/3495792.jpg',
    size: '33 GB',
    releaseYear: '2018',
    images: [
      'https://wallpaperaccess.com/full/3495792.jpg',
      'https://preview.redd.it/modern-battlefields-should-not-shy-away-on-having-scenes-v0-ihzrwn5l1zde1.jpg?width=640&crop=smart&auto=webp&s=880fa16a80ae03451cf875fb06172f142533c549',
      'https://wallpaperaccess.com/full/898836.png'
    ],
    videoUrl: 'https://www.youtube.com/embed/LCZLabOywYU',
    shorts: [
      'https://www.youtube.com/embed/qp54yz1uUpQ',
      'https://www.youtube.com/embed/vE3jlOf_XEg',
      'https://www.youtube.com/embed/fNakL6vUB20'
    ],
  },
  {
    id: 'bf6',
    title: 'Battlefield 6',
    description: 'Battlefield 6 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise.',
    categories: ['Shooter'],
    thumbnail: 'https://preview.redd.it/unofficial-battlefield-6-cover-art-wallpapers-3840x2160-v0-prnnp2onvgef1.png?width=640&crop=smart&auto=webp&s=eb731ab55f56ea3e8f52781113863fca066a4ab4',
    size: '37 GB',
    releaseYear: '2025',
    images: [
      'https://preview.redd.it/unofficial-battlefield-6-cover-art-wallpapers-3840x2160-v0-prnnp2onvgef1.png?width=640&crop=smart&auto=webp&s=eb731ab55f56ea3e8f52781113863fca066a4ab4',
      'https://static0.polygonimages.com/wordpress/wp-content/uploads/2025/10/bf6.jpg?q=49&fit=crop&w=360&h=240&dpr=2',
      'https://images.hdqwalls.com/wallpapers/bthumb/the-battlefield-6-sr.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/pgNCgJG0vnY',
    shorts: [
      'https://www.youtube.com/embed/ZZYuIgDB32o',
      'https://www.youtube.com/embed/Ri52mAxuISI',
      'https://www.youtube.com/embed/15uqUoTnlq4'
    ],
  },
  {
    id: 'cod-mw-1',
    title: 'Call of Duty: Modern Warfare 1',
    description: 'The stakes have never been higher as players take on the role of lethal Tier One operators in a heart-racing saga that will affect the global balance of power.',
    categories: ['Shooter'],
    thumbnail: 'https://wallpapercave.com/wp/wp4517150.jpg',
    size: '72 GB',
    releaseYear: '2019',
    images: [
      'https://wallpapercave.com/wp/wp4517150.jpg',
      'https://wallpapers.com/images/hd/4k-call-of-duty-modern-warfare-background-3840-x-2160-zdjbr6dl7k5czeot.jpg',
      'https://images4.alphacoders.com/101/thumbbig-1018646.webp'
    ],
    videoUrl: 'https://www.youtube.com/embed/bH1lHCirCGI',
    shorts: [
      'https://www.youtube.com/embed/KurHR-5VmIw?si=bB3SJvHpnO1vgE7a',
      'https://www.youtube.com/embed/cUCbtpMkZQM?si=b4E38CeFQzjvlqQL',
      'https://www.youtube.com/embed/WzlKc5HmXbU?si=KxJ3XeffOL0EMr9I'
    ],
    isRecommended: true,
  },
  {
    id: 'cod-mw2',
    title: 'Call of Duty: Modern Warfare 2',
    description: 'Call of Duty: Modern Warfare II drops players into an unprecedented global conflict that features the return of the iconic operators of Task Force 141.',
    categories: ['Shooter'],
    thumbnail: 'https://wallpapercave.com/wp/wp11704100.jpg',
    size: '24 GB',
    releaseYear: '2022',
    images: [
      'https://wallpapercave.com/wp/wp11704100.jpg',
      'https://wallpapercave.com/wp/wp11743749.jpg',
      'https://wallpapercave.com/wp/wp11704136.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/ztjfwecrY8E?si=OYPDMavvE_Lz-Ttw',
    shorts: [
      'https://www.youtube.com/embed/ILUywkhzNg0?si=5XJWGly6XMRjZBtF',
      'https://www.youtube.com/embed/vSyvcfxgNC0?si=B4L2VLUMk95oiZDo',
      'https://www.youtube.com/embed/FJHC5NttChE?si=y0jr1Kkky_3KKlcu'
    ],
    isRecommended: true,
  },
  {
    id: 'cod-mw3',
    title: 'Call of Duty: Modern Warfare 3',
    description: 'In the direct sequel to the record-breaking Call of Duty: Modern Warfare II, Captain Price and Task Force 141 face off against the ultimate threat.',
    categories: ['Shooter'],
    thumbnail: 'https://wallpapercave.com/wp/wp13127005.jpg',
    size: '40 GB',
    releaseYear: '2023',
    images: [
      'https://wallpapercave.com/wp/wp13127005.jpg',
      'https://wallpapercave.com/wp/wp3993550.jpg',
      'https://wallpapercave.com/wp/wp13132336.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/i3IsLrPeZG8?si=HMyCHgQmznLQvxcR',
    shorts: [
      'https://www.youtube.com/embed/u-O4uRNBBuc?si=k9A8HZoHbVbUNuTr',
      'https://www.youtube.com/embed/GD4DphX5Sbo?si=dnf_pnh6B0mn9IOh',
      'https://www.youtube.com/embed/brbTGmcdWTk?si=n-YDcFY-FmwbkzUJ'
    ],
  },
  {
    id: 'cod-mw4',
    title: 'Call of Duty: Modern Warfare 4',
    description: 'The mission continues. Experience the next generation of modern combat with Captain Price and Task Force 141. Pushing the boundaries of realistic shooter gameplay.',
    categories: ['Shooter'],
    thumbnail: 'https://wallpapercave.com/wp/wp16401874.webp',
    size: '58 GB',
    releaseYear: '2026',
    images: [
      'https://wallpapercave.com/wp/wp16401874.webp',
      'https://resizer.ladbiblegroup.com/unsafe/rs:fit:3840:0:0:0/g:sm/q:70/aHR0cHM6Ly9ldS1pbWFnZXMuY29udGVudHN0YWNrLmNvbS92My9hc3NldHMvYmx0YmMxODc2MTUyZmNkOWYwNy9ibHRkNTE0MWMxNjgyM2YzYzc4LzZhY2NiMTM3N2MzNTBkNDc2YTgxMWZlZS9jYWxsLW9mLWR1dHktbW9kZXJuLXdhcmZhcmUtNC1ndWlkZS1zY3JlZW5zaG90LTEuanBn.webp',
      'https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/mw4/rfl-maps-modes/MW4-RFLMAPSMODES-023.webp'
    ],
    videoUrl: 'https://www.youtube.com/embed/yLFRQaQT0qM',
    shorts: [
      'https://www.youtube.com/embed/MPYzWqsp7eA',
      'https://www.youtube.com/embed/4ZcVNaz4Pw8',
      'https://www.youtube.com/embed/lgma1jLucGM'
    ],
    isRecommended: true,
  },
  {
    id: 'cod-v',
    title: 'Call of Duty: Vanguard',
    description: 'Rise on every front: Dogfight over the Pacific, airdrop over France, defend Stalingrad with a sniper’s precision and blast through enemies in North Africa.',
    categories: ['Shooter'],
    thumbnail: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/vanguard/overview/VanguardPDP_Hero.png?imwidth=1920',
    size: '43 GB',
    releaseYear: '2021',
    images: [
      'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/vanguard/overview/VanguardPDP_Hero.png?imwidth=1920',
      'https://wallpapercave.com/wp/wp9729352.jpg',
      'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/legacy/vanguard/vanguard-campaign-3.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/OQ1CwPhE8KQ',
    shorts: [
      'https://www.youtube.com/embed/OgNLHBqcm_Q?si=vUR_RZwN0FKYPhiM',
      'https://www.youtube.com/embed/cC3yw3h3ErY?si=q18Hc1jn2SbRvZPW',
      'https://www.youtube.com/embed/erQun_LaSC4?si=UslKf-WRk6wmxrWD'
    ],
  },
  {
    id: 'cod-ww2',
    title: 'Call of Duty: WWII',
    description: 'Call of Duty: WWII creates the definitive World War II next-generation experience across three different game modes: Campaign, Multiplayer, and Co-Operative.',
    categories: ['Shooter'],
    thumbnail: 'https://wallpapercave.com/wp/wp2259852.png',
    size: '69 GB',
    releaseYear: '2017',
    images: [
      'https://wallpapercave.com/wp/wp2259852.png',
      'https://wallpapercave.com/wp/wp2203840.png',
      'https://wallpapercave.com/wp/wp2259859.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/D4Q_XYVescc?si=fu2UAMAHfVTECBcY',
    shorts: [
      'https://www.youtube.com/embed/PXeUiqhQtY8?si=vo1_HsltbNZUu1mg',
      'https://www.youtube.com/embed/57Hs_eUDt8g?si=PwyDdoaUhK8eJmN-',
      'https://www.youtube.com/embed/LtIw3GlH-xk?si=WCs_MQDEHSoKHkzK'
    ],
  },
  {
    id: 'crimson',
    title: 'Crimson Desert',
    description: 'An open-world action-adventure game depicting a realistic world of mercenaries on the continent of Pywel.',
    categories: ['Open World'],
    thumbnail: 'https://wallpaperaccess.com/full/26027678.jpg',
    size: '67 GB',
    releaseYear: '2026',
    images: [
      'https://wallpaperaccess.com/full/26027678.jpg',
      'https://wallpaperaccess.com/full/26027727.jpg',
      'https://wallpaperaccess.com/full/26027691.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/YHhwdyWkwTQ?si=vVvSCMKfPQrx94da',
    shorts: [
      'https://www.youtube.com/embed/914vI_3FON4?si=UhEkGF06ya9kC92M',
      'https://www.youtube.com/embed/Vb6oDZ6uGg8?si=zSAkYHUcAV65GMku',
      'https://www.youtube.com/embed/j-mCAqn0Rl0?si=OQ7JrtCOHcpp8dO'
    ],
    isRecommended: true,
  },
  {
    id: 'spiderman-1',
    title: "Marvel's Spider-Man",
    description: "Starring one of the world's most iconic super heroes, Marvel's Spider-Man features the acrobatic abilities, improvisation and web-slinging that the wall-crawler is famous for.",
    categories: ['Open World'],
    thumbnail: 'https://i.pinimg.com/originals/db/76/43/db7643fd1a4174f7c64d19f6f7e0cec5.jpg',
    size: '39 GB',
    releaseYear: '2018',
    images: [
      'https://i.pinimg.com/originals/db/76/43/db7643fd1a4174f7c64d19f6f7e0cec5.jpg',
      'https://wallpapercave.com/wp/wp11084730.jpg',
      'https://wallpapercave.com/wp/wp4585692.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/q4GdJVvdxss?si=xL7CjWH7fdAJY5zc',
    shorts: [
      'https://www.youtube.com/embed/fAnIUbnOekA?si=NNKuLiQJ-zuU2SvG',
      'https://www.youtube.com/embed/JrSIqSKGXes?si=JrSIqSKGXes',
      'https://www.youtube.com/embed/40uN7Bg_RVc?si=zhXxigjHLzbq3nVw'
    ],
  },
  {
    id: 'miles-morales',
    title: "Spider-Man: Miles Morales",
    description: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    categories: ['Open World'],
    thumbnail: 'https://i.pinimg.com/originals/fd/44/27/fd44275f93f7fad47b801f77cb315901.jpg',
    size: '29 GB',
    releaseYear: '2020',
    images: [
      'https://i.pinimg.com/originals/fd/44/27/fd44275f93f7fad47b801f77cb315901.jpg',
      'https://nerdybirdgames.com/wp-content/uploads/2020/11/miles_morales_spider_man_hero_3840.0.jpg?w=1024',
      'https://m.media-amazon.com/images/M/MV5BMTU4NjYwNzAxN15BMl5BanBnXkFtZTgwMDkyODI4NjM@.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/3wHL2VIaFcs?si=9w26fcN_y_1GD1Yj',
    shorts: [
      'https://www.youtube.com/embed/QHiC4lHrJLg?si=cBfGcwGUb-5jjrxV',
      'https://www.youtube.com/embed/SwNC7OhkfgI?si=rKPg0GpSI2h_z66U',
      'https://www.youtube.com/embed/dPcCZWPk5sg?si=r1r4cHYgUsrO4ouM'
    ],
  },
  {
    id: 'hitman-woa',
    title: 'Hitman World of Assassination',
    description: 'Enter the world of the ultimate assassin. HITMAN World of Assassination brings together the best of HITMAN, HITMAN 2 and HITMAN 3.',
    categories: ['Action'],
    thumbnail: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659040/c62446d5c95f583a296d7f1b99045a61e2f81dea/header.jpg?t=1779710870',
    size: '60 GB',
    releaseYear: '2023',
    images: [
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659040/c62446d5c95f583a296d7f1b99045a61e2f81dea/header.jpg?t=1779710870',
      'https://wallpapercat.com/w/full/c/0/5/1658-1920x1080-desktop-1080p-hitman-game-wallpaper-photo.jpg',
      'https://wallpapers.com/images/hd/agent-47-atop-a-skyscraper-hitman-3-ivgh5xgmdm2xrv8f.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/WB2BSbaRmgY?si=4ul8utH91Rlj1EQx',
    shorts: [
      'https://www.youtube.com/embed/fVcl_ZPF_qc',
      'https://www.youtube.com/embed/eb6YmU7FwG8',
      'https://www.youtube.com/embed/hq9jAZ4jC64?si=TvlVXRPPdlulEcME'
    ],
  },
  {
    id: 'gow-2018',
    title: 'God of War',
    description: 'His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.',
    categories: ['Action'],
    thumbnail: 'https://wallpapers.com/images/hd/god-of-war-kratos-and-atreus-at-river-nahx1u4rudbu55hy.jpg',
    size: '24 GB',
    releaseYear: '2018',
    images: [
      'https://wallpapers.com/images/hd/god-of-war-kratos-and-atreus-at-river-nahx1u4rudbu55hy.jpg',
      'https://images.alphacoders.com/129/thumbbig-1295494.webp',
      'https://wallpapercave.com/wp/wp3282821.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/K0u_kAWLJOA?si=OwjtTI9L3B_s5nsJ',
    shorts: [
      'https://www.youtube.com/embed/sc9OZR3sS30?si=5uwPypU7xeDo2yvk',
      'https://www.youtube.com/embed/YPWqU9Pmte8?si=R2sRn-2l42gMvW5z',
      'https://www.youtube.com/embed/jOSGQVJ0iFw?si=IQQe3pgan8AGaeqP'
    ]
    ,isRecommended: true,
  },
  
  {
    id: 'fc4',
    title: 'Far Cry 4',
    description: 'Hidden in the towering Himalayas lies Kyrat, a country steeped in tradition and violence. You are Ajay Ghale. Traveling to Kyrat to fulfill your mother’s dying wish, you find yourself caught up in a civil war to overthrow the oppressive regime of dictator Pagan Min.',
    categories: ['Adventure'],
    thumbnail: 'https://i.pinimg.com/originals/d9/e0/58/d9e0588b98766b0289061221b6550552.jpg',
    size: '12 GB',
    releaseYear: '2014',
    images: [
      'https://i.pinimg.com/originals/d9/e0/58/d9e0588b98766b0289061221b6550552.jpg',
      'https://wallpapercave.com/wp/wp1837519.jpg',
      'https://wallpapers.com/images/featured/far-cry-4-background-u5ljpycnwwbjv4yn.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/7JFOLJv4s6Y?si=XOimZ7qm3sTkB4t_',
    shorts: [
      'https://www.youtube.com/embed/1GsMq3zZzQ4?si=YQkUNp-YGWAkaxrH',
      'https://www.youtube.com/embed/_MDXlbQ2bW0?si=cxN8h0_l1yDCT4Km',
      'https://www.youtube.com/embed/th3fMJfm9Ak?si=9wqu5RHfdcNoZemh'
    ]
  },
  {
    id: 'gotham-k',
    title: 'Gotham Knights',
    description: 'Batman is dead. A new expansive, criminal underworld has swept the streets of Gotham City. It is now up to the Batman Family - Batgirl, Nightwing, Red Hood, and Robin - to protect Gotham, bring hope to its citizens, discipline to its cops, and fear to its criminals.',
    categories: ['Action'],
    thumbnail: 'https://images8.alphacoders.com/139/thumbbig-1395453.webp',
    size: '31 GB',
    releaseYear: '2022',
    images: [
      'https://images8.alphacoders.com/139/thumbbig-1395453.webp',
      'https://assetsio.gnwcdn.com/Gotham_Knights_Street_Art_7.jpg?width=2048&height=2048&fit=bounds&quality=85&format=jpg&auto=webp',
      'https://wallpapercat.com/w/full/f/6/0/1273477-1920x1080-desktop-full-hd-gotham-knights-game-wallpaper-image.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/wIXJAqs9dG4?si=Sgw8xlJQRlONuhNu',
    shorts: [
      'https://www.youtube.com/embed/v8JDJ7rzYrA?si=5l82y9bfpefZ_9l-',
      'https://www.youtube.com/embed/HPdTV5HgLDI?si=3ngjSLBh4saKlWvz',
      'https://www.youtube.com/embed/nH16zrzoyCI?si=7fjPAGzdgpn0cdlD'
    ]
  },
  {
    id: 'ready-not',
    title: 'Ready or Not',
    description: 'Ready or Not is an intense, tactical, first-person shooter that depicts a modern-day world in which SWAT police units are called to defuse hostile and confronting situations.',
    categories: ['Shooter'],
    thumbnail: 'https://wallpapercave.com/wp/wp4571906.png',
    size: '20 GB',
    releaseYear: '2023',
    images: [
      'https://wallpapercave.com/wp/wp4571906.png',
      'https://wallpapercave.com/wp/wp4571903.jpg',
      'https://m.media-amazon.com/images/M/MV5BNjI0YmQ4YTEtZjc5Yy00ODRlLWE4MDQtZWNmZmIzM2U3YmI3XkEyXkFqcGc@.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/hdJI3_8zG7A?si=S1NP1QRzN-f2v3VA',
    shorts: [
      'https://www.youtube.com/embed/2XMOl6PKPn0?si=swWhe9NCa9C5Ra0l',
      'https://www.youtube.com/embed/UI-pPusKCNo?si=WfYDT65m1CU_OxxG',
      'https://www.youtube.com/embed/jYOfPoXMdQI?si=UpNkLvLQI6nokuHh'
    ]
  },
  {
    id: 'echoes',
    title: 'Echoes of the End',
    description: 'Echoes of the End is a third-person action-adventure game that combines intense melee combat with the thrill of exploration in a semi-open world ravaged by a mysterious civil war.',
    categories: ['Adventure'],
    thumbnail: 'https://cdn.wccftech.com/wp-content/uploads/2025/08/Echoes-of-the-End-Review-1-min-1920x1081.jpg',
    size: '33 GB',
    releaseYear: '2025',
    images: [
      'https://cdn.wccftech.com/wp-content/uploads/2025/08/Echoes-of-the-End-Review-1-min-1920x1081.jpg',
      'https://cdn.wccftech.com/wp-content/uploads/2025/08/Echoes-of-the-End-Review-5.png',
      'https://cdn.mos.cms.futurecdn.net/fRgMvd54EpECnMQwbanzqh.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/HfJ9ub9PdfA?si=1dnpi2nUfddrRSsR',
    shorts: [
      'https://www.youtube.com/embed/HPxTKTbtDkg?si=EeL4kT7Ap6yaoBvE',
      'https://www.youtube.com/embed/RBpNHK0uk9k?si=9OC9TLJq2JkLvL9F',
    
    ]
  },
  {
    id: 'cronos',
    title: 'Cronos: The New Dawn',
    description: 'A third-person survival horror game from Bloober Team. Explore a world where time travel and twisted creatures await in a story of survival and uncovering the secrets of a dying civilization.',
    categories: ['Action'],
    thumbnail: 'https://wallpapercave.com/wp/wp15668537.jpg',
    size: '18 GB',
    releaseYear: '2025',
    images: [
      'https://wallpapercave.com/wp/wp15668537.jpg',
      'https://i0.wp.com/twistedvoxel.com/wp-content/uploads/2025/09/cronos-the-new-dawn-4-scaled.jpg?resize=1170,658&ssl=1',
      'https://images.bauerhosting.com/empire/2025/09/cronosthenewdawn.jpg?auto=format&w=1440&q=80'
    ],
    videoUrl: 'https://www.youtube.com/embed/5SAdHxpzb5U?si=vYNzRlU8vQOCRrU_',
    shorts: [
      'https://www.youtube.com/embed/UmgnABPqaoU?si=R7xmSpd9lyBVO4um',
      'https://www.youtube.com/embed/2xeeTNiQXZo?si=7kcT7YNgg8HxioP7',
      'https://www.youtube.com/embed/LJQ4fSKSjQU?si=Flvi0JfLpbvZGnDI'
    ]
  },
  {
    id: 'dl2',
    title: 'Dying Light 2',
    description: 'The virus won and civilization has fallen back into the Dark Ages. The City, one of the last human settlements, is on the brink of collapse. Use your agility and combat skills to survive and reshape the world.',
    categories: ['Action'],
    thumbnail: 'https://wallpapers.com/images/hd/dying-light-2-cover-jkekl8ltwon8uhq9.jpg',
    size: '33 GB',
    releaseYear: '2022',
    images: [
      'https://wallpapers.com/images/hd/dying-light-2-cover-jkekl8ltwon8uhq9.jpg',
      'https://wallpapers.com/images/hd/dying-light-2-hanging-aiden-sxo2g6at09s4qr2m.jpg',
      'https://wallpaperaccess.com/full/2759141.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/uL6OeuicjyU?si=T5kkmfI9ahcM4-EU',
    shorts: [
      'https://www.youtube.com/embed/17ZQjpMxMOV0?si=B5-rRqx3Xi1QxbD5',
      'https://www.youtube.com/embed/3HHfcja4mXU?si=9WE3NXCx5w9CAitD',
      'https://www.youtube.com/embed/4YjZZl0SKMo?si=ibo7ggptsS15I6wt'
    ]
  },
  {
    id: 'di2',
    title: 'Dead Island 2',
    description: 'A deadly virus is spreading across Los Angeles, turning its inhabitants into ravenous zombies. The city is in quarantine and the military has retreated. Bitten, infected, but more than just immune, you learn to harness the zombie within.',
    categories: ['Action'],
    thumbnail: 'https://cdn.wallpapersafari.com/99/84/OCQJol.jpg',
    size: '50 GB',
    releaseYear: '2023',
    images: [
      'https://cdn.wallpapersafari.com/99/84/OCQJol.jpg',
      'https://wallpapers.com/images/hd/dead-island2-first-person-combat-rv2aer2l260gmwc5.jpg',
      'https://wallpapers.com/images/hd/dead-island2-zombie-horde-beside-school-bus-8twgvbuv4p05m9bo.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/AWFaj4IQ4ro?si=4EOxgjkpmNFWEMxt',
    shorts: [
      'https://www.youtube.com/embed/o_0cXvtUyKM?si=BiPI__ep-fs6rtQx',
      'https://www.youtube.com/embed/zxzBMbStY-M?si=stzdFfhPJflfrqKv',
      'https://www.youtube.com/embed/pJoir07MlBY?si=Lfuo0JmM3CpICTDk'
    ]
  },
  {
    id: 'daysgone',
    title: 'Days Gone',
    description: 'Ride and fight into a deadly, post-pandemic America. Play as Deacon St. John, a drifter and bounty hunter who rides the broken road, fighting to survive while searching for a reason to live.',
    categories: ['Open World'],
    thumbnail: 'https://wallpapers.com/images/hd/days-gone-zombie-strike-poster-808vz2axmhw4zege.jpg',
    size: '23 GB',
    releaseYear: '2019',
    images: [
      'https://wallpapers.com/images/hd/days-gone-zombie-strike-poster-808vz2axmhw4zege.jpg',
      'https://kotaku.com/igdb/image/upload/t_720p/r5mn9rt7aqvf5nrn8dqq.jpg',
      'https://wallpapercave.com/wp/wp2392978.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/p9XlSvnRk3E',
    shorts: [
      'https://www.youtube.com/embed/99NfMJFaG1Y',
      'https://www.youtube.com/embed/nwI-e9N5xNs',
      'https://www.youtube.com/embed/V1iewhGUd-Y'
    ]
  },
  {
    id: 'revillage',
    title: 'Resident Evil Village',
    description: 'Experience survival horror like never before in the eighth major installment in the storied Resident Evil franchise - Resident Evil Village.',
    categories: ['Horror'],
    thumbnail: 'https://gameinformer.com/sites/default/files/styles/thumbnail/public/2021/04/13/cd58b898/rev.jpg.webp',
    size: '22 GB',
    releaseYear: '2021',
    images: [
      'https://gameinformer.com/sites/default/files/styles/thumbnail/public/2021/04/13/cd58b898/rev.jpg.webp',
      'https://wallpapercat.com/w/full/4/b/2/2941-1920x1080-desktop-1080p-resident-evil-village-wallpaper.jpg',
      'https://wallpapers.com/images/hd/resident-evil-village-3840-x-2160-wallpaper-zn0xrqmkj1la6h54.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/arEdruKxrQ8',
    shorts: [
      'https://www.youtube.com/embed/zLE4Y6CoSnU',
      'https://www.youtube.com/embed/0y8dTBI_ULQ',
      'https://www.youtube.com/embed/b-ScWGl0lEM'
    ]
  },
  {
    id: 'rebio',
    title: 'Resident Evil Biohazard',
    description: 'Set in modern day rural America and taking place after the dramatic events of Resident Evil 6, players experience the terror directly from the first person perspective.',
    categories: ['Horror'],
    thumbnail: 'https://wallpapercave.com/wp/wp2073985.jpg',
    size: '24 GB',
    releaseYear: '2017',
    images: [
      'https://wallpapercave.com/wp/wp2074012.jpg',
      'https://wallpapercave.com/wp/wp2074034.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/RgYqQsbKn6w',
    shorts: [
      'https://www.youtube.com/embed/P1xhDMdOYVQ',
      'https://www.youtube.com/embed/imQ5vKmQQTs',
      'https://www.youtube.com/embed/k1njT46lOi8'
    ]
  },
  {
    id: 'plague',
    title: 'Resident Evil Requiem',
    description: 'Embark on a heartrending journey into a brutal, breathtaking world, and discover the cost of saving those you love in a desperate struggle for survival.',
    categories: ['Horror'],
    thumbnail: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f05a9b5b-ead5-460e-8573-73ba2fff9cde/djxpgft-a53b41e0-9850-484d-9b01-1f19e4621bc6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9mMDVhOWI1Yi1lYWQ1LTQ2MGUtODU3My03M2JhMmZmZjljZGUvZGp4cGdmdC1hNTNiNDFlMC05ODUwLTQ4NGQtOWIwMS0xZjE5ZTQ2MjFiYzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VMBTlqB1IKBkCo8rL1VBzc-d83VgjfRTf5Q3UVM6-OI',
    size: '56 GB',
    releaseYear: '2026',
    images: [
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f05a9b5b-ead5-460e-8573-73ba2fff9cde/djxpgft-a53b41e0-9850-484d-9b01-1f19e4621bc6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9mMDVhOWI1Yi1lYWQ1LTQ2MGUtODU3My03M2JhMmZmZjljZGUvZGp4cGdmdC1hNTNiNDFlMC05ODUwLTQ4NGQtOWIwMS0xZjE5ZTQ2MjFiYzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VMBTlqB1IKBkCo8rL1VBzc-d83VgjfRTf5Q3UVM6-OI',
      'https://cdn.mos.cms.futurecdn.net/7Zb4CNrHJcf3P6PcovYDy8.jpg',
      'https://cdn.mos.cms.futurecdn.net/N9ci7TJ3rSu3sJxiz9tf2D.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/POz1-EmLsTY',
    shorts: [
      'https://www.youtube.com/embed/k8aXqeQs9bE',
      'https://www.youtube.com/embed/status/JsAW9PqQje4',
      'https://www.youtube.com/embed/Lr25tudS-ec'
    ],
    isRecommended: true,
  },
  {
    id: 'ferocious',
    title: 'Ferocious',
    description: 'A first-person shooter that combines tactical combat with the primal fear of prehistoric predators.',
    categories: ['Shooter'],
    thumbnail: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1645630/f3d600c47b912e4856c5a72cf94923361e96bf30/header.jpg?t=1781529362',
    size: '16 GB',
    releaseYear: '2025',
    images: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1645630/f3d600c47b912e4856c5a72cf94923361e96bf30/header.jpg?t=1781529362',
      'https://gamingbolt.com/wp-content/uploads/2025/11/ferocious-02-1024x576.jpg',
      'https://images.steamusercontent.com/ugc/9304301476222437091/DD1EB59BD93FCFB0CCBC028619021FA987A08C8A/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=#000000&letterbox=false'
    ],
    videoUrl: 'https://www.youtube.com/embed/Wie5dg74coI?si=ojHdgKKzP4_zlMS6',
    shorts: [
      'https://www.youtube.com/embed/vp9KNgG0e14?si=K1GYqDf2e4PDMdzE',
      'https://www.youtube.com/embed/UPMOdKvqH3o?si=0BHbotN_vnYtPe34',
      'https://www.youtube.com/embed/1go8AUUYTq0?si=rYD_kCR00YEh-MMC'
    ]
  },
  {
    id: 'elden-shadow',
    title: 'Elden Ring: Shadow of the Erdtree',
    description: 'The Shadow of the Erdtree expansion features an all-new story set in the Land of Shadow, imbued with mystery, perilous dungeons, and new enemies, weapons and equipment.',
    categories: ['RPG'],
    thumbnail: 'https://wallpapercave.com/wp/wp15107995.webp',
    size: '21 GB',
    releaseYear: '2024',
    images: [
      'https://wallpapercave.com/wp/wp15107995.webp',
      'https://wallpapercave.com/wp/wp15108020.webp',
      'https://static0.srcdn.com/wordpress/wp-content/uploads/sharedimages/2024/12/elden-ring-nightreign-press-image-1.jpg?q=49&fit=crop&w=480&h=270&dpr=2'
    ],
    videoUrl: 'https://www.youtube.com/embed/Djtsw5k_DNc',
    shorts: [
      'https://www.youtube.com/embed/RSfEUhuACd8',
      'https://www.youtube.com/embed/UXKbRmqfvJM',
      'https://www.youtube.com/embed/H_G9Ng_snjM'
    ]
  },
  {
    id: 'ninja-gaiden-4',
    title: 'Ninja Gaiden 4',
    description: 'The legendary ninja returns in a high-octane action experience. Master the art of the blade in this long-awaited sequel.',
    categories: ['Action'],
    thumbnail: 'https://wallpapercave.com/wp/wp15032759.webp',
    size: '43 GB',
    releaseYear: '2025',
    images: [
      'https://wallpapercave.com/wp/wp15032759.webp',
      'https://gameinformer.com/sites/default/files/styles/content_header_l/public/2025/08/25/d2f361cd/371-reveal-hero.jpg.webp',
      'https://cdn.mos.cms.futurecdn.net/fRgMvd54EpECnMQwbanzqh.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/mopzOQ8N8E4',
    shorts: [
      'https://www.youtube.com/embed/Gz28Levws5A',
      'https://www.youtube.com/embed/qgi1naTDSfs',
      'https://www.youtube.com/embed/RRnGCyOMF7s'
    ]
  },
  {
    id: 'exp33',
    title: 'Clair Obscur: Expedition 33',
    description: 'In this reactive turn-based RPG, take part in a desperate quest to destroy the Paintress so she can never paint death again.',
    categories: ['RPG'],
    thumbnail: 'https://wallpapercave.com/wp/wp15037173.webp',
    size: '32 GB',
    releaseYear: '2025',
    images: [
      'https://wallpapercave.com/wp/wp15037173.webp',
      'https://www.cnet.com/a/img/resize/8211721e6d525ddab1e8fe795f3979a6bcb2df2d/hub/2025/04/23/8db58633-12fa-4609-a2d5-02e05d462fc7/clair-obscur-expedition-33-20250412073013.jpg?auto=webp&width=1200',
      'https://wallpapercave.com/wp/wp15335917.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/2VaLOc1FpSo',
    shorts: [
      'https://www.youtube.com/embed/9g6wftT6Ikk',
      'https://www.youtube.com/embed/-jdI5ZVdB_w',
      'https://www.youtube.com/embed/BTGV8SEbKDs'
    ]
  },
  {
    id: 'avatar-pandora',
    title: 'Avatar: Frontiers of Pandora',
    description: 'Avatar: Frontiers of Pandora is a first-person action-adventure game set in the open world of the Western Frontier of Pandora.',
    categories: ['Open World'],
    thumbnail: 'https://wallpapercave.com/wp/wp9594441.png',
    size: '77 GB',
    releaseYear: '2023',
    images: [
      'https://wallpapercave.com/wp/wp9594441.png',
      'https://wallpapercave.com/wp/wp9594463.jpg',
      'https://preview.redd.it/photo-mode-thread-for-frontiers-of-pandora-v0-r1dnz6yrlb5c1.jpg?width=640&crop=smart&auto=webp&s=f637b3ecc55655499d9dd1cd0379d3b2d268ae93'
    ],
    videoUrl: 'https://www.youtube.com/embed/Axmg1E4HrVE',
    shorts: [
      'https://www.youtube.com/embed/fyNpPKtvYOg',
      'https://www.youtube.com/embed/kLzXTaLr7KU',
      'https://www.youtube.com/embed/zfuV-nXS1jo'
    ]
  },
  {
    id: 'reanimal',
    title: 'REANIMAL',
    description: 'The creators of Little Nightmares and IT TAKES TWO return with a new, dark adventure about a group of children trying to escape a twisted world.',
    categories: ['Horror'],
    thumbnail: 'https://reanimal.thqnordic.com/_next/image?url=/game-sites/reanimal/editions/standard-edition.png&w=3840&q=75',
    size: '9 GB',
    releaseYear: '2026',
    images: [
      'https://reanimal.thqnordic.com/_next/image?url=/game-sites/reanimal/editions/standard-edition.png&w=3840&q=75',
      'https://cdn.mos.cms.futurecdn.net/yadref6MVJrFQC5p4zYNFC.jpg',
      'https://images5.alphacoders.com/140/thumb-1920-1405859.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/mUymvhAXOnM?si=qoUBAlHgKoD6Ig0X',
    shorts: [
      'https://www.youtube.com/embed/viaO-0WTrMo?si=w6dRw_5APpoYUmbn',
      'https://www.youtube.com/embed/IisfQZqd82k?si=5rDsOA_ZZveVmutZ',
      'https://www.youtube.com/embed/ou9THu2g3I4?si=ugCFaClFoWLTZAyv'
    ]
  },
  {
    id: 'mgs5',
    title: 'Metal Gear Solid 5',
    description: 'The Phantom Pain. A new era for the Metal Gear franchise with cutting-edge technology and a massive open world.',
    categories: ['Action'],
    thumbnail: 'https://wallpapers.com/images/hd/metal-gear-solid-5-t9wtrqr1jz4tv5gw.jpg',
    size: '54 GB',
    releaseYear: '2015',
    images: [
      'https://wallpapers.com/images/hd/metal-gear-solid-5-t9wtrqr1jz4tv5gw.jpg',
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2020/07/Beyond-Ultra-MGS-V-e1618172330544.jpeg?q=50&fit=crop&w=825&dpr=1.5',
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/287700/ss_fbfa8f676661d34b1da0495e15df5a08c7e1f04a.1920x1080.jpg?t=1727849445'
    ],
    videoUrl: 'https://www.youtube.com/embed/C19ap2M7DDE',
    shorts: [
      'https://www.youtube.com/embed/ms5ENyRH3Bs',
      'https://www.youtube.com/embed/ZAW0hs2ZDFg',
      'https://www.youtube.com/embed/uCaPqbjvESs'
    ]
  },
  {
    id: 'hellblade2',
    title: 'Senua\'s Saga: Hellblade 2',
    description: 'The sequel to the award-winning Hellblade: Senua\'s Sacrifice. Senua returns in a brutal journey of survival through the myth and tyranny of Viking Iceland.',
    categories: ['Horror'],
    thumbnail: 'https://wallpapercave.com/wp/wp13923945.jpg',
    size: '29 GB',
    releaseYear: '2024',
    images: [
      'https://wallpapercave.com/wp/wp13923945.jpg',
      'https://cdn.mos.cms.futurecdn.net/VmnpgP94cg/originals/qJWI4bkD9ZM.jpg',
      'https://m.media-amazon.com/images/M/MV5BZWYwNjVlOGEtZmI4Mi00ZGI5LWFlZjAtYzkyOGRlMzQyODMzXkEyXkFqcGc@.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/qJWI4bkD9ZM',
    shorts: [
      'https://www.youtube.com/embed/Mxd53_lcrLc',
      'https://www.youtube.com/embed/tJB8-R6LGHI',
      'https://www.youtube.com/embed/E4HGKFOg-ow'
    ]
    ,isRecommended: true,
  },
  {
    id: 'ds2',
    title: 'Death Stranding 2',
    description: 'Hideo Kojima returns with the sequel to Death Stranding. Embark on a new mission to connect the world beyond the UCA.',
    categories: ['Open World'],
    thumbnail: 'https://wallpaperaccess.com/full/26350707.jpg',
    size: '70 GB',
    releaseYear: '2025',
    images: [
      'https://wallpaperaccess.com/full/26350707.jpg',
      'https://www.kojimaproductions.jp/sites/default/files/2025-03/ds2_sxsw2025_screenshots004.jpg',
      'https://www.kojimaproductions.jp/sites/default/files/2025-03/ds2_sxsw2025_screenshots009.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/F79oEkMXElU?si=2yD0jSNF_RbYK7aB',
    shorts: [
      'https://www.youtube.com/embed/ipQJxQmpJ3c?si=vxqxN18UfwTP3XAy',
      'https://www.youtube.com/embed/-S-WLzzeKsE?si=efisEQbJhcKYuPXz',
      'https://www.youtube.com/embed/0izfj7ME6kI?si=U2NlDzNfWhxjfCkg'
    ]
  },
  {
    id: 'jc4',
    title: 'Just Cause 4',
    description: 'Rogue agent Rico Rodriguez journeys to Solis, a huge South American world home of conflict, tyranny and extreme weather conditions.',
    categories: ['Adventure'],
    thumbnail: 'https://i.pinimg.com/originals/01/29/db/0129db8b6597b7b2f4a12cc4808b0e45.jpg',
    size: '22 GB',
    releaseYear: '2018',
    images: [
      'https://i.pinimg.com/originals/01/29/db/0129db8b6597b7b2f4a12cc4808b0e45.jpg',
      'https://wallpapers.com/images/hd/3440x1440p-just-cause-4-background-3440-x-1440-175qarmqymgwwv87.jpg',
      'https://wallpapers.com/images/hd/3440x1440p-just-cause-4-background-3440-x-1440-gtcblqohn6cuf53o.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/Lfek7Kcq16g?si=QOstP2uRrkpPituu',
    shorts: [
      'https://www.youtube.com/embed/m04VNzvx81E?si=ySaBiv-rOcPLATxL',
      'https://www.youtube.com/embed/wtkF615eT_4?si=S4vanph4Blorc2PY',
      'https://www.youtube.com/embed/9S9_yijfFf0?si=Bj_mTzzh9XEMiHYd'
    ]
  },
  {
    id: 'mafia-old',
    title: 'Mafia: The Old Country',
    description: 'Uncover the origins of organized crime in Mafia: The Old Country, a gritty mob story set in the brutal underworld of 1900s Sicily.',
    categories: ['Open World'],
    thumbnail: 'https://wallpapercave.com/wp/wp15335747.webp',
    size: '33 GB',
    releaseYear: '2025',
    images: [
      'https://wallpapercave.com/wp/wp15335747.webp',
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2025/05/ss_44047e62744c4a7201a0238994d23f3ca72649cb.jpg?q=49&fit=crop&w=825&dpr=2',
      'https://i0.wp.com/selphie1999gaming.com/wp-content/uploads/2025/08/Mafia-The-Old-Country-Photographs-Cover.png?fit=1105,560&ssl=1'
    ],
    videoUrl: 'https://www.youtube.com/embed/AMtLTi0koGE?si=xAFs78l31DO5ckZd',
    shorts: [
      'https://www.youtube.com/embed/j1s43xL1yZE?si=c5SQyxkRy0OW4G99',
      'https://www.youtube.com/embed/yagGfBmDEFM?si=sw8IHrNlaiijpw5a'
    ]
  },
  {
    id: 'mafia3',
    title: 'Mafia 3: Definitive Edition',
    description: 'Part three of the Mafia crime saga – 1968, New Bordeaux, LA. Lincoln Clay knows this: family isn’t who you’re born with, it’s who you die for.',
    categories: ['Open World'],
    thumbnail: 'https://wallpapercave.com/wp/wp2867624.jpg',
    size: '20 GB',
    releaseYear: '2016',
    images: [
      'https://wallpapercave.com/wp/wp2867624.jpg',
      'https://wallpaperaccess.com/full/4137127.jpg',
      'https://wallpaperaccess.com/full/4137122.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/L_XuVJ-I6EU?si=MNddvsauq2o_39QF',
    shorts: [
      'https://www.youtube.com/embed/yfkcGNooF1Y?si=dlB0yvy0z8zwqDvw',
      'https://www.youtube.com/embed/t-iqQIIQjys?si=hKJ5Il6B_nwkAKK1',
      'https://www.youtube.com/embed/q008MWSzvt8?si=gwim_-ShquyF7sZc'
    ]
  },
  {
    id: 'maxpayne3',
    title: 'Max Payne 3',
    description: 'Max Payne 3 is a seamless, highly detailed, cinematic experience from Rockstar Games.',
    categories: ['Action'],
    thumbnail: 'https://wallpaperaccess.com/full/2615697.jpg',
    size: '15 GB',
    releaseYear: '2012',
    images: [
      'https://wallpaperaccess.com/full/2615697.jpg',
      'https://www.gamemaps.com/img/game_images/max_payne_3__524_2.jpg?1706667633',
      'https://wallpapercave.com/wp/wp2127256.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/JTPRPr15sW0?si=epU2-bWFCQumFzBb',
    shorts: [
      'https://www.youtube.com/embed/orY5gdLaSAQ?si=LNjnWBhLXs4xOucc',
      'https://www.youtube.com/embed/3NMyUTWR3oo?si=u5-s2h38omYwwdBx',
      'https://www.youtube.com/embed/XH8DK43TR0w?si=IK130r3VrsOlroXp'
    ]
  },
  {
    id: 'nfs-unbound',
    title: 'Need for Speed Unbound',
    description: 'The world is your canvas in Need for Speed Unbound. Prove you have what it takes to win The Grand, Lakeshore’s ultimate street racing challenge.',
    categories: ['Race'],
    thumbnail: 'https://i0.wp.com/www.qualbert.com/wp-content/uploads/2023/01/need-for-speed-unbound.jpg?resize=1170,720&ssl=1',
    size: '21 GB',
    releaseYear: '2022',
    images: [
      'https://i0.wp.com/www.qualbert.com/wp-content/uploads/2023/01/need-for-speed-unbound.jpg?resize=1170,720&ssl=1',
      'https://gameinformer.com/sites/default/files/styles/no_compression/public/2022/12/12/50550f56/nfs2.jpg.webp',
      'https://images8.alphacoders.com/130/thumbbig-1307240.webp'
    ],
    videoUrl: 'https://www.youtube.com/embed/H2Y8XCe7F9E',
    shorts: [
      'https://www.youtube.com/embed/7hcSVFYfcOA',
      'https://www.youtube.com/embed/nu0dG_kC8ao',
      'https://www.youtube.com/embed/_3dgFAGaEc8'
    ]
  },
  {
    id: 'nfs-heat',
    title: 'Need for Speed Heat',
    description: 'Hustle by day and risk it all by night in Need for Speed Heat, a white-knuckle street racer, where the lines of the law fade as the sun starts to set.',
    categories: ['Race'],
    thumbnail: 'https://image.api.playstation.com/vulcan/ap/rnd/202210/3121/XemhVDBuAEVrQXUkJF57ZsdX.jpg',
    size: '20 GB',
    releaseYear: '2019',
    images: [
      'https://image.api.playstation.com/vulcan/ap/rnd/202210/3121/XemhVDBuAEVrQXUkJF57ZsdX.jpg',
      'https://images.steamusercontent.com/ugc/1829046027407668981/B2D706B7B10677C29DD57F3ACB36AA7AAE8521BC/',
      'https://images.steamusercontent.com/ugc/1829046027407669366/32E5B7945183BCDE51815B643D211072E6203527/'
    ],
    videoUrl: 'https://www.youtube.com/embed/9ewiJJe_nYI',
    shorts: [
      'https://www.youtube.com/embed/8jiTNodDe-Y',
      'https://www.youtube.com/embed/XuZaw6kVBkE',
      'https://www.youtube.com/embed/xhvQrJ3QNnM'
    ]
  },
  {
    id: 'thecrew2',
    title: 'The Crew 2',
    description: 'Take on the American motorsports scene as you explore and dominate the land, air, and sea of the USA in one of the most exhilarating open worlds ever created.',
    categories: ['Race'],
    thumbnail: 'https://wallpaperaccess.com/full/2286453.jpg',
    size: '21 GB',
    releaseYear: '2018',
    images: [
      'https://wallpaperaccess.com/full/2286453.jpg',
      'https://wallpaperaccess.com/full/2286467.jpg',
      'https://wallpaperaccess.com/full/2286468.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/MXN1nmL-DQU',
    shorts: [
      'https://www.youtube.com/embed/q9g8QHWJDt0',
      'https://www.youtube.com/embed/-t6JhCq9_Ok',
      'https://www.youtube.com/embed/PpByB8-geYA'
    ]
  },
  {
    id: 'forza6',
    title: 'Forza Horizon 6',
    description: 'The next evolution of the ultimate open-world driving festival. Speed across breathtaking landscapes in hundreds of the world\'s greatest cars.',
    categories: ['Race'],
    thumbnail: 'https://wolfsgamingblog.com/wp-content/uploads/2026/05/forza-horizon-6-key-art.jpg?w=1024',
    size: '94 GB',
    releaseYear: '2026',
    images: [
      'https://wolfsgamingblog.com/wp-content/uploads/2026/05/forza-horizon-6-key-art.jpg?w=1024',
      'https://images.purexbox.com/e311b45450f8a/xbox-showcases-five-unique-biomes-with-breathtaking-landscapes-in-forza-horizon-6.900x.jpg',
      'https://cdn.mos.cms.futurecdn.net/5D5DKFRi3iqCDQnmR6ExiT.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/oYhaW-Vr4wg',
    shorts: [
      'https://www.youtube.com/embed/PWlQLZYMYvs',
      'https://www.youtube.com/embed/Ddv_9D1ohbo',
      'https://www.youtube.com/embed/JDcx4qw62RM'
    ],
    isRecommended: true,
  },
  {
    id: 'wukong',
    title: 'Black Myth: Wukong',
    description: 'Black Myth: Wukong is an action RPG rooted in Chinese mythology. The story is based on Journey to the West, one of the Four Great Classical Novels of Chinese literature.',
    categories: ['RPG'],
    thumbnail: 'https://4kwallpapers.com/images/walls/thumbs/17948.jpeg',
    size: '96 GB',
    releaseYear: '2024',
    images: [
      'https://4kwallpapers.com/images/walls/thumbs/17948.jpeg',
      'https://preview.redd.it/photos-from-a-landscape-photographer-v0-u38zg9b5ajkd1.jpg?width=640&crop=smart&auto=webp&s=5d2f1726b0296910cdac360f70866c1d38750490',
      'https://static0.srcdn.com/wordpress/wp-content/uploads/2024/08/scene-black-wind-mountain-black-wind-cave-bodhi-peak-black-myth-wukong.jpg?q=70&fit=crop&w=825&dpr=1'
    ],
    videoUrl: 'https://www.youtube.com/embed/pnSsgRJmsCc',
    shorts: [
      'https://www.youtube.com/embed/t05rY-_ES4Y',
      'https://www.youtube.com/embed/-zm3jM9cgFE',
      'https://www.youtube.com/embed/VWgRywdvGY0'
    ]
  },
  {
    id: 'stray',
    title: 'Stray',
    description: 'Lost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten cybercity and find their way home.',
    categories: ['Adventure'],
    thumbnail: 'https://wallpapers.com/images/featured/stray-taob394fcubgvuwk.jpg',
    size: '5 GB',
    releaseYear: '2022',
    images: [
      'https://wallpapers.com/images/featured/stray-taob394fcubgvuwk.jpg',
      'https://wallpaperaccess.com/full/8407617.jpg',
      'https://i.pinimg.com/originals/34/80/14/34801477320c4283e5723969a10f346b.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/u84hRUQlaio',
    shorts: [
      'https://www.youtube.com/embed/r9hvgj-LOQs',
      'https://www.youtube.com/embed/xIONkU7qQt4',
      'https://www.youtube.com/embed/K8ZyUXZODGs'
    ]
  },
  {
    id: 'hfw',
    title: 'Horizon Forbidden West',
    description: 'Join Aloy as she braves the Forbidden West – a majestic but dangerous frontier that conceals mysterious new threats.',
    categories: ['Open World'],
    thumbnail: 'https://wallpapercat.com/w/full/f/4/5/12034-1920x1080-desktop-full-hd-horizon-forbidden-west-background-image.jpg',
    size: '81 GB',
    releaseYear: '2022',
    images: [
      'https://wallpapercat.com/w/full/f/4/5/12034-1920x1080-desktop-full-hd-horizon-forbidden-west-background-image.jpg',
      'https://www.gameinformer.com/sites/default/files/2021/12/22/381f64d4/hfw_daunt_vista.jpg',
      'https://wallpapercat.com/w/full/b/1/6/100982-2000x1500-desktop-hd-horizon-forbidden-west-wallpaper-photo.jpg'
    ],      
    videoUrl: 'https://www.youtube.com/embed/Lq594XmpPBg',
    shorts: [
      'https://www.youtube.com/embed/igl_5sssWjQ',
      'https://www.youtube.com/embed/8_8yzlwUAnE',
      'https://www.youtube.com/embed/i4YTiAZL0FM'
    ],
    isRecommended: true,
  },
  {
    id: 'pragmata',
    title: 'Pragmata',
    description: 'Set in a dystopian near-future on Earth’s Moon, Pragmata will take you on an unforgettable adventure, powered by the next generation of gaming hardware.',
    categories: ['Action'],
    thumbnail: 'https://wallpaperaccess.com/full/26417427.jpg',
    size: '22 GB',
    releaseYear: '2026',
    images: [
      'https://wallpaperaccess.com/full/26417427.jpg',
      'https://static0.polygonimages.com/wordpress/wp-content/uploads/2025/06/PRAGMATA_SS_11.jpeg?q=49&fit=crop&w=480&h=270&dpr=2',
      'https://cdn.mos.cms.futurecdn.net/7WUhFQLYGEaWmZb6MHY3pR.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/oncaa_fMsyw',
    shorts: [
      'https://www.youtube.com/embed/kDlwJKA0gjI',
      'https://www.youtube.com/embed/tX4DkAmmm2U',
      'https://www.youtube.com/embed/pCSQgug8nUU'
    ],
    isRecommended: true,
  },
  {
    id: 'splitfiction',
    title: 'Split Fiction',
    description: 'THIS GAME REQUIRES 2 PLAYERS (CANNOT BE PLAYED ALONE). A mind-bending action-adventure where reality splits and stories collide. Master the art of navigating fragmented worlds.',
    categories: ['2 players'],
    thumbnail: 'https://aiptcomics.com/wp-content/uploads/2025/03/SplitFiction_KeyArt_RGB_1920x1080.jpg',
    size: '54 GB',
    releaseYear: '2025',
    images: [
      'https://aiptcomics.com/wp-content/uploads/2025/03/SplitFiction_KeyArt_RGB_1920x1080.jpg',
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/03/split-fiction-how-long-to-beat-sandfish-side-story-desert.jpg?q=49&fit=crop&w=825&dpr=2',
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2025/03/ss_15a4fc0f9c14f8a0389a35e15a358617fcfcc32d.jpg?q=49&fit=crop&w=825&dpr=2'
    ],
    videoUrl: 'https://www.youtube.com/embed/fcwngWPXQtg',
    shorts: [
      'https://www.youtube.com/embed/10F-cgiuU4k',
      'https://www.youtube.com/embed/9xneruomkVU',
      'https://www.youtube.com/embed/Ku6MstLYA3E'
    ],
    isRecommended: false,
  },
  {
    id: 'ittakestwo',
    title: 'It Takes Two',
    description: 'THIS GAME REQUIRES 2 PLAYERS (CANNOT BE PLAYED ALONE). Embark on the craziest journey of your life in It Takes Two, a genre-bending platform adventure created purely for co-op.',
    categories: ['2 players'],
    thumbnail: 'https://images4.alphacoders.com/114/thumbbig-1148443.webp',
    size: '28 GB',
    releaseYear: '2021',
    images: [
      'https://images4.alphacoders.com/114/thumbbig-1148443.webp',
      'https://wallpapercat.com/w/full/6/b/0/83914-1920x1080-desktop-1080p-it-takes-two-background-image.jpg',
      'https://wallpapercave.com/wp/wp14614921.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/ohClxMmNLQQ',
    shorts: [
      'https://www.youtube.com/embed/TzsXzbb1wDc',
      'https://www.youtube.com/embed/M4LgSvHF3rY',
      'https://www.youtube.com/embed/YhasfdmlNGQ'
    ],
    isRecommended: false,
  },
  {
    id: '007firstlight',
    title: '007 First Light',
    description: 'Featuring a completely original Bond story, players will step into the shoes of the world\'s favorite secret agent to earn their 00 status in the very first James Bond origin story.',
    categories: ['Shooter'],
    thumbnail: 'https://images.steamusercontent.com/ugc/18436219776708369386/A5EF63D963D549429C3156545E269E987B28BCA8/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=#000000&letterbox=false',
    size: '36 GB',
    releaseYear: '2026',
    images: [
      'https://images.steamusercontent.com/ugc/18436219776708369386/A5EF63D963D549429C3156545E269E987B28BCA8/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=#000000&letterbox=false',
      'https://xboxwire.thesourcemediaassets.com/sites/2/2025/09/007FirstLight_Screenshots_04-e93a25ab1fe51886e9c6-1900x1080.jpg',
      'https://xboxwire.thesourcemediaassets.com/sites/2/2025/09/007FirstLight_Screenshots_02-a8a7c447efbf97ccdb4c-1900x1080.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/J4qY9DYE184',
    shorts: [
      'https://www.youtube.com/embed/tZ2x3YzQrx0',
      'https://www.youtube.com/embed/0qgy1yPQ_j8',
      'https://www.youtube.com/embed/1xubd--HCN8'
    ],
    isRecommended: false,
  },
  {
    id: 'hellisus',
    title: 'Hell is Us',
    description: 'A third-person action-adventure game that combines intense melee combat with the thrill of exploration in a semi-open world ravaged by a mysterious civil war.',
    categories: ['Action'],
    thumbnail: 'https://media.nacongaming.com/media/catalog/product/h/e/hellisus_image_landscape.webp?width=1000&store=nacon_us&image-type=landscape_image',
    size: '18 GB',
    releaseYear: '2025',
    images: [
      'https://media.nacongaming.com/media/catalog/product/h/e/hellisus_image_landscape.webp?width=1000&store=nacon_us&image-type=landscape_image',
      'https://wallpapercave.com/wp/wp13290378.jpg',
      'https://gamingbolt.com/wp-content/uploads/2024/09/hell-is-us-1024x576.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/it9wGffvYGM',
    shorts: [
      'https://www.youtube.com/embed/ac2QN9fRFlg',
      'https://www.youtube.com/embed/sAeq4pUpp98'
    ],
    isRecommended: false,
  },
  {
    id: 'tomb-raider-2013',
    title: 'Tomb Raider',
    description: 'Explore the intense and gritty origin story of Lara Croft and her ascent from a young woman to a hardened survivor. Armed only with raw instincts and the ability to push beyond the limits of human endurance, Lara must fight to unravel the dark history of a forgotten island to escape its relentless hold.',
    categories: [ 'Adventure'],
    thumbnail:   'https://wallpapercave.com/wp/wp4078513.jpg',
    size: '11 GB',
    releaseYear: '2013',
    images: [
      'https://wallpapercave.com/wp/wp4078513.jpg',
      'https://wallpapers.com/images/hd/2560-x-1440-tomb-raider-dark-forest-gfljtsx5xucmiiyf.jpg',
      'https://wallpapers.com/images/hd/lara-croft-arrow-shot-tomb-raider-a85ffx20r7o0k547.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/zF9m91y8Na0',
    shorts: [
      'https://www.youtube.com/embed/2-E5wNpNE68',
      'https://www.youtube.com/embed/58q2nGe0EyY'
    ]
  },
  {
    id: 'rise-tomb-raider',
    title: 'Rise of the Tomb Raider',
    description: 'Lara Croft becomes more than a survivor as she embarks on her first Tomb Raiding expedition to the most treacherous and remote regions of Siberia. In this high-octane action-adventure, Lara must use her wits and survival skills, form new alliances, and ultimately embrace her destiny as the Tomb Raider.',
    categories: [ 'Adventure'],
    thumbnail: 'https://wallpapers.com/images/hd/1080p-rise-of-the-tomb-raider-background-kmbjzwv5xqzx6pus.jpg',
    size: '14 GB',
    releaseYear: '2015',
    images: [
      'https://wallpapers.com/images/hd/1080p-rise-of-the-tomb-raider-background-kmbjzwv5xqzx6pus.jpg',
      'https://wallpapers.com/images/hd/rise-of-the-tomb-raider-arctic-landscape-j0mpal8hrt7ah59i.jpg',
      'https://preview.redd.it/some-rise-of-the-tomb-raider-screenshots-that-i-took-v0-4zyhtc4l527b1.png?width=640&crop=smart&auto=webp&s=2e6709605aabef5c2e48625ff129392718762565'
    ],
    videoUrl: 'https://www.youtube.com/embed/1_FIyNcQSgA',
    shorts: [
      'https://www.youtube.com/embed/JK1xVB2jqvM',
      'https://www.youtube.com/embed/VfLzk9KRmNE',
      'https://www.youtube.com/embed/DGe3LrFH4G4'
    ],
    isRecommended: false
  },
  {
    id: 'ghost-recon-wildlands',
    title: 'Tom Clancy’s Ghost Recon: Wildlands',
    description: 'Create a team with up to 3 friends in Tom Clancy’s Ghost Recon® Wildlands and enjoy the ultimate military shooter experience set in a massive, dangerous, and responsive open world.',
    categories: ['Shooter'],
    thumbnail: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/460930/36ca0e082902bb8b6f4f0f3ae20de41b1a3c54c6/header.jpg?t=1784154331',
    size: '32 GB',
    releaseYear: '2017',
    images: [
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/460930/36ca0e082902bb8b6f4f0f3ae20de41b1a3c54c6/header.jpg?t=1784154331',
      'https://wallpaperaccess.com/full/1925560.jpg',
      'https://wallpapers.com/images/hd/best-ghost-recon-wildlands-background-1920-x-1080-0h9fv60dbxctq8oz.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/WdJub3Kz2wI',
    shorts: [
      'https://www.youtube.com/embed/wOSnXi8OLEs',
      'https://www.youtube.com/embed/ybXKZqWwjDg',
      'https://www.youtube.com/embed/Sykx_cmTYXQ'
    ],
    isRecommended: false,
  },
  {
    id: 'screamer',
    title: 'Screamer',
    description: 'A high-octane racing experience where speed is everything. Master the curves and dominate the track in this intense racing title.',
    categories: ['2 players'],
    thumbnail: 'https://traxion.gg/wp-content/uploads/2025/07/Screamer-key-art-1024x576.jpg',
    size: '21 GB',
    releaseYear: '2026',
    images: [
      'https://traxion.gg/wp-content/uploads/2025/07/Screamer-key-art-1024x576.jpg',
      'https://comicbook.com/wp-content/uploads/sites/4/2026/02/Screamer-2026-3.jpg?w=1024',
      'https://cdn.mos.cms.futurecdn.net/mhacnC6pNpoaBLjrtXydZ4.png'
    ],
    videoUrl: 'https://www.youtube.com/embed/HIZRiFlWhhE',
    shorts: [
      'https://www.youtube.com/embed/aB8IJrP5Mtk',
      'https://www.youtube.com/embed/dYZb6qJy2Vc',
      'https://www.youtube.com/embed/thJPXP5zS_c'
    ],
    isRecommended: false,
  },
  {
    id: 'wwe-2018',
    title: 'WWE 2018',
    description: 'The biggest video game franchise in WWE history is back with WWE 2K18! Promises to bring you closer to the ring than ever before with hard-hitting action and stunning graphics.',
    categories: ['2 players'],
    thumbnail: 'https://getwallpapers.com/wallpaper/full/5/b/d/910543-wwe-2018-wallpaper-1920x1080-photos.jpg',
    size: '29 GB',
    releaseYear: '2017',
    images: [
      'https://getwallpapers.com/wallpaper/full/5/b/d/910543-wwe-2018-wallpaper-1920x1080-photos.jpg',
      'https://getwallpapers.com/wallpaper/full/e/8/b/910464-wwe-2018-wallpaper-1920x1080-for-mobile-hd.jpg',
      'https://getwallpapers.com/wallpaper/full/c/a/7/910530-wwe-2018-wallpaper-1920x1200-full-hd.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/7ZbZfsuLXtg',
    shorts: [
      'https://www.youtube.com/embed/b9Bm-nEKUn8',
      'https://www.youtube.com/embed/FVAvWwxj7QY',
      'https://www.youtube.com/embed/pGvlJeYcwoI'
    ],
    isRecommended: false,
  },
  {
    id: 'hotd2-remake',
    title: 'The House of the Dead 2: Remake',
    description: 'The arcade classic returns with a complete graphical overhaul and improved gameplay. Experience Venice like never before as you blast through legions of undead in this intense 2-player rail shooter.',
    categories: ['2 players'],
    thumbnail: 'https://klovimg.com/images/2023/01/28/before.jpg',
    size: '5 GB',
    releaseYear: '2025',
    images: [
      'https://klovimg.com/images/2023/01/28/before.jpg',
      'https://images.gog-statics.com/000fbb964ccaee8d6b8ae1b87e06cd28000f5c3df70e4736dbd9bbf5c9aca471_product_card_v2_mobile_slider_639.jpg',
      'https://www.relyonhorror.com/wp-content/uploads/2025/08/20250815153722_1.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/BCuE-VCrdWs',
    shorts: [
      'https://www.youtube.com/embed/6pdtwFKTzSU'
    ],
  },
  {
    id: 'spirit-samurai',
    title: 'The Spirit of the Samurai',
    description: 'A visually stunning stop-motion action-adventure. Play as a samurai, a spirit, and a cat to protect your village from an army of darkness in this unique Metroidvania.',
    categories: ['2D game'],
    thumbnail: 'https://cdn1.epicgames.com/spt-assets/979767c41e6946e2a483d6e1e0f40f83/the-spirit-of-the-samurai-15kyx.png',
    size: '6 GB',
    releaseYear: '2024',
    images: [
      'https://cdn1.epicgames.com/spt-assets/979767c41e6946e2a483d6e1e0f40f83/the-spirit-of-the-samurai-15kyx.png',
      'https://i0.wp.com/intoindiegames.com/wp-content/uploads/IIG-TK-00007-40.jpg?resize=800,450&ssl=1',
      'https://cdn.mos.cms.futurecdn.net/3L5CCe7hJUrkotiJws26L7.png'
    ],
    videoUrl: 'https://www.youtube.com/embed/eVWvlQRoBq0',
    shorts: [
      'https://www.youtube.com/embed/TWV_2TUoeoA',
      'https://www.youtube.com/embed/OLoD5gj0Z6k'
    ],
  },
  {
    id: 'beast-reincarnation',
    title: 'Beast of Reincarnation',
    description: 'A dark, visceral action experience where the cycle of life and death is your greatest weapon. Unleash your inner beast to survive a world of ancient curses.',
    categories: ['RPG'],
    thumbnail: 'https://gameinformer.com/sites/default/files/styles/content_header_l/public/2026/07/31/1cdb0ec4/bor_keyart_4k.jpg.webp',
    size: '23 GB',
    releaseYear: '2026',
    images: [
      'https://gameinformer.com/sites/default/files/styles/content_header_l/public/2026/07/31/1cdb0ec4/bor_keyart_4k.jpg.webp',
      'https://kotaku.com/app/uploads/2026/08/kooandemma.jpg',
      'https://www.vice.com/wp-content/uploads/sites/2/2026/08/beast-of-reincarnation-early-access.jpg?w=1024'
    ],
    videoUrl: 'https://www.youtube.com/embed/H0r-Kap8kWI?si=NNfafIDo2Hcil98b',
    shorts: [
      'https://www.youtube.com/embed/H0r-Kap8kWI?si=NNfafIDo2Hcil98b',
      'https://www.youtube.com/embed/zSmqjNjTsu8?si=GM8xBxxEuOA4EmGn'
    ],
  },
  {
    id: 'sudden-strike-5',
    title: 'Sudden Strike 5',
    description: 'The definitive World War II strategy series returns. Command massive armies across iconic battlefields with unprecedented tactical depth and realism.',
    categories: ['Action'],
    thumbnail: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2808550/b605fb58a451cd8ff5928e5576c216e201106211/header.jpg?t=1790060517',
    size: '13 GB',
    releaseYear: '2026',
    images: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2808550/b605fb58a451cd8ff5928e5576c216e201106211/header.jpg?t=1790060517',
      'https://www.indiegalacdn.com/store-img_game/games/screenshots/screen_2808550_1.jpg',
      'https://i.ebayimg.com/images/g/UhkAAOSwfPtmXNSR/s-l500.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/lbi2hOAE-9I',
    shorts: [
      'https://www.youtube.com/embed/FHrriux_xKA'
    ],
  },
  {
    id: 'ac-black-flag-resynced',
    title: 'Assassin’s Creed: Black Flag Resynced',
    description: 'The golden age of piracy returns in this stunning remaster. Embark on an epic naval journey as Edward Kenway, a pirate trained by Assassins, and command the Jackdaw in a massive open world.',
    categories: ['Open World'],
    thumbnail: 'https://www.greenmangaming.com/blog/wp-content/uploads/2026/07/BlogButtonACBlackFlag.jpg',
    size: '36 GB',
    releaseYear: '2026',
    images: [
      'https://www.greenmangaming.com/blog/wp-content/uploads/2026/07/BlogButtonACBlackFlag.jpg',
      'https://assetsio.gnwcdn.com/Bartholomew-Roberts.jpg?width=2048&height=2048&fit=bounds&quality=85&format=jpg&auto=webp',
      'https://wallpapercave.com/wp/wp16325456.webp'
    ],
    videoUrl: 'https://www.youtube.com/embed/WjsTLe7bBUA',
    shorts: [
      'https://www.youtube.com/embed/LiN5RfFzaI0',
      'https://www.youtube.com/embed/CrrtY5O3fB4',
      'https://www.youtube.com/embed/2LY9zJTXGbU'
    ],
  
  },
  {
    id: 'hollow-knight',
    title: 'Hollow Knight',
    description: 'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs.',
    categories: ['2D game'],
    thumbnail: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg',
    size: '2 GB',
    releaseYear: '2017',
    images: [
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg',
      'https://external-preview.redd.it/totally-normal-hollowknight-gameplay-v0-NnUzNmEzMGwxc2FjMaZ0odn_47P7nPBmn8KHJQ4uPC_KkuJ9hEr7g7mpdHpH.png?width=640&crop=smart&format=pjpg&auto=webp&s=ffcdd549d780dd4c299b71e83cd7ba3b310c9bc6',
      'https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/aae3d1c6-1590-4b86-a56b-e8efcc543b6b/Paintmaster.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/UAO2urG23S4',
    shorts: [
      'https://www.youtube.com/embed/5c_U_o5zG8M'
    ],
  },
  {
    id: 'hollow-knight-silksong',
    title: 'Hollow Knight: Silksong',
    description: 'Discover a whole new kingdom! Explore, fight and survive as Hornet, princess-protector of Hallownest, on a journey to a strange new land of silk and song.',
    categories: ['2D game'],
    thumbnail: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030300/7983574d464e6559ac7e24275727f73a8bcca1f3/header.jpg?t=1776125736',
    size: '3 GB',
    releaseYear: '2025',
    images: [
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030300/7983574d464e6559ac7e24275727f73a8bcca1f3/header.jpg?t=1776125736',
      'https://images.steamusercontent.com/ugc/10195868611166946737/DD11E42ED084440F45B8CBE73738995A1E13A0DB/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=#000000&letterbox=false',
      'https://images.steamusercontent.com/ugc/17131043628587106452/C94C98E142285E7D390DBC7BABB9A6D6EF2F5F6A/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=#000000&letterbox=false'
    ],
    videoUrl: 'https://www.youtube.com/embed/6XGeJwsUP9c',
    shorts: [
      'https://www.youtube.com/embed/BFBOi-rpcFE'
    ],
    
  },
  {
    id: 'replaced',
    title: 'Replaced',
    description: 'A 2.5D sci-fi retro-futuristic action platformer where you play as R.E.A.C.H. - an artificial intelligence trapped in a human body against its own will.',
    categories: ['2D game'],
    thumbnail: 'https://wallpapercave.com/wp/wp13317782.png',
    size: '3 GB',
    releaseYear: '2026',
    images: [
      'https://wallpapercave.com/wp/wp13317782.png',
      'https://cdn.mos.cms.futurecdn.net/V8TgW26zyQg6aNbPQw55mW.jpg',
      'https://kotaku.com/igdb/image/upload/t_720p/scahje.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/fuUo7_VaboE',
    shorts: [
      'https://www.youtube.com/embed/rSWmFitKqAk'
    ],
  },
  {
    id: 'akatori',
    title: 'Akatori',
    description: 'An epic metroidvania that seamlessly blends high-octane 2D action and platforming across multiple unique dimensions.',
    categories: ['2D game'],
    thumbnail: 'https://rokthereaper.com/wp-content/uploads/2026/02/AKA-Feb1826-FEATIMG.png',
    size: '4 GB',
    releaseYear: '2026',
    images: [
      'https://rokthereaper.com/wp-content/uploads/2026/02/AKA-Feb1826-FEATIMG.png',
      'https://rokthereaper.com/wp-content/uploads/2026/02/Akatori_Screenshot_5-1024x576.jpg',
      'https://rokthereaper.com/wp-content/uploads/2026/02/Akatori_Screenshot_8-1024x576.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/gBWAa-KBA0A',
    shorts: [
      'https://www.youtube.com/embed/MCrUlQe-JlU'
    ],
  },
  {
    id: 'sifu',
    title: 'Sifu',
    description: 'Sifu is a realistic third-person brawler with tight Kung Fu combat mechanics and cinematic martial arts action. Embark on a path of revenge, hunting down the assassins of your family.',
    categories: ['Action'],
    thumbnail: 'https://wallpaperaccess.com/full/8064663.jpg',
    size: '10 GB',
    releaseYear: '2022',
    images: [
      'https://wallpaperaccess.com/full/8064663.jpg',
      'https://i0.wp.com/waytoomany.games/wp-content/uploads/2022/02/Sifu_20220126190021.jpg?resize=860,484&ssl=1',
      'https://kotaku.com/igdb/image/upload/t_720p/sc9370.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/1FQ1YO3Ks2U',
    shorts: [
      'https://www.youtube.com/embed/GbEcXsj_cME',
      'https://www.youtube.com/embed/7hZSWtkYN_c',
      'https://www.youtube.com/embed/kp8bLtQfkus'
    ],
  },
  {
    id: 'invincible-vs',
    title: 'Invincible VS',
    description: 'Experience the brutal, high-stakes world of Invincible in this intense competitive fighting game. Master legendary characters and engage in visceral 2-player battles that push the limits of superhero combat.',
    categories: ['2 players'],
    thumbnail: 'https://invinciblevs.com/wp-content/uploads/2025/06/invincinble_cover-article.jpeg',
    size: '9 GB',
    releaseYear: '2025',
    images: [
      'https://invinciblevs.com/wp-content/uploads/2025/06/invincinble_cover-article.jpeg',
      'https://butwhytho.net/wp-content/uploads/2026/04/Invincible-VS-But-Why-Tho-4.jpg',
      'https://i0.wp.com/finalweapon.net/wp-content/uploads/2026/04/Invincible-VS-Gameplay.webp?resize=696,392&ssl=1'
    ],
    videoUrl: 'https://www.youtube.com/embed/bHjFuV9mytE',
    shorts: [
      'https://www.youtube.com/embed/FjgrerZIzDc'
    ],
  
  },
  {
    id: 'awayout',
    title: 'A Way Out',
    description: 'THIS GAME REQUIRES 2 PLAYERS (CANNOT BE PLAYED ALONE). From the creators of Brothers – A Tale of Two Sons comes A Way Out, an exclusively co-op adventure where you play the role of one of two prisoners making their daring escape from prison.',
    categories: ['2 players'],
    thumbnail: 'https://cdn1.epicgames.com/spt-assets/a037fc78ee9d47b98466f17b44c46288/a-way-out-y92bk.jpg',
    size: '15 GB',
    releaseYear: '2018',
    images: [
      'https://cdn1.epicgames.com/spt-assets/a037fc78ee9d47b98466f17b44c46288/a-way-out-y92bk.jpg',
      'https://images.igdb.com/igdb/image/upload/t_1080p/e3uewyuh6wbgj52z6h5r.jpg?width=1200&quality=50&format=auto',
      'https://cdn.mobygames.com/675f47e2-c249-11ed-ab6b-02420a000194.webp'
    ],
    videoUrl: 'https://www.youtube.com/embed/yGZGSdgJVPM',
    shorts: [
      'https://www.youtube.com/embed/SGk1ojwYjIQ',
      'https://www.youtube.com/embed/tGS08hexMxY'
    ],
    isRecommended: false,
  },
  {
    id: 'crash4',
    title: 'Crash Bandicoot 4: It\'s About Time',
    description: 'Crash is back and it’s about time! It’s About Time – Crash-landing into a time-shattered adventure with your favorite marsupials. Neo Cortex and N. Tropy are back at it again and launching an all-out assault on not just this universe, but the entire multiverse!',
    categories: ['Adventure'],
    thumbnail: 'https://wallpapercave.com/wp/wp7593275.jpg',
    size: '15 GB',
    releaseYear: '2021',
    images: [
      'https://wallpapercave.com/wp/wp7593275.jpg',
      'https://www.crashbandicoot.com/content/dam/atvi/Crash/gallery/crash6.jpg',
      'https://wallpapers.com/images/hd/crash-bandicoot-sunset-1izya2ao3sy9yo37.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/U1qGQqOldZI8',
    shorts: [
      'https://www.youtube.com/embed/kX9RFvcm6oY'
    ],
    isRecommended: false,
  },
  {
    id: 'ets2',
    title: 'Euro Truck Simulator 2',
    description: 'Travel across Europe as king of the road, a trucker who delivers important cargo across impressive distances! With dozens of cities to explore from the UK, Belgium, Germany, Italy, the Netherlands, Poland, and many more, your endurance, skill and speed will all be pushed to their limits.',
    categories: ['Open World'],
    thumbnail: 'https://wallpapercave.com/wp/wp2578403.jpg',
    size: '17 GB',
    releaseYear: '2012',
    images: [
      'https://wallpapercave.com/wp/wp2578403.jpg',
      'https://www.gtplanet.net/forum/attachments/ets2_00010-png.643071/',
      'https://i.pinimg.com/originals/cc/35/24/cc35248b6a7e8a138dbbcb7e210db262.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/5uvwfskYwl0',
    shorts: [
      'https://www.youtube.com/embed/y287trA3Eio',
      'https://www.youtube.com/embed/wJEZ0YDI-hc',
      'https://www.youtube.com/embed/pdV0w2bQgxc'
    ],
    isRecommended: false,
  },
  {
    id: 'sinking-city-2',
    title: 'The Sinking City 2',
    description: 'A terrifying survival horror journey set in the lovecraftian city of Arkham. Navigate the flooded streets and face unspeakable cosmic horrors in this stunning sequel built in Unreal Engine 5.',
    categories: ['Horror'],
    thumbnail: 'https://theeliteinstitute.net/wp-content/uploads/2026/06/image_2026-06-06_222458125-1280x640.png',
    size: '40 GB',
    releaseYear: '2025',
    images: [
      'https://theeliteinstitute.net/wp-content/uploads/2026/06/image_2026-06-06_222458125-1280x640.png',
      'https://images.squarespace-cdn.com/content/v1/59a2574903596e3462d0bd19/d18421b8-8569-4b68-8319-da7f917b915e/TSC2_AFD_Fight.jpg',
      'https://cdn.mos.cms.futurecdn.net/dvMEnvMJwCv8b7cyF6kYRg.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/8Hi78PvY2M8',
    shorts: [
      'https://www.youtube.com/embed/Y6HUJ22LjxY',
      'https://www.youtube.com/embed/OXrTcUeK1oM'
    ],
    
  },
  {
    id: 'sinking-city-remastered',
    title: 'The Sinking City Remastered',
    description: 'The definitive version of the lovecraftian investigation game. Featuring 4K resolution, 60 FPS, and significantly improved graphical fidelity and loading times.',
    categories: ['Horror'],
    thumbnail: 'https://gaming-cdn.com/images/news/articles/11597/cover/1000x563/the-sinking-city-remastered-has-been-announced-cover67eaa5f9e75e6.jpg',
    size: '22 GB',
    releaseYear: '2021',
    images: [
      'https://gaming-cdn.com/images/news/articles/11597/cover/1000x563/the-sinking-city-remastered-has-been-announced-cover67eaa5f9e75e6.jpg',
      'https://i.postimg.cc/L5Px3ttT/The-Sinking-City-Remastered-Win64-Shipping-2025-05-14-02-02-25-874.png',
      'https://images.squarespace-cdn.com/content/v1/55ef0e29e4b099e22cdc9eea/1562376985150-DM7DMQLL0EODIMUR2F2Q/sinking-welcome.jpeg'
    ],
    videoUrl: 'https://www.youtube.com/embed/gAG1tzdwCFg',
    shorts: [
      'https://www.youtube.com/embed/Y6P6uoPb7Tk'
    ],
    isRecommended: false,
  },
  {
    id: 'directive-8020',
    title: 'Directive 8020',
    description: 'A cinematic survival horror experience set in the depths of space. As part of The Dark Pictures Anthology, you must survive a crew turned against you by an alien presence that can mimic its prey.',
    categories: ['Horror'],
    thumbnail: 'https://wallpapercave.com/wp/wp16380849.webp',
    size: '23 GB',
    releaseYear: '2025',
    images: [
      'https://wallpapercave.com/wp/wp16380849.webp',
      'https://www.thedarkpictures.com/media/1ysbbpaz/directive-8020_screenshot_danger-awaits.jpg?width=2560&v=1dc99add4d58ff0',
      'https://cdn.mos.cms.futurecdn.net/Xpb2MrcvwaZPAimSAjb5dZ.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/4a_VXgNSfME',
    shorts: [
      'https://www.youtube.com/embed/EV-tLj0N6E0',
      'https://www.youtube.com/embed/ZzIdh16FBdU'
    ],
    isRecommended: false,
  },
  {
    id: 'popucom',
    title: 'Popucom',
    description: 'A colorful multiplayer cooperative adventure! Use color-based mechanics to solve puzzles and defeat enemies in this vibrant world designed for playing with friends.',
    categories: ['2 players'],
    thumbnail: 'https://gaming-cdn.com/images/products/19223/616x353/popucom-pc-game-steam-cover.jpg?v=1748955664',
    size: '7 GB',
    releaseYear: '2024',
    images: [
      'https://gaming-cdn.com/images/products/19223/616x353/popucom-pc-game-steam-cover.jpg?v=1748955664',
      'https://64.media.tumblr.com/07e20c48c8dfa7e05b5811e94e5dff59/95df6224d767b37e-56/s1280x1920/b57cc4e02a2e5d55f9dac81e0418f97b47c96387.jpg',
      'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/store/software/switch/70010000083225/f0aa4beaa4d2ef582e97267022a0d293f6acc27f61a08e6e737e66faa1b1b34d'
    ],
    videoUrl: 'https://www.youtube.com/embed/ZCjHfPxZHYE',
    shorts: [
      'https://www.youtube.com/embed/3aB001eh0fI'
    ],
    isRecommended: false,
  },
  {
    id: 'blood-dawnwalker',
    title: 'The Blood of Dawnwalker',
    description: 'Uncover the dark secrets of a gothic world in this atmospheric horror experience. Battle nightmarish creatures as you seek to break an ancient curse that has plagued the land for centuries.',
    categories: ['RPG'],
    thumbnail: 'https://preview.redd.it/the-blood-of-dawnwalker-cover-art-v0-q7zi8ed6r6bg1.jpeg?width=640&crop=smart&auto=webp&s=8816487981ea332eb56f20399493e523db6c24c4',
    size: '40 GB',
    releaseYear: '2025',
    images: [
      'https://preview.redd.it/the-blood-of-dawnwalker-cover-art-v0-q7zi8ed6r6bg1.jpeg?width=640&crop=smart&auto=webp&s=8816487981ea332eb56f20399493e523db6c24c4',
      'https://gameinformer.com/sites/default/files/styles/content_header_l/public/2026/05/11/5127adb7/the-blood-of-dawnwalker-screenshot-06.jpg.webp',
      'https://www.rpgfan.com/wp-content/uploads/2025/01/The-Blood-of-Dawnwalker-Artwork-011.webp'
    ],
    videoUrl: 'https://www.youtube.com/embed/te73UInH8H8',
    shorts: [
      'https://www.youtube.com/embed/UaERmm1DQpM',
      'https://www.youtube.com/embed/s7fZJScvOgk',
      'https://www.youtube.com/embed/H7Kz7aODYEQ'
    ],
  },
  {
    id: 'hogwarts-legacy',
    title: 'Hogwarts Legacy',
    description: 'Experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart. Take control of the action and be at the center of your own adventure.',
    categories: ['Open World'],
    thumbnail: 'https://wallpapercave.com/wp/wp12278034.jpg',
    size: '42 GB',
    releaseYear: '2023',
    images: [
      'https://wallpapercave.com/wp/wp12278034.jpg',
      'https://preview.redd.it/beautiful-landscape-of-hogwarts-and-arround-v0-4teird06jwvc1.png?width=640&crop=smart&auto=webp&s=d0a98bab9ddd8249740d761ecc1cf9fa2ce75d02',
      'https://i.pinimg.com/originals/cb/16/5c/cb165c8603ff240b26ca92fd8f5e9cab.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/1O6Qstncpnc',
    shorts: [
      'https://www.youtube.com/embed/QrlLnlpUhhg',
      'https://www.youtube.com/embed/8PAFBXdV3oE',
      'https://www.youtube.com/embed/Gw1fXsy9AIE'
    ]
  },
  {
    id: 'dragons-dogma-2',
    title: "Dragon's Dogma 2",
    description: "Dragon’s Dogma 2 is a single player, narrative driven action-RPG that challenges the players to choose their own experience – from the appearance of their Arisen to their vocation and party.",
    categories: ['RPG'],
    thumbnail: 'https://www.rpgfan.com/wp-content/uploads/2023/05/Dragons-Dogma-2-Artwork-001-1280x720.jpg',
    size: '42 GB',
    releaseYear: '2024',
    images: [
      'https://www.rpgfan.com/wp-content/uploads/2023/05/Dragons-Dogma-2-Artwork-001-1280x720.jpg',
      'https://www.dragonsdogma.com/2/assets/images/topics/240719/thumb.jpg',
      'https://preview.redd.it/finally-got-that-cover-art-armour-set-v0-3y69hmfu1upd1.png?width=1920&format=png&auto=webp&s=78d744382e33ee5df48f4cb09ca32d5993cf1896'
    ],
    videoUrl: 'https://www.youtube.com/embed/cT0rIgaiPWA',
    shorts: [
      'https://www.youtube.com/embed/X83BHJdy3A0',
      'https://www.youtube.com/embed/9RX9C-7RLpI'
    ]
  },
  {
    id: 'mortal-shell-2',
    title: 'Mortal Shell II',
    description: 'The sequel to the acclaimed soulslike. Possess new warriors, master lethal combat, and face even greater horrors in a decaying world that tests your sanity and skill.',
    categories: ['Action'],
    thumbnail: 'https://image.api.playstation.com/vulcan/ap/rnd/202607/0618/218e06402e3bb0b92b96399a827a9033a18335c239789bbb.jpg',
    size: '52 GB',
    releaseYear: '2025',
    images: [
      'https://image.api.playstation.com/vulcan/ap/rnd/202607/0618/218e06402e3bb0b92b96399a827a9033a18335c239789bbb.jpg',
      'https://assetsio.gnwcdn.com/mortal-shell-2-standing-in-desolate-keep.jpg?width=2048&height=2048&fit=bounds&quality=85&format=jpg&auto=webp',
      'https://images5.alphacoders.com/116/thumbbig-1161741.webp'
    ],
    videoUrl: 'https://www.youtube.com/embed/KJWAUJhInH0',
    shorts: [
      'https://www.youtube.com/embed/M6kBsFobHFk',
      'https://www.youtube.com/embed/LPUD61qBntM',
      'https://www.youtube.com/embed/mHcC7Feypdc'
    ]
  },
  {
    id: 'romeo-dead-man',
    title: 'ROMEO IS A DEAD MAN',
    description: 'A stylish noir action-adventure. Navigate a city of shadows, uncover a deep conspiracy, and survive the consequences of your past in this cinematic journey of revenge.',
    categories: ['Adventure'],
    thumbnail: 'https://i0.wp.com/www.consolecreatures.com/wp-content/uploads/2025/12/Romeo-Is-A-Deadman-Feb-2026.webp?fit=1280,720&ssl=1',
    size: '24 GB',
    releaseYear: '2026',
    images: [
      'https://i0.wp.com/www.consolecreatures.com/wp-content/uploads/2025/12/Romeo-Is-A-Deadman-Feb-2026.webp?fit=1280,720&ssl=1',
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/06/romeo-is-a-deadman-trailer-zombies.jpg?q=49&fit=crop&w=480&h=270&dpr=2',
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/06/romeo-is-a-deadman-trailer-romeo.jpg?q=49&fit=crop&w=450&h=225&dpr=2'
    ],
    videoUrl: 'https://www.youtube.com/embed/nW1cE6sj6h8',
    shorts: [
      'https://www.youtube.com/embed/IROL9HaRWvg'
    ]
  },
  {
    id: 'arma-reforger',
    title: 'Arma Reforger',
    description: "Experience authentic Cold War combat and join the fight for the island of Everon. Return to the series' roots in this massive, versatile military sandbox.",
    categories: ['Action'],
    thumbnail: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1874880/header.jpg',
    size: '19 GB',
    releaseYear: '2024',
    images: [
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1874880/header.jpg',
      'https://wallpapercave.com/wp/wp11030043.jpg',
      'https://arma-reforger.com/img/screenshots/arma-reforger-01.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/AAnv3iWwP9M',
  },
  {
    id: 'relic-first-guardian',
    title: 'The Relic - First Guardian',
    description: 'A grand action RPG where you set out on an adventure to find the pieces of a broken relic and restore the world to its former glory. Master diverse combat styles.',
    categories: ['RPG'],
    thumbnail: 'https://assets.games.gg/the_relic_first_guardian_gallery_1_30934ab116.webp',
    size: '20 GB',
    releaseYear: '2025',
    images: [
      'https://assets.games.gg/the_relic_first_guardian_gallery_1_30934ab116.webp',
      'https://www.rpgfan.com/wp-content/uploads/2024/06/The-Relic-First-Guardian-Screenshot-002-1280x720.webp',
      'https://www.rpgfan.com/wp-content/uploads/2024/06/The-Relic-First-Guardian-Screenshot-005-1280x720.webp'
    ],
    videoUrl: 'https://www.youtube.com/embed/YpzAUSNRF9E',
    shorts: [
      'https://www.youtube.com/embed/_teu3SPkgJE',
      'https://www.youtube.com/embed/_PqPcTC56-Q',
      'https://www.youtube.com/embed/1tbM67pMAuk'
    ]
  },
  {
    id: 'sw-outlaws',
    title: 'Star Wars Outlaws',
    description: 'Experience the first-ever open world Star Wars™ game. Explore distinct planets across the galaxy, both iconic and new, as you seek freedom and a new life.',
    categories: ['Open World'],
    thumbnail: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/ddfa6481-b52a-4fff-9cfd-0bb06f184505.__CR0,0,970,600_PT0_SX970_V1___.jpg',
    size: '41 GB',
    releaseYear: '2024',
    images: [
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/ddfa6481-b52a-4fff-9cfd-0bb06f184505.__CR0,0,970,600_PT0_SX970_V1___.jpg',
      'https://gameinformer.com/sites/default/files/styles/body_default/public/2024/05/01/779564b7/swo_07.jpg.webp',
      'https://gameinformer.com/sites/default/files/styles/body_default/public/2024/05/01/fe2ab122/swo_03.jpg.webp'
    ],
    videoUrl: 'https://www.youtube.com/embed/ymcpwq1ltQc',
    shorts: [
      'https://www.youtube.com/embed/JF93jvZt69s',
      'https://www.youtube.com/embed/QP_wXv2ErgI',
      'https://www.youtube.com/embed/bgd2OJGOQn4'
    ]
  },
  {
    id: 'gears-of-war',
    title: 'Gears of War',
    description: 'Experience the high-octane cover-based shooter that redefined action games. Follow Marcus Fenix and Delta Squad as they fight for the survival of humanity against the Locust Horde.',
    categories: ['Shooter'],
    thumbnail: 'https://live.cdn.gearsofwar.com/gearsofwar/sites/3/2026/05/00_GoW_EDAY_CoverArt-6a15d9095e1c1-scaled.jpg',
    size: '79 GB',
    releaseYear: '2025',
    images: [
      'https://live.cdn.gearsofwar.com/gearsofwar/sites/3/2026/05/00_GoW_EDAY_CoverArt-6a15d9095e1c1-scaled.jpg',
      'https://wallpapers.com/images/hd/gears-of-war-4-fighting-a-grenadier-swarm-05kcandau3pgdcdm.jpg',
      'https://live.cdn.gearsofwar.com/gearsofwar/sites/3/2026/05/03_GoW_EDAY_Boomer_Final-6a17663e3da94-scaled.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/EC20gLfUHeA',
    shorts: [
      'https://www.youtube.com/embed/K_Z0fd1zjYo',
      'https://www.youtube.com/embed/XawcPlhwN40'
    ]
  },
  {
    id: 'witcher3-remastered',
    title: 'The Witcher 3 Remastered',
    description: 'The definitive edition of the legendary RPG, now with stunning 4K visuals, enhanced textures, and ray-tracing. Embark once more on Geralt\'s epic quest with all expansions included.',
    categories: ['RPG'],
    thumbnail: 'https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt6d161a29da0dd367/6a7f92fd3ad392027f6f8c41/shop_product_feature_card_w3re_logo.webp',
    size: '40 GB',
    releaseYear: '2025',
    images: [
      'https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt6d161a29da0dd367/6a7f92fd3ad392027f6f8c41/shop_product_feature_card_w3re_logo.webp',
      'https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/bltd0b9acc1eeffb85e/6a8c8a9cf8f1248709bcb767/feature_3_shop_product_feature_card_geralt.webp',
      'https://cdn.mos.cms.futurecdn.net/scKtip2PExfiPFZsd8Q74F.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/IGk17XQ7IrQ',
    shorts: [
      'https://www.youtube.com/embed/7Br0Yerr0mE',
      'https://www.youtube.com/embed/oIFo_fKSTiE'
    ],
  },
  {
    id: 'control-resonant',
    title: 'Control Resonant',
    description: 'Explore the mysterious Oldest House once again in this standalone action-adventure. Master new supernatural abilities and uncover deep-rooted secrets within the Federal Bureau of Control.',
    categories: ['Action'],
    thumbnail: 'https://image.api.playstation.com/vulcan/ap/rnd/202605/2811/e104ddf9aea2f76d5c198e5b0861eb086bbef105d6d47bee.jpg',
    size: '61 GB',
    releaseYear: '2025',
    images: [
      'https://image.api.playstation.com/vulcan/ap/rnd/202605/2811/e104ddf9aea2f76d5c198e5b0861eb086bbef105d6d47bee.jpg',
      'https://blog.playstation.com/tachyon/2026/03/ff3c2638907202384dcc4fc15c5a378f251fe638.jpg?resize=1088,612&crop_strategy=smart',
      'https://blog.playstation.com/tachyon/2028/09/805dc24cfeb0a3136d766b4e28d4d1a269bfde1b.jpg?resize=1088,612&crop_strategy=smart'
    ],
    videoUrl: 'https://www.youtube.com/embed/WhQm-ExRz60',
    shorts: [
      'https://www.youtube.com/embed/cn4PamZ167U',
      'https://www.youtube.com/embed/ngwUfhLQ07o',
      'https://www.youtube.com/embed/JfuY-NhK_tQ'
    ],
  },
  {
    id: 'blackwood',
    title: 'Blackwood',
    description: 'Survive the night in the cursed woods of Blackwood. A first-person psychological horror experience that tests your courage against ancient terrors lurking in the shadows.',
    categories: ['Action'],
    thumbnail: 'https://imgeucdn.gamespress.com/cdn/files/Games%20Press/2025/10/061722-247b4212/Blackwood_Wallpaper_2.png?w=533&mode=max&otf=y&quality=90&format=png&bgcolor=transparent&sky=a4cf2eac0e403a521952a6a123f95dcd1e026384bb0c6f9c5f3be3273566c62a',
    size: '7 GB',
    releaseYear: '2024',
    images: [
      'https://imgeucdn.gamespress.com/cdn/files/Games%20Press/2025/10/061722-247b4212/Blackwood_Wallpaper_2.png?w=533&mode=max&otf=y&quality=90&format=png&bgcolor=transparent&sky=a4cf2eac0e403a521952a6a123f95dcd1e026384bb0c6f9c5f3be3273566c62a',
      'https://assets.games.gg/blackwood_banner_a4a7396941.webp',
      'https://external-preview.redd.it/photo-mode-is-coming-to-blackwood-capture-cinematic-shots-v0-Z2Rhd2QwdmthbzloMQVKDdR6hAICtjImUTAQwrKRHe_R1IDsHKQVcG6YXP44.png?width=640&crop=smart&auto=webp&s=3214465eff53bccd58f0280b83ac28b05a04aa07'
    ],
    videoUrl: 'https://www.youtube.com/embed/xVyIEh5DTU0',
    shorts: [
      'https://www.youtube.com/embed/xVyIEh5DTU0'
    ],
  },
  {
    id: 'sh-townfall',
    title: 'Silent Hill Townfall',
    description: 'A new entry in the iconic survival horror series. Navigate a town shrouded in fog and face the manifestations of your deepest fears in this atmospheric and narrative-driven journey.',
    categories: ['Horror'],
    thumbnail: 'https://i0.wp.com/waytoomany.games/wp-content/uploads/2026/06/SILENT-HILL-Townfall_Key-Art-3840-%C3%97-2160.jpg?fit=3840,2160&ssl=1',
    size: '41 GB',
    releaseYear: '2025',
    images: [
      'https://i0.wp.com/waytoomany.games/wp-content/uploads/2026/06/SILENT-HILL-Townfall_Key-Art-3840-%C3%97-2160.jpg?fit=3840,2160&ssl=1',
      'https://blog.playstation.com/tachyon/2028/09/7f627316d4086f9bbe20da9bad09a36ee29677ff-scaled.jpg?resize=1088,612&crop_strategy=smart',
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2026/02/silent-hill-townfall-press-image-6.jpg?q=49&fit=crop&w=480&h=270&dpr=2'
    ],
    videoUrl: 'https://www.youtube.com/embed/9VjP6RyfGrQ',
    shorts: [
      'https://www.youtube.com/embed/5dXZ6_lLB0I',
      'https://www.youtube.com/embed/Ehcs7hNhY7g'
    ],
  },
  {
    id: 'dw3-remake',
    title: 'DYNASTY WARRIORS 3',
    description: 'Relive the legendary battles of the Three Kingdoms in this stunning remake. Experience visceral 1-vs-1000 action with modernized combat mechanics and breathtaking visuals.',
    categories: ['2 players'],
    thumbnail: 'https://www.tech-gaming.com/wp-content/uploads/2026/10/DYNASTY-WARRIORS-3-Complete-Edition-Remastered-1.jpg',
    size: '23 GB',
    releaseYear: '2025',
    images: [
      'https://www.tech-gaming.com/wp-content/uploads/2026/10/DYNASTY-WARRIORS-3-Complete-Edition-Remastered-1.jpg',
      'https://d1lss44hh2trtw.cloudfront.net/resize?type=webp&url=https://shacknews-www.s3.amazonaws.com/assets/articles/2026/dynasty-warriors-3-complete-edition-remastered-impressions-zhuge-20260930022420-551af081.jpg&width=986&sign=2T-Xy4D8aqlEHhBxuVMpaUD1pMX5l8VWiQdi-PVHIDc',
      'https://www.koeitecmoeurope.com/dw3-re/assets/img/gameplay_2p-modal.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/3ybsp-GdDSg',
    shorts: [
      'https://www.youtube.com/embed/p79rj0EL480',
      'https://www.youtube.com/embed/sa49zJgBXbU'
    ],
  },
  {
    id: 'cities-skylines-2',
    title: 'Cities: Skylines II',
    description: 'Build a metropolis from the ground up with the most realistic city builder ever. Push your creativity and problem-solving to build on a scale you\'ve never experienced.',
    categories: ['Open World'],
    thumbnail: 'https://images5.alphacoders.com/133/thumbbig-1337153.webp',
    size: '43 GB',
    releaseYear: '2023',
    images: [
      'https://images5.alphacoders.com/133/thumbbig-1337153.webp',
      'https://images.ctfassets.net/u73tyf0fa8v1/6jMpAWfQVHDU9AAPomTceI/a67a974530a7d753d61fac3204b80a3d/cities-skylines-ii-city-services-26_District.jpg?w=1920&q=75&fm=webp',
      'https://cdn.mos.cms.futurecdn.net/pa7rzBpStmWTaXxqDaSJnR.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/7vlKoMi4Qr0',
    shorts: [
      'https://www.youtube.com/embed/2AGuw56uKgA'
    ]
  },
  {
    id: 'darwins-paradox',
    title: 'Darwin\'s Paradox',
    description: 'A high-octane 2.5D action-adventure platformer set in a vibrant world. Uncover the secrets of a futuristic ecosystem where evolution has taken a strange and dangerous turn.',
    categories: ['2D game'],
    thumbnail: 'https://games.gg/cdn-cgi/image/width=1920,quality=75,format=auto,fit=scale-down,metadata=none,onerror=redirect/https://assets.games.gg/darwins_paradox_ps5_games_playstation_ps5_games_playstation_us_3563ef8066.webp',
    size: '5 GB',
    releaseYear: '2024',
    images: [
      'https://games.gg/cdn-cgi/image/width=1920,quality=75,format=auto,fit=scale-down,metadata=none,onerror=redirect/https://assets.games.gg/darwins_paradox_ps5_games_playstation_ps5_games_playstation_us_3563ef8066.webp',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoLsHMCuY-G1Bicb8B5OSlnYpO_yisaA4C58bozKjSJEsOWlN8TUpgdGal_-LwtEw2t4Y96htpki_dlj6VC6YaL7BLFb2r97QkpI_eaajbgzj8_k7pF5Z7b739Mykv5Ed-Y4ESTcgK5BnmFm9TmiFno0l8m35yhw3YVRnkelM8NPbfj9h_L98DQS4IU_U5/s2000/Darwin_s%20Paradox_Screenshot_November_03.png',
      'https://covergeek.com/wp-content/uploads/2026/03/Darwins-Paradox-Review-Suit-1024x576.webp'
    ],
    videoUrl: 'https://www.youtube.com/embed/TbgsjUFIBOw',
    shorts: [
      'https://www.youtube.com/embed/No5OxzSed4c'
    ]
  },
  {
    id: 'gow3-remastered',
    title: 'God of War III Remastered',
    description: 'In the end, there will be only chaos. One of the most critically acclaimed games of its generation, God of War III has been remastered for the PlayStation 4 system, bringing Kratos’ epic journey of vengeance to life with stunning 1080p visuals and 60fps gameplay.',
    categories: ['Action'],
    thumbnail: 'https://wallpaperaccess.com/full/788572.png',
    size: '23 GB',
    releaseYear: '2015',
    images: [
      'https://wallpaperaccess.com/full/788572.png',
      'https://preview.redd.it/god-of-war-2005-cover-art-recreation-in-gow-r-valhalla-v0-t855bc6xtb7c1.jpg?width=640&crop=smart&auto=webp&s=8816487981ea332eb56f20399493e523db6c24c4',
      'https://tech4gamers.com/wp-content/uploads/2023/12/God-of-War-Trilogy-2.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/qKogMfIAAkY',
    shorts: [
      'https://www.youtube.com/embed/J77_sLPnFDs',
      'https://www.youtube.com/embed/eYvvWMKxgLc',
      'https://www.youtube.com/embed/Ve-sXqiG3Q8'
    ]
  },
  {
    id: 'aoe3',
    title: 'Age of Empires III: Definitive Edition',
    description: 'Command civilizations from across Europe, the Americas, and Asia. Features remastered 4K graphics, new civilizations, and a fully remastered soundtrack.',
    categories: ['Action'],
    thumbnail: 'https://steamah.com/wp-content/uploads/2020/10/1603009052-850x478.jpg',
    size: '21 GB',
    releaseYear: '2020',
    images: [
      'https://steamah.com/wp-content/uploads/2020/10/1603009052-850x478.jpg',
      'https://images7.alphacoders.com/398/thumbbig-398405.webp',
      'https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_age_of_empires_3_04_1680x1050.jpg&height=450&width=800&fill-to-fit&sharpen'
    ],
    videoUrl: 'https://www.youtube.com/embed/fCcRNUlE7ek',
    shorts: [
      'https://www.youtube.com/embed/YJaLPbF5PdY',
      'https://www.youtube.com/embed/e3Ki6rs7JCk',
      'https://www.youtube.com/embed/ddLOzQpuI2o'
    ]
  },
  {
    id: 'gta-trilogy',
    title: 'GTA: The Trilogy – The Definitive Edition',
    description: 'Three iconic cities, three epic stories. Play the genre-defining classics of the original Grand Theft Auto Trilogy: GTA III, Vice City, and San Andreas.',
    categories: ['Open World'],
    thumbnail: 'https://wallpaperaccess.com/full/7841395.jpg',
    size: '24 GB',
    releaseYear: '2021',
    images: [
      'https://wallpaperaccess.com/full/7841395.jpg',
      'https://media-rockstargames-com.akamaized.net/mfe-r19/prod/__common/img/c37f2dbd02b15d29abfce91294f29403.jpg',
      'https://wallpaperaccess.com/full/7841403.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/2BFhjfqCcis',
    shorts: [
      'https://www.youtube.com/embed/U1s6sgfTRM4'
    ]
  },
  {
    id: 'castlevania-belmonts-curse',
    title: "Castlevania: Belmont's Curse",
    description: "An epic return to the legendary vampire-hunting saga. Master the Whip and explore a cursed castle filled with gothic horrors and ancient secrets.",
    categories: ['Action'],
    thumbnail: 'https://www.metacritic.com/a/img/resize/1a73e028f22e5e8815c44f7bdb03bb57886d0740/catalog/provider/7/2/7-1791873931.jpg?auto=webp&fit=contain&height=480&quality=70',
    size: '5 GB',
    releaseYear: '2025',
    images: [
      'https://www.metacritic.com/a/img/resize/1a73e028f22e5e8815c44f7bdb03bb57886d0740/catalog/provider/7/2/7-1791873931.jpg?auto=webp&fit=contain&height=480&quality=70',
      'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.0/store/software/switch/70010000116851/7a387161a475070cd7a109f32420f223ba6a9eb2296568c5bba28ca9254f6d79',
      'https://media.gamestop.com/i/gamestop/20033149_SCR02?w=1256&h=664&fmt=auto'
    ],
    videoUrl: 'https://www.youtube.com/embed/zdqKYXa2pUI',
    shorts: [
      'https://www.youtube.com/embed/sNrvFqPYmac'
    ]
  },
  {
    id: 'toy-story-adventure',
    title: "Toy Story",
    description: "Join Woody, Buzz, and the rest of the gang in a magical adventure that brings the beloved Pixar world to life. Explore Andy's room and beyond!",
    categories: ['Adventure'],
    thumbnail: 'https://i.pinimg.com/originals/1b/d3/a2/1bd3a2d351e0a1fb8c30887e92bb477f.jpg',
    size: '4 GB',
    releaseYear: '2024',
    images: [
      'https://i.pinimg.com/originals/1b/d3/a2/1bd3a2d351e0a1fb8c30887e92bb477f.jpg',
      'https://m.media-amazon.com/images/M/MV5BZTVkNmZkMzAtYmI0Mi00MDY4LWE4NTctNjI3MzY5MmMxZDU3XkEyXkFqcGc@.jpg',
      'https://i.ebayimg.com/images/g/quoAAeSwL2Bqz~Dp/s-l1200.webp'
    ],
    videoUrl: 'https://www.youtube.com/embed/97Ai2QQ3kIE',
    shorts: [
      'https://www.youtube.com/embed/_8fa81Spo3s'
    ]
  },
  {
    id: 'bloodborne',
    title: "Bloodborne",
    description: "A terrifying action RPG from the creators of Dark Souls. Navigate the plague-ridden city of Yharnam and face nightmarish creatures in fast-paced combat.",
    categories: ['RPG'],
    thumbnail: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d84f1809-9054-430c-95fa-27b17818bcea/dfli5qm-4b933a5d-1526-4d7e-85a9-4b4984e62bcb.png/v1/fill/w_1280,h_720,q_80,strp/ps4_bloodborne_cover_by_indra135_dfli5qm-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Q4NGYxODA5LTkwNTQtNDMwYy05NWZhLTI3YjE3ODE4YmNlYS9kZmxpNXFtLTRiOTMzYTVkLTE1MjYtNGQ3ZS04NWE5LTRiNDk4NGU2MmJjYi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dFoZXz5RkH9hFqmMhLgLGd3WDe-wMg4lPKaXG0EEJms',
    size: '15 GB',
    releaseYear: '2015',
    images: [
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d84f1809-9054-430c-95fa-27b17818bcea/dfli5qm-4b933a5d-1526-4d7e-85a9-4b4984e62bcb.png/v1/fill/w_1280,h_720,q_80,strp/ps4_bloodborne_cover_by_indra135_dfli5qm-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Q4NGYxODA5LTkwNTQtNDMwYy05NWZhLTI3YjE3ODE4YmNlYS9kZmxpNXFtLTRiOTMzYTVkLTE1MjYtNGQ3ZS04NWE5LTRiNDk4NGU2MmJjYi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dFoZXz5RkH9hFqmMhLgLGd3WDe-wMg4lPKaXG0EEJms',
      'https://cdn.mos.cms.futurecdn.net/HYgVWfc7Vi2zK2m4QHVb6C.jpg',
      'https://wallpaperaccess.com/full/1111499.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/2Crk_GpxGQE',
    shorts: [
      'https://www.youtube.com/embed/aGECZFPjIW0'
    ]
  },
  {
    id: 'driveclub',
    title: "Driveclub",
    description: "Experience the heart-pounding thrill of high-speed racing. Connect with friends and race in a variety of stunning locations around the world.",
    categories: ['Race'],
    thumbnail: 'https://wallpaperaccess.com/full/4391122.jpg',
    size: '10 GB',
    releaseYear: '2014',
    images: [
      'https://wallpaperaccess.com/full/4391122.jpg',
      'https://i.redd.it/4a3hp4r1phyh1.png',
      'https://i.redd.it/iktxq7xdcdwh1.png'
    ],
    videoUrl: 'https://www.youtube.com/embed/zsJ2BUliEtk',
    shorts: [
      'https://www.youtube.com/embed/WvbDZWROJgI',
      'https://www.youtube.com/embed/wdHfMkKbF3k',
      'https://www.youtube.com/embed/ilkRTK3DYas'
    ]
  },
  {
    id: 'onimusha-sword',
    title: 'Onimusha: Way of the Sword',
    description: 'Master the art of the blade and unleash powerful oni magic in this epic return to the Onimusha series. Set in feudal Japan, battle through legions of demons to restore peace to the land.',
    categories: ['Action'],
    thumbnail: 'https://eu-central-1-gamescom.graphassets.com/AMwDHZTUSMaIlRlMFLL7Qz/resize=w:1120,h:524,fit:crop/sharpen=amount:1/output=format:webp,quality:95/cms6312fs5ao507urglj3e8rp',
    size: '40 GB',
    releaseYear: '2026',
    images: [
      'https://eu-central-1-gamescom.graphassets.com/AMwDHZTUSMaIlRlMFLL7Qz/resize=w:1120,h:524,fit:crop/sharpen=amount:1/output=format:webp,quality:95/cms6312fs5ao507urglj3e8rp',
      'https://wallpaperaccess.com/full/53251689.png',
      'https://images.igdb.com/igdb/image/upload/t_720p/scus46.png'
    ],
    videoUrl: 'https://www.youtube.com/embed/W9Ct29FeMak',
    shorts: [
      'https://www.youtube.com/embed/g31vqrkiqAQ',
      'https://www.youtube.com/embed/s2uTCOXkAlI'
    ]
  }
];
