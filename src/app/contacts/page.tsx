"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { getTranslations } from "@/lib/i18n";
import SectionTag from "@/components/SectionTag";

export default function ContactsPage() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <div className="pt-20">
      <section className="py-16 bg-surface-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag
            tag={
              locale === "ru"
                ? "Контакты"
                : locale === "kz"
                  ? "Байланыс"
                  : "Contacts"
            }
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            {t.contacts.title}
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mb-12">
            {t.contacts.subtitle}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="p-8 rounded-xl bg-surface-secondary border border-border">
              <form className="space-y-5">
                <div>
                  <label className="block text-text-secondary text-sm mb-1.5">
                    {t.contacts.form.name}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-tertiary border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text-secondary text-sm mb-1.5">
                      {t.contacts.form.email}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2.5 rounded-lg bg-surface-tertiary border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-text-secondary text-sm mb-1.5">
                      {t.contacts.form.phone}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2.5 rounded-lg bg-surface-tertiary border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-text-secondary text-sm mb-1.5">
                    {t.contacts.form.company}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-tertiary border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-text-secondary text-sm mb-1.5">
                    {t.contacts.form.message}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-tertiary border border-border text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20"
                >
                  {t.contacts.form.submit}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-surface-secondary border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-semibold mb-1">
                      {locale === "ru"
                        ? "Адрес"
                        : locale === "kz"
                          ? "Мекенжай"
                          : "Address"}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {t.contacts.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-surface-secondary border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-semibold mb-1">
                      {locale === "ru"
                        ? "Телефон"
                        : locale === "kz"
                          ? "Телефон"
                          : "Phone"}
                    </h3>
                    <a
                      href="tel:+77011010298"
                      className="text-text-secondary text-sm hover:text-accent transition-colors"
                    >
                      {t.contacts.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-surface-secondary border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-semibold mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:dayana.akbergenova@mail.ru"
                      className="text-text-secondary text-sm hover:text-accent transition-colors"
                    >
                      {t.contacts.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-surface-secondary border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-semibold mb-1">
                      {locale === "ru"
                        ? "Время работы"
                        : locale === "kz"
                          ? "Жұмыс уақыты"
                          : "Working Hours"}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {locale === "ru"
                        ? "Пн–Пт: 09:00–18:00"
                        : locale === "kz"
                          ? "Дс–Жм: 09:00–18:00"
                          : "Mon–Fri: 09:00–18:00"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
