'use client'

// 1. Import all three JSON files using the correct relative paths
import home from '../../lib/translate/locales/en/home.json'
import result from '../../lib/translate/locales/en/result.json'
import common from '../../lib/translate/locales/en/common.json'

import { ReactNode } from 'react'
import { TranslateProvider } from '../../lib/contexts/translate'

// 2. Combine the imports into the single 'translations' object
const translations = {
  home,
  result,
  common
}

type Props = {
  children: ReactNode
}

export default function Translate({ children }: Props) {
  // 3. Pass the newly combined object to the provider
  return (
    <TranslateProvider value={translations}>
      {children}
    </TranslateProvider>
  )
}