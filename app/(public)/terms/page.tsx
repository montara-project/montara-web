import type { Metadata } from 'next'

import TermsSection from '@/components/block/site/terms'
import { META, META_URL } from '@/lib/constants/meta'

const title = 'Terms of Use | Montara Project'
const description =
  'Read the draft terms for using the Montara Project website, including acceptable use, intellectual property, and client project agreements.'
const url = `${META_URL}/terms`

export const metadata: Metadata = {
  ...META,
  title,
  description,
  alternates: { canonical: url },
  robots: { index: false, follow: true },
  openGraph: { ...META.openGraph, title, description, url },
  twitter: { ...META.twitter, title, description },
}

export default function TermsPage() {
  return <TermsSection />
}
