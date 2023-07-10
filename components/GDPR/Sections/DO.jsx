import { useTranslations } from 'next-intl'
import React from 'react'

const DO = () => {
    const t = useTranslations("GDPR")
  return (
    <div>
    <h1> {t("DO_YOU")}</h1> <br />
    <p>{t("doDesc")}</p> <br />
    <ul>
      <li>{t("first")}</li>
      <li>{t("second")}</li>
      <li>{t("third")}</li>
      <li>{t("fourth")}</li>
      <li>{t("fifth")}</li>
      <li>{t("sixth")}</li>
    </ul>
    <br />
    <p>
      {t("seventh")} <span>here.</span>
    </p>
  </div>
  )
}

export default DO