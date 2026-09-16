import type { Metadata } from 'next'

import PrivacySection from '@/components/block/site/privacy'
import { META, META_URL } from '@/lib/constants/meta'

const title = 'Privacy Policy | Montara Project'
const description =
  'Read the draft Montara Project privacy policy covering website inquiries, hosting, analytics, service providers, and privacy requests.'
const url = `${META_URL}/privacy`

export const metadata: Metadata = {
  ...META,
  title,
  description,
  alternates: { canonical: url },
  robots: { index: false, follow: true },
  openGraph: { ...META.openGraph, title, description, url },
  twitter: { ...META.twitter, title, description },
}

export default function PrivacyPage() {
  return <PrivacySection />
}
