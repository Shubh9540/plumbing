import React from 'react';
import { ServicesData } from '@/types/templates.types';
import Link from 'next/link';
import { FiArrowRight, FiTool } from 'react-icons/fi';
import { GiPipes } from 'react-icons/gi';
import { MdPlumbing } from 'react-icons/md';
import { FaWrench, FaFire, FaBath } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'GiPipes': return <GiPipes />;
    case 'MdPlumbing': return <MdPlumbing />;
    case 'FaWrench': return <FaWrench />;
    case 'FaFire': return <FaFire />;
    case 'FaBath': return <FaBath />;
    case 'FiTool': return <FiTool />;
    default: return <FiTool />;
  }
};

export const ServicesSection = ({ data, hideButton = false }: { data?: ServicesData, hideButton?: boolean }) => {
  if (!data) return null;

  return (
    <section className="w-full py-16 lg:py-12 bg-white relative">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-[#3f1956]" />
            <h4 className="text-[#3f1956] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">
              {data.subtitle}
            </h4>
            <div className="w-12 h-[2px] bg-[#3f1956]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] leading-tight mb-1 sm:mb-2">
            {data.title1}
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3f1956] leading-tight mb-6">
            {data.title2}
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {data.services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group overflow-hidden">
              <div className="relative w-full h-48 sm:h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#3f1956] w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                  {renderIcon(service.icon)}
                </div>
              </div>

              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-extrabold text-[var(--color-primary)] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <Link href={service.url} className="flex items-center gap-3 w-fit group/link">
                  <span className="text-[#3f1956] font-bold text-sm">Read More</span>
                  <div className="w-7 h-7 rounded-full bg-[#3f1956] flex items-center justify-center text-white group-hover/link:bg-[var(--color-primary)] transition-colors">
                    <FiArrowRight className="text-sm" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button (if any) */}
        {!hideButton && data.button && (
          <div className="flex justify-center mt-10 lg:mt-12">
            <Link href={data.button.url} className="bg-[#3f1956] text-white font-bold px-8 py-3.5 rounded-full flex items-center gap-3 hover:bg-[var(--color-primary)] transition-colors duration-300 shadow-md">
              {data.button.text.replace('->', '')}
              <FiArrowRight className="text-lg" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};
