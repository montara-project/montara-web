import { Metadata } from 'next'

import ContactSection from '@/components/block/site/contact'
import { META } from '@/lib/constants/meta'

export const metadata: Metadata = {
  ...META,
  title: 'Contact | Montara Project',
}

export default function ContactPage() {
  return <ContactSection />
}
