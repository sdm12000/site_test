"use client";

import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProgramSection } from "@/components/sections/program";
import { ValuesSection } from "@/components/sections/values";
import { AiHumanitiesSection } from "@/components/sections/ai-humanities";
import { InstructorsSection } from "@/components/sections/instructors";
import { SpecialPackageSection } from "@/components/sections/special-package";
import { ReviewsSection } from "@/components/sections/reviews";
import { VisionSection } from "@/components/sections/vision";
import { CtaSection } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProgramSection />
        <ValuesSection />
        <AiHumanitiesSection />
        <InstructorsSection />
        <SpecialPackageSection />
        <ReviewsSection />
        <VisionSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
