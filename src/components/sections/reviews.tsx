"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionBadge } from "@/components/ui/section-badge";
import { reviews } from "@/lib/reviews-data";
import { Quote } from "lucide-react";

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center">
          <SectionBadge>Class Review</SectionBadge>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Step-Up과 함께한 사람들의 이야기
          </h2>
          <p className="mt-4 text-foreground-muted">
            실제 수강생들의 생생한 후기입니다
          </p>
        </FadeIn>

        <div className="mt-14 md:mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <FadeIn key={review.name} delay={0.06 * i}>
              <div className="rounded-2xl bg-surface p-7 shadow-lg shadow-accent/5 border border-border/20 transition-all hover:shadow-xl hover:-translate-y-0.5 h-full flex flex-col">
                <Quote className="h-5 w-5 text-accent/25 shrink-0" />
                <p className="mt-3 text-sm text-foreground-muted leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-secondary-light text-xs font-bold text-accent shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {review.name}
                      <span className="ml-1 text-xs text-foreground-muted">
                        ({review.age})
                      </span>
                    </p>
                    <p className="text-xs text-foreground-muted">
                      {review.affiliation}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
