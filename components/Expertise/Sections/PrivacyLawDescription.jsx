"use client"
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const PrivacyLawDescription = () => {
  const t = useTranslations("Index");
  return (
    <div className={styles.container}>
      <p>{t("privacyDesc1")}</p> <br />
      <p>{t("privacyDesc2")}</p> <br />
      <p>{t("privacyDesc3")}</p> <br />
      <p>{t("privacyDesc4")}</p> <br />
      <p>
        <strong>{t("Typical assignments:")}</strong>
      </p>{" "}
      <br />
      <ul>
        <li>{t("How to process personal data")}</li>
        <li>{t("Draft or review of privacy policies")}</li>
        <li>{t("Privacy impact assessments")}</li>
        <li>{t("Privacy by default and security by design aspects")}</li>
        <li>{t("Legal bases for processing, when consent is needed")}</li>
        <li>{t("What information to provide to data subjects")}</li>
        <li>{t("How to handle cookies")}</li>
      </ul>
    </div>
  );
};

export default PrivacyLawDescription;
