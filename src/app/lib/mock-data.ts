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

const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const MOCK_GAMES: GameEntry[] = [
  {
    id: 'lego-batman-legacy',
    title: 'LEGO Batman: Legacy of the Dark Knight',
    description: 'The Caped Crusader returns in a massive new LEGO adventure. Explore Gotham City like never before, building and battling through iconic locations. Play as a huge cast of heroes and villains in this definitive LEGO Batman experience.',
    categories: ['Adventure'],
    thumbnail: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215200/a07a9a6c0c9c1225f5b260b4f29fe40e6f099f6b/header.jpg?t=1780591479',
    size: '29 GB',
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
    title: 'Red Dead Redemption 22',
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
    size: '32 GB',
    releaseYear: '2015',
    images: [
      'https://wallpapercat.com/w/full/f/3/f/5549-3840x2160-desktop-4k-the-witcher-game-wallpaper-photo.jpg',
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2022/12/geralt-standing-front-of-kaer-morhen.jpg?q=50&fit=crop&w=825&dpr=1.5',
      'https://wallpapercat.com/w/full/b/0/1/14420-3840x2160-desktop-4k-the-witcher-game-wallpaper-photo.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/XHrskkHr958',
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
    size: '75 GB',
    releaseYear: '2025',
    images: [
      'https://wallpapercave.com/wp/wp13980393.jpg',
      'https://preview.redd.it/two-new-screenshots-of-ac-shadows-world-v0-whm6mgnqhsee1.png?width=640&crop=smart&auto=webp&s=f0d47b92ba36516422cfee81603b63221662a440',
      'https://wallpapercave.com/wp/wp13980388.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/vovkzbtYBC8',
    shorts: [
      'https://www.youtube.com/embed/zGsXns95g4I?si=L580j9Mw1LFt06O4',
      'https://www.youtube.com/embed/R5cq8FnyPFI?si=2AVA1TyCbroVAJhD',
      'https://www.youtube.com/embed/mnIMU7BH57A?si=7_p6ID87TvhjRjHV'
    ],
    isRecommended: true,
  },
  {
    id: 'ac-unity',
    title: "Assassin's Creed Unity",
    description: "Assassin's Creed Unity is an action-adventure game set in the city of Paris during one of its darkest hours, the French Revolution. Take ownership of the story by customizing your equipment to make the experience unique to you.",
    categories: ['Open World'],
    thumbnail: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/Assassins-Creed-Unity.jpg?q=50&fit=crop&w=825&dpr=1.5',
    size: '32 GB',
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
    size: '19 GB',
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
    size: '35 GB',
    releaseYear: '2018',
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
    categories: ['Open World'],
    thumbnail: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/Diesel_productv2_assassins-creed-syndicate_home_ACS-STD-2560x1440-635b7b6c86f18730071426375e7c4fe0bd831ddd.jpg?q=50&fit=crop&w=825&dpr=1.5',
    size: '20 GB',
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
    thumbnail: 'https://6a3b66710a4149112241450e.imgix.net/Forza-Horizon-5-game-cover.jpg',
    size: '82 GB',
    releaseYear: '2021',
    images: [
      'https://6a3b66710a4149112241450e.imgix.net/Forza-Horizon-5-game-cover.jpg',
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
    size: '67 GB',
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
    size: '67 GB',
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
    size: '55 GB',
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
    size: '49 GB',
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
    size: '49 GB',
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
    size: '32 GB',
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
    size: '26 GB',
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
    size: '36 GB',
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
    size: '16 GB',
    releaseYear: '2019',
    images: [
      'https://www.thumbculture.co.uk/wp-content/uploads/2021/01/residentevil2-featured-1024x597.png',
      'https://wallpapercave.com/wp/wp3815695.jpg',
      'https://wallpapercave.com/wp/wp3815709.png'
    ],
    videoUrl: 'https://www.youtube.com/embed/xtxJtQa6VAw',
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
    size: '129 GB',
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
    size: '14 GB',
    releaseYear: '2020',
    images: [
      'https://cdn.wallpapersafari.com/0/83/VhnwM9.jpg',
      'https://wallpapercave.com/wp/wp5995960.jpg',
      'https://cdn.wallpapersafari.com/81/40/uenEqr.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/BBky2uCGqtM',
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
    size: '116 GB',
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
    size: '9 GB',
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
    size: '75 GB',
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
    size: '25 GB',
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
    size: '33 GB',
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
    size: '49 GB',
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
    size: '42 GB',
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
    size: '53 GB',
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
    size: '61 GB',
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
    size: '62 GB',
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
    size: '42 GB',
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
    size: '51 GB',
    releaseYear: '2025',
    images: [
      'https://wallpapercave.com/wp/wp15596323.jpg',
      'https://wallpaperaccess.com/full/22537363.jpg',
      'https://d1lss44hh2trtw.cloudfront.net/resize?type=webp&url=https://shacknews-www.s3.amazonaws.com/assets/article/2025/10/04/ea-sports-fc_feature.jpg&width=1032&sign=wEovsnYqz4UhLyPzNR94TNIe9giQ3uVrIvUAMW2poww'
    ],
    videoUrl: 'https://www.youtube.com/embed/TSi0iJYSQ24',
    shorts: [
      'https://www.youtube.com/embed/0DhlHlUX3eA',
      'https://www.youtube.com/embed/CFwV3YNSxV8',
      'https://www.youtube.com/embed/3kJu2q4nmCM'
    ],
  },
  {
    id: 'se4',
    title: 'Sniper Elite 4',
    description: 'Discover unrivalled sniping freedom in the largest and most advanced World War 2 shooter ever built. Experience tactical third-person combat and epic longshots.',
    categories: ['Shooter'],
    thumbnail: 'https://cdn.wccftech.com/wp-content/uploads/2017/02/Sniper-Elite-4-Logo-740x382.jpg',
    size: '24 GB',
    releaseYear: '2017',
    images: [
      'https://cdn.wccftech.com/wp-content/uploads/2017/02/Sniper-Elite-4-Logo-740x382.jpg',
      'https://wallpaperaccess.com/full/2434001.jpg',
      'https://picsum.photos/seed/sniper4-gallery/1200/800'
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
    size: '21 GB',
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
    size: '32 GB',
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
    size: '36 GB',
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
    id: 'cod-v',
    title: 'Call of Duty: Vanguard',
    description: 'Rise on every front: Dogfight over the Pacific, airdrop over France, defend Stalingrad with a sniper’s precision and blast through enemies in North Africa.',
    categories: ['Shooter'],
    thumbnail: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/vanguard/overview/VanguardPDP_Hero.png?imwidth=1920',
    size: '42 GB',
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
    size: '68 GB',
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
    id: 'cod-mw',
    title: 'Call of Duty: Modern Warfare',
    description: 'The stakes have never been higher as players take on the role of lethal Tier One operators in a heart-racing saga that will affect the global balance of power.',
    categories: ['Shooter'],
    thumbnail: 'https://wallpapercave.com/wp/wp4517150.jpg',
    size: '71 GB',
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
    title: 'Call of Duty: Modern Warfare II',
    description: 'Call of Duty: Modern Warfare II drops players into an unprecedented global conflict that features the return of the iconic operators of Task Force 141.',
    categories: ['Shooter'],
    thumbnail: 'https://wallpapercave.com/wp/wp11704100.jpg',
    size: '23 GB',
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
    title: 'Call of Duty: Modern Warfare III',
    description: 'In the direct sequel to the record-breaking Call of Duty: Modern Warfare II, Captain Price and Task Force 141 face off against the ultimate threat.',
    categories: ['Shooter'],
    thumbnail: 'https://wallpapercave.com/wp/wp13127005.jpg',
    size: '39 GB',
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
    id: 'crimson',
    title: 'Crimson Desert',
    description: 'An open-world action-adventure game depicting a realistic world of mercenaries on the continent of Pywel.',
    categories: ['Open World'],
    thumbnail: 'https://wallpaperaccess.com/full/26027678.jpg',
    size: '66 GB',
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
      'https://www.youtube.com/embed/j-mCAqn0Rl0?si=OQ7JrtCOHcmpp8dO'
    ],
    isRecommended: true,
  },
  {
    id: 'spiderman-1',
    title: "Marvel's Spider-Man",
    description: "Starring one of the world's most iconic super heroes, Marvel's Spider-Man features the acrobatic abilities, improvisation and web-slinging that the wall-crawler is famous for.",
    categories: ['Open World'],
    thumbnail: 'https://i.pinimg.com/originals/db/76/43/db7643fd1a4174f7c64d19f6f7e0cec5.jpg',
    size: '38 GB',
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
    size: '28 GB',
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
    size: '59 GB',
    releaseYear: '2023',
    images: [
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659040/c62446d5c95f583a296d7f1b99045a61e2f81dea/header.jpg?t=1779710870',
      'https://wallpapercat.com/w/full/c/0/5/1658-1920x1080-desktop-1080p-hitman-game-wallpaper-photo.jpg',
      'https://wallpapers.com/images/hd/agent-47-atop-a-skyscraper-hitman-3-ivgh5xgmdm2xrv8f.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/WB2BSbaRmgY?si=4ul8utH91Rlj1EQx',
    shorts: [
      'https://www.youtube.com/embed/AQrn7rMVTLg?si=-P_jfJW4armDDmqx',
      'https://www.youtube.com/embed/rH5k5UMh2fo?si=V78BvYg-zuGc6ZKm',
      'https://www.youtube.com/embed/hq9jAZ4jC64?si=TvlVXRPPdlulEcME'
    ],
  },
  {
    id: 'gow-2018',
    title: 'God of War',
    description: 'His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.',
    categories: ['Action'],
    thumbnail: 'https://wallpapers.com/images/hd/god-of-war-kratos-and-atreus-at-river-nahx1u4rudbu55hy.jpg',
    size: '23 GB',
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
  },
  {
    id: 'fc4',
    title: 'Far Cry 4',
    description: 'Hidden in the towering Himalayas lies Kyrat, a country steeped in tradition and violence. You are Ajay Ghale. Traveling to Kyrat to fulfill your mother’s dying wish, you find yourself caught up in a civil war to overthrow the oppressive regime of dictator Pagan Min.',
    categories: ['Adventure'],
    thumbnail: 'https://i.pinimg.com/originals/d9/e0/58/d9e0588b98766b0289061221b6550552.jpg',
    size: '11 GB',
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
    size: '30 GB',
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
    size: '19 GB',
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
    description: 'Echoes of the End is a third-person action-adventure game set in a unique fantasy world. Players take on the role of Ryn, a seasoned fighter with the ability to manipulate matter.',
    categories: ['Adventure'],
    thumbnail: 'https://cdn.wccftech.com/wp-content/uploads/2025/08/Echoes-of-the-End-Review-1-min-1920x1081.jpg',
    size: '32 GB',
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
    size: '17 GB',
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
    size: '32 GB',
    releaseYear: '2022',
    images: [
      'https://wallpapers.com/images/hd/dying-light-2-cover-jkekl8ltwon8uhq9.jpg',
      'https://wallpapers.com/images/hd/dying-light-2-hanging-aiden-sxo2g6at09s4qr2m.jpg',
      'https://wallpaperaccess.com/full/2759141.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/uL6OeuicjyU?si=T5kkmfI9ahcM4-EU',
    shorts: [
      'https://www.youtube.com/embed/17ZQjpMxmV0?si=B5-rRqx3Xi1QxbD5',
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
    size: '49 GB',
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
    size: '22 GB',
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
    size: '21 GB',
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
    size: '55 GB',
    releaseYear: '2026',
    images: [
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f05a9b5b-ead5-460e-8573-73ba2fff9cde/djxpgft-a53b41e0-9850-484d-9b01-1f19e4621bc6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9mMDVhOWI1Yi1lYWQ1LTQ2MGUtODU3My03M2JhMmZmZjljZGUvZGp4cGdmdC1hNTNiNDFlMC05ODUwLTQ4NGQtOWIwMS0xZjE5ZTQ2MjFiYzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VMBTlqB1IKBkCo8rL1VBzc-d83VgjfRTf5Q3UVM6-OI',
      'https://cdn.mos.cms.futurecdn.net/7Zb4CNrHJcf3P6PcovYDy8.jpg',
      'https://cdn.mos.cms.futurecdn.net/N9ci7TJ3rSu3sJxiz9tf2D.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/POz1-EmLsTY',
    shorts: [
      'https://www.youtube.com/embed/k8aXqeQs9bE',
      'https://www.youtube.com/embed/JsAW9PqQje4',
      'https://www.youtube.com/embed/Lr25tudS-ec'
    ],
    isRecommended: true,
  },
  {
    id: 'elden-shadow',
    title: 'Elden Ring: Shadow of the Erdtree',
    description: 'The Shadow of the Erdtree expansion features an all-new story set in the Land of Shadow, imbued with mystery, perilous dungeons, and new enemies, weapons and equipment.',
    categories: ['RPG'],
    thumbnail: 'https://wallpapercave.com/wp/wp15107995.webp',
    size: '20 GB',
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
    size: '42 GB',
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
    size: '31 GB',
    releaseYear: '2025',
    images: [
      'https://wallpapercave.com/wp/wp15037173.webp',
      'https://www.cnet.com/a/img/resize/8211721e6d525ddab1e8fe795f3979a6bcb2df2d/hub/2025/04/23/8db58633-12fa-4609-a2d5-02e05d462fc7/clair-obscur-expedition-33-20250412073013.jpg?auto=webp&width=1200',
      'https://wallpapercave.com/wp/wp15335917.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/2VaLOc1FpSo',
    shorts: [
      'https://www.youtube.com/embed/9g6wftT6Igk',
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
    size: '76 GB',
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
    categories: ['2 players'],
    thumbnail: 'https://reanimal.thqnordic.com/_next/image?url=/game-sites/reanimal/editions/standard-edition.png&w=3840&q=75',
    size: '8 GB',
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
    size: '53 GB',
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
    size: '28 GB',
    releaseYear: '2024',
    images: [
      'https://wallpapercave.com/wp/wp13923945.jpg',
      'https://cdn.mos.cms.futurecdn.net/VmnpgP94cg/originals/qJWI4bkD9ZM.jpg',
      'https://m.media-amazon.com/images/M/MV5BZWYwNjVlOGEtZmI4Mi00ZGI5LWFlZjAtYzkyOGRlMzQyODMzXkEyXkFqcGc@.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/qJWI4bkD9ZM',
    shorts: [
      'https://www.youtube.com/embed/Mxd53_lcrLc',
      'https://www.youtube.com/embed/-XTdoeSE-rY',
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
    size: '69 GB',
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
    size: '21 GB',
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
    size: '32 GB',
    releaseYear: '2025',
    images: [
      'https://wallpapercave.com/wp/wp15335747.webp',
      'https://static0.thegamerimages.com/wordpress/wp-content/uploads/2025/05/ss_44047e62744c4a7201a0238994d23f3ca72649cb.jpg?q=49&fit=crop&w=825&dpr=2',
      'https://i0.wp.com/selphie1999gaming.com/wp-content/uploads/2025/08/Mafia-The-Old-Country-Photographs-Cover.png?fit=1105,560&ssl=1'
    ],
    videoUrl: 'https://www.youtube.com/embed/AMtLTi0koGE?si=xAFs78l31DO5ckZd',
    shorts: [
      'https://www.youtube.com/embed/P0qHvKYHSAI?si=wUeXzGKziuO7BHz',
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
    size: '19 GB',
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
    size: '14 GB',
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
    id: 'ferocious',
    title: 'Ferocious',
    description: 'A first-person shooter that combines tactical combat with the primal fear of prehistoric predators.',
    categories: ['Shooter'],
    thumbnail: 'https://9588947a.delivery.rocketcdn.me/wp-content/uploads/2025/12/FEROCIOUS-01-920x520.jpg',
    size: '13 GB',
    releaseYear: '2025',
    images: [
      'https://9588947a.delivery.rocketcdn.me/wp-content/uploads/2025/12/FEROCIOUS-01-920x520.jpg',
      'https://gamingbolt.com/wp-content/uploads/2025/11/ferocious-02-1024x576.jpg',
      'https://images.steamusercontent.com/ugc/9304301476222437091/DD1EB59BD93FCFB0CCBC028619021FA987A08C8A/?imw=1024&&ima=fit&impolicy=Letterbox&impolicy=Letterbox&imcolor=#000000&letterbox=false'
    ],
    videoUrl: 'https://www.youtube.com/embed/Wie5dg74coI?si=ojHdgKKzP4_zlMS6',
    shorts: [
      'https://www.youtube.com/embed/vp9KNgG0e14?si=K1GYqDf2e4PDMdzE',
      'https://www.youtube.com/embed/UPMOdKvqH3o?si=0BHbotN_vnYtPe34',
      'https://www.youtube.com/embed/1go8AUUYTq0?si=rYD_kCR00YEh-MMC'
    ]
  },
  {
    id: 'nfs-unbound',
    title: 'Need for Speed Unbound',
    description: 'The world is your canvas in Need for Speed Unbound. Prove you have what it takes to win The Grand, Lakeshore’s ultimate street racing challenge.',
    categories: ['Race'],
    thumbnail: 'https://i0.wp.com/www.qualbert.com/wp-content/uploads/2023/01/need-for-speed-unbound.jpg?resize=1170,720&ssl=1',
    size: '20 GB',
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
    size: '19 GB',
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
    size: '20 GB',
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
    size: '93 GB',
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
    size: '95 GB',
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
    size: '4 GB',
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
    size: '80 GB',
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
    size: '21 GB',
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
    description: 'A mind-bending action-adventure where reality splits and stories collide. Master the art of navigating fragmented worlds.',
    categories: ['2 players'],
    thumbnail: 'https://www.cnet.com/a/img/resize/cb70d224dabc89921354474adff3df19c569560f/hub/2025/02/14/50a4dfee-ece0-485a-8e15-873c5cdce776/splitfiction-keyart-rgb-1920x1080.jpg?auto=webp&fit=crop&height=675&width=1200',
    size: '53 GB',
    releaseYear: '2025',
    images: [
      'https://www.cnet.com/a/img/resize/cb70d224dabc89921354474adff3df19c569560f/hub/2025/02/14/50a4dfee-ece0-485a-8e15-873c5cdce776/splitfiction-keyart-rgb-1920x1080.jpg?auto=webp&fit=crop&height=675&width=1200',
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
    description: 'Embark on the craziest journey of your life in It Takes Two, a genre-bending platform adventure created purely for co-op.',
    categories: ['2 players'],
    thumbnail: 'https://images4.alphacoders.com/114/thumbbig-1148443.webp',
    size: '27 GB',
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
    thumbnail: 'https://www.greenmangaming.com/blog/wp-content/uploads/2026/05/BlogButton007FirstLight.jpg',
    size: '35 GB',
    releaseYear: '2026',
    images: [
      'https://www.greenmangaming.com/blog/wp-content/uploads/2026/05/BlogButton007FirstLight.jpg',
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
    size: '17 GB',
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
    size: '10 GB',
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
    size: '13 GB',
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
  }
];
