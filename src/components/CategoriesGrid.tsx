"use client";

import Link from "next/link";
import { Shield, Eye, Plane, Crosshair, Brain } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { getTranslations } from "@/lib/i18n";
import { categories } from "@/lib/courses";
import { CourseCategory } from "@/types";
import SectionTag from "./SectionTag";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={32} />,
  Eye: <Eye size={32} />,
  Plane: <Plane size={32} />,
  CrosshairIcon: <Crosshair size={32} />,
  Brain: <Brain size={32} />,
};

export default function CategoriesGrid() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <section className="py-20 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionTag
            tag={
              locale === "ru"
                ? "Направления"
                : locale === "kz"
                  ? "Бағыттар"
                  : "Specializations"
            }
          />
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            {t.courses.categories}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/courses?category=${cat.id}`}
              className="group p-6 rounded-xl bg-surface-tertiary border border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                {iconMap[cat.icon]}
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {cat.title[locale]}
              </h3>
              <p className="text-text-secondary text-sm">
                {cat.description[locale]}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
