import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'wallpapercave.com',
      },
      {
        protocol: 'https',
        hostname: '**.redd.it',
      },
      {
        protocol: 'https',
        hostname: 'www.psu.com',
      },
      {
        protocol: 'https',
        hostname: '**.alphacoders.com',
      },
      {
        protocol: 'https',
        hostname: 'images.hdqwalls.com',
      },
      {
        protocol: 'https',
        hostname: 'img.uhdpaper.com',
      },
      {
        protocol: 'https',
        hostname: 'wallpapers.com',
      },
      {
        protocol: 'https',
        hostname: 'www.vgchartz.com',
      },
      {
        protocol: 'https',
        hostname: 'wallpapercat.com',
      },
      {
        protocol: 'https',
        hostname: 'static0.thegamerimages.com',
      },
      {
        protocol: 'https',
        hostname: 'static0.gamerantimages.com',
      },
      {
        protocol: 'https',
        hostname: 'pixelkin.org',
      },
      {
        protocol: 'https',
        hostname: 'getwallpapers.com',
      },
      {
        protocol: 'https',
        hostname: '**.steamstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.wallpapergap.com',
      },
      {
        protocol: 'https',
        hostname: 'gameinformer.com',
      },
      {
        protocol: 'https',
        hostname: 'wallpaperaccess.com',
      },
      {
        protocol: 'https',
        hostname: 'traxion.gg',
      },
      {
        protocol: 'https',
        hostname: '4kwallpapers.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'wallpapercg.com',
      },
      {
        protocol: 'https',
        hostname: 'www.pcgamesn.com',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: 'https',
        hostname: 't3.ftcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'cdn.displate.com',
      },
      {
        protocol: 'https',
        hostname: 'images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com',
      },
      {
        protocol: 'https',
        hostname: 'mygamingtutorials.com',
      },
      {
        protocol: 'https',
        hostname: 'www.thumbculture.co.uk',
      },
      {
        protocol: 'https',
        hostname: '**.wallpapersafari.com',
      },
      {
        protocol: 'https',
        hostname: 'eu-images.contentstack.com',
      },
      {
        protocol: 'https',
        hostname: 'www.grimdarkmagazine.com',
      },
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'www.igrandtheftauto.com',
      },
      {
        protocol: 'https',
        hostname: 'prod.assets.earlygamecdn.com',
      },
      {
        protocol: 'https',
        hostname: 'd1lss44hh2trtw.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'cdn.wccftech.com',
      },
      {
        protocol: 'https',
        hostname: 'www.callofduty.com',
      },
      {
        protocol: 'https',
        hostname: 'b2203835.smushcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'nerdybirdgames.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
    ],
  },
};

export default nextConfig;
