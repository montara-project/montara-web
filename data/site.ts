import { Cloud, Code2, Gamepad2, Server, type LucideIcon } from 'lucide-react'

export const asset = (path: string) => `/assets/${path}`

export const site = {
  name: 'Montara Project',
  tagline: 'Build something different',
  description:
    'Montara Project is a software company that handles project-based work across backend, frontend, and DevOps — with game development on the horizon.',
  email: 'hello@montaraproject.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'X', href: 'https://x.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
  ],
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
    title: 'Frontend Development',
    tagline: 'Fast, polished interfaces',
    description:
      'We craft responsive, accessible web applications with a focus on performance and developer experience, turning ideas into intuitive products.',
    icon: Code2,
    deliverables: [
      'Web application development',
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
    slug: 'game-dev',
    title: 'Game Development',
    tagline: 'Coming soon',
    description:
      'We are expanding into game development. Stay tuned as we bring the same engineering rigor to interactive experiences.',
    icon: Gamepad2,
    deliverables: [],
    technologies: [],
    comingSoon: true,
  },
]

export interface Project {
  title: string
  category: 'Backend' | 'Frontend' | 'DevOps'
  description: string
  techStack: string[]
  link?: string
}

export const projects: Project[] = [
  {
    title: 'House of Wizard',
    category: 'Frontend',
    description:
      'An education platform for aspiring Web3 data analysts, teaching blockchain analytics, on-chain data analysis, and Web3 insights.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Web3'],
    link: 'https://house-of-wizard.xyz',
  },
  {
    title: 'Moneyflow ID',
    category: 'Frontend',
    description:
      'A cashflow management web app that helps users track income, categorize expenses, create budgets, and scan receipts to stay in control of their finances.',
    techStack: ['React', 'Vite', 'Tailwind CSS'],
    link: 'https://moneyflow.id',
  },
  {
    title: 'Audiopintar',
    category: 'Frontend',
    description:
      'An AI-powered audio platform for audiobooks and podcasts with AI summaries, chat, and smart insights to transform how users learn.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'AI'],
    link: 'https://audiopintar-nu.vercel.app/',
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

export const techStack: string[] = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Go',
  'PostgreSQL',
  'Redis',
  'Docker',
  'Kubernetes',
  'AWS',
  'Cloudflare',
  'Terraform',
]

export interface TeamMember {
  name: string
  role: string
  bio: string
}

export const team: TeamMember[] = [
  {
    name: 'Your Name',
    role: 'Founder & Engineer',
    bio: 'Full-stack engineer focused on building reliable, scalable products end to end.',
  },
  {
    name: 'Team Member',
    role: 'Backend Engineer',
    bio: 'Specializes in APIs, data modeling, and distributed systems.',
  },
  {
    name: 'Team Member',
    role: 'DevOps Engineer',
    bio: 'Automates infrastructure and keeps deployments smooth and observable.',
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
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Backend Development', href: '/services#backend' },
      { label: 'Frontend Development', href: '/services#frontend' },
      { label: 'DevOps & Cloud', href: '/services#devops' },
      { label: 'Game Development', href: '/services#game-dev' },
    ],
  },
]
