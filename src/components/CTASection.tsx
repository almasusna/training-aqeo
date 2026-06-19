"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { getTranslations } from "@/lib/i18n";

export default function CTASection() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const ctaText: Record<
    string,
    { title: string; subtitle: string; btn: string }
  > = {
    ru: {
      title: "Обсудить корпоративное обучение",
      subtitle:
        "Разработаем индивидуальную программу под задачи вашей организации",
      btn: "Оставить заявку",
    },
    kz: {
      title: "Корпоративтік оқытуды талқылау",
      subtitle: "Ұйымыңыздың міндеттеріне арналған жеке бағдарлама жасаймыз",
      btn: "Өтінім қалдыру",
    },
    en: {
      title: "Discuss Corporate Training",
      subtitle:
        "We'll develop a custom program tailored to your organization's needs",
      btn: "Submit Request",
    },
  };

  return (
    <section className="py-20 bg-surface-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 rounded-2xl bg-gradient-to-br from-accent/10 to-brand-gold/5 border border-accent/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            {ctaText[locale].title}
          </h2>
          <p className="text-text-secondary mb-8">{ctaText[locale].subtitle}</p>
          <Link
            href="/contacts"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            {ctaText[locale].btn}
          </Link>
        </div>
      </div>
    </section>
  );
}
