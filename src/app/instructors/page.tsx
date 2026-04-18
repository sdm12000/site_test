"use client";

import { PageHero } from "@/components/ui/page-hero";
import { InstructorsSection } from "@/components/sections/instructors";
import { PageCta } from "@/components/ui/page-cta";

export default function InstructorsPage() {
  return (
    <>
      <PageHero
        badge="Instructors"
        title="함께 걸어가는 성장의 동반자"
        description="작은 발걸음부터 뗄 수 있게 성장을 돕는 전문 강사진을 소개합니다."
        backgroundImage="/images/instructors-bg.webp"
      />
      <InstructorsSection hideHeader />
      <PageCta nextLabel="후기 보기" nextHref="/reviews" />
    </>
  );
}
