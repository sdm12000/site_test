"use client";

import { PageHero } from "@/components/ui/page-hero";
import { AboutSection } from "@/components/sections/about";
import { PageCta } from "@/components/ui/page-cta";

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="새로운 교육의 방향을 제시합니다"
        description="유럽에서 시작된 글로벌 청년 교육 기관 QLI가 한국 청년들에게 필요한 교육을 새롭게 정의합니다."
        backgroundImage="/images/about-bg.webp"
      />
      <AboutSection hideHeader />
      <PageCta nextLabel="프로그램 알아보기" nextHref="/program" />
    </>
  );
}
