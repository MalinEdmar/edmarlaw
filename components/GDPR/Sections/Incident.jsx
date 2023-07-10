import { useTranslations } from 'next-intl'
import React from 'react'

const Incident = () => {
    const t = useTranslations("GDPR")
  return (
    <div>
    <h1>{t("Incident Management")}</h1>
    <br />
    <p>{t("incident1")}</p>
    <br />
    <p>{t("incident2")}</p>
  </div>
  )
}

export default Incident