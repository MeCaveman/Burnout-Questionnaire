'use client'

import { useBurnout } from 'lib/contexts/burnout'
import { useModal } from 'lib/contexts/modal'
import { useTranslate } from 'lib/contexts/translate'
import Modal from 'components/modal'
import { BurnoutValues } from 'lib/burnout/types'

export default function ModalIndexPage() {
  const { show, setShow } = useModal()
  const { burnoutResults } = useBurnout()
  const { resultTranslate } = useTranslate()

  const getBurnoutLevel = (value: BurnoutValues): string => {
    return resultTranslate.burnoutLevels[value]
  }

  return (
    <Modal
      show={show}
      onClose={() => setShow(false)}
      emotionalExhaustionResult={burnoutResults.emotionalExhaustion.result}
      emotionalExhaustionValue={
        getBurnoutLevel(burnoutResults.emotionalExhaustion.value as BurnoutValues)
      }
      personalFulfillmentResult={burnoutResults.personalFulfillment.result}
      personalFulfillmentValue={
        getBurnoutLevel(burnoutResults.personalFulfillment.value as BurnoutValues)
      }
      depersonalisationResult={burnoutResults.depersonalisation.result}
      depersonalisationValue={
        getBurnoutLevel(burnoutResults.depersonalisation.value as BurnoutValues)
      }
    />
  )
}
