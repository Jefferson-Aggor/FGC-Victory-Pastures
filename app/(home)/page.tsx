// import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Hero } from './hero';
import { About } from './about';
import { UpcomingEvents } from './upcoming-events';
import { SocialMedia } from './social-media';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <UpcomingEvents />
      <SocialMedia />
    </div>
  );
}
