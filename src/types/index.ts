export type Locale = "ru" | "kz" | "en";

export interface Course {
  id: string;
  slug: string;
  category: CourseCategory;
  title: Record<Locale, string>;
  shortDescription: Record<Locale, string>;
  duration: string;
  format: string;
  price?: string;
  groupSize?: string;
  certificate: boolean;
  targetAudience?: Record<Locale, string>;
  goals?: Record<Locale, string[]>;
  program: Record<Locale, string[]>;
  results?: Record<Locale, string[]>;
}

export type CourseCategory =
  | "security"
  | "profiling"
  | "bas"
  | "tactical"
  | "psychology";

export interface CategoryInfo {
  id: CourseCategory;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  icon: string;
}

export interface Instructor {
  id: string;
  name: Record<Locale, string>;
  position: Record<Locale, string>;
  age?: number;
  education: Record<Locale, string>;
  achievements: Record<Locale, string[]>;
  photo?: string;
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    courses: string;
    team: string;
    services: string;
    contacts: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    description: string;
    advantages: { title: string; description: string }[];
  };
  courses: {
    title: string;
    viewAll: string;
    duration: string;
    format: string;
    price: string;
    certificate: string;
    program: string;
    results: string;
    enroll: string;
    group: string;
    audience: string;
    goals: string;
    allCourses: string;
    categories: string;
  };
  team: {
    title: string;
    subtitle: string;
    education: string;
    achievements: string;
  };
  services: {
    title: string;
    subtitle: string;
  };
  contacts: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      company: string;
      message: string;
      submit: string;
    };
    address: string;
    phone: string;
    email: string;
  };
  footer: {
    description: string;
    navigation: string;
    contactInfo: string;
    rights: string;
  };
  categories: Record<CourseCategory, string>;
}
