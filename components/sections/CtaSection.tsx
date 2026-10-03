import React from 'react';
import { CtaData } from '@/types/templates.types';
import { FaWrench, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export const CtaSection = ({ data }: { data?: CtaData }) => {
  if (!data) return null;

  return (
    <section className="bg-white py-8">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8">

        {/* Container */}
        <div className="relative rounded-[32px] overflow-hidden shadow-xl bg-[#291038]">

          {/* Background Image (covers entire right side, making it very compact) */}
          <div
            className="absolute inset-0 bg-cover bg-center md:bg-right"
            style={{ backgroundImage: `url(${data.image})` }}
          ></div>

          {/* Diagonal Overlays for the split effect */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Lighter purple diagonal stripe overlaying the image */}
            {/* Starts way off-left so the left edge is hidden, right edge forms the diagonal */}
            <div className="absolute top-0 -left-[50%] w-[150%] md:w-[115%] lg:w-[105%] h-[120%] bg-[#3f1956]/90 -skew-x-12"></div>

            {/* Solid dark purple background for the text area */}
            <div className="absolute top-0 -left-[50%] w-[150%] md:w-[110%] lg:w-[100%] h-[120%] bg-[#291038] -skew-x-12"></div>
          </div>

          {/* Content (Z-10 to stay above overlays) */}
          <div className="relative z-10 px-6 py-12 md:px-14 md:py-14 lg:px-16 lg:py-16 max-w-2xl">

            {/* Top Badge */}
            <div className="flex items-center gap-3 text-white mb-5">
              <FaWrench className="text-lg opacity-90" />
              <div className="w-[1px] h-4 bg-white/40"></div>
              <span className="text-xs font-semibold tracking-wider uppercase opacity-90">
                {data.subtitle}
              </span>
            </div>

            {/* Headlines */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              {data.title1} <br className="hidden sm:block" />
              <span className="text-[#c099d8]">{data.title2}</span>
            </h2>

            {/* Description */}
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              {data.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={data.button1.url}
                className="inline-flex items-center gap-2 bg-[#6b21a8] hover:bg-[#86198f] text-white font-bold py-3.5 px-8 rounded-full transition-colors text-sm"
              >
                {data.button1.text}
                <FaArrowRight />
              </Link>

              <Link
                href={data.button2.url}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 border border-white/30 text-white font-bold py-3.5 px-8 rounded-full transition-colors text-sm"
              >
                {data.button2.text}
                <FaArrowRight />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
