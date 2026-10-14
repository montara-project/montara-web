import type { Metadata } from 'next'

import ProjectSection from '@/components/block/site/project'
import { pageMeta } from '@/lib/constants/meta'

export const metadata: Metadata = pageMeta(
  'Projects | Montara Project',
  'A selection of the products and systems Montara Project has designed, built, and shipped.',
  '/projects'
)

export default function ProjectsPage() {
  return <ProjectSection />
}
