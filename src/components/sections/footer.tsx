export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-bold text-white">
              Step-Up
            </p>
            <p className="mt-2 text-sm text-white/50">
              QLI (Quantum Leap Institute)
            </p>
            <p className="mt-1 text-sm text-white/40 italic">
              Rise Together, Grow Together
            </p>
            <p className="mt-3 text-xs text-white/30">
              AI와 인문학이 만나, 당신의 성장을 함께합니다.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-sm font-medium text-white/70 mb-4">바로가기</p>
            <div className="space-y-2">
              {[
                { label: "소개", href: "#about" },
                { label: "프로그램", href: "#program" },
                { label: "AI x 인문학", href: "#ai-humanities" },
                { label: "강사진", href: "#instructors" },
                { label: "후기", href: "#reviews" },
                { label: "상담 신청", href: "#cta" },
              ].map((link) => (
                <p key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/40 transition-colors hover:text-white/80"
                  >
                    {link.label}
                  </button>
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-medium text-white/70 mb-4">문의</p>
            <p className="text-sm text-white/40 leading-relaxed">
              Step-Up 프로그램에 대해 궁금한 점이 있으시면
              <br />
              언제든지 문의해 주세요.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/30">
            &copy; 2026 Quantum Leap Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
