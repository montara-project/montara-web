import { site, type NavKey, type ProjectSlug, type ServiceSlug, type TeamSlug } from '@/data/site'

interface ServiceCopy {
  title: string
  tagline: string
  description: string
  deliverables: string[]
}

interface PageMeta {
  title: string
  description: string
}

export const en = {
  meta: {
    home: {
      title: 'Montara Project - Build Something Different',
      description:
        'Montara Project builds something different. We handle full-stack web development including backend, frontend, and DevOps, plus cross-platform desktop apps built with Tauri.',
    },
    services: {
      title: 'Services | Montara Project',
      description:
        'Backend, mobile & frontend, DevOps & cloud, and cross-platform desktop development with Tauri — what each service includes and the technologies we use.',
    },
    projects: {
      title: 'Projects | Montara Project',
      description:
        'A selection of the products and systems Montara Project has designed, built, and shipped.',
    },
    about: {
      title: 'About | Montara Project',
      description:
        'Who we are and how we work: a software company building backend, mobile & frontend, DevOps, and Tauri desktop projects.',
    },
    contact: {
      title: 'Contact | Montara Project',
      description:
        'Tell us about your project. Email Montara Project and expect a reply within 48 hours on business days.',
    },
    terms: {
      title: 'Terms of Use | Montara Project',
      description:
        'The terms for using the Montara Project website, including acceptable use, intellectual property, and client project agreements.',
    },
    privacy: {
      title: 'Privacy Policy | Montara Project',
      description:
        'How the Montara Project website handles information, covering website inquiries, hosting, analytics, service providers, and privacy requests.',
    },
  } satisfies Record<string, PageMeta>,

  nav: {
    links: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    } satisfies Record<NavKey, string>,
    mainLabel: 'Main',
    mobileLabel: 'Mobile',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skipToContent: 'Skip to content',
    languageLabel: 'Language',
    startProject: 'Start a project',
  },

  common: {
    startProject: 'Start a project',
    viewWork: 'View our work',
    contactUs: 'Contact us',
    viewAllProjects: 'View all projects',
    learnMore: 'Learn more',
    comingSoon: 'Coming soon',
    opensInNewTab: '(opens in new tab)',
  },

  hero: {
    available: 'Available for new projects',
    titleLead: 'Build something',
    titleEmphasis: 'different',
    titleTrail: 'with Montara Project',
    lead: 'We design and build reliable web products end to end — backend, frontend, and DevOps. From idea to production, we ship software that scales.',
    stats: {
      projects: 'Projects shipped',
      services: 'Service areas',
      response: 'Typical response',
    },
    frameAlt: 'Tera Router AI gateway dashboard built by Montara Project',
    badgeTitle: 'End-to-end delivery',
    badgeBody: 'Backend · Frontend · DevOps',
  },

  home: {
    services: {
      tag: 'Services',
      title: 'What we do',
      description:
        'We handle project-based work across the full stack — from APIs and interfaces to the infrastructure that runs them.',
    },
    projects: {
      tag: 'Selected work',
      title: 'Featured projects',
      description: 'A snapshot of the products and systems we have helped bring to life.',
    },
    tech: {
      tag: 'Tech stack',
      title: 'Technologies we work with',
      description:
        'We choose the right tool for the job and stay current with the modern web ecosystem.',
    },
    process: {
      tag: 'Process',
      title: 'How we work',
      description:
        'A clear, collaborative process that keeps your project on track from kickoff to launch.',
    },
    cta: {
      titleLead: "Let's build",
      titleTrail: 'something different',
      body: "Have a project in mind? Tell us about it and we'll get back to you with how we can help.",
    },
  },

  process: [
    {
      title: 'Discover',
      description: 'We dig into your goals, constraints, and users to define the right scope.',
    },
    {
      title: 'Design',
      description: 'We plan the architecture and experience before writing a single line of code.',
    },
    {
      title: 'Build',
      description: 'We ship in small, reviewable increments with continuous integration.',
    },
    {
      title: 'Deliver',
      description: 'We deploy, monitor, and hand over with documentation and support.',
    },
  ],

  servicesPage: {
    tag: 'Services',
    title: 'What we do',
    description:
      'We handle project-based work across backend, frontend, and DevOps — plus cross-platform desktop apps built with Tauri.',
    included: "What's included",
    technologies: 'Technologies',
  },

  services: {
    backend: {
      title: 'Backend Development',
      tagline: 'Robust APIs & services',
      description:
        'We design and build reliable server-side systems — from REST and GraphQL APIs to background jobs and data pipelines — that scale with your product.',
      deliverables: [
        'API design & development',
        'Database modeling & optimization',
        'Authentication & authorization',
        'Third-party integrations',
        'Microservices & event-driven systems',
      ],
    },
    frontend: {
      title: 'Mobile & Frontend Development',
      tagline: 'Fast, polished interfaces on web and mobile',
      description:
        'We craft responsive, accessible web and mobile applications with a focus on performance and developer experience, turning ideas into intuitive products.',
      deliverables: [
        'Web application development',
        'Mobile app development for iOS & Android',
        'Design system & UI implementation',
        'Performance optimization',
        'Responsive & accessible UI',
        'Progressive web apps',
      ],
    },
    devops: {
      title: 'DevOps & Cloud',
      tagline: 'Ship with confidence',
      description:
        'We automate the path from code to production with CI/CD, infrastructure as code, and observability so your team can ship faster and safer.',
      deliverables: [
        'CI/CD pipeline setup',
        'Cloud infrastructure & IaC',
        'Containerization & orchestration',
        'Monitoring & alerting',
        'Security & cost optimization',
      ],
    },
    'desktop-dev': {
      title: 'Desktop Development',
      tagline: 'Cross-platform desktop apps',
      description:
        'We build fast, lightweight desktop applications with Tauri — native performance and tiny binaries, powered by the web technologies your team already knows.',
      deliverables: [
        'Cross-platform apps for macOS, Windows, & Linux',
        'Tauri app architecture & development',
        'Native system integrations (tray, notifications, filesystem)',
        'Installer packaging & auto-updates',
        'Electron to Tauri migration',
      ],
    },
  } satisfies Record<ServiceSlug, ServiceCopy>,

  projectsPage: {
    tag: 'Portfolio',
    title: 'Our projects',
    description: 'A selection of the products and systems we have designed, built, and shipped.',
  },

  projects: {
    'tera-router':
      'A self-hosted gateway that puts many AI providers behind one endpoint. It translates between OpenAI Chat, Anthropic Messages, and Responses formats, routes across accounts with fallback, and adds per-key allowlists, guardrails, and usage analytics — shipped as a single Go container.',
    montarapass:
      'A zero-knowledge, end-to-end encrypted password manager you can self-host. Logins are encrypted in the browser, so the server only ever stores ciphertext and wrapped keys — with a browser extension, role-based sharing, and key rotation on revoke.',
    wadesk:
      'A desktop shell that brings WhatsApp Web, Telegram Web, and Slack into one window. Each account runs in its own isolated native webview, stays loaded in the background, and shows its unread count in a side dock.',
    'veil-app':
      'A lightweight macOS menu bar app that keeps your menu bar tidy — hide any icon with one click, monitor live memory usage, and activate, quit, or force-quit apps from a single popover. Ships as a universal binary for Intel and Apple Silicon with auto-update.',
    cloudrive:
      'A unified cloud drive that brings Google Drive, Dropbox, OneDrive, S3, and more into one searchable workspace with live two-way sync, zero-copy indexing, and a single permissions model.',
    'overlay-browser-source':
      'A free, no-account OBS & Streamlabs browser source that displays animated donation QR codes (Tako, Saweria, Trakteer, Ko-fi, and more) with rotating or grid layouts, custom transitions, and transparent backgrounds.',
    'house-of-wizard':
      'An education platform for aspiring Web3 data analysts, teaching blockchain analytics, on-chain data analysis, and Web3 insights.',
    'moneyflow-id':
      'A cashflow management web app that helps users track income, categorize expenses, create budgets, and scan receipts to stay in control of their finances.',
    'masb0ymas-com':
      'A personal website and blog covering technology, web development, AI, and Web3, with featured projects and tutorials.',
  } satisfies Record<ProjectSlug, string>,

  about: {
    tag: 'About',
    title: `About ${site.name}`,
    description:
      'Montara Project is a software company that handles project-based work across backend, frontend, and DevOps — plus cross-platform desktop apps built with Tauri.',
    missionTitle: 'Our mission',
    mission:
      'We believe great software comes from clear communication, solid engineering, and a focus on real outcomes. Our mission is to help teams and founders bring their ideas to life with reliable, maintainable technology.',
    teamTitle: 'The team',
    portraitAlt: 'Portrait of',
  },

  team: {
    fajri: {
      role: 'Founder & Engineer',
      bio: 'Full-stack engineer focused on building reliable, scalable products end to end.',
    },
    mahdy: {
      role: 'PM & AI Consultant',
      bio: 'Project Manager and AI consultant specializing in machine learning, LLMs, and intelligent system design.',
    },
  } satisfies Record<TeamSlug, { role: string; bio: string }>,

  contact: {
    tag: 'Contact',
    title: "Let's talk",
    description: "Tell us about your project and we'll get back to you as soon as we can.",
    cardTitle: 'Email us directly',
    cardBody:
      "Tell us what you're building, your timeline, and what success looks like — we'll reply with how we can help.",
    responseTime: 'Typical response time: within 48 hours on business days',
  },

  footer: {
    blurb: 'We build backend, frontend, and DevOps solutions.',
    company: 'Company',
    services: 'Services',
    rights: 'All rights reserved.',
    terms: 'Terms of Use',
    privacy: 'Privacy Policy',
  },

  legal: {
    tag: 'Legal',
    effectiveDate: 'Effective date',
    onThisPage: 'On this page',
    questions: 'Questions?',
    questionsBody: `Contact ${site.name} about this document.`,
    // Shown only on translations; empty in the authoritative English version
    translationNotice: '',
    terms: {
      title: 'Terms of Use',
      description:
        'A clear guide to using our website and understanding where project agreements begin.',
      related: 'Read our Terms of Use',
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'What you share, how this website connects to services, and where to ask about your information.',
      related: 'Read our Privacy Policy',
    },
  },

  notFound: {
    title: 'Page not found',
    body: "The page you are looking for doesn't exist or may have moved. Check the URL, or head back to where you came from.",
    backHome: 'Back to home',
    contact: 'Contact us',
  },
}

export type Dictionary = typeof en
