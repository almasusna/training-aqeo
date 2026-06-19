"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  Users,
  FileCheck,
  BookOpen,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { getTranslations } from "@/lib/i18n";
import { courses } from "@/lib/courses";
import SectionTag from "@/components/SectionTag";

export default function CourseDetailPage() {
  const { locale } = useLocale();
  const t = getTranslations(locale);
  const params = useParams();
  const slug = params.slug as string;

  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <p className="text-text-secondary">Course not found</p>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="py-16 bg-surface-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-8 text-sm"
          >
            <ArrowLeft size={16} />
            {t.courses.viewAll}
          </Link>

          {/* Category badge */}
          <span className="inline-block text-xs text-accent bg-accent/10 px-3 py-1 rounded mb-4 font-medium">
            {t.categories[course.category]}
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            {course.title[locale]}
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            {course.shortDescription[locale]}
          </p>

          {/* Meta info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="p-4 rounded-lg bg-surface-secondary border border-border">
              <div className="flex items-center gap-2 text-accent mb-1">
                <Clock size={16} />
                <span className="text-xs font-medium">
                  {t.courses.duration}
                </span>
              </div>
              <p className="text-sm text-text-primary">{course.duration}</p>
            </div>
            <div className="p-4 rounded-lg bg-surface-secondary border border-border">
              <div className="flex items-center gap-2 text-accent mb-1">
                <BookOpen size={16} />
                <span className="text-xs font-medium">{t.courses.format}</span>
              </div>
              <p className="text-sm text-text-primary">{course.format}</p>
            </div>
            {course.price && (
              <div className="p-4 rounded-lg bg-surface-secondary border border-border">
                <div className="flex items-center gap-2 text-accent mb-1">
                  <FileCheck size={16} />
                  <span className="text-xs font-medium">{t.courses.price}</span>
                </div>
                <p className="text-sm text-text-primary">{course.price}</p>
              </div>
            )}
            {course.groupSize && (
              <div className="p-4 rounded-lg bg-surface-secondary border border-border">
                <div className="flex items-center gap-2 text-accent mb-1">
                  <Users size={16} />
                  <span className="text-xs font-medium">{t.courses.group}</span>
                </div>
                <p className="text-sm text-text-primary">{course.groupSize}</p>
              </div>
            )}
          </div>

          {/* Program */}
          <div className="mb-10">
            <SectionTag
              tag={
                locale === "ru"
                  ? "Программа"
                  : locale === "kz"
                    ? "Бағдарлама"
                    : "Program"
              }
            />
            <h2 className="text-2xl font-bold text-text-primary mb-6">
              {t.courses.program}
            </h2>
            <div className="space-y-3">
              {course.program[locale].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg bg-surface-secondary"
                >
                  <CheckCircle
                    size={18}
                    className="text-accent mt-0.5 shrink-0"
                  />
                  <span className="text-text-primary text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certificate & CTA */}
          {course.certificate && (
            <div className="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-brand-gold/5 border border-accent/20 mb-8">
              <div className="flex items-center gap-3 mb-2">
                <FileCheck size={24} className="text-accent" />
                <span className="text-text-primary font-semibold">
                  {t.courses.certificate}
                </span>
              </div>
            </div>
          )}

          <Link
            href="/contacts"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            {t.courses.enroll}
          </Link>
        </div>
      </section>
    </div>
  );
}
