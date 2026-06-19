"use client";

import Link from "next/link";
import { ScanFace, Brain, Shield, Users, CheckCircle } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { getTranslations } from "@/lib/i18n";
import SectionTag from "@/components/SectionTag";

export default function ServicesPage() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const content: Record<
    string,
    {
      title: string;
      description: string;
      applications: { title: string; items: string[] }[];
      psycho: { title: string; items: string[] };
    }
  > = {
    ru: {
      title: "Полиграф и психодиагностика",
      description:
        "Полиграфологические и психодиагностические исследования, проводимые специалистами с международными сертификатами, учеными степенями и опытом службы в спецорганах.",
      applications: [
        {
          title: "Кадровая безопасность",
          items: [
            "Проверка при приёме на работу",
            "Назначения на ответственные должности",
            "Доступ к конфиденциальной информации",
          ],
        },
        {
          title: "Служебные расследования",
          items: [
            "Выявление причастности к инцидентам",
            "Проверка достоверности показаний",
            "Установление обстоятельств происшествий",
          ],
        },
        {
          title: "Антикоррупционные мероприятия",
          items: [
            "Проверка на благонадежность",
            "Выявление конфликтов интересов",
            "Контроль соблюдения внутренних политик",
          ],
        },
      ],
      psycho: {
        title: "Психодиагностика",
        items: [
          "Оценка личностных характеристик: стрессоустойчивость, мотивация, склонность к риску",
          "Прогноз поведения в нестандартных ситуациях",
          "Рекомендации по формированию команд",
        ],
      },
    },
    kz: {
      title: "Полиграф және психодиагностика",
      description:
        "Халықаралық сертификаттары, ғылыми дәрежелері және арнайы органдардағы қызмет тәжірибесі бар мамандар жүргізетін полиграфологиялық және психодиагностикалық зерттеулер.",
      applications: [
        {
          title: "Кадрлық қауіпсіздік",
          items: [
            "Жұмысқа қабылдау кезінде тексеру",
            "Жауапты лауазымдарға тағайындау",
            "Құпия ақпаратқа қол жеткізу",
          ],
        },
        {
          title: "Қызметтік тергеулер",
          items: [
            "Оқиғаларға қатыстылықты анықтау",
            "Көрсетпелердің дұрыстығын тексеру",
            "Оқиға мән-жайларын анықтау",
          ],
        },
        {
          title: "Сыбайлас жемқорлыққа қарсы шаралар",
          items: [
            "Сенімділікке тексеру",
            "Мүдделер қақтығысын анықтау",
            "Ішкі саясаттардың сақталуын бақылау",
          ],
        },
      ],
      psycho: {
        title: "Психодиагностика",
        items: [
          "Жеке сипаттамаларды бағалау: стресске төзімділік, мотивация, тәуекелге бейімділік",
          "Стандартты емес жағдайлардағы мінез-құлықты болжау",
          "Команда құру бойынша ұсыныстар",
        ],
      },
    },
    en: {
      title: "Polygraph & Psychodiagnostics",
      description:
        "Polygraph and psychodiagnostic research conducted by specialists with international certificates, academic degrees, and security service experience.",
      applications: [
        {
          title: "Personnel Security",
          items: [
            "Pre-employment screening",
            "Appointment to sensitive positions",
            "Access to confidential information",
          ],
        },
        {
          title: "Internal Investigations",
          items: [
            "Determining involvement in incidents",
            "Verifying testimony accuracy",
            "Establishing incident circumstances",
          ],
        },
        {
          title: "Anti-Corruption Measures",
          items: [
            "Reliability checks",
            "Conflict of interest detection",
            "Internal policy compliance monitoring",
          ],
        },
      ],
      psycho: {
        title: "Psychodiagnostics",
        items: [
          "Personality assessment: stress resilience, motivation, risk propensity",
          "Behavior prediction in non-standard situations",
          "Team formation recommendations",
        ],
      },
    },
  };

  const c = content[locale];

  return (
    <div className="pt-20">
      <section className="py-16 bg-surface-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag
            tag={
              locale === "ru"
                ? "Услуги"
                : locale === "kz"
                  ? "Қызметтер"
                  : "Services"
            }
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            {t.services.title}
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mb-12">
            {c.description}
          </p>

          {/* Main service */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <ScanFace size={32} className="text-accent" />
              <h2 className="text-2xl font-bold text-text-primary">
                {c.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {c.applications.map((app, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-surface-secondary border border-border"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {i === 0 && <Users size={20} className="text-accent" />}
                    {i === 1 && <Shield size={20} className="text-accent" />}
                    {i === 2 && <Brain size={20} className="text-accent" />}
                    <h3 className="font-semibold text-text-primary">
                      {app.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {app.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-text-secondary text-sm"
                      >
                        <CheckCircle
                          size={14}
                          className="text-accent mt-0.5 shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Psychodiagnostics */}
            <div className="p-6 rounded-xl bg-surface-secondary border border-border">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Brain size={20} className="text-accent" />
                {c.psycho.title}
              </h3>
              <ul className="space-y-2">
                {c.psycho.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-text-secondary text-sm"
                  >
                    <CheckCircle
                      size={14}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-brand-gold/5 border border-accent/20">
            <p className="text-text-secondary mb-4">
              {locale === "ru" && "Для записи на исследование свяжитесь с нами"}
              {locale === "kz" && "Зерттеуге жазылу үшін бізбен байланысыңыз"}
              {locale === "en" && "Contact us to schedule a research session"}
            </p>
            <Link
              href="/contacts"
              className="inline-block px-8 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
