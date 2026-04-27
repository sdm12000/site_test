import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { AboutSection } from "@/components/sections/about";
import { PageCta } from "@/components/ui/page-cta";

export const metadata: Metadata = {
  title: "소개",
  description:
    "유럽에서 시작된 글로벌 청년 교육 기관 QLI(Quantum Leap Institute)가 제시하는 새로운 교육의 방향과 Step-Up의 철학을 소개합니다.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "소개 | Step-Up",
    description:
      "유럽에서 시작된 글로벌 청년 교육 기관 QLI가 제시하는 새로운 교육의 방향.",
    url: "/about",
    images: ["/images/about-bg.webp"],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="새로운 교육의 방향을 제시합니다"
        description="유럽에서 시작된 글로벌 청년 교육 기관 QLI가 한국 청년들에게 필요한 교육의 방향을 새롭게 제시합니다."
        backgroundImage="/images/about-bg.webp"
      />
      <AboutSection hideHeader />
      <PageCta nextLabel="프로그램 알아보기" nextHref="/program" />
    </>
  );
}
