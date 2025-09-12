import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Black Semi-Transparent Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/90"></div>

      {/* Content that goes over the video and overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Victory Pastures
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Christ is our focus. Heaven is our ultimate goal. Join us to worship
            today!
          </p>
          <Button
            size={'lg'}
            className="bg-white text-black px-10 py-8 rounded-lg font-semibold capitalize text-xl hover:bg-gray-100 transition-colors"
          >
            Join us this weekend
          </Button>
        </div>
        <a
          href="#about"
          className="text-white absolute bottom-1 flex flex-col items-center justify-center pb-5 animate-pulse"
        >
          <p>Scroll Down</p>
          <ArrowDown />
        </a>
      </div>
    </div>
  );
};
