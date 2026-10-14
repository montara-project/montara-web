import { AppWindow, Cloud, Code2, Server, type LucideIcon } from 'lucide-react'

export const asset = (path: string) => `/assets/${path.replace(/^\/+/, '')}`

export const site = {
  name: 'Montara Project',
  tagline: 'Build something different',
  description:
    'Montara Project is a software company that handles project-based work across backend, frontend, and DevOps — plus cross-platform desktop apps built with Tauri.',
  email: 'hello@montaraproject.com',
  socials: [{ label: 'GitHub', href: 'https://github.com/montara-project' }],
}

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export interface Service {
  slug: string
  title: string
  tagline: string
  description: string
  icon: LucideIcon
  deliverables: string[]
  technologies: string[]
  comingSoon?: boolean
}

export const services: Service[] = [
  {
    slug: 'backend',
    title: 'Backend Development',
    tagline: 'Robust APIs & services',
    description:
      'We design and build reliable server-side systems — from REST and GraphQL APIs to background jobs and data pipelines — that scale with your product.',
    icon: Server,
    deliverables: [
      'API design & development',
      'Database modeling & optimization',
      'Authentication & authorization',
      'Third-party integrations',
      'Microservices & event-driven systems',
    ],
    technologies: ['Node.js', 'Go', 'PostgreSQL', 'Redis', 'GraphQL', 'gRPC'],
  },
  {
    slug: 'frontend',
    title: 'Mobile & Frontend Development',
    tagline: 'Fast, polished interfaces on web and mobile',
    description:
      'We craft responsive, accessible web and mobile applications with a focus on performance and developer experience, turning ideas into intuitive products.',
    icon: Code2,
    deliverables: [
      'Web application development',
      'Mobile app development for iOS & Android',
      'Design system & UI implementation',
      'Performance optimization',
      'Responsive & accessible UI',
      'Progressive web apps',
    ],
    technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Vite'],
  },
  {
    slug: 'devops',
    title: 'DevOps & Cloud',
    tagline: 'Ship with confidence',
    description:
      'We automate the path from code to production with CI/CD, infrastructure as code, and observability so your team can ship faster and safer.',
    icon: Cloud,
    deliverables: [
      'CI/CD pipeline setup',
      'Cloud infrastructure & IaC',
      'Containerization & orchestration',
      'Monitoring & alerting',
      'Security & cost optimization',
    ],
    technologies: ['Docker', 'Kubernetes', 'AWS', 'Cloudflare', 'Terraform', 'GitHub Actions'],
  },
  {
    slug: 'desktop-dev',
    title: 'Desktop Development',
    tagline: 'Cross-platform desktop apps',
    description:
      'We build fast, lightweight desktop applications with Tauri — native performance and tiny binaries, powered by the web technologies your team already knows.',
    icon: AppWindow,
    deliverables: [
      'Cross-platform apps for macOS, Windows, & Linux',
      'Tauri app architecture & development',
      'Native system integrations (tray, notifications, filesystem)',
      'Installer packaging & auto-updates',
      'Electron to Tauri migration',
    ],
    technologies: ['Tauri', 'Rust', 'TypeScript', 'React', 'Vite'],
  },
]

export interface Project {
  title: string
  category: 'Backend' | 'Frontend' | 'DevOps' | 'Full-Stack' | 'Desktop'
  description: string
  techStack: string[]
  link?: string
}

