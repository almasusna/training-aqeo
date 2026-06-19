"use client";

import { GraduationCap, Trophy, User } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { getTranslations } from "@/lib/i18n";
import { instructors } from "@/lib/instructors";
import SectionTag from "@/components/SectionTag";

export default function TeamPage() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <div className="pt-20">
      <section className="py-16 bg-surface-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag
            tag={
              locale === "ru"
                ? "Преподаватели"
                : locale === "kz"
                  ? "Оқытушылар"
                  : "Instructors"
            }
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            {t.team.title}
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mb-12">
            {t.team.subtitle}
          </p>

          <div className="space-y-8">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="p-6 rounded-xl bg-surface-secondary border border-border hover:border-accent/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Avatar placeholder */}
                  <div className="shrink-0">
                    <div className="w-20 h-20 rounded-full bg-surface-tertiary border border-border flex items-center justify-center">
                      <User size={32} className="text-text-secondary" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary mb-1">
                      {instructor.name[locale]}
                      {instructor.age && (
                        <span className="text-text-secondary font-normal text-sm ml-2">
                          {instructor.age}{" "}
                          {locale === "ru"
                            ? "лет"
                            : locale === "kz"
                              ? "жас"
                              : "y.o."}
                        </span>
                      )}
                    </h3>
                    <p className="text-accent text-sm mb-4">
                      {instructor.position[locale]}
                    </p>

                    {/* Education */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-text-secondary text-xs font-medium mb-1">
                        <GraduationCap size={14} className="text-accent" />
                        {t.team.education}
                      </div>
                      <p className="text-text-secondary text-sm pl-5">
                        {instructor.education[locale]}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div>
                      <div className="flex items-center gap-2 text-text-secondary text-xs font-medium mb-2">
                        <Trophy size={14} className="text-accent" />
                        {t.team.achievements}
                      </div>
                      <ul className="space-y-1 pl-5">
                        {instructor.achievements[locale].map((ach, i) => (
                          <li
                            key={i}
                            className="text-text-secondary text-sm flex items-start gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
