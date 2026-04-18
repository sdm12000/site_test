"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionBadge } from "@/components/ui/section-badge";
import { Compass, Sparkles, Heart } from "lucide-react";

const packages = [
  {
    icon: Compass,
    title: "맞춤식 개별 컨설팅",
    desc: "전문가의 마음 건강진단과 라이프 로드맵 수립을 통해 개인에게 최적화된 성장 경로를 제시합니다.",
    gradient: "from-accent/15 to-accent/5",
  },
  {
    icon: Sparkles,
    title: "체험 활동",
    desc: "외부 프로젝트와 연계하여 숨은 재능을 발휘하고, 실제 경험을 통해 성장의 기회를 넓힙니다.",
    gradient: "from-accent/10 to-secondary/10",
  },
  {
    icon: Heart,
    title: "마음 나눔 커뮤니티",
    desc: "수강생들로 구성된 지속적인 네트워킹 공간에서 서로의 성장을 응원하고 나눕니다.",
    gradient: "from-secondary/10 to-accent/10",
  },
];

export function SpecialPackageSection() {
  return (
    <section className="relative py-24 md:py-32 section-gradient-blue">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center">
          <SectionBadge>Special Gift Package</SectionBadge>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Step-Up만의 특별한 혜택
          </h2>
        </FadeIn>

        <div className="mt-14 md:mt-18 grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            return (
              <FadeIn key={pkg.title} delay={0.15 * i}>
                <div className="group rounded-3xl bg-surface p-8 md:p-10 shadow-lg shadow-accent/5 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full border border-border/20">
                  <div
                    className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${pkg.gradient} text-accent transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-accent/15`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                    {pkg.title}
                  </h3>
                  <p className="mt-3 text-sm text-foreground-muted leading-relaxed">
                    {pkg.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
