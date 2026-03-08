"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-extrabold tracking-tight gradient-text pr-1">
          Alt Founders
        </Link>

        {/* Desktop nav — centered links */}
        <nav className="hidden absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium text-slate-500 md:flex">
          {navItems.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-slate-900"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-slate-900"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA — right aligned */}
        <div className="hidden md:block">
          <Button href={siteConfig.bookingUrl} size="sm">
            Book Your Free Consultation
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden glass"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) =>
                item.href.startsWith("#") ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100/60"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100/60"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="mt-2 px-3">
                <Button href={siteConfig.bookingUrl} size="sm" className="w-full">
                  Book Your Free Consultation
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
