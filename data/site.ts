import { AppWindow, Cloud, Code2, Server, type LucideIcon } from 'lucide-react'

// Language-neutral site data. Every translatable string lives in data/i18n/<locale>.ts,
// keyed by the slugs below so a missing translation fails the type check.

export const asset = (path: string) => `/assets/${path.replace(/^\/+/, '')}`

export const site = {
  name: 'Montara Project',
  // Brand line: stays English in every locale
  tagline: 'Build something different',
  email: 'hello@montaraproject.com',
  socials: [{ label: 'GitHub', href: 'https://github.com/montara-project' }],
}

export type NavKey = 'home' | 'services' | 'projects' | 'about' | 'contact'

export const navLinks: { key: NavKey; href: string }[] = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/services' },
  { key: 'projects', href: '/projects' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
]

export type ServiceSlug = 'backend' | 'frontend' | 'devops' | 'desktop-dev'

export interface Service {
  slug: ServiceSlug
  icon: LucideIcon
  technologies: string[]
  comingSoon?: boolean
}

export const services: Service[] = [
  {
    slug: 'backend',
    icon: Server,
    technologies: ['Node.js', 'Go', 'PostgreSQL', 'Redis', 'GraphQL', 'gRPC'],
  },
  {
    slug: 'frontend',
    icon: Code2,
    technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Vite'],
  },
  {
    slug: 'devops',
    icon: Cloud,
    technologies: ['Docker', 'Kubernetes', 'AWS', 'Cloudflare', 'Terraform', 'GitHub Actions'],
  },
  {
    slug: 'desktop-dev',
    icon: AppWindow,
    technologies: ['Tauri', 'Rust', 'TypeScript', 'React', 'Vite'],
  },
]

export type ProjectSlug =
  | 'tera-router'
  | 'montarapass'
  | 'wadesk'
  | 'veil-app'
  | 'cloudrive'
  | 'overlay-browser-source'
  | 'house-of-wizard'
  | 'moneyflow-id'
  | 'masb0ymas-com'

export interface Project {
  slug: ProjectSlug
  title: string
  category: 'Backend' | 'Frontend' | 'DevOps' | 'Full-Stack' | 'Desktop'
  techStack: string[]
  link?: string
}

export const projects: Project[] = [
  {
    slug: 'tera-router',
    title: 'Tera Router',
    category: 'Full-Stack',
    techStack: ['Go', 'Docker', 'Vinext', 'Cloudflare'],
    link: 'https://terarouter.xyz',
  },
  {
    slug: 'montarapass',
    title: 'MontaraPass',
    category: 'Full-Stack',
    techStack: ['Go', 'Fiber', 'PostgreSQL', 'React', 'Docker'],
    link: 'https://montarapass.com',
  },
  {
    slug: 'wadesk',
    title: 'WaDesk',
    category: 'Desktop',
    techStack: ['Tauri 2', 'Rust', 'TypeScript'],
    link: 'https://github.com/masb0ymas/wa-des-des',
  },
  {
    slug: 'veil-app',
    title: 'Veil App',
    category: 'Desktop',
    techStack: ['Tauri 2', 'Rust', 'TypeScript', 'Vite', 'Bun'],
    link: 'https://github.com/montara-project/veilapp',
  },
  {
    slug: 'cloudrive',
    title: 'Cloudrive',
    category: 'Full-Stack',
    techStack: ['Vinext', 'React', 'Tailwind CSS', 'Go', 'PostgreSQL'],
    link: 'https://cloudrive.us.ci',
  },
  {
    slug: 'overlay-browser-source',
    title: 'Overlay Browser Source',
    category: 'Frontend',
    techStack: ['Tanstack Start', 'React', 'Tailwind CSS', 'OBS'],
    link: 'https://overlay-browser-source.vercel.app',
  },
  {
    slug: 'house-of-wizard',
    title: 'House of Wizard',
    category: 'Full-Stack',
    techStack: ['Vinext', 'React', 'Tailwind CSS', 'Honojs', 'Web3'],
    link: 'https://house-of-wizard.xyz',
  },
  {
    slug: 'moneyflow-id',
    title: 'Moneyflow ID',
    category: 'Full-Stack',
    techStack: ['React', 'Vinext', 'Tailwind CSS', 'Go', 'PostgreSQL'],
    link: 'https://moneyflow.id',
  },
  {
    slug: 'masb0ymas-com',
    title: 'masb0ymas.com',
    category: 'Frontend',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    link: 'https://masb0ymas.com',
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

export type TeamSlug = 'fajri' | 'mahdy'

export const team: { slug: TeamSlug; name: string; photo: string }[] = [
  { slug: 'fajri', name: 'N. Fajri', photo: '/assets/images/teams/fajri.jpeg' },
  { slug: 'mahdy', name: 'Mahdy Arief', photo: '/assets/images/teams/mahdy.jpg' },
]

// ISO dates; rendered per locale with formatDate()
export const legalDates = {
  terms: '2026-10-06',
  privacy: '2026-10-14',
}
