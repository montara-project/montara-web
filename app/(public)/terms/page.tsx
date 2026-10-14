import type { Metadata } from 'next'

import TermsSection from '@/components/block/site/terms'
import { pageMeta } from '@/lib/constants/meta'

export const metadata: Metadata = {
  ...pageMeta(
    'Terms of Use | Montara Project',
    'The terms for using the Montara Project website, including acceptable use, intellectual property, and client project agreements.',
    '/terms'
  ),
  robots: { index: false, follow: true },
}

export default function TermsPage() {
  return <TermsSection />
}
