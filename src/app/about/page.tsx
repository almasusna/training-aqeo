"use client";

import {
  Users,
  Target,
  Award,
  BookOpen,
  GraduationCap,
  Globe,
} from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { getTranslations } from "@/lib/i18n";
import SectionTag from "@/components/SectionTag";

export default function AboutPage() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const stats: Record<string, { number: string; label: string }[]> = {
    ru: [
      { number: "4200+", label: "подготовленных специалистов" },
      { number: "18", label: "учебных программ" },
      { number: "7", label: "инструкторов-экспертов" },
      { number: "10+", label: "лет опыта преподавания" },
    ],
    kz: [
      { number: "4200+", label: "дайындалған мамандар" },
      { number: "18", label: "оқу бағдарламалары" },
      { number: "7", label: "нұсқаушы-сарапшылар" },
      { number: "10+", label: "жыл оқыту тәжірибесі" },
    ],
    en: [
      { number: "4200+", label: "trained specialists" },
      { number: "18", label: "training programs" },
      { number: "7", label: "expert instructors" },
      { number: "10+", label: "years of teaching experience" },
    ],
  };

  const icons = [
    <Users key="u" size={28} />,
    <Target key="t" size={28} />,
    <Award key="a" size={28} />,
    <BookOpen key="b" size={28} />,
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-surface-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag
            tag={
              locale === "ru"
                ? "О центре"
                : locale === "kz"
                  ? "Орталық туралы"
                  : "About"
            }
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            {t.about.title}
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl leading-relaxed">
            {t.about.description}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-surface-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats[locale].map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl bg-surface-tertiary border border-border"
              >
                <div className="text-3xl font-bold text-accent mb-1">
                  {stat.number}
                </div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-surface-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.about.advantages.map((adv, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-surface-secondary border border-border"
              >
                <div className="text-accent mb-3">{icons[i]}</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {adv.title}
                </h3>
                <p className="text-text-secondary text-sm">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-surface-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap size={48} className="text-accent mx-auto mb-6" />
          <blockquote className="text-2xl font-semibold text-text-primary italic">
            &ldquo;{t.hero.title}&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-2 text-text-secondary text-sm">
            <Globe size={16} className="text-accent" />
            <span>
              {locale === "ru" &&
                "Обучение для ОБСЕ, ШОС, ОДКБ, ЭКСПО-2017, ВИК"}
              {locale === "kz" && "ЕҚЫҰ, ШЫҰ, ҰҚШҰ, EXPO-2017, ВИК үшін оқыту"}
              {locale === "en" &&
                "Training for OSCE, SCO, CSTO, EXPO-2017, WIC"}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
