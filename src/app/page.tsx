import HomeClient from './home-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ALKADI GAMING | Buy Your Games Easy, Cheap, and Fast',
  description: 'Discover a new world of games on our site, where excitement and detail come together in a unique experience. Browse our catalog for unbeatable prices in Lebanon.',
};

export default function HomePage() {
  return <HomeClient />;
}
