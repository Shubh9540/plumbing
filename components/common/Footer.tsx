'use client';
import React, { useEffect, useState } from 'react';
import { FooterData } from '@/types/templates.types';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaChevronRight, FaArrowUp } from 'react-icons/fa';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    case 'FaYoutube': return <FaYoutube />;
    default: return null;
  }
};

export const Footer = ({ data }: { data?: FooterData }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!data) return null;

  return (
    <footer className="w-full relative mt-8">
      
      {/* Main Content Area */}
      <div className="bg-[#fcfaff] pt-12 pb-8">
        <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Column 1: Brand & Social */}
            <div>
              <img src="/main logo/logo.png" alt={data.logoAlt} className="h-16 object-contain mb-6" />
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {data.description}
              </p>
              <div className="flex items-center gap-3">
                {data.socialLinks.map(social => (
                  <Link 
                    key={social.id} 
                    href={social.url} 
                    className="w-10 h-10 rounded-full bg-[#3f1956] flex items-center justify-center text-white hover:bg-[#6b21a8] hover:scale-110 transition-all shadow-md"
                  >
                    {renderSocialIcon(social.icon)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-[#051024] mb-6">Quick Links</h3>
              <div className="w-8 h-1 bg-[#3f1956] mb-6 rounded-full"></div>
              <ul className="flex flex-col gap-4">
                {data.quickLinks.map(link => (
                  <li key={link.id}>
                    <Link href={link.url} className="text-gray-600 text-sm hover:text-[#3f1956] transition-colors flex items-center gap-2 font-medium">
                      <FaChevronRight className="text-[#3f1956] text-xs" /> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div>
              <h3 className="text-xl font-bold text-[#051024] mb-6">Our Services</h3>
              <div className="w-8 h-1 bg-[#3f1956] mb-6 rounded-full"></div>
              <ul className="flex flex-col gap-4">
                {data.servicesLinks.map(link => (
                  <li key={link.id}>
                    <Link href={link.url} className="text-gray-600 text-sm hover:text-[#3f1956] transition-colors flex items-center gap-2 font-medium">
                      <FaChevronRight className="text-[#3f1956] text-xs" /> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h3 className="text-xl font-bold text-[#051024] mb-6">Contact Us</h3>
              <div className="w-8 h-1 bg-[#3f1956] mb-6 rounded-full"></div>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f0e6f7] flex items-center justify-center text-[#3f1956] shrink-0 mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#051024] text-sm">Our Location</h5>
                    <p className="text-gray-600 text-sm mt-1">{data.contactInfo.address}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f0e6f7] flex items-center justify-center text-[#3f1956] shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#051024] text-sm">Call Us</h5>
                    <p className="text-gray-600 text-sm mt-1">{data.contactInfo.phone}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f0e6f7] flex items-center justify-center text-[#3f1956] shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#051024] text-sm">Email Us</h5>
                    <p className="text-gray-600 text-sm mt-1">{data.contactInfo.email}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f0e6f7] flex items-center justify-center text-[#3f1956] shrink-0 mt-1">
                    <FaClock />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#051024] text-sm">{data.hoursTitle}</h5>
                    <p className="text-gray-600 text-sm mt-1">
                      {data.hoursDays} {data.hours.split('\n')[0]} <br />
                      {data.hours.split('\n')[1]}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Wavy SVGs at the bottom of the white area */}
      <div className="w-full leading-none border-0 m-0 bg-[#fcfaff]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          <path d="M0,0 C240,120 480,120 720,60 C960,0 1200,0 1440,60 L1440,120 L0,120 Z" fill="#efe6f7" />
          <path d="M0,60 C320,150 420,0 840,60 C1260,120 1440,40 1440,40 L1440,120 L0,120 Z" fill="#291038" />
        </svg>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#291038] py-5">
        <div className="max-w-[1250px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-4 text-center">
          <p className="text-gray-300 text-sm">
            {data.copyrightText}
          </p>
        </div>
      </div>

      {/* Fixed Scroll To Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#6b21a8] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(107,33,168,0.4)] hover:bg-[#86198f] hover:-translate-y-1 transition-all duration-300 animate-fade-in"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

    </footer>
  );
};
