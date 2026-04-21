"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionBadge } from "@/components/ui/section-badge";
import { GraduationCap } from "lucide-react";

const universities = [
  {
    name: "독일 뮌헨 대학교",
    nameEn: "Ludwig-Maximilians-Universitat Munchen",
    stat: "고전학·인문학 분야 독일 1위",
    arrow: "경영학 분야 독일 1위 학부 선정",
    desc: "유럽 최고의 인문학 전통을 이어가며 고전 교육의 현대적 가치를 탐구하고 있습니다.",
    iconBg: "bg-accent",
    statColor: "text-accent",
    arrowColor: "text-accent/70",
    lineBg: "bg-accent/40",
  },
  {
    name: "영국 케임브리지 대학교",
    nameEn: "University of Cambridge",
    stat: "철학·인문학 분야 연구와 교육 최상위권",
    arrow: "노벨상 수상자 125명 배출",
    desc: "수세기에 걸친 인문학 교육의 깊이가 세계적 리더십의 기반이 되고 있습니다.",
    iconBg: "bg-secondary",
    statColor: "text-secondary",
    arrowColor: "text-secondary/70",
    lineBg: "bg-secondary/40",
  },
  {
    name: "미국 케년 칼리지",
    nameEn: "Kenyon College",
    stat: "깊이 있는 인문학 중심 교육 환경 조성",
    arrow: "대통령부터 예술가 등 사회 전반 인재 배출",
    desc: "리버럴 아츠 교육의 정수를 통해 비판적 사고와 자기 성찰의 힘을 기르고 있습니다.",
    iconBg: "bg-tertiary",
    statColor: "text-tertiary",
    arrowColor: "text-tertiary/70",
    lineBg: "bg-tertiary/40",
  },
];

export function VisionSection() {
  return (
    <section className="relative py-24 md:py-32 section-gradient-cool">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center">
          <SectionBadge>Program Vision</SectionBadge>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            세계적 인문학 교육의 흐름과 함께
          </h2>
          <p className="mt-4 mx-auto max-w-3xl text-foreground-muted leading-relaxed">
            스텝 업은 현재까지의 성과를 꾸준히 축적하여, 그 결실이 일반 대학의 정규 강의 프로그램으로
            자리 잡도록 하는 것을 궁극적 목표로 삼고 있습니다. 또한 현재까지 축적해 온 성과를 토대로,
            이를 한층 더 발전시키기 위해 교육 프로그램 형태의 프로모션을 진행하고 있습니다.
          </p>
        </FadeIn>

        <div className="mt-14 md:mt-18 grid grid-cols-1 md:grid-cols-3 gap-8">
          {universities.map((uni, i) => (
            <FadeIn key={uni.name} delay={0.15 * i}>
              <div className="rounded-2xl bg-surface p-8 shadow-lg shadow-accent/5 h-full border border-border/20 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${uni.iconBg} text-white shadow-sm`}>
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {uni.name}
                </h3>
                <p className="text-xs text-foreground-muted">{uni.nameEn}</p>

                {/* Stat */}
                <div className="mt-4 space-y-2">
                  <p className={`text-sm font-medium ${uni.statColor}`}>{uni.stat}</p>
                  <p className={`text-xs ${uni.arrowColor} flex items-center gap-1.5`}>
                    <span className={`inline-block w-4 h-px ${uni.lineBg}`} />
                    {uni.arrow}
                  </p>
                </div>

                <p className="mt-4 text-sm text-foreground-muted leading-relaxed">
                  {uni.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
