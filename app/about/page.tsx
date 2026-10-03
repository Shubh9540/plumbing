import React from 'react';
import { PlumbingTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Page() {
  const templateData: PlumbingTemplateData = rawData;
  const sectionData = templateData?.categories?.Plumbing?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.PlumbingTopBar1} logoData={sectionData.Header?.variants?.PlumbingHeader1} />
      <Header data={sectionData.Header?.variants?.PlumbingHeader1} />
      <Breadcrumb data={commonData.aboutBreadcrumb} />
      
      {/* About Us Section */}
      <AboutUsSection data={sectionData.AboutUs?.variants?.PlumbingAboutUs1} hideButton={true} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection data={sectionData.whyChooseUs?.variants?.PlumbingWhyChooseUs1} />

      {/* Process Section */}
      <ProcessSection data={sectionData.Process?.variants?.PlumbingProcess1} />

      {/* Testimonials Section */}
      <TestimonialSection data={sectionData.Testimonials?.variants?.PlumbingTestimonials1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
