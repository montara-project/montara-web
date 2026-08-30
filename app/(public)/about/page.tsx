import { Metadata } from 'next'

import AboutSection from '@/components/block/site/about'
import { META } from '@/lib/constants/meta'

export const metadata: Metadata = {
  ...META,
  title: 'About | Montara Project',
}

export default function AboutPage() {
  return <AboutSection />
}
