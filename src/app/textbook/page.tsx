import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { TextbookSection } from "@/components/sections/textbook";
import { PageCta } from "@/components/ui/page-cta";

export const metadata: Metadata = {
  title: "교재",
  description:
    "오랜 세월 검증된 지혜의 텍스트로 삶의 통찰을 발견하는 Step-Up 프로그램 교재를 소개합니다.",
  alternates: { canonical: "/textbook" },
  openGraph: {
    title: "교재 | Step-Up",
    description:
      "오랜 세월 검증된 지혜의 텍스트로 삶의 방향을 찾고 진정한 가치를 발견하는 여정.",
    url: "/textbook",
    images: ["/images/ai-bg.webp"],
  },
};

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
