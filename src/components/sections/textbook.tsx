"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionBadge } from "@/components/ui/section-badge";

const keywords = [
  {
    word: "BEST",
    desc: "오랜 세월 널리 읽히며 삶의 지침서로 인정받는 베스트셀러로, 인생에 대한 새로운 통찰력을 얻으며 지혜롭고 현명한 선택을 돕는 지침을 제공합니다.",
    gradient: "from-accent to-accent/80",
  },
  {
    word: "INFLUENCE",
    desc: "더 높은 행복의 가치와 깨달음을 얻고 세상에 긍정적인 영향력을 주는 출발점이 됩니다.",
    gradient: "from-secondary to-secondary/80",
  },
  {
    word: "BOLD",
    desc: "어려움을 겪고도 다시 일어날 수 있는 회복탄력성을 강화하는 데 도움을 줍니다.",
    gradient: "from-tertiary to-tertiary/80",
  },
  {
    word: "LIBERATE",
    desc: "진정한 인생의 자유를 찾아 더 큰 비전과 가치를 발견함으로써 자유로운 삶을 이룹니다.",
    gradient: "from-accent to-accent/80",
  },
  {
    word: "ETHICAL",
    desc: "도덕성의 근본을 제시하여 다양한 환경과 사람들을 포용하는 인간관계를 지향합니다.",
    gradient: "from-secondary to-secondary/80",
  },
];

export function TextbookSection({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section
      id="textbook"
      className="relative py-24 md:py-32 section-gradient-cool"
    >
      <div className="mx-auto max-w-6xl px-6">
        {!hideHeader && (
          <FadeIn className="text-center">
            <SectionBadge>Program Textbook</SectionBadge>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              프로그램 교재
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-foreground-muted leading-relaxed">
              오랜 세월 검증된 지혜의 텍스트를 통해 삶의 방향을 찾고,
              진정한 가치를 발견하는 여정을 함께합니다.
            </p>
          </FadeIn>
        )}

        {/* Center BIBLE badge */}
        <FadeIn delay={0.1} className="mt-14 md:mt-20 flex justify-center">
          <motion.div
            className="flex h-32 w-32 md:h-40 md:w-40 items-center justify-center rounded-full bg-accent text-white shadow-2xl shadow-accent/30"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="font-display text-2xl md:text-3xl font-bold tracking-wider">
              BIBLE
            </span>
          </motion.div>
        </FadeIn>

        {/* Connecting line decoration */}
        <div className="flex justify-center -mt-1">
          <div className="w-px h-10 bg-gradient-to-b from-accent/30 to-transparent" />
        </div>

        {/* Keyword cards — 3 top, 2 bottom centered */}
        <div className="mt-4 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {keywords.slice(0, 3).map((kw, i) => (
              <FadeIn key={kw.word} delay={0.15 + 0.1 * i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group rounded-2xl bg-surface p-7 shadow-lg shadow-foreground/5 border border-border/20 transition-all duration-300 hover:shadow-xl h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${kw.gradient} text-white font-display font-bold text-sm shadow-sm`}>
                      {kw.word.charAt(0)}
                    </span>
                    <h3 className="font-display text-base font-bold text-foreground tracking-wide">
                      {kw.word}
                    </h3>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {kw.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:max-w-[66.666%] md:mx-auto">
            {keywords.slice(3, 5).map((kw, i) => (
              <FadeIn key={kw.word} delay={0.45 + 0.1 * i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group rounded-2xl bg-surface p-7 shadow-lg shadow-foreground/5 border border-border/20 transition-all duration-300 hover:shadow-xl h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${kw.gradient} text-white font-display font-bold text-sm shadow-sm`}>
                      {kw.word.charAt(0)}
                    </span>
                    <h3 className="font-display text-base font-bold text-foreground tracking-wide">
                      {kw.word}
                    </h3>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {kw.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
