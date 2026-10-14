import { notFound } from 'next/navigation'

// Any unmatched path inside a locale renders that locale's not-found page with a 404 status
export default function CatchAll() {
  notFound()
}
