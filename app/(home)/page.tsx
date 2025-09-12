// import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Hero } from './hero';
import { About } from './about';
import { UpcomingEvents } from './upcoming-events';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <UpcomingEvents />
    </div>
  );
}
