"use client";

import { motion } from "framer-motion";

function Sparkle({
  className,
  delay = 0,
  char = "\u2726",
}: {
  className?: string;
  delay?: number;
  char?: string;
}) {
  return (
    <motion.span
      className={`absolute pointer-events-none select-none text-white/40 ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: [0, 0.7, 0], scale: [0.5, 1, 0.5] }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {char}
    </motion.span>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Multi-layer gradient background mimicking the flowing blue mesh */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#b8dff5] via-[#d4ecfb] to-[#e8f4fd]" />

        {/* Flowing wave layers */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(135,200,240,0.6) 0%, transparent 70%), " +
              "radial-gradient(ellipse 60% 80% at 80% 30%, rgba(180,220,250,0.5) 0%, transparent 60%), " +
              "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(150,210,245,0.4) 0%, transparent 60%)",
          }}
        />

        {/* Mesh/wave texture overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 100% 40% at 30% 70%, rgba(100,180,230,0.5) 0%, transparent 50%), " +
              "radial-gradient(ellipse 80% 50% at 70% 40%, rgba(170,215,250,0.4) 0%, transparent 50%), " +
              "radial-gradient(ellipse 60% 80% at 10% 20%, rgba(120,195,240,0.3) 0%, transparent 60%)",
          }}
        />

        {/* Light glow spots */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
            top: "30%",
            left: "40%",
            transform: "translate(-50%,-50%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Bottom fade to background */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Orbital ellipse decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] md:w-[700px] md:h-[550px]">
        <motion.div
          className="absolute inset-0 rounded-full border border-white/40"
          style={{ borderRadius: "50%", transform: "rotate(-12deg)" }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-6 rounded-full border border-white/20"
          style={{ borderRadius: "50%", transform: "rotate(8deg)" }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* Sparkle decorations */}
      <Sparkle className="top-[12%] left-[8%] text-3xl" delay={0} />
      <Sparkle className="top-[18%] right-[12%] text-xl" delay={1.2} char={"\u2727"} />
      <Sparkle className="bottom-[28%] left-[18%] text-2xl" delay={0.8} />
      <Sparkle className="top-[40%] right-[22%] text-base" delay={2} char={"\u2727"} />
      <Sparkle className="bottom-[35%] right-[8%] text-3xl" delay={1.5} />
      <Sparkle className="top-[65%] left-[6%] text-xl" delay={0.5} char={"\u2727"} />
      <Sparkle className="bottom-[15%] left-[45%] text-lg" delay={2.5} />
      <Sparkle className="top-[25%] left-[35%] text-sm" delay={3} char={"\u2727"} />

      {/* Decorative vertical lines (from reference) */}
      <div className="absolute left-[5%] top-[10%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-foreground/10 to-transparent hidden md:block" />
      <div className="absolute right-[5%] top-[8%] bottom-[12%] w-px bg-gradient-to-b from-transparent via-foreground/10 to-transparent hidden md:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-lg md:text-2xl text-foreground/70 italic tracking-wide"
        >
          Rise Together, Grow Together
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-5 font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground"
        >
          Step-Up
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed"
        >
          AI와 인문학이 만나, 당신의 성장을 함께합니다
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#program"
            className="rounded-full bg-accent px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/35 hover:-translate-y-0.5"
          >
            프로그램 알아보기
          </a>
          <a
            href="#cta"
            className="rounded-full border border-foreground/15 bg-white/50 backdrop-blur-sm px-8 py-3.5 text-base font-medium text-foreground/70 transition-all hover:bg-white/70 hover:border-foreground/25 hover:-translate-y-0.5"
          >
            상담 신청하기
          </a>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[70px]"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="oklch(0.97 0.01 230)"
            opacity="0.25"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="oklch(0.97 0.01 230)"
            opacity="0.5"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="oklch(0.97 0.01 230)"
          />
        </svg>
      </div>
    </section>
  );
}
