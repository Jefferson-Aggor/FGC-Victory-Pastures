import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const About = () => {
  return (
    <div id="about" className="mx-auto px-24 py-32">
      <div className="flex flex-col space-y-8 justify-center items-center text-center">
        <p className="text-7xl tracking-tighter text-blue-500">
          We are <span className="font-bold">Christ Centered</span>
        </p>
        <p className="font-light tracking-tighter text-2xl">
          We believe in the Trinity. The Bible is our guide. We are led by the
          Spirit of God
        </p>
        <div className="w-34 h-2 bg-blue-500 rounded" />
      </div>

      <div className="grid grid-cols-2 mt-24">
        <div className="flex flex-col gap-y-8 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            molestiae corrupti quis, velit tenetur ipsa natus sit officiis unde
            illum qui ducimus error beatae nulla vero temporibus perspiciatis
            sunt. Rem minima quia corrupti optio similique mollitia temporibus
            vel autem reiciendis nisi voluptatem doloremque fuga, modi
            exercitationem cumque excepturi suscipit dolorum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            molestiae corrupti quis, velit tenetur ipsa natus sit officiis unde
            illum qui ducimus error beatae nulla vero temporibus perspiciatis
            sunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            molestiae corrupti quis, velit tenetur ipsa natus sit officiis unde
            illum qui ducimus error beatae nulla vero temporibus perspiciatis
            sunt. Rem minima quia corrupti optio similique mollitia temporibus
            vel autem reiciendis nisi voluptatem doloremque fuga, modi
            exercitationem cumque excepturi suscipit dolorum.
          </p>
          <Button variant={'outline'} className="inline-block">
            Read more
          </Button>
        </div>
        <div className="flex flex-col space-y-1 items-center justify-center">
          <div className="size-84 rounded-xl relative">
            <Image
              src={'/daddy_1.jpg'}
              fill
              alt="head-pastor"
              className="object-cover border-4 border-blue-200 rounded-sm"
            />
          </div>
          <p className="font-bold">Ps. Patrick Agyeman Dua</p>
          <p className="text-muted-foreground">Head pastor</p>
        </div>
      </div>
    </div>
  );
};
