'use client';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface SocialMediaProps {
  src: string;
}

const instagram_links: SocialMediaProps[] = [
  { src: 'https://www.instagram.com/p/DOdh_OxAhbR/embed' },
  { src: 'https://www.instagram.com/p/DOZLSl9DKIW/embed' },
  { src: 'https://www.instagram.com/reel/DOMNVhZDHvU/embed' },
  {
    src: 'https://www.instagram.com/p/DOJjqU1jCxe/embed',
  },
  {
    src: 'https://www.instagram.com/p/DOG07pJDEtu/embed',
  },
  {
    src: 'https://www.instagram.com/p/DN6NdADgt3S/embed',
  },
];
export const SocialMedia = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center space-y-4 p-24">
      <h2 className="max-w-4xl text-xl md:text-6xl tracking-tighter text-neutral-800 dark:text-neutral-200">
        Stay
        <span className="font-semibold text-blue-500"> Connected</span>
      </h2>
      <p className="text-xl max-w-4xl">
        Follow us for daily inspiration, community updates, and fellowship
        moments as we grow together in faith
      </p>
      <Carousel
        plugins={[Autoplay({ stopOnInteraction: true })]}
        className=" w-full my-10"
      >
        <CarouselContent>
          {instagram_links.map((item) => (
            <CarouselItem key={item.src} className="md:basis-1/2 lg:basis-1/4">
              <div className="size-80 relative rounded-lg overflow-hidden">
                <iframe
                  src={item.src}
                  height="540"
                  frameBorder="0"
                  scrolling="no"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
};
