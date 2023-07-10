import { useTranslations } from 'next-intl'
import React from 'react'

const WhatGDPR = () => {
    const t = useTranslations("GDPR")
  return (
    <div>
        <h1> {t("What is GDPR?")} </h1> <br />
        <p>
          {t("what1")}
          <br /> <br /> {t("what2")}
        </p>
      </div>
  )
}

export default WhatGDPR