import React from 'react';
import { WhyChooseUsData } from '@/types/templates.types';
import { FiUsers, FiShield, FiThumbsUp, FiClock, FiSettings, FiStar, FiTool, FiDollarSign } from 'react-icons/fi';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FiUsers': return <FiUsers />;
    case 'FiShield': return <FiShield />;
    case 'FiThumbsUp': return <FiThumbsUp />;
    case 'FiClock': return <FiClock />;
    case 'FiSettings': return <FiSettings />;
    case 'FiStar': return <FiStar />;
    case 'FiTool': return <FiTool />;
    case 'FiDollarSign': return <FiDollarSign />;
    default: return <FiStar />;
  }
};

export const WhyChooseUsSection = ({ data }: { data?: WhyChooseUsData }) => {
  if (!data) return null;

  return (
    <section className="w-full py-8 lg:py-12 bg-[#fcfaff] relative overflow-hidden">

      {/* Background SVG Waves (Subtle) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <path d="M-100,400 C300,100 800,800 1500,400 L1500,800 L-100,800 Z" fill="#f0e6f7" opacity="0.3" />
          <path d="M-100,600 C400,200 900,900 1500,500 L1500,800 L-100,800 Z" fill="#e8dff0" opacity="0.2" />
        </svg>
      </div>

      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">

        {/* Header Content - Centered */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#3f1956] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c099d8]"></span>
            {data.subtitle}
            <span className="w-1.5 h-1.5 rounded-full bg-[#c099d8]"></span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#051024] leading-tight mb-4">
            {data.title1} <span className="text-[#3f1956]">{data.title2}</span>
          </h2>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            {data.description}
          </p>

          <div className="w-12 h-1 bg-[#3f1956] rounded-full mt-6"></div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.features.map(feat => (
            <div
              key={feat.id}
              className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 md:p-8 flex items-start gap-5 hover:shadow-md transition-shadow"
            >
              {/* Large Icon Wrapper */}
              <div className="w-20 h-20 rounded-full bg-[#f0e6f7] flex items-center justify-center shrink-0">
                <div className="w-[60px] h-[60px] rounded-full bg-[#3f1956] flex items-center justify-center text-white text-2xl shadow-inner">
                  {renderIcon(feat.icon)}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 mt-1">
                <h3 className="text-[#051024] font-bold text-lg leading-tight mb-2">
                  {feat.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
