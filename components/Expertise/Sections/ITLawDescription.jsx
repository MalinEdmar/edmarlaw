"use client"
import React from "react";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
const ITLawDescription = () => {
  const t = useTranslations("Index");
  return (
    <div className={styles.container}>
      <p>{t("itDescription")}</p>
      <br />
      <p>
        <strong>{t("Typical assignments:")}</strong>
      </p>
      <br />
      <ul>
        <li>{t("Licenses")}</li>
        <li>{t("Terms of Use, Terms of Service")}</li>
        <li>{t("Privacy assessments")}</li>
        <li>{t("Privacy terms")}</li>
        <li>{t("Outsourcing")}</li>
        <li>{t("Joint Development")}</li>
        <li>{t("Online Services (PaaS, SaaS, cloud services etc)")}</li>
        <li>{t("System Deliveries")}</li>
        <li>{t("E-commerce")}</li>
        <li>{t("Maintenance of software, IoT, IT systems")}</li>
        <li>{t("Copyright and other intellectual property rights")}</li>
        <li>{t("Processing, including transfer of Personal Data")}</li>
        <li>{t("Domain names")}</li>
        <li>{t("Trademark rights")}</li>
      </ul>
      <br />
      <p>
        {t("itDescription2")}
      </p>
      <br />
      <p>
      {t("itDescription3")}
      </p>
    </div>
  );
};

export default ITLawDescription;
