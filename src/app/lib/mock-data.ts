import { PlaceHolderImages } from '@/lib/placeholder-images';

export interface GameEntry {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  images: string[];
  videoUrl: string;
  size: string;
  shorts?: string[];
}

export const CATEGORIES = ['All', 'RPG', 'Race', 'Adventure', 'Open World', 'Action', 'Shooter', 'Horror'];

const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

const NEW_SHORTS = [
  'https://www.youtube.com/embed/0d-U2QL2Qvc?si=bHpYGwiXYsGjmox8',
  'https://www.youtube.com/embed/XsaXfkpKPNM?si=jaFUTogTmJJA6Quj',
  'https://www.youtube.com/embed/ax_HkEnW_ig?si=ax_HkEnW_ig'
];

export const MOCK_GAMES: GameEntry[] = [
  {
    id: '5',
    title: 'Red Dead Redemption 2',
    description: 'Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive.',
    category: 'Open World',
    thumbnail: 'https://wallpapercave.com/wp/wp3770429.png',
    size: '69 GB',
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
    size: '32 GB',
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
    thumbnail: 'https://wallpapercave.com/wp/wp13980393.jpg',
    size: '70 GB',
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
  },
  {
    id: 'ac-unity',
    title: "Assassin's Creed Unity",
    description: "Assassin's Creed Unity is an action-adventure game set in the city of Paris during one of its darkest hours, the French Revolution. Take ownership of the story by customizing your equipment to make the experience unique to you.",
    category: 'Open World',
    thumbnail: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/Assassins-Creed-Unity.jpg?q=50&fit=crop&w=825&dpr=1.5',
    size: ' 32 GB',
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
    size: '18 GB',
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
    size: '35 GB',
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
    size: '40 GB',
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
    size: '82 GB',
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
    size: '67 GB',
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
    size: '67 GB',
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
    size: '55 GB',
    images: [
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36407bf0-7675-4fc7-953d-91ab3af07156/debwpo6-883d3fab-7062-4491-8f2e-54544d459e43.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8zNjQwN2JmMC03Njc1LTRmYzctOTUzZC05MWFiM2FmMDcxNTYvZGVid3BvNi04ODNkM2ZhYi03MDYyLTQ0OTEtOGYyZS01NDU0NGQ0NTllNDMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XKAjdSGGNfkWO8z4X11qVeUUkinK4nKdKPNqPYZWO7c',
      'https://t3.ftcdn.net/jpg/09/73/58/72/360_F_973587215_lhxTUODZnPlbm3MkZG4kPKN0vOrfFQh.jpg',
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
    size: '58 GB',
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
    category: 'RPG',
    thumbnail: 'https://wallpapers.com/images/featured/elden-ring-pictures-6r85th0gnhifsqd0.jpg',
    size: '60 GB',
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
    category: 'Adventure',
    thumbnail: 'https://mygamingtutorials.com/wp-content/uploads/2025/05/capsule_616x353-4-1.jpg?w=616',
    size: '32 GB',
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
    category: 'Action',
    thumbnail: 'https://wallpapercave.com/wp/wp1835411.jpg',
    size: '45 GB',
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
  },
  {
    id: 'fc5',
    title: 'Far Cry 5',
    description: 'Welcome to Hope County, Montana, home to a fanatical doomsday cult known as Eden\'s Gate. Stand up to cult leader Joseph Seed and his siblings, the Heralels, to spark the fires of resistance and liberate the besieged community.',
    category: 'Adventure',
    thumbnail: 'https://wallpapers.com/images/featured/far-cry-5-background-b36npu7jc7uygn0x.jpg',
    size: '40 GB',
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
    category: 'Horror',
    thumbnail: 'https://www.thumbculture.co.uk/wp-content/uploads/2021/01/residentevil2-featured-1024x597.png',
    size: '26 GB',
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
    category: 'Shooter',
    thumbnail: 'https://external-preview.redd.it/BacipTv5BtO8PH9bcn9iiAdyf8jxR1jRBTKE5bsDFGo.jpg?width=640&crop=smart&auto=webp&s=0fef5ec4e85ad25c7745cf0bdf227e87b56883f2',
    size: '150 GB',
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
    category: 'Horror',
    thumbnail: 'https://cdn.wallpapersafari.com/0/83/VhnwM9.jpg',
    size: '25 GB',
    images: [
      'https://cdn.wallpapersafari.com/0/83/VhnwM9.jpg',
      'https://wallpapercave.com/wp/wp5995960.jpg',
      'https://cdn.wallpapersafari.com/81/40/uenEqr.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/BBky2uCGqtM',
    shorts: [
      'https://www.youtube.com/embed/BBky2uCGqtM?si=_SNihscMS4ivCXD5',
      'https://www.youtube.com/embed/mNd9HPf1x5o?si=SXMU-QVzWGaVrC1J',
      'https://www.youtube.com/embed/GfCz9GVOJUE?si=d5Vdd5CfKS63ZX1B'
    ],
  },
  {
    id: 'jedi-survivor',
    title: 'Star Wars Jedi: Survivor',
    description: 'The story of Cal Kestis continues in Star Wars Jedi: Survivor, a third-person galaxy-spanning action-adventure game from Respawn Entertainment.',
    category: 'Adventure',
    thumbnail: 'https://wallpapercave.com/wp/wp12005399.jpg',
    size: '155 GB',
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
    category: 'Horror',
    thumbnail: 'https://i.redd.it/8wnn4vuu4rjb1.jpg',
    size: '30 GB',
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
    category: 'Horror',
    thumbnail: 'https://img.uhdpaper.com/wallpaper/alan-wake-2-267@1@m',
    size: '90 GB',
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
    category: 'Horror',
    thumbnail: 'https://www.grimdarkmagazine.com/wp-content/uploads/2024/11/Silent-Hill-2-Cover.jpg',
    size: '50 GB',
    images: [
      'https://www.grimdarkmagazine.com/wp-content/uploads/2024/11/Silent-Hill-2-Cover.jpg',
      'https://wallpapercave.com/wp/wp13015730.jpg',
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/10/silent-hill-2-remake-screenshots-3.jpg?q=49&fit=crop&w=450&h=225&dpr=2'
    ],
    videoUrl: 'https://www.youtube.com/embed/dlQ3Fe69I2w',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'got',
    title: 'Ghost of Tsushima',
    description: 'In the late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East. Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet.',
    category: 'Open World',
    thumbnail: 'https://images3.alphacoders.com/138/thumbbig-1387219.webp',
    size: '60 GB',
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
  },
  {
    id: 'u4',
    title: 'Uncharted 4: A Thief\'s End',
    description: 'Several years after his last adventure, retired fortune hunter Nathan Drake is forced back into the world of thieves.',
    category: 'Adventure',
    thumbnail: 'https://wallpapercave.com/wp/wp2272912.jpg',
    size: '63 GB',
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
  },
  {
    id: 'tlou1',
    title: 'The Last of Us Part I',
    description: 'In a ravaged civilization, where infected and hardened survivors run wild, Joel, a weary protagonist, is hired to smuggle 14-year-old Ellie out of a military quarantine zone.',
    category: 'Action',
    thumbnail: 'https://preview.redd.it/4k-the-last-of-us-part-1-cover-art-wallpaper-v0-3z733s5snn491.png?width=640&crop=smart&auto=webp&s=fcf82bdc024dbd42597db28d31f496ae0aded7fa',
    size: '79 GB',
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
  },
  {
    id: 'tlou2',
    title: 'The Last of Us Part II',
    description: 'Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming.',
    category: 'Action',
    thumbnail: 'https://i.pinimg.com/originals/6d/49/67/6d4967f7c66011f46dc88cad2ef17770.jpg',
    size: '95 GB',
    images: [
      'https://i.pinimg.com/originals/6d/49/67/6d4967f7c66011f46dc88cad2ef17770.jpg',
      'https://images.squarespace-cdn.com/content/v1/5f0f94f64a47900bb21e117e/1620696600821-SWBP5IZ915Z4FD9BU3Q6/Picture1.jpg',
      'https://i.redd.it/ebmyt82afuc51.png'
    ],
    videoUrl: 'https://www.youtube.com/embed/vhII1qlcZ4E',
    shorts: [
      'https://www.youtube.com/embed/zIJRUH9KRNw?si=VGeUp4ObAMCaBGYg',
      'https://www.youtube.com/embed/PImmK6WU8SI?si=4O3O94d3jPZy2Jd9',
      'https://www.youtube.com/embed/UGWg6IIko2o?si=VvfvdN2DDu5Vfc65'
    ],
  },
  {
    id: 'gtav',
    title: 'Grand Theft Auto V',
    description: 'When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld.',
    category: 'Open World',
    thumbnail: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/04/grand-theft-auto-5-biggest-changes-in-update-156.jpg?q=50&fit=crop&w=825&dpr=1.5',
    size: '110 GB',
    images: [
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/04/grand-theft-auto-5-biggest-changes-in-update-156.jpg?q=50&fit=crop&w=825&dpr=1.5',
      'https://wallpapercat.com/w/full/1/7/e/130549-1920x1080-desktop-1080p-grand-theft-auto-5-background-photo.jpg',
      'https://www.igrandtheftauto.com/content/images/small/4346-gta5-dude-wheres-the-car.jpg?etag=54ecbae6'
    ],
    videoUrl: 'https://www.youtube.com/embed/QkkoHAzjnUs',
    shorts: [
      'https://www.youtube.com/embed/oYlsmbxTVM4?si=bP3Meaz940YkrLBV',
      'https://www.youtube.com/embed/sqr0nwlcqA8?si=bP3Meaz940YkrLBV',
      'https://www.youtube.com/embed/-uiN7H4SYE4?si=dYkQClA2xXyy4w_P'
    ],
  },
  {
    id: 'hzd',
    title: 'Horizon Zero Dawn',
    description: 'In an era where Machines roam the land and mankind is no longer the dominant species, a young hunter named Aloy embarks on a journey to discover her destiny.',
    category: 'Open World',
    thumbnail: 'https://wallpapers.com/images/hd/horizon-zero-dawn-fanart-cover-sugmfb0fbmof1vns.jpg',
    size: '72 GB',
    images: [
      'https://wallpapers.com/images/hd/horizon-zero-dawn-fanart-cover-sugmfb0fbmof1vns.jpg',
      'https://i.pinimg.com/originals/2c/b9/97/2cb997a4e03c53f49fa6472ceadbbd51.jpg',
      'https://wallpapers.com/images/hd/papel-de-parede-horizon-zero-dawn-kxu12nitxfat9f9j.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/u4-FCsiF5x4',
    shorts: [
      'https://www.youtube.com/embed/u4-FCsiF5x4',
      'https://www.youtube.com/embed/Qcf8NzbxX2k',
      'https://www.youtube.com/embed/DgAFQ1leafY'
    ],
  },
  {
    id: 'fifa23',
    title: 'FIFA 23',
    description: 'Experience the pinnacle of international football with the FIFA World Cup Qatar 2022 and FIFA Women’s World Cup Australia and New Zealand 2023.',
    category: 'Action',
    thumbnail: 'https://prod.assets.earlygamecdn.com/images/FIFA-23-Cover-2.jpeg?transform=Gallery+Item+Webp',
    size: '60 GB',
    images: [
      'https://prod.assets.earlygamecdn.com/images/FIFA-23-Cover-2.jpeg?transform=Gallery+Item+Webp',
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
    category: 'Action',
    thumbnail: 'https://wallpapercave.com/wp/wp15596323.jpg',
    size: '85 GB',
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
    category: 'Shooter',
    thumbnail: 'https://cdn.wccftech.com/wp-content/uploads/2017/02/Sniper-Elite-4-Logo-740x382.jpg',
    size: '55 GB',
    images: [
      'https://cdn.wccftech.com/wp-content/uploads/2017/02/Sniper-Elite-4-Logo-740x382.jpg',
      'https://wallpaperaccess.com/full/2434001.jpg',
      'https://getwallpapers.com/wallpaper/full/9/8/5/962879-new-sniper-elite-wallpapers-1920x1080.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/lGBRAEvXZ94?si=4_-Ahqq0QN30Nz1s',
    shorts: [
      'https://www.youtube.com/embed/atYEA0FbDgc?si=rISGmJeM8wodveqh',
      'https://www.youtube.com/embed/1myPuSGZCZw?si=i7eusCNbNE01gXtE',
      'https://www.youtube.com/embed/X1tEMQHZao8?si=719f0wzWF721cwXm'
    ],
  },
  {
    id: 'wd2',
    title: 'Watch Dogs 2',
    description: 'Play as Marcus Holloway, a brilliant young hacker living in the birthplace of the tech revolution, the San Francisco Bay Area.',
    category: 'Action',
    thumbnail: 'https://getwallpapers.com/wallpaper/full/5/8/8/1077825-watch-dogs-2-wallpapers-2560x1440-windows-7.jpg',
    size: '40 GB',
    images: [
      'https://getwallpapers.com/wallpaper/full/5/8/8/1077825-watch-dogs-2-wallpapers-2560x1440-windows-7.jpg',
      'https://wallpapercave.com/wp/wp1841031.jpg',
      'https://wallpapercave.com/wp/wp1841052.jpg'
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
    category: 'Shooter',
    thumbnail: 'https://wallpaperaccess.com/full/3495792.jpg',
    size: '50 GB',
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
    category: 'Shooter',
    thumbnail: 'https://preview.redd.it/unofficial-battlefield-6-cover-art-wallpapers-3840x2160-v0-prnnp2onvgef1.png?width=640&crop=smart&auto=webp&s=eb731ab55f56ea3e8f52781113863fca066a4ab4',
    size: '100 GB',
    images: [
      'https://preview.redd.it/unofficial-battlefield-6-cover-art-wallpapers-3840x2160-v0-prnnp2onvgef1.png?width=640&crop=smart&auto=webp&s=eb731ab55f56ea3e8f52781113863fca066a4ab4',
      'https://images.hdqwalls.com/wallpapers/bthumb/the-battlefield-6-sr.jpg',
      'https://images4.alphacoders.com/722/thumbbig-722618.webp'
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
    category: 'Shooter',
    thumbnail: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/vanguard/overview/VanguardPDP_Hero.png?imwidth=1920',
    size: '95 GB',
    images: [
      'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/vanguard/overview/VanguardPDP_Hero.png?imwidth=1920',
      'https://wallpapercave.com/wp/wp9729352.jpg',
      'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/legacy/vanguard/vanguard-campaign-3.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/OQ1CwPhE8KQ',
    shorts: [
      'https://www.youtube.com/embed/OgNLHBqcm_Q',
      'https://www.youtube.com/embed/cC3yw3h3ErY',
      'https://www.youtube.com/embed/erQun_LaSC4'
    ],
  },
  {
    id: 'cod-ww2',
    title: 'Call of Duty: WWII',
    description: 'Call of Duty: WWII creates the definitive World War II next-generation experience across three different game modes: Campaign, Multiplayer, and Co-Operative.',
    category: 'Shooter',
    thumbnail: 'https://wallpapercave.com/wp/wp2259852.png',
    size: '80 GB',
    images: [
      'https://wallpapercave.com/wp/wp2259852.png',
      'https://wallpapercave.com/wp/wp2203840.png',
      'https://wallpapercave.com/wp/wp2259859.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/D4Q_XYVescc',
    shorts: [
      'https://www.youtube.com/embed/PXeUiqhQtY8',
      'https://www.youtube.com/embed/57Hs_eUDt8g',
      'https://www.youtube.com/embed/LtIw3GlH-xk'
    ],
  },
  {
    id: 'cod-mw',
    title: 'Call of Duty: Modern Warfare',
    description: 'The stakes have never been higher as players take on the role of lethal Tier One operators in a heart-racing saga that will affect the global balance of power.',
    category: 'Shooter',
    thumbnail: getImg('cod-mw-thumb'),
    size: '175 GB',
    images: [getImg('cod-mw-thumb'), 'https://picsum.photos/seed/codmw-1/1200/800'],
    videoUrl: 'https://www.youtube.com/embed/bH1lHCirCGI',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'cod-mw2',
    title: 'Call of Duty: Modern Warfare II',
    description: 'Call of Duty: Modern Warfare II drops players into an unprecedented global conflict that features the return of the iconic operators of Task Force 141.',
    category: 'Shooter',
    thumbnail: getImg('cod-mw2-thumb'),
    size: '125 GB',
    images: [getImg('cod-mw2-thumb'), 'https://picsum.photos/seed/codmw2-1/1200/800'],
    videoUrl: 'https://www.youtube.com/embed/r72GP1PIZa0',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'cod-mw3',
    title: 'Call of Duty: Modern Warfare III',
    description: 'In the direct sequel to the record-breaking Call of Duty: Modern Warfare II, Captain Price and Task Force 141 face off against the ultimate threat.',
    category: 'Shooter',
    thumbnail: getImg('cod-mw3-thumb'),
    size: '235 GB',
    images: [getImg('cod-mw3-thumb'), 'https://picsum.photos/seed/codmw3-1/1200/800'],
    videoUrl: 'https://www.youtube.com/embed/mHDEDDrGYvo',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'crimson',
    title: 'Crimson Desert',
    description: 'An open-world action-adventure game depicting a realistic world of mercenaries on the continent of Pywel.',
    category: 'RPG',
    thumbnail: getImg('crimson-thumb'),
    size: '80 GB',
    images: [getImg('crimson-hero'), getImg('crimson-thumb')],
    videoUrl: 'https://www.youtube.com/embed/tZ_G7Yp90T0',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'spiderman-1',
    title: "Marvel's Spider-Man",
    description: "Starring one of the world's most iconic super heroes, Marvel's Spider-Man features the acrobatic abilities, improvisation and web-slinging that the wall-crawler is famous for.",
    category: 'Action',
    thumbnail: getImg('spiderman-thumb'),
    size: '70 GB',
    images: [getImg('spiderman-hero'), getImg('spiderman-thumb')],
    videoUrl: 'https://www.youtube.com/embed/q4GdJVvdxko',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'miles-morales',
    title: "Marvel's Spider-Man: Miles Morales",
    description: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    category: 'Action',
    thumbnail: getImg('miles-thumb'),
    size: '50 GB',
    images: [getImg('miles-hero'), getImg('miles-thumb')],
    videoUrl: 'https://www.youtube.com/embed/gHzuHo80U2M',
    shorts: [...NEW_SHORTS],
  },
  {
    id: 'hitman-woa',
    title: 'Hitman World of Assassination',
    description: 'Enter the world of the ultimate assassin. HITMAN World of Assassination brings together the best of HITMAN, HITMAN 2 and HITMAN 3.',
    category: 'Action',
    thumbnail: getImg('hitman-thumb'),
    size: '80 GB',
    images: [getImg('hitman-hero'), getImg('hitman-thumb')],
    videoUrl: 'https://www.youtube.com/embed/R8aRCwbZU6U',
    shorts: [...NEW_SHORTS],
  }
];
