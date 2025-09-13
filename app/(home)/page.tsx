import { Hero } from './hero';
import { About } from './about';
import { UpcomingEvents } from './upcoming-events';
import { SocialMedia } from './social-media';
import { Contact } from './contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <UpcomingEvents />
      <SocialMedia />
      <Contact />
    </div>
  );
}
