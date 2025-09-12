'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const carouselItems = [
  {
    id: 1,
    title: 'Sunday Service',
    content: 'Join our Sunday services',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'Teaching Service',
    content: 'This is the content for the second slide',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'Victory Hour',
    content: 'This is the content for the third slide',
    image:
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    title: 'Issachar force',
    content: 'This is the content for the fourth slide',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
  },
];

export const UpcomingEvents = () => {
  return (
    <div className="space-y-10 rounded-t-[64px] bg-blue-200 p-24 w-full h-full py-20">
      <div className=" bg-blue-200 flex flex-col space-y-4">
        <h2 className="max-w-7xl text-xl md:text-6xl tracking-tighter text-neutral-800 dark:text-neutral-200">
          Upcoming <span className="font-semibold">Services.</span>
        </h2>
        <p className="max-w-5xl">
          Join us for our upcoming worship services, special events, and
          community gatherings. Experience meaningful fellowship, inspiring
          messages, and opportunities to grow in faith together as we serve our
          community and worship God.
        </p>
      </div>
      <Carousel className="w-full">
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/4 lg:basis-1/4">
              <div className="size-80 relative rounded-lg overflow-hidden">
                <Image
                  fill
                  src={item.image}
                  alt={item.title}
                  className="object-cover"
                />
                {/* Text overlay at the bottom */}
                <div className="absolute  bottom-0 left-0 right-0 bg-black/40 text-white p-4">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.content}</p>
                </div>
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
