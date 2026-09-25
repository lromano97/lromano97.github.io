export type Language = "en" | "es";

type LocalizedText = Record<Language, string>;

type Period = {
  start: number;
  end?: number | "present";
};

export type CareerRole = {
  title: LocalizedText;
  period: Period;
  description?: LocalizedText;
};

export type CareerStop = {
  company: string;
  period: Period;
  roles: CareerRole[];
};

export const formatPeriod = ({ start, end }: Period, language: Language): string =>
  end === undefined || end === start
    ? String(start)
    : `${start}–${end === "present" ? (language === "es" ? "actualidad" : "present") : end}`;

// Career dates and role wording are a draft from public indexed sources. Review with Lucas and correct as needed.
export const career: CareerStop[] = [
  {
    company: "Mercado Libre",
    period: { start: 2021, end: "present" },
    roles: [
      {
        title: { en: "Technical Leader", es: "Líder técnico" },
        period: { start: 2024, end: "present" },
        description: {
          en: "Combining technical direction and hands-on engineering on the GenAI Gateway, which gives teams across the company access to AI models.",
          es: "Combino dirección técnica y trabajo directo de ingeniería en el GenAI Gateway, que permite a equipos de toda la compañía acceder a modelos de IA.",
        },
      },
      {
        title: { en: "Senior Software Engineer", es: "Ingeniero de software senior" },
        period: { start: 2022, end: 2024 },
      },
      {
        title: { en: "Semi-senior Software Engineer", es: "Ingeniero de software semisenior" },
        period: { start: 2021, end: 2022 },
      },
    ],
  },
  {
    company: "NCR Corporation",
    period: { start: 2019, end: 2021 },
    roles: [
      {
        title: { en: "PS Technical Consultant III", es: "PS Technical Consultant III" },
        period: { start: 2019, end: 2021 },
      },
    ],
  },
  {
    company: "DBlandIT",
    period: { start: 2019 },
    roles: [
      {
        title: { en: "Big Data Engineer", es: "Ingeniero de big data" },
        period: { start: 2019 },
      },
    ],
  },
];

export type PageCopy = {
  siteTitle: string;
  description: string;
  skipLink: string;
  homeLabel: string;
  navigationLabel: string;
  languageLabel: string;
  nav: { experience: string; work: string; about: string; contact: string };
  hero: {
    identity: string;
    role: string;
    introduction: string;
    experienceLink: string;
    contactLink: string;
  };
  experience: { label: string; title: string; introduction: string };
  work: {
    label: string;
    title: string;
    statement: string;
    description: string;
    diagramTitle: string;
    diagramDescription: string;
    diagramLabels: [string, string, string];
    diagramCaption: string;
  };
  about: { label: string; title: string; description: string };
  contact: { label: string; title: string; description: string; emailLink: string };
  footer: { emailLink: string };
};

export const copy: Record<Language, PageCopy> = {
  en: {
    siteTitle: "Technical leader at Mercado Libre",
    description:
      "Lucas Romano is a technical leader and software engineer at Mercado Libre, with experience across data, consulting, and platform engineering.",
    skipLink: "Skip to content",
    homeLabel: "Lucas Romano, home",
    navigationLabel: "Main navigation",
    languageLabel: "Choose language",
    nav: { experience: "Experience", work: "Current work", about: "About", contact: "Contact" },
    hero: {
      identity: "Technical leader at Mercado Libre",
      role: "Technical leadership, hands-on engineering.",
      introduction:
        "I combine technical leadership with hands-on building. My experience spans data engineering, consulting, and software development; today I work on shared AI infrastructure at Mercado Libre.",
      experienceLink: "Explore my experience",
      contactLink: "Get in touch",
    },
    experience: {
      label: "Experience",
      title: "From data engineering to technical leadership.",
      introduction:
        "Experience across data, consulting, and software engineering informs the work I lead today.",
    },
    work: {
      label: "Current work",
      title: "GenAI Gateway",
      statement: "Leading technical direction while staying close to the build.",
      description:
        "I lead technical work on the Gateway, a platform that gives teams across the company access to AI models. It is one example of the platform engineering and technical leadership work I do.",
      diagramTitle: "A shared path to AI",
      diagramDescription:
        "Abstract lines connect many teams through one gateway to several model destinations.",
      diagramLabels: ["Teams", "Access", "Models"],
      diagramCaption: "A conceptual view of shared model access",
    },
    about: {
      label: "Beyond work",
      title: "I like building things people can use.",
      description:
        "Outside engineering, I run two small businesses: Moon’s TCG, focused on trading cards, and Moon’s Lab, focused on 3D printing.",
    },
    contact: {
      label: "Contact",
      title: "Let’s talk about what you’re building.",
      description:
        "I welcome conversations about engineering leadership, platform development, and new opportunities.",
      emailLink: "Email Lucas",
    },
    footer: { emailLink: "Email" },
  },
  es: {
    siteTitle: "Líder técnico en Mercado Libre",
    description:
      "Lucas Romano es líder técnico e ingeniero de software en Mercado Libre, con experiencia en datos, consultoría e ingeniería de plataformas.",
    skipLink: "Saltar al contenido",
    homeLabel: "Lucas Romano, inicio",
    navigationLabel: "Navegación principal",
    languageLabel: "Elegir idioma",
    nav: { experience: "Experiencia", work: "Trabajo actual", about: "Sobre mí", contact: "Contacto" },
    hero: {
      identity: "Líder técnico en Mercado Libre",
      role: "Liderazgo técnico sin dejar de construir.",
      introduction:
        "Combino el liderazgo técnico con el trabajo directo de ingeniería. Mi experiencia abarca ingeniería de datos, consultoría y desarrollo de software; hoy trabajo en infraestructura compartida de IA en Mercado Libre.",
      experienceLink: "Ver mi experiencia",
      contactLink: "Contactarme",
    },
    experience: {
      label: "Experiencia",
      title: "De la ingeniería de datos al liderazgo técnico.",
      introduction:
        "Mi experiencia en datos, consultoría e ingeniería de software da forma al trabajo que lidero hoy.",
    },
    work: {
      label: "Trabajo actual",
      title: "GenAI Gateway",
      statement: "Liderar la dirección técnica sin alejarme de la implementación.",
      description:
        "Lidero el trabajo técnico del Gateway, una plataforma que permite a equipos de toda la compañía acceder a modelos de IA. Es un ejemplo de mi trabajo en ingeniería de plataformas y liderazgo técnico.",
      diagramTitle: "Un camino compartido hacia la IA",
      diagramDescription:
        "Líneas abstractas conectan varios equipos mediante un acceso común con distintos modelos.",
      diagramLabels: ["Equipos", "Acceso", "Modelos"],
      diagramCaption: "Una vista conceptual del acceso compartido a modelos",
    },
    about: {
      label: "Fuera del trabajo",
      title: "Me gusta construir cosas que la gente pueda usar.",
      description:
        "Fuera de la ingeniería, llevo adelante dos pequeños emprendimientos: Moon’s TCG, dedicado a las cartas coleccionables, y Moon’s Lab, enfocado en impresión 3D.",
    },
    contact: {
      label: "Contacto",
      title: "Hablemos de lo que estás construyendo.",
      description:
        "Me interesa conversar sobre liderazgo técnico, desarrollo de plataformas y nuevas oportunidades.",
      emailLink: "Escribirme",
    },
    footer: { emailLink: "Correo" },
  },
};
