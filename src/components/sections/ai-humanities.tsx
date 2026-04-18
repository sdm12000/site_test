"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionBadge } from "@/components/ui/section-badge";
import {
  Brain,
  BookOpen,
  MessageCircle,
  PenLine,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI 맞춤 학습 경로",
    desc: "AI가 개인별 인문학 학습 여정을 설계하고, 학습자의 관심사와 수준에 맞는 최적의 커리큘럼을 제공합니다.",
    iconBg: "bg-accent/10 text-accent group-hover:bg-accent",
  },
  {
    icon: BookOpen,
    title: "고전 텍스트 AI 분석",
    desc: "동서양 고전을 AI와 함께 깊이 있게 탐구하며 현대적 의미를 발견합니다.",
    iconBg: "bg-secondary/10 text-secondary group-hover:bg-secondary",
  },
  {
    icon: MessageCircle,
    title: "실시간 대화형 학습",
    desc: "AI 튜터와의 소크라테스식 대화를 통해 비판적 사고력을 확장합니다.",
    iconBg: "bg-tertiary/10 text-tertiary group-hover:bg-tertiary",
  },
  {
    icon: PenLine,
    title: "성찰 저널 AI 코칭",
    desc: "AI가 성찰 과정을 돕는 개인 코칭으로 자기 이해를 심화합니다.",
    iconBg: "bg-secondary/10 text-secondary group-hover:bg-secondary",
  },
  {
    icon: Users,
    title: "커뮤니티 학습 매칭",
    desc: "AI가 비슷한 관심사의 학습 동반자를 연결하여 함께 성장하는 연대의 경험을 제공합니다.",
    iconBg: "bg-accent/10 text-accent group-hover:bg-accent",
  },
];

export function AiHumanitiesSection({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section
      id="ai-humanities"
      className="relative py-24 md:py-32 section-gradient-cool"
    >
      <div className="mx-auto max-w-6xl px-6">
        {!hideHeader && (
          <FadeIn className="text-center">
            <SectionBadge>AI x Humanities</SectionBadge>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              고전의 지혜를 AI로 만나다
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-foreground-muted leading-relaxed">
              사회적 구조와 문화적 트렌드가 급변함에 따라, 개인의 독창성과 내면적 가치는
              표준화된 기준이나 외부적 기대에 밀려 희미해지고 있습니다.
              이러한 시대에 고전 인문학을 기반으로 인간의 본질과 가치를 깊이 탐구하는 여정을 제공합니다.
            </p>
          </FadeIn>
        )}

        {/* Feature grid — top row 3, bottom row 2 centered */}
        <div className="mt-14 md:mt-18 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.slice(0, 3).map((feature, i) => {
              const Icon = feature.icon;
              return (
                <FadeIn key={feature.title} delay={0.1 * i}>
                  <div className="group rounded-2xl bg-surface p-7 md:p-8 shadow-lg shadow-foreground/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full border border-transparent hover:border-border">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBg} transition-all duration-300 group-hover:text-white group-hover:shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:max-w-[66.666%] md:mx-auto">
            {features.slice(3, 5).map((feature, i) => {
              const Icon = feature.icon;
              return (
                <FadeIn key={feature.title} delay={0.1 * (i + 3)}>
                  <div className="group rounded-2xl bg-surface p-7 md:p-8 shadow-lg shadow-foreground/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full border border-transparent hover:border-border">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBg} transition-all duration-300 group-hover:text-white group-hover:shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground-muted leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
