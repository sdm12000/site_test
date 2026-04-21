"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const navLinks = [
  { label: "소개", href: "/about" },
  { label: "프로그램", href: "/program" },
  { label: "교재", href: "/textbook" },
  { label: "후기", href: "/reviews" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-border/50"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className={cn(
              "font-display text-xl font-bold tracking-tight transition-colors duration-500",
              scrolled ? "text-foreground" : "text-white",
            )}
          >
            Step-Up
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-500",
                  scrolled
                    ? pathname === link.href
                      ? "text-accent"
                      : "text-foreground-muted hover:text-accent"
                    : pathname === link.href
                      ? "text-white"
                      : "text-white/80 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/reviews"
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                scrolled
                  ? "bg-accent text-white hover:bg-accent-dark hover:shadow-lg"
                  : "bg-white/20 text-white backdrop-blur-sm border border-white/30 hover:bg-white/30",
              )}
            >
              상담 신청
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "md:hidden p-2 transition-colors duration-500",
              scrolled ? "text-foreground" : "text-white",
            )}
            aria-label="메뉴"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[64px] z-40 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 pt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-accent",
                    pathname === link.href
                      ? "text-accent"
                      : "text-foreground-muted",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/reviews"
                className="mt-4 rounded-full bg-accent px-8 py-3 text-base font-medium text-white"
              >
                상담 신청
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
