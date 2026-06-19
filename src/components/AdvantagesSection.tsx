"use client";

import { Users, Target, Award, BookOpen } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { getTranslations } from "@/lib/i18n";
import SectionTag from "./SectionTag";

const icons = [
  <Users key="users" size={28} />,
  <Target key="target" size={28} />,
  <Award key="award" size={28} />,
  <BookOpen key="book" size={28} />,
];

export default function AdvantagesSection() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <section className="py-20 bg-surface-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionTag
            tag={
              locale === "ru"
                ? "О центре"
                : locale === "kz"
                  ? "Орталық туралы"
                  : "About"
            }
          />
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            {t.about.title}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {t.about.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.advantages.map((adv, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-surface-secondary border border-border hover:border-accent/30 transition-all group"
            >
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                {icons[i]}
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-2">
                {adv.title}
              </h3>
              <p className="text-text-secondary text-sm">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
