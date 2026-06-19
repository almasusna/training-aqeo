"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Clock, FileCheck } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { getTranslations } from "@/lib/i18n";
import { courses, categories } from "@/lib/courses";
import { CourseCategory } from "@/types";
import SectionTag from "@/components/SectionTag";

function CoursesContent() {
  const { locale } = useLocale();
  const t = getTranslations(locale);
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as CourseCategory | null;
  const [activeCategory, setActiveCategory] = useState<CourseCategory | null>(
    initialCategory,
  );

  const filtered = activeCategory
    ? courses.filter((c) => c.category === activeCategory)
    : courses;

  return (
    <div className="pt-20">
      <section className="py-16 bg-surface-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag
            tag={
              locale === "ru"
                ? "Курсы"
                : locale === "kz"
                  ? "Курстар"
                  : "Courses"
            }
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-8">
            {t.courses.title}
          </h1>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                !activeCategory
                  ? "bg-accent text-white"
                  : "bg-surface-tertiary text-text-secondary hover:text-text-primary border border-border"
              }`}
            >
              {t.courses.allCourses}
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-accent text-white"
                    : "bg-surface-tertiary text-text-secondary hover:text-text-primary border border-border"
                }`}
              >
                {cat.title[locale]}
              </button>
            ))}
          </div>

          {/* Courses grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.slug}`}
                className="group p-6 rounded-xl bg-surface-secondary border border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/5 flex flex-col"
              >
                <span className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded self-start mb-3 font-medium">
                  {t.categories[course.category]}
                </span>
                <h3 className="text-base font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {course.title[locale]}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-3 flex-1">
                  {course.shortDescription[locale]}
                </p>
                <div className="flex items-center gap-3 text-xs text-text-secondary mt-auto pt-3 border-t border-border">
                  <span className="flex items-center gap-1">
                    <Clock size={13} className="text-accent" />
                    {course.duration}
                  </span>
                  {course.certificate && (
                    <span className="flex items-center gap-1">
                      <FileCheck size={13} className="text-accent" />
                      {locale === "ru"
                        ? "Сертификат"
                        : locale === "kz"
                          ? "Сертификат"
                          : "Certificate"}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="pt-20 min-h-screen" />}>
      <CoursesContent />
    </Suspense>
  );
}
