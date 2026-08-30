import { Metadata } from 'next'

import ProjectSection from '@/components/block/site/project'
import { META } from '@/lib/constants/meta'

export const metadata: Metadata = {
  ...META,
  title: 'Projects | Montara Project',
}

export default function ProjectsPage() {
  return <ProjectSection />
}
