"use client";

import Image from "next/image";
import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionBadge } from "@/components/ui/section-badge";
import { instructors } from "@/lib/instructors-data";

function InstructorPhoto({
  photo,
  initials,
  name,
}: {
  photo?: string;
  initials: string;
  name: string;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative mx-auto flex h-44 w-44 md:h-52 md:w-52 items-center justify-center rounded-full overflow-hidden bg-gradient-to-br from-[#b8dff5]/40 via-[#d4ecfb]/30 to-[#e8d5f0]/30 shadow-lg shadow-accent/10">
      {/* Decorative ring */}
      <div className="absolute inset-0 rounded-full border-2 border-white/50" />

      {photo && !imgError ? (
        <Image
          src={photo}
          alt={`${name} 프로필 사진`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 176px, 208px"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-5xl font-display font-bold text-accent/60">
          {initials}
        </span>
      )}
    </div>
  );
}

export function InstructorsSection() {
  return (
    <section
      id="instructors"
      className="relative py-24 md:py-32 bg-background"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center">
          <SectionBadge>Instructors</SectionBadge>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            함께 걸어가는 성장의 동반자
          </h2>
          <p className="mt-4 text-foreground-muted max-w-xl mx-auto">
            &ldquo;작은 발걸음부터 뗄 수 있게 성장을 돕습니다.&rdquo;
          </p>
        </FadeIn>

        <div className="mt-14 md:mt-20 space-y-12 md:space-y-16">
          {instructors.map((instructor, i) => {
            const isEven = i % 2 === 1;
            return (
              <FadeIn
                key={instructor.name}
                delay={0.15 * i}
                direction={isEven ? "left" : "right"}
              >
                <div
                  className="rounded-3xl p-6 md:p-10 shadow-xl shadow-accent/5 overflow-hidden"
                  style={{
                    background:
                      i === 0
                        ? "linear-gradient(135deg, #e8f4fd 0%, #f0e8f5 100%)"
                        : i === 1
                          ? "linear-gradient(135deg, #e8f4fd 0%, #f5ede8 100%)"
                          : "linear-gradient(135deg, #edf5e8 0%, #e8f0f5 100%)",
                  }}
                >
                  <div
                    className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12`}
                  >
                    {/* Photo */}
                    <div className="shrink-0">
                      <InstructorPhoto
                        photo={instructor.photo}
                        initials={instructor.initials}
                        name={instructor.name}
                      />
                      {/* Hashtag strengths under photo */}
                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {instructor.strengths.map((s) => (
                          <span
                            key={s}
                            className="rounded-full bg-white/70 backdrop-blur-sm px-3 py-1 text-xs font-medium text-accent"
                          >
                            #{s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-baseline gap-3 justify-center md:justify-start flex-wrap">
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                          {instructor.name}
                        </h3>
                        <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                          {instructor.role}
                        </span>
                      </div>

                      {/* Credentials */}
                      <div className="mt-4 space-y-1.5">
                        {instructor.credentials.map((cred) => (
                          <p
                            key={cred}
                            className="text-sm text-foreground-muted leading-relaxed"
                          >
                            {cred}
                          </p>
                        ))}
                      </div>

                      {/* Bio */}
                      <div className="mt-5 pt-5 border-t border-foreground/10">
                        <p className="text-sm md:text-base text-foreground-muted leading-relaxed">
                          {instructor.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
