'use client'

// 1. Use the absolute path alias (no ../../)
import translations from 'lib/translate/locales/en.json'

// 2. Also use the absolute path for your context
import { TranslateProvider } from 'lib/contexts/translate'

import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Translate({ children }: Props) {
  return (
    <TranslateProvider value={translations}>
      {children}
    </TranslateProvider>
  )
}