"use client";

import { PageHero } from "@/components/ui/page-hero";
import { ProgramSection } from "@/components/sections/program";
import { ValuesSection } from "@/components/sections/values";
import { SpecialPackageSection } from "@/components/sections/special-package";
import { PageCta } from "@/components/ui/page-cta";

export default function ProgramPage() {
  return (
    <>
      <PageHero
        badge="Step-Up Project"
        title="작은 전진이 만드는 큰 변화"
        description="인문학 기반의 AI 교육 프로그램으로 설계된 스텝업 프로젝트를 소개합니다."
        backgroundImage="/images/program-bg.webp"
      />
      <ProgramSection hideHeader />
      <ValuesSection />
      <SpecialPackageSection />
      <PageCta nextLabel="AI x 인문학 보기" nextHref="/ai-humanities" />
    </>
  );
}
