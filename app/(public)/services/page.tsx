import type { Metadata } from 'next'

import ServiceSection from '@/components/block/site/service'
import { pageMeta } from '@/lib/constants/meta'

export const metadata: Metadata = pageMeta(
  'Services | Montara Project',
  'Backend, mobile & frontend, DevOps & cloud, and cross-platform desktop development with Tauri — what each service includes and the technologies we use.',
  '/services'
)

export default function ServicesPage() {
  return <ServiceSection />
}
