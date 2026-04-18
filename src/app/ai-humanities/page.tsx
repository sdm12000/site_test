"use client";

import { PageHero } from "@/components/ui/page-hero";
import { AiHumanitiesSection } from "@/components/sections/ai-humanities";
import { VisionSection } from "@/components/sections/vision";
import { PageCta } from "@/components/ui/page-cta";

export default function AiHumanitiesPage() {
  return (
    <>
      <PageHero
        badge="AI x Humanities"
        title="고전의 지혜를 AI로 만나다"
        description="사회적 구조와 문화적 트렌드가 급변하는 시대에, 고전 인문학을 기반으로 인간의 본질과 가치를 깊이 탐구합니다."
        backgroundImage="/images/ai-bg.webp"
      />
      <AiHumanitiesSection hideHeader />
      <VisionSection />
      <PageCta nextLabel="강사진 보기" nextHref="/instructors" />
    </>
  );
}
