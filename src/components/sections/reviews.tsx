"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionBadge } from "@/components/ui/section-badge";
import { reviews } from "@/lib/reviews-data";
import { Quote } from "lucide-react";

function ReviewCard({ review, delay = 0 }: { review: (typeof reviews)[number]; delay?: number }) {
  return (
    <FadeIn delay={delay}>
      <div className="rounded-2xl bg-surface p-7 md:p-8 shadow-lg shadow-foreground/5 border border-border/20 flex flex-col h-full transition-all hover:shadow-xl hover:-translate-y-1">
        <Quote className="h-6 w-6 text-accent/20 shrink-0" />
        <p className="mt-4 text-sm md:text-base text-foreground-muted leading-relaxed flex-1">
          &ldquo;{review.text}&rdquo;
        </p>
        <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border/30">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-secondary-light text-sm font-bold text-accent shrink-0">
            {review.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              {review.name}
              <span className="ml-1.5 text-xs text-foreground-muted">
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
  );
}

export function ReviewsSection({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {!hideHeader && (
          <FadeIn className="text-center">
            <SectionBadge>Class Review</SectionBadge>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Step-Up과 함께한 사람들의 이야기
            </h2>
            <p className="mt-4 text-foreground-muted">
              실제 수강생들의 생생한 후기입니다
            </p>
          </FadeIn>
        )}

        <div className={`${hideHeader ? "" : "mt-14"} grid grid-cols-1 md:grid-cols-2 gap-6`}>
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} delay={0.1 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}
