import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero";
import { FadeIn } from "@/components/motion/fade-in";
import Link from "next/link";
import { ArrowRight, BookOpen, Brain, Book, Star } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Step-Up | Rise Together, Grow Together",
  },
  description:
    "유럽에서 시작된 글로벌 청년 교육 기관 QLI의 인문학 기반 교육 프로그램 Step-Up. 작은 전진이 만드는 큰 변화, 당신의 성장을 함께합니다.",
  alternates: { canonical: "/" },
};

const overviewCards = [
  {
    title: "소개",
    desc: "유럽에서 시작된 글로벌 청년 교육 기관 QLI가 제시하는 새로운 교육의 방향",
    href: "/about",
    icon: BookOpen,
    color: "bg-accent/10 text-accent",
  },
  {
    title: "프로그램",
    desc: "작은 전진이 만드는 큰 변화, 4가지 핵심 가치를 기반으로 한 성장 여정",
    href: "/program",
    icon: Brain,
    color: "bg-secondary/10 text-secondary",
  },
  {
    title: "교재",
    desc: "오랜 세월 검증된 지혜의 텍스트로 삶의 통찰력을 제공합니다",
    href: "/textbook",
    icon: Book,
    color: "bg-tertiary/10 text-tertiary",
  },
  {
    title: "후기",
    desc: "Step-Up과 함께한 사람들의 생생한 이야기",
    href: "/reviews",
    icon: Star,
    color: "bg-accent/10 text-accent",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Overview navigation cards */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Step-Up 둘러보기
            </h2>
            <p className="mt-4 text-foreground-muted max-w-xl mx-auto">
              각 페이지에서 Step-Up의 다양한 프로그램과 가치를 확인해보세요
            </p>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {overviewCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <FadeIn key={card.href} delay={0.08 * i}>
                  <Link
                    href={card.href}
                    className="group flex flex-col rounded-2xl bg-surface p-7 shadow-lg shadow-foreground/5 border border-border/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-accent/15 h-full"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.color} transition-colors`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground-muted leading-relaxed flex-1">
                      {card.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent">
                      자세히 보기
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
