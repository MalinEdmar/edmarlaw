import { useTranslations } from 'next-intl'
import React from 'react'

const Data = () => {
    const {t} = useTranslations("GDPR")
  return (
    <div>Data</div>
  )
}

export default Data