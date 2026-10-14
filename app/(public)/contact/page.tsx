import type { Metadata } from 'next'

import ContactSection from '@/components/block/site/contact'
import { pageMeta } from '@/lib/constants/meta'

export const metadata: Metadata = pageMeta(
  'Contact | Montara Project',
  'Tell us about your project. Email Montara Project and expect a reply within 48 hours on business days.',
  '/contact'
)

export default function ContactPage() {
  return <ContactSection />
}
