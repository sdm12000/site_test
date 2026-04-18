"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <FadeIn>
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-3xl overflow-hidden shadow-2xl shadow-accent/20"
          >
            {/* CTA card with unified gradient */}
            <div
              className="px-8 pt-12 pb-12 md:px-16 md:pt-16 md:pb-16"
              style={{
                background:
                  "linear-gradient(165deg, #7cbce0 0%, #5ba3d9 35%, #4a8ec9 60%, #3d7fb8 100%)",
              }}
            >
              <p className="text-sm md:text-base text-white/70 font-display italic">
                Rise Together, Grow Together
              </p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                당신의 첫 걸음을
                <br />
                Step-Up과 함께
              </h2>

              <div className="mt-8 mb-8 w-16 h-px bg-white/25 mx-auto" />
              <p className="text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
                지금 상담을 신청하고 새로운 시작을 만들어보세요.
                <br className="hidden md:block" />
                각자 다른 속도와 방향을 가지고 있지만, 한 걸음의 용기는 모두에게 변화를 가져옵니다.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#"
                  className="rounded-full bg-white px-8 py-3.5 text-base font-bold text-accent shadow-lg transition-all hover:shadow-xl hover:bg-white/90 hover:-translate-y-0.5"
                >
                  무료 상담 신청
                </a>
                <a
                  href="#program"
                  className="rounded-full border border-white/30 px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
                >
                  프로그램 자세히 보기
                </a>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