export const projects: Project[] = [
  {
    title: 'Tera Router',
    category: 'Full-Stack',
    description:
      'A self-hosted gateway that puts many AI providers behind one endpoint. It translates between OpenAI Chat, Anthropic Messages, and Responses formats, routes across accounts with fallback, and adds per-key allowlists, guardrails, and usage analytics — shipped as a single Go container.',
    techStack: ['Go', 'Docker', 'Vinext', 'Cloudflare'],
    link: 'https://terarouter.xyz',
  },
  {
    title: 'MontaraPass',
    category: 'Full-Stack',
    description:
      'A zero-knowledge, end-to-end encrypted password manager you can self-host. Logins are encrypted in the browser, so the server only ever stores ciphertext and wrapped keys — with a browser extension, role-based sharing, and key rotation on revoke.',
    techStack: ['Go', 'Fiber', 'PostgreSQL', 'React', 'Docker'],
    link: 'https://montarapass.com',
  },
  {
    title: 'WaDesk',
    category: 'Desktop',
    description:
      'A desktop shell that brings WhatsApp Web, Telegram Web, and Slack into one window. Each account runs in its own isolated native webview, stays loaded in the background, and shows its unread count in a side dock.',
    techStack: ['Tauri 2', 'Rust', 'TypeScript'],
    link: 'https://github.com/masb0ymas/wa-des-des',
  },
  {
    title: 'Veil App',
    category: 'Desktop',
    description:
      'A lightweight macOS menu bar app that keeps your menu bar tidy — hide any icon with one click, monitor live memory usage, and activate, quit, or force-quit apps from a single popover. Ships as a universal binary for Intel and Apple Silicon with auto-update.',
    techStack: ['Tauri 2', 'Rust', 'TypeScript', 'Vite', 'Bun'],
    link: 'https://github.com/montara-project/veilapp',
  },
  {
    title: 'Cloudrive',
    category: 'Full-Stack',
    description:
      'A unified cloud drive that brings Google Drive, Dropbox, OneDrive, S3, and more into one searchable workspace with live two-way sync, zero-copy indexing, and a single permissions model.',
    techStack: ['Vinext', 'React', 'Tailwind CSS', 'Go', 'PostgreSQL'],
    link: 'https://cloudrive.us.ci',
  },
  {
    title: 'Overlay Browser Source',
    category: 'Frontend',
    description:
      'A free, no-account OBS & Streamlabs browser source that displays animated donation QR codes (Tako, Saweria, Trakteer, Ko-fi, and more) with rotating or grid layouts, custom transitions, and transparent backgrounds.',
    techStack: ['Tanstack Start', 'React', 'Tailwind CSS', 'OBS'],
    link: 'https://overlay-browser-source.vercel.app',
  },
  {
    title: 'House of Wizard',
    category: 'Full-Stack',
    description:
      'An education platform for aspiring Web3 data analysts, teaching blockchain analytics, on-chain data analysis, and Web3 insights.',
    techStack: ['Vinext', 'React', 'Tailwind CSS', 'Honojs', 'Web3'],
    link: 'https://house-of-wizard.xyz',
  },
  {
    title: 'Moneyflow ID',
    category: 'Full-Stack',
    description:
      'A cashflow management web app that helps users track income, categorize expenses, create budgets, and scan receipts to stay in control of their finances.',
    techStack: ['React', 'Vinext', 'Tailwind CSS', 'Go', 'PostgreSQL'],
    link: 'https://moneyflow.id',
  },
  {
    title: 'masb0ymas.com',
    category: 'Frontend',
    description:
      'A personal website and blog covering technology, web development, AI, and Web3, with featured projects and tutorials.',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    link: 'https://masb0ymas.com',
  },
]

export interface ProcessStep {
  title: string
  description: string
}

export const process: ProcessStep[] = [
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
]

// Derived from the project stacks so the list never drifts from real work.
// Ordered by how many projects use each technology; version suffixes ("Tauri 2") are folded.
export const techStack: string[] = (() => {
  const counts = new Map<string, number>()
  for (const tech of projects.flatMap((project) => project.techStack)) {
    const name = tech.replace(/\s+\d+$/, '')
    counts.set(name, (counts.get(name) ?? 0) + 1)
  }
  return [...counts].sort((a, b) => b[1] - a[1]).map(([name]) => name)
})()

export interface TeamMember {
  name: string
  role: string
  bio: string
  photo: string
}

export const team: TeamMember[] = [
  {
    name: 'N. Fajri',
    role: 'Founder & Engineer',
    bio: 'Full-stack engineer focused on building reliable, scalable products end to end.',
    photo: '/assets/images/teams/fajri.jpeg',
  },
  {
    name: 'Mahdy Arief',
    role: 'PM & AI Consultant',
    bio: 'Project Manager and AI consultant specializing in machine learning, LLMs, and intelligent system design.',
    photo: '/assets/images/teams/mahdy.jpg',
  },
]

export interface FooterColumn {
  title: string
  links: NavLink[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Projects', href: '/projects' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Backend Development', href: '/services#backend' },
      { label: 'Mobile & Frontend Development', href: '/services#frontend' },
      { label: 'DevOps & Cloud', href: '/services#devops' },
      { label: 'Desktop Development', href: '/services#desktop-dev' },
    ],
  },
]
