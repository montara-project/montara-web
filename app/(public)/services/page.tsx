import { Metadata } from 'next'

import ServiceSection from '@/components/block/site/service'
import { META } from '@/lib/constants/meta'

export const metadata: Metadata = {
  ...META,
  title: 'Services | Montara Project',
}

export default function ServicesPage() {
  return <ServiceSection />
}
