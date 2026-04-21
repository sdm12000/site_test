"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionBadge } from "@/components/ui/section-badge";

const pillars = [
  {
    title: "자기 객관화",
    sub: "메타 인지",
    desc: "나를 객관적으로 바라보는 힘을 키워 자기 이해의 깊이를 더합니다.",
    color: "bg-accent",
    shadow: "shadow-accent/20 group-hover:shadow-accent/30",
  },
  {
    title: "고전적 성찰",
    sub: "가치 재정립",
    desc: "동서양 고전을 통해 흔들리지 않는 삶의 가치관을 세웁니다.",
    color: "bg-secondary",
    shadow: "shadow-secondary/20 group-hover:shadow-secondary/30",
  },
  {
    title: "자기 효능감",
    sub: "실천력 강화",
    desc: "작은 실천의 성공 경험이 쌓여 큰 변화의 원동력이 됩니다.",
    color: "bg-tertiary",
    shadow: "shadow-tertiary/20 group-hover:shadow-tertiary/30",
  },
  {
    title: "연대감 경험",
    sub: "수용적 관계",
    desc: "함께 걷는 동반자와의 관계 속에서 진정한 성장을 경험합니다.",
    color: "bg-accent",
    shadow: "shadow-accent/20 group-hover:shadow-accent/30",
  },
];

export function ProgramSection({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section
      id="program"
      className="relative py-24 md:py-32 section-gradient-warm"
    >
      <div className="mx-auto max-w-6xl px-6">
        {!hideHeader && (
          <FadeIn className="text-center">
            <SectionBadge>Step-Up Project</SectionBadge>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              작은 전진이 만드는 큰 변화
            </h2>
            <p className="mt-4 mx-auto max-w-3xl text-foreground-muted leading-relaxed">
              &lsquo;스텝 업(Step-Up) 프로젝트&rsquo;는 큰 변화보다 &lsquo;작은 전진&rsquo;에 의미를 두며
              단계를 올려가는 성장을 지향합니다. 청년들 스스로 자신의 가능성을 발견해갈 수 있도록
              인문학 기반의 교육 프로그램으로 설계되었으며,{" "}
              <strong className="text-foreground">작은 실천을 통해 현실 속에서 삶의 변화를 만들어가는 것</strong>을
              목표로 합니다.
            </p>
          </FadeIn>
        )}

        {/* 4 Pillars */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={0.12 * i}>
              <motion.div
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative flex flex-col items-center"
              >
                <div className={`flex h-32 w-32 md:h-40 md:w-40 items-center justify-center rounded-full ${pillar.color} text-white shadow-lg ${pillar.shadow} transition-shadow group-hover:shadow-xl`}>
                  <div className="text-center px-3">
                    <p className="font-display text-base md:text-lg font-bold leading-snug">
                      {pillar.title}
                    </p>
                    <p className="mt-1 text-xs md:text-sm opacity-80">
                      ({pillar.sub})
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-sm text-foreground-muted text-center leading-relaxed max-w-[180px]">
                  {pillar.desc}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Goal statement */}
        <FadeIn delay={0.6} className="mt-16 text-center">
          <div className="inline-block rounded-2xl bg-white/60 backdrop-blur-sm px-8 py-5 shadow-sm">
            <p className="text-lg md:text-xl text-foreground font-display font-bold">
              스텝업은 완벽한 사람이 아니라
              <br className="md:hidden" />{" "}
              <span className="text-accent">&lsquo;움직일 준비가 된 사람&rsquo;</span>을
              기다립니다
            </p>
            <p className="mt-2 text-sm text-foreground-muted">
              당신의 한 걸음은 곧, 누군가의 새로운 시작이 될 수 있습니다.
              그리고 그 시작은 함께 걷는 모두를 성장하게 합니다.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
