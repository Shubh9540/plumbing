'use client';
import React from 'react';
import { HeaderData, TopBarData } from '@/types/templates.types';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiMail, FiPhone } from 'react-icons/fi';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaXTwitter': return <FaXTwitter />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    default: return null;
  }
};

export const TopBar = ({ data, logoData }: { data?: TopBarData; logoData?: HeaderData }) => {
  if (!data || !logoData) return null;

  return (
    <div className="hidden lg:block w-full bg-[#f4f1f8]">
      <div className="max-w-[1250px] mx-auto w-full flex min-h-16 lg:min-h-[76px] items-stretch">
        <a href="/" className="flex w-48 shrink-0 items-center justify-center bg-[var(--color-primary)] px-3 sm:w-56 lg:w-[25%] [clip-path:polygon(0_0,100%_0,calc(100%-30px)_100%,0%_100%)] lg:[clip-path:polygon(0_0,100%_0,calc(100%-50px)_100%,0%_100%)]">
          <img src={logoData.logo} alt={logoData.logoAlt} className="w-full max-w-[180px] sm:max-w-[220px] lg:max-w-[260px] object-contain brightness-0 invert" />
        </a>
        <div className="flex min-w-0 flex-1 items-center justify-between gap-2 px-3 sm:px-5 lg:gap-5 lg:px-8">
          <a href={`tel:${data.phoneValue}`} className="flex min-w-0 items-center gap-2 text-[var(--color-text)] sm:gap-3 lg:gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8dff0] text-[var(--color-primary)] sm:h-9 sm:w-9 lg:h-10 lg:w-10">
              <FiPhone className="text-sm lg:text-base" />
            </span>
            <span className="truncate text-[11px] font-semibold sm:text-xs lg:text-sm"><span className="hidden sm:inline">{data.phoneLabel} </span>{data.phoneValue}</span>
          </a>
          <div className="hidden h-8 w-px shrink-0 bg-[#ded5e7] lg:block" />
          <a href={`mailto:${data.emailValue}`} className="hidden min-w-0 items-center gap-3 text-sm font-semibold text-[var(--color-text)] sm:flex lg:gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8dff0] text-[var(--color-primary)] lg:h-10 lg:w-10">
              <FiMail className="text-base" />
            </span>
            <span className="truncate">{data.emailValue}</span>
          </a>
          <div className="hidden h-8 w-px shrink-0 bg-[#ded5e7] xl:block" />
          <div className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-[var(--color-text)] xl:flex">
            <span>{data.followLabel}</span>
            <div className="flex items-center gap-2">
              {data.socialLinks?.map((link) => (
                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.icon} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8dff0] text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-white">
                  {renderIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
