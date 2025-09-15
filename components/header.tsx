import { cn } from '@/lib/utils';

interface HeaderProps {
  image?: string;
  maintext: string;
  subtext?: string;
  children?: React.ReactNode;
}

export const Header = ({ image, maintext, subtext, children }: HeaderProps) => {
  return (
    <div
      className={cn(
        'relative h-[60vh] w-full px-10 py-20 flex flex-col justify-end space-y-2 overflow-hidden'
      )}
    >
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      <div className="absolute inset-0 bg-blue-500/60" />

      {/* Content */}
      <div className="relative z-10">
        <p className="text-8xl max-w-6xl text-white capitalize font-semibold tracking-tighter">
          {maintext}
        </p>
        {subtext && <p className="text-white font-light text-3xl">{subtext}</p>}
        {children && children}
      </div>
    </div>
  );
};
