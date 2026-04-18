"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionBadge } from "@/components/ui/section-badge";
import { reviews } from "@/lib/reviews-data";
import { Quote } from "lucide-react";

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div className="w-[340px] shrink-0 rounded-2xl bg-surface p-6 shadow-lg shadow-foreground/5 border border-border/20 flex flex-col">
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
  );
}

function MarqueeRow({
  items,
  direction = "left",
  speed = 30,
}: {
  items: (typeof reviews);
  direction?: "left" | "right";
  speed?: number;
}) {
  // Duplicate items for seamless loop
  const duplicated = [...items, ...items];
  const duration = items.length * speed;

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />

      <div
        className="flex gap-5"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
          width: "max-content",
        }}
      >
        {duplicated.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export function ReviewsSection({ hideHeader = false }: { hideHeader?: boolean }) {
  // Split reviews into two rows
  const mid = Math.ceil(reviews.length / 2);
  const row1 = reviews.slice(0, mid);
  const row2 = reviews.slice(mid);

  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {!hideHeader && (
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
        </div>
      )}

      <div className={hideHeader ? "space-y-5" : "mt-14 space-y-5"}>
        <FadeIn delay={0.1}>
          <MarqueeRow items={row1} direction="left" speed={25} />
        </FadeIn>
        <FadeIn delay={0.25}>
          <MarqueeRow items={row2} direction="right" speed={28} />
        </FadeIn>
      </div>
    </section>
  );
}
