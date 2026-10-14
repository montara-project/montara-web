import type { Metadata } from 'next'

import AboutSection from '@/components/block/site/about'
import { pageMeta } from '@/lib/constants/meta'

export const metadata: Metadata = pageMeta(
  'About | Montara Project',
  'Who we are and how we work: a software company building backend, mobile & frontend, DevOps, and Tauri desktop projects.',
  '/about'
)

export default function AboutPage() {
  return <AboutSection />
}
