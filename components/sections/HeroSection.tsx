import React from 'react';
import { HeroData } from '@/types/templates.types';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export const HeroSection = ({ data }: { data?: HeroData }) => {
  if (!data) return null;

  return (
    <section className="relative isolate flex min-h-[430px] w-full items-center overflow-hidden bg-[#24102f] md:min-h-[470px] lg:min-h-[510px]">
      <img src={data.image1} alt="" aria-hidden="true" className="absolute inset-0 z-0 h-full w-full object-cover object-[62%_center]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#24102f] via-[#24102f]/95 via-45% to-[#24102f]/5" />
      <div className="absolute -left-32 -top-24 z-10 h-[650px] w-80 rotate-[28deg] border-r-[40px] border-white/[0.04] bg-white/[0.025]" />

      <div className="relative z-20 mx-auto w-full max-w-[1250px] px-5 py-12 sm:px-8 lg:py-16">
        <div className="w-full max-w-[570px]">
          <div className="mb-5 flex items-center gap-4">
            <h2 className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#eee4f4] sm:text-xs">{data.subtitle}</h2>
            <div className="h-px w-10 shrink-0 bg-[#bf78e8] sm:w-12" />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[60px]">
            <span className="block">{data.title1}</span>
            <span className="block text-[#c58be8]">{data.title2}</span>
            <span className="block">{data.title3}</span>
          </h1>
          <p className="max-w-[510px] text-sm leading-relaxed text-[#e6deeb] sm:text-base">{data.description}</p>
          {data.button && (
            <Link href={data.button.url} className="mt-6 inline-flex items-center gap-4 rounded-xl bg-[#9852ca] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7d35ae] sm:mt-7 sm:px-7 sm:py-3.5">
              {data.button.text}
              <FaArrowRight className="text-sm" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
