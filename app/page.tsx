import React from 'react';
import { PlumbingTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { BlogsSection } from '@/components/sections/BlogsSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: PlumbingTemplateData = rawData;
  const sectionData = templateData?.categories?.Plumbing?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.PlumbingTopBar1} logoData={sectionData.Header?.variants?.PlumbingHeader1} />
      <Header data={sectionData.Header?.variants?.PlumbingHeader1} />
      <HeroSection data={sectionData.Hero?.variants?.PlumbingHero1} />
      <AboutUsSection data={sectionData.AboutUs?.variants?.PlumbingAboutUs1} />
      <ServicesSection data={sectionData.Services?.variants?.PlumbingServices1} />
      <ProcessSection data={sectionData.Process?.variants?.PlumbingProcess1} />
      <WhyChooseUsSection data={sectionData.whyChooseUs?.variants?.PlumbingWhyChooseUs1} />
      <TestimonialSection data={sectionData.Testimonials?.variants?.PlumbingTestimonials1} />
      <CtaSection data={sectionData.Cta?.variants?.PlumbingCta1} />
      <BlogsSection data={sectionData.Blogs?.variants?.PlumbingBlogs1} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
