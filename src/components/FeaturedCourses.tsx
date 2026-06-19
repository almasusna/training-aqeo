"use client";

import Link from "next/link";
import { Clock, FileCheck, ArrowRight } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { getTranslations } from "@/lib/i18n";
import { courses } from "@/lib/courses";
import SectionTag from "./SectionTag";

export default function FeaturedCourses() {
  const { locale } = useLocale();
  const t = getTranslations(locale);
  const featured = courses.slice(0, 4);

  return (
    <section className="py-20 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionTag
            tag={
              locale === "ru"
                ? "Курсы"
                : locale === "kz"
                  ? "Курстар"
                  : "Courses"
            }
          />
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            {t.courses.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="group p-6 rounded-xl bg-surface-tertiary border border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded font-medium">
                  {t.categories[course.category]}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                {course.title[locale]}
              </h3>
              <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                {course.shortDescription[locale]}
              </p>
              <div className="flex items-center gap-4 text-xs text-text-secondary">
                <span className="flex items-center gap-1">
                  <Clock size={14} className="text-accent" />
                  {course.duration}
                </span>
                {course.certificate && (
                  <span className="flex items-center gap-1">
                    <FileCheck size={14} className="text-accent" />
                    {t.courses.certificate}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-semibold transition-colors"
          >
            {t.courses.viewAll}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
