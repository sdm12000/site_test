"use client";

import { PageHero } from "@/components/ui/page-hero";
import { TextbookSection } from "@/components/sections/textbook";
import { PageCta } from "@/components/ui/page-cta";

export default function TextbookPage() {
  return (
    <>
      <PageHero
        badge="Program Textbook"
        title="프로그램 교재"
        description="오랜 세월 검증된 지혜의 텍스트를 통해 삶의 방향을 찾고, 진정한 가치를 발견하는 여정을 함께합니다."
        backgroundImage="/images/ai-bg.webp"
      />
      <TextbookSection hideHeader />
      <PageCta nextLabel="후기 보기" nextHref="/reviews" />
    </>
  );
}
