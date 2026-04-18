"use client";

import { PageHero } from "@/components/ui/page-hero";
import { ReviewsSection } from "@/components/sections/reviews";
import { CtaSection } from "@/components/sections/cta";

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        badge="Class Review"
        title="Step-Up과 함께한 사람들의 이야기"
        description="실제 수강생들의 생생한 후기를 확인해보세요."
        gradient="from-[#fdd8d0] via-[#fde2d4] to-[#c7d2fe]"
      />
      <ReviewsSection hideHeader />
      <CtaSection />
    </>
  );
}
