import { PropsWithChildren } from 'react'

import PublicLayout from '@/components/layouts/public/layout'

export default function PublicWrapperLayout({ children }: PropsWithChildren) {
  return <PublicLayout>{children}</PublicLayout>
}
