import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { ProgramSection } from "@/components/sections/program";
import { ValuesSection } from "@/components/sections/values";
import { VisionSection } from "@/components/sections/vision";
import { SpecialPackageSection } from "@/components/sections/special-package";
import { PageCta } from "@/components/ui/page-cta";

export const metadata: Metadata = {
  title: "프로그램",
  description:
    "인문학 기반의 교육 프로그램 ROOTIVE CLASS. 4가지 핵심 가치를 기반으로 내면의 단단한 중심을 세우는 성장 여정을 안내합니다.",
  alternates: { canonical: "/program" },
  openGraph: {
    title: "프로그램 | ROOTIVE CLASS",
    description:
      "인문학 기반의 교육 프로그램으로 설계된 루티브 클래스를 소개합니다.",
    url: "/program",
    images: ["/images/program-bg.webp"],
  },
};

export default function ProgramPage() {
  return (
    <>
      <PageHero
        badge="ROOTIVE CLASS"
        title="내면의 단단한 중심을 세우다"
        description="인문학 기반의 교육 프로그램으로 설계된 루티브 클래스를 소개합니다."
        backgroundImage="/images/program-bg.webp"
      />
      <ProgramSection hideHeader />
      <ValuesSection />
      <VisionSection />
      <SpecialPackageSection />
      <PageCta nextLabel="교재 알아보기" nextHref="/textbook" />
    </>
  );
}
