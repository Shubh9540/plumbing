import React from 'react';
import { PlumbingTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function ServicesPage() {
  const templateData: PlumbingTemplateData = rawData;
  const sectionData = templateData?.categories?.Plumbing?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return <div className="text-black p-10">Loading Data...</div>;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.PlumbingTopBar1} logoData={sectionData.Header?.variants?.PlumbingHeader1} />
      <Header data={sectionData.Header?.variants?.PlumbingHeader1} />
      <Breadcrumb data={commonData.servicesBreadcrumb} />
      
      {/* Services Section */}
      <ServicesSection data={sectionData.Services?.variants?.PlumbingServices1} hideButton={true} />

      {/* Process Section */}
      <ProcessSection data={sectionData.Process?.variants?.PlumbingProcess1} />

      <Footer data={commonData.Footer} />
    </main>
  );
}
