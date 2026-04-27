'use client';

import Link from 'next/link';
import Image from 'next/image';
import profile from '../../../images/navbar-icons/profile.png';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import { Poppins } from 'next/font/google';
// Is line ko update karein
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['200', '400', '500', '600', '700'] // Jo weights aap use kar rahe hain wo sab yahan add karein
});

import logo from '../../../images/logo/logo.png';
import search from '../../../images/navbar-icons/search.png';
import user from '../../../images/navbar-icons/user.png';
import shoppingBag from '../../../images/navbar-icons/shoppingBag.png';
import Cart from './Cart';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Order Now', href: '/order' },
  { name: 'About', href: '/about' },
  { name: 'Download', href: '/download' },
];

/** Shown only on /header/nav (profile) — match compact bar: Orders + Profile */
const profilePageNavLinks = [
  { name: 'Orders', href: '/header/nav' },
  { name: 'Profile', href: '/header/nav/profilePage' },
] as const;

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const pathname = usePathname();

  const getNavLinkClass = (href: string) =>
    `text-[15px] md:text-[17x] lg:text-[20px] font-[400] ${poppins.className} transition-colors ${pathname === href ? 'text-[#E2F163]' : 'hover:text-white/80'
    }`;

  const getProfileNavLinkClass = (href: string) => {
    const base = `text-[15px] md:text-[17px] lg:text-[20px] ${poppins.className} transition-colors`;
    // Orders in profile group uses href "/" (main home); active while viewing cart/orders at /header/nav
    const isActive =
      (href === '/' && pathname === '/header/nav') ||
      (href === '/header/nav/profilePage' && pathname === '/header/nav/profilePage');
    if (isActive) {
      return `${base} text-[#E2F163] font-[500]`;
    }
    return `${base} text-white font-[500] hover:text-white/80`;
  };

  const contactLinkClass = `hidden md:block text-[15px] md:text-[17px] lg:text-[20px] font-bold transition-colors ${pathname === '/contact' ? 'text-[#E2F163]' : 'hover:text-white/80'
    }`;

  const isProfile =
    pathname === '/header/nav' || pathname === '/header/nav/profilePage';
  const userLinkClass = 'hover:opacity-80 flex items-center';

  return (
    <>
      <nav
        className={
          isProfile
            ? 'relative bg-[#F95233] text-white px-6 py-4 md:py-[25px]'
            : 'relative bg-[#F95233] text-white px-6 py-4 md:py-[25px]'
        }
      >
        <div className="max-w-[1317px] mx-auto flex items-center justify-between ">
          <div className="flex items-center w-full md:w-auto justify-between md:gap-[50px]">
            <button
              className="md:hidden"
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu size={28} />
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Shawarma Stop Logo"
                  priority
                  className="w-[140px] md:w-[170px] lg:w-[250px]"
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-11 ml-10">
              {isProfile
                ? profilePageNavLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={getProfileNavLinkClass(link.href)}
                    >
                      {link.name}
                    </Link>
                  ))
                : navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={getNavLinkClass(link.href)}
                    >
                      {link.name}
                    </Link>
                  ))}
            </div>
          </div>

          <div className="flex items-center md:gap-6 sm:gap-4 gap-3 ml-auto cursor-pointer">
            {!isProfile && (
              <>
                <Link
                  href="/contact"
                  className={contactLinkClass}
                >
                  Contact
                </Link>

                <Link href="/order" className="hover:opacity-80">
                  <Image src={search} alt="Search" className="w-[23px] h-[20px] lg:w-[26px] lg:h-[26px]" />
                </Link>
              </>
            )}
            <div className="flex items-center gap-2 ml-auto">
            {isProfile ? (
              <Link
                href="/"
                className={`${userLinkClass} gap-2`}
                title="Home"
                aria-label="Go to home"
              >
                <Image
                  src={profile}
                  alt="User Account"
                  className="w-[23px] h-[20px] lg:w-[40px] lg:h-[40px]"
                />
                <ChevronDown className="h-6 w-6 shrink-0 text-white" aria-hidden />
              </Link>
            ) : (
              <Link
                href="/header/nav"
                className={userLinkClass}
                title="Open orders and profile"
                aria-label="Open orders and profile"
              >
                <Image
                  src={user}
                  alt="User Account"
                  className="w-[23px] h-[20px] lg:w-[26px] lg:h-[26px]"
                />
              </Link>
            )}
            </div>


            {!isProfile && (
              <button
                onClick={() => setIsCartOpen(true)}
                className="hover:opacity-80 transition-transform active:scale-95 relative"
                type="button"
              >
                <Image
                  src={shoppingBag}
                  alt="Shopping Bag"
                  className="w-[23px] h-[24px] lg:w-[23px] lg:h-[29px] cursor-pointer"
                />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-[#F95233] text-[11px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                    {itemCount}
                  </span>
                )}
              </button>
            )}
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[280px] bg-[#F95233] px-6 py-6 text-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="text-lg font-[600]">Menu</span>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-5">
          {(isProfile ? profilePageNavLinks : navLinks).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[18px] font-[600] ${isProfile ? getProfileNavLinkClass(link.href) : getNavLinkClass(link.href)}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {!isProfile && (
            <Link
              href="/contact"
              className="text-[18px] font-[600]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          )}
        </div>
      </aside>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}