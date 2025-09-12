import { links, socialLinks } from '@/lib/links';
import Link from 'next/link';
export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container w-[1200px] mx-auto flex justify-between items-center divide-red-50">
        <div className="text-white text-lg font-bold">Victory Pastures</div>
        <div>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div>
          {socialLinks.map((social) => (
            <Link
              href={social.href}
              key={social.name}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {social.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
