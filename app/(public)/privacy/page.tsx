import type { Metadata } from 'next'

import PrivacySection from '@/components/block/site/privacy'
import { pageMeta } from '@/lib/constants/meta'

export const metadata: Metadata = {
  ...pageMeta(
    'Privacy Policy | Montara Project',
    'How the Montara Project website handles information, covering website inquiries, hosting, analytics, service providers, and privacy requests.',
    '/privacy'
  ),
  robots: { index: false, follow: true },
}

export default function PrivacyPage() {
  return <PrivacySection />
}
