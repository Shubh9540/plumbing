'use client';
import React from 'react';
import { AboutUsData } from '@/types/templates.types';
import Link from 'next/link';
import { FiTool, FiArrowRight } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FiTool': return <FiTool />;
    case 'FiCheckCircle': return <FaCheckCircle />;
    default: return <FiTool />;
  }
};

export const AboutUsSection = ({ data, hideButton = false }: { data?: AboutUsData, hideButton?: boolean }) => {
  if (!data) return null;

  return (
    <section className="w-full py-8 lg:py-12 bg-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <img src={data.bgImage} alt="Background" className="w-full h-full object-cover opacity-60" />
      </div>

      <div className="max-w-[1250px] mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Subtitle Pill */}
          <div className="inline-flex items-center gap-2 bg-[#f4f1f8] px-4 py-2 rounded-full mb-6 self-start">
            <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full" />
            <h4 className="text-[var(--color-primary)] font-bold text-sm">
              {data.subtitle}
            </h4>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-[var(--color-primary)] leading-tight mb-6">
            {data.title1} <br />
            <span className="text-[#3f1956]">{data.title2}</span>
          </h2>

          <p className="text-[#4a4a4a] mb-8 leading-relaxed text-sm md:text-base">
            {data.description}
          </p>

          {/* Features Box */}
          <div className="flex flex-col sm:flex-row border border-[#eee9f2] rounded-2xl p-6 gap-6 mb-8 bg-white shadow-sm">
            {data.features.map((feat, index) => (
              <React.Fragment key={feat.id}>
                <div className="flex-1 flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#f4f1f8] rounded-2xl flex items-center justify-center text-[#3f1956] text-2xl flex-shrink-0">
                    {renderIcon(feat.icon)}
                  </div>
                  <span className="text-sm font-bold text-[#051024] leading-snug">
                    {feat.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br /></React.Fragment>)}
                  </span>
                </div>
                {index === 0 && (
                  <div className="hidden sm:block w-px bg-[#eee9f2] self-stretch" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Checklists */}
          {data.checklists && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {data.checklists.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#3f1956] text-xl flex-shrink-0" />
                  <span className="text-sm text-[#4a4a4a] font-medium">{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            {!hideButton && (
              <Link href={data.button.url} className="bg-[#3f1956] text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-[var(--color-primary)] transition-colors duration-300 flex items-center gap-2 text-sm whitespace-nowrap">
                {data.button.text.replace('->', '').trim()}
                <FiArrowRight />
              </Link>
            )}

            {data.avatars && data.customersText && (
              <div className="flex items-center gap-4 border-l border-[#eee9f2] pl-6">
                <div className="flex -space-x-3">
                  {data.avatars.map((avatar, i) => (
                    <img key={i} src={avatar} alt="Customer" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm bg-gray-100" />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="block font-bold text-[var(--color-primary)] text-xl leading-none mb-1">
                    {data.customersText.split('\n')[0]}
                  </span>
                  <span className="text-[#4a4a4a] font-medium text-xs">
                    {data.customersText.split('\n')[1]}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Images */}
        <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] aspect-[4/5] xl:aspect-[4/4.5]">
            {/* Main Image Container */}
            <div className="w-full h-full rounded-[40px] lg:rounded-[50px] overflow-hidden shadow-xl bg-[var(--color-primary)] relative">
              <img
                src={data.imageMain}
                alt={data.title1}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Vertical Badge (Top Right) */}
            <div className="absolute top-8 -right-4 sm:top-12 sm:-right-8 bg-[#3f1956] w-20 sm:w-24 py-4 sm:py-5 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl z-20">
              <div className="mb-1 text-white text-2xl sm:text-3xl">
                <FiTool />
              </div>
              <span className="text-white font-extrabold text-xl sm:text-2xl leading-none mb-1">
                {data.badgeText1}
              </span>
              <span className="text-white/80 font-medium text-[9px] sm:text-[11px] leading-tight">
                {data.badgeText2.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
              </span>
            </div>

            {/* Small Image (Bottom Right) */}
            {data.imageSmall2 && (
              <div className="absolute bottom-6 -right-4 sm:bottom-10 sm:-right-10 w-44 sm:w-56 lg:w-64 rounded-2xl overflow-hidden border-[4px] sm:border-[6px] border-white shadow-2xl z-20">
                <img
                  src={data.imageSmall2}
                  alt="Work"
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
