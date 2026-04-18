"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionBadge } from "@/components/ui/section-badge";
import { ArrowDown } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "고전의 가치를 탐구",
    desc: "동서양 고전을 통해 시대를 초월한 지혜와 가치를 발견합니다. 오랜 세월 널리 읽히며 삶의 지침서로 인정받는 텍스트로, 인생에 대한 새로운 통찰력을 얻습니다.",
  },
  {
    num: "02",
    title: "자신과 타인의 존재 이유를 성찰",
    desc: "깊이 있는 성찰을 통해 나와 타인의 존재 의미를 탐색합니다. 도덕성의 근본을 제시하여 다양한 환경과 사람들을 포용하는 인간관계를 지향합니다.",
  },
  {
    num: "03",
    title: "인생의 중요한 선택과 방향 설정",
    desc: "삶의 방향을 설정하고 의미 있는 선택의 기틀을 마련합니다. 진정한 인생의 자유를 찾아 더 큰 비전과 가치를 발견함으로써 자유로운 삶을 이룹니다.",
  },
];

const goals = [
  { title: "가치 발견", desc: "자신만의 독특한 가치를 발견" },
  { title: "배움의 기회 제공", desc: "잠재력을 최대한 발휘" },
  { title: "개인의 성장과\n사회의 지속 성장", desc: "함께 성장하는 사회" },
];

export function ValuesSection() {
  return (
    <section className="relative py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center">
          <SectionBadge>Education Values</SectionBadge>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            교육 핵심 가치
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-foreground-muted leading-relaxed">
            고대와 현대의 대화를 통해 새로운 통찰과 비전을 얻게 함으로써,
            풍요로운 인생을 설계할 수 있도록 길을 열어드리겠습니다.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={0.15 * i}>
              <div className="relative rounded-2xl bg-surface p-8 shadow-lg shadow-accent/5 h-full border border-border/30 transition-all hover:shadow-xl hover:-translate-y-1">
                <span className="text-5xl font-bold text-accent/10 font-display">
                  {step.num}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-foreground-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Arrow */}
        <FadeIn delay={0.5} className="mt-10 flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="h-8 w-8 text-accent/40" />
          </motion.div>
        </FadeIn>

        {/* Result */}
        <FadeIn delay={0.6}>
          <div className="mt-4 mx-auto max-w-xl rounded-2xl bg-accent py-7 px-10 text-center shadow-xl shadow-accent/20">
            <p className="font-display text-lg md:text-xl font-bold text-white leading-snug">
              인간이 가진 고유한 존엄성과 삶의 목적을 발견
            </p>
          </div>
        </FadeIn>

        {/* Program Goals */}
        <FadeIn delay={0.7} className="mt-16">
          <h3 className="text-center font-display text-xl md:text-2xl font-bold text-foreground mb-8">
            Program Goal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {goals.map((goal, i) => (
              <FadeIn key={goal.title} delay={0.8 + 0.1 * i}>
                <div className="rounded-2xl bg-accent/8 border border-accent/15 p-7 text-center h-full transition-all hover:bg-accent/12">
                  <p className="font-display text-base md:text-lg font-bold text-accent whitespace-pre-line leading-snug">
                    {goal.title}
                  </p>
                  <p className="mt-2 text-sm text-foreground-muted">{goal.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
