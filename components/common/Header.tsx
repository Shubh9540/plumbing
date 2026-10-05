'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderData } from '@/types/templates.types';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';

export const Header = ({ data }: { data?: HeaderData }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!data) return null;

  const navLinks = [...(data.navLinksLeft || []), ...(data.navLinksRight || [])];

  return (
    <header className="relative z-40 w-full bg-white shadow-sm">
      <div className="max-w-[1250px] mx-auto w-full flex min-h-[62px] items-stretch lg:min-h-[68px]">
        <nav className="hidden flex-1 items-stretch justify-start gap-8 px-8 lg:flex lg:pl-12 xl:gap-12 xl:pl-16">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.url} className={`relative flex items-center whitespace-nowrap text-sm font-semibold transition-colors xl:text-base ${pathname === link.url ? 'text-[var(--color-primary)] after:absolute after:bottom-2 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[var(--color-primary)]' : 'text-[#171323] hover:text-[var(--color-accent)]'}`}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-1 items-center justify-between px-4 lg:hidden">
            <Link href="/" className="flex items-center">
              <img src={data.logo} alt={data.logoAlt || 'Logo'} className="h-10 object-contain" />
            </Link>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex h-10 w-10 items-center justify-center rounded-md text-xl text-[var(--color-primary)] hover:bg-[#f4f1f8]">
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          {data.contactButton && (
            <Link href={data.contactButton.url} className="hidden min-w-[220px] items-center justify-center gap-4 bg-[var(--color-primary)] px-8 text-base font-semibold text-white transition-colors hover:bg-[var(--color-accent)] lg:flex xl:min-w-[240px] lg:rounded-r-lg">
              {data.contactButton.text.replace('->', '').trim()}
              <FaArrowRight className="text-sm" />
            </Link>
          )}
        </div>
        {mobileMenuOpen && (
          <div className="absolute left-0 top-full flex max-h-[calc(100vh-64px)] w-full flex-col overflow-y-auto border-t border-[#e8e1ee] bg-white p-4 shadow-lg lg:hidden">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.url} onClick={() => setMobileMenuOpen(false)} className={`border-b border-[#eee9f2] px-2 py-3 text-sm font-semibold ${pathname === link.url ? 'text-[var(--color-primary)]' : 'text-[#171323]'}`}>
                {link.label}
              </Link>
            ))}
            {data.contactButton && (
              <Link href={data.contactButton.url} onClick={() => setMobileMenuOpen(false)} className="mt-4 flex items-center justify-center gap-3 rounded-md bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white">
                {data.contactButton.text.replace('->', '').trim()}
                <FaArrowRight />
              </Link>
            )}
          </div>
        )}
    </header>
  )
};
