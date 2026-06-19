"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { getTranslations } from "@/lib/i18n";

export default function Footer() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <footer className="bg-brand-navy border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-nobg.ico"
                alt="Центр обучения и развития"
                className="w-10 h-10"
              />
              <span className="text-text-primary font-semibold">
                Центр обучения и развития
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">
              {t.footer.navigation}
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/about"
                className="text-text-secondary hover:text-accent transition-colors text-sm"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/courses"
                className="text-text-secondary hover:text-accent transition-colors text-sm"
              >
                {t.nav.courses}
              </Link>
              <Link
                href="/team"
                className="text-text-secondary hover:text-accent transition-colors text-sm"
              >
                {t.nav.team}
              </Link>
              <Link
                href="/services"
                className="text-text-secondary hover:text-accent transition-colors text-sm"
              >
                {t.nav.services}
              </Link>
              <Link
                href="/contacts"
                className="text-text-secondary hover:text-accent transition-colors text-sm"
              >
                {t.nav.contacts}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">
              {t.footer.contactInfo}
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-text-secondary text-sm">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span>{t.contacts.address}</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Phone size={16} className="text-accent shrink-0" />
                <a
                  href="tel:+77011010298"
                  className="hover:text-accent transition-colors"
                >
                  {t.contacts.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Mail size={16} className="text-accent shrink-0" />
                <a
                  href="mailto:dayana.akbergenova@mail.ru"
                  className="hover:text-accent transition-colors"
                >
                  {t.contacts.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-text-secondary text-xs">
          © {new Date().getFullYear()} ТОО &quot;Центр специального
          обеспечения&quot;. {t.footer.rights}.
        </div>
      </div>
    </footer>
  );
}
