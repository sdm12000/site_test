"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import Link from "next/link";

interface PageCtaProps {
  nextLabel?: string;
  nextHref?: string;
}

export function PageCta({
  nextLabel = "프로그램 알아보기",
  nextHref = "/program",
}: PageCtaProps) {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
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
            <div
              className="px-8 pt-12 pb-12 md:px-16 md:pt-16 md:pb-16"
              style={{
                background:
                  "linear-gradient(165deg, oklch(0.55 0.16 265) 0%, oklch(0.48 0.18 265) 35%, oklch(0.55 0.14 25) 80%, oklch(0.62 0.15 25) 100%)",
              }}
            >
              <p className="text-sm md:text-base text-white/70 font-display">
                Rise Together, Grow Together
              </p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-white">
                당신의 첫 걸음을
                <br />
                Step-Up과 함께
              </h2>

              <div className="mt-8 mb-8 w-16 h-px bg-white/25 mx-auto" />
              <p className="text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
                지금 상담을 신청하고 새로운 시작을 만들어보세요.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/reviews"
                  className="rounded-full bg-white px-8 py-3.5 text-base font-bold text-accent shadow-lg transition-all hover:shadow-xl hover:bg-white/90 hover:-translate-y-0.5"
                >
                  무료 상담 신청
                </Link>
                <Link
                  href={nextHref}
                  className="rounded-full border border-white/30 px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
                >
                  {nextLabel}
                </Link>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
