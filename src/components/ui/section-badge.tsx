import { cn } from "@/lib/cn";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent tracking-wide",
        className,
      )}
    >
      {children}
    </span>
  );
}
