"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionBadge } from "@/components/ui/section-badge";
import { TrendingUp, AlertTriangle, HeartCrack } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "225%",
    label: "청년 우울증 환자 수 증가",
    sub: "2014 → 2023",
  },
  {
    icon: AlertTriangle,
    value: "72.3%",
    label: "고립·은둔 청년 비율",
    sub: "15-24세 기준",
  },
  {
    icon: HeartCrack,
    value: "50.4만",
    label: "'위였음' 청년층 추이",
    sub: "2025년 기준",
  },
];

export function AboutSection({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {!hideHeader && (
          <FadeIn className="text-center">
            <SectionBadge>About Us</SectionBadge>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              새로운 교육의 방향을 제시합니다
            </h2>
          </FadeIn>
        )}

        <FadeIn delay={0.2} className="mt-12 md:mt-16">
          <div className="mx-auto max-w-5xl rounded-3xl bg-surface p-8 md:p-12 shadow-xl shadow-accent/5 border border-border/30">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-xs font-medium tracking-widest text-accent uppercase">
                  global youth organization
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-accent">
                  Quantum Leap Institute
                </h3>
                <p className="mt-4 text-foreground-muted leading-relaxed">
                  유럽에서 시작된 글로벌 청년 교육 기관 QLI는 UN이 제시한
                  지속가능발전목표(SDGs) 중 SDG 4 &lsquo;양질의 교육&rsquo;에
                  주목하여, 한국 청년들에게 필요한 교육의 방향을 새롭게 제시합니다.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  한국 교육의 구조적 문제를 해결합니다
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  1970~80년대 산업화 시기의 국가 주도 교육 시스템으로 인해 대학입시 중심 체제와
                  통제형 교육 기조가 지금까지 유지되면서 교육의 획일화, 자기 탐색 기회 부족,
                  극심한 경쟁 구조, 정서적 돌봄 결핍, 삶의 방향성 상실 등의 문제가 이어지고 있습니다.
                  이제 <strong className="text-foreground">자기 주체성의 부재, 정신건강 무관심, 회피와 번아웃,
                  인간관계의 단절, 심리적 고립</strong> 등은 개인과 사회가 해결해야 할 과제가 되었습니다.
                </p>
              </div>
            </div>

            {/* Stats from reference images */}
            <div className="mt-10 pt-8 border-t border-border/50">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <FadeIn key={stat.label} delay={0.3 + 0.1 * i}>
                      <div className="text-center p-6 rounded-2xl bg-accent/5 border border-accent/8">
                        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 mb-3">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <p className="text-3xl md:text-4xl font-bold text-accent font-display">
                          {stat.value}
                        </p>
                        <p className="mt-2 text-sm font-medium text-foreground">
                          {stat.label}
                        </p>
                        <p className="mt-0.5 text-xs text-foreground-muted">{stat.sub}</p>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
