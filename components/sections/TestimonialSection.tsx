'use client';
import React, { useRef } from 'react';
import { TestimonialsData } from '@/types/templates.types';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

export const TestimonialSection = ({ data }: { data?: TestimonialsData }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!data || !data.testimonials) return null;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white pt-12 pb-4 relative overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#3f1956] text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c099d8]"></span>
              {data.subtitle}
              <span className="w-1.5 h-1.5 rounded-full bg-[#c099d8]"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#051024] leading-tight mb-2">
              {data.title1} <br />
              <span className="text-[#3f1956]">{data.title2}</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base mt-4">
              {data.description}
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-xl bg-[#3f1956] text-white flex items-center justify-center hover:bg-[#291038] transition-colors shadow-md"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-xl bg-[#3f1956] text-white flex items-center justify-center hover:bg-[#291038] transition-colors shadow-md"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="pt-8">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-10 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {data.testimonials.map((testi) => (
              <div
                key={testi.id}
                className="relative bg-white rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-8 pt-10 flex-shrink-0 w-[100%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center flex flex-col mt-8"
              >
                {/* Avatar (sticking out on top left) */}
                <div className="absolute top-[-32px] left-8 w-[72px] h-[72px] rounded-2xl border-[3px] border-[#3f1956] overflow-hidden bg-white shadow-lg">
                  <img src={testi.avatar} alt={testi.name} className="w-full h-full object-cover" />
                </div>

                {/* Stars on top right */}
                <div className="flex gap-1 justify-end text-[#3f1956] mb-4">
                  {[...Array(testi.rating)].map((_, i) => (
                    <FaStar key={i} size={16} />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow relative z-10">
                  "{testi.quote}"
                </p>

                {/* Footer Info */}
                <div className="flex justify-between items-end relative z-10">
                  <div>
                    <h4 className="font-bold text-[#051024] text-lg leading-tight">{testi.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">{testi.location}</p>
                  </div>
                  {/* Huge Quote Mark watermark */}
                  <div className="absolute right-0 bottom-[-16px] text-8xl leading-none font-serif text-[#ebe3f1] select-none pointer-events-none z-0">
                    ”
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
