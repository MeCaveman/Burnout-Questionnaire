'use client'

// 1. Import all three JSON files
import home from '../../lib/translate/locales/en/home.json'
import result from '../../lib/translate/locales/en/result.json'
import common from '../../lib/translate/locales/en/common.json'

import { ReactNode } from 'react'
// 2. Use the absolute path for the .tsx file (which tsconfig handles)
import { TranslateProvider } from 'lib/contexts/translate'

// 3. Combine the imports
const translations = {
  home,
  result,
  common
}

type Props = {
  children: ReactNode
}

export default function Translate({ children }: Props) {
  return (
    // 4. Change 'value' to 'translations'
    <TranslateProvider translations={translations}>
      {children}
    </TranslateProvider>
  )
}