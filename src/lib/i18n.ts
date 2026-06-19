import { Locale, Translations } from "@/types";

const translations: Record<Locale, Translations> = {
  ru: {
    nav: {
      home: "Главная",
      about: "О центре",
      courses: "Курсы",
      team: "Преподаватели",
      services: "Услуги",
      contacts: "Контакты",
    },
    hero: {
      title: "Профессионалы обучают профессионалов",
      subtitle:
        "Центр обучения и развития — современная площадка для профессиональной подготовки и повышения квалификации специалистов в сфере безопасности, тактики, психологии и управления.",
      cta: "Смотреть курсы",
      ctaSecondary: "Связаться с нами",
    },
    about: {
      title: "О центре",
      description:
        "Программы адаптированы под реальные задачи служб безопасности, охраны, кинологии, тактики, управления, медицины и других направлений. Разрабатываются индивидуальные и корпоративные курсы под заказ.",
      advantages: [
        {
          title: "Преподаватели-практики",
          description:
            "Инструкторы с реальным опытом службы, включая действующих сотрудников СГО РК",
        },
        {
          title: "Индивидуальный подход",
          description:
            "Программы адаптируются под задачи каждой организации-заказчика",
        },
        {
          title: "Подтверждённое качество",
          description:
            "Более 4200 подготовленных специалистов для ОБСЕ, ШОС, ОДКБ, ЭКСПО-2017",
        },
        {
          title: "Гибкие формы обучения",
          description:
            "Очная, выездная и онлайн-форматы. От 3 дней до полных программ",
        },
      ],
    },
    courses: {
      title: "Курсы и программы",
      viewAll: "Все курсы",
      duration: "Продолжительность",
      format: "Формат",
      price: "Стоимость",
      certificate: "Сертификат по итогам обучения",
      program: "Программа",
      results: "Результаты",
      enroll: "Записаться",
      group: "Группа",
      audience: "Целевая аудитория",
      goals: "Цели",
      allCourses: "Все направления",
      categories: "Направления",
    },
    team: {
      title: "Преподаватели",
      subtitle:
        "Высококвалифицированные специалисты с реальным опытом службы в силовых структурах",
      education: "Образование и подготовка",
      achievements: "Достижения",
    },
    services: {
      title: "Услуги",
      subtitle: "Полиграфологические и психодиагностические исследования",
    },
    contacts: {
      title: "Контакты",
      subtitle:
        "Свяжитесь с нами для записи на курсы или обсуждения корпоративного обучения",
      form: {
        name: "Ваше имя",
        email: "Email",
        phone: "Телефон",
        company: "Организация",
        message: "Сообщение",
        submit: "Отправить заявку",
      },
      address: "ул. А. Бокейхана, 25Б",
      phone: "+7 701 101 0298",
      email: "dayana.akbergenova@mail.ru",
    },
    footer: {
      description:
        "Центр обучения и развития — профессиональная подготовка и повышение квалификации специалистов.",
      navigation: "Навигация",
      contactInfo: "Контактная информация",
      rights: "Все права защищены",
    },
    categories: {
      security: "Безопасность и антитеррор",
      profiling: "Профайлинг и визуальный досмотр",
      bas: "Беспилотные системы (БАС)",
      tactical: "Тактическая подготовка",
      psychology: "Психология и коммуникации",
    },
  },
  kz: {
    nav: {
      home: "Басты бет",
      about: "Орталық туралы",
      courses: "Курстар",
      team: "Оқытушылар",
      services: "Қызметтер",
      contacts: "Байланыс",
    },
    hero: {
      title: "Кәсіпқойлар кәсіпқойларды оқытады",
      subtitle:
        "Оқыту және дамыту орталығы — қауіпсіздік, тактика, психология және басқару саласындағы мамандарды кәсіби даярлау мен біліктілігін арттырудың заманауи алаңы.",
      cta: "Курстарды қарау",
      ctaSecondary: "Бізбен байланысу",
    },
    about: {
      title: "Орталық туралы",
      description:
        "Бағдарламалар қауіпсіздік қызметтерінің, қорғау, кинология, тактика, басқару, медицина және басқа бағыттардың нақты міндеттеріне бейімделген.",
      advantages: [
        {
          title: "Тәжірибелі оқытушылар",
          description:
            "ҚР МКҚ қызметкерлерін қоса алғанда, нақты қызмет тәжірибесі бар нұсқаушылар",
        },
        {
          title: "Жеке көзқарас",
          description:
            "Бағдарламалар әр тапсырыс беруші ұйымның міндеттеріне бейімделеді",
        },
        {
          title: "Расталған сапа",
          description:
            "ЕҚЫҰ, ШЫҰ, ҰҚШҰ, EXPO-2017 үшін 4200-ден астам маман дайындалды",
        },
        {
          title: "Икемді оқыту формалары",
          description:
            "Күндізгі, шығыс және онлайн форматтар. 3 күннен толық бағдарламаларға дейін",
        },
      ],
    },
    courses: {
      title: "Курстар мен бағдарламалар",
      viewAll: "Барлық курстар",
      duration: "Ұзақтығы",
      format: "Формат",
      price: "Құны",
      certificate: "Оқу нәтижесі бойынша сертификат",
      program: "Бағдарлама",
      results: "Нәтижелер",
      enroll: "Жазылу",
      group: "Топ",
      audience: "Мақсатты аудитория",
      goals: "Мақсаттар",
      allCourses: "Барлық бағыттар",
      categories: "Бағыттар",
    },
    team: {
      title: "Оқытушылар",
      subtitle:
        "Күш құрылымдарында нақты қызмет тәжірибесі бар жоғары білікті мамандар",
      education: "Білім және дайындық",
      achievements: "Жетістіктер",
    },
    services: {
      title: "Қызметтер",
      subtitle: "Полиграфологиялық және психодиагностикалық зерттеулер",
    },
    contacts: {
      title: "Байланыс",
      subtitle:
        "Курстарға жазылу немесе корпоративтік оқытуды талқылау үшін бізбен байланысыңыз",
      form: {
        name: "Сіздің атыңыз",
        email: "Email",
        phone: "Телефон",
        company: "Ұйым",
        message: "Хабарлама",
        submit: "Өтінім жіберу",
      },
      address: "А. Бөкейхан к-сі, 25Б",
      phone: "+7 701 101 0298",
      email: "dayana.akbergenova@mail.ru",
    },
    footer: {
      description:
        "Оқыту және дамыту орталығы — мамандарды кәсіби даярлау және біліктілігін арттыру.",
      navigation: "Навигация",
      contactInfo: "Байланыс ақпараты",
      rights: "Барлық құқықтар қорғалған",
    },
    categories: {
      security: "Қауіпсіздік және антитеррор",
      profiling: "Профайлинг және визуалды тексеру",
      bas: "Ұшқышсыз жүйелер (БАС)",
      tactical: "Тактикалық дайындық",
      psychology: "Психология және коммуникациялар",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      courses: "Courses",
      team: "Instructors",
      services: "Services",
      contacts: "Contacts",
    },
    hero: {
      title: "Professionals Training Professionals",
      subtitle:
        "The Training & Development Center is a modern platform for professional training and advanced qualification of specialists in security, tactics, psychology, and management.",
      cta: "View Courses",
      ctaSecondary: "Contact Us",
    },
    about: {
      title: "About the Center",
      description:
        "Programs are tailored to the real-world tasks of security services, protection, K-9 units, tactics, management, medicine, and other fields. We develop individual and corporate courses to order.",
      advantages: [
        {
          title: "Practitioner Instructors",
          description:
            "Instructors with real service experience, including active members of the State Security Service of Kazakhstan",
        },
        {
          title: "Individual Approach",
          description:
            "Programs are adapted to the specific needs of each client organization",
        },
        {
          title: "Proven Quality",
          description:
            "Over 4,200 specialists trained for OSCE, SCO, CSTO, EXPO-2017",
        },
        {
          title: "Flexible Training Formats",
          description:
            "On-site, off-site, and online formats. From 3 days to comprehensive programs",
        },
      ],
    },
    courses: {
      title: "Courses & Programs",
      viewAll: "All Courses",
      duration: "Duration",
      format: "Format",
      price: "Price",
      certificate: "Certificate upon completion",
      program: "Program",
      results: "Results",
      enroll: "Enroll",
      group: "Group",
      audience: "Target Audience",
      goals: "Goals",
      allCourses: "All Categories",
      categories: "Categories",
    },
    team: {
      title: "Instructors",
      subtitle:
        "Highly qualified specialists with real experience in security and defense services",
      education: "Education & Training",
      achievements: "Achievements",
    },
    services: {
      title: "Services",
      subtitle: "Polygraph and psychodiagnostic research",
    },
    contacts: {
      title: "Contacts",
      subtitle:
        "Get in touch to enroll in courses or discuss corporate training",
      form: {
        name: "Your Name",
        email: "Email",
        phone: "Phone",
        company: "Organization",
        message: "Message",
        submit: "Submit Request",
      },
      address: "25B A. Bokeikhana St.",
      phone: "+7 701 101 0298",
      email: "dayana.akbergenova@mail.ru",
    },
    footer: {
      description:
        "Training & Development Center — professional training and advanced qualification of specialists.",
      navigation: "Navigation",
      contactInfo: "Contact Information",
      rights: "All rights reserved",
    },
    categories: {
      security: "Security & Counter-Terrorism",
      profiling: "Profiling & Visual Inspection",
      bas: "Unmanned Systems (UAS)",
      tactical: "Tactical Training",
      psychology: "Psychology & Communications",
    },
  },
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
