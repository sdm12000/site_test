import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { ReviewsSection } from "@/components/sections/reviews";
import { CtaSection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "후기",
  description:
    "Step-Up과 함께한 수강생들의 생생한 후기. 인문학 기반 교육이 만든 실제 변화의 이야기를 확인해보세요.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "후기 | Step-Up",
    description: "Step-Up과 함께한 사람들의 생생한 이야기.",
    url: "/reviews",
    images: ["/images/reviews-bg.webp"],
  },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        badge="Class Review"
        title="Step-Up과 함께한 사람들의 이야기"
        description="실제 수강생들의 생생한 후기를 확인해보세요."
        backgroundImage="/images/reviews-bg.webp"
      />
      <ReviewsSection hideHeader />
      <CtaSection />
    </>
  );
}
