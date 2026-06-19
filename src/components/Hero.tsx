"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { getTranslations } from "@/lib/i18n";

export default function Hero() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-primary via-brand-navy/80 to-surface-secondary" />

      {/* Subtle diagonal lines (structured, institutional feel) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(135deg, rgba(198,167,94,0.5) 0px, rgba(198,167,94,0.5) 1px, transparent 1px, transparent 60px)`,
        }}
      />

      {/* Warm glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top accent line */}
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-brand-gold mx-auto mb-8 rounded-full" />

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 animate-fade-in">
          {t.hero.title}
        </h1>

        <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mb-10 animate-fade-in leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
          <Link
            href="/courses"
            className="px-8 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            {t.hero.cta}
          </Link>
          <Link
            href="/contacts"
            className="px-8 py-3 border border-accent/50 text-accent hover:bg-accent/10 font-semibold rounded-lg transition-all"
          >
            {t.hero.ctaSecondary}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={28} className="text-text-secondary" />
      </div>
    </section>
  );
}
