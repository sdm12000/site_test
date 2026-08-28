"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import Link from "next/link";

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <FadeIn>
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-3xl overflow-hidden shadow-2xl shadow-black/30"
          >
            <div
              className="relative px-8 pt-12 pb-12 md:px-16 md:pt-16 md:pb-16 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/cta-bg.webp')" }}
            >
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(165deg, rgba(11,58,102,0.88) 0%, rgba(14,90,160,0.80) 35%, rgba(28,127,214,0.70) 80%, rgba(56,189,248,0.62) 100%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <p className="text-sm md:text-base text-white/70 font-display italic">
                  Reach Deep, Reach Far
                </p>
                <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  당신의 첫 걸음을
                  <br />
                  DADA CLASS와 함께
                </h2>

                <div className="mt-8 mb-8 w-16 h-px bg-white/25 mx-auto" />
                <p className="text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
                  지금 상담을 신청하고 새로운 시작을 만들어보세요.
                  <br className="hidden md:block" />
                  각자 다른 속도와 방향을 가지고 있지만, 한 걸음의 용기는 모두에게 변화를 가져옵니다.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/about"
                    className="rounded-full bg-white px-8 py-3.5 text-base font-bold text-accent-dark shadow-lg transition-all hover:shadow-xl hover:bg-white/90 hover:-translate-y-0.5"
                  >
                    무료 상담 신청
                  </Link>
                  <Link
                    href="/program"
                    className="rounded-full border border-white/30 px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
                  >
                    프로그램 자세히 보기
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
